using System.Runtime.CompilerServices;
namespace ShuffUI
{
    public class ShuffListItem
    {
        [IntrinsicProperty]
        public string Label { get; set; }
        [IntrinsicProperty]
        public object Value { get; set; }

        public ShuffListItem(string label, object value)
        {
            Label = label;
            Value = value;
        }
    }
}