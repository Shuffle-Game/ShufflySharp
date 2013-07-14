using System.Runtime.CompilerServices;
using Client.Scope.Controller;
using Models.SiteManagerModels.Game;

namespace Client.Scope.Directive
{
    public class TestAreaScope : TestGameControllerScope
    {
        [IntrinsicProperty]
        public GameAreaModel Area { get; set; }

        [IntrinsicProperty]
        public dynamic AreaStyle { get; set; }
    }
}