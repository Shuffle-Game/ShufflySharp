using System;
using System.Runtime.CompilerServices;
namespace NodeJSLibrary
{
    public class Http : NodeModule
    {
        [ScriptName("createServer")]
        public HttpServer CreateServer(Action<HttpRequest, HttpResponse> callback)
        {
            return null;
        }
    }
}