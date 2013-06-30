using System;
using System.Collections.Generic;
using System.Text.RegularExpressions;
using Client.Scope;
using Client.Scope.Directive;
using Client.Services;
using CommonLibraries;
using Models.SiteManagerModels.Game;
using global;
using jQueryApi;
using EffectType = Models.SiteManagerModels.Game.EffectType;
namespace Client.Directives
{



    public class AcgDrawCardDirective
    {
        private readonly EffectManagerService myEffectManager;
        public Action<CardScope, jQueryObject, object> link;
        public AcgDrawCardDirective(EffectManagerService effectManager)
        {
            myEffectManager = effectManager;
            link = linkFn;
        }

        private void linkFn(CardScope scope, jQueryObject element, object attrs)
        {
            element.Attribute("style", "width:71px; height:96px;");
            element.Attribute("class", "card "+string.Format("card{0}-{1}", scope.Card.Type, scope.Card.Value));


            scope.watch("$parent.$parent.selectedCard",
                        () =>
                        {
                            if (scope.Parent.Parent.SelectedCard == null || scope.Parent.Parent.SelectedCard != scope.Card)
                            {
                                scope.CardStyle.border = Script.Undefined;

                            }
                            else
                            {

                                scope.CardStyle.border = "solid 4px green";
                            }
                        });

            scope.CardClick = () =>
            {
                if (scope.Parent.Parent.SelectedCard == scope.Card)
                {
                    scope.Parent.Parent.SelectedCard = null;
                }
                else
                {
                    scope.Parent.Parent.SelectedCard = scope.Card;

                }
            };
            Action redrawCard = () =>
            {

                var scale = ((Point)((dynamic)scope.Parent.Parent)["$parent"].scale);


                var spaceScale = new { width = scope.Space.Width / (scope.Space.Pile.Cards.Count - 1), height = scope.Space.Height / (scope.Space.Pile.Cards.Count-1) };
                var vertical = scope.Space.Vertical;
                var cardIndex = scope.Space.Pile.Cards.IndexOf(scope.Card);

                scope.CardStyle = new { };

                var xx = 0.0;
                var yy = 0.0;


                                    switch (scope.Space.ResizeType)
                {
                    case TableSpaceResizeType.Static:
                        if (vertical)
                            yy = ((scope.Card.Value + 1) / 13.0) * scope.Space.Height * scale.Y;
                        else
                            xx = ((scope.Card.Value + 1) / 13.0) * scope.Space.Width * scale.X;
                        break;
                    case TableSpaceResizeType.Grow:
                        xx = (!vertical ? (cardIndex * spaceScale.width * scale.X) : 0);
                        yy = (vertical ? (cardIndex * spaceScale.height * scale.Y) : 0);
                        break;
                    default:
                        xx = (!vertical ? (cardIndex * spaceScale.width * scale.X) : 0);
                        yy = (vertical ? (cardIndex * spaceScale.height * scale.Y) : 0);
                        break;
                }

                xx -= 71 / 2;
                yy -= 96 / 2;

                scope.CardStyle.position = "absolute";
                scope.CardStyle.zIndex = cardIndex;
                scope.CardStyle.borderRadius = "5px";
                scope.CardStyle.left = (xx + (vertical ? scope.Space.Width * scale.X / 2 : 0));
                scope.CardStyle.top = (yy + (!vertical ? scope.Space.Height * scale.Y / 2 : 0));
//                scope.CardStyle["-webkit-transform"] = "rotate(" + scope.Parent.Space.Appearance.InnerStyle.Rotate + "deg)";
                element.me().rotate(scope.Parent.Space.Appearance.InnerStyle.Rotate);
                scope.CardStyle.content = "\"\"";


                if (scope.Space.Name.StartsWith("User"))
                {

                    if (scope.Card.Appearance.EffectNames.Count == 0)
                        scope.Card.Appearance.EffectNames.Add(EffectType.Bend.ToString());

                }
                else
                {
                    for (var index = scope.Card.Appearance.EffectNames.Count - 1; index >= 0; index--)
                    {
                        var cardGameAppearanceEffect = scope.Card.Appearance.EffectNames[index];
                        if (cardGameAppearanceEffect == EffectType.Bend.ToString())
                            scope.Card.Appearance.EffectNames.Remove(cardGameAppearanceEffect);
                    }
                }


                foreach (var effect in scope.Card.Appearance.EffectNames)
                {
                    GameEffectModel grabbedEffect = myEffectManager.GetEffectByName(effect);
                    if (grabbedEffect == null)
                    {
                        continue;
                    }
                    switch (grabbedEffect.Type)
                    {
                        case EffectType.Highlight:

                            var _effect = new CardGameAppearanceEffectHighlight(new CardGameEffectHighlightOptions()
                            {
                                Color = grabbedEffect.GetPropertyByName<string>("color"),
                                Radius = grabbedEffect.GetPropertyByName<double>("radius"),
                                Rotate = grabbedEffect.GetPropertyByName<double>("rotate"),
                                OffsetX = grabbedEffect.GetPropertyByName<double>("offsetx"),
                                OffsetY = grabbedEffect.GetPropertyByName<double>("offsety"),
                                Opacity = grabbedEffect.GetPropertyByName<double>("opacity"),
                            });

                            JsDictionary<string, string> beforeStyle = new JsDictionary<string, string>();
                            beforeStyle["display"] = "block";
                            beforeStyle["position"] = "relative";
                            beforeStyle["z-index"] = "-1";
                            beforeStyle["width"] = "100%";
                            beforeStyle["height"] = "100%";
                            beforeStyle["left"] = (-_effect.Radius + _effect.OffsetX) + "px";
                            beforeStyle["top"] = (-_effect.Radius + _effect.OffsetY) + "px";
                            beforeStyle["padding"] = (_effect.Radius) + "px";
                            beforeStyle["border-radius"] = "5px";
                            beforeStyle["box-shadow"] = "rgb(44, 44, 44) 3px 3px 2px";
                            var color = hextorgb(_effect.Color);

                            beforeStyle["background-color"] = string.Format("rgba({0}, {1}, {2}, {3})", color.R, color.G, color.B, _effect.Opacity);
                            beforeStyle["border"] = "2px solid black";

                            ChangeCSS("card" + scope.Card.Type + "-" + scope.Card.Value + "::before", beforeStyle);




                            break;
                        case EffectType.Rotate:
                            break;
                        case EffectType.Bend:




                            var bEffect = (new CardGameAppearanceEffectBend(new CardGameEffectBendOptions()
                            {
                                Degrees = grabbedEffect.GetPropertyByName<double>("degrees"),
                            }));


                            var rotate = element.GetCSS("transform").Replace(" scale(1, 1)", "");

                            element.me().rotate((((-bEffect.Degrees / 2 + bEffect.Degrees / (scope.Space.Pile.Cards.Count - 1) * cardIndex) + NoTransformRotate(rotate))) );

                            break;
                        case EffectType.StyleProperty:
                            break;
                        case EffectType.Animated:
                            break;
                    }
                }




 

           
            };
            JsDictionary<string, string> keys = new JsDictionary<string, string>() { };
            keys["content"] = string.Format("url('{1}assets/cards/{0}.gif')", (100 + (scope.Card.Value + 1) + (scope.Card.Type) * 13),Constants.WebIP);
            ChangeCSS("card" + scope.Card.Type + "-" + scope.Card.Value + "::before", keys);


         //   redrawCard();
            /*
                          
 
            scope.watch("$parent.space", () =>
            {
                Console.Log("ac");
                redrawCard();
            }, true);
            scope.watch("card.appearance.effectNames.join()", () =>
            {
                Console.Log("b");
                redrawCard();
            }, true);*/
            /*scope.watch<CardScope>((_scope) =>
            {

                List<Effect> effects = new List<Effect>();

                foreach (var ef in _scope.Card.Appearance.EffectNames)
                {
                    var _ef = myEffectManager.GetEffectByName(ef);
                    effects.Add(_ef);
                }
                return effects;
            }, () => {
                Console.Log("c");
                   redrawCard();
               }, true);

*/
            redrawCard();
        }
        public static dynamic hextorgb(string hex)
        {

            var result = new Regex(@"^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$").Exec(hex);
            return result != null ? new
            {
                R = int.Parse(result[1], 16),
                G = int.Parse(result[2], 16),
                B = int.Parse(result[3], 16)
            } : null;


        }
        public static string TransformRotate(double ar)
        {
            return string.Format("rotate({0}deg)", ar);
        }

        public static double NoTransformRotate(string ar)
        {
            if (ar == "") return 0;
            return double.Parse(ar.Replace("rotate(", "").Replace("deg)", "")); //todo regex??
        }

        private static void ChangeCSS(string myClass, JsDictionary<string, string> values)
        {
            myClass = "." + myClass;
            string CSSRules = "";
            var document = (dynamic)Script.Eval("window.document");
            if (document.all)
                CSSRules = "rules";
            else if (document.getElementById)
                CSSRules = "cssRules";
            for (var a = 0; a < document.styleSheets.length; a++) {
                if (document.styleSheets[a][CSSRules] == null) continue;
                for (var i = 0; i < document.styleSheets[a][CSSRules].length; i++)
                {
                    if (document.styleSheets[a][CSSRules][i].selectorText == myClass)
                    {
                        foreach (var m in values)
                        {
                            document.styleSheets[a][CSSRules][i].style[m.Key] = m.Value;
                        }
                    }
                }
            }

        }
    }
}