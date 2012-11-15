using System;
using System.Runtime.CompilerServices;
namespace global
{
    [ScriptName("Effect$Rotate")]
    public class CardGameAppearanceEffectRotate : CardGameAppearanceEffect
    {
        [ScriptName("degrees")]
        [IntrinsicProperty]
        public double Degrees { get; set; }

        public CardGameAppearanceEffectRotate(CardGameEffectRotateOptions options) : base(EffectType.Rotate)
        {
            Degrees = options.Degrees == 0 ? 0 : options.Degrees;
            DrawTime = CardGameAppearanceEffectDrawTime.During;
        }
    }
    [Serializable]
    public class CardGameEffectRotateOptions
    {
        [ScriptName("degrees")]
        [IntrinsicProperty]
        public double Degrees { get; set; }
    }
}