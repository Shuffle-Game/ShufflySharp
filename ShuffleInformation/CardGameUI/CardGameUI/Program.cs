﻿using System;
using System.Runtime.CompilerServices;
using CardGameUI.Controllers;
using CardGameUI.Directives;
using CardGameUI.Scope;
using CardGameUI.Services;
using ng;
[assembly: ScriptSharpCompatibility(OmitDowncasts = true, OmitNullableChecks = true)]

namespace CardGameUI
{
    internal class Program
    {
        private static void Main()
        {
            angular.module("acg", new string[] { })
                   .config(new object[] {
                                                "$routeProvider",
                                                new Action<IRouteProviderProvider>(provider => {
                                                                                       provider.When("/gameUI", new Route() {Controller = "GameCtrl", TemplateURL = "partials/gameUI.html"}).
                                                                                                Otherwise(new OtherwiseRoute() {RedirectTo = "/gameUI"});
                                                                                   })
                                        })
                   .controller("GameCtrl", new object[] { "$scope", "effectWatcher", new Func<GameCtrlScope, EffectWatcherService, object>((scope, effectWatcher) => new GameCtrl(scope, effectWatcher)) })
                   .controller("ListEffectsController", new object[] { "$scope", "editEffects", "effectWatcher", "effectManager", new Func<ListEffectsScope, EditEffectService, EffectWatcherService, EffectManagerService, object>((scope, editEffects, effectWatcher, effectmanager) => new ListEffectsController(scope, editEffects, effectWatcher, effectmanager)) })
                   .controller("EffectEditorController", new object[] { "$scope", "editEffects", new Func<EffectEditorScope, EditEffectService, object>((scope, editEffects) => new EffectEditorController(scope, editEffects)) })
                   .service("editEffects", new object[] { new Func<object>(() => new EditEffectService()) })
                   .service("effectWatcher", new object[] { new Func<object>(() => new EffectWatcherService()) })
                   .service("effectManager", new object[] { new Func<object>(() => new EffectManagerService()) })
                   .directive("draggable", new object[] { new Func<object>(() => new DraggableDirective()) })
                   .directive("property", new object[] { new Func<object>(() => new PropertyDirective()) })
                   .directive("acgDrawCard", new object[] { "effectManager", new Func<EffectManagerService, object>((effectManager) => new AcgDrawCardDirective(effectManager)) })
                   .directive("acgDrawSpace", new object[] { new Func<object>(() => new AcgDrawSpaceDirective()) });

        }
    }
}