﻿using System;
using System.Collections.Generic;
using System.Runtime.CompilerServices;
using CardGameUI.Scope;
using CardGameUI.Services;
using CardGameUI.Util;
using WebLibraries.ShuffUI.ShuffUI;
using jQueryApi;
namespace CardGameUI.Directives
{


     public class FloatingWindowDirective
    {
         private readonly UIManagerService myUIManagerService;
         public Action<FloatingWindowScope, jQueryObject, dynamic> link;
        public string templateUrl;
        public string restrict;
        public bool replace;
        public bool transclude;
        public dynamic scope;
        public FloatingWindowDirective(UIManagerService uiManagerService)
        {
            myUIManagerService = uiManagerService;
            restrict = "EA";
            templateUrl = "http://content.anycardgame.com/partials/floatingWindow.html";
            replace = true;
            transclude = true;
            scope = new
            {
                width = "=",
                height = "=",
                left = "=",
                top = "=",
                title = "=",
                visible = "=",
                onclose = "&",
            };
            link = LinkFn;

        }
        public void SwingBack(FloatingWindowScope scope,jQueryObject element, Action callback)
        {
            JsDictionary<string, object> js = new JsDictionary<string, object>();

            js["left"] = scope.Left ;
            js["top"] = scope.Top ;

            element.Animate(js, EffectDuration.Fast, EffectEasing.Swing,callback);
        }

        public void SwingAway(SwingDirection direction, bool simulate , jQueryObject element, Action callback)
        {
            JsDictionary<string, object> js = new JsDictionary<string, object>();

            string distance = "2000";

            switch (direction)
            {
                case SwingDirection.TopLeft:
                    js["left"] = "-" + distance + "px";
                    js["top"] = "-" + distance + "px";
                    break;
                case SwingDirection.Top:
                    js["top"] = "-" + distance + "px";
                    break;
                case SwingDirection.TopRight:
                    js["left"] = distance + "px";
                    js["top"] = "-" + distance + "px";
                    break;
                case SwingDirection.Right:
                    js["left"] = distance + "px";
                    break;
                case SwingDirection.BottomRight:
                    js["left"] = distance + "px";
                    js["top"] = distance + "px";
                    break;
                case SwingDirection.Bottom:
                    js["top"] = distance + "px";
                    break;
                case SwingDirection.BottomLeft:
                    js["left"] = "-" + distance + "px";
                    js["top"] = distance + "px";
                    break;
                case SwingDirection.Left:
                    js["left"] = distance + "px";
                    break;
            }

            if (simulate) element.CSS(js);
            else element.Animate(js, EffectDuration.Slow, EffectEasing.Swing,callback);
        }

         private void LinkFn(FloatingWindowScope scope, jQueryObject element, dynamic attr)
         {
             scope.Parent.SwingAway = (a, b,c) =>
             {
                 SwingAway(a, b, element,c);
             };
             scope.Parent.SwingBack = (c) =>
             {
                 SwingBack(scope, element,c);
             };
             scope.PositionStyles = new FloatingWindowPosition() {  Left = scope.Left, Top = scope.Top, Display = "block" };
             scope.SizeStyle = new Size() { Width = scope.Width, Height = scope.Height, };
             scope.Maximize = () => {
                                  if (!scope.IsMaximized) {
                                      scope.LastPositionStyles = scope.PositionStyles;
                                      scope.LastSizeStyle = scope.SizeStyle;
                                      scope.PositionStyles = new FloatingWindowPosition() {Left = 0, Top = 0, Display = "block" };
                                      scope.SizeStyle = new Size() { Width = "100%", Height = "100%", };
                                  }
                                  else
                                  {
                                      scope.PositionStyles = scope.LastPositionStyles;
                                      scope.SizeStyle = scope.LastSizeStyle;
                                      scope.LastPositionStyles = null;
                                      scope.LastSizeStyle = null;

                                  }

                                  scope.IsMaximized = !scope.IsMaximized;

                              };
             scope.Close = () =>
             {

                 if (scope.OnClose != null)
                 {
                     scope.OnClose();
                 }
                 scope.PositionStyles.Display = "none";
             };
             scope.Minimize = () =>
             {
                 myUIManagerService.OnMinimize(scope);
                 scope.PositionStyles.Display = "none";
             };
             scope.Restore = () =>
             {
                 scope.PositionStyles.Display = "block";
             };

         }
    }
    [Serializable]
    public class FloatingWindowScope
    {
        [ScriptName("$parent")]
        public FloatingWindowBaseScope Parent { get; set; }

        public bool Visible { get; set; }

        public object Width { get; set; }
        public object Height { get; set; }
        public object Left { get; set; }
        public object Top { get; set; }
        public Size SizeStyle { get; set; }
        public Size LastSizeStyle { get; set; }
        public FloatingWindowPosition PositionStyles { get; set; }
        public FloatingWindowPosition LastPositionStyles{ get; set; }
        public string Title { get; set; }

        [ScriptName("onclose")]
        public Action OnClose { get; set; }
        public Action Close { get; set; }
        public Action Minimize { get; set; }
        public Action Maximize { get; set; }
        public Action Restore { get; set; }
        public bool IsMaximized { get; set; }
    }


    [Serializable]
    public class FloatingWindowPosition:Position
    {
        public string Display { get; set; }

    }
    [Serializable]
    public class Position
    {
         public object Left { get; set; }
        public object Top { get; set; }

    }
    [Serializable]
    public class Size
    {
        public object Width { get; set; }
        public object Height { get; set; }

    }
}
