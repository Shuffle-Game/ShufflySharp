﻿using System.Html;
using CardGameUI.Scope;
using CardGameUI.Services;
using CardGameUI.Util;
using Client;
using Models.SiteManagerModels;
using WebLibraries.ShuffUI.ShuffUI;
namespace CardGameUI.Controllers
{
    internal class CreateRoomController
    {
        private readonly CreateRoomScope myScope;
        private readonly UIManagerService myUIManager;

        public CreateRoomController(CreateRoomScope scope, UIManagerService uiManager)
        {
            myScope = scope;
            myScope.Visible = false;
            myUIManager = uiManager;
            myScope.Model = new CreateRoomModel();

            myScope.Model.WindowClosed = () =>
            {
                myScope.SwingAway(SwingDirection.TopRight, false);
                myScope.Visible = false;
            };
            myScope.Model.CreateRoom = CreateRoomFn;
            uiManager.OpenCreateRoomDialog += () => {
                                                  myScope.Visible = true;
                                                  myScope.SwingAway(SwingDirection.BottomLeft, true);
                                                  myScope.SwingBack();
                                              };
        }

        private void CreateRoomFn()
        {
            myScope.SwingAway(SwingDirection.TopRight,false);
            myUIManager.CreateRoom(myScope.Model.RoomName);
        }
         
    }
}