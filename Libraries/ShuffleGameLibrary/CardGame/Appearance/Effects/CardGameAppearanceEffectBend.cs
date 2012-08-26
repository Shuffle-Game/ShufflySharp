using System;
using System.Runtime.CompilerServices;

namespace global
{
    [ScriptName("Effect$Bend")]
    public class CardGameAppearanceEffectBend: CardGameAppearanceEffect
    {
        public CardGameAppearanceEffectBend(CardGameEffectBendOptions options):base(EffectType.Bend)
        {
            Degrees = options.Degrees == 0 ? 0 : options.Degrees;
            DrawTime = CardGameAppearanceEffectDrawTime.During;
        }



        [ScriptName("degrees")]
        [IntrinsicProperty]
        public double Degrees { get; set; }

    }
    [Serializable]
    public  class CardGameEffectBendOptions
    {
        [ScriptName("degrees")]
        [IntrinsicProperty]
        public double Degrees { get; set; }
    }
}