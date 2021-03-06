using System;
using System.Collections.Generic;
using CommonLibraries;
using Models;
using NodeLibraries.Common.Logging;
namespace CommonShuffleLibrary
{
    public class QueueManager
    {
        public string Name;
        public Dictionary<string, Action<UserLogicModel, object>> channels;
        public List<QueuePusher> qp;
        private QueueItemCollection qpCollection;
        public List<QueueWatcher> qw;
        private QueueItemCollection qwCollection;

        public QueueManager(string name, QueueManagerOptions options)
        {
            Name = name;
            channels = new Dictionary<string, Action<UserLogicModel, object>>();
            qw = new List<QueueWatcher>();
            qp = new List<QueuePusher>();
            foreach (var queueWatcher in options.Watchers) {
                if (queueWatcher.Callback == null)
                    queueWatcher.Callback = messageReceived;
                qw.Add(queueWatcher);
            }
            qw.AddRange(options.Watchers);
            foreach (var pusher in options.Pushers) {
                qp.Add(new QueuePusher(pusher));
            }

            qwCollection = new QueueItemCollection(qw);
            qpCollection = new QueueItemCollection(qp);
        }

        public void AddChannel(string channel, Action<UserLogicModel, object> callback)
        {
            channels[channel] = callback;
        }

        private void messageReceived(string name, UserLogicModel user, string eventChannel, object content)
        {
            //todo?        user.Gateway = name;
            try {
                if (channels[eventChannel] != null)
                    channels[eventChannel](user, content);

            } catch (Exception ex) {
                Console.WriteLine(ex.ToString());
            }
        }

        public void SendMessage(string channel, string eventChannel, UserLogicModel user , object content)
        {
            if (qpCollection.GetByChannel(channel) == null) {
                ServerLogger.LogError(string.Format("Cannot send message:{0} - {1} No Existy", channel, eventChannel), content);
                return;
            }

            var pusher = ( (QueuePusher) qpCollection.GetByChannel(channel) );
            ServerLogger.LogTransport("Channel: " + eventChannel, content);

            pusher.Message(channel, Name, user, eventChannel, content);
        }
    }
}