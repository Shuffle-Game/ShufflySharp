﻿#define FTP
using System;
using System.Collections.Generic;
using System.Configuration;
using System.IO;
using System.Linq;
using Renci.SshNet;
namespace Build
{
    internal class Program
    {
        private static void Main(string[] args)
        {
            string shufSharp = "ShufflySharp";

            var projs = new[] {
                                      shufSharp + @"\Libraries\CommonLibraries\",
                                      shufSharp + @"\Libraries\CommonShuffleLibrary\",
                                      shufSharp + @"\Libraries\CommonServerLibraries\",
                                      shufSharp + @"\Libraries\ShuffleGameLibrary\",
                                      shufSharp + @"\Libraries\NodeLibraries\MongoDBLibrary\",
                                      shufSharp + @"\Libraries\ShuffUI\",
                                      shufSharp + @"\Servers\AdminServer\",
                                      shufSharp + @"\Servers\ChatServer\",
                                      shufSharp + @"\Servers\DebugServer\",
                                      shufSharp + @"\Servers\GameServer\",
                                      shufSharp + @"\Servers\GatewayServer\",
                                      shufSharp + @"\Servers\HeadServer\",
                                      shufSharp + @"\Servers\SiteServer\",
                                      shufSharp + @"\Models\",
                                      shufSharp + @"\Client\",
                                      shufSharp + @"\ClientLibs\",
                                      shufSharp + @"\ServerSlammer\",
                              };
            var pre = Directory.GetCurrentDirectory() + @"\..\..\..\..\..\";

            foreach (var proj in projs) {
#if DEBUG
                var from = pre + proj + @"\bin\debug\" + proj.Split(new[] {"\\"}, StringSplitOptions.RemoveEmptyEntries).Last() + ".js";
#else
                var from = pre + proj + @"\bin\release\" + proj.Split(new[] {"\\"}, StringSplitOptions.RemoveEmptyEntries).Last() + ".js";
#endif
                var to = pre + shufSharp + @"\output\" + proj.Split(new[] {"\\"}, StringSplitOptions.RemoveEmptyEntries).Last() + ".js";

                if (File.Exists(to)) tryDelete(to);
                tryCopy(from, to);
            }

            //client happens in buildsite.cs
            var depends = new Dictionary<string, Application> {
                                                                      {
                                                                              shufSharp + @"\Servers\AdminServer\", new Application(true,
                                                                                                                                    "new AdminServer.AdminServer();",
                                                                                                                                    new List<string> {
                                                                                                                                                             @"./CommonLibraries.js",
                                                                                                                                                             @"./CommonServerLibraries.js",
                                                                                                                                                             @"./CommonShuffleLibrary.js",
                                                                                                                                                             @"./Models.js",
                                                                                                                                                     })
                                                                      }, {
                                                                                 shufSharp + @"\Servers\ChatServer\", new Application(true,
                                                                                                                                      "new ChatServer.ChatServer();",
                                                                                                                                      new List<string> {
                                                                                                                                                               @"./MongoDBLibrary.js",
                                                                                                                                                               @"./CommonLibraries.js",
                                                                                                                                                               @"./CommonShuffleLibrary.js",
                                                                                                                                                               @"./ShuffleGameLibrary.js",
                                                                                                                                                               @"./CommonServerLibraries.js",
                                                                                                                                                               @"./Models.js",
                                                                                                                                                               @"./RawDeflate.js",
                                                                                                                                                       })
                                                                         }, {
                                                                                    shufSharp + @"\Servers\DebugServer\", new Application(true,
                                                                                                                                          "new DebugServer.DebugServer();",
                                                                                                                                          new List<string> {
                                                                                                                                                                   @"./MongoDBLibrary.js",
                                                                                                                                                                   @"./CommonServerLibraries.js",
                                                                                                                                                                   @"./CommonLibraries.js",
                                                                                                                                                                   @"./CommonShuffleLibrary.js",
                                                                                                                                                                   @"./Models.js",
                                                                                                                                                           })
                                                                            }, {
                                                                                       shufSharp + @"\Servers\GameServer\", new Application(true,
                                                                                                                                            "new GameServer.GameServer();",
                                                                                                                                            new List<string> {
                                                                                                                                                                     @"./MongoDBLibrary.js",
                                                                                                                                                                     @"./CommonLibraries.js",
                                                                                                                                                                     @"./CommonServerLibraries.js",
                                                                                                                                                                     @"./CommonShuffleLibrary.js",
                                                                                                                                                                     @"./ShuffleGameLibrary.js",
                                                                                                                                                                     @"./Models.js",
                                                                                                                                                                     @"./RawDeflate.js",
                                                                                                                                                             })
                                                                               }, {
                                                                                          shufSharp + @"\Servers\GatewayServer\", new Application(true,
                                                                                                                                                  "new GatewayServer.GatewayServer();",
                                                                                                                                                  new List<string> {
                                                                                                                                                                           @"./MongoDBLibrary.js",
                                                                                                                                                                           @"./CommonServerLibraries.js",
                                                                                                                                                                           @"./CommonLibraries.js",
                                                                                                                                                                           @"./CommonShuffleLibrary.js",
                                                                                                                                                                           @"./Models.js",
                                                                                                                                                                   })
                                                                                  }, {
                                                                                             shufSharp + @"\Servers\HeadServer\", new Application(true,
                                                                                                                                                  "new HeadServer.HeadServer();",
                                                                                                                                                  new List<string> {
                                                                                                                                                                           @"./MongoDBLibrary.js",
                                                                                                                                                                           @"./CommonServerLibraries.js",
                                                                                                                                                                           @"./CommonLibraries.js",
                                                                                                                                                                           @"./CommonShuffleLibrary.js",
                                                                                                                                                                           @"./Models.js",
                                                                                                                                                                   })
                                                                                     }, {
                                                                                                shufSharp + @"\Servers\SiteServer\", new Application(true,
                                                                                                                                                     "",
                                                                                                                                                     new List<string> {
                                                                                                                                                                              @"./MongoDBLibrary.js",
                                                                                                                                                                              @"./CommonLibraries.js",
                                                                                                                                                                              @"./CommonServerLibraries.js",
                                                                                                                                                                              @"./CommonShuffleLibrary.js",
                                                                                                                                                                              @"./ShuffleGameLibrary.js",
                                                                                                                                                                              @"./Models.js",
                                                                                                                                                                              @"./RawDeflate.js",
                                                                                                                                                                      })
                                                                                        }, {
                                                                                                   shufSharp + @"\Libraries\CommonShuffleLibrary\", new Application(false,
                                                                                                                                                                    "",
                                                                                                                                                                    new List<string> {
                                                                                                                                                                                             @"./MongoDBLibrary.js",
                                                                                                                                                                                     })
                                                                                           }, {
                                                                                                      shufSharp + @"\Libraries\CommonServerLibraries\", new Application(false, "", new List<string> {})
                                                                                              },
                                                                      {shufSharp + @"\Libraries\NodeLibraries\MongoDBLibrary\", new Application(false, "", new List<string> {})},
                                                                      {shufSharp + @"\Libraries\CommonLibraries\", new Application(false, "", new List<string> {})},
                                                                      {shufSharp + @"\Libraries\ShuffUI\", new Application(false, "", new List<string> {})},
                                                                      {shufSharp + @"\ClientLibs\", new Application(false, "", new List<string> {})}, {
                                                                                                                                                              shufSharp + @"\ServerSlammer\", new Application(true,
                                                                                                                                                                                                              "",
                                                                                                                                                                                                              new List<string> {
                                                                                                                                                                              @"./MongoDBLibrary.js",     @"./Models.js",
                                                                                                                                                                   
                                                                                                                                                                           
                                                                                                                                                                                                                                       @"./ClientLibs.js",
                                                                                                                                                                                                                               })
                                                                                                                                                      },
                                                                      {shufSharp + @"\Models\", new Application(false, "", new List<string> {})},
                                                                      {shufSharp + @"\Libraries\ShuffleGameLibrary\", new Application(false, "", new List<string> {})}, {
                                                                                                                                                                                shufSharp + @"\Client\", new Application(false,
                                                                                                                                                                                                                         "",
                                                                                                                                                                                                                         new List<string>
                                                                                                                                                                                                                         {})
                                                                                                                                                                        },
                                                              };

#if FTP
            string loc = ConfigurationSettings.AppSettings["web-ftpdir"];
            Console.WriteLine("connecting ftp");
            /*   Ftp webftp = new Ftp();
            webftp.Connect(ConfigurationSettings.AppSettings["web-ftpurl"]);
            webftp.Login(ConfigurationSettings.AppSettings["web-ftpusername"], ConfigurationSettings.AppSettings["web-ftppassword"]);

            Console.WriteLine("connected");

            webftp.Progress += (e, c) =>
            {
                var left = Console.CursorLeft;
                var top = Console.CursorTop;

                Console.SetCursorPosition(65, 5);
                Console.Write("|");

                for (int i = 0; i < c.Percentage / 10; i++)
                {
                    Console.Write("=");
                }
                for (int i = (int)(c.Percentage / 10); i < 10; i++)
                {
                    Console.Write("-");
                }
                Console.Write("|");

                Console.Write(c.Percentage + "  %  ");
                Console.WriteLine();
                Console.SetCursorPosition(left, top);
            };
*/
            string serverloc = ConfigurationSettings.AppSettings["server-ftpdir"];
            string serverloc2 = ConfigurationSettings.AppSettings["server-web-ftpdir"];
            Console.WriteLine("connecting server ftp");
            SftpClient client = new SftpClient(ConfigurationSettings.AppSettings["server-ftpurl"], ConfigurationSettings.AppSettings["server-ftpusername"], ConfigurationSettings.AppSettings["server-ftppassword"]);
            client.Connect();

            Console.WriteLine("server connected");

#endif

            foreach (var depend in depends) {
                var to = pre + shufSharp + @"\output\" + depend.Key.Split(new[] {"\\"}, StringSplitOptions.RemoveEmptyEntries).Last() + ".js";
                var output = "";

                Application application = depend.Value;

                if (application.Node)
                    output += "require('./mscorlib.js');";
                else {
                    //output += "require('./mscorlib.debug.js');";
                }

                foreach (var depe in application.IncludesAfter) {
                    output += string.Format("require('{0}');", depe);
                }

                var lines = new List<string>();
                lines.Add(output);
                lines.AddRange(File.ReadAllLines(to));

                //      lines.Add(application.After);

                File.WriteAllLines(to, lines);
                var name = to.Split(new char[] {'\\'}, StringSplitOptions.RemoveEmptyEntries).Last();

#if FTP

                long length = new FileInfo(to).Length;
                /*       if (!webftp.FileExists(loc + name) || webftp.GetFileSize(loc + name) != length)
                {
                    Console.WriteLine("ftp start " + length.ToString("N0"));
                    webftp.Upload(loc + name, to);
                    Console.WriteLine("ftp complete " + to);
                }
*/
                if (true || !client.Exists(serverloc + name) || client.GetAttributes(serverloc + name).Size != length) {
                    Console.WriteLine("server ftp start " + length.ToString("N0"));
                    var fileStream = new FileInfo(to).OpenRead();
                    client.UploadFile(fileStream, serverloc + name, true);
                    fileStream.Close();
                    Console.WriteLine("server ftp complete " + to);
                }
                if (true || !client.Exists(serverloc2 + name) || client.GetAttributes(serverloc2 + name).Size != length) {
                    Console.WriteLine("server ftp start " + length.ToString("N0"));
                    var fileStream = new FileInfo(to).OpenRead();
                    client.UploadFile(fileStream, serverloc2 + name, true);
                    fileStream.Close();
                    Console.WriteLine("server ftp complete " + to);
                }
#endif
                if (File.Exists(@"C:\code\node\" + name) && /*new FileInfo(@"C:\code\node\" + name).Length != new FileInfo(to).Length*/ true) {
                    tryDelete(@"C:\code\node\" + name);
                    tryCopy(to, @"C:\code\node\" + name);
                }
            }

            foreach (var d in Directory.GetDirectories(pre + shufSharp + @"\ShuffleGames\")) {
                string game = d.Split('\\').Last();
                var to = pre + shufSharp + @"\output\Games\" + game;
                if (!Directory.Exists(to))

                    Directory.CreateDirectory(to);
                if (d.EndsWith("bin") || d.EndsWith("obj"))
                    continue;
                File.WriteAllText(to + @"\app.js", File.ReadAllText(d + @"\app.js"));

#if FTP

                Console.WriteLine("server ftp start ");

                var fileStream = new FileInfo(to + @"\app.js").OpenRead();
                if (!client.Exists(serverloc + string.Format("Games/{0}", game)))
                    client.CreateDirectory(serverloc + string.Format("Games/{0}", game));
                client.UploadFile(fileStream, serverloc + string.Format("Games/{0}/app.js", game), true);
                fileStream.Close();

                Console.WriteLine("server ftp complete " + to);
#endif
            }
        }

        private static void tryDelete(string to)
        {
            top:
            try {
                File.Delete(to);
            } catch (Exception) {
                goto top;
            }
        }

        private static void tryCopy(string from, string to)
        {
            top:
            try {
                File.Copy(from, to);
            } catch (Exception) {
                goto top;
            }
        }

        #region Nested type: Application

        public class Application
        {
            public string After { get; set; }
            public bool Node { get; set; }
            public List<string> IncludesAfter { get; set; }

            public Application(bool node, string prepend, List<string> includesAfter)
            {
                After = prepend;
                Node = node;
                IncludesAfter = includesAfter;
            }
        }

        #endregion
    }
}