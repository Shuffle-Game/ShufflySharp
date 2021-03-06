using System;
using System.Html;
using CommonLibraries;

namespace Client.Libs
{
    public class ScriptLoader
    {
        private void loadScript(string url, bool cache, Action callback)
        {
            cache = false;
            var head = Document.GetElementsByTagName("head")[0];

            var script = (ScriptElement) Document.CreateElement("script");
            script.Type = "text/javascript";
            script.Src = url + (cache ? "?" + (Math.Floor(Math.Random()*10000)) : ""); //caching
            if (callback != null)
            {
                script.me().onreadystatechange =
                    (Action<object>)
                        (a => { if (script.me().readyState == "loaded" || script.me().readyState == "complete") callback(); });
                script.me().onload = (Action<object>) (a => callback());
            }
            head.AppendChild(script);
        }

        public static void LoadCss(string filename)
        {
            var fileref = Document.CreateElement("link");
            fileref.SetAttribute("rel", "stylesheet");
            fileref.SetAttribute("type", "text/css");
            fileref.SetAttribute("href", filename);
            Document.GetElementsByTagName("head")[0].AppendChild(fileref);
        }

        public void Load(string[] items, bool cache, Action done)
        {
            var counter = 0;
            for (var i = 0; i < items.Length; i++)
            {
                loadScript(items[i],
                    cache,
                    () =>
                    {
                        counter++;
                        if (counter >= items.Length)
                            done();
                    });
            }
        }

        public void LoadSync(string[] items, Action done)
        {
            var counter = 0;
            Action nextOne = null;
            nextOne = () =>
                      {
                          counter++;
                          if (counter >= items.Length)
                              done();
                          else
                              loadScript(items[counter], false, nextOne);
                      };
            loadScript(items[0], false, nextOne);
        }
    }
}