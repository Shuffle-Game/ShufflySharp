using System.Runtime.CompilerServices;

namespace global
{
    [Record]
    public sealed class CardGameEffectBendOptions
    {
        [ScriptName("degrees")]
        [IntrinsicProperty]
        public double Degrees { get; set; }
    }
}