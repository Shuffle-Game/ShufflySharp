using System;
using System.Collections.Generic;
using System.Runtime.CompilerServices;
using Client.Services;
using CommonLibraries;
using Models.SiteManagerModels.Game;

namespace Client.Scope.Controller
{
    public class TestGameControllerScope : ManagedScope
    {
        [IntrinsicProperty]
        public TestGameControllerScopeModel Model { get; set; }
    }

    [Serializable]
    public class TestGameControllerScopeModel
    {
        public GameModel Game { get; set; }
        public Point Scale { get; set; }
        public Action MoveCard { get; set; }
        public Action AnimateCard { get; set; }
        public GameEditorSelectionScopeModel Selection { get; set; }
        public Func<GameSpaceModel, List<GameLayoutScenarioCard>> GetCardsFromScenario { get; set; }
    }
}