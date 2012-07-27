﻿using System.Collections;
using System.Collections.Generic;
using CommonShuffleLibraries;
using NodeJSLibrary;

namespace HeadServer
{
    public class HeadServer
    {
        private FS fs = Global.Require<FS>("fs");

        private string __dirname = "/usr/local/src/headServer";
        private string indexPageData;
        private QueueManager qManager;
        private PubSub pubsub;

        private List<string> indexForSites = new List<string>();
        private List<string> gateways = new List<string>();
        private List<string> oldGateways = new List<string>();
        private List<string> oldIndex = new List<string>();
        private int siteIndex = 0;

        public HeadServer()
        {
            qManager = new QueueManager("Head1", new QueueManagerOptions(new QueueWatcher[]
                                                                             {
                                                                                 new QueueWatcher("HeadServer", null),
                                                                                 new QueueWatcher("Head1", null),
                                                                             }, new string[]
                                                                                    {
                                                                                        "GatewayServer"
                                                                                    }));

            
            fs.ReadFile(__dirname + "/index.html", ready);

            pubsub = new PubSub(delegate
                                    {
                                        pubsub.Subscribe("PUBSUB.GatewayServers", delegate(object message)
                                                                                      {
                                                                                          indexForSites.Add(indexPageData.Replace("{{gateway}}", message.ToString()));
                                                                                          gateways.Add(message.ToString());
                                                                                      });
                                    });

            Global.Require<Http>("http").CreateServer(handlerWS).Listen(8844);
            qManager.AddChannel<string>("Head.GatewayUpdate", delegate(User user, object data)
                                                          {
                                                              indexForSites.Add(indexPageData.Replace("{{gateway}}", data.ToString()));
                                                              gateways.Add(data.ToString());
                                                          });

            Global.SetInterval(pollGateways, 5000);
            pollGateways();
        }

        private void pollGateways()
        {
            pubsub.Publish("PUBSUB.GatewayServers.Ping", "");

            if(indexForSites.Count>0)
            {
                oldIndex = indexForSites;
            }
            if(gateways.Count>0)
            {
                oldGateways = gateways;
            }
            indexForSites = new List<string>();
            gateways = new List<string>();
            siteIndex = 0;
        }

        private void handlerWS(HttpRequest request, HttpResponse response)
        {
            if (oldGateways.Count > 0)
            {
                   int inj = (siteIndex++) % oldIndex.Count;
                response.End(oldGateways[inj]);
                return;
            }
            response.End();
        }

        private void handler(HttpRequest request, HttpResponse response)
        {
            JsDictionary dict = new JsDictionary();
            dict["Content-Type"] = "text/html";
            if(oldIndex.Count>0)
            {
                response.WriteHead(200, dict);
                int inj = (siteIndex++)%oldIndex.Count;
                response.End(oldIndex[inj]);
            }
            else
            {


                response.WriteHead(200, dict);
                response.End();
            }
        }
        public void ready(FileSystemError error,object content)
        {
            indexPageData = content.ToString();
            Global.Require<Http>("http").CreateServer(handler).Listen(80);

        }

    }

}