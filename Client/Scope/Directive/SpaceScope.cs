using System.Runtime.CompilerServices;
using Client.Scope.Controller;
using global;

namespace Client.Scope.Directive
{
    public class SpaceScope : BaseScope
    {
        [IntrinsicProperty]
        public CardGameTableSpace Space { get; set; }
         

        [IntrinsicProperty]
        public dynamic SpaceStyle { get; set; }
    }
}