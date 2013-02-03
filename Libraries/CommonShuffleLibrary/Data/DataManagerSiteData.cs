using System;
using System.Collections.Generic;
using Models;
using Models.SiteManagerModels;
namespace CommonShuffleLibrary.Data
{
    public class DataManagerSiteData
    {
        private DataManager manager;

        public DataManagerSiteData(DataManager manager)
        {
            this.manager = manager;
        }

        public void User_Insert(UserModelData data)
        {
            manager.client.Collection("User", (err, collection) => { collection.Insert(data); });
        }

        public void User_GetFirstByUsernamePassword(string username, string password, Action<List<UserModelData>> results)
        {
            manager.client.Collection("User",
                                      (err, collection) => {
                                          var j = new {username, password};

                                          MongoHelper.Find<UserModelData>(collection, j, (a, b) => results(b));
                                      });
        }

        public void Room_GetRoomByUser(UserLogicModel user, Action<RoomData> results)
        {
            manager.client.Collection("Room",
                                      (err, collection) => {
                                          JsDictionary<string, object> j = new JsDictionary<string, object>();
                                          j["players.userName"] = user.UserName;
                                          MongoHelper.Find<RoomData>(collection, j, (a, b) => results(b.Count > 0 ? b[0] : null));
                                      });
        }

        public void Room_GetAllByGameType(string gameType, Action<List<RoomData>> results)
        {
            manager.client.Collection("Room",
                                      (err, collection) => {
                                          var j = new {gameType};
                                          MongoHelper.Find<RoomData>(collection, j, (a, b) => results(b));
                                      });
        }

        public void Room_CreateRoom(string gameType, string roomName, UserLogicModel user, Action<RoomData> onRoomCreated)
        {
            RoomData rd = new RoomData(gameType, roomName, roomName + "RoomName", new List<UserLogicModel>() {user});
            manager.client.Collection("Room",
                                      (err, collection) => {
                                          collection.Insert(rd);
                                          onRoomCreated(rd);
                                      });
        }

        public void Room_JoinRoom(string gameType, string roomName, UserLogicModel user, Action<RoomData> onRoomJoined)
        {
            manager.client.Collection("Room",
                                      (err, collection) => {
                                          var j = new {gameType, roomName};
                                          MongoHelper.Find<RoomData>(collection,
                                                                     j,
                                                                     (a, b) => {
                                                                         if (b.Count == 0)
                                                                             onRoomJoined(null);
                                                                         else {
                                                                             var roomData = b[0];
                                                                             roomData.Players.Add(user);
                                                                             Room_UpdateRoom(roomData);
                                                                             onRoomJoined(roomData);
                                                                         }
                                                                     });
                                      });
        }

        public void Room_GetByRoomName(string gameType, string roomName, Action<RoomData> results)
        {
            manager.client.Collection("Room",
                                      (err, collection) => {
                                          var j = new {gameType, roomName};
                                          MongoHelper.Find<RoomData>(collection, j, (a, b) => results(b.Count > 0 ? b[0] : null));
                                      });
        }

        public void Room_UpdateRoom(RoomData room)
        {
            manager.client.Collection("Room", (err, collection) => { collection.Save(room); });
        }

        public void Room_DeleteRoom(RoomData room)
        {
            manager.client.Collection("Room", (err, collection) => { collection.Remove(new {_id = room.ID}); });
        }
    }
}