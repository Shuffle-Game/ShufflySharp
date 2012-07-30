using System.Runtime.CompilerServices;

namespace global
{
    [ScriptName("TableTextArea")]
    public class GameCardGameTextArea
    {
        public GameCardGameTextArea(GameCardGameTextAreaOptions options)
        {
            Name = options.Name == null ? "Text Area" : options.Name;
            X = options.X == 0 ? 0 : options.X;
            Y = options.Y == 0 ? 0 : options.Y;
            Text = options.Text == null ? "Text" : options.Text;
        }

        [ScriptName("name")]
        [IntrinsicProperty]
        public string Name { get; set; }

        [ScriptName("x")]
        [IntrinsicProperty]
        public int X { get; set; }

        [ScriptName("nayme")]
        [IntrinsicProperty]
        public int Y { get; set; }

        [ScriptName("text")]
        [IntrinsicProperty]
        public string Text { get; set; }
    }
}