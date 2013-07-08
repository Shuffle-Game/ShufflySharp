using System;
using System.Collections.Generic;
using System.Runtime.CompilerServices;
using CommonLibraries;
using Models;
namespace global
{
    [ScriptName("CardGame")]
    public class GameCardGame
    {
        [IntrinsicProperty]
        public bool Emulating { get; set; }
        [IntrinsicProperty]
        public string Name { get; set; }
        [IntrinsicProperty]
        public int EmulatedAnswerIndex { get; set; }
        [IntrinsicProperty]
        public List<CardGameTableSpace> Spaces { get; set; }
        [IntrinsicProperty]
        public List<GameCardGameTextArea> TextAreas { get; set; }
        [IntrinsicProperty]
        public Size Size { get; set; }
        [IntrinsicProperty]
        public List<CardGameAnswer> EmulatedAnswers { get; set; }
        [IntrinsicProperty]
        public List<CardGameUser> Users { get; set; }
        [IntrinsicProperty]
        public CardGamePile Deck { get; set; }
        [IntrinsicProperty]
        public int NumberOfCards { get; set; }
        [IntrinsicProperty]
        public int NumberOfJokers { get; set; }

        public GameCardGame( )
        {
            Spaces = new List<CardGameTableSpace>();
            TextAreas = new List<GameCardGameTextArea>();
            EmulatedAnswers = new List<CardGameAnswer>();
            Users = new List<CardGameUser>(); 
            Deck = new CardGamePile("deck"); 
        }

        public void ConfigurationCompleted()
        {
            for (var i = 0; i < NumberOfCards; i++)
            {
                Deck.Cards.Add(new CardGameCard(i % 13, (int)Math.Floor(i / 13d)));
            }
            for (var i = 0; i < NumberOfJokers; i++)
            {
                Deck.Cards.Add(new CardGameCard(0, 0));
            }
             
        }

        public void SetEmulatedAnswers(List<CardGameAnswer> answers)
        {
            EmulatedAnswers = answers;
        }

        public void SetPlayers(List<UserLogicModel> players)
        {
            Users = new List<CardGameUser>();

            if (players == null || players.Count == 0)
                return;
            if (players.Count > 6)
                players.RemoveRange(6, players.Count - 6);
            for (var j = 0; j < players.Count; j++)
            {
                Users.Add(new CardGameUser(players[j].UserName));
            }
        }
        public CardGameTableSpace GetSpaceByName(string name)
        {
            foreach (var cardGameTableSpace in Spaces)
            {
                if (cardGameTableSpace.Name.ToLower() == name.ToLower())
                {
                    return cardGameTableSpace;
                }
            }
            return null;
        }
        public GameCardGameTextArea GetTextByName(string name)
        {
            foreach (var gameCardGameTextArea in TextAreas)
            { 
                if (gameCardGameTextArea.Name.ToLower() == name.ToLower())
                {
                    return gameCardGameTextArea;
                }
            }
            return null;
        }

        //arg0: cards per player
        //arg1: CardState
        //return undefined 
        public void DealCards(int numberOfCards, int state) {}
    }
}