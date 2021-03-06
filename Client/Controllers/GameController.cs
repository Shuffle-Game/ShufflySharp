using System;
using System.Collections.Generic;
using System.Html;
using Client.Scope.Controller;
using Client.Services;
using CommonLibraries;
using global;
using jQueryApi;
using WebLibraries.Common;

namespace Client.Controllers
{
    public class GameController
    {
        static  GameController()
        {
            
        }
        public const string Name = "GameController";
        public const string View = "GameUI";
        private readonly CreateUIService createUIService;
        private readonly ClientGameManagerService myClientGameManagerService;
        private readonly GameContentManagerService myGameContentManagerService;
        private readonly GameControllerScope scope;

        public GameController(GameControllerScope scope, ClientGameManagerService clientGameManagerService, GameContentManagerService gameContentManagerService, CreateUIService createUIService)
        {
            this.scope = scope;
            myClientGameManagerService = clientGameManagerService;
            myGameContentManagerService = gameContentManagerService;
            this.createUIService = createUIService;
            /* effectManager.Effects =new List<GameEffectModel>();
             effectManager.Effects.Add(GameEffectsEditorController.makeEffect("bend", EffectType.Bend));
              */
            /*     myClientGameManagerService.OnAskQuestion += (user, gameSendAnswerModel) => {
                                                        PageHandler.QuestionUI.Load(gameSendAnswerModel);
                                                        //alert(JSON.stringify(data));
                                                        PageHandler.TimeTracker.EndTime = new DateTime();
                                                        var time = PageHandler.TimeTracker.EndTime - PageHandler.TimeTracker.StartTime;
                                                      PageHandler.  DebugUI.lblHowFast.Text = ( "how long: " + time ); 
                                                    }; */

            myClientGameManagerService.OnAskQuestion+= (user, gameSendAnswerModel) =>
                                                        {
                                                            createUIService.CreateSingleton<QuestionScope>(QuestionController.View,
                                                                (myScope, elem) =>
                                                                {
                                                                    myScope.Model = new QuestionScopeModel();
                                                                    myScope.Model.Question = gameSendAnswerModel.Question;
                                                                    myScope.Model.Answers = gameSendAnswerModel.Answers;
                                                                    myScope.Model.SelectedAnswer = gameSendAnswerModel.Answers[0];
                                                                });
                                                        };

            var addRule = (new Func<Element, Action<string, JsDictionary<string, object>>>(style =>
                                                                                           {
                                                                                               var document = (dynamic)Window.Document;
                                                                                               var sheet = document.head.appendChild(style).sheet;
                                                                                               return (selector, css) =>
                                                                                                      {
                                                                                                          var propText = Keys(css).Map((p) => { return p + ":" + css[p]; }).Join(";");
                                                                                                          sheet.insertRule(selector + "{" + propText + "}", sheet.cssRules.length);
                                                                                                      };
                                                                                           }))(Document.CreateElement("style"));
            for (int i = 0; i < 4; i++)
            {
                for (int j = 0; j < 13; j++)
                {
                    addRule(".card" + i+ "-" + j+ "", new JsDictionary<string, object>());
                    addRule(".card" + i+ "-" + j+ "::before", new JsDictionary<string, object>());
                    addRule(".card" + i+ "-" + j+ "::after", new JsDictionary<string, object>());

                }
            }
            addRule(".card" + -1 + "-" + -1 + "", new JsDictionary<string, object>());
            addRule(".card" + -1 + "-" + -1 + "::before", new JsDictionary<string, object>());
            addRule(".card" + -1 + "-" + -1 + "::after", new JsDictionary<string, object>());


            myClientGameManagerService.OnUpdateState += (user, update) =>
                                                        {
                                                            var data =
                                                                Json.Parse<GameCardGame>(
                                                                    new Compressor().DecompressText(update));

                                                            bool create = scope.MainArea == null;

                                                            scope.MainArea = data;


                                                            if (create)
                                                            {
                                                                scope.Scale =
                                                                    new Point(jQuery.Window.GetWidth() / (double)scope.MainArea.Size.Width * .9, ((jQuery.Window.GetHeight()) / (double)scope.MainArea.Size.Height) * .9);

                                                                foreach (var space in scope.MainArea.Spaces)
                                                                {
                                                                    addRule(".space" + space.Name,
                                                                        new JsDictionary<string, object>());
                                                                    addRule(".space" + space.Name + "::before",
                                                                        new JsDictionary<string, object>());
                                                                    addRule(".space" + space.Name + "::after",
                                                                        new JsDictionary<string, object>());


                                                                 }
                                                            }


                                                            scope.Apply();
                                                            myGameContentManagerService.Redraw();
                                                        };

            jQuery.Window.Bind("resize", (a) =>
                                         {
                                             scope.Scale =
                                                 new Point(jQuery.Window.GetWidth() / (double)scope.MainArea.Size.Width * .9, ((jQuery.Window.GetHeight()) / (double)scope.MainArea.Size.Height) * .9);
                                             scope.Apply();
                                         });




            myClientGameManagerService.OnGameOver += (user, room) =>
                                                     {
                                                         //alert(JSON.stringify(data));
                                                     };


            scope.MainArea = null;


            //new Action<string,JsDictionary<string,object>>()


            /* scope.MoveCard = () =>
             {

                 for (var i = 0; i < 1; i++)
                 {
                     CardGameCard card = null;
                     while (card == null)
                     {
                         var pile = scope.MainArea.Spaces.RandomElement().Pile;
                         card = pile.Cards.RandomElement();
                         var _pile = scope.MainArea.Spaces.RandomElement();

                         if (card != null && _pile != null)
                         {
                             card.Appearance.EffectNames.Remove("bend");
                             if (_pile.Name.StartsWith("User"))
                             {

                                 card.Appearance.EffectNames.Add("bend");

                             }


                             pile.Cards.Remove(card);
                             _pile.Pile.Cards.Add(card);
                         }
                     }
                 }
             };

             scope.AnimateCard = () =>
             {

                 for (var i = 0; i < 1; i++)
                 {
                     CardGameCard card = null;
                     while (card == null)
                     {
                         var pile = scope.MainArea.Spaces.RandomElement().Pile;
                         card = pile.Cards.RandomElement();
                         var _pile = scope.MainArea.Spaces.RandomElement();

                         if (card != null && _pile != null)
                         {

                             var css = string.Format(".card{0}-{1}", card.Type, card.Value);
                             var clone = jQueryApi.jQuery.Select(css).FuckingClone();


                             var space = jQuery.Select(string.Format(".space{0}", _pile.Name));
                             var off = space.GetOffset();

                             clone.CSS("z-index", 1000);

                             JsDictionary ops = new JsDictionary();
                             ops["left"] = off.Left + space.GetWidth() / 2 - 71 / 2;
                             ops["top"] = off.Top + space.GetHeight() / 2 - 96 / 2;
                             ops["rotate"] = "0deg";


                             pile.Cards.Remove(card);
                             clone.Animate(ops, 700, (EffectEasing)(dynamic)("easeInOutQuart"), () =>
                             {
                                 card.Appearance.EffectNames.Remove("bend");
                                 if (_pile.Name.StartsWith("User"))
                                 {

                                     card.Appearance.EffectNames.Add("bend");

                                 }

                                 clone.Remove();
                                 _pile.Pile.Cards.Add(card);
                                 scope.Apply();

                             });



                         }
                     }
                 }
             };*/
        }
    }
}