using System;
using System.Collections.Generic;
using System.Text.RegularExpressions;
using Client.Scope.Directive;
using CommonLibraries;
using global;
using jQueryApi;
using jQueryApi.UI.Interactions;
using Models.SiteManagerModels.Game;
using EffectType = Models.SiteManagerModels.Game.EffectType;

namespace Client.Directives
{
    public class AcgDrawCardDirective
    {
        public const string Name = "acgDrawCard";
        public Action<CardScope, jQueryObject, object> link;

        public AcgDrawCardDirective()
        {
            link = linkFn;
        }

        private void linkFn(CardScope scope, jQueryObject element, object attrs)
        {
            element.Attribute("style", "width:71px; height:96px;");
            element.Attribute("class", "card " + string.Format("card{0}-{1}", scope.Card.Type, scope.Card.Value));
            element.Draggable(new DraggableOptions()
                              {
                                  OnDrag = (@event, uiEvent) =>
                                           {


                                           }
                              });

            Action redrawCard = () =>
                                {
                                    var scale = ((Point)((dynamic)scope.Parent.Parent)["$parent"].scale);


                                    var spaceScale =
                                        new
                                        {
                                            width = scope.Space.Width / (scope.Space.Pile.Cards.Count - 1),
                                            height = scope.Space.Height / (scope.Space.Pile.Cards.Count - 1)
                                        };
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
                                    //                element.me().rotate(scope.Parent.Space.Appearance.InnerStyle.Rotate);
                                    scope.CardStyle.content = "\"\"";

                                     
                                    /*
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
                                    */
                                };
            var keys = new JsDictionary<string, string>() { };
            if (scope.Card.Value == -1 && scope.Card.Type == -1)
            {
                keys["content"] = string.Format("url('{1}assets/cards/{0}.gif')", 155, Constants.ContentAddress);
            }
            else
            {
                keys["content"] = string.Format("url('{1}assets/cards/{0}.gif')", (100 + (scope.Card.Value + 1) + (scope.Card.Type) * 13), Constants.ContentAddress);
            }
            ClientHelpers.ChangeCSS("card" + scope.Card.Type + "-" + scope.Card.Value + "::before", keys);


            scope.On("redrawCard", redrawCard);

            //   redrawCard();
            /*
                          
 
            scope.Watch("$parent.space", () =>
            {
                Console.Log("ac");
                redrawCard();
            }, true);
            scope.Watch("card.appearance.effectNames.join()", () =>
            {
                Console.Log("b");
                redrawCard();
            }, true);*/
            /*scope.Watch<CardScope>((_scope) =>
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
    }
}