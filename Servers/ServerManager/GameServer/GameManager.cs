using System;
using System.Collections.Generic;
using System.Security.Permissions;
using CommonLibraries;
using CommonShuffleLibrary;
using DataModels.SiteManagerModels.Game;
using Models;
using Models.GameManagerModels;
using NodeLibraries.Common.Logging;
using NodeLibraries.Fibers;
using NodeLibraries.NodeJS;
using ServerManager.GameServer.Models;
using global;
namespace ServerManager.GameServer
{
    public class GameManager
    {
        private int QUEUEPERTICK = 1;
        private List<Tuple<UserLogicModel, GameAnswerQuestionModel>> answerQueue = new List<Tuple<UserLogicModel, GameAnswerQuestionModel>>();
        private JsDictionary<string, GameObject> cachedGames;
        private DataManager dataManager;
        private GameData gameData;
        private GameClientManager myServerManager;
        private List<GameRoom> rooms;
        private int skipped__;
        private DateTime startTime = new DateTime();
        private int total__;
        private bool verbose = false;

        public GameManager(string gameServerIndex)
        {
            myServerManager = new GameClientManager(gameServerIndex);
            myServerManager.OnGameCreate += CreateGame;
            myServerManager.OnUserAnswerQuestion += UserAnswerQuestion;
            myServerManager.OnUserDisconnect += UserDisconnect;
            myServerManager.OnUserLeave += UserLeave;

            rooms = new List<GameRoom>();
            cachedGames = new JsDictionary<string, GameObject>();
            gameData = new GameData();
            dataManager = new DataManager();
            Global.SetInterval(flushQueue, 50);
        }

        private void UserDisconnect(UserLogicModel user, UserDisconnectModel data)
        {
            foreach (var gameRoom in rooms)
            {
                foreach (var player in gameRoom.Players)
                {
                    if (player.UserName == user.UserName)
                    {
                        Console.Log("22User Left: " + player.UserName);
                        gameRoom.PlayerLeave(player);
                        break;
                    }
                }
            }
        }

        private void UserLeave(UserLogicModel user, UserLeaveModel data)
        {
            foreach (var gameRoom in rooms)
            {
                foreach (var player in gameRoom.Players)
                {
                    if (player.UserName == user.UserName)
                    {
                        Console.Log("11User Left: " + player.UserName);

                        gameRoom.PlayerLeave(player);
                        break;
                    }
                }
            }
        }

        public void CreateGame(GameCreateRequestModel data)
        {

            Logger.Log("--game created ", LogLevel.DebugInformation);
            dataManager.SiteData.Game_GetGamesByName(data.GameType, (game) =>
                                                                    {
                                                                        if (game == null)
                                                                        {
                                                                            Logger.Log("--game not found " + game.Name, LogLevel.DebugInformation);
                                                                            return;
                                                                        }
                                                                        Logger.Log("--game found " + game.Name, LogLevel.DebugInformation);

                                                                        GameRoom room;
                                                                        rooms.Add(room = new GameRoom());
                                                                        room.MaxUsers = data.Players.Count; //todo idk
                                                                        room.GameType = data.GameType;
                                                                        room.Started = false;
                                                                        room.Players.AddRange(data.Players);

                                                                        GameObject gameObject;
                                                                        if (cachedGames.ContainsKey(room.GameType))
                                                                            gameObject = cachedGames[room.GameType];
                                                                        else
                                                                            gameObject = cachedGames[room.GameType] = Global.Require<GameObject>(string.Format("./Games/{0}/app.js", room.GameType));//todo game.GameCode.Code

                                                                        room.Fiber = CreateFiber(room, gameObject, true, game);
                                                                        room.Unwind = players =>
                                                                        {
                                                                            gameData.FinishedGames++;
                                                                            Logger.Log("--game closed", LogLevel.DebugInformation);
                                                                        };
                                                                        room.PlayerLeave += (player) =>
                                                                        {
                                                                            //todo laeve player api in the game
                                                                            ////i think an action that it calls

                                                                            room.Players.Remove(player);
                                                                            room.PlayersLeft.Add(player);
                                                                        };

                                                                        foreach (var userLogicModel in room.Players)
                                                                        {
                                                                            myServerManager.RegisterGameServer(userLogicModel);
                                                                        }

                                                                        startGame(room);
                                                                    });
        }

        private void startGame(GameRoom room)
        {
            myServerManager.SendGameStarted(room);

            room.Started = true;

            var answer = room.Fiber.Run<FiberYieldResponse>(room.Players);
            processGameResponse(room, answer);
        }

        public void UserAnswerQuestion(UserLogicModel user, GameAnswerQuestionModel data)
        {
            answerQueue.Add(Tuple.Create(user, data));
        }

        private void flushQueue()
        {
            var ind = 0;

            for (ind = 0; answerQueue.Count > 0 && ind < QUEUEPERTICK; ind++)
            {
                Logger.Log("-- w pop", LogLevel.Information);

                var arg2 = answerQueue[0];
                answerQueue.RemoveAt(0);
                var data = arg2;

                var room = getRoomByPlayer(arg2.Item1.UserName);
                if (room == null)
                {
                    Logger.Log("Room not found for user: " + arg2.Item1.UserName, LogLevel.Error);
                    continue;
                    throw new Exception("idk");
                }

                var dict = new CardGameAnswer();
                dict.Value = data.Item2.Answer;
                room.EmulatedAnswers.Add(dict);
                var answ = room.Fiber.Run<FiberYieldResponse>(dict);

                //dataManager.GameData.Insert(new GameInfoModel() {GameName = room.Name, AnswerIndex = answ.Contents});
                processGameResponse(room, answ);
            }

            if (ind == 0)
                skipped__++;
            else
            {
                total__ += ind;
                if ((total__ + skipped__) % 20 == 0)
                {
                    var dt = new DateTime();
                    Logger.Log(string.Format("{0} =  tot: __{1}__ + shift: {2} + T: {3} + QSize: {4} + T Rooms: {5} + Per SecondL {6}",
                                             myServerManager.GameServerIndex.Substring(0, 19),
                                             (total__ + skipped__),
                                             ind,
                                             total__,
                                             answerQueue.Count,
                                             rooms.Count,
                                             (gameData.TotalQuestionsAnswered / ((dt.GetTime() - startTime.GetTime()) / 1000d))),
                               LogLevel.DebugInformation);
                }
            }
        }

        private Fiber<List<UserLogicModel>> CreateFiber(GameRoom room, GameObject gameObject, bool emulating, GameDataModel game)
        {
            return new Fiber<List<UserLogicModel>>(players =>
            {
                if (players == null || players.Count == 0) return true;
                room.Players = players;
                Logger.Log("game started", LogLevel.Information);
                GameObject sev = null;

                Script.Eval("sev = new gameObject();");
                room.PlayersLeft = new List<UserLogicModel>();
                sev.CardGame.Emulating = emulating;
                room.Game = sev;
                sev.CardGame.SetEmulatedAnswers(room.EmulatedAnswers);
                sev.CardGame.SetPlayers(players);
                sev.CardGame.Size = new Size(game.GameLayout.Width, game.GameLayout.Height);

                foreach (var gameTextModel in game.GameLayout.Texts)
                {
                    sev.CardGame.TextAreas.Add(new GameCardGameTextArea(new GameCardGameTextAreaOptions()
                    {
                        X = gameTextModel.Left,
                        Y = gameTextModel.Top, 
                        Name = gameTextModel.Name,
                        Text = gameTextModel.Text,

                    }));
                }


                foreach (var gameSpaceModel in game.GameLayout.Spaces)
                {
                    sev.CardGame.Spaces.Add(new CardGameTableSpace(new CardGameTableSpaceOptions()
                    {
                        X = gameSpaceModel.Left,
                        Y = gameSpaceModel.Top,
                        Height = gameSpaceModel.Height,
                        Width = gameSpaceModel.Width,
                        Name = gameSpaceModel.Name,
                        Vertical = gameSpaceModel.Vertical,

                    }));
                }

                gameData.TotalGames++;
                gameData.TotalPlayers += players.Count;
                sev.CardGame.EmulatedAnswerIndex = 0;
                
                //todo to data
                sev.CardGame.NumberOfCards = 52;
                sev.CardGame.NumberOfJokers = 0;

                sev.CardGame.ConfigurationCompleted();
                sev.Constructor();
                sev.RunGame();
                Logger.Log("Doneski", LogLevel.DebugInformation);

                room.Unwind(players);
                return true;
            });
        }

        private void processGameResponse(GameRoom room, FiberYieldResponse response)
        {
            if (response == null)
            {
                Logger.Log("game request over", LogLevel.DebugInformation);

                myServerManager.SendGameOver(room);
                room.Fiber.Run<FiberYieldResponse>();
                rooms.Remove(room);
                room.Unwind(room.Players);
                return;
            }

            switch (response.Type)
            {
                case FiberYieldResponseType.AskQuestion:
                    askPlayerQuestion(room, response);
                    break;
                case FiberYieldResponseType.PlayersLeft:
                    didPlayersLeave(room, response);
                    break;
                case FiberYieldResponseType.GameOver:
                    gameOver(room);
                    break;
                case FiberYieldResponseType.Log:
                    gameNoop(room);
                    break;
                case FiberYieldResponseType.Break:
                    gameNoop(room);
                    break;
            }
        }

        private void didPlayersLeave(GameRoom room, FiberYieldResponse response)
        {
            room.Fiber.Run<FiberYieldResponse>(room.PlayersLeft);

            room.PlayersLeft.Clear();
        }


        private void gameNoop(GameRoom room)
        {
            var answ2 = room.Fiber.Run<FiberYieldResponse>();
            processGameResponse(room, answ2);

        }

        private void gameOver(GameRoom room)
        {
            Logger.Log("game real over", LogLevel.DebugInformation);

            myServerManager.SendUpdateState(room);

            myServerManager.SendGameOver(room);
            room.Fiber.Reset();

            rooms.Remove(room);
        }

        private void askPlayerQuestion(GameRoom room, FiberYieldResponse answer)
        {
            gameData.TotalQuestionsAnswered++;

            var answ = answer.Question;

            if (answ == null)
            {
                Logger.Log("game question over", LogLevel.DebugInformation);
                myServerManager.SendGameOver(room);
                room.Fiber.Run<FiberYieldResponse>();
                //     profiler.takeSnapshot('game over ' + room.roomID);
                return;
            }
            askQuestion(answ, room);
            //Logger.Log(gameData.toString());

            var dt = new DateTime();
            var then = dt.GetMilliseconds();
            //Logger.Log(then - now + " Milliseconds");
            //  Logger.Log(gameData.TotalQuestionsAnswered / ((dt.GetTime() - startTime.GetTime()) / 1000d) + " Answers per seconds", LogLevel.DebugInformation);
        }

        private void askQuestion(CardGameQuestion answ, GameRoom room)
        {
            var user = getPlayerByUsername(room, answ.User.UserName);
            myServerManager.SendAskQuestion(user, new GameSendAnswerModel(answ.Question, answ.Answers));
            myServerManager.SendUpdateState(room);

            if (verbose)
            {
                Logger.Log(answ.User.UserName + ": " + answ.Question + "   ", LogLevel.Information);
                var ind = 0;
                foreach (var answer in answ.Answers)
                {
                    Logger.Log("     " + ind++ + ": " + answer, LogLevel.Information);
                }
            }
        }

        private UserLogicModel getPlayerByUsername(GameRoom room, string userName)
        {
            foreach (var player in room.Players)
            {
                if (player.UserName == userName)
                    return player;
            }
            return null;
        }

        private GameRoom getRoomByPlayer(string userName)
        {
            foreach (var gameRoom in rooms)
            {
                foreach (var userLogicModel in gameRoom.Players)
                {
                    if (userLogicModel.UserName == userName)
                        return gameRoom;
                }
            }
            return null;
        }

    }
}