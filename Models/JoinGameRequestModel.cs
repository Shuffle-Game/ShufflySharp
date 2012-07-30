using System.Runtime.CompilerServices;

namespace Models
{
    [Record]
    public sealed class JoinGameRequestModel
    {
        public JoinGameRequestModel(string roomId, UserModel user)
        {
            RoomID = roomId;
            User = user;
        }

        [IntrinsicProperty]
        public string RoomID { get; set; }

        [IntrinsicProperty]
        public UserModel User { get; set; }
    }
}