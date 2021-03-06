
(function() {
	'use strict';
	global.Client = global.Client || {};
	global.Client.Controllers = global.Client.Controllers || {};
	global.Client.Directives = global.Client.Directives || {};
	global.Client.Filters = global.Client.Filters || {};
	global.Client.Libs = global.Client.Libs || {};
	global.Client.Scope = global.Client.Scope || {};
	global.Client.Scope.Controller = global.Client.Scope.Controller || {};
	global.Client.Scope.Directive = global.Client.Scope.Directive || {};
	global.Client.Services = global.Client.Services || {};
	////////////////////////////////////////////////////////////////////////////////
	// DebugSpace
	var $DebugSpace = function() {
		this.gameSpace = null;
		this.cards = null;
		this.location = null;
	};
	$DebugSpace.__typeName = 'DebugSpace';
	global.DebugSpace = $DebugSpace;
	////////////////////////////////////////////////////////////////////////////////
	// DebugSpaceCard
	var $DebugSpaceCard = function() {
		this.gameCard = null;
		this.placeHolder = false;
		this.dragging = false;
		this.location = null;
		this.index = 0;
	};
	$DebugSpaceCard.__typeName = 'DebugSpaceCard';
	global.DebugSpaceCard = $DebugSpaceCard;
	////////////////////////////////////////////////////////////////////////////////
	// Client.BuildAngular
	var $Client_BuildAngular = function() {
	};
	$Client_BuildAngular.__typeName = 'Client.BuildAngular';
	$Client_BuildAngular.setup = function(gatewayServer) {
		var module = angular.module('acg', ['ui.utils', 'ui.codemirror']).config(['$routeProvider', $Client_BuildAngular.$buildRouteProvider]).config(['$httpProvider', $Client_BuildAngular.$buildHttpProvider]).value('gatewayServerURL', gatewayServer).controller($Client_Controllers_GameController.name$1, [$Client_BuildAngular.$scopeName, $Client_Services_ClientGameManagerService.name$1, $Client_Services_GameContentManagerService.name$1, $Client_Services_CreateUIService.name$1, function(scope, clientGameManagerService, gameContentManager, createUIService) {
			return new $Client_Controllers_GameController(scope, clientGameManagerService, gameContentManager, createUIService);
		}]).controller($Client_Controllers_$MinimizeController.$name, [$Client_BuildAngular.$scopeName, $Client_Services_UIManagerService.name$1, function(scope1, uiManager) {
			return new $Client_Controllers_$MinimizeController(scope1, uiManager);
		}]).controller($Client_Controllers_DebugGameController.name$1, [$Client_BuildAngular.$scopeName, $Client_Services_ClientDebugManagerService.name$1, $Client_Services_GameContentManagerService.name$1, $Client_Services_CreateUIService.name$1, function(scope2, clientGameManagerService1, gameContentManager1, createUIService1) {
			return new $Client_Controllers_DebugGameController(scope2, clientGameManagerService1, gameContentManager1, createUIService1);
		}]).controller($Client_Controllers_TestGameController.name$1, [$Client_BuildAngular.$scopeName, function(scope3) {
			return new $Client_Controllers_TestGameController(scope3);
		}]).controller($Client_Controllers_$GameEffectsEditorController.$name, [$Client_BuildAngular.$scopeName, $Client_Services_CreateUIService.name$1, function(scope4, createUIService2) {
			return new $Client_Controllers_$GameEffectsEditorController(scope4, createUIService2);
		}]).controller($Client_Controllers_$LoginController.$name, [$Client_BuildAngular.$scopeName, $Client_Services_UIManagerService.name$1, $Client_Services_ClientSiteManagerService.name$1, $Client_Services_MessageService.name$1, $Client_Services_CreateUIService.name$1, $Client_Services_ClientManagerService.name$1, function(scope5, uiManager1, clientSiteManagerService, messageService, createUIService3, clientManagerService) {
			return new $Client_Controllers_$LoginController(scope5, uiManager1, clientSiteManagerService, messageService, createUIService3, clientManagerService);
		}]).controller($Client_Controllers_$DebugQuestionController.$name, [$Client_BuildAngular.$scopeName, $Client_Services_ClientDebugManagerService.name$1, function(scope6, clientDebugManagerService) {
			return new $Client_Controllers_$DebugQuestionController(scope6, clientDebugManagerService);
		}]).controller($Client_Controllers_$QuestionController.$name, [$Client_BuildAngular.$scopeName, $Client_Services_ClientGameManagerService.name$1, function(scope7, clientGameManagerService2) {
			return new $Client_Controllers_$QuestionController(scope7, clientGameManagerService2);
		}]).controller($Client_Controllers_$HomeController.$name, [$Client_BuildAngular.$scopeName, $Client_Services_UIManagerService.name$1, $Client_Services_ClientSiteManagerService.name$1, $Client_Services_CreateUIService.name$1, function(scope8, uiManager2, clientSiteManagerService1, createUIService4) {
			return new $Client_Controllers_$HomeController(scope8, uiManager2, clientSiteManagerService1, createUIService4);
		}]).controller($Client_Controllers_$ActiveLobbyController.$name, [$Client_BuildAngular.$scopeName, $Client_Services_ClientManagerService.name$1, $Client_Services_CreateUIService.name$1, function(scope9, clientManagerService1, createUIService5) {
			return new $Client_Controllers_$ActiveLobbyController(scope9, clientManagerService1, createUIService5);
		}]).controller($Client_Controllers_$CreateRoomController.$name, [$Client_BuildAngular.$scopeName, function(scope10) {
			return new $Client_Controllers_$CreateRoomController(scope10);
		}]).controller($Client_Controllers_$GameManagerController.$name, [$Client_BuildAngular.$scopeName, $Client_Services_UIManagerService.name$1, $Client_Services_CreateUIService.name$1, $Client_Services_ClientSiteManagerService.name$1, $Client_Services_MessageService.name$1, function(scope11, uiManagerService, createUIService6, clientSiteManagerService2, messageService1) {
			return new $Client_Controllers_$GameManagerController(scope11, uiManagerService, createUIService6, clientSiteManagerService2, messageService1);
		}]).controller($Client_Controllers_$GameEditorController.$name, [$Client_BuildAngular.$scopeName, $Client_Services_ClientSiteManagerService.name$1, $Client_Services_ClientDebugManagerService.name$1, $Client_Services_MessageService.name$1, $Client_Services_CreateUIService.name$1, function(scope12, clientSiteManagerService3, clientDebugManagerService1, messageService2, createUIService7) {
			return new $Client_Controllers_$GameEditorController(scope12, clientSiteManagerService3, clientDebugManagerService1, messageService2, createUIService7);
		}]).controller($Client_Controllers_$GameLayoutEditorController.$name, [$Client_BuildAngular.$scopeName, $Client_Services_ClientSiteManagerService.name$1, $Client_Services_MessageService.name$1, $Client_Services_CreateUIService.name$1, function(scope13, clientSiteManagerService4, messageService3, createUIService8) {
			return new $Client_Controllers_$GameLayoutEditorController(scope13, clientSiteManagerService4, messageService3, createUIService8);
		}]).controller($Client_Controllers_$GameTestEditorController.$name, [$Client_BuildAngular.$scopeName, $Client_Services_ClientSiteManagerService.name$1, $Client_Services_ClientDebugManagerService.name$1, $Client_Services_MessageService.name$1, $Client_Services_CreateUIService.name$1, function(scope14, clientSiteManagerService5, clientDebugManagerService2, messageService4, createUIService9) {
			return new $Client_Controllers_$GameTestEditorController(scope14, clientSiteManagerService5, clientDebugManagerService2, messageService4, createUIService9);
		}]).controller($Client_Controllers_$GameScenarioEditorController.$name, [$Client_BuildAngular.$scopeName, $Client_Services_ClientSiteManagerService.name$1, $Client_Services_MessageService.name$1, $Client_Services_CreateUIService.name$1, $Client_Services_ClientGameManagerService.name$1, function(scope15, clientSiteManagerService6, messageService5, createUIService10) {
			return new $Client_Controllers_$GameScenarioEditorController(scope15, clientSiteManagerService6, messageService5, createUIService10);
		}]).controller($Client_Controllers_$GameCodeController.$name, [$Client_BuildAngular.$scopeName, $Client_Services_ClientManagerService.name$1, $Client_Services_MessageService.name$1, function(scope16, clientManagerService2, messageService6) {
			return new $Client_Controllers_$GameCodeController(scope16, clientManagerService2, messageService6);
		}]).controller($Client_Controllers_$DebugGameCodeController.$name, [$Client_BuildAngular.$scopeName, $Client_Services_ClientManagerService.name$1, $Client_Services_MessageService.name$1, function(scope17, clientManagerService3, messageService7) {
			return new $Client_Controllers_$DebugGameCodeController(scope17, clientManagerService3, messageService7);
		}]).controller($Client_Controllers_$MessageController.$name, [$Client_BuildAngular.$scopeName, function(scope18) {
			return new $Client_Controllers_$MessageController(scope18);
		}]).controller($Client_Controllers_EffectTesterController.name$1, [$Client_BuildAngular.$scopeName, function(scope19) {
			return new $Client_Controllers_EffectTesterController(scope19);
		}]).service($Client_Services_UIManagerService.name$1, [$Client_Services_ClientGameManagerService.name$1, function() {
			return new $Client_Services_UIManagerService();
		}]).service($Client_Services_ClientChatManagerService.name$1, [$Client_Services_GatewayService.name$1, function(gatewayService) {
			return new $Client_Services_ClientChatManagerService(gatewayService);
		}]).service($Client_Services_ClientGameManagerService.name$1, [$Client_Services_GatewayService.name$1, function(gatewayService1) {
			return new $Client_Services_ClientGameManagerService(gatewayService1);
		}]).service($Client_Services_ClientDebugManagerService.name$1, [$Client_Services_GatewayService.name$1, function(gatewayService2) {
			return new $Client_Services_ClientDebugManagerService(gatewayService2);
		}]).service($Client_Services_ClientSiteManagerService.name$1, [$Client_Services_GatewayService.name$1, function(gatewayService3) {
			return new $Client_Services_ClientSiteManagerService(gatewayService3);
		}]).service($Client_Services_GatewayService.name$1, ['gatewayServerURL', function(serverUrl) {
			return new $Client_Services_GatewayService(serverUrl);
		}]).service($Client_Services_GameContentManagerService.name$1, [function() {
			return new $Client_Services_GameContentManagerService();
		}]).service($Client_Services_MessageService.name$1, [$Client_Services_CreateUIService.name$1, $Client_BuildAngular.$rootScopeName, function(createUIService11, rootScopeService) {
			return new $Client_Services_MessageService(createUIService11, rootScopeService);
		}]).service($Client_Services_CreateUIService.name$1, [$Client_BuildAngular.$compileName, $Client_BuildAngular.$rootScopeName, function(compileService, rootScopeService1) {
			return new $Client_Services_CreateUIService(compileService, rootScopeService1);
		}]).service($Client_Services_ClientManagerService.name$1, [$Client_Services_ClientSiteManagerService.name$1, $Client_Services_ClientGameManagerService.name$1, $Client_Services_ClientDebugManagerService.name$1, $Client_Services_ClientChatManagerService.name$1, function(clientSiteManagerService7, clientGameManagerService3, clientDebugManagerService3, clientChatManagerService) {
			return new $Client_Services_ClientManagerService(clientSiteManagerService7, clientGameManagerService3, clientDebugManagerService3, clientChatManagerService);
		}]).directive($Client_Directives_GridDirective.name$1, [function() {
			return new $Client_Directives_GridDirective();
		}]).directive($Client_Directives_DraggableDirective.name$1, [function() {
			return new $Client_Directives_DraggableDirective();
		}]).directive($Client_Directives_FloatingWindowDirective.name$1, [$Client_Services_UIManagerService.name$1, function(uiManagerService1) {
			return new $Client_Directives_FloatingWindowDirective(uiManagerService1);
		}]).directive($Client_Directives_FancyListDirective.name$1, [function() {
			return new $Client_Directives_FancyListDirective();
		}]).directive($Client_Directives_ChatBoxDirective.name$1, [function() {
			return new $Client_Directives_ChatBoxDirective();
		}]).directive($Client_Directives_PropertyDirective.name$1, [function() {
			return new $Client_Directives_PropertyDirective();
		}]).directive($Client_Directives_AcgDrawCardDirective.name$1, [function() {
			return new $Client_Directives_AcgDrawCardDirective();
		}]).directive($Client_Directives_AcgDrawSpaceDirective.name$1, [function() {
			return new $Client_Directives_AcgDrawSpaceDirective();
		}]).directive($Client_Directives_AcgDebugDrawCardDirective.name$1, [$Client_BuildAngular.$rootScopeName, function(baseScope) {
			return new $Client_Directives_AcgDebugDrawCardDirective(baseScope);
		}]).directive($Client_Directives_AcgDebugDrawSpaceDirective.name$1, [function() {
			return new $Client_Directives_AcgDebugDrawSpaceDirective();
		}]).directive($Client_Directives_AcgTestDrawCardDirective.name$1, [function() {
			return new $Client_Directives_AcgTestDrawCardDirective();
		}]).directive($Client_Directives_AcgTestDrawSpaceDirective.name$1, [function() {
			return new $Client_Directives_AcgTestDrawSpaceDirective();
		}]).directive($Client_Directives_AcgEffectTestDrawAreaDirective.name$1, [function() {
			return new $Client_Directives_AcgEffectTestDrawAreaDirective();
		}]).directive($Client_Directives_AcgEffectTestDrawTextDirective.name$1, [function() {
			return new $Client_Directives_AcgEffectTestDrawTextDirective();
		}]).directive($Client_Directives_AcgEffectTestDrawCardDirective.name$1, [function() {
			return new $Client_Directives_AcgEffectTestDrawCardDirective();
		}]).directive($Client_Directives_AcgEffectTestDrawSpaceDirective.name$1, [function() {
			return new $Client_Directives_AcgEffectTestDrawSpaceDirective();
		}]).directive($Client_Directives_AcgTestDrawAreaDirective.name$1, [function() {
			return new $Client_Directives_AcgTestDrawAreaDirective();
		}]).directive($Client_Directives_AcgTestDrawTextDirective.name$1, [function() {
			return new $Client_Directives_AcgTestDrawTextDirective();
		}]).directive($Client_Directives_ForNextDirective.name$1, [function() {
			return new $Client_Directives_ForNextDirective();
		}]).directive($Client_Directives_SpecialNgRepeatDirective.name$1, [$Client_BuildAngular.$compileName, function(compilerService) {
			return new $Client_Directives_SpecialNgRepeatDirective(compilerService);
		}]).directive($Client_Directives_AcgSpacesDirective.name$1, [$Client_BuildAngular.$compileName, $Client_Services_GameContentManagerService.name$1, function(compile, gameContentManager2) {
			return new $Client_Directives_AcgSpacesDirective(compile, gameContentManager2);
		}]).filter($Client_Filters_RoundFilter.name$1, [function() {
			var $t1 = new $Client_Filters_RoundFilter();
			return ss.mkdel($t1, $t1.filter);
		}]).run([$Client_BuildAngular.$http, $Client_BuildAngular.$templateCache, function(http, templateCache) {
			$Client_BuildAngular.$buildCache(http, templateCache);
		}]);
		//            MinimizeController.Register(module);
		//                .Controller(MinimizeController.Name, new object[] { ScopeName, UIManagerService.Name, new Func<MinimizeScope, UIManagerService, object>((scope, uiManager) => new MinimizeController(scope, uiManager)) })
	};
	$Client_BuildAngular.$buildCache = function(http, templateCache) {
		var uis = [$Client_Controllers_GameController.view, $Client_Controllers_$MinimizeController.$view, $Client_Controllers_DebugGameController.view, $Client_Controllers_TestGameController.view, $Client_Controllers_$GameEffectsEditorController.$view, $Client_Controllers_$LoginController.$view, $Client_Controllers_$DebugQuestionController.$view, $Client_Controllers_$QuestionController.$view, $Client_Controllers_$HomeController.$view, $Client_Controllers_$ActiveLobbyController.$view, $Client_Controllers_$CreateRoomController.$view, $Client_Controllers_$GameManagerController.$view, $Client_Controllers_$GameEditorController.$view, $Client_Controllers_$GameLayoutEditorController.$view, $Client_Controllers_$GameTestEditorController.$view, $Client_Controllers_$GameScenarioEditorController.$view, $Client_Controllers_$GameCodeController.$view, $Client_Controllers_$MessageController.$view];
		for (var index = 0; index < uis.length; index++) {
			var ui = { $: ss.formatString('{1}partials/UIs/{0}.html', uis[index], CommonLibraries.Constants.contentAddress) };
			http.get(ui.$, null).success(ss.mkdel({ ui: ui }, function(a) {
				return templateCache.put(this.ui.$, a);
			}));
		}
	};
	$Client_BuildAngular.$buildRouteProvider = function(provider) {
	};
	$Client_BuildAngular.$buildHttpProvider = function(httpProvider) {
		httpProvider.defaults.useXDomain = true;
		delete httpProvider.defaults.headers.common['X-Requested-With'];
	};
	global.Client.BuildAngular = $Client_BuildAngular;
	////////////////////////////////////////////////////////////////////////////////
	// Client.BuildSite
	var $Client_BuildSite = function(gatewayServerAddress) {
		this.$gatewayServerAddress = null;
		$Client_BuildSite.instance = this;
		this.$gatewayServerAddress = gatewayServerAddress;
		$Client_BuildSite.$loadJunk(CommonLibraries.Constants.contentAddress, ss.mkdel(this, this.$ready));
	};
	$Client_BuildSite.__typeName = 'Client.BuildSite';
	$Client_BuildSite.$loadJunk = function(url, ready) {
		var scriptLoader = new $Client_Libs_ScriptLoader();
		$Client_Libs_ScriptLoader.loadCss(url + 'lib/jquery-ui.css');
		$Client_Libs_ScriptLoader.loadCss(url + 'lib/codemirror/lib/codemirror.css');
		$Client_Libs_ScriptLoader.loadCss(url + 'lib/codemirror/theme/night.css');
		$Client_Libs_ScriptLoader.loadCss(url + 'lib/site.css');
		var stepThree = function() {
			scriptLoader.load([url + 'lib/RawDeflate.js'], true, ready);
		};
		var stepTwo = function() {
			scriptLoader.load([url + 'lib/codemirror/mode/javascript/javascript.js', url + 'lib/WorkerConsole.js', url + 'lib/FunctionWorker.js', url + 'lib/Stats.js', url + 'lib/keyboardjs.js'], false, stepThree);
		};
		scriptLoader.load([url + 'lib/linq.js', url + 'lib/tween.js', url + 'lib/socket.io.js', url + 'lib/codemirror/lib/codemirror.js'], false, stepTwo);
	};
	global.Client.BuildSite = $Client_BuildSite;
	////////////////////////////////////////////////////////////////////////////////
	// Client.ClientHelpers
	var $Client_ClientHelpers = function() {
	};
	$Client_ClientHelpers.__typeName = 'Client.ClientHelpers';
	$Client_ClientHelpers.hexToRGB = function(hex) {
		var result = (new RegExp('^#?([a-f\\d]{2})([a-f\\d]{2})([a-f\\d]{2})$')).exec(hex);
		return (ss.isValue(result) ? { R: parseInt(result[1], 16), G: parseInt(result[2], 16), B: parseInt(result[3], 16) } : null);
	};
	$Client_ClientHelpers.transformRotate = function(ar) {
		return ss.formatString('rotate({0}deg)', ar);
	};
	$Client_ClientHelpers.noTransformRotate = function(ar) {
		if (ar === '') {
			return 0;
		}
		return parseFloat(ss.replaceAllString(ss.replaceAllString(ar, 'rotate(', ''), 'deg)', ''));
		//todo regex??
	};
	$Client_ClientHelpers.addCSSRule = function(sheet, selector, css) {
		var propText = Object.keys(css).map(function(p) {
			return p + ':' + css[p];
		}).join(';');
		sheet.insertRule(selector + '{' + propText + '}', sheet.cssRules.length);
	};
	$Client_ClientHelpers.createCSSSheet = function() {
		var document = window.document;
		var sheet = document.head.appendChild(document.createElement('style')).sheet;
		return sheet;
	};
	$Client_ClientHelpers.purgeCSS = function(classToChange) {
		var myClass = '.' + classToChange;
		var CSSRules = '';
		var document = window.document;
		if (document.all) {
			CSSRules = 'rules';
		}
		else if (document.getElementById) {
			CSSRules = 'cssRules';
		}
		for (var a = 0; a < document.styleSheets.length; a++) {
			if (ss.isNullOrUndefined(document.styleSheets[a][CSSRules])) {
				continue;
			}
			for (var i = 0; i < document.styleSheets[a][CSSRules].length; i++) {
				var sheet = document.styleSheets[a];
				if (ss.referenceEquals(sheet[CSSRules][i].selectorText, myClass)) {
					sheet.removeRule(i);
					sheet.insertRule(myClass + '{}', sheet.cssRules.length);
				}
			}
		}
	};
	$Client_ClientHelpers.changeCSS = function(classToChange, values) {
		var myClass = '.' + classToChange;
		var CSSRules = '';
		var document = window.document;
		if (document.all) {
			CSSRules = 'rules';
		}
		else if (document.getElementById) {
			CSSRules = 'cssRules';
		}
		for (var a = 0; a < document.styleSheets.length; a++) {
			var ruleSet = document.styleSheets[a][CSSRules];
			if (ss.isNullOrUndefined(ruleSet)) {
				continue;
			}
			for (var i = 0; i < ruleSet.length; i++) {
				var rule = ruleSet[i];
				if (ss.referenceEquals(rule.selectorText, myClass)) {
					var $t1 = Object.keys(values);
					for (var $t2 = 0; $t2 < $t1.length; $t2++) {
						var m = $t1[$t2];
						rule.style[m] = values[m];
					}
				}
			}
		}
	};
	global.Client.ClientHelpers = $Client_ClientHelpers;
	////////////////////////////////////////////////////////////////////////////////
	// Client.Controllers.ActiveLobbyController
	var $Client_Controllers_$ActiveLobbyController = function(scope, clientManagerService, createUIService) {
		this.$myCreateUIService = null;
		this.$myScope = null;
		this.$clientManagerService = null;
		this.$myScope = scope;
		this.$clientManagerService = clientManagerService;
		this.$myCreateUIService = createUIService;
		this.$myScope.model.chatLines = [];
		this.$myScope.visible = false;
		this.$myScope.model.windowClosed = ss.delegateCombine(this.$myScope.model.windowClosed, ss.mkdel(this, function() {
			this.$myScope.swingAway(4, false, null);
			clientManagerService.clientSiteManagerService.leaveRoom({ room: this.$myScope.model.room });
			this.$myCreateUIService.createSingleton($Client_Controllers_$HomeController.$view);
			this.$myScope.destroyWindow();
		}));
		this.$myScope.model.startGame = ss.delegateCombine(this.$myScope.model.startGame, function() {
			clientManagerService.clientSiteManagerService.startGame({});
		});
		clientManagerService.clientGameManagerService.onGameStarted = ss.makeGenericType($Client_Services_UserEventCacher$1, [Models.GameManagerModels.GameRoomModel]).op_Addition(clientManagerService.clientGameManagerService.onGameStarted, ss.mkdel(this, function(user, room) {
			this.$myCreateUIService.create($Client_Controllers_GameController.view);
			//UIWindow.Height = 200;
		}));
		this.$myScope.model.sendChatMessage = ss.delegateCombine(this.$myScope.model.sendChatMessage, ss.mkdel(this, function() {
			if (this.$myScope.model.currentChatMessage.trim() === '') {
				return;
			}
			clientManagerService.clientChatManagerService.sendChatMessage({ message: this.$myScope.model.currentChatMessage.trim() });
			this.$myScope.model.currentChatMessage = '';
		}));
		clientManagerService.clientSiteManagerService.onGetRoomInfoReceived = ss.makeGenericType($Client_Services_UserEventCacher$1, [Models.SiteManagerModels.GetRoomInfoResponse]).op_Addition(clientManagerService.clientSiteManagerService.onGetRoomInfoReceived, ss.mkdel(this, this.$getRoomInfo));
		clientManagerService.clientChatManagerService.onGetChatLines = ss.makeGenericType($Client_Services_UserEventCacher$1, [Models.ChatManagerModels.ChatMessagesModel]).op_Addition(clientManagerService.clientChatManagerService.onGetChatLines, ss.mkdel(this, this.$getChatLines));
		clientManagerService.clientChatManagerService.onGetChatInfo = ss.makeGenericType($Client_Services_UserEventCacher$1, [Models.ChatManagerModels.ChatRoomInfoModel]).op_Addition(clientManagerService.clientChatManagerService.onGetChatInfo, ss.mkdel(this, this.$getChatInfo));
		this.$myScope.onReady = ss.mkdel(this, function() {
			this.$myScope.swingAway(4, true, null);
			this.$populateGameRoom(this.$myScope.model.room);
			this.$myScope.swingBack(null);
		});
	};
	$Client_Controllers_$ActiveLobbyController.__typeName = 'Client.Controllers.$ActiveLobbyController';
	////////////////////////////////////////////////////////////////////////////////
	// Client.Controllers.AngularController
	var $Client_Controllers_$AngularController = function() {
	};
	$Client_Controllers_$AngularController.__typeName = 'Client.Controllers.$AngularController';
	$Client_Controllers_$AngularController.$make = function(T) {
		return function(func, parms) {
			var m = new Array(parms.length + 1);
			for (var i = 0; i < parms.length; i++) {
				m[i] = parms[i];
			}
			m[parms.length] = func;
			return m;
		};
	};
	$Client_Controllers_$AngularController.$make$1 = function(T, T1) {
		return function(func, parms) {
			var m = new Array(parms.length + 1);
			for (var i = 0; i < parms.length; i++) {
				m[i] = parms[i];
			}
			m[parms.length] = func;
			return m;
		};
	};
	$Client_Controllers_$AngularController.$make$2 = function(T, T1, T2) {
		return function(func, parms) {
			var m = new Array(parms.length + 1);
			for (var i = 0; i < parms.length; i++) {
				m[i] = parms[i];
			}
			m[parms.length] = func;
			return m;
		};
	};
	$Client_Controllers_$AngularController.$make$3 = function(T, T1, T2, T3) {
		return function(func, parms) {
			var m = new Array(parms.length + 1);
			for (var i = 0; i < parms.length; i++) {
				m[i] = parms[i];
			}
			m[parms.length] = func;
			return m;
		};
	};
	$Client_Controllers_$AngularController.$make$4 = function(T, T1, T2, T3, T4) {
		return function(func, parms) {
			var m = new Array(parms.length + 1);
			for (var i = 0; i < parms.length; i++) {
				m[i] = parms[i];
			}
			m[parms.length] = func;
			return m;
		};
	};
	$Client_Controllers_$AngularController.$make$5 = function(T, T1, T2, T3, T4, T5) {
		return function(func, parms) {
			var m = new Array(parms.length + 1);
			for (var i = 0; i < parms.length; i++) {
				m[i] = parms[i];
			}
			m[parms.length] = func;
			return m;
		};
	};
	$Client_Controllers_$AngularController.$make$6 = function(T, T1, T2, T3, T4, T5, T6) {
		return function(func, parms) {
			var m = new Array(parms.length + 1);
			for (var i = 0; i < parms.length; i++) {
				m[i] = parms[i];
			}
			m[parms.length] = func;
			return m;
		};
	};
	$Client_Controllers_$AngularController.$make$7 = function(T, T1, T2, T3, T4, T5, T6, T7) {
		return function(func, parms) {
			var m = new Array(parms.length + 1);
			for (var i = 0; i < parms.length; i++) {
				m[i] = parms[i];
			}
			m[parms.length] = func;
			return m;
		};
	};
	$Client_Controllers_$AngularController.$make$8 = function(T, T1, T2, T3, T4, T5, T6, T7, T8) {
		return function(func, parms) {
			var m = new Array(parms.length + 1);
			for (var i = 0; i < parms.length; i++) {
				m[i] = parms[i];
			}
			m[parms.length] = func;
			return m;
		};
	};
	////////////////////////////////////////////////////////////////////////////////
	// Client.Controllers.CreateRoomController
	var $Client_Controllers_$CreateRoomController = function(scope) {
		this.$myScope = null;
		this.$myScope = scope;
		this.$myScope.visible = false;
		this.$myScope.model.windowClosed = ss.mkdel(this, function() {
			this.$myScope.swingAway(2, false, null);
			this.$myScope.visible = false;
		});
		this.$myScope.model.createRoom = ss.mkdel(this, this.$createRoomFn);
		this.$myScope.onReady = ss.delegateCombine(this.$myScope.onReady, ss.mkdel(this, function() {
			this.$myScope.swingAway(6, true, null);
			this.$myScope.swingBack(null);
		}));
	};
	$Client_Controllers_$CreateRoomController.__typeName = 'Client.Controllers.$CreateRoomController';
	////////////////////////////////////////////////////////////////////////////////
	// Client.Controllers.DebugGameCodeController
	var $Client_Controllers_$DebugGameCodeController = function(scope, clientManagerService, messageService) {
		this.$myClientManagerService = null;
		this.$myMessageService = null;
		this.$scope = null;
		$Client_Controllers_$DebugGameCodeController.$instance = this;
		//scope.Model.
		this.$scope = scope;
		this.$myClientManagerService = clientManagerService;
		this.$myMessageService = messageService;
		scope.visible = true;
		scope.model.breakpoints = [];
		var extraKeys = {};
		extraKeys['Ctrl-Space'] = 'autocomplete';
		extraKeys['Ctrl-S'] = 'save';
		scope.model.codeMirrorOptions = {
			lineNumbers: true,
			theme: 'midnight',
			mode: 'javascript',
			gutters: ['CodeMirror-linenumbers', 'breakpoints'],
			onGutterClick: ss.mkdel(this, function(cm, n, gutter, evt) {
				scope.model.codeMirror = cm;
				var info = cm.lineInfo(n);
				if (ss.isValue(info.gutterMarkers) && ss.isValue(info.gutterMarkers['breakpoints'])) {
					ss.remove(scope.model.breakpoints, n + 1);
					cm.setGutterMarker(n, 'breakpoints', null);
				}
				else {
					ss.add(scope.model.breakpoints, n + 1);
					cm.setGutterMarker(n, 'breakpoints', this.$makeMarker());
				}
				if (ss.isValue(scope.model.room)) {
					clientManagerService.clientDebugManagerService.debugResponse({ roomID: scope.model.room.roomID, breakpoints: scope.model.breakpoints, step: 'continue', action: false });
				}
			}),
			onLoad: function(editor) {
				scope.model.codeMirror = editor;
			},
			extraKeys: extraKeys
		};
		clientManagerService.clientDebugManagerService.onGetDebugBreak = ss.makeGenericType($Client_Services_UserEventCacher$1, [Models.DebugGameManagerModels.DebugGameBreakModel]).op_Addition(clientManagerService.clientDebugManagerService.onGetDebugBreak, function(user, debugBreak) {
			for (var i = 0; i < scope.model.codeMirror.lineCount(); i++) {
				scope.model.codeMirror.removeLineClass(i, 'background', 'codemirror-highlight-line');
			}
			scope.model.codeMirror.addLineClass(debugBreak.lineNumber - 1, 'background', 'codemirror-highlight-line');
			scope.model.codeMirror.setCursor(debugBreak.lineNumber - 1, 0);
			scope.model.variableLookupResult = debugBreak.variableLookupResult;
			scope.$apply();
		});
		scope.model.stepInto = function() {
			clientManagerService.clientDebugManagerService.debugResponse({ roomID: scope.model.room.roomID, breakpoints: scope.model.breakpoints, step: 'into', action: true });
		};
		scope.model.stepOver = function() {
			clientManagerService.clientDebugManagerService.debugResponse({ roomID: scope.model.room.roomID, breakpoints: scope.model.breakpoints, step: 'over', action: true });
		};
		scope.model.continue = function() {
			clientManagerService.clientDebugManagerService.debugResponse({ roomID: scope.model.room.roomID, breakpoints: scope.model.breakpoints, step: 'continue', action: true });
		};
		scope.model.lookupVariable = function() {
			clientManagerService.clientDebugManagerService.debugResponse({ roomID: scope.model.room.roomID, breakpoints: scope.model.breakpoints, step: 'lookup', action: true, variableLookup: scope.model.variableLookup });
		};
		scope.$watch('model.game.gameCode.code', function() {
		});
		this.$scope.$watch('model.game', ss.mkdel(this, function() {
			this.$scope.model.updateStatus = 'dirty';
		}), true);
		scope.model.forceUpdate = false;
		scope.onReady = ss.delegateCombine(scope.onReady, function() {
			scope.model.forceUpdate = true;
			scope.$apply();
		});
		this.$myClientManagerService.clientSiteManagerService.onDeveloperUpdateGameReceived = ss.makeGenericType($Client_Services_UserEventCacher$1, [Models.SiteManagerModels.DeveloperUpdateGameResponse]).op_Addition(this.$myClientManagerService.clientSiteManagerService.onDeveloperUpdateGameReceived, ss.mkdel(this, this.$onDeveloperUpdateGameReceivedFn));
		this.$scope.model.updateStatus = 'synced';
		this.$scope.model.updateGame = ss.mkdel(this, this.$updateGameFn);
	};
	$Client_Controllers_$DebugGameCodeController.__typeName = 'Client.Controllers.$DebugGameCodeController';
	////////////////////////////////////////////////////////////////////////////////
	// Client.Controllers.DebugQuestionController
	var $Client_Controllers_$DebugQuestionController = function(scope, clientDebugManagerService) {
		this.$myClientDebugManagerService = null;
		this.$myScope = null;
		this.$myScope = scope;
		this.$myClientDebugManagerService = clientDebugManagerService;
		this.$myScope.model.answerQuestion = ss.mkdel(this, this.$answerQuestionFn);
		this.$myScope.visible = false;
		this.$myScope.onReady = ss.delegateCombine(this.$myScope.onReady, ss.mkdel(this, function() {
			this.$myScope.swingAway(0, true, null);
			this.$myScope.swingBack(null);
		}));
	};
	$Client_Controllers_$DebugQuestionController.__typeName = 'Client.Controllers.$DebugQuestionController';
	////////////////////////////////////////////////////////////////////////////////
	// Client.Controllers.GameCodeController
	var $Client_Controllers_$GameCodeController = function(scope, clientManagerService, messageService) {
		this.$myClientManagerService = null;
		this.$myMessageService = null;
		this.$myScope = null;
		$Client_Controllers_$GameCodeController.$instance = this;
		//scope.Model.
		this.$myScope = scope;
		this.$myClientManagerService = clientManagerService;
		this.$myMessageService = messageService;
		scope.visible = true;
		//
		//            scope.Model.CodeMirrorOptions =new {lineNumbers= true,theme="midnight",mode="javascript"   ,
		//
		//            onGutterClick= (cm, n) =>{
		//
		//            var info = cm.lineInfo(n);
		//
		//            if (info.markerText) {
		//
		//            window.shuffUIManager.codeArea.breakPoints.splice(window.shuffUIManager.codeArea.breakPoints.indexOf(n-1), 0);
		//
		//            cm.clearMarker(n);
		//
		//            } else {
		//
		//            window.shuffUIManager.codeArea.breakPoints.push(n-1);
		//
		//            cm.setMarker(n, "<span style='color: #900'>●</span> %N%");}},extraKeys=new { "Ctrl-Space"= "autocomplete","Ctrl-S"="save" }}
		//
		//            ;
		scope.$watch('model.game.gameCode.code', function() {
		});
		this.$myScope.$watch('model.game', ss.mkdel(this, function() {
			this.$myScope.model.updateStatus = 'dirty';
		}), true);
		scope.model.forceUpdate = false;
		scope.onReady = ss.delegateCombine(scope.onReady, function() {
			scope.model.forceUpdate = true;
			scope.$apply();
		});
		this.$myClientManagerService.clientSiteManagerService.onDeveloperUpdateGameReceived = ss.makeGenericType($Client_Services_UserEventCacher$1, [Models.SiteManagerModels.DeveloperUpdateGameResponse]).op_Addition(this.$myClientManagerService.clientSiteManagerService.onDeveloperUpdateGameReceived, ss.mkdel(this, this.$onDeveloperUpdateGameReceivedFn));
		this.$myScope.model.updateStatus = 'synced';
		this.$myScope.model.updateGame = ss.mkdel(this, this.$updateGameFn);
	};
	$Client_Controllers_$GameCodeController.__typeName = 'Client.Controllers.$GameCodeController';
	////////////////////////////////////////////////////////////////////////////////
	// Client.Controllers.GameEditorController
	var $Client_Controllers_$GameEditorController = function(scope, clientSiteManagerService, clientDebugManagerService, messageService, createUIService) {
		this.$clientDebugManagerService = null;
		this.$myClientSiteManagerService = null;
		this.$myCreateUIService = null;
		this.$myMessageService = null;
		this.$myScope = null;
		this.$myScope = scope;
		this.$myClientSiteManagerService = clientSiteManagerService;
		this.$clientDebugManagerService = clientDebugManagerService;
		this.$myMessageService = messageService;
		this.$myCreateUIService = createUIService;
		this.$myScope.model.openCode = ss.mkdel(this, this.$openCodeFn);
		this.$myScope.model.openEffects = ss.mkdel(this, this.$openEffectsFn);
		this.$myScope.model.openLayout = ss.mkdel(this, this.$openLayoutFn);
		this.$myScope.model.openTest = ss.mkdel(this, this.$openTestFn);
		var $t3 = this.$myScope.model;
		var $t1 = $Client_Scope_Controller_GameEditorSelectionScopeModel.$ctor();
		$t1.showGrid = true;
		$t1.showCards = true;
		var $t2 = $Client_Scope_Controller_SelectedScenarioPieces.$ctor();
		$t2.piece = 'none';
		$t1.selectedScenarioPieces = $t2;
		$t3.selection = $t1;
		this.$myScope.visible = false;
		this.$myScope.onClose = ss.delegateCombine(this.$myScope.onClose, function() {
			//todo destroy spawned
		});
		this.$myScope.$watch('model.game', ss.mkdel(this, function() {
			this.$myScope.model.updateStatus = 'dirty';
		}), true);
		this.$myClientSiteManagerService.onDeveloperUpdateGameReceived = ss.makeGenericType($Client_Services_UserEventCacher$1, [Models.SiteManagerModels.DeveloperUpdateGameResponse]).op_Addition(this.$myClientSiteManagerService.onDeveloperUpdateGameReceived, ss.mkdel(this, this.$onDeveloperUpdateGameReceivedFn));
		this.$myScope.model.updateStatus = 'synced';
		this.$myScope.model.updateGame = ss.mkdel(this, this.$updateGameFn);
		this.$myScope.onReady = ss.delegateCombine(this.$myScope.onReady, ss.mkdel(this, function() {
			this.$myScope.swingAway(2, true, null);
			this.$myScope.swingBack(null);
		}));
		//
		//            Window.SetTimeout(() =>
		//
		//            {
		//
		//            OpenTestFn();
		//
		//            scope.Minimize();
		//
		//            }, 100);
	};
	$Client_Controllers_$GameEditorController.__typeName = 'Client.Controllers.$GameEditorController';
	////////////////////////////////////////////////////////////////////////////////
	// Client.Controllers.GameEffectsEditorController
	var $Client_Controllers_$GameEffectsEditorController = function(scope, createUIService) {
		this.$createUIService = null;
		this.$myScope = null;
		this.$myScope = scope;
		this.$createUIService = createUIService;
		var effectTypes = [];
		ss.add(effectTypes, 'bend');
		ss.add(effectTypes, 'highlight');
		ss.add(effectTypes, 'rotate');
		ss.add(effectTypes, 'styleProperty');
		scope.visible = true;
		this.$myScope.model.effectTypes = effectTypes;
		this.$myScope.model.newEffectType = 'bend';
		this.$myScope.model.newEffectName = '';
		this.$myScope.model.addEffect = ss.mkdel(this, this.$addEffectFn);
		this.$myScope.model.removeEffect = ss.mkdel(this, this.$removeEffectFn);
		this.$myScope.$watch('model.selection.selectedEffect', ss.mkdel(this, function() {
			if (ss.isValue(this.$myScope.model.selection.selectedEffect)) {
			}
		}));
		var effectTesterUI = createUIService.createSingleton$2($Client_Scope_Controller_EffectTesterControllerScope).call(createUIService, $Client_Controllers_EffectTesterController.view, ss.mkdel(this, function(_scope, elem) {
			_scope.model = $Client_Scope_Controller_EffectTesterControllerScopeModel.$ctor();
			_scope.model.game = this.$myScope.model.game;
			_scope.model.selection = this.$myScope.model.selection;
		}));
		this.$myScope.onClose = ss.delegateCombine(this.$myScope.onClose, ss.mkdel(effectTesterUI, effectTesterUI.destroy));
	};
	$Client_Controllers_$GameEffectsEditorController.__typeName = 'Client.Controllers.$GameEffectsEditorController';
	$Client_Controllers_$GameEffectsEditorController.$makeEffect = function(effectName, type) {
		var $t1 = Models.SiteManagerModels.Game.GameEffectModel.$ctor();
		$t1.name = effectName;
		$t1.properties = [];
		$t1.guid = ss.Guid.newGuid().toString();
		var effect = $t1;
		effect.type = type;
		switch (effect.type) {
			case 'highlight': {
				var $t3 = effect.properties;
				var $t2 = Models.SiteManagerModels.Game.GameEffectPropertyModel.$ctor();
				$t2.name = 'Radius';
				$t2.value = 5;
				$t2.type = 'number';
				ss.add($t3, $t2);
				var $t5 = effect.properties;
				var $t4 = Models.SiteManagerModels.Game.GameEffectPropertyModel.$ctor();
				$t4.name = 'Color';
				$t4.value = '#242444';
				$t4.type = 'color';
				ss.add($t5, $t4);
				var $t7 = effect.properties;
				var $t6 = Models.SiteManagerModels.Game.GameEffectPropertyModel.$ctor();
				$t6.name = 'Opacity';
				$t6.value = 0.5;
				$t6.type = 'number';
				ss.add($t7, $t6);
				var $t9 = effect.properties;
				var $t8 = Models.SiteManagerModels.Game.GameEffectPropertyModel.$ctor();
				$t8.name = 'Rotate';
				$t8.value = 0;
				$t8.type = 'number';
				ss.add($t9, $t8);
				var $t11 = effect.properties;
				var $t10 = Models.SiteManagerModels.Game.GameEffectPropertyModel.$ctor();
				$t10.name = 'OffsetX';
				$t10.value = 0;
				$t10.type = 'number';
				ss.add($t11, $t10);
				var $t13 = effect.properties;
				var $t12 = Models.SiteManagerModels.Game.GameEffectPropertyModel.$ctor();
				$t12.name = 'OffsetY';
				$t12.value = 0;
				$t12.type = 'number';
				ss.add($t13, $t12);
				break;
			}
			case 'rotate': {
				var $t15 = effect.properties;
				var $t14 = Models.SiteManagerModels.Game.GameEffectPropertyModel.$ctor();
				$t14.name = 'Degrees';
				$t14.value = 90;
				$t14.type = 'number';
				ss.add($t15, $t14);
				break;
			}
			case 'bend': {
				var $t17 = effect.properties;
				var $t16 = Models.SiteManagerModels.Game.GameEffectPropertyModel.$ctor();
				$t16.name = 'Degrees';
				$t16.value = 15;
				$t16.type = 'number';
				ss.add($t17, $t16);
				break;
			}
			case 'styleProperty': {
				var $t19 = effect.properties;
				var $t18 = Models.SiteManagerModels.Game.GameEffectPropertyModel.$ctor();
				$t18.name = 'Property Name';
				$t18.value = 'background-color';
				$t18.type = 'text';
				ss.add($t19, $t18);
				var $t21 = effect.properties;
				var $t20 = Models.SiteManagerModels.Game.GameEffectPropertyModel.$ctor();
				$t20.name = 'Property Value';
				$t20.value = 'red';
				$t20.type = 'text';
				ss.add($t21, $t20);
				break;
			}
			case 'animated': {
				var $t23 = effect.properties;
				var $t22 = Models.SiteManagerModels.Game.GameEffectPropertyModel.$ctor();
				$t22.name = 'idk';
				$t22.value = 'rite?';
				$t22.type = 'text';
				ss.add($t23, $t22);
				break;
			}
		}
		return effect;
	};
	////////////////////////////////////////////////////////////////////////////////
	// Client.Controllers.GameLayoutEditorController
	var $Client_Controllers_$GameLayoutEditorController = function(scope, clientSiteManagerService, messageService, createUIService) {
		this.$myClientSiteManagerService = null;
		this.$myCreateUIService = null;
		this.$myMessageService = null;
		this.$myScope = null;
		this.$scenario = null;
		this.$myScope = scope;
		this.$myClientSiteManagerService = clientSiteManagerService;
		this.$myMessageService = messageService;
		this.$myCreateUIService = createUIService;
		this.$myScope.visible = true;
		this.$myScope.model.toggleGrid = ss.mkdel(this, this.$toggleGridFn);
		this.$myScope.model.toggleCards = ss.mkdel(this, this.$toggleCardsFn);
		this.$myScope.model.addText = ss.mkdel(this, this.$addTextFn);
		this.$myScope.model.addArea = ss.mkdel(this, this.$addAreaFn);
		this.$myScope.model.addSpace = ss.mkdel(this, this.$addSpaceFn);
		this.$myScope.model.removeArea = ss.mkdel(this, this.$removeAreaFn);
		this.$myScope.model.removeSpace = ss.mkdel(this, this.$removeSpaceFn);
		this.$myScope.model.removeText = ss.mkdel(this, this.$removeTextFn);
		this.$myScope.model.openScenarios = ss.mkdel(this, this.$openScenariosFn);
		this.$myScope.model.selection.selectedLayoutPiece = 'none';
		this.$myScope.$watch('model.selection.selectedSpace', ss.mkdel(this, function() {
			if (ss.isNullOrUndefined(this.$myScope.model.selection.selectedSpace)) {
				return;
			}
			this.$myScope.model.selection.selectedText = null;
			this.$myScope.model.selection.selectedArea = null;
			this.$myScope.model.selection.selectedLayoutPiece = 'space';
			this.$myScope.model.selection.selectedCard = null;
		}));
		this.$myScope.$watch('model.selection.selectedText', ss.mkdel(this, function() {
			if (ss.isNullOrUndefined(this.$myScope.model.selection.selectedText)) {
				return;
			}
			this.$myScope.model.selection.selectedSpace = null;
			this.$myScope.model.selection.selectedArea = null;
			this.$myScope.model.selection.selectedLayoutPiece = 'text';
		}));
		this.$myScope.$watch('model.selection.selectedArea', ss.mkdel(this, function() {
			if (ss.isNullOrUndefined(this.$myScope.model.selection.selectedArea)) {
				return;
			}
			this.$myScope.model.selection.selectedText = null;
			this.$myScope.model.selection.selectedSpace = null;
			this.$myScope.model.selection.selectedLayoutPiece = 'area';
		}));
		this.$myScope.$watch('model.game', ss.mkdel(this, function() {
			this.$myScope.model.updateStatus = 'dirty';
		}), true);
		this.$myClientSiteManagerService.onDeveloperUpdateGameReceived = ss.makeGenericType($Client_Services_UserEventCacher$1, [Models.SiteManagerModels.DeveloperUpdateGameResponse]).op_Addition(this.$myClientSiteManagerService.onDeveloperUpdateGameReceived, ss.mkdel(this, this.$onDeveloperUpdateGameReceivedFn));
		this.$myScope.model.updateStatus = 'synced';
		this.$myScope.model.updateGame = ss.mkdel(this, this.$updateGameFn);
		var testgame = this.$myCreateUIService.createSingleton$2($Client_Scope_Controller_TestGameControllerScope).call(this.$myCreateUIService, $Client_Controllers_TestGameController.view, ss.mkdel(this, function(_scope, elem) {
			_scope.model = $Client_Scope_Controller_TestGameControllerScopeModel.$ctor();
			_scope.model.game = this.$myScope.model.game;
			_scope.model.selection = this.$myScope.model.selection;
		}));
		this.$myScope.onClose = ss.delegateCombine(this.$myScope.onClose, ss.mkdel(this, function() {
			testgame.destroy();
			if (ss.isValue(this.$scenario)) {
				this.$scenario.destroy();
			}
		}));
	};
	$Client_Controllers_$GameLayoutEditorController.__typeName = 'Client.Controllers.$GameLayoutEditorController';
	$Client_Controllers_$GameLayoutEditorController.$sureUpScenarios = function(gameModel) {
		for (var $t1 = 0; $t1 < gameModel.gameLayoutScenarios.length; $t1++) {
			var gameLayoutScenario = gameModel.gameLayoutScenarios[$t1];
			for (var $t2 = 0; $t2 < gameModel.gameLayout.spaces.length; $t2++) {
				var gameSpaceModel = { $: gameModel.gameLayout.spaces[$t2] };
				if (gameLayoutScenario.spaces.filter(ss.mkdel({ gameSpaceModel: gameSpaceModel }, function(a) {
					return ss.referenceEquals(a.spaceGuid, this.gameSpaceModel.$.guid);
				})).length === 0) {
					var $t3 = [];
					var $t4 = Models.SiteManagerModels.Game.GameLayoutScenarioCard.$ctor();
					$t4.cardGuid = ss.Guid.newGuid().toString();
					$t4.type = 1;
					$t4.value = 5;
					$t4.state = 'faceDown';
					ss.add($t3, $t4);
					null;
					var $t5 = Models.SiteManagerModels.Game.GameLayoutScenarioCard.$ctor();
					$t5.cardGuid = ss.Guid.newGuid().toString();
					$t5.type = 1;
					$t5.value = 5;
					$t5.state = 'faceUp';
					ss.add($t3, $t5);
					null;
					var $t6 = Models.SiteManagerModels.Game.GameLayoutScenarioCard.$ctor();
					$t6.cardGuid = ss.Guid.newGuid().toString();
					$t6.type = 1;
					$t6.value = 5;
					$t6.state = 'faceDown';
					ss.add($t3, $t6);
					null;
					var $t7 = Models.SiteManagerModels.Game.GameLayoutScenarioCard.$ctor();
					$t7.cardGuid = ss.Guid.newGuid().toString();
					$t7.type = 1;
					$t7.value = 5;
					$t7.state = 'faceUp';
					ss.add($t3, $t7);
					null;
					var $t8 = Models.SiteManagerModels.Game.GameLayoutScenarioCard.$ctor();
					$t8.cardGuid = ss.Guid.newGuid().toString();
					$t8.type = 1;
					$t8.value = 5;
					$t8.state = 'faceDown';
					ss.add($t3, $t8);
					null;
					var $t9 = Models.SiteManagerModels.Game.GameLayoutScenarioCard.$ctor();
					$t9.cardGuid = ss.Guid.newGuid().toString();
					$t9.type = 1;
					$t9.value = 5;
					$t9.state = 'faceUp';
					ss.add($t3, $t9);
					null;
					var defaultCards = $t3;
					var $t11 = gameLayoutScenario.spaces;
					var $t10 = Models.SiteManagerModels.Game.GameLayoutScenarioSpace.$ctor();
					$t10.spaceGuid = gameSpaceModel.$.guid;
					$t10.cards = defaultCards;
					ss.add($t11, $t10);
				}
			}
			for (var $t12 = 0; $t12 < gameLayoutScenario.spaces.length; $t12++) {
				var gameSpaceModel1 = { $: gameLayoutScenario.spaces[$t12] };
				if (gameModel.gameLayout.spaces.filter(ss.mkdel({ gameSpaceModel1: gameSpaceModel1 }, function(a1) {
					return ss.referenceEquals(a1.guid, this.gameSpaceModel1.$.spaceGuid);
				})).length === 0) {
					ss.remove(gameLayoutScenario.spaces, gameSpaceModel1.$);
				}
			}
			for (var $t13 = 0; $t13 < gameModel.effects.length; $t13++) {
				var gameEffectModel = { $: gameModel.effects[$t13] };
				if (gameLayoutScenario.effects.filter(ss.mkdel({ gameEffectModel: gameEffectModel }, function(a2) {
					return ss.referenceEquals(a2.effectGuid, this.gameEffectModel.$.guid);
				})).length === 0) {
					var $t15 = gameLayoutScenario.effects;
					var $t14 = Models.SiteManagerModels.Game.GameLayoutScenarioEffect.$ctor();
					$t14.effectGuid = gameEffectModel.$.guid;
					$t14.areaGuids = [];
					$t14.textGuids = [];
					$t14.spaceGuids = [];
					$t14.cardGuids = [];
					ss.add($t15, $t14);
				}
			}
			for (var $t16 = 0; $t16 < gameLayoutScenario.effects.length; $t16++) {
				var gameEffectModel1 = { $: gameLayoutScenario.effects[$t16] };
				if (gameModel.effects.filter(ss.mkdel({ gameEffectModel1: gameEffectModel1 }, function(a3) {
					return ss.referenceEquals(a3.guid, this.gameEffectModel1.$.effectGuid);
				})).length === 0) {
					ss.remove(gameLayoutScenario.effects, gameEffectModel1.$);
				}
			}
		}
	};
	////////////////////////////////////////////////////////////////////////////////
	// Client.Controllers.GameManagerController
	var $Client_Controllers_$GameManagerController = function(scope, uiManager, createUIService, clientSiteManagerService, messageService) {
		this.$createUIService = null;
		this.$myClientSiteManagerService = null;
		this.$myMessageService = null;
		this.$myScope = null;
		this.$myUIManager = null;
		this.$myScope = scope;
		this.$myUIManager = uiManager;
		this.$createUIService = createUIService;
		this.$myClientSiteManagerService = clientSiteManagerService;
		this.$myMessageService = messageService;
		this.$myScope.model = $Client_Scope_Controller_GameManagerModel.$ctor();
		this.$myScope.visible = true;
		this.$myClientSiteManagerService.getGamesByUser(this.$myUIManager.clientInfo.loggedInUser.hash);
		this.$myClientSiteManagerService.onGetGamesByUserReceived = ss.makeGenericType($Client_Services_UserEventCacher$1, [Models.SiteManagerModels.GetGamesByUserResponse]).op_Addition(this.$myClientSiteManagerService.onGetGamesByUserReceived, ss.mkdel(this, this.$onOnGetGamesByUserReceivedFn));
		this.$myClientSiteManagerService.onDeveloperCreateGameReceived = ss.makeGenericType($Client_Services_UserEventCacher$1, [Models.SiteManagerModels.DeveloperCreateGameResponse]).op_Addition(this.$myClientSiteManagerService.onDeveloperCreateGameReceived, ss.mkdel(this, this.$onDeveloperCreateGameReceivedFn));
		this.$myClientSiteManagerService.onDoesGameNameExistReceived = ss.makeGenericType($Client_Services_UserEventCacher$1, [Models.SiteManagerModels.DoesGameExistResponse]).op_Addition(this.$myClientSiteManagerService.onDoesGameNameExistReceived, ss.mkdel(this, this.$onDoesGameNameExistReceivedFn));
		this.$myScope.model.createGame = ss.delegateCombine(this.$myScope.model.createGame, ss.mkdel(this, this.$createGameFn));
		this.$myScope.model.deleteGame = ss.delegateCombine(this.$myScope.model.deleteGame, ss.mkdel(this, this.$deleteGameFn));
		this.$myScope.$watch('model.selectedGame', ss.mkdel(this, function() {
			if (ss.isNullOrUndefined(this.$myScope.model.selectedGame)) {
				return;
			}
			createUIService.createSingleton$2($Client_Scope_Controller_GameEditorScope).call(createUIService, $Client_Controllers_$GameEditorController.$view, ss.mkdel(this, function(_scope, elem) {
				_scope.model = $Client_Scope_Controller_GameEditorModel.$ctor();
				_scope.model.game = this.$myScope.model.selectedGame;
			}));
			if (!scope.minimized) {
				scope.minimize();
			}
		}));
	};
	$Client_Controllers_$GameManagerController.__typeName = 'Client.Controllers.$GameManagerController';
	////////////////////////////////////////////////////////////////////////////////
	// Client.Controllers.GameScenarioEditorController
	var $Client_Controllers_$GameScenarioEditorController = function(scope, clientSiteManagerService, messageService, createUIService) {
		this.$myClientSiteManagerService = null;
		this.$myCreateUIService = null;
		this.$myMessageService = null;
		this.$myScope = null;
		this.$myScope = scope;
		this.$myClientSiteManagerService = clientSiteManagerService;
		this.$myMessageService = messageService;
		this.$myCreateUIService = createUIService;
		this.$myScope.visible = true;
		this.$myScope.$watch('model.game', ss.mkdel(this, function() {
			this.$myScope.model.updateStatus = 'dirty';
		}), true);
		this.$myScope.$watch('model.selection.selectedScenario', ss.mkdel(this, function() {
			if (ss.isNullOrUndefined(this.$myScope.model.selection.selectedScenario)) {
				return;
			}
			this.$myScope.model.selection.selectedScenarioEffect = null;
			this.$myScope.model.selection.selectedScenarioSpace = null;
			if (ss.isNullOrUndefined(this.$myScope.model.selection.selectedSpace)) {
				return;
			}
			for (var $t1 = 0; $t1 < this.$myScope.model.selection.selectedScenario.spaces.length; $t1++) {
				var gameLayoutScenarioSpace = this.$myScope.model.selection.selectedScenario.spaces[$t1];
				if (ss.referenceEquals(gameLayoutScenarioSpace.spaceGuid, this.$myScope.model.selection.selectedSpace.guid)) {
					this.$myScope.model.selection.selectedScenarioSpace = gameLayoutScenarioSpace;
					break;
				}
			}
		}));
		this.$myScope.$watch('model.selection.selectedScenarioSpace', ss.mkdel(this, function() {
			if (ss.isNullOrUndefined(this.$myScope.model.selection.selectedScenarioSpace)) {
				return;
			}
			this.$myScope.model.selection.selectedScenarioEffect = null;
			this.$myScope.model.selection.selectedScenarioPiece = 'space';
		}));
		this.$myScope.$watch('model.selection.selectedScenarioEffect', ss.mkdel(this, function() {
			if (ss.isNullOrUndefined(this.$myScope.model.selection.selectedScenarioEffect)) {
				return;
			}
			this.$myScope.model.selection.selectedScenarioSpace = null;
			this.$myScope.model.selection.selectedScenarioPiece = 'effect';
		}));
		this.$myScope.model.getSpaceBySpaceGuid = ss.mkdel(this, this.$getSpaceBySpaceGuidFn);
		this.$myScope.model.getAreaByAreaGuid = ss.mkdel(this, this.$getAreaByAreaGuidFn);
		this.$myScope.model.getTextByTextGuid = ss.mkdel(this, this.$getTextByTextGuidFn);
		this.$myScope.model.getCardByCardGuid = ss.mkdel(this, this.$getCardByCardGuidFn);
		this.$myScope.model.removeSpaceFromEffect = ss.mkdel(this, this.$removeSpaceFromEffectFn);
		this.$myScope.model.removeAreaFromEffect = ss.mkdel(this, this.$removeAreaFromEffectFn);
		this.$myScope.model.removeCardFromEffect = ss.mkdel(this, this.$removeCardFromEffectFn);
		this.$myScope.model.removeTextFromEffect = ss.mkdel(this, this.$removeTextFromEffectFn);
		this.$myScope.model.getEffectByScenarioEffect = ss.mkdel(this, this.$getEffectByScenarioEffectFn);
		this.$myScope.model.addCardToSpace = ss.mkdel(this, this.$addCardToSpaceFn);
		this.$myScope.model.removeCardFromSpace = ss.mkdel(this, this.$removeCardFromSpaceFn);
		this.$myScope.model.addNewScenario = ss.mkdel(this, this.$addNewScenarioFn);
		this.$myScope.model.cloneNewScenario = ss.mkdel(this, this.$cloneNewScenarioFn);
		this.$myScope.model.deleteScenario = ss.mkdel(this, this.$deleteScenarioFn);
		this.$myScope.model.getCurrentlySelected = ss.mkdel(this, this.$getCurrentlySelectedFn);
		this.$myScope.model.applyEffectToCurrentlySelected = ss.mkdel(this, this.$applyEffectToCurrentlySelectedFn);
		this.$myClientSiteManagerService.onDeveloperUpdateGameReceived = ss.makeGenericType($Client_Services_UserEventCacher$1, [Models.SiteManagerModels.DeveloperUpdateGameResponse]).op_Addition(this.$myClientSiteManagerService.onDeveloperUpdateGameReceived, ss.mkdel(this, this.$onDeveloperUpdateGameReceivedFn));
		this.$myScope.model.updateStatus = 'synced';
		this.$myScope.model.updateGame = ss.mkdel(this, this.$updateGameFn);
	};
	$Client_Controllers_$GameScenarioEditorController.__typeName = 'Client.Controllers.$GameScenarioEditorController';
	////////////////////////////////////////////////////////////////////////////////
	// Client.Controllers.GameTestEditorController
	var $Client_Controllers_$GameTestEditorController = function(scope, clientSiteManagerService, clientDebugManagerService, messageService, createUIService) {
		this.$myClientSiteManagerService = null;
		this.$clientDebugManagerService = null;
		this.$myCreateUIService = null;
		this.$myMessageService = null;
		this.$scope = null;
		this.$scope = scope;
		this.$myClientSiteManagerService = clientSiteManagerService;
		this.$clientDebugManagerService = clientDebugManagerService;
		this.$myMessageService = messageService;
		this.$myCreateUIService = createUIService;
		this.$scope.visible = false;
		scope.model.log = [];
		this.$scope.onReady = ss.delegateCombine(this.$scope.onReady, ss.mkdel(this, function() {
			this.$scope.swingAway(3, true, null);
			this.$scope.swingBack(null);
		}));
		this.$scope.model.startGame = ss.mkdel(this, this.$startGameFn);
		this.$scope.model.destroyGame = ss.mkdel(this, this.$destroyGameFn);
		this.$scope.model.gameRunning = false;
		this.$scope.$watch('model.game', ss.mkdel(this, function() {
			this.$scope.model.updateStatus = 'dirty';
		}), true);
		this.$myClientSiteManagerService.onDeveloperUpdateGameReceived = ss.makeGenericType($Client_Services_UserEventCacher$1, [Models.SiteManagerModels.DeveloperUpdateGameResponse]).op_Addition(this.$myClientSiteManagerService.onDeveloperUpdateGameReceived, ss.mkdel(this, this.$onDeveloperUpdateGameReceivedFn));
		this.$scope.model.updateStatus = 'synced';
		this.$scope.model.updateGame = ss.mkdel(this, this.$updateGameFn);
		clientDebugManagerService.onGetDebugLog = ss.makeGenericType($Client_Services_UserEventCacher$1, [Models.DebugGameManagerModels.DebugGameLogModel]).op_Addition(clientDebugManagerService.onGetDebugLog, ss.mkdel(this, this.$clientDebugManagerService_OnGetDebugLog));
		clientDebugManagerService.onGameStarted = ss.makeGenericType($Client_Services_UserEventCacher$1, [Models.GameManagerModels.GameRoomModel]).op_Addition(clientDebugManagerService.onGameStarted, ss.mkdel(this, function(user, roomModel) {
			this.$scope.model.gameRunning = true;
			this.$scope.model.room = roomModel;
			if (ss.isValue(this.$scope.model.codeEditor)) {
				this.$scope.model.codeEditor.scope.model.room = roomModel;
			}
		}));
		this.$scope.model.debugCode = ss.mkdel(this, function() {
			this.$scope.model.codeEditor = this.$myCreateUIService.createSingleton$2($Client_Scope_Controller_DebugGameCodeScope).call(this.$myCreateUIService, $Client_Controllers_$DebugGameCodeController.$view, ss.mkdel(this, function(innerScope, elem) {
				innerScope.model = $Client_Scope_Controller_DebugGameCodeScopeModel.$ctor();
				innerScope.model.game = this.$scope.model.game;
				innerScope.model.selection = this.$scope.model.selection;
			}));
		});
		//
		//                        Window.SetTimeout(() =>
		//
		//                        {
		//
		//                        StartGameFn();
		//
		//                        scope.Minimize();
		//
		//                        }, 250);
	};
	$Client_Controllers_$GameTestEditorController.__typeName = 'Client.Controllers.$GameTestEditorController';
	////////////////////////////////////////////////////////////////////////////////
	// Client.Controllers.HomeController
	var $Client_Controllers_$HomeController = function(scope, uiManager, clientSiteManagerService, createUIService) {
		this.$myClientSiteManagerService = null;
		this.$myCreateUIService = null;
		this.$myScope = null;
		this.$myUIManager = null;
		this.$myScope = scope;
		this.$myUIManager = uiManager;
		this.$myClientSiteManagerService = clientSiteManagerService;
		this.$myCreateUIService = createUIService;
		this.$myScope.model = $Client_Scope_Controller_HomeModel.$ctor();
		this.$myScope.visible = false;
		scope.model.gameTypeSelected = ss.delegateCombine(scope.model.gameTypeSelected, ss.mkdel(this, this.$gameTypeSelectedFn));
		scope.model.roomSelected = ss.delegateCombine(scope.model.roomSelected, ss.mkdel(this, this.$roomSelectedFn));
		scope.model.createRoom = ss.delegateCombine(scope.model.createRoom, ss.mkdel(this, this.$createRoomFn));
		scope.model.createGame = ss.delegateCombine(scope.model.createGame, ss.mkdel(this, this.$createGameFn));
		scope.model.joinRoom = ss.delegateCombine(scope.model.joinRoom, ss.mkdel(this, this.$joinRoomFn));
		scope.$watch(ss.mkdel(this, function(_scope) {
			return this.$myScope.model.selectedGameType;
		}), function() {
			scope.model.gameTypeSelected();
		});
		//  scope.Watch<HomeScope>((_scope) => { return myScope.Model.SelectedRoom; },
		//  () =>
		//  {
		//  scope.Model.RoomSelected();
		//  });
		this.$myClientSiteManagerService.onGetGameTypesReceived = ss.makeGenericType($Client_Services_UserEventCacher$1, [Models.SiteManagerModels.GetGameTypesReceivedResponse]).op_Addition(this.$myClientSiteManagerService.onGetGameTypesReceived, ss.mkdel(this, this.$populateGames));
		this.$myClientSiteManagerService.onGetRoomsReceived = ss.makeGenericType($Client_Services_UserEventCacher$1, [Models.SiteManagerModels.GetRoomsResponse]).op_Addition(this.$myClientSiteManagerService.onGetRoomsReceived, ss.mkdel(this, this.$populateRooms));
		this.$myClientSiteManagerService.onRoomJoined = ss.makeGenericType($Client_Services_UserEventCacher$1, [Models.SiteManagerModels.RoomJoinResponse]).op_Addition(this.$myClientSiteManagerService.onRoomJoined, ss.mkdel(this, this.$roomJoined));
		this.$myClientSiteManagerService.onGetRoomInfoReceived = ss.makeGenericType($Client_Services_UserEventCacher$1, [Models.SiteManagerModels.GetRoomInfoResponse]).op_Addition(this.$myClientSiteManagerService.onGetRoomInfoReceived, ss.mkdel(this, this.$getRoomInfoReceived));
		scope.onReady = ss.delegateCombine(scope.onReady, ss.mkdel(this, function() {
			this.$myScope.swingAway(6, true, null);
			this.$myScope.swingBack(null);
			this.$myScope.$apply();
			this.$myScope.model.user = this.$myUIManager.clientInfo.loggedInUser;
			this.$myClientSiteManagerService.getGameTypes();
		}));
		//Window.SetTimeout(CreateGameFn, 100);
	};
	$Client_Controllers_$HomeController.__typeName = 'Client.Controllers.$HomeController';
	////////////////////////////////////////////////////////////////////////////////
	// Client.Controllers.LoginController
	var $Client_Controllers_$LoginController = function(scope, uiManager, clientSiteManagerService, messageService, createUIService, clientManagerService) {
		this.$myCreateUIService = null;
		this.$clientManagerService = null;
		this.$myMessageService = null;
		this.$myScope = null;
		this.$myUIManager = null;
		this.$myclientSiteManagerService = null;
		this.$myScope = scope;
		this.$myScope.visible = true;
		this.$myUIManager = uiManager;
		this.$myclientSiteManagerService = clientSiteManagerService;
		this.$myMessageService = messageService;
		this.$myCreateUIService = createUIService;
		this.$clientManagerService = clientManagerService;
		this.$myScope.model = $Client_Scope_Controller_LoginScopeModel.$ctor();
		//
		//            scope.Model.dosomething += (o) =>
		//
		//            {
		//
		//            Console.WriteLine(o);
		//
		//            };
		scope.model.username = 'dested1';
		scope.model.password = 'd';
		this.$myScope.model.windowClosed = function() {
			window.alert('woooo');
		};
		this.$myScope.model.loginAccount = ss.mkdel(this, this.$loginAccountFn);
		this.$myScope.model.createAccount = ss.mkdel(this, this.$createAccountFn);
		this.$myclientSiteManagerService.onLogin = ss.makeGenericType($Client_Services_UserEventCacher$1, [Models.UserLoginResponse]).op_Addition(this.$myclientSiteManagerService.onLogin, ss.mkdel(this, this.$onLoginFn));
		this.$myclientSiteManagerService.onUserCreate = ss.makeGenericType($Client_Services_UserEventCacher$1, [Models.UserCreateResponse]).op_Addition(this.$myclientSiteManagerService.onUserCreate, ss.mkdel(this, this.$onUserCreateFn));
		// myScope.Model.Username = "dested1";
		// myScope.Model.Password = "d";
		//            Window.SetTimeout(LoginAccountFn, 250);
	};
	$Client_Controllers_$LoginController.__typeName = 'Client.Controllers.$LoginController';
	////////////////////////////////////////////////////////////////////////////////
	// Client.Controllers.MessageController
	var $Client_Controllers_$MessageController = function(scope) {
		this.$myScope = null;
		this.$myUIManager = null;
		this.$myScope = scope;
	};
	$Client_Controllers_$MessageController.__typeName = 'Client.Controllers.$MessageController';
	////////////////////////////////////////////////////////////////////////////////
	// Client.Controllers.MinimizeController
	var $Client_Controllers_$MinimizeController = function(scope, uiManager) {
		this.$myScope = null;
		this.$myUIManager = null;
		$Client_Controllers_$AngularController.call(this);
		this.$myScope = scope;
		this.$myUIManager = uiManager;
		scope.items = [];
		uiManager.onMinimize = function(floatingWindowBaseScope) {
			ss.add(scope.items, floatingWindowBaseScope);
			null;
		};
		scope.open = ss.mkdel(this, this.$openFn);
		scope.remove = ss.mkdel(this, this.$removeFn);
	};
	$Client_Controllers_$MinimizeController.__typeName = 'Client.Controllers.$MinimizeController';
	$Client_Controllers_$MinimizeController.$register = function(module) {
		return module.controller($Client_Controllers_$MinimizeController.$name, $Client_Controllers_$AngularController.$make$2($Client_Controllers_$MinimizeController, $Client_Scope_Controller_MinimizeScope, $Client_Services_UIManagerService).call(null, function(scope, uiManager) {
			return new $Client_Controllers_$MinimizeController(scope, uiManager);
		}, [Client.Scope.BaseScope.name, $Client_Services_UIManagerService.name$1]));
	};
	////////////////////////////////////////////////////////////////////////////////
	// Client.Controllers.QuestionController
	var $Client_Controllers_$QuestionController = function(scope, clientGameManagerService) {
		this.$myClientGameManagerService = null;
		this.$myScope = null;
		this.$myScope = scope;
		this.$myClientGameManagerService = clientGameManagerService;
		this.$myScope.model.windowClosed = function() {
			window.alert('woooo');
		};
		this.$myScope.model.answerQuestion = ss.mkdel(this, this.$answerQuestionFn);
		this.$myScope.visible = false;
		this.$myScope.onReady = ss.delegateCombine(this.$myScope.onReady, ss.mkdel(this, function() {
			this.$myScope.swingAway(0, true, null);
			this.$myScope.swingBack(null);
		}));
	};
	$Client_Controllers_$QuestionController.__typeName = 'Client.Controllers.$QuestionController';
	////////////////////////////////////////////////////////////////////////////////
	// Client.Controllers.DebugGameController
	var $Client_Controllers_DebugGameController = function(scope, clientDebugManagerService, gameContentManagerService, createUIService) {
		this.$createUIService = null;
		this.$myClientDebugManagerService = null;
		this.$myGameContentManagerService = null;
		this.$scope = null;
		this.$scope = scope;
		this.$myClientDebugManagerService = clientDebugManagerService;
		this.$myGameContentManagerService = gameContentManagerService;
		this.$createUIService = createUIService;
		scope.gameModel = new $Client_Scope_Controller_DebugGameModel();
		var lastQuestion = null;
		this.$myClientDebugManagerService.onAskQuestion = ss.makeGenericType($Client_Services_UserEventCacher$1, [Models.GameManagerModels.GameSendAnswerModel]).op_Addition(this.$myClientDebugManagerService.onAskQuestion, function(user, gameSendAnswerModel) {
			lastQuestion = createUIService.createSingleton$2($Client_Scope_Controller_QuestionScope).call(createUIService, $Client_Controllers_$DebugQuestionController.$view, function(myScope, elem) {
				myScope.model = $Client_Scope_Controller_QuestionScopeModel.$ctor();
				myScope.model.question = gameSendAnswerModel.question;
				myScope.model.answers = gameSendAnswerModel.answers;
				myScope.model.selectedAnswer = gameSendAnswerModel.answers[0];
			});
		});
		scope.onDestroy = ss.delegateCombine(scope.onDestroy, function() {
			if (ss.isValue(lastQuestion)) {
				lastQuestion.destroy();
			}
		});
		// effectManager.Effects =new List<GameEffectModel>();
		// effectManager.Effects.Add(GameEffectsEditorController.makeEffect("bend", EffectType.Bend));
		//     myClientDebugManagerService.OnAskQuestion += (user, gameSendAnswerModel) => {
		//     PageHandler.QuestionUI.Load(gameSendAnswerModel);
		//     //alert(JSON.stringify(data));
		//     PageHandler.TimeTracker.EndTime = new DateTime();
		//     var time = PageHandler.TimeTracker.EndTime - PageHandler.TimeTracker.StartTime;
		//     PageHandler.  DebugUI.lblHowFast.Text = ( "how long: " + time );
		//     };
		var sheet = $Client_ClientHelpers.createCSSSheet();
		for (var i = 0; i < 4; i++) {
			for (var j = 0; j < 13; j++) {
				$Client_ClientHelpers.addCSSRule(sheet, '.card' + i + '-' + j + '', {});
				$Client_ClientHelpers.addCSSRule(sheet, '.card' + i + '-' + j + '::before', {});
				$Client_ClientHelpers.addCSSRule(sheet, '.card' + i + '-' + j + '::after', {});
			}
		}
		$Client_ClientHelpers.addCSSRule(sheet, '.card' + -1 + '-' + -1 + '', {});
		$Client_ClientHelpers.addCSSRule(sheet, '.card' + -1 + '-' + -1 + '::before', {});
		$Client_ClientHelpers.addCSSRule(sheet, '.card' + -1 + '-' + -1 + '::after', {});
		var spaceLookups = {};
		this.$myClientDebugManagerService.onUpdateState = ss.makeGenericType($Client_Services_UserEventCacher$1, [String]).op_Addition(this.$myClientDebugManagerService.onUpdateState, function(user1, update) {
			console.time('Render');
			var data = JSON.parse((new Compressor()).DecompressText(update));
			var create = ss.isNullOrUndefined(scope.gameModel.mainArea);
			scope.gameModel.mainArea = data;
			if (create) {
				scope.gameModel.scale = new CommonLibraries.Point($(window).width() / scope.gameModel.mainArea.size.width * 0.9, $(window).height() / scope.gameModel.mainArea.size.height * 0.9);
				for (var $t1 = 0; $t1 < scope.gameModel.mainArea.spaces.length; $t1++) {
					var cardGameTableSpace = scope.gameModel.mainArea.spaces[$t1];
					$Client_ClientHelpers.addCSSRule(sheet, '.space' + cardGameTableSpace.name + '', {});
					$Client_ClientHelpers.addCSSRule(sheet, '.space' + cardGameTableSpace.name + '::before', {});
					$Client_ClientHelpers.addCSSRule(sheet, '.space' + cardGameTableSpace.name + '::after', {});
				}
			}
			scope.gameModel.spaces = scope.gameModel.mainArea.spaces.map(function(space) {
				var debugSpace = spaceLookups[space.name] || (spaceLookups[space.name] = new $DebugSpace());
				debugSpace.gameSpace = space;
				return debugSpace;
			});
			scope.$broadcast('spaceUpdated');
			scope.$apply();
			console.timeEnd('Render');
			//         myGameContentManagerService.Redraw();
		});
		$(window).bind('resize', function(a) {
			scope.gameModel.scale = new CommonLibraries.Point($(window).width() / scope.gameModel.mainArea.size.width * 0.9, $(window).height() / scope.gameModel.mainArea.size.height * 0.9);
			scope.$broadcast('redraw');
			scope.$apply();
		});
		this.$myClientDebugManagerService.onGameStarted = ss.makeGenericType($Client_Services_UserEventCacher$1, [Models.GameManagerModels.GameRoomModel]).op_Addition(this.$myClientDebugManagerService.onGameStarted, function(user2, room) {
			//alert(JSON.stringify(data));
		});
		this.$myClientDebugManagerService.onGameOver = ss.makeGenericType($Client_Services_UserEventCacher$1, [String]).op_Addition(this.$myClientDebugManagerService.onGameOver, function(user3, room1) {
			//alert(JSON.stringify(data));
		});
		scope.gameModel.mainArea = null;
		//new Action<string,JsDictionary<string,object>>()
		// scope.MoveCard = () =>
		// {
		// 
		// for (var i = 0; i < 1; i++)
		// {
		// CardGameCard card = null;
		// while (card == null)
		// {
		// var pile = scope.MainArea.Spaces.RandomElement().Pile;
		// card = pile.Cards.RandomElement();
		// var _pile = scope.MainArea.Spaces.RandomElement();
		// 
		// if (card != null && _pile != null)
		// {
		// card.Appearance.EffectNames.Remove("bend");
		// if (_pile.Name.StartsWith("User"))
		// {
		// 
		// card.Appearance.EffectNames.Add("bend");
		// 
		// }
		// 
		// 
		// pile.Cards.Remove(card);
		// _pile.Pile.Cards.Add(card);
		// }
		// }
		// }
		// };
		// 
		// scope.AnimateCard = () =>
		// {
		// 
		// for (var i = 0; i < 1; i++)
		// {
		// CardGameCard card = null;
		// while (card == null)
		// {
		// var pile = scope.MainArea.Spaces.RandomElement().Pile;
		// card = pile.Cards.RandomElement();
		// var _pile = scope.MainArea.Spaces.RandomElement();
		// 
		// if (card != null && _pile != null)
		// {
		// 
		// var css = string.Format(".card{0}-{1}", card.Type, card.Value);
		// var clone = jQueryApi.jQuery.Select(css).FuckingClone();
		// 
		// 
		// var space = jQuery.Select(string.Format(".space{0}", _pile.Name));
		// var off = space.GetOffset();
		// 
		// clone.CSS("z-index", 1000);
		// 
		// JsDictionary ops = new JsDictionary();
		// ops["left"] = off.Left + space.GetWidth() / 2 - 71 / 2;
		// ops["top"] = off.Top + space.GetHeight() / 2 - 96 / 2;
		// ops["rotate"] = "0deg";
		// 
		// 
		// pile.Cards.Remove(card);
		// clone.Animate(ops, 700, (EffectEasing)(dynamic)("easeInOutQuart"), () =>
		// {
		// card.Appearance.EffectNames.Remove("bend");
		// if (_pile.Name.StartsWith("User"))
		// {
		// 
		// card.Appearance.EffectNames.Add("bend");
		// 
		// }
		// 
		// clone.Remove();
		// _pile.Pile.Cards.Add(card);
		// scope.Apply();
		// 
		// });
		// 
		// 
		// 
		// }
		// }
		// }
		// };
	};
	$Client_Controllers_DebugGameController.__typeName = 'Client.Controllers.DebugGameController';
	global.Client.Controllers.DebugGameController = $Client_Controllers_DebugGameController;
	////////////////////////////////////////////////////////////////////////////////
	// Client.Controllers.EffectTesterController
	var $Client_Controllers_EffectTesterController = function(scope) {
		this.$scope = null;
		this.$scope = scope;
		scope.model.spaceTest = $Client_Scope_Controller_EffectTesterSpaceModel.$ctor();
		var $t2 = scope.model.spaceTest;
		var $t1 = Models.SiteManagerModels.Game.GameSpaceModel.$ctor();
		$t1.guid = ss.Guid.newGuid().toString();
		$t1.left = 3;
		$t1.top = 3;
		$t1.height = 2;
		$t1.width = 7;
		$t1.layoutType = 'grow';
		$t1.name = 'SpaceTest';
		$t1.vertical = false;
		$t2.space = $t1;
		var $t10 = scope.model.spaceTest;
		var $t3 = [];
		var $t4 = Models.SiteManagerModels.Game.GameLayoutScenarioCard.$ctor();
		$t4.cardGuid = ss.Guid.newGuid().toString();
		$t4.state = 'faceDown';
		$t4.type = 1;
		$t4.value = 5;
		ss.add($t3, $t4);
		null;
		var $t5 = Models.SiteManagerModels.Game.GameLayoutScenarioCard.$ctor();
		$t5.cardGuid = ss.Guid.newGuid().toString();
		$t5.state = 'faceDown';
		$t5.type = 1;
		$t5.value = 6;
		ss.add($t3, $t5);
		null;
		var $t6 = Models.SiteManagerModels.Game.GameLayoutScenarioCard.$ctor();
		$t6.cardGuid = ss.Guid.newGuid().toString();
		$t6.state = 'faceDown';
		$t6.type = 1;
		$t6.value = 7;
		ss.add($t3, $t6);
		null;
		var $t7 = Models.SiteManagerModels.Game.GameLayoutScenarioCard.$ctor();
		$t7.cardGuid = ss.Guid.newGuid().toString();
		$t7.state = 'faceDown';
		$t7.type = 1;
		$t7.value = 8;
		ss.add($t3, $t7);
		null;
		var $t8 = Models.SiteManagerModels.Game.GameLayoutScenarioCard.$ctor();
		$t8.cardGuid = ss.Guid.newGuid().toString();
		$t8.state = 'faceDown';
		$t8.type = 1;
		$t8.value = 9;
		ss.add($t3, $t8);
		null;
		var $t9 = Models.SiteManagerModels.Game.GameLayoutScenarioCard.$ctor();
		$t9.cardGuid = ss.Guid.newGuid().toString();
		$t9.state = 'faceDown';
		$t9.type = 1;
		$t9.value = 10;
		ss.add($t3, $t9);
		null;
		$t10.cards = $t3;
		scope.model.cardTest = $Client_Scope_Controller_EffectTesterCardModel.$ctor();
		var $t12 = scope.model.cardTest;
		var $t11 = Models.SiteManagerModels.Game.GameSpaceModel.$ctor();
		$t11.guid = ss.Guid.newGuid().toString();
		$t11.left = 3;
		$t11.top = 8;
		$t11.height = 2;
		$t11.width = 7;
		$t11.layoutType = 'grow';
		$t11.name = 'CardTest';
		$t11.vertical = false;
		$t12.space = $t11;
		var $t14 = scope.model.cardTest;
		var $t13 = Models.SiteManagerModels.Game.GameLayoutScenarioCard.$ctor();
		$t13.cardGuid = ss.Guid.newGuid().toString();
		$t13.state = 'faceDown';
		$t13.type = 2;
		$t13.value = 0;
		$t14.card = $t13;
		scope.model.areaTest = $Client_Scope_Controller_EffectTesterAreaModel.$ctor();
		var $t16 = scope.model.areaTest;
		var $t15 = Models.SiteManagerModels.Game.GameAreaModel.$ctor();
		$t15.guid = ss.Guid.newGuid().toString();
		$t15.left = 3;
		$t15.top = 6;
		$t15.height = 2;
		$t15.width = 2;
		$t15.name = 'AreaTest';
		$t16.area = $t15;
		scope.model.textTest = $Client_Scope_Controller_EffectTesterTextModel.$ctor();
		var $t18 = scope.model.textTest;
		var $t17 = Models.SiteManagerModels.Game.GameTextModel.$ctor();
		$t17.guid = ss.Guid.newGuid().toString();
		$t17.left = 7;
		$t17.top = 6;
		$t17.text = 'This is some text!';
		$t17.name = 'TextTest';
		$t18.text = $t17;
		scope.model.scale = new CommonLibraries.Point($(window).width() / scope.model.game.gameLayout.width * 0.9, $(window).height() / scope.model.game.gameLayout.height * 0.9);
		var addRule = (function(style) {
			var document = window.document;
			var sheet = document.head.appendChild(style).sheet;
			return function(selector, css) {
				var propText = Object.keys(css).map(function(p) {
					return p + ':' + css[p];
				}).join(';');
				sheet.insertRule(selector + '{' + propText + '}', sheet.cssRules.length);
			};
		})(document.createElement('style'));
		var space = scope.model.spaceTest.space;
		addRule('.space' + space.name, {});
		addRule('.space' + space.name + '::before', {});
		addRule('.space' + space.name + '::after', {});
		var area = scope.model.areaTest.area;
		addRule('.area' + area.name, {});
		addRule('.area' + area.name + '::before', {});
		addRule('.area' + area.name + '::after', {});
		var text = scope.model.textTest.text;
		addRule('.text' + text.name, {});
		addRule('.text' + text.name + '::before', {});
		addRule('.text' + text.name + '::after', {});
		for (var t = 0; t < 4; t++) {
			for (var c = 0; c < 13; c++) {
				addRule('.card' + t + '-' + c + '', {});
				addRule('.card' + t + '-' + c + '::before', {});
				addRule('.card' + t + '-' + c + '::after', {});
			}
		}
	};
	$Client_Controllers_EffectTesterController.__typeName = 'Client.Controllers.EffectTesterController';
	global.Client.Controllers.EffectTesterController = $Client_Controllers_EffectTesterController;
	////////////////////////////////////////////////////////////////////////////////
	// Client.Controllers.GameController
	var $Client_Controllers_GameController = function(scope, clientGameManagerService, gameContentManagerService, createUIService) {
		this.$createUIService = null;
		this.$myClientGameManagerService = null;
		this.$myGameContentManagerService = null;
		this.$scope = null;
		this.$scope = scope;
		this.$myClientGameManagerService = clientGameManagerService;
		this.$myGameContentManagerService = gameContentManagerService;
		this.$createUIService = createUIService;
		// effectManager.Effects =new List<GameEffectModel>();
		// effectManager.Effects.Add(GameEffectsEditorController.makeEffect("bend", EffectType.Bend));
		//     myClientGameManagerService.OnAskQuestion += (user, gameSendAnswerModel) => {
		//     PageHandler.QuestionUI.Load(gameSendAnswerModel);
		//     //alert(JSON.stringify(data));
		//     PageHandler.TimeTracker.EndTime = new DateTime();
		//     var time = PageHandler.TimeTracker.EndTime - PageHandler.TimeTracker.StartTime;
		//     PageHandler.  DebugUI.lblHowFast.Text = ( "how long: " + time );
		//     };
		this.$myClientGameManagerService.onAskQuestion = ss.makeGenericType($Client_Services_UserEventCacher$1, [Models.GameManagerModels.GameSendAnswerModel]).op_Addition(this.$myClientGameManagerService.onAskQuestion, function(user, gameSendAnswerModel) {
			createUIService.createSingleton$2($Client_Scope_Controller_QuestionScope).call(createUIService, $Client_Controllers_$QuestionController.$view, function(myScope, elem) {
				myScope.model = $Client_Scope_Controller_QuestionScopeModel.$ctor();
				myScope.model.question = gameSendAnswerModel.question;
				myScope.model.answers = gameSendAnswerModel.answers;
				myScope.model.selectedAnswer = gameSendAnswerModel.answers[0];
			});
		});
		var addRule = (function(style) {
			var document = window.document;
			var sheet = document.head.appendChild(style).sheet;
			return function(selector, css) {
				var propText = Object.keys(css).map(function(p) {
					return p + ':' + css[p];
				}).join(';');
				sheet.insertRule(selector + '{' + propText + '}', sheet.cssRules.length);
			};
		})(document.createElement('style'));
		for (var i = 0; i < 4; i++) {
			for (var j = 0; j < 13; j++) {
				addRule('.card' + i + '-' + j + '', {});
				addRule('.card' + i + '-' + j + '::before', {});
				addRule('.card' + i + '-' + j + '::after', {});
			}
		}
		addRule('.card' + -1 + '-' + -1 + '', {});
		addRule('.card' + -1 + '-' + -1 + '::before', {});
		addRule('.card' + -1 + '-' + -1 + '::after', {});
		this.$myClientGameManagerService.onUpdateState = ss.makeGenericType($Client_Services_UserEventCacher$1, [String]).op_Addition(this.$myClientGameManagerService.onUpdateState, ss.mkdel(this, function(user1, update) {
			var data = JSON.parse((new Compressor()).DecompressText(update));
			var create = ss.isNullOrUndefined(scope.mainArea);
			scope.mainArea = data;
			if (create) {
				scope.scale = new CommonLibraries.Point($(window).width() / scope.mainArea.size.width * 0.9, $(window).height() / scope.mainArea.size.height * 0.9);
				for (var $t1 = 0; $t1 < scope.mainArea.spaces.length; $t1++) {
					var space = scope.mainArea.spaces[$t1];
					addRule('.space' + space.name, {});
					addRule('.space' + space.name + '::before', {});
					addRule('.space' + space.name + '::after', {});
				}
			}
			scope.$apply();
			this.$myGameContentManagerService.redraw();
		}));
		$(window).bind('resize', function(a) {
			scope.scale = new CommonLibraries.Point($(window).width() / scope.mainArea.size.width * 0.9, $(window).height() / scope.mainArea.size.height * 0.9);
			scope.$apply();
		});
		this.$myClientGameManagerService.onGameOver = ss.makeGenericType($Client_Services_UserEventCacher$1, [String]).op_Addition(this.$myClientGameManagerService.onGameOver, function(user2, room) {
			//alert(JSON.stringify(data));
		});
		scope.mainArea = null;
		//new Action<string,JsDictionary<string,object>>()
		// scope.MoveCard = () =>
		// {
		// 
		// for (var i = 0; i < 1; i++)
		// {
		// CardGameCard card = null;
		// while (card == null)
		// {
		// var pile = scope.MainArea.Spaces.RandomElement().Pile;
		// card = pile.Cards.RandomElement();
		// var _pile = scope.MainArea.Spaces.RandomElement();
		// 
		// if (card != null && _pile != null)
		// {
		// card.Appearance.EffectNames.Remove("bend");
		// if (_pile.Name.StartsWith("User"))
		// {
		// 
		// card.Appearance.EffectNames.Add("bend");
		// 
		// }
		// 
		// 
		// pile.Cards.Remove(card);
		// _pile.Pile.Cards.Add(card);
		// }
		// }
		// }
		// };
		// 
		// scope.AnimateCard = () =>
		// {
		// 
		// for (var i = 0; i < 1; i++)
		// {
		// CardGameCard card = null;
		// while (card == null)
		// {
		// var pile = scope.MainArea.Spaces.RandomElement().Pile;
		// card = pile.Cards.RandomElement();
		// var _pile = scope.MainArea.Spaces.RandomElement();
		// 
		// if (card != null && _pile != null)
		// {
		// 
		// var css = string.Format(".card{0}-{1}", card.Type, card.Value);
		// var clone = jQueryApi.jQuery.Select(css).FuckingClone();
		// 
		// 
		// var space = jQuery.Select(string.Format(".space{0}", _pile.Name));
		// var off = space.GetOffset();
		// 
		// clone.CSS("z-index", 1000);
		// 
		// JsDictionary ops = new JsDictionary();
		// ops["left"] = off.Left + space.GetWidth() / 2 - 71 / 2;
		// ops["top"] = off.Top + space.GetHeight() / 2 - 96 / 2;
		// ops["rotate"] = "0deg";
		// 
		// 
		// pile.Cards.Remove(card);
		// clone.Animate(ops, 700, (EffectEasing)(dynamic)("easeInOutQuart"), () =>
		// {
		// card.Appearance.EffectNames.Remove("bend");
		// if (_pile.Name.StartsWith("User"))
		// {
		// 
		// card.Appearance.EffectNames.Add("bend");
		// 
		// }
		// 
		// clone.Remove();
		// _pile.Pile.Cards.Add(card);
		// scope.Apply();
		// 
		// });
		// 
		// 
		// 
		// }
		// }
		// }
		// };
	};
	$Client_Controllers_GameController.__typeName = 'Client.Controllers.GameController';
	global.Client.Controllers.GameController = $Client_Controllers_GameController;
	////////////////////////////////////////////////////////////////////////////////
	// Client.Controllers.TestGameController
	var $Client_Controllers_TestGameController = function(scope) {
		this.$scope = null;
		this.$scope = scope;
		//
		//                        effectManager.Effects = new List<GameEffectModel>();
		//
		//                        effectManager.Effects.Add(GameEffectsEditorController.makeEffect("bend", EffectType.Bend));
		scope.model.getCardsFromScenario = ss.mkdel(this, this.$getCardsFromScenarioFn);
		var scenario = this.$scope.model.selection.selectedScenario;
		if (ss.isNullOrUndefined(scenario)) {
			this.$scope.model.selection.selectedScenario = this.$scope.model.game.gameLayoutScenarios.filter(function(scen) {
				return scen.name === 'Default';
			})[0];
			//todo fix default to guid idiot
		}
		var addRule = (function(style) {
			var document = window.document;
			var sheet = document.head.appendChild(style).sheet;
			return function(selector, css) {
				var propText = Object.keys(css).map(function(p) {
					return p + ':' + css[p];
				}).join(';');
				sheet.insertRule(selector + '{' + propText + '}', sheet.cssRules.length);
			};
		})(document.createElement('style'));
		//
		//                        effectWatcher.ApplyEffect += (effect) =>
		//
		//                        {
		//
		//                        if (scope.Model.Selection.SelectedCard == null)
		//
		//                        return;
		//
		//                        
		//
		//                        //todo scope.Model.Selection.SelectedCard.Appearance.EffectNames.Add(effect.Name);
		//
		//                        };
		scope.$watch('model.game.gameLayout.width + model.game.gameLayout.height', function() {
			scope.model.scale = new CommonLibraries.Point(scope.model.selection.selectedScenario.screenSize.x / scope.model.game.gameLayout.width * 0.9, scope.model.selection.selectedScenario.screenSize.y / scope.model.game.gameLayout.height * 0.9);
		});
		scope.$watch('model.selection.selectedScenario.screenSize.x + model.selection.selectedScenario.screenSize.y', function() {
			scope.model.scale = new CommonLibraries.Point(scope.model.selection.selectedScenario.screenSize.x / scope.model.game.gameLayout.width * 0.9, scope.model.selection.selectedScenario.screenSize.y / scope.model.game.gameLayout.height * 0.9);
		});
		scope.model.scale = new CommonLibraries.Point(scope.model.selection.selectedScenario.screenSize.x / scope.model.game.gameLayout.width * 0.9, scope.model.selection.selectedScenario.screenSize.y / scope.model.game.gameLayout.height * 0.9);
		//            scope.Model.Scale = new Point(jQuery.Window.GetWidth() / (double)scope.Model.Game.GameLayout.Width * .9, ((jQuery.Window.GetHeight() - 250) / (double)scope.Model.Game.GameLayout.Height) * .9);
		for (var $t1 = 0; $t1 < scope.model.game.gameLayout.spaces.length; $t1++) {
			var space = scope.model.game.gameLayout.spaces[$t1];
			addRule('.space' + space.name, {});
			addRule('.space' + space.name + '::before', {});
			addRule('.space' + space.name + '::after', {});
		}
		for (var $t2 = 0; $t2 < scope.model.game.gameLayout.areas.length; $t2++) {
			var area = scope.model.game.gameLayout.areas[$t2];
			addRule('.area' + area.name, {});
			addRule('.area' + area.name + '::before', {});
			addRule('.area' + area.name + '::after', {});
		}
		for (var $t3 = 0; $t3 < scope.model.game.gameLayout.texts.length; $t3++) {
			var text = scope.model.game.gameLayout.texts[$t3];
			addRule('.text' + text.name, {});
			addRule('.text' + text.name + '::before', {});
			addRule('.text' + text.name + '::after', {});
		}
		for (var t = 0; t < 4; t++) {
			for (var c = 0; c < 13; c++) {
				addRule('.card' + t + '-' + c + '', {});
				addRule('.card' + t + '-' + c + '::before', {});
				addRule('.card' + t + '-' + c + '::after', {});
			}
		}
		addRule('.card' + -1 + '-' + -1 + '', {});
		addRule('.card' + -1 + '-' + -1 + '::before', {});
		addRule('.card' + -1 + '-' + -1 + '::after', {});
		//  myGameContentManager.Redraw();
	};
	$Client_Controllers_TestGameController.__typeName = 'Client.Controllers.TestGameController';
	global.Client.Controllers.TestGameController = $Client_Controllers_TestGameController;
	////////////////////////////////////////////////////////////////////////////////
	// Client.Directives.AcgDebugDrawCardDirective
	var $Client_Directives_AcgDebugDrawCardDirective = function(rootScope) {
		this.$rootScope = null;
		this.link = null;
		this.$rootScope = rootScope;
		this.link = ss.mkdel(this, this.$linkFn);
	};
	$Client_Directives_AcgDebugDrawCardDirective.__typeName = 'Client.Directives.AcgDebugDrawCardDirective';
	global.Client.Directives.AcgDebugDrawCardDirective = $Client_Directives_AcgDebugDrawCardDirective;
	////////////////////////////////////////////////////////////////////////////////
	// Client.Directives.AcgDebugDrawSpaceDirective
	var $Client_Directives_AcgDebugDrawSpaceDirective = function() {
		this.link = null;
		this.link = ss.mkdel(this, this.$linkFn);
	};
	$Client_Directives_AcgDebugDrawSpaceDirective.__typeName = 'Client.Directives.AcgDebugDrawSpaceDirective';
	global.Client.Directives.AcgDebugDrawSpaceDirective = $Client_Directives_AcgDebugDrawSpaceDirective;
	////////////////////////////////////////////////////////////////////////////////
	// Client.Directives.AcgDrawCardDirective
	var $Client_Directives_AcgDrawCardDirective = function() {
		this.link = null;
		this.link = ss.mkdel(this, this.$linkFn);
	};
	$Client_Directives_AcgDrawCardDirective.__typeName = 'Client.Directives.AcgDrawCardDirective';
	global.Client.Directives.AcgDrawCardDirective = $Client_Directives_AcgDrawCardDirective;
	////////////////////////////////////////////////////////////////////////////////
	// Client.Directives.AcgDrawSpaceDirective
	var $Client_Directives_AcgDrawSpaceDirective = function() {
		this.link = null;
		this.link = ss.mkdel(this, this.$linkFn);
	};
	$Client_Directives_AcgDrawSpaceDirective.__typeName = 'Client.Directives.AcgDrawSpaceDirective';
	global.Client.Directives.AcgDrawSpaceDirective = $Client_Directives_AcgDrawSpaceDirective;
	////////////////////////////////////////////////////////////////////////////////
	// Client.Directives.AcgEffectTestDrawAreaDirective
	var $Client_Directives_AcgEffectTestDrawAreaDirective = function() {
		this.link = null;
		this.scope = null;
		this.link = ss.mkdel(this, this.$linkFn);
	};
	$Client_Directives_AcgEffectTestDrawAreaDirective.__typeName = 'Client.Directives.AcgEffectTestDrawAreaDirective';
	global.Client.Directives.AcgEffectTestDrawAreaDirective = $Client_Directives_AcgEffectTestDrawAreaDirective;
	////////////////////////////////////////////////////////////////////////////////
	// Client.Directives.AcgEffectTestDrawCardDirective
	var $Client_Directives_AcgEffectTestDrawCardDirective = function() {
		this.link = null;
		this.link = ss.mkdel(this, this.$linkFn);
	};
	$Client_Directives_AcgEffectTestDrawCardDirective.__typeName = 'Client.Directives.AcgEffectTestDrawCardDirective';
	global.Client.Directives.AcgEffectTestDrawCardDirective = $Client_Directives_AcgEffectTestDrawCardDirective;
	////////////////////////////////////////////////////////////////////////////////
	// Client.Directives.AcgEffectTestDrawSpaceDirective
	var $Client_Directives_AcgEffectTestDrawSpaceDirective = function() {
		this.link = null;
		this.scope = null;
		this.link = ss.mkdel(this, this.$linkFn);
	};
	$Client_Directives_AcgEffectTestDrawSpaceDirective.__typeName = 'Client.Directives.AcgEffectTestDrawSpaceDirective';
	global.Client.Directives.AcgEffectTestDrawSpaceDirective = $Client_Directives_AcgEffectTestDrawSpaceDirective;
	////////////////////////////////////////////////////////////////////////////////
	// Client.Directives.AcgEffectTestDrawTextDirective
	var $Client_Directives_AcgEffectTestDrawTextDirective = function() {
		this.link = null;
		this.scope = null;
		this.link = ss.mkdel(this, this.$linkFn);
	};
	$Client_Directives_AcgEffectTestDrawTextDirective.__typeName = 'Client.Directives.AcgEffectTestDrawTextDirective';
	global.Client.Directives.AcgEffectTestDrawTextDirective = $Client_Directives_AcgEffectTestDrawTextDirective;
	////////////////////////////////////////////////////////////////////////////////
	// Client.Directives.AcgSpacesDirective
	var $Client_Directives_AcgSpacesDirective = function(compile, gameContentManagerService) {
		this.$myCompile = null;
		this.$myGameContentManagerService = null;
		this.link = null;
		this.replace = false;
		this.restrict = null;
		this.scope = null;
		this.template = null;
		this.transclude = false;
		this.$myCompile = compile;
		this.$myGameContentManagerService = gameContentManagerService;
		this.restrict = 'EA';
		this.template = '<div></div>';
		this.replace = true;
		this.transclude = false;
		this.scope = { spaces: '=acgSpaces' };
		this.link = ss.mkdel(this, this.$linkFn);
	};
	$Client_Directives_AcgSpacesDirective.__typeName = 'Client.Directives.AcgSpacesDirective';
	global.Client.Directives.AcgSpacesDirective = $Client_Directives_AcgSpacesDirective;
	////////////////////////////////////////////////////////////////////////////////
	// Client.Directives.AcgTestDrawAreaDirective
	var $Client_Directives_AcgTestDrawAreaDirective = function() {
		this.link = null;
		this.link = ss.mkdel(this, this.$linkFn);
	};
	$Client_Directives_AcgTestDrawAreaDirective.__typeName = 'Client.Directives.AcgTestDrawAreaDirective';
	global.Client.Directives.AcgTestDrawAreaDirective = $Client_Directives_AcgTestDrawAreaDirective;
	////////////////////////////////////////////////////////////////////////////////
	// Client.Directives.AcgTestDrawCardDirective
	var $Client_Directives_AcgTestDrawCardDirective = function() {
		this.link = null;
		this.link = ss.mkdel(this, this.$linkFn);
	};
	$Client_Directives_AcgTestDrawCardDirective.__typeName = 'Client.Directives.AcgTestDrawCardDirective';
	global.Client.Directives.AcgTestDrawCardDirective = $Client_Directives_AcgTestDrawCardDirective;
	////////////////////////////////////////////////////////////////////////////////
	// Client.Directives.AcgTestDrawSpaceDirective
	var $Client_Directives_AcgTestDrawSpaceDirective = function() {
		this.link = null;
		this.scope = null;
		this.link = ss.mkdel(this, this.$linkFn);
		//scope=new
		//{
		//space = "=acgTestDrawSpace"
		//};
	};
	$Client_Directives_AcgTestDrawSpaceDirective.__typeName = 'Client.Directives.AcgTestDrawSpaceDirective';
	global.Client.Directives.AcgTestDrawSpaceDirective = $Client_Directives_AcgTestDrawSpaceDirective;
	////////////////////////////////////////////////////////////////////////////////
	// Client.Directives.AcgTestDrawTextDirective
	var $Client_Directives_AcgTestDrawTextDirective = function() {
		this.link = null;
		this.link = ss.mkdel(this, this.$linkFn);
	};
	$Client_Directives_AcgTestDrawTextDirective.__typeName = 'Client.Directives.AcgTestDrawTextDirective';
	global.Client.Directives.AcgTestDrawTextDirective = $Client_Directives_AcgTestDrawTextDirective;
	////////////////////////////////////////////////////////////////////////////////
	// Client.Directives.ChatBoxDirective
	var $Client_Directives_ChatBoxDirective = function() {
		this.link = null;
		this.replace = false;
		this.restrict = null;
		this.scope = null;
		this.templateUrl = null;
		this.transclude = false;
		this.restrict = 'EA';
		this.templateUrl = ss.formatString('{0}partials/chatBox.html', CommonLibraries.Constants.contentAddress);
		this.replace = true;
		this.scope = { contents: '=' };
		this.link = ss.mkdel(this, this.$linkFn);
	};
	$Client_Directives_ChatBoxDirective.__typeName = 'Client.Directives.ChatBoxDirective';
	global.Client.Directives.ChatBoxDirective = $Client_Directives_ChatBoxDirective;
	////////////////////////////////////////////////////////////////////////////////
	// Client.Directives.DraggableDirective
	var $Client_Directives_DraggableDirective = function() {
		this.link = null;
		this.link = ss.mkdel(this, this.$linkFn);
	};
	$Client_Directives_DraggableDirective.__typeName = 'Client.Directives.DraggableDirective';
	global.Client.Directives.DraggableDirective = $Client_Directives_DraggableDirective;
	////////////////////////////////////////////////////////////////////////////////
	// Client.Directives.FancyListDirective
	var $Client_Directives_FancyListDirective = function() {
		this.link = null;
		this.replace = false;
		this.restrict = null;
		this.scope = null;
		this.templateUrl = null;
		this.transclude = false;
		this.restrict = 'EA';
		this.templateUrl = ss.formatString('{0}partials/fancyList.html', CommonLibraries.Constants.contentAddress);
		this.replace = true;
		this.transclude = true;
		this.scope = { items: '=', bind: '=' };
		this.link = ss.mkdel(this, this.$linkFn);
	};
	$Client_Directives_FancyListDirective.__typeName = 'Client.Directives.FancyListDirective';
	global.Client.Directives.FancyListDirective = $Client_Directives_FancyListDirective;
	////////////////////////////////////////////////////////////////////////////////
	// Client.Directives.FloatingWindowDirective
	var $Client_Directives_FloatingWindowDirective = function(uiManagerService) {
		this.$myUIManagerService = null;
		this.link = null;
		this.$myElement = null;
		this.$myScope = null;
		this.replace = false;
		this.restrict = null;
		this.scope = null;
		this.templateUrl = null;
		this.transclude = false;
		this.$myUIManagerService = uiManagerService;
		this.restrict = 'EA';
		this.templateUrl = ss.formatString('{0}partials/floatingWindow.html', CommonLibraries.Constants.contentAddress);
		this.replace = true;
		this.transclude = true;
		this.scope = { width: '=', height: '=', left: '=', top: '=', windowTitle: '=', visible: '=', onclose: '&' };
		this.link = ss.mkdel(this, this.$linkFn);
	};
	$Client_Directives_FloatingWindowDirective.__typeName = 'Client.Directives.FloatingWindowDirective';
	global.Client.Directives.FloatingWindowDirective = $Client_Directives_FloatingWindowDirective;
	////////////////////////////////////////////////////////////////////////////////
	// Client.Directives.ForNextDirective
	var $Client_Directives_ForNextDirective = function() {
		this.link = null;
		this.link = ss.mkdel(this, this.$linkFn);
	};
	$Client_Directives_ForNextDirective.__typeName = 'Client.Directives.ForNextDirective';
	global.Client.Directives.ForNextDirective = $Client_Directives_ForNextDirective;
	////////////////////////////////////////////////////////////////////////////////
	// Client.Directives.GridDirective
	var $Client_Directives_GridDirective = function() {
		this.link = null;
		this.replace = false;
		this.scope = null;
		this.link = ss.mkdel(this, this.$linkFn);
		this.replace = true;
		this.scope = { scale: '=grid', showGrid: '=' };
	};
	$Client_Directives_GridDirective.__typeName = 'Client.Directives.GridDirective';
	global.Client.Directives.GridDirective = $Client_Directives_GridDirective;
	////////////////////////////////////////////////////////////////////////////////
	// Client.Directives.PropertyDirective
	var $Client_Directives_PropertyDirective = function() {
		this.link = null;
		this.link = ss.mkdel(this, this.$linkFn);
	};
	$Client_Directives_PropertyDirective.__typeName = 'Client.Directives.PropertyDirective';
	global.Client.Directives.PropertyDirective = $Client_Directives_PropertyDirective;
	////////////////////////////////////////////////////////////////////////////////
	// Client.Directives.SpecialNgRepeatDirective
	var $Client_Directives_SpecialNgRepeatDirective = function(compileService) {
		this.$compileService = null;
		this.link = null;
		this.$myElement = null;
		this.$myScope = null;
		this.replace = false;
		this.restrict = null;
		this.scope = null;
		this.templateUrl = null;
		this.transclude = false;
		this.$compileService = compileService;
		this.restrict = 'EA';
		this.replace = true;
		this.link = ss.mkdel(this, this.$linkFn);
		this.scope = true;
	};
	$Client_Directives_SpecialNgRepeatDirective.__typeName = 'Client.Directives.SpecialNgRepeatDirective';
	global.Client.Directives.SpecialNgRepeatDirective = $Client_Directives_SpecialNgRepeatDirective;
	////////////////////////////////////////////////////////////////////////////////
	// Client.Filters.RoundFilter
	var $Client_Filters_RoundFilter = function() {
	};
	$Client_Filters_RoundFilter.__typeName = 'Client.Filters.RoundFilter';
	global.Client.Filters.RoundFilter = $Client_Filters_RoundFilter;
	////////////////////////////////////////////////////////////////////////////////
	// Client.Libs.Extensions
	var $Client_Libs_Extensions = function() {
	};
	$Client_Libs_Extensions.__typeName = 'Client.Libs.Extensions';
	$Client_Libs_Extensions.randomElement = function(T) {
		return function(arr) {
			return arr[ss.Int32.trunc(Math.floor(Math.random() * arr.length))];
		};
	};
	$Client_Libs_Extensions.fuckingClone = function(elem) {
		var pos = elem.offset();
		var m = elem.clone();
		m.css('left', -999999);
		m.css('top', -999999);
		$('body').append(m);
		var curTransformX = m.position().left;
		var curTransformY = m.position().top;
		var oldRot = m.css('-webkit-transform');
		m.css('-webkit-transform', '');
		curTransformX = m.position().left - curTransformX;
		curTransformY = m.position().top - curTransformY;
		m.css('-webkit-transform', oldRot);
		m.css('left', pos.left + curTransformX);
		m.css('top', pos.top + curTransformY);
		return m;
	};
	global.Client.Libs.Extensions = $Client_Libs_Extensions;
	////////////////////////////////////////////////////////////////////////////////
	// Client.Libs.ScriptLoader
	var $Client_Libs_ScriptLoader = function() {
	};
	$Client_Libs_ScriptLoader.__typeName = 'Client.Libs.ScriptLoader';
	$Client_Libs_ScriptLoader.loadCss = function(filename) {
		var fileref = document.createElement('link');
		fileref.setAttribute('rel', 'stylesheet');
		fileref.setAttribute('type', 'text/css');
		fileref.setAttribute('href', filename);
		document.getElementsByTagName('head')[0].appendChild(fileref);
	};
	global.Client.Libs.ScriptLoader = $Client_Libs_ScriptLoader;
	////////////////////////////////////////////////////////////////////////////////
	// Client.Libs.TimeTracker
	var $Client_Libs_TimeTracker = function() {
	};
	$Client_Libs_TimeTracker.__typeName = 'Client.Libs.TimeTracker';
	$Client_Libs_TimeTracker.createInstance = function() {
		return $Client_Libs_TimeTracker.$ctor();
	};
	$Client_Libs_TimeTracker.$ctor = function() {
		var $this = {};
		$this.numOfTimes = 0;
		$this.startTime = new Date(0);
		$this.timeValue = 0;
		$this.endTime = new Date(0);
		$this.startTime = new Date();
		return $this;
	};
	global.Client.Libs.TimeTracker = $Client_Libs_TimeTracker;
	////////////////////////////////////////////////////////////////////////////////
	// Client.Scope._KeepBaseScopeAlive
	var $Client_Scope__KeepBaseScopeAlive = function() {
	};
	$Client_Scope__KeepBaseScopeAlive.__typeName = 'Client.Scope._KeepBaseScopeAlive';
	global.Client.Scope._KeepBaseScopeAlive = $Client_Scope__KeepBaseScopeAlive;
	////////////////////////////////////////////////////////////////////////////////
	// Client.Scope.Controller.ActiveLobbyModel
	var $Client_Scope_Controller_ActiveLobbyModel = function() {
	};
	$Client_Scope_Controller_ActiveLobbyModel.__typeName = 'Client.Scope.Controller.ActiveLobbyModel';
	$Client_Scope_Controller_ActiveLobbyModel.createInstance = function() {
		return $Client_Scope_Controller_ActiveLobbyModel.$ctor();
	};
	$Client_Scope_Controller_ActiveLobbyModel.$ctor = function() {
		var $this = {};
		$this.windowClosed = null;
		$this.room = null;
		$this.chatLines = null;
		$this.users = null;
		$this.sendChatMessage = null;
		$this.currentChatMessage = null;
		$this.startGame = null;
		return $this;
	};
	global.Client.Scope.Controller.ActiveLobbyModel = $Client_Scope_Controller_ActiveLobbyModel;
	////////////////////////////////////////////////////////////////////////////////
	// Client.Scope.Controller.ActiveLobbyScope
	var $Client_Scope_Controller_ActiveLobbyScope = function() {
		this.model = null;
		$Client_Scope_Directive_FloatingWindowBaseScope.call(this);
	};
	$Client_Scope_Controller_ActiveLobbyScope.__typeName = 'Client.Scope.Controller.ActiveLobbyScope';
	global.Client.Scope.Controller.ActiveLobbyScope = $Client_Scope_Controller_ActiveLobbyScope;
	////////////////////////////////////////////////////////////////////////////////
	// Client.Scope.Controller.CreateRoomModel
	var $Client_Scope_Controller_CreateRoomModel = function() {
	};
	$Client_Scope_Controller_CreateRoomModel.__typeName = 'Client.Scope.Controller.CreateRoomModel';
	$Client_Scope_Controller_CreateRoomModel.createInstance = function() {
		return $Client_Scope_Controller_CreateRoomModel.$ctor();
	};
	$Client_Scope_Controller_CreateRoomModel.$ctor = function() {
		var $this = {};
		$this.windowClosed = null;
		$this.roomName = null;
		$this.createRoom = null;
		$this.onCreateRoom = null;
		return $this;
	};
	global.Client.Scope.Controller.CreateRoomModel = $Client_Scope_Controller_CreateRoomModel;
	////////////////////////////////////////////////////////////////////////////////
	// Client.Scope.Controller.CreateRoomScope
	var $Client_Scope_Controller_CreateRoomScope = function() {
		this.model = null;
		$Client_Scope_Directive_FloatingWindowBaseScope.call(this);
	};
	$Client_Scope_Controller_CreateRoomScope.__typeName = 'Client.Scope.Controller.CreateRoomScope';
	global.Client.Scope.Controller.CreateRoomScope = $Client_Scope_Controller_CreateRoomScope;
	////////////////////////////////////////////////////////////////////////////////
	// Client.Scope.Controller.DebugGameCodeScope
	var $Client_Scope_Controller_DebugGameCodeScope = function() {
		this.model = null;
		$Client_Scope_Directive_FloatingWindowBaseScope.call(this);
	};
	$Client_Scope_Controller_DebugGameCodeScope.__typeName = 'Client.Scope.Controller.DebugGameCodeScope';
	global.Client.Scope.Controller.DebugGameCodeScope = $Client_Scope_Controller_DebugGameCodeScope;
	////////////////////////////////////////////////////////////////////////////////
	// Client.Scope.Controller.DebugGameCodeScopeModel
	var $Client_Scope_Controller_DebugGameCodeScopeModel = function() {
	};
	$Client_Scope_Controller_DebugGameCodeScopeModel.__typeName = 'Client.Scope.Controller.DebugGameCodeScopeModel';
	$Client_Scope_Controller_DebugGameCodeScopeModel.createInstance = function() {
		return $Client_Scope_Controller_DebugGameCodeScopeModel.$ctor();
	};
	$Client_Scope_Controller_DebugGameCodeScopeModel.$ctor = function() {
		var $this = $Client_Scope_Controller_GameUpdater.$ctor();
		$this.game = null;
		$this.room = null;
		$this.forceUpdate = false;
		$this.selection = null;
		$this.codeMirrorOptions = null;
		$this.breakpoints = null;
		$this.stepInto = null;
		$this.stepOver = null;
		$this.continue = null;
		$this.codeMirror = null;
		$this.lookupVariable = null;
		$this.variableLookup = null;
		$this.variableLookupResult = null;
		return $this;
	};
	global.Client.Scope.Controller.DebugGameCodeScopeModel = $Client_Scope_Controller_DebugGameCodeScopeModel;
	////////////////////////////////////////////////////////////////////////////////
	// Client.Scope.Controller.DebugGameControllerScope
	var $Client_Scope_Controller_DebugGameControllerScope = function() {
		this.gameModel = null;
		this.moveCard = null;
		this.animateCard = null;
		$Client_Services_ManagedScope.call(this);
	};
	$Client_Scope_Controller_DebugGameControllerScope.__typeName = 'Client.Scope.Controller.DebugGameControllerScope';
	global.Client.Scope.Controller.DebugGameControllerScope = $Client_Scope_Controller_DebugGameControllerScope;
	////////////////////////////////////////////////////////////////////////////////
	// Client.Scope.Controller.DebugGameModel
	var $Client_Scope_Controller_DebugGameModel = function() {
		this.mainArea = null;
		this.spaces = null;
		this.scale = null;
	};
	$Client_Scope_Controller_DebugGameModel.__typeName = 'Client.Scope.Controller.DebugGameModel';
	global.Client.Scope.Controller.DebugGameModel = $Client_Scope_Controller_DebugGameModel;
	////////////////////////////////////////////////////////////////////////////////
	// Client.Scope.Controller.EffectTesterAreaModel
	var $Client_Scope_Controller_EffectTesterAreaModel = function() {
	};
	$Client_Scope_Controller_EffectTesterAreaModel.__typeName = 'Client.Scope.Controller.EffectTesterAreaModel';
	$Client_Scope_Controller_EffectTesterAreaModel.createInstance = function() {
		return $Client_Scope_Controller_EffectTesterAreaModel.$ctor();
	};
	$Client_Scope_Controller_EffectTesterAreaModel.$ctor = function() {
		var $this = {};
		$this.area = null;
		return $this;
	};
	global.Client.Scope.Controller.EffectTesterAreaModel = $Client_Scope_Controller_EffectTesterAreaModel;
	////////////////////////////////////////////////////////////////////////////////
	// Client.Scope.Controller.EffectTesterCardModel
	var $Client_Scope_Controller_EffectTesterCardModel = function() {
	};
	$Client_Scope_Controller_EffectTesterCardModel.__typeName = 'Client.Scope.Controller.EffectTesterCardModel';
	$Client_Scope_Controller_EffectTesterCardModel.createInstance = function() {
		return $Client_Scope_Controller_EffectTesterCardModel.$ctor();
	};
	$Client_Scope_Controller_EffectTesterCardModel.$ctor = function() {
		var $this = {};
		$this.space = null;
		$this.card = null;
		return $this;
	};
	global.Client.Scope.Controller.EffectTesterCardModel = $Client_Scope_Controller_EffectTesterCardModel;
	////////////////////////////////////////////////////////////////////////////////
	// Client.Scope.Controller.EffectTesterControllerScope
	var $Client_Scope_Controller_EffectTesterControllerScope = function() {
		this.model = null;
		$Client_Services_ManagedScope.call(this);
	};
	$Client_Scope_Controller_EffectTesterControllerScope.__typeName = 'Client.Scope.Controller.EffectTesterControllerScope';
	global.Client.Scope.Controller.EffectTesterControllerScope = $Client_Scope_Controller_EffectTesterControllerScope;
	////////////////////////////////////////////////////////////////////////////////
	// Client.Scope.Controller.EffectTesterControllerScopeModel
	var $Client_Scope_Controller_EffectTesterControllerScopeModel = function() {
	};
	$Client_Scope_Controller_EffectTesterControllerScopeModel.__typeName = 'Client.Scope.Controller.EffectTesterControllerScopeModel';
	$Client_Scope_Controller_EffectTesterControllerScopeModel.createInstance = function() {
		return $Client_Scope_Controller_EffectTesterControllerScopeModel.$ctor();
	};
	$Client_Scope_Controller_EffectTesterControllerScopeModel.$ctor = function() {
		var $this = {};
		$this.game = null;
		$this.selection = null;
		$this.scale = null;
		$this.spaceTest = null;
		$this.areaTest = null;
		$this.textTest = null;
		$this.cardTest = null;
		return $this;
	};
	global.Client.Scope.Controller.EffectTesterControllerScopeModel = $Client_Scope_Controller_EffectTesterControllerScopeModel;
	////////////////////////////////////////////////////////////////////////////////
	// Client.Scope.Controller.EffectTesterSpaceModel
	var $Client_Scope_Controller_EffectTesterSpaceModel = function() {
	};
	$Client_Scope_Controller_EffectTesterSpaceModel.__typeName = 'Client.Scope.Controller.EffectTesterSpaceModel';
	$Client_Scope_Controller_EffectTesterSpaceModel.createInstance = function() {
		return $Client_Scope_Controller_EffectTesterSpaceModel.$ctor();
	};
	$Client_Scope_Controller_EffectTesterSpaceModel.$ctor = function() {
		var $this = {};
		$this.space = null;
		$this.cards = null;
		return $this;
	};
	global.Client.Scope.Controller.EffectTesterSpaceModel = $Client_Scope_Controller_EffectTesterSpaceModel;
	////////////////////////////////////////////////////////////////////////////////
	// Client.Scope.Controller.EffectTesterTextModel
	var $Client_Scope_Controller_EffectTesterTextModel = function() {
	};
	$Client_Scope_Controller_EffectTesterTextModel.__typeName = 'Client.Scope.Controller.EffectTesterTextModel';
	$Client_Scope_Controller_EffectTesterTextModel.createInstance = function() {
		return $Client_Scope_Controller_EffectTesterTextModel.$ctor();
	};
	$Client_Scope_Controller_EffectTesterTextModel.$ctor = function() {
		var $this = {};
		$this.text = null;
		return $this;
	};
	global.Client.Scope.Controller.EffectTesterTextModel = $Client_Scope_Controller_EffectTesterTextModel;
	////////////////////////////////////////////////////////////////////////////////
	// Client.Scope.Controller.GameCodeScope
	var $Client_Scope_Controller_GameCodeScope = function() {
		this.model = null;
		$Client_Scope_Directive_FloatingWindowBaseScope.call(this);
	};
	$Client_Scope_Controller_GameCodeScope.__typeName = 'Client.Scope.Controller.GameCodeScope';
	global.Client.Scope.Controller.GameCodeScope = $Client_Scope_Controller_GameCodeScope;
	////////////////////////////////////////////////////////////////////////////////
	// Client.Scope.Controller.GameCodeScopeModel
	var $Client_Scope_Controller_GameCodeScopeModel = function() {
	};
	$Client_Scope_Controller_GameCodeScopeModel.__typeName = 'Client.Scope.Controller.GameCodeScopeModel';
	$Client_Scope_Controller_GameCodeScopeModel.createInstance = function() {
		return $Client_Scope_Controller_GameCodeScopeModel.$ctor();
	};
	$Client_Scope_Controller_GameCodeScopeModel.$ctor = function() {
		var $this = $Client_Scope_Controller_GameUpdater.$ctor();
		$this.game = null;
		$this.forceUpdate = false;
		$this.selection = null;
		$this.codeMirrorOptions = null;
		return $this;
	};
	global.Client.Scope.Controller.GameCodeScopeModel = $Client_Scope_Controller_GameCodeScopeModel;
	////////////////////////////////////////////////////////////////////////////////
	// Client.Scope.Controller.GameControllerScope
	var $Client_Scope_Controller_GameControllerScope = function() {
		this.mainArea = null;
		this.scale = null;
		this.moveCard = null;
		this.animateCard = null;
		$Client_Services_ManagedScope.call(this);
	};
	$Client_Scope_Controller_GameControllerScope.__typeName = 'Client.Scope.Controller.GameControllerScope';
	global.Client.Scope.Controller.GameControllerScope = $Client_Scope_Controller_GameControllerScope;
	////////////////////////////////////////////////////////////////////////////////
	// Client.Scope.Controller.GameEditorModel
	var $Client_Scope_Controller_GameEditorModel = function() {
	};
	$Client_Scope_Controller_GameEditorModel.__typeName = 'Client.Scope.Controller.GameEditorModel';
	$Client_Scope_Controller_GameEditorModel.createInstance = function() {
		return $Client_Scope_Controller_GameEditorModel.$ctor();
	};
	$Client_Scope_Controller_GameEditorModel.$ctor = function() {
		var $this = $Client_Scope_Controller_GameUpdater.$ctor();
		$this.game = null;
		$this.openCode = null;
		$this.openLayout = null;
		$this.openEffects = null;
		$this.openTest = null;
		$this.selection = null;
		return $this;
	};
	global.Client.Scope.Controller.GameEditorModel = $Client_Scope_Controller_GameEditorModel;
	////////////////////////////////////////////////////////////////////////////////
	// Client.Scope.Controller.GameEditorScope
	var $Client_Scope_Controller_GameEditorScope = function() {
		this.model = null;
		$Client_Scope_Directive_FloatingWindowBaseScope.call(this);
	};
	$Client_Scope_Controller_GameEditorScope.__typeName = 'Client.Scope.Controller.GameEditorScope';
	global.Client.Scope.Controller.GameEditorScope = $Client_Scope_Controller_GameEditorScope;
	////////////////////////////////////////////////////////////////////////////////
	// Client.Scope.Controller.GameEditorSelectionScopeModel
	var $Client_Scope_Controller_GameEditorSelectionScopeModel = function() {
	};
	$Client_Scope_Controller_GameEditorSelectionScopeModel.__typeName = 'Client.Scope.Controller.GameEditorSelectionScopeModel';
	$Client_Scope_Controller_GameEditorSelectionScopeModel.createInstance = function() {
		return $Client_Scope_Controller_GameEditorSelectionScopeModel.$ctor();
	};
	$Client_Scope_Controller_GameEditorSelectionScopeModel.$ctor = function() {
		var $this = $Client_Scope_Controller_GameUpdater.$ctor();
		$this.selectedEffect = null;
		$this.selectedScenarioPieces = null;
		$this.selectedScenarioCard = null;
		$this.selectedScenarioSpace = null;
		$this.selectedScenarioEffect = null;
		$this.selectedSpace = null;
		$this.selectedText = null;
		$this.selectedArea = null;
		$this.selectedCard = null;
		$this.selectedLayoutPiece = 0;
		$this.selectedScenarioPiece = 0;
		$this.selectedScenario = null;
		$this.showGrid = false;
		$this.showCards = false;
		return $this;
	};
	global.Client.Scope.Controller.GameEditorSelectionScopeModel = $Client_Scope_Controller_GameEditorSelectionScopeModel;
	////////////////////////////////////////////////////////////////////////////////
	// Client.Scope.Controller.GameEffectsEditorScope
	var $Client_Scope_Controller_GameEffectsEditorScope = function() {
		this.model = null;
		$Client_Scope_Directive_FloatingWindowBaseScope.call(this);
	};
	$Client_Scope_Controller_GameEffectsEditorScope.__typeName = 'Client.Scope.Controller.GameEffectsEditorScope';
	global.Client.Scope.Controller.GameEffectsEditorScope = $Client_Scope_Controller_GameEffectsEditorScope;
	////////////////////////////////////////////////////////////////////////////////
	// Client.Scope.Controller.GameEffectsEditorScopeModel
	var $Client_Scope_Controller_GameEffectsEditorScopeModel = function() {
	};
	$Client_Scope_Controller_GameEffectsEditorScopeModel.__typeName = 'Client.Scope.Controller.GameEffectsEditorScopeModel';
	$Client_Scope_Controller_GameEffectsEditorScopeModel.createInstance = function() {
		return $Client_Scope_Controller_GameEffectsEditorScopeModel.$ctor();
	};
	$Client_Scope_Controller_GameEffectsEditorScopeModel.$ctor = function() {
		var $this = $Client_Scope_Controller_GameUpdater.$ctor();
		$this.game = null;
		$this.selection = null;
		$this.newEffectName = null;
		$this.newEffectType = 0;
		$this.effectTypes = null;
		$this.addEffect = null;
		$this.removeEffect = null;
		return $this;
	};
	global.Client.Scope.Controller.GameEffectsEditorScopeModel = $Client_Scope_Controller_GameEffectsEditorScopeModel;
	////////////////////////////////////////////////////////////////////////////////
	// Client.Scope.Controller.GameLayoutEditorScope
	var $Client_Scope_Controller_GameLayoutEditorScope = function() {
		this.model = null;
		$Client_Scope_Directive_FloatingWindowBaseScope.call(this);
	};
	$Client_Scope_Controller_GameLayoutEditorScope.__typeName = 'Client.Scope.Controller.GameLayoutEditorScope';
	global.Client.Scope.Controller.GameLayoutEditorScope = $Client_Scope_Controller_GameLayoutEditorScope;
	////////////////////////////////////////////////////////////////////////////////
	// Client.Scope.Controller.GameLayoutEditorScopeModel
	var $Client_Scope_Controller_GameLayoutEditorScopeModel = function() {
	};
	$Client_Scope_Controller_GameLayoutEditorScopeModel.__typeName = 'Client.Scope.Controller.GameLayoutEditorScopeModel';
	$Client_Scope_Controller_GameLayoutEditorScopeModel.createInstance = function() {
		return $Client_Scope_Controller_GameLayoutEditorScopeModel.$ctor();
	};
	$Client_Scope_Controller_GameLayoutEditorScopeModel.$ctor = function() {
		var $this = $Client_Scope_Controller_GameUpdater.$ctor();
		$this.selection = null;
		$this.game = null;
		$this.addText = null;
		$this.addArea = null;
		$this.addSpace = null;
		$this.removeSpace = null;
		$this.removeArea = null;
		$this.removeText = null;
		$this.openScenarios = null;
		$this.toggleGrid = null;
		$this.toggleCards = null;
		return $this;
	};
	global.Client.Scope.Controller.GameLayoutEditorScopeModel = $Client_Scope_Controller_GameLayoutEditorScopeModel;
	////////////////////////////////////////////////////////////////////////////////
	// Client.Scope.Controller.GameManagerModel
	var $Client_Scope_Controller_GameManagerModel = function() {
	};
	$Client_Scope_Controller_GameManagerModel.__typeName = 'Client.Scope.Controller.GameManagerModel';
	$Client_Scope_Controller_GameManagerModel.createInstance = function() {
		return $Client_Scope_Controller_GameManagerModel.$ctor();
	};
	$Client_Scope_Controller_GameManagerModel.$ctor = function() {
		var $this = {};
		$this.games = null;
		$this.selectedGame = null;
		$this.createGame = null;
		$this.deleteGame = null;
		return $this;
	};
	global.Client.Scope.Controller.GameManagerModel = $Client_Scope_Controller_GameManagerModel;
	////////////////////////////////////////////////////////////////////////////////
	// Client.Scope.Controller.GameManagerScope
	var $Client_Scope_Controller_GameManagerScope = function() {
		this.model = null;
		$Client_Scope_Directive_FloatingWindowBaseScope.call(this);
	};
	$Client_Scope_Controller_GameManagerScope.__typeName = 'Client.Scope.Controller.GameManagerScope';
	global.Client.Scope.Controller.GameManagerScope = $Client_Scope_Controller_GameManagerScope;
	////////////////////////////////////////////////////////////////////////////////
	// Client.Scope.Controller.GameScenarioEditorScope
	var $Client_Scope_Controller_GameScenarioEditorScope = function() {
		this.model = null;
		$Client_Scope_Directive_FloatingWindowBaseScope.call(this);
	};
	$Client_Scope_Controller_GameScenarioEditorScope.__typeName = 'Client.Scope.Controller.GameScenarioEditorScope';
	global.Client.Scope.Controller.GameScenarioEditorScope = $Client_Scope_Controller_GameScenarioEditorScope;
	////////////////////////////////////////////////////////////////////////////////
	// Client.Scope.Controller.GameScenarioEditorScopeModel
	var $Client_Scope_Controller_GameScenarioEditorScopeModel = function() {
	};
	$Client_Scope_Controller_GameScenarioEditorScopeModel.__typeName = 'Client.Scope.Controller.GameScenarioEditorScopeModel';
	$Client_Scope_Controller_GameScenarioEditorScopeModel.createInstance = function() {
		return $Client_Scope_Controller_GameScenarioEditorScopeModel.$ctor();
	};
	$Client_Scope_Controller_GameScenarioEditorScopeModel.$ctor = function() {
		var $this = $Client_Scope_Controller_GameUpdater.$ctor();
		$this.selection = null;
		$this.game = null;
		$this.getSpaceBySpaceGuid = null;
		$this.getAreaByAreaGuid = null;
		$this.getTextByTextGuid = null;
		$this.getCardByCardGuid = null;
		$this.getEffectByScenarioEffect = null;
		$this.addCardToSpace = null;
		$this.removeCardFromSpace = null;
		$this.addNewScenario = null;
		$this.deleteScenario = null;
		$this.cloneNewScenario = null;
		$this.getCurrentlySelected = null;
		$this.applyEffectToCurrentlySelected = null;
		$this.removeSpaceFromEffect = null;
		$this.removeAreaFromEffect = null;
		$this.removeCardFromEffect = null;
		$this.removeTextFromEffect = null;
		return $this;
	};
	global.Client.Scope.Controller.GameScenarioEditorScopeModel = $Client_Scope_Controller_GameScenarioEditorScopeModel;
	////////////////////////////////////////////////////////////////////////////////
	// Client.Scope.Controller.GameTestEditorScope
	var $Client_Scope_Controller_GameTestEditorScope = function() {
		this.model = null;
		$Client_Scope_Directive_FloatingWindowBaseScope.call(this);
	};
	$Client_Scope_Controller_GameTestEditorScope.__typeName = 'Client.Scope.Controller.GameTestEditorScope';
	global.Client.Scope.Controller.GameTestEditorScope = $Client_Scope_Controller_GameTestEditorScope;
	////////////////////////////////////////////////////////////////////////////////
	// Client.Scope.Controller.GameTestEditorScopeModel
	var $Client_Scope_Controller_GameTestEditorScopeModel = function() {
	};
	$Client_Scope_Controller_GameTestEditorScopeModel.__typeName = 'Client.Scope.Controller.GameTestEditorScopeModel';
	$Client_Scope_Controller_GameTestEditorScopeModel.createInstance = function() {
		return $Client_Scope_Controller_GameTestEditorScopeModel.$ctor();
	};
	$Client_Scope_Controller_GameTestEditorScopeModel.$ctor = function() {
		var $this = $Client_Scope_Controller_GameUpdater.$ctor();
		$this.game = null;
		$this.selection = null;
		$this.startGame = null;
		$this.log = null;
		$this.gameRunning = false;
		$this.destroyGame = null;
		$this.room = null;
		$this.gameView = null;
		$this.debugCode = null;
		$this.codeEditor = null;
		return $this;
	};
	global.Client.Scope.Controller.GameTestEditorScopeModel = $Client_Scope_Controller_GameTestEditorScopeModel;
	////////////////////////////////////////////////////////////////////////////////
	// Client.Scope.Controller.GameUpdater
	var $Client_Scope_Controller_GameUpdater = function() {
	};
	$Client_Scope_Controller_GameUpdater.__typeName = 'Client.Scope.Controller.GameUpdater';
	$Client_Scope_Controller_GameUpdater.createInstance = function() {
		return $Client_Scope_Controller_GameUpdater.$ctor();
	};
	$Client_Scope_Controller_GameUpdater.$ctor = function() {
		var $this = {};
		$this.updateGame = null;
		$this.updateStatus = 0;
		return $this;
	};
	global.Client.Scope.Controller.GameUpdater = $Client_Scope_Controller_GameUpdater;
	////////////////////////////////////////////////////////////////////////////////
	// Client.Scope.Controller.HomeModel
	var $Client_Scope_Controller_HomeModel = function() {
	};
	$Client_Scope_Controller_HomeModel.__typeName = 'Client.Scope.Controller.HomeModel';
	$Client_Scope_Controller_HomeModel.createInstance = function() {
		return $Client_Scope_Controller_HomeModel.$ctor();
	};
	$Client_Scope_Controller_HomeModel.$ctor = function() {
		var $this = {};
		$this.gameTypes = null;
		$this.selectedGameType = null;
		$this.rooms = null;
		$this.selectedRoom = null;
		$this.gameTypeSelected = null;
		$this.roomSelected = null;
		$this.createRoom = null;
		$this.joinRoom = null;
		$this.user = null;
		$this.createGame = null;
		return $this;
	};
	global.Client.Scope.Controller.HomeModel = $Client_Scope_Controller_HomeModel;
	////////////////////////////////////////////////////////////////////////////////
	// Client.Scope.Controller.HomeScope
	var $Client_Scope_Controller_HomeScope = function() {
		this.model = null;
		$Client_Scope_Directive_FloatingWindowBaseScope.call(this);
	};
	$Client_Scope_Controller_HomeScope.__typeName = 'Client.Scope.Controller.HomeScope';
	global.Client.Scope.Controller.HomeScope = $Client_Scope_Controller_HomeScope;
	////////////////////////////////////////////////////////////////////////////////
	// Client.Scope.Controller.LoginScope
	var $Client_Scope_Controller_LoginScope = function() {
		this.model = null;
		$Client_Scope_Directive_FloatingWindowBaseScope.call(this);
	};
	$Client_Scope_Controller_LoginScope.__typeName = 'Client.Scope.Controller.LoginScope';
	global.Client.Scope.Controller.LoginScope = $Client_Scope_Controller_LoginScope;
	////////////////////////////////////////////////////////////////////////////////
	// Client.Scope.Controller.LoginScopeModel
	var $Client_Scope_Controller_LoginScopeModel = function() {
	};
	$Client_Scope_Controller_LoginScopeModel.__typeName = 'Client.Scope.Controller.LoginScopeModel';
	$Client_Scope_Controller_LoginScopeModel.createInstance = function() {
		return $Client_Scope_Controller_LoginScopeModel.$ctor();
	};
	$Client_Scope_Controller_LoginScopeModel.$ctor = function() {
		var $this = {};
		$this.windowClosed = null;
		$this.username = null;
		$this.password = null;
		$this.createAccount = null;
		$this.loginAccount = null;
		$this.dosomething = null;
		return $this;
	};
	global.Client.Scope.Controller.LoginScopeModel = $Client_Scope_Controller_LoginScopeModel;
	////////////////////////////////////////////////////////////////////////////////
	// Client.Scope.Controller.MessageModel
	var $Client_Scope_Controller_MessageModel = function() {
	};
	$Client_Scope_Controller_MessageModel.__typeName = 'Client.Scope.Controller.MessageModel';
	$Client_Scope_Controller_MessageModel.createInstance = function() {
		return $Client_Scope_Controller_MessageModel.$ctor();
	};
	$Client_Scope_Controller_MessageModel.$ctor = function() {
		var $this = {};
		$this.title = null;
		$this.message = null;
		$this.callback = null;
		$this.messageType = 0;
		$this.response = null;
		return $this;
	};
	global.Client.Scope.Controller.MessageModel = $Client_Scope_Controller_MessageModel;
	////////////////////////////////////////////////////////////////////////////////
	// Client.Scope.Controller.MessageScope
	var $Client_Scope_Controller_MessageScope = function() {
		this.model = null;
		$Client_Scope_Directive_FloatingWindowBaseScope.call(this);
	};
	$Client_Scope_Controller_MessageScope.__typeName = 'Client.Scope.Controller.MessageScope';
	global.Client.Scope.Controller.MessageScope = $Client_Scope_Controller_MessageScope;
	////////////////////////////////////////////////////////////////////////////////
	// Client.Scope.Controller.MessageType
	var $Client_Scope_Controller_MessageType = function() {
	};
	$Client_Scope_Controller_MessageType.__typeName = 'Client.Scope.Controller.MessageType';
	global.Client.Scope.Controller.MessageType = $Client_Scope_Controller_MessageType;
	////////////////////////////////////////////////////////////////////////////////
	// Client.Scope.Controller.MinimizeScope
	var $Client_Scope_Controller_MinimizeScope = function() {
		this.items = null;
		this.open = null;
		this.remove = null;
		Client.Scope.BaseScope.call(this);
	};
	$Client_Scope_Controller_MinimizeScope.__typeName = 'Client.Scope.Controller.MinimizeScope';
	global.Client.Scope.Controller.MinimizeScope = $Client_Scope_Controller_MinimizeScope;
	////////////////////////////////////////////////////////////////////////////////
	// Client.Scope.Controller.QuestionScope
	var $Client_Scope_Controller_QuestionScope = function() {
		this.model = null;
		$Client_Scope_Directive_FloatingWindowBaseScope.call(this);
	};
	$Client_Scope_Controller_QuestionScope.__typeName = 'Client.Scope.Controller.QuestionScope';
	global.Client.Scope.Controller.QuestionScope = $Client_Scope_Controller_QuestionScope;
	////////////////////////////////////////////////////////////////////////////////
	// Client.Scope.Controller.QuestionScopeModel
	var $Client_Scope_Controller_QuestionScopeModel = function() {
	};
	$Client_Scope_Controller_QuestionScopeModel.__typeName = 'Client.Scope.Controller.QuestionScopeModel';
	$Client_Scope_Controller_QuestionScopeModel.createInstance = function() {
		return $Client_Scope_Controller_QuestionScopeModel.$ctor();
	};
	$Client_Scope_Controller_QuestionScopeModel.$ctor = function() {
		var $this = {};
		$this.windowClosed = null;
		$this.question = null;
		$this.answers = null;
		$this.selectedAnswer = null;
		$this.answerQuestion = null;
		return $this;
	};
	global.Client.Scope.Controller.QuestionScopeModel = $Client_Scope_Controller_QuestionScopeModel;
	////////////////////////////////////////////////////////////////////////////////
	// Client.Scope.Controller.SelectedGameLayoutPiece
	var $Client_Scope_Controller_SelectedGameLayoutPiece = function() {
	};
	$Client_Scope_Controller_SelectedGameLayoutPiece.__typeName = 'Client.Scope.Controller.SelectedGameLayoutPiece';
	global.Client.Scope.Controller.SelectedGameLayoutPiece = $Client_Scope_Controller_SelectedGameLayoutPiece;
	////////////////////////////////////////////////////////////////////////////////
	// Client.Scope.Controller.SelectedGameScenarioPiece
	var $Client_Scope_Controller_SelectedGameScenarioPiece = function() {
	};
	$Client_Scope_Controller_SelectedGameScenarioPiece.__typeName = 'Client.Scope.Controller.SelectedGameScenarioPiece';
	global.Client.Scope.Controller.SelectedGameScenarioPiece = $Client_Scope_Controller_SelectedGameScenarioPiece;
	////////////////////////////////////////////////////////////////////////////////
	// Client.Scope.Controller.SelectedScenarioPieces
	var $Client_Scope_Controller_SelectedScenarioPieces = function() {
	};
	$Client_Scope_Controller_SelectedScenarioPieces.__typeName = 'Client.Scope.Controller.SelectedScenarioPieces';
	$Client_Scope_Controller_SelectedScenarioPieces.createInstance = function() {
		return $Client_Scope_Controller_SelectedScenarioPieces.$ctor();
	};
	$Client_Scope_Controller_SelectedScenarioPieces.$ctor = function() {
		var $this = {};
		$this.space = null;
		$this.card = null;
		$this.area = null;
		$this.text = null;
		$this.piece = 0;
		return $this;
	};
	global.Client.Scope.Controller.SelectedScenarioPieces = $Client_Scope_Controller_SelectedScenarioPieces;
	////////////////////////////////////////////////////////////////////////////////
	// Client.Scope.Controller.SelectedScenarioPieceType
	var $Client_Scope_Controller_SelectedScenarioPieceType = function() {
	};
	$Client_Scope_Controller_SelectedScenarioPieceType.__typeName = 'Client.Scope.Controller.SelectedScenarioPieceType';
	global.Client.Scope.Controller.SelectedScenarioPieceType = $Client_Scope_Controller_SelectedScenarioPieceType;
	////////////////////////////////////////////////////////////////////////////////
	// Client.Scope.Controller.TestGameControllerScope
	var $Client_Scope_Controller_TestGameControllerScope = function() {
		this.model = null;
		$Client_Services_ManagedScope.call(this);
	};
	$Client_Scope_Controller_TestGameControllerScope.__typeName = 'Client.Scope.Controller.TestGameControllerScope';
	global.Client.Scope.Controller.TestGameControllerScope = $Client_Scope_Controller_TestGameControllerScope;
	////////////////////////////////////////////////////////////////////////////////
	// Client.Scope.Controller.TestGameControllerScopeModel
	var $Client_Scope_Controller_TestGameControllerScopeModel = function() {
	};
	$Client_Scope_Controller_TestGameControllerScopeModel.__typeName = 'Client.Scope.Controller.TestGameControllerScopeModel';
	$Client_Scope_Controller_TestGameControllerScopeModel.createInstance = function() {
		return $Client_Scope_Controller_TestGameControllerScopeModel.$ctor();
	};
	$Client_Scope_Controller_TestGameControllerScopeModel.$ctor = function() {
		var $this = {};
		$this.game = null;
		$this.scale = null;
		$this.moveCard = null;
		$this.animateCard = null;
		$this.selection = null;
		$this.getCardsFromScenario = null;
		return $this;
	};
	global.Client.Scope.Controller.TestGameControllerScopeModel = $Client_Scope_Controller_TestGameControllerScopeModel;
	////////////////////////////////////////////////////////////////////////////////
	// Client.Scope.Controller.UpdateStatusType
	var $Client_Scope_Controller_UpdateStatusType = function() {
	};
	$Client_Scope_Controller_UpdateStatusType.__typeName = 'Client.Scope.Controller.UpdateStatusType';
	global.Client.Scope.Controller.UpdateStatusType = $Client_Scope_Controller_UpdateStatusType;
	////////////////////////////////////////////////////////////////////////////////
	// Client.Scope.Directive.AcgSpacesScope
	var $Client_Scope_Directive_AcgSpacesScope = function() {
		this.spaces = null;
		this.space = null;
		Client.Scope.BaseScope.call(this);
	};
	$Client_Scope_Directive_AcgSpacesScope.__typeName = 'Client.Scope.Directive.AcgSpacesScope';
	global.Client.Scope.Directive.AcgSpacesScope = $Client_Scope_Directive_AcgSpacesScope;
	////////////////////////////////////////////////////////////////////////////////
	// Client.Scope.Directive.CardScope
	var $Client_Scope_Directive_CardScope = function() {
		this.card = null;
		this.cardStyle = null;
		this.space = null;
		Client.Scope.BaseScope.call(this);
	};
	$Client_Scope_Directive_CardScope.__typeName = 'Client.Scope.Directive.CardScope';
	global.Client.Scope.Directive.CardScope = $Client_Scope_Directive_CardScope;
	////////////////////////////////////////////////////////////////////////////////
	// Client.Scope.Directive.DebugCardScope
	var $Client_Scope_Directive_DebugCardScope = function() {
		this.gameModel = null;
		this.card = null;
		this.classes = null;
		this.space = null;
		this.cardStyle = null;
		this.cardClick = null;
		Client.Scope.BaseScope.call(this);
	};
	$Client_Scope_Directive_DebugCardScope.__typeName = 'Client.Scope.Directive.DebugCardScope';
	global.Client.Scope.Directive.DebugCardScope = $Client_Scope_Directive_DebugCardScope;
	////////////////////////////////////////////////////////////////////////////////
	// Client.Scope.Directive.DebugSpaceScope
	var $Client_Scope_Directive_DebugSpaceScope = function() {
		this.gameModel = null;
		this.space = null;
		this.spaceStyle = null;
		Client.Scope.BaseScope.call(this);
	};
	$Client_Scope_Directive_DebugSpaceScope.__typeName = 'Client.Scope.Directive.DebugSpaceScope';
	global.Client.Scope.Directive.DebugSpaceScope = $Client_Scope_Directive_DebugSpaceScope;
	////////////////////////////////////////////////////////////////////////////////
	// Client.Scope.Directive.EffectTestAreaScope
	var $Client_Scope_Directive_EffectTestAreaScope = function() {
		this.area = null;
		this.areaStyle = null;
		$Client_Scope_Controller_EffectTesterControllerScope.call(this);
	};
	$Client_Scope_Directive_EffectTestAreaScope.__typeName = 'Client.Scope.Directive.EffectTestAreaScope';
	global.Client.Scope.Directive.EffectTestAreaScope = $Client_Scope_Directive_EffectTestAreaScope;
	////////////////////////////////////////////////////////////////////////////////
	// Client.Scope.Directive.EffectTestCardScope
	var $Client_Scope_Directive_EffectTestCardScope = function() {
		this.card = null;
		this.cardStyle = null;
		this.test = 0;
		$Client_Scope_Directive_EffectTestSpaceScope.call(this);
	};
	$Client_Scope_Directive_EffectTestCardScope.__typeName = 'Client.Scope.Directive.EffectTestCardScope';
	global.Client.Scope.Directive.EffectTestCardScope = $Client_Scope_Directive_EffectTestCardScope;
	////////////////////////////////////////////////////////////////////////////////
	// Client.Scope.Directive.EffectTestSpaceScope
	var $Client_Scope_Directive_EffectTestSpaceScope = function() {
		this.space = null;
		this.spaceStyle = null;
		$Client_Scope_Controller_EffectTesterControllerScope.call(this);
	};
	$Client_Scope_Directive_EffectTestSpaceScope.__typeName = 'Client.Scope.Directive.EffectTestSpaceScope';
	global.Client.Scope.Directive.EffectTestSpaceScope = $Client_Scope_Directive_EffectTestSpaceScope;
	////////////////////////////////////////////////////////////////////////////////
	// Client.Scope.Directive.EffectTestTextScope
	var $Client_Scope_Directive_EffectTestTextScope = function() {
		this.text = null;
		this.textStyle = null;
		$Client_Scope_Controller_EffectTesterControllerScope.call(this);
	};
	$Client_Scope_Directive_EffectTestTextScope.__typeName = 'Client.Scope.Directive.EffectTestTextScope';
	global.Client.Scope.Directive.EffectTestTextScope = $Client_Scope_Directive_EffectTestTextScope;
	////////////////////////////////////////////////////////////////////////////////
	// Client.Scope.Directive.EffectTestType
	var $Client_Scope_Directive_EffectTestType = function() {
	};
	$Client_Scope_Directive_EffectTestType.__typeName = 'Client.Scope.Directive.EffectTestType';
	global.Client.Scope.Directive.EffectTestType = $Client_Scope_Directive_EffectTestType;
	////////////////////////////////////////////////////////////////////////////////
	// Client.Scope.Directive.FloatingWindowBaseScope
	var $Client_Scope_Directive_FloatingWindowBaseScope = function() {
		this.swingAway = null;
		this.swingBack = null;
		this.minimize = null;
		this.visible = false;
		this.minimized = false;
		this.onClose = null;
		this.onReady = null;
		this.destroyWindow = null;
		$Client_Services_ManagedScope.call(this);
	};
	$Client_Scope_Directive_FloatingWindowBaseScope.__typeName = 'Client.Scope.Directive.FloatingWindowBaseScope';
	global.Client.Scope.Directive.FloatingWindowBaseScope = $Client_Scope_Directive_FloatingWindowBaseScope;
	////////////////////////////////////////////////////////////////////////////////
	// Client.Scope.Directive.FloatingWindowPosition
	var $Client_Scope_Directive_FloatingWindowPosition = function() {
	};
	$Client_Scope_Directive_FloatingWindowPosition.__typeName = 'Client.Scope.Directive.FloatingWindowPosition';
	$Client_Scope_Directive_FloatingWindowPosition.createInstance = function() {
		return $Client_Scope_Directive_FloatingWindowPosition.$ctor();
	};
	$Client_Scope_Directive_FloatingWindowPosition.$ctor = function() {
		var $this = {};
		$this.display = null;
		$this.left = null;
		$this.top = null;
		$this.marginLeft = null;
		$this.marginTop = null;
		$this.zIndex = 0;
		return $this;
	};
	global.Client.Scope.Directive.FloatingWindowPosition = $Client_Scope_Directive_FloatingWindowPosition;
	////////////////////////////////////////////////////////////////////////////////
	// Client.Scope.Directive.FloatingWindowScope
	var $Client_Scope_Directive_FloatingWindowScope = function() {
		this.$parent = null;
		this.visible = false;
		this.width = null;
		this.height = null;
		this.left = null;
		this.top = null;
		this.sizeStyle = null;
		this.lastSizeStyle = null;
		this.positionStyles = null;
		this.lastPositionStyles = null;
		this.windowTitle = null;
		this.onclose = null;
		this.close = null;
		this.minimize = null;
		this.maximize = null;
		this.restore = null;
		this.isMaximized = false;
		Client.Scope.BaseScope.call(this);
	};
	$Client_Scope_Directive_FloatingWindowScope.__typeName = 'Client.Scope.Directive.FloatingWindowScope';
	global.Client.Scope.Directive.FloatingWindowScope = $Client_Scope_Directive_FloatingWindowScope;
	////////////////////////////////////////////////////////////////////////////////
	// Client.Scope.Directive.Size
	var $Client_Scope_Directive_Size = function() {
	};
	$Client_Scope_Directive_Size.__typeName = 'Client.Scope.Directive.Size';
	$Client_Scope_Directive_Size.createInstance = function() {
		return $Client_Scope_Directive_Size.$ctor();
	};
	$Client_Scope_Directive_Size.$ctor = function() {
		var $this = {};
		$this.width = null;
		$this.height = null;
		return $this;
	};
	global.Client.Scope.Directive.Size = $Client_Scope_Directive_Size;
	////////////////////////////////////////////////////////////////////////////////
	// Client.Scope.Directive.SpaceScope
	var $Client_Scope_Directive_SpaceScope = function() {
		this.space = null;
		this.spaceStyle = null;
		Client.Scope.BaseScope.call(this);
	};
	$Client_Scope_Directive_SpaceScope.__typeName = 'Client.Scope.Directive.SpaceScope';
	global.Client.Scope.Directive.SpaceScope = $Client_Scope_Directive_SpaceScope;
	////////////////////////////////////////////////////////////////////////////////
	// Client.Scope.Directive.SwingDirection
	var $Client_Scope_Directive_SwingDirection = function() {
	};
	$Client_Scope_Directive_SwingDirection.__typeName = 'Client.Scope.Directive.SwingDirection';
	global.Client.Scope.Directive.SwingDirection = $Client_Scope_Directive_SwingDirection;
	////////////////////////////////////////////////////////////////////////////////
	// Client.Scope.Directive.TestAreaScope
	var $Client_Scope_Directive_TestAreaScope = function() {
		this.area = null;
		this.areaStyle = null;
		$Client_Scope_Controller_TestGameControllerScope.call(this);
	};
	$Client_Scope_Directive_TestAreaScope.__typeName = 'Client.Scope.Directive.TestAreaScope';
	global.Client.Scope.Directive.TestAreaScope = $Client_Scope_Directive_TestAreaScope;
	////////////////////////////////////////////////////////////////////////////////
	// Client.Scope.Directive.TestCardScope
	var $Client_Scope_Directive_TestCardScope = function() {
		this.card = null;
		this.cardStyle = null;
		this.cardClick = null;
		$Client_Scope_Directive_TestSpaceScope.call(this);
	};
	$Client_Scope_Directive_TestCardScope.__typeName = 'Client.Scope.Directive.TestCardScope';
	global.Client.Scope.Directive.TestCardScope = $Client_Scope_Directive_TestCardScope;
	////////////////////////////////////////////////////////////////////////////////
	// Client.Scope.Directive.TestSpaceScope
	var $Client_Scope_Directive_TestSpaceScope = function() {
		this.space = null;
		this.spaceStyle = null;
		$Client_Scope_Controller_TestGameControllerScope.call(this);
	};
	$Client_Scope_Directive_TestSpaceScope.__typeName = 'Client.Scope.Directive.TestSpaceScope';
	global.Client.Scope.Directive.TestSpaceScope = $Client_Scope_Directive_TestSpaceScope;
	////////////////////////////////////////////////////////////////////////////////
	// Client.Scope.Directive.TestTextScope
	var $Client_Scope_Directive_TestTextScope = function() {
		this.text = null;
		this.textStyle = null;
		$Client_Scope_Controller_TestGameControllerScope.call(this);
	};
	$Client_Scope_Directive_TestTextScope.__typeName = 'Client.Scope.Directive.TestTextScope';
	global.Client.Scope.Directive.TestTextScope = $Client_Scope_Directive_TestTextScope;
	////////////////////////////////////////////////////////////////////////////////
	// Client.Services.ClientChatManagerService
	var $Client_Services_ClientChatManagerService = function(gateway) {
		this.$clientChatManager = null;
		this.onGetChatInfo = new (ss.makeGenericType($Client_Services_UserEventCacher$1, [Models.ChatManagerModels.ChatRoomInfoModel]))();
		this.onGetChatLines = new (ss.makeGenericType($Client_Services_UserEventCacher$1, [Models.ChatManagerModels.ChatMessagesModel]))();
		this.$clientChatManager = new ClientLibs.Managers.ClientChatManager(gateway.get_gateway());
		this.$clientChatManager.add_onGetChatInfo(ss.mkdel(this, function(user, model) {
			this.onGetChatInfo.trigger(user, model);
		}));
		this.$clientChatManager.add_onGetChatLines(ss.mkdel(this, function(user1, model1) {
			this.onGetChatLines.trigger(user1, model1);
		}));
	};
	$Client_Services_ClientChatManagerService.__typeName = 'Client.Services.ClientChatManagerService';
	global.Client.Services.ClientChatManagerService = $Client_Services_ClientChatManagerService;
	////////////////////////////////////////////////////////////////////////////////
	// Client.Services.ClientDebugManagerService
	var $Client_Services_ClientDebugManagerService = function(gateway) {
		this.$clientDebugManager = null;
		this.onGetDebugLog = new (ss.makeGenericType($Client_Services_UserEventCacher$1, [Models.DebugGameManagerModels.DebugGameLogModel]))();
		this.onGetDebugBreak = new (ss.makeGenericType($Client_Services_UserEventCacher$1, [Models.DebugGameManagerModels.DebugGameBreakModel]))();
		this.onUpdateState = new (ss.makeGenericType($Client_Services_UserEventCacher$1, [String]))();
		this.onGameStarted = new (ss.makeGenericType($Client_Services_UserEventCacher$1, [Models.GameManagerModels.GameRoomModel]))();
		this.onGameOver = new (ss.makeGenericType($Client_Services_UserEventCacher$1, [String]))();
		this.onAskQuestion = new (ss.makeGenericType($Client_Services_UserEventCacher$1, [Models.GameManagerModels.GameSendAnswerModel]))();
		this.$clientDebugManager = new ClientLibs.Managers.ClientDebugManager(gateway.get_gateway());
		this.$clientDebugManager.add_onGameOver(ss.mkdel(this, function(user, model) {
			this.onGameOver.trigger(user, model);
		}));
		this.$clientDebugManager.add_onGetDebugBreak(ss.mkdel(this, function(user1, model1) {
			this.onGetDebugBreak.trigger(user1, model1);
		}));
		this.$clientDebugManager.add_onGetDebugLog(ss.mkdel(this, function(user2, model2) {
			this.onGetDebugLog.trigger(user2, model2);
		}));
		this.$clientDebugManager.add_onAskQuestion(ss.mkdel(this, function(user3, model3) {
			console.timeEnd('Question');
			this.onAskQuestion.trigger(user3, model3);
		}));
		this.$clientDebugManager.add_onGameStarted(ss.mkdel(this, function(user4, model4) {
			this.onGameStarted.trigger(user4, model4);
		}));
		this.$clientDebugManager.add_onUpdateState(ss.mkdel(this, function(user5, model5) {
			this.onUpdateState.trigger(user5, model5);
		}));
	};
	$Client_Services_ClientDebugManagerService.__typeName = 'Client.Services.ClientDebugManagerService';
	global.Client.Services.ClientDebugManagerService = $Client_Services_ClientDebugManagerService;
	////////////////////////////////////////////////////////////////////////////////
	// Client.Services.ClientGameManagerService
	var $Client_Services_ClientGameManagerService = function(gateway) {
		this.$clientGameManager = null;
		this.onAskQuestion = new (ss.makeGenericType($Client_Services_UserEventCacher$1, [Models.GameManagerModels.GameSendAnswerModel]))();
		this.onUpdateState = new (ss.makeGenericType($Client_Services_UserEventCacher$1, [String]))();
		this.onGameStarted = new (ss.makeGenericType($Client_Services_UserEventCacher$1, [Models.GameManagerModels.GameRoomModel]))();
		this.onGameOver = new (ss.makeGenericType($Client_Services_UserEventCacher$1, [String]))();
		this.$clientGameManager = new ClientLibs.Managers.ClientGameManager(gateway.get_gateway());
		this.$clientGameManager.add_onAskQuestion(ss.mkdel(this, function(user, model) {
			this.onAskQuestion.trigger(user, model);
		}));
		this.$clientGameManager.add_onGameOver(ss.mkdel(this, function(user1, model1) {
			this.onGameOver.trigger(user1, model1);
		}));
		this.$clientGameManager.add_onGameStarted(ss.mkdel(this, function(user2, model2) {
			this.onGameStarted.trigger(user2, model2);
		}));
		this.$clientGameManager.add_onUpdateState(ss.mkdel(this, function(user3, model3) {
			this.onUpdateState.trigger(user3, model3);
		}));
	};
	$Client_Services_ClientGameManagerService.__typeName = 'Client.Services.ClientGameManagerService';
	global.Client.Services.ClientGameManagerService = $Client_Services_ClientGameManagerService;
	////////////////////////////////////////////////////////////////////////////////
	// Client.Services.ClientManagerService
	var $Client_Services_ClientManagerService = function(clientSiteManagerService, clientGameManagerService, clientDebugManagerService, clientChatManagerService) {
		this.clientSiteManagerService = null;
		this.clientGameManagerService = null;
		this.clientDebugManagerService = null;
		this.clientChatManagerService = null;
		this.clientSiteManagerService = clientSiteManagerService;
		this.clientGameManagerService = clientGameManagerService;
		this.clientDebugManagerService = clientDebugManagerService;
		this.clientChatManagerService = clientChatManagerService;
	};
	$Client_Services_ClientManagerService.__typeName = 'Client.Services.ClientManagerService';
	global.Client.Services.ClientManagerService = $Client_Services_ClientManagerService;
	////////////////////////////////////////////////////////////////////////////////
	// Client.Services.ClientSiteManagerService
	var $Client_Services_ClientSiteManagerService = function(gateway) {
		this.$clientSiteManager = null;
		this.onGetGameTypesReceived = new (ss.makeGenericType($Client_Services_UserEventCacher$1, [Models.SiteManagerModels.GetGameTypesReceivedResponse]))();
		this.onUserCreate = new (ss.makeGenericType($Client_Services_UserEventCacher$1, [Models.UserCreateResponse]))();
		this.onLogin = new (ss.makeGenericType($Client_Services_UserEventCacher$1, [Models.UserLoginResponse]))();
		this.onGetRoomsReceived = new (ss.makeGenericType($Client_Services_UserEventCacher$1, [Models.SiteManagerModels.GetRoomsResponse]))();
		this.onRoomJoined = new (ss.makeGenericType($Client_Services_UserEventCacher$1, [Models.SiteManagerModels.RoomJoinResponse]))();
		this.onGetRoomInfoReceived = new (ss.makeGenericType($Client_Services_UserEventCacher$1, [Models.SiteManagerModels.GetRoomInfoResponse]))();
		this.onGetGamesByUserReceived = new (ss.makeGenericType($Client_Services_UserEventCacher$1, [Models.SiteManagerModels.GetGamesByUserResponse]))();
		this.onDoesGameNameExistReceived = new (ss.makeGenericType($Client_Services_UserEventCacher$1, [Models.SiteManagerModels.DoesGameExistResponse]))();
		this.onDeveloperCreateGameReceived = new (ss.makeGenericType($Client_Services_UserEventCacher$1, [Models.SiteManagerModels.DeveloperCreateGameResponse]))();
		this.onDeveloperUpdateGameReceived = new (ss.makeGenericType($Client_Services_UserEventCacher$1, [Models.SiteManagerModels.DeveloperUpdateGameResponse]))();
		this.$clientSiteManager = new ClientLibs.Managers.ClientSiteManager(gateway.get_gateway());
		this.$clientSiteManager.add_onGetGameTypesReceived(ss.mkdel(this, function(user, model) {
			this.onGetGameTypesReceived.trigger(user, model);
		}));
		this.$clientSiteManager.add_onLogin(ss.mkdel(this, function(user1, model1) {
			this.onLogin.trigger(user1, model1);
		}));
		this.$clientSiteManager.add_onUserCreate(ss.mkdel(this, function(user2, model2) {
			this.onUserCreate.trigger(user2, model2);
		}));
		this.$clientSiteManager.add_onGetRoomsReceived(ss.mkdel(this, function(user3, model3) {
			this.onGetRoomsReceived.trigger(user3, model3);
		}));
		this.$clientSiteManager.add_onRoomJoined(ss.mkdel(this, function(user4, model4) {
			this.onRoomJoined.trigger(user4, model4);
		}));
		this.$clientSiteManager.add_onGetRoomInfoReceived(ss.mkdel(this, function(user5, model5) {
			this.onGetRoomInfoReceived.trigger(user5, model5);
		}));
		this.$clientSiteManager.add_onGetGamesByUserReceived(ss.mkdel(this, function(user6, model6) {
			this.onGetGamesByUserReceived.trigger(user6, model6);
		}));
		this.$clientSiteManager.add_onDoesGameNameExistReceived(ss.mkdel(this, function(user7, model7) {
			this.onDoesGameNameExistReceived.trigger(user7, model7);
		}));
		this.$clientSiteManager.add_onDeveloperCreateGameReceived(ss.mkdel(this, function(user8, model8) {
			this.onDeveloperCreateGameReceived.trigger(user8, model8);
		}));
		this.$clientSiteManager.add_onDeveloperUpdateGameReceived(ss.mkdel(this, function(user9, model9) {
			this.onDeveloperUpdateGameReceived.trigger(user9, model9);
		}));
	};
	$Client_Services_ClientSiteManagerService.__typeName = 'Client.Services.ClientSiteManagerService';
	global.Client.Services.ClientSiteManagerService = $Client_Services_ClientSiteManagerService;
	////////////////////////////////////////////////////////////////////////////////
	// Client.Services.CreatedUI
	var $Client_Services_CreatedUI$1 = function(T) {
		var $type = function(scope, element) {
			this.scope = null;
			this.element = null;
			this.scope = scope;
			this.element = element;
		};
		ss.registerGenericClassInstance($type, $Client_Services_CreatedUI$1, [T], {
			destroy: function() {
				if (!ss.staticEquals(this.scope.onDestroy, null)) {
					this.scope.onDestroy();
				}
				this.scope.$destroy();
				this.element.remove();
			}
		}, function() {
			return null;
		}, function() {
			return [];
		});
		return $type;
	};
	$Client_Services_CreatedUI$1.__typeName = 'Client.Services.CreatedUI$1';
	ss.initGenericClass($Client_Services_CreatedUI$1, 1);
	global.Client.Services.CreatedUI$1 = $Client_Services_CreatedUI$1;
	////////////////////////////////////////////////////////////////////////////////
	// Client.Services.CreateUIService
	var $Client_Services_CreateUIService = function(compileService, rootScopeService) {
		this.$myCompileService = null;
		this.$myRootScopeService = null;
		this.$singltons = {};
		this.$myCompileService = compileService;
		this.$myRootScopeService = rootScopeService;
	};
	$Client_Services_CreateUIService.__typeName = 'Client.Services.CreateUIService';
	global.Client.Services.CreateUIService = $Client_Services_CreateUIService;
	////////////////////////////////////////////////////////////////////////////////
	// Client.Services.GameContentManagerService
	var $Client_Services_GameContentManagerService = function() {
		this.redraw = null;
	};
	$Client_Services_GameContentManagerService.__typeName = 'Client.Services.GameContentManagerService';
	global.Client.Services.GameContentManagerService = $Client_Services_GameContentManagerService;
	////////////////////////////////////////////////////////////////////////////////
	// Client.Services.GatewayService
	var $Client_Services_GatewayService = function(serverUrl) {
		this.$1$GatewayField = null;
		this.set_gateway(new ClientLibs.Gateway(serverUrl, false));
	};
	$Client_Services_GatewayService.__typeName = 'Client.Services.GatewayService';
	global.Client.Services.GatewayService = $Client_Services_GatewayService;
	////////////////////////////////////////////////////////////////////////////////
	// Client.Services.ManagedScope
	var $Client_Services_ManagedScope = function() {
		this.onDestroy = null;
		Client.Scope.BaseScope.call(this);
	};
	$Client_Services_ManagedScope.__typeName = 'Client.Services.ManagedScope';
	global.Client.Services.ManagedScope = $Client_Services_ManagedScope;
	////////////////////////////////////////////////////////////////////////////////
	// Client.Services.MessageService
	var $Client_Services_MessageService = function(createUIService, rootScopeService) {
		this.$myCreateUIService = null;
		this.$myRootScopeService = null;
		this.$myCreateUIService = createUIService;
		this.$myRootScopeService = rootScopeService;
	};
	$Client_Services_MessageService.__typeName = 'Client.Services.MessageService';
	global.Client.Services.MessageService = $Client_Services_MessageService;
	////////////////////////////////////////////////////////////////////////////////
	// Client.Services.UIManagerService
	var $Client_Services_UIManagerService = function() {
		this.clientInfo = null;
		this.onMinimize = null;
		this.clientInfo = Models.ClientInformation.$ctor();
	};
	$Client_Services_UIManagerService.__typeName = 'Client.Services.UIManagerService';
	global.Client.Services.UIManagerService = $Client_Services_UIManagerService;
	////////////////////////////////////////////////////////////////////////////////
	// Client.Services.UserEventCacher
	var $Client_Services_UserEventCacher$1 = function(T) {
		var $type = function() {
			this.$registeredEvents = [];
			this.$cachedTriggers = [];
		};
		$type.op_Addition = function(me, ev) {
			me.add_$event(ev);
			return me;
		};
		ss.registerGenericClassInstance($type, $Client_Services_UserEventCacher$1, [T], {
			add_$event: function(value) {
				ss.add(this.$registeredEvents, value);
				if (this.$cachedTriggers.length > 0) {
					for (var $t1 = 0; $t1 < this.$cachedTriggers.length; $t1++) {
						var cachedTrigger = this.$cachedTriggers[$t1];
						var trigger = { $: cachedTrigger };
						window.setTimeout(ss.mkdel({ trigger: trigger, $this: this }, function() {
							this.$this.trigger(this.trigger.$.item1, this.trigger.$.item2);
						}), 1);
					}
					ss.clear(this.$cachedTriggers);
				}
			},
			remove_$event: function(value) {
				ss.remove(this.$registeredEvents, value);
			},
			trigger: function(user, model) {
				if (this.$registeredEvents.length === 0) {
					ss.add(this.$cachedTriggers, { item1: user, item2: model });
					return;
				}
				for (var $t1 = 0; $t1 < this.$registeredEvents.length; $t1++) {
					var registeredEvent = this.$registeredEvents[$t1];
					registeredEvent(user, model);
				}
			}
		}, function() {
			return null;
		}, function() {
			return [];
		});
		return $type;
	};
	$Client_Services_UserEventCacher$1.__typeName = 'Client.Services.UserEventCacher$1';
	ss.initGenericClass($Client_Services_UserEventCacher$1, 1);
	global.Client.Services.UserEventCacher$1 = $Client_Services_UserEventCacher$1;
	ss.initClass($DebugSpace, {});
	ss.initClass($DebugSpaceCard, {});
	ss.initClass($Client_BuildAngular, {});
	ss.initClass($Client_BuildSite, {
		$ready: function() {
			var elem = document.getElementById('loading');
			elem.parentNode.removeChild(elem);
			var stats = new xStats();
			document.body.appendChild(stats.element);
			window.setTimeout(function() {
				$('.xstats').css('right', '0px');
				$('.xstats').css('position', 'absolute');
				$('.xstats').css('z-index', '9998!important');
				$('.xstats').children().css('z-index', '9998!important');
			}, 1000);
			window.addEventListener('scroll', function(e) {
				window.scrollTo(0, 0);
				e.stopImmediatePropagation();
			});
			document.body.style['overflow'] = 'hidden';
			document.body.addEventListener('contextmenu', function(e1) {
				//  e.PreventDefault();
				//todo: Special right click menu;
			}, false);
			$Client_BuildAngular.setup(this.$gatewayServerAddress);
			angular.bootstrap(window.document, ['acg']);
			//
			//
			//
			//
			//
			//        var chatArea = shuffUIManager.createWindow({
			//
			//
			//
			//
			//
			//        title: "Chat",
			//
			//
			//
			//
			//
			//        x: 600,
			//
			//
			//
			//
			//
			//        y: 100,
			//
			//
			//
			//
			//
			//        width: 300,
			//
			//
			//
			//
			//
			//        height: 275,
			//
			//
			//
			//
			//
			//        allowClose: true,
			//
			//
			//
			//
			//
			//        allowMinimize: true,
			//
			//
			//
			//
			//
			//        visible: false
			//
			//
			//
			//
			//
			//        
			//
			//
			//
			//
			//
			//        });
		}
	});
	ss.initClass($Client_ClientHelpers, {});
	ss.initClass($Client_Controllers_$ActiveLobbyController, {
		$getChatLines: function(user, o) {
			ss.arrayAddRange(this.$myScope.model.chatLines, o.messages);
			this.$myScope.$apply();
		},
		$getChatInfo: function(user, o) {
			this.$populateChatRoom(o.info);
		},
		$getRoomInfo: function(user, o) {
			this.$populateGameRoom(o.room);
		},
		$populateChatRoom: function(roomDataData) {
			this.$myScope.model.users = roomDataData.users;
			if (ss.isValue(roomDataData.messages)) {
				ss.arrayAddRange(this.$myScope.model.chatLines, roomDataData.messages);
			}
			this.$myScope.$apply();
		},
		$populateGameRoom: function(roomModel) {
		}
	});
	ss.initClass($Client_Controllers_$AngularController, {});
	ss.initClass($Client_Controllers_$CreateRoomController, {
		$createRoomFn: function() {
			this.$myScope.swingAway(2, false, null);
			this.$myScope.model.onCreateRoom(this.$myScope.model.roomName);
		}
	});
	ss.initClass($Client_Controllers_$DebugGameCodeController, {
		$makeMarker: function() {
			var marker = document.createElement('div');
			marker.innerHTML = 'o';
			marker.className = 'breakpoint';
			return marker;
		},
		$save: function() {
			this.$updateGameFn();
		},
		$onDeveloperUpdateGameReceivedFn: function(user, o) {
			this.$scope.model.updateStatus = 'synced';
			this.$scope.$apply();
		},
		$updateGameFn: function() {
			this.$scope.model.updateStatus = 'syncing';
			this.$myClientManagerService.clientSiteManagerService.developerUpdateGame(this.$scope.model.game);
		}
	});
	ss.initClass($Client_Controllers_$DebugQuestionController, {
		$answerQuestionFn: function() {
			this.$myScope.swingAway(4, false, ss.mkdel(this, function() {
				this.$myClientDebugManagerService.answerQuestion({ answer: ss.indexOf(this.$myScope.model.answers, this.$myScope.model.selectedAnswer) });
				this.$myScope.destroyWindow();
			}));
		}
	});
	ss.initClass($Client_Controllers_$GameCodeController, {
		$save: function() {
			this.$updateGameFn();
		},
		$onDeveloperUpdateGameReceivedFn: function(user, o) {
			this.$myScope.model.updateStatus = 'synced';
			this.$myScope.$apply();
		},
		$updateGameFn: function() {
			this.$myScope.model.updateStatus = 'syncing';
			this.$myClientManagerService.clientSiteManagerService.developerUpdateGame(this.$myScope.model.game);
		}
	});
	ss.initClass($Client_Controllers_$GameEditorController, {
		$openTestFn: function() {
			this.$myCreateUIService.createSingleton$2($Client_Scope_Controller_GameTestEditorScope).call(this.$myCreateUIService, $Client_Controllers_$GameTestEditorController.$view, ss.mkdel(this, function(scope, elem) {
				scope.model = $Client_Scope_Controller_GameTestEditorScopeModel.$ctor();
				scope.model.game = this.$myScope.model.game;
				scope.model.selection = this.$myScope.model.selection;
			}));
		},
		$openLayoutFn: function() {
			this.$myCreateUIService.createSingleton$2($Client_Scope_Controller_GameLayoutEditorScope).call(this.$myCreateUIService, $Client_Controllers_$GameLayoutEditorController.$view, ss.mkdel(this, function(scope, elem) {
				scope.model = $Client_Scope_Controller_GameLayoutEditorScopeModel.$ctor();
				scope.model.game = this.$myScope.model.game;
				scope.model.selection = this.$myScope.model.selection;
			}));
		},
		$openEffectsFn: function() {
			this.$myCreateUIService.createSingleton$2($Client_Scope_Controller_GameEffectsEditorScope).call(this.$myCreateUIService, $Client_Controllers_$GameEffectsEditorController.$view, ss.mkdel(this, function(scope, elem) {
				scope.model = $Client_Scope_Controller_GameEffectsEditorScopeModel.$ctor();
				scope.model.game = this.$myScope.model.game;
				scope.model.selection = this.$myScope.model.selection;
			}));
		},
		$openCodeFn: function() {
			this.$myCreateUIService.createSingleton$2($Client_Scope_Controller_GameCodeScope).call(this.$myCreateUIService, $Client_Controllers_$GameCodeController.$view, ss.mkdel(this, function(scope, elem) {
				scope.model = $Client_Scope_Controller_GameCodeScopeModel.$ctor();
				scope.model.game = this.$myScope.model.game;
				scope.model.selection = this.$myScope.model.selection;
			}));
		},
		$onDeveloperUpdateGameReceivedFn: function(user, o) {
			this.$myScope.model.updateStatus = 'synced';
			this.$myScope.$apply();
		},
		$updateGameFn: function() {
			this.$myScope.model.updateStatus = 'syncing';
			this.$myClientSiteManagerService.developerUpdateGame(this.$myScope.model.game);
		}
	});
	ss.initClass($Client_Controllers_$GameEffectsEditorController, {
		$addEffectFn: function() {
			var effect;
			ss.add(this.$myScope.model.game.effects, effect = $Client_Controllers_$GameEffectsEditorController.$makeEffect(this.$myScope.model.newEffectName, this.$myScope.model.newEffectType));
			this.$myScope.model.newEffectType = 'bend';
			this.$myScope.model.newEffectName = '';
			this.$myScope.model.selection.selectedEffect = effect;
			$Client_Controllers_$GameLayoutEditorController.$sureUpScenarios(this.$myScope.model.game);
		},
		$removeEffectFn: function(effect) {
			ss.remove(this.$myScope.model.game.effects, effect);
			this.$myScope.model.selection.selectedEffect = null;
			$Client_Controllers_$GameLayoutEditorController.$sureUpScenarios(this.$myScope.model.game);
		}
	});
	ss.initClass($Client_Controllers_$GameLayoutEditorController, {
		$toggleCardsFn: function() {
			this.$myScope.model.selection.showCards = !this.$myScope.model.selection.showCards;
		},
		$toggleGridFn: function() {
			this.$myScope.model.selection.showGrid = !this.$myScope.model.selection.showGrid;
		},
		$openScenariosFn: function() {
			this.$scenario = this.$myCreateUIService.createSingleton$2($Client_Scope_Controller_GameScenarioEditorScope).call(this.$myCreateUIService, $Client_Controllers_$GameScenarioEditorController.$view, ss.mkdel(this, function(_scope, elem) {
				_scope.model = $Client_Scope_Controller_GameScenarioEditorScopeModel.$ctor();
				_scope.model.game = this.$myScope.model.game;
				_scope.model.selection = this.$myScope.model.selection;
			}));
		},
		$removeSpaceFn: function(arg) {
			ss.remove(this.$myScope.model.game.gameLayout.spaces, arg);
			this.$myScope.model.selection.selectedSpace = null;
			this.$myScope.model.selection.selectedLayoutPiece = 'none';
			$Client_Controllers_$GameLayoutEditorController.$sureUpScenarios(this.$myScope.model.game);
		},
		$removeAreaFn: function(arg) {
			ss.remove(this.$myScope.model.game.gameLayout.areas, arg);
			this.$myScope.model.selection.selectedArea = null;
			this.$myScope.model.selection.selectedLayoutPiece = 'none';
			$Client_Controllers_$GameLayoutEditorController.$sureUpScenarios(this.$myScope.model.game);
		},
		$removeTextFn: function(arg) {
			ss.remove(this.$myScope.model.game.gameLayout.texts, arg);
			this.$myScope.model.selection.selectedText = null;
			this.$myScope.model.selection.selectedLayoutPiece = 'none';
			$Client_Controllers_$GameLayoutEditorController.$sureUpScenarios(this.$myScope.model.game);
		},
		$addSpaceFn: function() {
			var spaces = this.$myScope.model.game.gameLayout.spaces;
			var $t1 = Models.SiteManagerModels.Game.GameSpaceModel.$ctor();
			$t1.name = 'Space' + (spaces.length + 1);
			$t1.layoutType = 'grow';
			$t1.guid = ss.Guid.newGuid().toString();
			$t1.left = 0;
			$t1.top = 0;
			$t1.height = 1;
			$t1.width = 1;
			ss.add(spaces, $t1);
			$Client_Controllers_$GameLayoutEditorController.$sureUpScenarios(this.$myScope.model.game);
		},
		$addAreaFn: function() {
			var areas = this.$myScope.model.game.gameLayout.areas;
			var $t1 = Models.SiteManagerModels.Game.GameAreaModel.$ctor();
			$t1.guid = ss.Guid.newGuid().toString();
			$t1.name = 'Area' + (areas.length + 1);
			$t1.left = 0;
			$t1.top = 0;
			$t1.width = 1;
			$t1.height = 1;
			ss.add(areas, $t1);
			$Client_Controllers_$GameLayoutEditorController.$sureUpScenarios(this.$myScope.model.game);
		},
		$addTextFn: function() {
			var texts = this.$myScope.model.game.gameLayout.texts;
			var $t1 = Models.SiteManagerModels.Game.GameTextModel.$ctor();
			$t1.guid = ss.Guid.newGuid().toString();
			$t1.name = 'Text' + (texts.length + 1);
			$t1.left = 0;
			$t1.top = 0;
			ss.add(texts, $t1);
			$Client_Controllers_$GameLayoutEditorController.$sureUpScenarios(this.$myScope.model.game);
		},
		$onDeveloperUpdateGameReceivedFn: function(user, o) {
			this.$myScope.model.updateStatus = 'synced';
			this.$myScope.$apply();
		},
		$updateGameFn: function() {
			this.$myScope.model.updateStatus = 'syncing';
			this.$myClientSiteManagerService.developerUpdateGame(this.$myScope.model.game);
		}
	});
	ss.initClass($Client_Controllers_$GameManagerController, {
		$deleteGameFn: function() {
			ss.remove(this.$myScope.model.games, this.$myScope.model.selectedGame);
			this.$myScope.model.selectedGame.deleted = true;
			this.$myClientSiteManagerService.developerUpdateGame(this.$myScope.model.selectedGame);
		},
		$onDoesGameNameExistReceivedFn: function(user, o) {
		},
		$onDeveloperCreateGameReceivedFn: function(user, o) {
		},
		$createGameFn: function() {
			this.$myMessageService.popupQuestion('Youre creating a game!', 'Game Name:', ss.mkdel(this, function(name) {
				this.$myClientSiteManagerService.developerCreateGame(name);
				this.$myClientSiteManagerService.getGamesByUser(this.$myUIManager.clientInfo.loggedInUser.hash);
			}));
		},
		$onOnGetGamesByUserReceivedFn: function(user, response) {
			this.$myScope.model.games = response.games;
			this.$myScope.$apply();
		}
	});
	ss.initClass($Client_Controllers_$GameScenarioEditorController, {
		$deleteScenarioFn: function() {
			ss.remove(this.$myScope.model.game.gameLayoutScenarios, this.$myScope.model.selection.selectedScenario);
			this.$myScope.model.selection.selectedScenario = this.$myScope.model.game.gameLayoutScenarios.filter(function(a) {
				return a.name === 'Default';
			})[0];
		},
		$removeTextFromEffectFn: function(guid) {
			ss.remove(this.$myScope.model.selection.selectedScenarioEffect.textGuids, guid);
		},
		$removeCardFromEffectFn: function(guid) {
			ss.remove(this.$myScope.model.selection.selectedScenarioEffect.cardGuids, guid);
		},
		$removeAreaFromEffectFn: function(guid) {
			ss.remove(this.$myScope.model.selection.selectedScenarioEffect.areaGuids, guid);
		},
		$removeSpaceFromEffectFn: function(guid) {
			ss.remove(this.$myScope.model.selection.selectedScenarioEffect.spaceGuids, guid);
		},
		$getCardByCardGuidFn: function(guid) {
			for (var $t1 = 0; $t1 < this.$myScope.model.selection.selectedScenario.spaces.length; $t1++) {
				var scenarioSpace = this.$myScope.model.selection.selectedScenario.spaces[$t1];
				for (var $t2 = 0; $t2 < scenarioSpace.cards.length; $t2++) {
					var gameLayoutScenarioCard = scenarioSpace.cards[$t2];
					if (ss.referenceEquals(gameLayoutScenarioCard.cardGuid, guid)) {
						return gameLayoutScenarioCard;
					}
				}
			}
			return null;
		},
		$getTextByTextGuidFn: function(guid) {
			for (var $t1 = 0; $t1 < this.$myScope.model.game.gameLayout.texts.length; $t1++) {
				var gameTextModel = this.$myScope.model.game.gameLayout.texts[$t1];
				if (ss.referenceEquals(gameTextModel.guid, guid)) {
					return gameTextModel;
				}
			}
			return null;
		},
		$getAreaByAreaGuidFn: function(guid) {
			for (var $t1 = 0; $t1 < this.$myScope.model.game.gameLayout.areas.length; $t1++) {
				var gameAreaModel = this.$myScope.model.game.gameLayout.areas[$t1];
				if (ss.referenceEquals(gameAreaModel.guid, guid)) {
					return gameAreaModel;
				}
			}
			return null;
		},
		$applyEffectToCurrentlySelectedFn: function() {
			var selection = this.$myScope.model.selection;
			if (ss.isValue(selection.selectedArea)) {
				ss.add(this.$myScope.model.selection.selectedScenarioEffect.areaGuids, selection.selectedArea.guid);
				return;
			}
			if (ss.isValue(selection.selectedText)) {
				ss.add(this.$myScope.model.selection.selectedScenarioEffect.textGuids, selection.selectedText.guid);
				return;
			}
			if (ss.isValue(selection.selectedCard)) {
				ss.add(this.$myScope.model.selection.selectedScenarioEffect.cardGuids, selection.selectedCard.cardGuid);
				return;
			}
			if (ss.isValue(selection.selectedSpace)) {
				ss.add(this.$myScope.model.selection.selectedScenarioEffect.spaceGuids, selection.selectedSpace.guid);
				return;
			}
		},
		$getCurrentlySelectedFn: function() {
			var selection = this.$myScope.model.selection;
			if (ss.isValue(selection.selectedArea)) {
				return 'Area: ' + selection.selectedArea.name;
			}
			if (ss.isValue(selection.selectedText)) {
				return 'Text: ' + selection.selectedText.name;
			}
			if (ss.isValue(selection.selectedCard)) {
				return 'Card: ' + selection.selectedCard.value + ' of ' + selection.selectedCard.type;
			}
			if (ss.isValue(selection.selectedSpace)) {
				return 'Space: ' + selection.selectedSpace.name;
			}
			return 'Nothing Selected';
		},
		$getEffectByScenarioEffectFn: function(effect) {
			for (var $t1 = 0; $t1 < this.$myScope.model.game.effects.length; $t1++) {
				var gameEffectModel = this.$myScope.model.game.effects[$t1];
				if (ss.referenceEquals(gameEffectModel.guid, effect.effectGuid)) {
					return gameEffectModel;
				}
			}
			return null;
		},
		$addNewScenarioFn: function() {
			var $t2 = this.$myScope.model.game.gameLayoutScenarios;
			var $t1 = Models.SiteManagerModels.Game.GameLayoutScenario.$ctor();
			$t1.spaces = [];
			$t1.effects = [];
			$t1.name = 'Scenario' + this.$myScope.model.game.gameLayoutScenarios.length;
			$t1.numberOfPlayers = 6;
			$t1.screenSize = new CommonLibraries.IntPoint(1024, 768);
			ss.add($t2, $t1);
			$Client_Controllers_$GameLayoutEditorController.$sureUpScenarios(this.$myScope.model.game);
		},
		$cloneNewScenarioFn: function() {
			var $t5 = this.$myScope.model.game.gameLayoutScenarios;
			var $t1 = Models.SiteManagerModels.Game.GameLayoutScenario.$ctor();
			$t1.spaces = this.$myScope.model.selection.selectedScenario.spaces.map(function(e) {
				var $t2 = Models.SiteManagerModels.Game.GameLayoutScenarioSpace.$ctor();
				$t2.spaceGuid = e.spaceGuid;
				$t2.cards = e.cards.map(function(c) {
					var $t3 = Models.SiteManagerModels.Game.GameLayoutScenarioCard.$ctor();
					$t3.cardGuid = ss.Guid.newGuid().toString();
					$t3.state = c.state;
					$t3.value = c.value;
					$t3.type = c.type;
					return $t3;
				});
				return $t2;
			});
			$t1.effects = this.$myScope.model.selection.selectedScenario.effects.map(function(e1) {
				var $t4 = Models.SiteManagerModels.Game.GameLayoutScenarioEffect.$ctor();
				$t4.effectGuid = e1.effectGuid;
				$t4.areaGuids = e1.areaGuids;
				$t4.textGuids = e1.textGuids;
				$t4.cardGuids = e1.cardGuids;
				$t4.spaceGuids = e1.spaceGuids;
				return $t4;
			});
			$t1.name = 'Clone Of ' + this.$myScope.model.selection.selectedScenario.name;
			$t1.numberOfPlayers = this.$myScope.model.selection.selectedScenario.numberOfPlayers;
			$t1.screenSize = this.$myScope.model.selection.selectedScenario.screenSize;
			ss.add($t5, $t1);
		},
		$removeCardFromSpaceFn: function(arg) {
			ss.remove(this.$myScope.model.selection.selectedScenarioSpace.cards, arg);
		},
		$addCardToSpaceFn: function() {
			var $t2 = this.$myScope.model.selection.selectedScenarioSpace.cards;
			var $t1 = Models.SiteManagerModels.Game.GameLayoutScenarioCard.$ctor();
			$t1.cardGuid = ss.Guid.newGuid().toString();
			$t1.state = 'faceUp';
			$t1.type = 3;
			$t1.value = 11;
			ss.add($t2, $t1);
		},
		$getSpaceBySpaceGuidFn: function(guid) {
			for (var $t1 = 0; $t1 < this.$myScope.model.game.gameLayout.spaces.length; $t1++) {
				var gameSpaceModel = this.$myScope.model.game.gameLayout.spaces[$t1];
				if (ss.referenceEquals(gameSpaceModel.guid, guid)) {
					return gameSpaceModel;
				}
			}
			return null;
		},
		$onDeveloperUpdateGameReceivedFn: function(user, o) {
			this.$myScope.model.updateStatus = 'synced';
			this.$myScope.$apply();
		},
		$updateGameFn: function() {
			this.$myScope.model.updateStatus = 'syncing';
			this.$myClientSiteManagerService.developerUpdateGame(this.$myScope.model.game);
		}
	});
	ss.initClass($Client_Controllers_$GameTestEditorController, {
		$destroyGameFn: function() {
			this.$clientDebugManagerService.destroyGame({ roomID: this.$scope.model.room.roomID });
			this.$scope.model.gameRunning = false;
			if (ss.isValue(this.$scope.model.codeEditor)) {
				this.$scope.model.codeEditor.scope.model.room = null;
			}
			this.$scope.model.gameView.destroy();
		},
		$startGameFn: function() {
			this.$scope.model.gameRunning = true;
			this.$scope.model.gameView = this.$myCreateUIService.createSingleton($Client_Controllers_DebugGameController.view);
			this.$clientDebugManagerService.createGame({ numberOfPlayers: 4, gameName: this.$scope.model.game.name, breakpoints: (ss.isNullOrUndefined(this.$scope.model.codeEditor) ? [] : this.$scope.model.codeEditor.scope.model.breakpoints) });
		},
		$clientDebugManagerService_OnGetDebugLog: function(user, o) {
			ss.add(this.$scope.model.log, o.value);
			this.$scope.$apply();
		},
		$onDeveloperUpdateGameReceivedFn: function(user, o) {
			this.$scope.model.updateStatus = 'synced';
			this.$scope.$apply();
		},
		$updateGameFn: function() {
			this.$scope.model.updateStatus = 'syncing';
			this.$myClientSiteManagerService.developerUpdateGame(this.$scope.model.game);
		}
	});
	ss.initClass($Client_Controllers_$HomeController, {
		$createGameFn: function() {
			this.$myCreateUIService.create($Client_Controllers_$GameManagerController.$view);
			this.$myScope.minimize();
		},
		$joinRoomFn: function() {
			this.$myClientSiteManagerService.joinRoom({ gameType: this.$myScope.model.selectedGameType.name, roomName: this.$myScope.model.selectedRoom.roomName });
		},
		$createRoomFn: function() {
			var action = null;
			var singleton = null;
			action = ss.mkdel(this, function(roomName) {
				this.$myClientSiteManagerService.createRoom({ gameType: this.$myScope.model.selectedGameType.name, roomName: roomName });
				singleton.destroy();
			});
			singleton = this.$myCreateUIService.createSingleton$2($Client_Scope_Controller_CreateRoomScope).call(this.$myCreateUIService, $Client_Controllers_$CreateRoomController.$view, function(scope, elem) {
				scope.model = $Client_Scope_Controller_CreateRoomModel.$ctor();
				scope.model.onCreateRoom = action;
			});
		},
		$roomSelectedFn: function() {
			if (ss.isNullOrUndefined(this.$myScope.model.selectedGameType) || ss.isNullOrUndefined(this.$myScope.model.selectedRoom)) {
				return;
			}
			this.$myClientSiteManagerService.getRoomInfo({ gameType: this.$myScope.model.selectedGameType.name, roomName: this.$myScope.model.selectedRoom.roomName });
		},
		$gameTypeSelectedFn: function() {
			if (ss.isNullOrUndefined(this.$myScope.model.selectedGameType)) {
				return;
			}
			this.$myClientSiteManagerService.getRooms({ gameType: this.$myScope.model.selectedGameType.name });
			this.$myScope.model.selectedRoom = null;
		},
		$getRoomInfoReceived: function(user, o) {
			for (var i = 0; i < this.$myScope.model.rooms.length; i++) {
				if (ss.referenceEquals(this.$myScope.model.rooms[i].id, o.room.id)) {
					ss.removeAt(this.$myScope.model.rooms, i);
					ss.insert(this.$myScope.model.rooms, i, o.room);
					break;
				}
			}
			this.$populateRoom(o.room);
		},
		$roomJoined: function(user, o) {
			this.$populateRoom(o.room);
			this.$myScope.swingAway(0, false, ss.mkdel(this, function() {
				this.$myScope.destroyWindow();
			}));
			this.$myCreateUIService.createSingleton$2($Client_Scope_Controller_ActiveLobbyScope).call(this.$myCreateUIService, $Client_Controllers_$ActiveLobbyController.$view, function(scope, elem) {
				scope.model = $Client_Scope_Controller_ActiveLobbyModel.$ctor();
				scope.model.room = o.room;
			});
		},
		$populateGames: function(user, o) {
			this.$myScope.model.gameTypes = o.gameTypes;
			this.$myScope.model.selectedGameType = this.$myScope.model.gameTypes[0];
			this.$myScope.$apply();
			this.$myClientSiteManagerService.getRooms({ gameType: o.gameTypes[0].name });
		},
		$populateRooms: function(user, o) {
			this.$myScope.model.rooms = o.rooms;
			this.$myScope.model.selectedRoom = null;
			this.$myScope.$apply();
			if (this.$myScope.model.rooms.length === 0) {
				return;
			}
			this.$populateRoom(this.$myScope.model.rooms[0]);
		},
		$populateRoom: function(roomModel) {
			this.$myScope.model.selectedRoom = roomModel;
			this.$myScope.$apply();
		}
	});
	ss.initClass($Client_Controllers_$LoginController, {
		$onLoginFn: function(user, data) {
			if (data.successful) {
				this.$myUIManager.clientInfo.loggedInUser = user;
				this.$myCreateUIService.createSingleton($Client_Controllers_$HomeController.$view);
				this.$myScope.swingAway(7, false, null);
			}
			else {
				this.$myMessageService.popupOkay('Bad!', 'You no login!', function() {
				});
			}
		},
		$onUserCreateFn: function(user, o) {
			if (o.successful) {
				this.$myUIManager.clientInfo.loggedInUser = user;
				this.$myCreateUIService.createSingleton($Client_Controllers_$HomeController.$view);
				this.$myScope.swingAway(7, false, null);
			}
			else {
				this.$myMessageService.popupOkay('Bad!', 'You no create! It exist! What up!!?', function() {
				});
			}
		},
		$createAccountFn: function() {
			this.$myclientSiteManagerService.createUser(this.$myScope.model.username, this.$myScope.model.password);
		},
		$loginAccountFn: function() {
			this.$myclientSiteManagerService.login(this.$myScope.model.username, this.$myScope.model.password);
		}
	});
	ss.initClass($Client_Controllers_$MessageController, {});
	ss.initClass($Client_Controllers_$MinimizeController, {
		$removeFn: function(arg) {
			arg.close();
			ss.remove(this.$myScope.items, arg);
		},
		$openFn: function(arg) {
			arg.restore();
			ss.remove(this.$myScope.items, arg);
		}
	}, $Client_Controllers_$AngularController);
	ss.initClass($Client_Controllers_$QuestionController, {
		$answerQuestionFn: function() {
			this.$myScope.swingAway(4, false, ss.mkdel(this, function() {
				this.$myClientGameManagerService.answerQuestion({ answer: ss.indexOf(this.$myScope.model.answers, this.$myScope.model.selectedAnswer) });
				this.$myScope.destroyWindow();
			}));
		}
	});
	ss.initClass($Client_Controllers_DebugGameController, {});
	ss.initClass($Client_Controllers_EffectTesterController, {});
	ss.initClass($Client_Controllers_GameController, {});
	ss.initClass($Client_Controllers_TestGameController, {
		$getCardsFromScenarioFn: function(arg) {
			var scenario = this.$scope.model.selection.selectedScenario;
			return scenario.spaces.filter(function(s) {
				return ss.referenceEquals(s.spaceGuid, arg.guid);
			})[0].cards;
		}
	});
	ss.initClass($Client_Directives_AcgDebugDrawCardDirective, {
		$linkFn: function(scope, element, attrs) {
			var card = scope.card.gameCard;
			scope.classes = [];
			element.attr('style', 'width:71px; height:96px;');
			var beforeStyle = {};
			var lastStyle = {};
			element.draggable({ start: ss.mkdel(this, function(event, uiEvent) {
				scope.card.dragging = true;
				scope.cardStyle.zIndex = 1000;
				this.$rootScope.$broadcast('redrawCard');
				scope.$apply();
			}), drag: ss.mkdel(this, function(event1, uiEvent1) {
				scope.card.location.x = event1.clientX;
				scope.card.location.y = event1.clientY;
				var updated = false;
				for (var $t1 = 0; $t1 < scope.gameModel.spaces.length; $t1++) {
					var debugSpace = scope.gameModel.spaces[$t1];
					for (var index = debugSpace.cards.length - 1; index >= 0; index--) {
						if (debugSpace.cards[index].placeHolder) {
							updated = true;
							ss.removeAt(debugSpace.cards, index);
						}
					}
				}
				for (var $t2 = 0; $t2 < scope.gameModel.spaces.length; $t2++) {
					var debugSpace1 = scope.gameModel.spaces[$t2];
					if (global.Rectangle.contains(global.Rectangle.expand(debugSpace1.location, 30), scope.card.location)) {
						for (var $t3 = 0; $t3 < debugSpace1.cards.length; $t3++) {
							var debugSpaceCard = debugSpace1.cards[$t3];
							var rectangle = global.Rectangle.offset(debugSpaceCard.location, debugSpace1.location.x, debugSpace1.location.y);
							console.log(ss.formatString('{0},{1}   {2} {3}', debugSpace1.location.x, debugSpace1.location.y, debugSpaceCard, global.Rectangle.toString(global.Rectangle.expand(rectangle, 10)), global.Rectangle.toString(scope.card.location)));
							if (global.Rectangle.contains(global.Rectangle.expand(rectangle, 10), scope.card.location)) {
								var $t5 = debugSpace1.cards;
								var $t6 = ss.indexOf(debugSpace1.cards, debugSpaceCard);
								var $t4 = new $DebugSpaceCard();
								$t4.placeHolder = true;
								$t4.gameCard = null;
								ss.insert($t5, $t6, $t4);
								//
								//                                             if (rectangle.X + rectangle.Width/2 < scope.Card.Location.X)
								//
								//                                             {
								//
								//                                             debugSpace.Cards.Insert(debugSpace.Cards.IndexOf(debugSpaceCard), new DebugSpaceCard() { PlaceHolder = true, GameCard = null });
								//
								//                                             }
								//
								//                                             else
								//
								//                                             {
								//
								//                                             debugSpace.Cards.Insert(debugSpace.Cards.IndexOf(debugSpaceCard)+1, new DebugSpaceCard() { PlaceHolder = true, GameCard = null });
								//
								//                                             }
								console.log('Took');
								updated = true;
								break;
							}
						}
					}
				}
				if (updated) {
					this.$rootScope.$broadcast('redrawCard');
					scope.$apply();
				}
			}), stop: ss.mkdel(this, function(event2, uiEvent2) {
				for (var $t7 = 0; $t7 < scope.gameModel.spaces.length; $t7++) {
					var debugSpace2 = scope.gameModel.spaces[$t7];
					for (var index1 = debugSpace2.cards.length - 1; index1 >= 0; index1--) {
						if (debugSpace2.cards[index1].placeHolder) {
							ss.removeAt(debugSpace2.cards, index1);
							ss.remove(scope.space.cards, scope.card);
							for (var $t8 = 0; $t8 < scope.space.cards.length; $t8++) {
								var debugSpaceCard1 = scope.space.cards[$t8];
								if (debugSpaceCard1.index > scope.card.index) {
									debugSpaceCard1.index--;
								}
							}
							scope.card.index = index1;
							for (var $t9 = 0; $t9 < debugSpace2.cards.length; $t9++) {
								var debugSpaceCard2 = debugSpace2.cards[$t9];
								if (debugSpaceCard2.index >= scope.card.index) {
									debugSpaceCard2.index++;
								}
							}
							ss.insert(debugSpace2.cards, index1, scope.card);
							break;
						}
					}
				}
				delete scope.cardStyle.zIndex;
				scope.card.dragging = false;
				this.$rootScope.$broadcast('redrawCard');
				scope.$apply();
			}) });
			var redrawCard = function() {
				console.log(ss.formatString('card{0}-{1} being called ', card.type, card.value));
				if (scope.card.dragging) {
					return;
				}
				scope.cardStyle = {};
				card = scope.card.gameCard;
				var scale = scope.gameModel.scale;
				var goodCards = CommonLibraries.EnumerableExtensions.where($DebugSpaceCard).call(null, scope.space.cards, function(a) {
					return !a.dragging;
				});
				var spaceCardLength = goodCards.length - 1;
				var debugSpace3 = scope.space.gameSpace;
				var spaceScale = { width: debugSpace3.width / spaceCardLength, height: debugSpace3.height / spaceCardLength };
				var vertical = debugSpace3.vertical;
				var cardIndex = ss.indexOf(goodCards, scope.card);
				var xx = 0;
				var yy = 0;
				switch (debugSpace3.resizeType) {
					case 'static': {
						if (vertical) {
							yy = (card.value + 1) / 13 * debugSpace3.height * scale.y;
						}
						else {
							xx = (card.value + 1) / 13 * debugSpace3.width * scale.x;
						}
						break;
					}
					case 'grow': {
						xx = (!vertical ? (cardIndex * spaceScale.width * scale.x) : 0);
						yy = (vertical ? (cardIndex * spaceScale.height * scale.y) : 0);
						break;
					}
					default: {
						xx = (!vertical ? (cardIndex * spaceScale.width * scale.x) : 0);
						yy = (vertical ? (cardIndex * spaceScale.height * scale.y) : 0);
						break;
					}
				}
				xx -= 35;
				yy -= 48;
				scope.cardStyle.position = 'absolute';
				scope.cardStyle.zIndex = cardIndex;
				scope.cardStyle.borderRadius = CommonLibraries.ExtensionMethods.toPx$1(5);
				xx = xx + (vertical ? (debugSpace3.width * scale.x / 2) : 0);
				element.css('left', CommonLibraries.ExtensionMethods.toPx(xx));
				yy = yy + (!vertical ? (debugSpace3.height * scale.y / 2) : 0);
				element.css('top', CommonLibraries.ExtensionMethods.toPx(yy));
				scope.card.location = { x: xx, y: yy, width: 71, height: 96 };
				//                scope.CardStyle["-webkit-transform"] = "rotate(" + scope.Parent.Space.Appearance.InnerStyle.Rotate + "deg)";
				//                element.me().rotate(scope.Parent.Space.Appearance.InnerStyle.Rotate);
				scope.cardStyle.content = '""';
				if (ss.isNullOrUndefined(card)) {
					scope.cardStyle.border = 'solid 2px blue';
					scope.cardStyle.width = '71px';
					scope.cardStyle.height = '96px';
				}
				else {
					beforeStyle = {};
					if (card.value === -1 && card.type === -1) {
						beforeStyle['content'] = ss.formatString("url('{1}assets/cards/{0}.gif')", 155, CommonLibraries.Constants.contentAddress);
					}
					else {
						beforeStyle['content'] = ss.formatString("url('{1}assets/cards/{0}.gif')", 100 + (card.value + 1) + card.type * 13, CommonLibraries.Constants.contentAddress);
					}
					for (var $t10 = 0; $t10 < card.effects.length; $t10++) {
						var effectName = card.effects[$t10];
						var effect = global.ClientGameCardGameHelper.clientGetEffectByName(scope.gameModel.mainArea, effectName);
						switch (effect.type) {
							case 'highlight': {
								{
									var color = global.EffectHelper.getString(effect, 'color');
									var radius = global.EffectHelper.getNumber(effect, 'radius');
									var rotate = global.EffectHelper.getNumber(effect, 'rotate');
									var offsetX = global.EffectHelper.getNumber(effect, 'offsetx');
									var offsetY = global.EffectHelper.getNumber(effect, 'offsety');
									var opacity = global.EffectHelper.getNumber(effect, 'opacity');
									beforeStyle['display'] = 'block';
									beforeStyle['position'] = 'relative';
									beforeStyle['z-index'] = '-1';
									beforeStyle['width'] = '100%';
									beforeStyle['height'] = '100%';
									beforeStyle['left'] = -radius + offsetX + 'px';
									beforeStyle['top'] = -radius + offsetY + 'px';
									beforeStyle['padding'] = radius + 'px';
									beforeStyle['border-radius'] = '5px';
									beforeStyle['box-shadow'] = 'rgb(44, 44, 44) 3px 3px 2px';
									beforeStyle['content'] = ss.formatString("url('{1}assets/cards/{0}.gif')", 100 + (card.value + 1) + card.type * 13, CommonLibraries.Constants.contentAddress);
									var hexcolor = $Client_ClientHelpers.hexToRGB(color);
									beforeStyle['background-color'] = ss.formatString('rgba({0}, {1}, {2}, {3})', hexcolor.R, hexcolor.G, hexcolor.B, opacity);
									beforeStyle['border'] = '2px solid black';
								}
								break;
							}
							case 'rotate': {
								{
									var rotate1 = global.EffectHelper.getNumber(effect, 'degrees');
									scope.cardStyle['-webkit-transform'] = 'rotate(' + rotate1 + 'deg)';
									scope.cardStyle.transform = 'rotate(' + rotate1 + 'deg)';
								}
								break;
							}
							case 'bend': {
								//
								//
								//
								//                              var bEffect = (new CardGameAppearanceEffectBend(new CardGameEffectBendOptions()
								//
								//
								//
								//                              {
								//
								//
								//
								//                              Degrees = grabbedEffect.GetPropertyByName<double>("degrees"),
								//
								//
								//
								//                              }));
								//
								//
								//
								//                              
								//
								//
								//
								//                              
								//
								//
								//
								//                              var rotate = element.GetCSS("transform").Replace(" scale(1, 1)", "");
								//
								//
								//
								//                              
								//
								//
								//
								//                              element.me().rotate((((-bEffect.Degrees / 2 + bEffect.Degrees / (scope.Space.Pile.Cards.Count - 1) * cardIndex) + NoTransformRotate(rotate))));
								break;
							}
							case 'styleProperty': {
								break;
							}
							case 'animated': {
								break;
							}
						}
					}
					if (!CommonLibraries.ExtensionMethods.sameAs(String, String).call(null, lastStyle, beforeStyle)) {
						console.log(ss.formatString('card{0}-{1} being updated ', card.type, card.value));
						$Client_ClientHelpers.purgeCSS(ss.formatString('card{0}-{1}', card.type, card.value) + '::before');
						$Client_ClientHelpers.changeCSS(ss.formatString('card{0}-{1}::before', card.type, card.value), beforeStyle);
					}
					lastStyle = beforeStyle;
				}
				//
				//                                foreach (var effect in scope.Card.Appearance.EffectNames)
				//
				//                                {
				//
				//                                GameEffectModel grabbedEffect = myEffectManager.GetEffectByName(effect);
				//
				//                                if (grabbedEffect == null)
				//
				//                                {
				//
				//                                continue;
				//
				//                                }
				//
				//                                switch (grabbedEffect.Type)
				//
				//                                {
				//
				//                                case EffectType.Highlight:
				//
				//                                
				//
				//                                var _effect = new CardGameAppearanceEffectHighlight(new CardGameEffectHighlightOptions()
				//
				//                                {
				//
				//                                Color = grabbedEffect.GetPropertyByName<string>("color"),
				//
				//                                Radius = grabbedEffect.GetPropertyByName<double>("radius"),
				//
				//                                Rotate = grabbedEffect.GetPropertyByName<double>("rotate"),
				//
				//                                OffsetX = grabbedEffect.GetPropertyByName<double>("offsetx"),
				//
				//                                OffsetY = grabbedEffect.GetPropertyByName<double>("offsety"),
				//
				//                                Opacity = grabbedEffect.GetPropertyByName<double>("opacity"),
				//
				//                                });
				//
				//                                
				//
				//                                JsDictionary<string, string> beforeStyle = new JsDictionary<string, string>();
				//
				//                                beforeStyle["display"] = "block";
				//
				//                                beforeStyle["position"] = "relative";
				//
				//                                beforeStyle["z-index"] = "-1";
				//
				//                                beforeStyle["width"] = "100%";
				//
				//                                beforeStyle["height"] = "100%";
				//
				//                                beforeStyle["left"] = (-_effect.Radius + _effect.OffsetX) + "px";
				//
				//                                beforeStyle["top"] = (-_effect.Radius + _effect.OffsetY) + "px";
				//
				//                                beforeStyle["padding"] = (_effect.Radius) + "px";
				//
				//                                beforeStyle["border-radius"] = "5px";
				//
				//                                beforeStyle["box-shadow"] = "rgb(44, 44, 44) 3px 3px 2px";
				//
				//                                var color = hextorgb(_effect.Color);
				//
				//                                
				//
				//                                beforeStyle["background-color"] = string.Format("rgba({0}, {1}, {2}, {3})", color.R, color.G, color.B, _effect.Opacity);
				//
				//                                beforeStyle["border"] = "2px solid black";
				//
				//                                
				//
				//                                ChangeCSS("card" + scope.Card.Type + "-" + scope.Card.Value + "::before", beforeStyle);
				//
				//                                
				//
				//                                
				//
				//                                
				//
				//                                
				//
				//                                break;
				//
				//                                case EffectType.Rotate:
				//
				//                                break;
				//
				//                                case EffectType.Bend:
				//
				//                                
				//
				//                                
				//
				//                                
				//
				//                                
				//
				//                                var bEffect = (new CardGameAppearanceEffectBend(new CardGameEffectBendOptions()
				//
				//                                {
				//
				//                                Degrees = grabbedEffect.GetPropertyByName<double>("degrees"),
				//
				//                                }));
				//
				//                                
				//
				//                                
				//
				//                                var rotate = element.GetCSS("transform").Replace(" scale(1, 1)", "");
				//
				//                                
				//
				//                                element.me().rotate((((-bEffect.Degrees / 2 + bEffect.Degrees / (scope.Space.Pile.Cards.Count - 1) * cardIndex) + NoTransformRotate(rotate))) );
				//
				//                                
				//
				//                                break;
				//
				//                                case EffectType.StyleProperty:
				//
				//                                break;
				//
				//                                case EffectType.Animated:
				//
				//                                break;
				//
				//                                }
				//
				//                                }
			};
			if (ss.isValue(card)) {
				if (card.value === -1 && card.type === -1) {
					beforeStyle['content'] = ss.formatString("url('{1}assets/cards/{0}.gif')", 155, CommonLibraries.Constants.contentAddress);
				}
				else {
					beforeStyle['content'] = ss.formatString("url('{1}assets/cards/{0}.gif')", 100 + (card.value + 1) + card.type * 13, CommonLibraries.Constants.contentAddress);
				}
				ss.add(scope.classes, ss.formatString('card{0}-{1}', card.type, card.value));
				$Client_ClientHelpers.changeCSS('card' + card.type + '-' + card.value + '::before', beforeStyle);
			}
			scope.$on('redrawCard', redrawCard);
			//   redrawCard();
			//
			//                          
			// 
			//            scope.Watch("$parent.space", () =>
			//
			//                          
			// 
			//            {
			//
			//                          
			// 
			//            Console.Log("ac");
			//
			//                          
			// 
			//            redrawCard();
			//
			//                          
			// 
			//            }, true);
			//
			//                          
			// 
			//            scope.Watch("card.appearance.effectNames.join()", () =>
			//
			//                          
			// 
			//            {
			//
			//                          
			// 
			//            Console.Log("b");
			//
			//                          
			// 
			//            redrawCard();
			//
			//                          
			// 
			//            }, true);
			//scope.Watch<CardScope>((_scope) =>
			//{
			//
			//List<Effect> effects = new List<Effect>();
			//
			//foreach (var ef in _scope.Card.Appearance.EffectNames)
			//{
			//var _ef = myEffectManager.GetEffectByName(ef);
			//effects.Add(_ef);
			//}
			//return effects;
			//}, () => {
			//Console.Log("c");
			//redrawCard();
			//}, true);
			redrawCard();
		}
	});
	ss.initClass($Client_Directives_AcgDebugDrawSpaceDirective, {
		$linkFn: function(scope, element, attrs) {
			var scale = scope.gameModel.scale;
			var debugSpace = scope.space.gameSpace;
			element.attr('class', 'space ' + ss.formatString('space{0}', debugSpace.name));
			var cardLookups = {};
			console.log('Smash');
			scope.space.cards = debugSpace.pile.cards.map(function(card, index, cards) {
				var $t3 = cardLookups[card.guid];
				if (ss.isNullOrUndefined($t3)) {
					var $t2 = card.guid;
					var $t1 = new $DebugSpaceCard();
					$t1.gameCard = card;
					$t1.placeHolder = false;
					$t1.index = index;
					$t3 = cardLookups[$t2] = $t1;
				}
				return $t3;
			});
			var process = function() {
				debugSpace = scope.space.gameSpace;
				console.log('space process ' + debugSpace.name);
				scope.spaceStyle = {};
				scope.spaceStyle.position = 'absolute';
				scope.spaceStyle.left = debugSpace.x * scale.x;
				scope.spaceStyle.top = debugSpace.y * scale.y;
				scope.spaceStyle.width = debugSpace.width * scale.x;
				scope.spaceStyle.height = debugSpace.height * scale.y;
				scope.spaceStyle.backgroundColor = 'red';
				scope.spaceStyle = {};
				var left = debugSpace.x;
				var top = debugSpace.y;
				var w = debugSpace.width;
				var h = debugSpace.height;
				var scaleLeft = scale.x;
				var scaleTop = scale.y;
				scope.spaceStyle.position = 'absolute';
				scope.spaceStyle.left = left * scaleLeft;
				scope.spaceStyle.top = top * scaleTop;
				scope.spaceStyle.boxShadow = 'rgb(51, 51, 51) 4px 4px 2px';
				scope.spaceStyle.borderRadius = '15px';
				scope.spaceStyle.width = w * scaleLeft;
				scope.spaceStyle.height = h * scaleTop;
				scope.spaceStyle.backgroundColor = 'red';
				scope.space.location = { x: left * scaleLeft, y: top * scaleTop, width: w * scaleLeft, height: h * scaleTop };
				$Client_ClientHelpers.purgeCSS('space' + debugSpace.name + '::before');
				var beforeStyle = {};
				for (var $t4 = 0; $t4 < debugSpace.effects.length; $t4++) {
					var effectName = debugSpace.effects[$t4];
					var effect = global.ClientGameCardGameHelper.clientGetEffectByName(scope.gameModel.mainArea, effectName);
					switch (effect.type) {
						case 'highlight': {
							var color = global.EffectHelper.getString(effect, 'color');
							var radius = global.EffectHelper.getNumber(effect, 'radius');
							var rotate = global.EffectHelper.getNumber(effect, 'rotate');
							var offsetX = global.EffectHelper.getNumber(effect, 'offsetx');
							var offsetY = global.EffectHelper.getNumber(effect, 'offsety');
							var opacity = global.EffectHelper.getNumber(effect, 'opacity');
							beforeStyle['display'] = 'block';
							beforeStyle['position'] = 'relative';
							beforeStyle['z-index'] = '-1';
							beforeStyle['width'] = '100%';
							beforeStyle['height'] = '100%';
							beforeStyle['left'] = -radius + offsetX + 'px';
							beforeStyle['top'] = -radius + offsetY + 'px';
							beforeStyle['padding'] = radius + 'px';
							beforeStyle['border-radius'] = '5px';
							beforeStyle['box-shadow'] = 'rgb(44, 44, 44) 3px 3px 2px';
							var hexcolor = $Client_ClientHelpers.hexToRGB(color);
							beforeStyle['content'] = '""';
							beforeStyle['background-color'] = ss.formatString('rgba({0}, {1}, {2}, {3})', hexcolor.R, hexcolor.G, hexcolor.B, opacity);
							beforeStyle['border'] = '2px solid black';
							break;
						}
						case 'rotate': {
							break;
						}
						case 'bend': {
							break;
						}
						case 'styleProperty': {
							break;
						}
						case 'animated': {
							break;
						}
					}
				}
				$Client_ClientHelpers.changeCSS('space' + debugSpace.name + '::before', beforeStyle);
				scope.$broadcast('redrawCard');
			};
			scope.$on('spaceUpdated', function() {
				debugSpace = scope.space.gameSpace;
				scope.space.cards = debugSpace.pile.cards.map(function(card1, index1, cards1) {
					var $t7 = cardLookups[card1.guid];
					if (ss.isNullOrUndefined($t7)) {
						var $t6 = card1.guid;
						var $t5 = new $DebugSpaceCard();
						$t5.gameCard = card1;
						$t5.placeHolder = false;
						$t5.index = index1;
						$t7 = cardLookups[$t6] = $t5;
					}
					var lookup = $t7;
					lookup.gameCard.effects = card1.effects;
					return lookup;
				});
				process();
			});
			scope.$watch('space', process);
		}
	});
	ss.initClass($Client_Directives_AcgDrawCardDirective, {
		$linkFn: function(scope, element, attrs) {
			element.attr('style', 'width:71px; height:96px;');
			element.attr('class', 'card ' + ss.formatString('card{0}-{1}', scope.card.type, scope.card.value));
			element.draggable({
				drag: function(event, uiEvent) {
				}
			});
			var redrawCard = function() {
				var scale = scope.$parent.$parent['$parent'].scale;
				var spaceScale = { width: scope.space.width / (scope.space.pile.cards.length - 1), height: scope.space.height / (scope.space.pile.cards.length - 1) };
				var vertical = scope.space.vertical;
				var cardIndex = ss.indexOf(scope.space.pile.cards, scope.card);
				scope.cardStyle = {};
				var xx = 0;
				var yy = 0;
				switch (scope.space.resizeType) {
					case 'static': {
						if (vertical) {
							yy = (scope.card.value + 1) / 13 * scope.space.height * scale.y;
						}
						else {
							xx = (scope.card.value + 1) / 13 * scope.space.width * scale.x;
						}
						break;
					}
					case 'grow': {
						xx = (!vertical ? (cardIndex * spaceScale.width * scale.x) : 0);
						yy = (vertical ? (cardIndex * spaceScale.height * scale.y) : 0);
						break;
					}
					default: {
						xx = (!vertical ? (cardIndex * spaceScale.width * scale.x) : 0);
						yy = (vertical ? (cardIndex * spaceScale.height * scale.y) : 0);
						break;
					}
				}
				xx -= 35;
				yy -= 48;
				scope.cardStyle.position = 'absolute';
				scope.cardStyle.zIndex = cardIndex;
				scope.cardStyle.borderRadius = '5px';
				scope.cardStyle.left = xx + (vertical ? (scope.space.width * scale.x / 2) : 0);
				scope.cardStyle.top = yy + (!vertical ? (scope.space.height * scale.y / 2) : 0);
				//                scope.CardStyle["-webkit-transform"] = "rotate(" + scope.Parent.Space.Appearance.InnerStyle.Rotate + "deg)";
				//                element.me().rotate(scope.Parent.Space.Appearance.InnerStyle.Rotate);
				scope.cardStyle.content = '""';
				//
				//                                                    foreach (var effect in scope.Card.Appearance.EffectNames)
				//
				//                                                    {
				//
				//                                                    GameEffectModel grabbedEffect = myEffectManager.GetEffectByName(effect);
				//
				//                                                    if (grabbedEffect == null)
				//
				//                                                    {
				//
				//                                                    continue;
				//
				//                                                    }
				//
				//                                                    switch (grabbedEffect.Type)
				//
				//                                                    {
				//
				//                                                    case EffectType.Highlight:
				//
				//                                                    
				//
				//                                                    var _effect = new CardGameAppearanceEffectHighlight(new CardGameEffectHighlightOptions()
				//
				//                                                    {
				//
				//                                                    Color = grabbedEffect.GetPropertyByName<string>("color"),
				//
				//                                                    Radius = grabbedEffect.GetPropertyByName<double>("radius"),
				//
				//                                                    Rotate = grabbedEffect.GetPropertyByName<double>("rotate"),
				//
				//                                                    OffsetX = grabbedEffect.GetPropertyByName<double>("offsetx"),
				//
				//                                                    OffsetY = grabbedEffect.GetPropertyByName<double>("offsety"),
				//
				//                                                    Opacity = grabbedEffect.GetPropertyByName<double>("opacity"),
				//
				//                                                    });
				//
				//                                                    
				//
				//                                                    JsDictionary<string, string> beforeStyle = new JsDictionary<string, string>();
				//
				//                                                    beforeStyle["display"] = "block";
				//
				//                                                    beforeStyle["position"] = "relative";
				//
				//                                                    beforeStyle["z-index"] = "-1";
				//
				//                                                    beforeStyle["width"] = "100%";
				//
				//                                                    beforeStyle["height"] = "100%";
				//
				//                                                    beforeStyle["left"] = (-_effect.Radius + _effect.OffsetX) + "px";
				//
				//                                                    beforeStyle["top"] = (-_effect.Radius + _effect.OffsetY) + "px";
				//
				//                                                    beforeStyle["padding"] = (_effect.Radius) + "px";
				//
				//                                                    beforeStyle["border-radius"] = "5px";
				//
				//                                                    beforeStyle["box-shadow"] = "rgb(44, 44, 44) 3px 3px 2px";
				//
				//                                                    var color = hextorgb(_effect.Color);
				//
				//                                                    
				//
				//                                                    beforeStyle["background-color"] = string.Format("rgba({0}, {1}, {2}, {3})", color.R, color.G, color.B, _effect.Opacity);
				//
				//                                                    beforeStyle["border"] = "2px solid black";
				//
				//                                                    
				//
				//                                                    ChangeCSS("card" + scope.Card.Type + "-" + scope.Card.Value + "::before", beforeStyle);
				//
				//                                                    
				//
				//                                                    
				//
				//                                                    
				//
				//                                                    
				//
				//                                                    break;
				//
				//                                                    case EffectType.Rotate:
				//
				//                                                    break;
				//
				//                                                    case EffectType.Bend:
				//
				//                                                    
				//
				//                                                    
				//
				//                                                    
				//
				//                                                    
				//
				//                                                    var bEffect = (new CardGameAppearanceEffectBend(new CardGameEffectBendOptions()
				//
				//                                                    {
				//
				//                                                    Degrees = grabbedEffect.GetPropertyByName<double>("degrees"),
				//
				//                                                    }));
				//
				//                                                    
				//
				//                                                    
				//
				//                                                    var rotate = element.GetCSS("transform").Replace(" scale(1, 1)", "");
				//
				//                                                    
				//
				//                                                    element.me().rotate((((-bEffect.Degrees / 2 + bEffect.Degrees / (scope.Space.Pile.Cards.Count - 1) * cardIndex) + NoTransformRotate(rotate))) );
				//
				//                                                    
				//
				//                                                    break;
				//
				//                                                    case EffectType.StyleProperty:
				//
				//                                                    break;
				//
				//                                                    case EffectType.Animated:
				//
				//                                                    break;
				//
				//                                                    }
				//
				//                                                    }
			};
			var keys = {};
			if (scope.card.value === -1 && scope.card.type === -1) {
				keys['content'] = ss.formatString("url('{1}assets/cards/{0}.gif')", 155, CommonLibraries.Constants.contentAddress);
			}
			else {
				keys['content'] = ss.formatString("url('{1}assets/cards/{0}.gif')", 100 + (scope.card.value + 1) + scope.card.type * 13, CommonLibraries.Constants.contentAddress);
			}
			$Client_ClientHelpers.changeCSS('card' + scope.card.type + '-' + scope.card.value + '::before', keys);
			scope.$on('redrawCard', redrawCard);
			//   redrawCard();
			//
			//                          
			// 
			//            scope.Watch("$parent.space", () =>
			//
			//                          
			// 
			//            {
			//
			//                          
			// 
			//            Console.Log("ac");
			//
			//                          
			// 
			//            redrawCard();
			//
			//                          
			// 
			//            }, true);
			//
			//                          
			// 
			//            scope.Watch("card.appearance.effectNames.join()", () =>
			//
			//                          
			// 
			//            {
			//
			//                          
			// 
			//            Console.Log("b");
			//
			//                          
			// 
			//            redrawCard();
			//
			//                          
			// 
			//            }, true);
			//scope.Watch<CardScope>((_scope) =>
			//{
			//
			//List<Effect> effects = new List<Effect>();
			//
			//foreach (var ef in _scope.Card.Appearance.EffectNames)
			//{
			//var _ef = myEffectManager.GetEffectByName(ef);
			//effects.Add(_ef);
			//}
			//return effects;
			//}, () => {
			//Console.Log("c");
			//redrawCard();
			//}, true);
			redrawCard();
		}
	});
	ss.initClass($Client_Directives_AcgDrawSpaceDirective, {
		$linkFn: function(scope, element, attrs) {
			var scale = scope.$parent['$parent'].scale;
			element.attr('class', 'space ' + ss.formatString('space{0}', scope.space.name));
			//  element.Resizable(new ResizableOptions()
			//  {
			//  Grid = new[] { scale.X, scale.Y },
			//  MinHeight = -1,
			//  MinWidth = -1,
			//  Handles = "n, e, s, w,nw,sw,ne,se",
			//  OnResize = (ev, ele) =>
			//  {
			//  scope.Space.Width = ele.Size.Width / scale.X;
			//  scope.Space.Height = ele.Size.Height / scale.Y;
			//  scope.Apply();
			//  
			//  }
			//  });
			//  element.Draggable(new DraggableOptions()
			//  {
			//  Cursor = "crosshair",
			//  Grid = new[] { scale.X, scale.Y },
			//  OnDrag = (ev, ele) =>
			//  {
			//  scope.Space.X = ele.Position.Left / scale.X;
			//  scope.Space.Y = ele.Position.Top/ scale.Y;
			//  scope.Apply();
			//  
			//  }
			//  });
			scope.$watch('space', function() {
				var beforeStyle = {};
				beforeStyle['display'] = 'block';
				beforeStyle['position'] = 'relative';
				beforeStyle['z-index'] = '-1';
				beforeStyle['width'] = '100%';
				beforeStyle['height'] = '100%';
				beforeStyle['left'] = '-50px';
				beforeStyle['top'] = '-50px';
				beforeStyle['padding'] = '50px';
				beforeStyle['border-radius'] = '15px';
				beforeStyle['box-shadow'] = 'rgb(51, 51, 51) 4px 4px 2px';
				beforeStyle['content'] = '""';
				beforeStyle['background'] = 'rgba(112, 12, 58, 0.231373)';
				$Client_ClientHelpers.changeCSS('space' + scope.space.name + '::before', beforeStyle);
				scope.spaceStyle = {};
				scope.spaceStyle.position = 'absolute';
				scope.spaceStyle.left = scope.space.x * scale.x;
				scope.spaceStyle.top = scope.space.y * scale.y;
				scope.spaceStyle.width = scope.space.width * scale.x;
				scope.spaceStyle.height = scope.space.height * scale.y;
				scope.spaceStyle.backgroundColor = 'red';
				//
				//                                     foreach (var effect in scope.Space.Appearance.Effects)
				//
				//                                     {
				//
				//                                     switch (effect.Type)
				//
				//                                     {
				//
				//                                     case EffectType.Highlight:
				//
				//                                     var hEffect = ((CardGameAppearanceEffectHighlight) effect);
				//
				//                                     scope.SpaceStyle.padding = string.Format("{0} {0} {0} {0}",
				//
				//                                     hEffect.Radius);
				//
				//                                     scope.SpaceStyle.backgroundColor = hEffect.Color;
				//
				//                                     scope.SpaceStyle.border = "solid 2px black";
				//
				//                                     scope.SpaceStyle.borderRadius = 15.0;
				//
				//                                     scope.SpaceStyle.boxShadow = "4px 4px 2px #333";
				//
				//                                     break;
				//
				//                                     case EffectType.Rotate:
				//
				//                                     Window.Alert(effect.Type.ToString());
				//
				//                                     break;
				//
				//                                     case EffectType.Bend:
				//
				//                                     var bEffect = (CardGameAppearanceEffectBend) effect;
				//
				//                                     
				//
				//                                     //rotate
				//
				//                                     
				//
				//                                     
				//
				//                                     break;
				//
				//                                     case EffectType.StyleProperty:
				//
				//                                     Window.Alert(effect.Type.ToString());
				//
				//                                     break;
				//
				//                                     case EffectType.Animated:
				//
				//                                     Window.Alert(effect.Type.ToString());
				//
				//                                     break;
				//
				//                                     default:
				//
				//                                     
				//
				//                                     break;
				//
				//                                     }
				//
				//                                     }
				scope.$broadcast('redrawCard');
			}, true);
		}
	});
	ss.initClass($Client_Directives_AcgEffectTestDrawAreaDirective, {
		$linkFn: function(scope, element, attrs) {
			var area = null;
			area = scope.model.areaTest.area;
			element.attr('class', 'area ' + ss.formatString('area{0}', area.name));
			var scale = scope.model.scale;
			var reApplyAreaBind = function() {
				//   JsDictionary<string, string> beforeStyle = new JsDictionary<string, string>();
				//   if (false)
				//   {
				//   beforeStyle["display"] = "block";
				//   beforeStyle["position"] = "relative";
				//   beforeStyle["z-index"] = "-1";
				//   beforeStyle["width"] = "100%";
				//   beforeStyle["height"] = "100%";
				//   beforeStyle["left"] = "-50px";
				//   beforeStyle["top"] = "-50px";
				//   beforeStyle["padding"] = "50px";
				//   beforeStyle["border-radius"] = "15px";
				//   beforeStyle["box-shadow"] = "rgb(51, 51, 51) 4px 4px 2px";
				//   beforeStyle["content"] = "\"\"";
				//   beforeStyle["background"] = "rgba(112, 12, 58, 0.231373)";
				//   }
				//   ChangeCSS("area" + area.Name + "::before", beforeStyle);
				scope.areaStyle = {};
				var l = area.left;
				var t = area.top;
				var w = area.width;
				var h = area.height;
				var sl = scale.x;
				var st = scale.y;
				scope.areaStyle.position = 'absolute';
				scope.areaStyle.left = l * sl;
				scope.areaStyle.top = t * st;
				scope.areaStyle.boxShadow = 'rgb(51, 51, 51) 4px 4px 2px';
				scope.areaStyle.borderRadius = '15px';
				scope.areaStyle.width = w * sl;
				scope.areaStyle.height = h * st;
				scope.areaStyle.backgroundColor = 'blue';
			};
			scope.$watch('model.selection.selectedEffect', function() {
				$Client_ClientHelpers.purgeCSS('area' + area.name + '::before');
				var effect = scope.model.selection.selectedEffect;
				if (ss.isNullOrUndefined(effect)) {
					return;
				}
				switch (effect.type) {
					case 'highlight': {
						var color = Models.SiteManagerModels.Game.EffectHelper.getString(effect, 'color');
						var radius = Models.SiteManagerModels.Game.EffectHelper.getNumber(effect, 'radius');
						var rotate = Models.SiteManagerModels.Game.EffectHelper.getNumber(effect, 'rotate');
						var offsetX = Models.SiteManagerModels.Game.EffectHelper.getNumber(effect, 'offsetx');
						var offsetY = Models.SiteManagerModels.Game.EffectHelper.getNumber(effect, 'offsety');
						var opacity = Models.SiteManagerModels.Game.EffectHelper.getNumber(effect, 'opacity');
						var beforeStyle = {};
						beforeStyle['display'] = 'block';
						beforeStyle['position'] = 'relative';
						beforeStyle['z-index'] = '-1';
						beforeStyle['width'] = '100%';
						beforeStyle['height'] = '100%';
						beforeStyle['left'] = -radius + offsetX + 'px';
						beforeStyle['top'] = -radius + offsetY + 'px';
						beforeStyle['padding'] = radius + 'px';
						beforeStyle['border-radius'] = '5px';
						beforeStyle['box-shadow'] = 'rgb(44, 44, 44) 3px 3px 2px';
						var hexcolor = $Client_ClientHelpers.hexToRGB(color);
						beforeStyle['content'] = '""';
						beforeStyle['background-color'] = ss.formatString('rgba({0}, {1}, {2}, {3})', hexcolor.R, hexcolor.G, hexcolor.B, opacity);
						beforeStyle['border'] = '2px solid black';
						$Client_ClientHelpers.changeCSS('area' + area.name + '::before', beforeStyle);
						break;
					}
					case 'rotate': {
						break;
					}
					case 'bend': {
						break;
					}
					case 'styleProperty': {
						break;
					}
					case 'animated': {
						break;
					}
				}
			}, true);
			scope.$watch('area', reApplyAreaBind, true);
		}
	});
	ss.initClass($Client_Directives_AcgEffectTestDrawCardDirective, {
		$linkFn: function(scope, element, attrs) {
			element.attr('style', 'width:71px; height:96px;');
			element.attr('class', 'card ' + ss.formatString('card{0}-{1}', scope.card.type, scope.card.value));
			var test = scope.test;
			var space = null;
			switch (test) {
				case 'card': {
					space = scope.model.cardTest.space;
					break;
				}
				case 'space': {
					space = scope.model.spaceTest.space;
					break;
				}
			}
			var redrawCard = function() {
				var scale;
				var cardIndex;
				var spaceScale;
				if (test === 'card') {
					scale = scope.model.scale;
					var cardCount = 1;
					spaceScale = new CommonLibraries.Point(space.width, space.height);
					cardIndex = cardCount;
				}
				else {
					scale = scope.model.scale;
					var cards = scope.model.spaceTest.cards;
					spaceScale = new CommonLibraries.Point(space.width / (cards.length - 1), space.height / (cards.length - 1));
					cardIndex = ss.indexOf(cards, scope.card);
				}
				var vertical = space.vertical;
				scope.cardStyle = {};
				var xx = 0;
				var yy = 0;
				switch (space.layoutType) {
					case 'static': {
						if (vertical) {
							yy = (scope.card.value + 1) / 13 * space.height * scale.y;
						}
						else {
							xx = (scope.card.value + 1) / 13 * space.width * scale.x;
						}
						break;
					}
					case 'grow': {
						xx = (!vertical ? (cardIndex * spaceScale.x * scale.x) : 0);
						yy = (vertical ? (cardIndex * spaceScale.y * scale.y) : 0);
						break;
					}
					default: {
						xx = (!vertical ? (cardIndex * spaceScale.x * scale.x) : 0);
						yy = (vertical ? (cardIndex * spaceScale.y * scale.y) : 0);
						break;
					}
				}
				xx -= 35;
				yy -= 48;
				scope.cardStyle.position = 'absolute';
				scope.cardStyle.zIndex = cardIndex;
				scope.cardStyle.borderRadius = '5px';
				scope.cardStyle.left = xx + (vertical ? (space.width * scale.x / 2) : 0);
				scope.cardStyle.top = yy + (!vertical ? (space.height * scale.y / 2) : 0);
				if (test === 'card') {
					scope.cardStyle.left += space.left * scale.x;
					scope.cardStyle.top += space.top * scale.y;
				}
				//                scope.CardStyle["-webkit-transform"] = "rotate(" + scope.Parent.Space.Appearance.InnerStyle.Rotate + "deg)";
				//                element.me().rotate(space.Appearance.InnerStyle.Rotate);
				scope.cardStyle.content = '""';
			};
			var keys;
			scope.$watch('model.selection.selectedEffect', function() {
				if (test !== 'card') {
					return;
				}
				$Client_ClientHelpers.purgeCSS(ss.formatString('card{0}-{1}::before', scope.card.type, scope.card.value));
				keys = {};
				if (scope.card.value === -1 && scope.card.type === -1) {
					keys['content'] = ss.formatString("url('{1}assets/cards/{0}.gif')", 155, CommonLibraries.Constants.contentAddress);
				}
				else {
					keys['content'] = ss.formatString("url('{1}assets/cards/{0}.gif')", 100 + (scope.card.value + 1) + scope.card.type * 13, CommonLibraries.Constants.contentAddress);
				}
				$Client_ClientHelpers.changeCSS('card' + scope.card.type + '-' + scope.card.value + '::before', keys);
				var effect = scope.model.selection.selectedEffect;
				if (ss.isNullOrUndefined(effect)) {
					return;
				}
				switch (effect.type) {
					case 'highlight': {
						var color = Models.SiteManagerModels.Game.EffectHelper.getString(effect, 'color');
						var radius = Models.SiteManagerModels.Game.EffectHelper.getNumber(effect, 'radius');
						var rotate = Models.SiteManagerModels.Game.EffectHelper.getNumber(effect, 'rotate');
						var offsetX = Models.SiteManagerModels.Game.EffectHelper.getNumber(effect, 'offsetx');
						var offsetY = Models.SiteManagerModels.Game.EffectHelper.getNumber(effect, 'offsety');
						var opacity = Models.SiteManagerModels.Game.EffectHelper.getNumber(effect, 'opacity');
						var beforeStyle = {};
						beforeStyle['display'] = 'block';
						beforeStyle['position'] = 'relative';
						beforeStyle['z-index'] = '-1';
						beforeStyle['width'] = '100%';
						beforeStyle['height'] = '100%';
						beforeStyle['left'] = -radius + offsetX + 'px';
						beforeStyle['top'] = -radius + offsetY + 'px';
						beforeStyle['padding'] = radius + 'px';
						beforeStyle['border-radius'] = '5px';
						beforeStyle['box-shadow'] = 'rgb(44, 44, 44) 3px 3px 2px';
						var hexcolor = $Client_ClientHelpers.hexToRGB(color);
						beforeStyle['background-color'] = ss.formatString('rgba({0}, {1}, {2}, {3})', hexcolor.R, hexcolor.G, hexcolor.B, opacity);
						beforeStyle['border'] = '2px solid black';
						$Client_ClientHelpers.changeCSS('card' + scope.card.type + '-' + scope.card.value + '::before', beforeStyle);
						break;
					}
					case 'rotate': {
						break;
					}
					case 'bend': {
						//
						//
						//                                                                                          var bEffect = (new CardGameAppearanceEffectBend(new CardGameEffectBendOptions()
						//
						//
						//                                                                                          {
						//
						//
						//                                                                                          Degrees = grabbedEffect.GetPropertyByName<double>("degrees"),
						//
						//
						//                                                                                          }));
						//
						//
						//                                                                                          
						//
						//
						//                                                                                          
						//
						//
						//                                                                                          var rotate = element.GetCSS("transform").Replace(" scale(1, 1)", "");
						//
						//
						//                                                                                          
						//
						//
						//                                                                                          element.me().rotate((((-bEffect.Degrees / 2 + bEffect.Degrees / (space.Pile.Cards.Count - 1) * cardIndex) + NoTransformRotate(rotate))));
						break;
					}
					case 'styleProperty': {
						break;
					}
					case 'animated': {
						break;
					}
				}
			}, true);
			keys = {};
			if (scope.card.value === -1 && scope.card.type === -1) {
				keys['content'] = ss.formatString("url('{1}assets/cards/{0}.gif')", 155, CommonLibraries.Constants.contentAddress);
			}
			else {
				keys['content'] = ss.formatString("url('{1}assets/cards/{0}.gif')", 100 + (scope.card.value + 1) + scope.card.type * 13, CommonLibraries.Constants.contentAddress);
			}
			$Client_ClientHelpers.changeCSS('card' + scope.card.type + '-' + scope.card.value + '::before', keys);
			scope.$watch('space', redrawCard, true);
			scope.$watch('model.selection.selectedScenario', redrawCard, true);
			//            scope.On("redrawCard", redrawCard);
			//   redrawCard();
			//
			//                          
			// 
			//            scope.Watch("$parent.space", () =>
			//
			//                          
			// 
			//            {
			//
			//                          
			// 
			//            Console.Log("ac");
			//
			//                          
			// 
			//            redrawCard();
			//
			//                          
			// 
			//            }, true);
			//
			//                          
			// 
			//            scope.Watch("card.appearance.effectNames.join()", () =>
			//
			//                          
			// 
			//            {
			//
			//                          
			// 
			//            Console.Log("b");
			//
			//                          
			// 
			//            redrawCard();
			//
			//                          
			// 
			//            }, true);
			//scope.Watch<CardScope>((_scope) =>
			//{
			//
			//List<Effect> effects = new List<Effect>();
			//
			//foreach (var ef in _scope.Card.Appearance.EffectNames)
			//{
			//var _ef = myEffectManager.GetEffectByName(ef);
			//effects.Add(_ef);
			//}
			//return effects;
			//}, () => {
			//Console.Log("c");
			//redrawCard();
			//}, true);
			redrawCard();
		}
	});
	ss.initClass($Client_Directives_AcgEffectTestDrawSpaceDirective, {
		$linkFn: function(scope, element, attrs) {
			var space = null;
			space = scope.model.spaceTest.space;
			element.attr('class', 'space ' + ss.formatString('space{0}', space.name));
			var scale = scope.model.scale;
			var reApplySpaceBind = function() {
				//   JsDictionary<string, string> beforeStyle = new JsDictionary<string, string>();
				//   if (false)
				//   {
				//   beforeStyle["display"] = "block";
				//   beforeStyle["position"] = "relative";
				//   beforeStyle["z-index"] = "-1";
				//   beforeStyle["width"] = "100%";
				//   beforeStyle["height"] = "100%";
				//   beforeStyle["left"] = "-50px";
				//   beforeStyle["top"] = "-50px";
				//   beforeStyle["padding"] = "50px";
				//   beforeStyle["border-radius"] = "15px";
				//   beforeStyle["box-shadow"] = "rgb(51, 51, 51) 4px 4px 2px";
				//   beforeStyle["content"] = "\"\"";
				//   beforeStyle["background"] = "rgba(112, 12, 58, 0.231373)";
				//   }
				//   ChangeCSS("space" + space.Name + "::before", beforeStyle);
				scope.spaceStyle = {};
				var l = space.left;
				var t = space.top;
				var w = space.width;
				var h = space.height;
				var sl = scale.x;
				var st = scale.y;
				scope.spaceStyle.position = 'absolute';
				scope.spaceStyle.left = l * sl;
				scope.spaceStyle.top = t * st;
				scope.spaceStyle.boxShadow = 'rgb(51, 51, 51) 4px 4px 2px';
				scope.spaceStyle.borderRadius = '15px';
				scope.spaceStyle.width = w * sl;
				scope.spaceStyle.height = h * st;
				scope.spaceStyle.backgroundColor = 'red';
			};
			scope.$watch('model.selection.selectedEffect', function() {
				$Client_ClientHelpers.purgeCSS('space' + space.name + '::before');
				var effect = scope.model.selection.selectedEffect;
				if (ss.isNullOrUndefined(effect)) {
					return;
				}
				switch (effect.type) {
					case 'highlight': {
						var color = Models.SiteManagerModels.Game.EffectHelper.getString(effect, 'color');
						var radius = Models.SiteManagerModels.Game.EffectHelper.getNumber(effect, 'radius');
						var rotate = Models.SiteManagerModels.Game.EffectHelper.getNumber(effect, 'rotate');
						var offsetX = Models.SiteManagerModels.Game.EffectHelper.getNumber(effect, 'offsetx');
						var offsetY = Models.SiteManagerModels.Game.EffectHelper.getNumber(effect, 'offsety');
						var opacity = Models.SiteManagerModels.Game.EffectHelper.getNumber(effect, 'opacity');
						var beforeStyle = {};
						beforeStyle['display'] = 'block';
						beforeStyle['position'] = 'relative';
						beforeStyle['z-index'] = '-1';
						beforeStyle['width'] = '100%';
						beforeStyle['height'] = '100%';
						beforeStyle['left'] = -radius + offsetX + 'px';
						beforeStyle['top'] = -radius + offsetY + 'px';
						beforeStyle['padding'] = radius + 'px';
						beforeStyle['border-radius'] = '5px';
						beforeStyle['box-shadow'] = 'rgb(44, 44, 44) 3px 3px 2px';
						var hexcolor = $Client_ClientHelpers.hexToRGB(color);
						beforeStyle['content'] = '""';
						beforeStyle['background-color'] = ss.formatString('rgba({0}, {1}, {2}, {3})', hexcolor.R, hexcolor.G, hexcolor.B, opacity);
						beforeStyle['border'] = '2px solid black';
						$Client_ClientHelpers.changeCSS('space' + space.name + '::before', beforeStyle);
						break;
					}
					case 'rotate': {
						break;
					}
					case 'bend': {
						break;
					}
					case 'styleProperty': {
						break;
					}
					case 'animated': {
						break;
					}
				}
			}, true);
			scope.$watch('space', reApplySpaceBind, true);
		}
	});
	ss.initClass($Client_Directives_AcgEffectTestDrawTextDirective, {
		$linkFn: function(scope, element, attrs) {
			var text = null;
			text = scope.model.textTest.text;
			element.attr('class', 'text ' + ss.formatString('text{0}', text.name));
			var scale = scope.model.scale;
			var reApplyTextBind = function() {
				//   JsDictionary<string, string> beforeStyle = new JsDictionary<string, string>();
				//   if (false)
				//   {
				//   beforeStyle["display"] = "block";
				//   beforeStyle["position"] = "relative";
				//   beforeStyle["z-index"] = "-1";
				//   beforeStyle["width"] = "100%";
				//   beforeStyle["height"] = "100%";
				//   beforeStyle["left"] = "-50px";
				//   beforeStyle["top"] = "-50px";
				//   beforeStyle["padding"] = "50px";
				//   beforeStyle["border-radius"] = "15px";
				//   beforeStyle["box-shadow"] = "rgb(51, 51, 51) 4px 4px 2px";
				//   beforeStyle["content"] = "\"\"";
				//   beforeStyle["background"] = "rgba(112, 12, 58, 0.231373)";
				//   }
				//   ChangeCSS("text" + text.Name + "::before", beforeStyle);
				scope.textStyle = {};
				var l = text.left;
				var t = text.top;
				var sl = scale.x;
				var st = scale.y;
				scope.textStyle.position = 'absolute';
				scope.textStyle.left = l * sl;
				scope.textStyle.top = t * st;
				scope.textStyle.boxShadow = 'rgb(51, 51, 51) 4px 4px 2px';
				scope.textStyle.borderRadius = '15px';
				element.text(scope.text.text);
			};
			scope.$watch('model.selection.selectedEffect', function() {
				$Client_ClientHelpers.purgeCSS('text' + text.name + '::before');
				var effect = scope.model.selection.selectedEffect;
				if (ss.isNullOrUndefined(effect)) {
					return;
				}
				switch (effect.type) {
					case 'highlight': {
						var color = Models.SiteManagerModels.Game.EffectHelper.getString(effect, 'color');
						var radius = Models.SiteManagerModels.Game.EffectHelper.getNumber(effect, 'radius');
						var rotate = Models.SiteManagerModels.Game.EffectHelper.getNumber(effect, 'rotate');
						var offsetX = Models.SiteManagerModels.Game.EffectHelper.getNumber(effect, 'offsetx');
						var offsetY = Models.SiteManagerModels.Game.EffectHelper.getNumber(effect, 'offsety');
						var opacity = Models.SiteManagerModels.Game.EffectHelper.getNumber(effect, 'opacity');
						var beforeStyle = {};
						beforeStyle['display'] = 'block';
						beforeStyle['position'] = 'relative';
						beforeStyle['z-index'] = '-1';
						beforeStyle['width'] = '100%';
						beforeStyle['height'] = '100%';
						beforeStyle['left'] = -radius + offsetX + 'px';
						beforeStyle['top'] = -radius + offsetY + 'px';
						beforeStyle['padding'] = radius + 'px';
						beforeStyle['border-radius'] = '5px';
						beforeStyle['box-shadow'] = 'rgb(44, 44, 44) 3px 3px 2px';
						var hexcolor = $Client_ClientHelpers.hexToRGB(color);
						beforeStyle['content'] = '""';
						beforeStyle['background-color'] = ss.formatString('rgba({0}, {1}, {2}, {3})', hexcolor.R, hexcolor.G, hexcolor.B, opacity);
						beforeStyle['border'] = '2px solid black';
						$Client_ClientHelpers.changeCSS('text' + text.name + '::before', beforeStyle);
						break;
					}
					case 'rotate': {
						break;
					}
					case 'bend': {
						break;
					}
					case 'styleProperty': {
						break;
					}
					case 'animated': {
						break;
					}
				}
			}, true);
			scope.$watch('text', reApplyTextBind, true);
		}
	});
	ss.initClass($Client_Directives_AcgSpacesDirective, {
		$linkFn: function(scope, element, attrs) {
			var updater = ss.mkdel(this, function() {
				element.children().each(function(ind, e) {
					angular.element(e).scope().$destroy();
				});
				element.empty();
				var content = "<div>\r\n    <div acg-draw-space ng-style='spaceStyle'>\r\n        <div ng-repeat='card in space.pile.cards' acg-draw-card ng-style='cardStyle'>\r\n        </div>\r\n    </div> \r\n</div>";
				angular.forEach(scope.spaces, ss.mkdel(this, function(space) {
					var e1 = angular.element(content);
					var _scope = scope.$new();
					_scope.space = space;
					var elk = this.$myCompile(e1.contents())(_scope);
					element.append(elk);
				}));
			});
			//scope["$watch"]("spaces",updater);
			this.$myGameContentManagerService.redraw = ss.delegateCombine(this.$myGameContentManagerService.redraw, function() {
				console.log('updating board');
				updater();
				scope.$apply();
			});
			updater();
		}
	});
	ss.initClass($Client_Directives_AcgTestDrawAreaDirective, {
		$linkFn: function(scope, element, attrs) {
			element.mousedown(function(e) {
				scope.model.selection.selectedArea = scope.area;
				scope.$apply();
			});
			var scale = scope.model.scale;
			var reApplyAreaBind = function() {
				scope.areaStyle = {};
				scope.areaStyle.position = 'absolute';
				scope.areaStyle.boxShadow = 'rgb(51, 51, 51) 4px 4px 2px';
				scope.areaStyle.borderRadius = '15px';
				scope.areaStyle.left = scope.area.left * scale.x;
				scope.areaStyle.top = scope.area.top * scale.y;
				scope.areaStyle.width = scope.area.width * scale.x;
				scope.areaStyle.height = scope.area.height * scale.y;
				scope.areaStyle.backgroundColor = 'blue';
				$Client_ClientHelpers.purgeCSS('area' + scope.area.name + '::before');
				for (var $t1 = 0; $t1 < scope.model.selection.selectedScenario.effects.length; $t1++) {
					var gameLayoutScenarioEffect = scope.model.selection.selectedScenario.effects[$t1];
					for (var $t2 = 0; $t2 < gameLayoutScenarioEffect.areaGuids.length; $t2++) {
						var areaGuid = gameLayoutScenarioEffect.areaGuids[$t2];
						if (ss.referenceEquals(areaGuid, scope.area.guid)) {
							for (var $t3 = 0; $t3 < scope.model.game.effects.length; $t3++) {
								var gameEffectModel = scope.model.game.effects[$t3];
								if (ss.referenceEquals(gameEffectModel.guid, gameLayoutScenarioEffect.effectGuid)) {
									var effect = gameEffectModel;
									switch (effect.type) {
										case 'highlight': {
											var color = Models.SiteManagerModels.Game.EffectHelper.getString(effect, 'color');
											var radius = Models.SiteManagerModels.Game.EffectHelper.getNumber(effect, 'radius');
											var rotate = Models.SiteManagerModels.Game.EffectHelper.getNumber(effect, 'rotate');
											var offsetX = Models.SiteManagerModels.Game.EffectHelper.getNumber(effect, 'offsetx');
											var offsetY = Models.SiteManagerModels.Game.EffectHelper.getNumber(effect, 'offsety');
											var opacity = Models.SiteManagerModels.Game.EffectHelper.getNumber(effect, 'opacity');
											var beforeStyle = {};
											beforeStyle['display'] = 'block';
											beforeStyle['position'] = 'relative';
											beforeStyle['z-index'] = '-1';
											beforeStyle['width'] = '100%';
											beforeStyle['height'] = '100%';
											beforeStyle['left'] = -radius + offsetX + 'px';
											beforeStyle['top'] = -radius + offsetY + 'px';
											beforeStyle['padding'] = radius + 'px';
											beforeStyle['border-radius'] = '5px';
											beforeStyle['box-shadow'] = 'rgb(44, 44, 44) 3px 3px 2px';
											var hexcolor = $Client_ClientHelpers.hexToRGB(color);
											beforeStyle['content'] = '""';
											beforeStyle['background-color'] = ss.formatString('rgba({0}, {1}, {2}, {3})', hexcolor.R, hexcolor.G, hexcolor.B, opacity);
											beforeStyle['border'] = '2px solid black';
											$Client_ClientHelpers.changeCSS('area' + scope.area.name + '::before', beforeStyle);
											break;
										}
										case 'rotate': {
											break;
										}
										case 'bend': {
											break;
										}
										case 'styleProperty': {
											break;
										}
										case 'animated': {
											break;
										}
									}
								}
							}
						}
					}
				}
			};
			scope.$watch('model.scale', function() {
				scale = scope.model.scale;
				element.attr('class', 'area ' + ss.formatString('area{0}', scope.area.name));
				element.resizable({
					grid: [scale.x, scale.y],
					minHeight: -1,
					minWidth: -1,
					handles: 'n, e, s, w,nw,sw,ne,se',
					resize: function(ev, ele) {
						scope.area.left = ss.Int32.trunc(ele.position.left / scale.x);
						scope.area.top = ss.Int32.trunc(ele.position.top / scale.y);
						scope.area.width = ss.Int32.trunc(ele.size.width / scale.x);
						scope.area.height = ss.Int32.trunc(ele.size.height / scale.y);
						scope.$apply();
					}
				});
				element.draggable({
					cursor: 'crosshair',
					grid: [scale.x, scale.y],
					drag: function(ev1, ele1) {
						scope.area.left = ss.Int32.trunc(ele1.position.left / scale.x);
						scope.area.top = ss.Int32.trunc(ele1.position.top / scale.y);
						scope.$apply();
					}
				});
				reApplyAreaBind();
			});
			scope.$watch('area', reApplyAreaBind, true);
			scope.$watch('model.selection.selectedEffect', reApplyAreaBind, true);
			scope.$watch('model.selection.selectedScenario.effects', reApplyAreaBind, true);
		}
	});
	ss.initClass($Client_Directives_AcgTestDrawCardDirective, {
		$linkFn: function(scope, element, attrs) {
			element.attr('style', 'width:71px; height:96px;');
			element.attr('class', 'card ' + ss.formatString('card{0}-{1}', scope.card.type, scope.card.value));
			var keys;
			scope.$watch('model.selection.selectedCard', function(old, new1) {
				if (ss.referenceEquals(old, new1)) {
					return;
				}
				if (ss.isNullOrUndefined(scope.model.selection.selectedCard) || !ss.referenceEquals(scope.model.selection.selectedCard, scope.card)) {
					scope.cardStyle.border = undefined;
					scope.cardStyle.margin = undefined;
				}
				else {
					scope.cardStyle.border = 'solid 4px green';
					scope.cardStyle.margin = '-4px';
				}
			});
			scope.cardClick = function() {
				if (ss.referenceEquals(scope.model.selection.selectedCard, scope.card)) {
					scope.model.selection.selectedCard = null;
				}
				else {
					scope.model.selection.selectedCard = scope.card;
				}
			};
			var redrawCard = function() {
				var scale = scope.model.scale;
				var cards = scope.model.getCardsFromScenario(scope.space);
				var spaceScale = { width: scope.space.width / (cards.length - 1), height: scope.space.height / (cards.length - 1) };
				var vertical = scope.space.vertical;
				var cardIndex = ss.indexOf(cards, scope.card);
				scope.cardStyle = {};
				var xx = 0;
				var yy = 0;
				switch (scope.space.layoutType) {
					case 'static': {
						if (vertical) {
							yy = (scope.card.value + 1) / 13 * scope.space.height * scale.y;
						}
						else {
							xx = (scope.card.value + 1) / 13 * scope.space.width * scale.x;
						}
						break;
					}
					case 'grow': {
						xx = (!vertical ? (cardIndex * spaceScale.width * scale.x) : 0);
						yy = (vertical ? (cardIndex * spaceScale.height * scale.y) : 0);
						break;
					}
					default: {
						xx = (!vertical ? (cardIndex * spaceScale.width * scale.x) : 0);
						yy = (vertical ? (cardIndex * spaceScale.height * scale.y) : 0);
						break;
					}
				}
				xx -= 35;
				yy -= 48;
				scope.cardStyle.position = 'absolute';
				scope.cardStyle.zIndex = cardIndex;
				scope.cardStyle.borderRadius = '5px';
				scope.cardStyle.left = xx + (vertical ? (scope.space.width * scale.x / 2) : 0);
				scope.cardStyle.top = yy + (!vertical ? (scope.space.height * scale.y / 2) : 0);
				//                scope.CardStyle["-webkit-transform"] = "rotate(" + scope.Parent.Space.Appearance.InnerStyle.Rotate + "deg)";
				//                element.me().rotate(scope.Space.Appearance.InnerStyle.Rotate);
				scope.cardStyle.content = '""';
				scope.cardStyle.display = 'block';
				if (!scope.model.selection.showCards) {
					scope.cardStyle.display = 'none';
				}
				$Client_ClientHelpers.purgeCSS(ss.formatString('card{0}-{1}', scope.card.type, scope.card.value) + '::before');
				keys = {};
				if (scope.card.value === -1 && scope.card.type === -1) {
					keys['content'] = ss.formatString("url('{1}assets/cards/{0}.gif')", 155, CommonLibraries.Constants.contentAddress);
				}
				else {
					keys['content'] = ss.formatString("url('{1}assets/cards/{0}.gif')", 100 + (scope.card.value + 1) + scope.card.type * 13, CommonLibraries.Constants.contentAddress);
				}
				$Client_ClientHelpers.changeCSS('card' + scope.card.type + '-' + scope.card.value + '::before', keys);
				for (var $t1 = 0; $t1 < scope.model.selection.selectedScenario.effects.length; $t1++) {
					var gameLayoutScenarioEffect = scope.model.selection.selectedScenario.effects[$t1];
					for (var $t2 = 0; $t2 < gameLayoutScenarioEffect.cardGuids.length; $t2++) {
						var cardGuid = gameLayoutScenarioEffect.cardGuids[$t2];
						if (ss.referenceEquals(cardGuid, scope.card.cardGuid)) {
							for (var $t3 = 0; $t3 < scope.model.game.effects.length; $t3++) {
								var gameEffectModel = scope.model.game.effects[$t3];
								if (ss.referenceEquals(gameEffectModel.guid, gameLayoutScenarioEffect.effectGuid)) {
									var effect = gameEffectModel;
									switch (effect.type) {
										case 'highlight': {
											var color = Models.SiteManagerModels.Game.EffectHelper.getString(effect, 'color');
											var radius = Models.SiteManagerModels.Game.EffectHelper.getNumber(effect, 'radius');
											var rotate = Models.SiteManagerModels.Game.EffectHelper.getNumber(effect, 'rotate');
											var offsetX = Models.SiteManagerModels.Game.EffectHelper.getNumber(effect, 'offsetx');
											var offsetY = Models.SiteManagerModels.Game.EffectHelper.getNumber(effect, 'offsety');
											var opacity = Models.SiteManagerModels.Game.EffectHelper.getNumber(effect, 'opacity');
											var beforeStyle = {};
											beforeStyle['display'] = 'block';
											beforeStyle['position'] = 'relative';
											beforeStyle['z-index'] = '-1';
											beforeStyle['width'] = '100%';
											beforeStyle['height'] = '100%';
											beforeStyle['left'] = -radius + offsetX + 'px';
											beforeStyle['top'] = -radius + offsetY + 'px';
											beforeStyle['padding'] = radius + 'px';
											beforeStyle['border-radius'] = '5px';
											beforeStyle['box-shadow'] = 'rgb(44, 44, 44) 3px 3px 2px';
											beforeStyle['content'] = ss.formatString("url('{1}assets/cards/{0}.gif')", 100 + (scope.card.value + 1) + scope.card.type * 13, CommonLibraries.Constants.contentAddress);
											var hexcolor = $Client_ClientHelpers.hexToRGB(color);
											beforeStyle['background-color'] = ss.formatString('rgba({0}, {1}, {2}, {3})', hexcolor.R, hexcolor.G, hexcolor.B, opacity);
											beforeStyle['border'] = '2px solid black';
											$Client_ClientHelpers.changeCSS(ss.formatString('card{0}-{1}::before', scope.card.type, scope.card.value), beforeStyle);
											break;
										}
										case 'rotate': {
											break;
										}
										case 'bend': {
											//
											//
											//
											//                                                                      var bEffect = (new CardGameAppearanceEffectBend(new CardGameEffectBendOptions()
											//
											//
											//
											//                                                                      {
											//
											//
											//
											//                                                                      Degrees = grabbedEffect.GetPropertyByName<double>("degrees"),
											//
											//
											//
											//                                                                      }));
											//
											//
											//
											//                                                                      
											//
											//
											//
											//                                                                      
											//
											//
											//
											//                                                                      var rotate = element.GetCSS("transform").Replace(" scale(1, 1)", "");
											//
											//
											//
											//                                                                      
											//
											//
											//
											//                                                                      element.me().rotate((((-bEffect.Degrees / 2 + bEffect.Degrees / (scope.Space.Pile.Cards.Count - 1) * cardIndex) + NoTransformRotate(rotate))));
											break;
										}
										case 'styleProperty': {
											break;
										}
										case 'animated': {
											break;
										}
									}
								}
							}
						}
					}
				}
			};
			keys = {};
			if (scope.card.value === -1 && scope.card.type === -1) {
				keys['content'] = ss.formatString("url('{1}assets/cards/{0}.gif')", 155, CommonLibraries.Constants.contentAddress);
			}
			else {
				keys['content'] = ss.formatString("url('{1}assets/cards/{0}.gif')", 100 + (scope.card.value + 1) + scope.card.type * 13, CommonLibraries.Constants.contentAddress);
			}
			$Client_ClientHelpers.changeCSS('card' + scope.card.type + '-' + scope.card.value + '::before', keys);
			scope.$watch('space', redrawCard, true);
			scope.$watch('model.selection.showCards', redrawCard);
			scope.$watch('model.selection.selectedScenario', redrawCard, true);
			scope.$watch('model.selection.selectedEffect', redrawCard, true);
			//            scope.On("redrawCard", redrawCard);
			//   redrawCard();
			//
			//                          
			// 
			//            scope.Watch("$parent.space", () =>
			//
			//                          
			// 
			//            {
			//
			//                          
			// 
			//            Console.Log("ac");
			//
			//                          
			// 
			//            redrawCard();
			//
			//                          
			// 
			//            }, true);
			//
			//                          
			// 
			//            scope.Watch("card.appearance.effectNames.join()", () =>
			//
			//                          
			// 
			//            {
			//
			//                          
			// 
			//            Console.Log("b");
			//
			//                          
			// 
			//            redrawCard();
			//
			//                          
			// 
			//            }, true);
			//scope.Watch<CardScope>((_scope) =>
			//{
			//
			//List<Effect> effects = new List<Effect>();
			//
			//foreach (var ef in _scope.Card.Appearance.EffectNames)
			//{
			//var _ef = myEffectManager.GetEffectByName(ef);
			//effects.Add(_ef);
			//}
			//return effects;
			//}, () => {
			//Console.Log("c");
			//redrawCard();
			//}, true);
			redrawCard();
		}
	});
	ss.initClass($Client_Directives_AcgTestDrawSpaceDirective, {
		$linkFn: function(scope, element, attrs) {
			element.attr('class', 'space ' + ss.formatString('space{0}', scope.space.name));
			element.mousedown(function(e) {
				scope.model.selection.selectedSpace = scope.space;
				scope.$apply();
			});
			var scale = scope.model.scale;
			var reApplySpaceBind = function() {
				scope.spaceStyle = {};
				var l = scope.space.left;
				var t = scope.space.top;
				var w = scope.space.width;
				var h = scope.space.height;
				var sl = scale.x;
				var st = scale.y;
				scope.spaceStyle.position = 'absolute';
				scope.spaceStyle.left = l * sl;
				scope.spaceStyle.top = t * st;
				scope.spaceStyle.boxShadow = 'rgb(51, 51, 51) 4px 4px 2px';
				scope.spaceStyle.borderRadius = '15px';
				scope.spaceStyle.width = w * sl;
				scope.spaceStyle.height = h * st;
				scope.spaceStyle.backgroundColor = 'red';
				$Client_ClientHelpers.purgeCSS('space' + scope.space.name + '::before');
				for (var $t1 = 0; $t1 < scope.model.selection.selectedScenario.effects.length; $t1++) {
					var gameLayoutScenarioEffect = scope.model.selection.selectedScenario.effects[$t1];
					for (var $t2 = 0; $t2 < gameLayoutScenarioEffect.spaceGuids.length; $t2++) {
						var spaceGuid = gameLayoutScenarioEffect.spaceGuids[$t2];
						if (ss.referenceEquals(spaceGuid, scope.space.guid)) {
							for (var $t3 = 0; $t3 < scope.model.game.effects.length; $t3++) {
								var gameEffectModel = scope.model.game.effects[$t3];
								if (ss.referenceEquals(gameEffectModel.guid, gameLayoutScenarioEffect.effectGuid)) {
									var effect = gameEffectModel;
									switch (effect.type) {
										case 'highlight': {
											var color = Models.SiteManagerModels.Game.EffectHelper.getString(effect, 'color');
											var radius = Models.SiteManagerModels.Game.EffectHelper.getNumber(effect, 'radius');
											var rotate = Models.SiteManagerModels.Game.EffectHelper.getNumber(effect, 'rotate');
											var offsetX = Models.SiteManagerModels.Game.EffectHelper.getNumber(effect, 'offsetx');
											var offsetY = Models.SiteManagerModels.Game.EffectHelper.getNumber(effect, 'offsety');
											var opacity = Models.SiteManagerModels.Game.EffectHelper.getNumber(effect, 'opacity');
											var beforeStyle = {};
											beforeStyle['display'] = 'block';
											beforeStyle['position'] = 'relative';
											beforeStyle['z-index'] = '-1';
											beforeStyle['width'] = '100%';
											beforeStyle['height'] = '100%';
											beforeStyle['left'] = -radius + offsetX + 'px';
											beforeStyle['top'] = -radius + offsetY + 'px';
											beforeStyle['padding'] = radius + 'px';
											beforeStyle['border-radius'] = '5px';
											beforeStyle['box-shadow'] = 'rgb(44, 44, 44) 3px 3px 2px';
											var hexcolor = $Client_ClientHelpers.hexToRGB(color);
											beforeStyle['content'] = '""';
											beforeStyle['background-color'] = ss.formatString('rgba({0}, {1}, {2}, {3})', hexcolor.R, hexcolor.G, hexcolor.B, opacity);
											beforeStyle['border'] = '2px solid black';
											$Client_ClientHelpers.changeCSS('space' + scope.space.name + '::before', beforeStyle);
											break;
										}
										case 'rotate': {
											break;
										}
										case 'bend': {
											break;
										}
										case 'styleProperty': {
											break;
										}
										case 'animated': {
											break;
										}
									}
								}
							}
						}
					}
				}
			};
			scope.$watch('model.scale', function() {
				scale = scope.model.scale;
				element.resizable({
					grid: [scale.x, scale.y],
					minHeight: -1,
					minWidth: -1,
					handles: 'n, e, s, w,nw,sw,ne,se',
					resize: function(ev, ele) {
						scope.space.left = ele.position.left / scale.x;
						scope.space.top = ele.position.top / scale.y;
						scope.space.width = ele.size.width / scale.x;
						scope.space.height = ele.size.height / scale.y;
						scope.$apply();
					}
				});
				element.draggable({
					cursor: 'crosshair',
					grid: [scale.x, scale.y],
					drag: function(ev1, ele1) {
						scope.space.left = ele1.position.left / scale.x;
						scope.space.top = ele1.position.top / scale.y;
						scope.$apply();
					}
				});
				reApplySpaceBind();
			});
			scope.$watch('space', reApplySpaceBind, true);
			scope.$watch('model.selection.selectedEffect', reApplySpaceBind, true);
			scope.$watch('model.selection.selectedScenario.effects', reApplySpaceBind, true);
		}
	});
	ss.initClass($Client_Directives_AcgTestDrawTextDirective, {
		$linkFn: function(scope, element, attrs) {
			element.attr('class', 'text ' + ss.formatString('text{0}', scope.text.name));
			element.mousedown(function(e) {
				scope.model.selection.selectedText = scope.text;
				scope.$apply();
			});
			var scale = scope.model.scale;
			var reApplyTextBind = function() {
				scope.textStyle = {};
				scope.textStyle.position = 'absolute';
				scope.textStyle.left = scope.text.left * scale.x;
				scope.textStyle.top = scope.text.top * scale.y;
				scope.textStyle.boxShadow = 'rgb(51, 51, 51) 4px 4px 2px';
				scope.textStyle.borderRadius = '15px';
				element.text(scope.text.text);
				$Client_ClientHelpers.purgeCSS('text' + scope.text.name + '::before');
				for (var $t1 = 0; $t1 < scope.model.selection.selectedScenario.effects.length; $t1++) {
					var gameLayoutScenarioEffect = scope.model.selection.selectedScenario.effects[$t1];
					for (var $t2 = 0; $t2 < gameLayoutScenarioEffect.textGuids.length; $t2++) {
						var textGuid = gameLayoutScenarioEffect.textGuids[$t2];
						if (ss.referenceEquals(textGuid, scope.text.guid)) {
							for (var $t3 = 0; $t3 < scope.model.game.effects.length; $t3++) {
								var gameEffectModel = scope.model.game.effects[$t3];
								if (ss.referenceEquals(gameEffectModel.guid, gameLayoutScenarioEffect.effectGuid)) {
									var effect = gameEffectModel;
									switch (effect.type) {
										case 'highlight': {
											var color = Models.SiteManagerModels.Game.EffectHelper.getString(effect, 'color');
											var radius = Models.SiteManagerModels.Game.EffectHelper.getNumber(effect, 'radius');
											var rotate = Models.SiteManagerModels.Game.EffectHelper.getNumber(effect, 'rotate');
											var offsetX = Models.SiteManagerModels.Game.EffectHelper.getNumber(effect, 'offsetx');
											var offsetY = Models.SiteManagerModels.Game.EffectHelper.getNumber(effect, 'offsety');
											var opacity = Models.SiteManagerModels.Game.EffectHelper.getNumber(effect, 'opacity');
											var beforeStyle = {};
											beforeStyle['display'] = 'block';
											beforeStyle['position'] = 'relative';
											beforeStyle['z-index'] = '-1';
											beforeStyle['width'] = '100%';
											beforeStyle['height'] = '100%';
											beforeStyle['left'] = -radius + offsetX + 'px';
											beforeStyle['top'] = -radius + offsetY + 'px';
											beforeStyle['padding'] = radius + 'px';
											beforeStyle['border-radius'] = '5px';
											beforeStyle['box-shadow'] = 'rgb(44, 44, 44) 3px 3px 2px';
											var hexcolor = $Client_ClientHelpers.hexToRGB(color);
											beforeStyle['content'] = '""';
											beforeStyle['background-color'] = ss.formatString('rgba({0}, {1}, {2}, {3})', hexcolor.R, hexcolor.G, hexcolor.B, opacity);
											beforeStyle['border'] = '2px solid black';
											$Client_ClientHelpers.changeCSS('text' + scope.text.name + '::before', beforeStyle);
											break;
										}
										case 'rotate': {
											break;
										}
										case 'bend': {
											break;
										}
										case 'styleProperty': {
											break;
										}
										case 'animated': {
											break;
										}
									}
								}
							}
						}
					}
				}
			};
			scope.$watch('model.scale', function() {
				scale = scope.model.scale;
				element.draggable({
					cursor: 'crosshair',
					grid: [scale.x, scale.y],
					drag: function(ev, ele) {
						scope.text.left = ele.position.left / scale.x;
						scope.text.top = ele.position.top / scale.y;
						scope.$apply();
					}
				});
				reApplyTextBind();
			});
			scope.$watch('text', reApplyTextBind, true);
			scope.$watch('model.selection.selectedEffect', reApplyTextBind, true);
			scope.$watch('model.selection.selectedScenario.effects', reApplyTextBind, true);
		}
	});
	ss.initClass($Client_Directives_ChatBoxDirective, {
		$linkFn: function(scope, element, attr) {
		}
	});
	ss.initClass($Client_Directives_DraggableDirective, {
		$linkFn: function(scope, element, attrs) {
			element.draggable({ cancel: '.window .inner-window' });
		}
	});
	ss.initClass($Client_Directives_FancyListDirective, {
		$linkFn: function(scope, element, attr) {
			scope.itemClick = function(item) {
				scope.bind = item;
			};
			scope.currentClass = function(item1) {
				return (ss.referenceEquals(item1, scope.bind) ? 'fancy-list-item fancy-list-item-selected' : 'fancy-list-item ');
			};
			scope.parentScope = scope['$parent']['$parent']['$parent'];
		}
	});
	ss.initClass($Client_Directives_FloatingWindowDirective, {
		$linkFn: function(scope, element, attr) {
			this.$myElement = element;
			this.$myScope = scope;
			$Client_Directives_FloatingWindowDirective.$items.add(element, scope);
			element.click(ss.thisFix(ss.mkdel(this, function(elem, event) {
				this.$focus();
			})));
			scope.$parent.swingAway = ss.mkdel(this, function(a, b, c) {
				this.swingAway(a, b, element, c);
			});
			scope.$parent.swingBack = ss.mkdel(this, function(c1) {
				this.swingBack(scope, element, c1);
			});
			scope.$parent.minimize = function() {
				scope.$parent.minimized = true;
				scope.minimize();
			};
			scope.$parent.destroyWindow = function() {
				scope.$destroy();
				element.remove();
			};
			var $t1 = $Client_Scope_Directive_FloatingWindowPosition.$ctor();
			$t1.left = scope.left;
			$t1.top = scope.top;
			$t1.display = 'block';
			scope.positionStyles = $t1;
			scope.positionStyles.zIndex = 10000;
			if (scope.left.indexOf('%') !== -1) {
				scope.positionStyles.marginLeft = -ss.Int32.div(parseInt(ss.replaceAllString(scope.width, 'px', '')), 2) + 'px';
			}
			if (scope.top.indexOf('%') !== -1) {
				scope.positionStyles.marginTop = -ss.Int32.div(parseInt(ss.replaceAllString(scope.height, 'px', '')), 2) + 'px';
			}
			var $t2 = $Client_Scope_Directive_Size.$ctor();
			$t2.width = scope.width;
			$t2.height = scope.height;
			scope.sizeStyle = $t2;
			scope.maximize = function() {
				if (!scope.isMaximized) {
					scope.lastPositionStyles = scope.positionStyles;
					scope.lastSizeStyle = scope.sizeStyle;
					var $t3 = $Client_Scope_Directive_FloatingWindowPosition.$ctor();
					$t3.left = '0';
					$t3.top = '0';
					$t3.display = 'block';
					scope.positionStyles = $t3;
					var $t4 = $Client_Scope_Directive_Size.$ctor();
					$t4.width = '100%';
					$t4.height = '100%';
					scope.sizeStyle = $t4;
				}
				else {
					scope.positionStyles = scope.lastPositionStyles;
					scope.sizeStyle = scope.lastSizeStyle;
					scope.lastPositionStyles = null;
					scope.lastSizeStyle = null;
				}
				scope.isMaximized = !scope.isMaximized;
			};
			scope.close = function() {
				if (!ss.staticEquals(scope.onclose, null)) {
					scope.onclose();
				}
				if (!ss.staticEquals(scope.$parent.onClose, null)) {
					scope.$parent.onClose();
				}
				//todo destroy
				scope.positionStyles.display = 'none';
			};
			scope.minimize = ss.mkdel(this, function() {
				this.$myUIManagerService.onMinimize(scope);
				scope.$parent.swingAway(5, false, function() {
					scope.positionStyles.display = 'none';
				});
			});
			scope.restore = function() {
				scope.$parent.swingBack(null);
				scope.positionStyles.display = 'block';
			};
			this.$focus();
			if (!ss.staticEquals(scope.$parent.onReady, null)) {
				scope.$parent.onReady();
			}
		},
		$focus: function() {
			var $t1 = $Client_Directives_FloatingWindowDirective.$items.getEnumerator();
			try {
				while ($t1.moveNext()) {
					var floatingWindowScope = $t1.current();
					floatingWindowScope.value.positionStyles.zIndex = 10000;
				}
			}
			finally {
				$t1.dispose();
			}
			if ($Client_Directives_FloatingWindowDirective.$items.containsKey(this.$myElement)) {
				$Client_Directives_FloatingWindowDirective.$items.get_item(this.$myElement).positionStyles.zIndex = 10001;
				if (ss.isNullOrUndefined(this.$myScope.$root.$$phase)) {
					this.$myScope.$apply();
				}
			}
		},
		swingBack: function(scope, element, callback) {
			window.setTimeout(function() {
				var js = {};
				js['left'] = scope.left;
				js['top'] = scope.top;
				element.css('display', 'block');
				element.animate(js, 'fast', 'swing', callback);
			}, 1);
		},
		swingAway: function(direction, simulate, element, callback) {
			var js = {};
			var distance = '3000';
			switch (direction) {
				case 0: {
					js['left'] = '-' + distance + 'px';
					js['top'] = '-' + distance + 'px';
					break;
				}
				case 1: {
					js['top'] = '-' + distance + 'px';
					break;
				}
				case 2: {
					js['left'] = distance + 'px';
					js['top'] = '-' + distance + 'px';
					break;
				}
				case 3: {
					js['left'] = distance + 'px';
					break;
				}
				case 4: {
					js['left'] = distance + 'px';
					js['top'] = distance + 'px';
					break;
				}
				case 5: {
					js['top'] = distance + 'px';
					break;
				}
				case 6: {
					js['left'] = '-' + distance + 'px';
					js['top'] = distance + 'px';
					break;
				}
				case 7: {
					js['left'] = distance + 'px';
					break;
				}
			}
			if (simulate) {
				element.css(js);
				element.css('display', 'none');
				if (!ss.staticEquals(callback, null)) {
					callback();
				}
			}
			else {
				element.animate(js, 'slow', 'swing', function() {
					element.css('display', 'none');
					if (!ss.staticEquals(callback, null)) {
						callback();
					}
				});
			}
		}
	});
	ss.initClass($Client_Directives_ForNextDirective, {
		$linkFn: function(scope, element, attrs) {
			$Client_Directives_ForNextDirective.$forCounter++;
			var next = element.next();
			var id = next.attr('id');
			if (ss.isNullOrUndefined(id)) {
				id = 'forLink' + $Client_Directives_ForNextDirective.$forCounter;
				next.attr('id', id);
			}
			element.attr('for', id);
		}
	});
	ss.initClass($Client_Directives_GridDirective, {
		$linkFn: function(scope, element, attrs) {
			scope['$watch']('showGrid', function() {
				if (scope.showGrid) {
					element.show('fast');
				}
				else {
					element.hide('fast');
				}
			});
			scope['$watch']('scale', function() {
				element.empty();
				var scale = scope.scale;
				var n = document.createElement('canvas');
				var w = scale.x;
				var h = scale.y;
				n.width = ss.Int32.trunc(w) + 1;
				n.height = ss.Int32.trunc(h) + 1;
				var context = n.getContext('2d');
				context.strokeStyle = '#EEEEEE';
				context.lineWidth = 1;
				context.moveTo(w, 0);
				context.lineTo(w, h);
				context.stroke();
				context.moveTo(0, h);
				context.lineTo(w, h);
				context.stroke();
				var url = n.toDataURL('image/png');
				element.css('background-image', ss.formatString('url({0})', url));
				element.css('background-repeat', 'repeat-x repeat-y');
				element.css('width', '100%');
				element.css('height', '100%');
				element.css('margin-left', 'auto');
				element.css('margin-right', 'auto');
				element.css('margin-bottom', 'auto');
				element.css('margin-top', 'auto');
				element.zIndex(-10000);
			}, true);
			//
			//            scope["$watch"]("scale", new Action(() =>
			//
			//            {
			//
			//            element.Empty();
			//
			//            var scale = (Point) scope.scale;
			//
			//            var w = jQueryApi.jQuery.Window.GetWidth();
			//
			//            var h = jQueryApi.jQuery.Window.GetHeight();
			//
			//            
			//
			//            for (int i = 0; i < (w/scale.X) + 2; i++)
			//
			//            {
			//
			//            for (int j = 0; j < (h/scale.Y) + 2; j++)
			//
			//            {
			//
			//            element.Append(
			//
			//            string.Format(
			//
			//            "<div style='border:solid 1px black;position:absolute;left:{0}px;top:{1}px;width:{2}px;height:{3}px;'></div>",
			//
			//            i*scale.X, j*scale.Y, scale.X, scale.Y));
			//
			//            }
			//
			//            }
			//
			//            }), true);
		}
	});
	ss.initClass($Client_Directives_PropertyDirective, {
		$linkFn: function(scope, element, attrs) {
			var prop = scope[attrs.property];
			switch (prop.type) {
				case 'text': {
					element[0].setAttribute('type', 'text');
					break;
				}
				case 'number': {
					element[0].setAttribute('type', 'number');
					break;
				}
				case 'color': {
					element[0].setAttribute('type', 'color');
					break;
				}
			}
		}
	});
	ss.initClass($Client_Directives_SpecialNgRepeatDirective, {
		$linkFn: function(scope, element, attr) {
			var expression = attr.specialNgRepeat;
			scope.$watch(expression, ss.mkdel(this, function(cur) {
				var items = cur;
				var cloner = $(element[0]);
				var p = element.parent();
				for (var $t1 = 0; $t1 < items.length; $t1++) {
					var item = items[$t1];
					var e = angular.element(cloner.clone());
					var _scope = scope.$new();
					_scope.item = item;
					var elk = this.$compileService(e.contents())(_scope);
					p.append(elk);
				}
				cloner.remove();
			}));
		}
	});
	ss.initClass($Client_Filters_RoundFilter, {
		filter: function(input) {
			return parseInt(input.toString());
		}
	});
	ss.initClass($Client_Libs_Extensions, {});
	ss.initClass($Client_Libs_ScriptLoader, {
		$loadScript: function(url, cache, callback) {
			cache = false;
			var head = document.getElementsByTagName('head')[0];
			var script = document.createElement('script');
			script.type = 'text/javascript';
			script.src = url + (cache ? ('?' + Math.floor(Math.random() * 10000)) : '');
			//caching
			if (!ss.staticEquals(callback, null)) {
				script.onreadystatechange = function(a) {
					if (script.readyState === 'loaded' || script.readyState === 'complete') {
						callback();
					}
				};
				script.onload = function(a1) {
					callback();
				};
			}
			head.appendChild(script);
		},
		load: function(items, cache, done) {
			var counter = 0;
			for (var i = 0; i < items.length; i++) {
				this.$loadScript(items[i], cache, function() {
					counter++;
					if (counter >= items.length) {
						done();
					}
				});
			}
		},
		loadSync: function(items, done) {
			var counter = 0;
			var nextOne = null;
			nextOne = ss.mkdel(this, function() {
				counter++;
				if (counter >= items.length) {
					done();
				}
				else {
					this.$loadScript(items[counter], false, nextOne);
				}
			});
			this.$loadScript(items[0], false, nextOne);
		}
	});
	ss.initClass($Client_Libs_TimeTracker, {});
	ss.initClass($Client_Scope__KeepBaseScopeAlive, {});
	ss.initClass($Client_Scope_Controller_ActiveLobbyModel, {});
	ss.initClass($Client_Services_ManagedScope, {}, Client.Scope.BaseScope);
	ss.initClass($Client_Scope_Directive_FloatingWindowBaseScope, {}, $Client_Services_ManagedScope);
	ss.initClass($Client_Scope_Controller_ActiveLobbyScope, {}, $Client_Scope_Directive_FloatingWindowBaseScope);
	ss.initClass($Client_Scope_Controller_CreateRoomModel, {});
	ss.initClass($Client_Scope_Controller_CreateRoomScope, {}, $Client_Scope_Directive_FloatingWindowBaseScope);
	ss.initClass($Client_Scope_Controller_DebugGameCodeScope, {}, $Client_Scope_Directive_FloatingWindowBaseScope);
	ss.initClass($Client_Scope_Controller_GameUpdater, {});
	ss.initClass($Client_Scope_Controller_DebugGameCodeScopeModel, {}, $Client_Scope_Controller_GameUpdater);
	ss.initClass($Client_Scope_Controller_DebugGameControllerScope, {}, $Client_Services_ManagedScope);
	ss.initClass($Client_Scope_Controller_DebugGameModel, {});
	ss.initClass($Client_Scope_Controller_EffectTesterAreaModel, {});
	ss.initClass($Client_Scope_Controller_EffectTesterCardModel, {});
	ss.initClass($Client_Scope_Controller_EffectTesterControllerScope, {}, $Client_Services_ManagedScope);
	ss.initClass($Client_Scope_Controller_EffectTesterControllerScopeModel, {});
	ss.initClass($Client_Scope_Controller_EffectTesterSpaceModel, {});
	ss.initClass($Client_Scope_Controller_EffectTesterTextModel, {});
	ss.initClass($Client_Scope_Controller_GameCodeScope, {}, $Client_Scope_Directive_FloatingWindowBaseScope);
	ss.initClass($Client_Scope_Controller_GameCodeScopeModel, {}, $Client_Scope_Controller_GameUpdater);
	ss.initClass($Client_Scope_Controller_GameControllerScope, {}, $Client_Services_ManagedScope);
	ss.initClass($Client_Scope_Controller_GameEditorModel, {}, $Client_Scope_Controller_GameUpdater);
	ss.initClass($Client_Scope_Controller_GameEditorScope, {}, $Client_Scope_Directive_FloatingWindowBaseScope);
	ss.initClass($Client_Scope_Controller_GameEditorSelectionScopeModel, {}, $Client_Scope_Controller_GameUpdater);
	ss.initClass($Client_Scope_Controller_GameEffectsEditorScope, {}, $Client_Scope_Directive_FloatingWindowBaseScope);
	ss.initClass($Client_Scope_Controller_GameEffectsEditorScopeModel, {}, $Client_Scope_Controller_GameUpdater);
	ss.initClass($Client_Scope_Controller_GameLayoutEditorScope, {}, $Client_Scope_Directive_FloatingWindowBaseScope);
	ss.initClass($Client_Scope_Controller_GameLayoutEditorScopeModel, {}, $Client_Scope_Controller_GameUpdater);
	ss.initClass($Client_Scope_Controller_GameManagerModel, {});
	ss.initClass($Client_Scope_Controller_GameManagerScope, {}, $Client_Scope_Directive_FloatingWindowBaseScope);
	ss.initClass($Client_Scope_Controller_GameScenarioEditorScope, {}, $Client_Scope_Directive_FloatingWindowBaseScope);
	ss.initClass($Client_Scope_Controller_GameScenarioEditorScopeModel, {}, $Client_Scope_Controller_GameUpdater);
	ss.initClass($Client_Scope_Controller_GameTestEditorScope, {}, $Client_Scope_Directive_FloatingWindowBaseScope);
	ss.initClass($Client_Scope_Controller_GameTestEditorScopeModel, {}, $Client_Scope_Controller_GameUpdater);
	ss.initClass($Client_Scope_Controller_HomeModel, {});
	ss.initClass($Client_Scope_Controller_HomeScope, {}, $Client_Scope_Directive_FloatingWindowBaseScope);
	ss.initClass($Client_Scope_Controller_LoginScope, {}, $Client_Scope_Directive_FloatingWindowBaseScope);
	ss.initClass($Client_Scope_Controller_LoginScopeModel, {});
	ss.initClass($Client_Scope_Controller_MessageModel, {});
	ss.initClass($Client_Scope_Controller_MessageScope, {}, $Client_Scope_Directive_FloatingWindowBaseScope);
	ss.initEnum($Client_Scope_Controller_MessageType, { okay: 'okay', question: 'question' });
	ss.initClass($Client_Scope_Controller_MinimizeScope, {}, Client.Scope.BaseScope);
	ss.initClass($Client_Scope_Controller_QuestionScope, {}, $Client_Scope_Directive_FloatingWindowBaseScope);
	ss.initClass($Client_Scope_Controller_QuestionScopeModel, {});
	ss.initEnum($Client_Scope_Controller_SelectedGameLayoutPiece, { none: 'none', space: 'space', text: 'text', area: 'area' });
	ss.initEnum($Client_Scope_Controller_SelectedGameScenarioPiece, { none: 'none', space: 'space', effect: 'effect' });
	ss.initClass($Client_Scope_Controller_SelectedScenarioPieces, {});
	ss.initEnum($Client_Scope_Controller_SelectedScenarioPieceType, { none: 'none', space: 'space', area: 'area', text: 'text', card: 'card' });
	ss.initClass($Client_Scope_Controller_TestGameControllerScope, {}, $Client_Services_ManagedScope);
	ss.initClass($Client_Scope_Controller_TestGameControllerScopeModel, {});
	ss.initEnum($Client_Scope_Controller_UpdateStatusType, { dirty: 'dirty', syncing: 'syncing', synced: 'synced' });
	ss.initClass($Client_Scope_Directive_AcgSpacesScope, {}, Client.Scope.BaseScope);
	ss.initClass($Client_Scope_Directive_CardScope, {}, Client.Scope.BaseScope);
	ss.initClass($Client_Scope_Directive_DebugCardScope, {}, Client.Scope.BaseScope);
	ss.initClass($Client_Scope_Directive_DebugSpaceScope, {}, Client.Scope.BaseScope);
	ss.initClass($Client_Scope_Directive_EffectTestAreaScope, {}, $Client_Scope_Controller_EffectTesterControllerScope);
	ss.initClass($Client_Scope_Directive_EffectTestSpaceScope, {}, $Client_Scope_Controller_EffectTesterControllerScope);
	ss.initClass($Client_Scope_Directive_EffectTestCardScope, {}, $Client_Scope_Directive_EffectTestSpaceScope);
	ss.initClass($Client_Scope_Directive_EffectTestTextScope, {}, $Client_Scope_Controller_EffectTesterControllerScope);
	ss.initEnum($Client_Scope_Directive_EffectTestType, { card: 'card', space: 'space', area: 'area', text: 'text' });
	ss.initClass($Client_Scope_Directive_FloatingWindowPosition, {});
	ss.initClass($Client_Scope_Directive_FloatingWindowScope, {}, Client.Scope.BaseScope);
	ss.initClass($Client_Scope_Directive_Size, {});
	ss.initClass($Client_Scope_Directive_SpaceScope, {}, Client.Scope.BaseScope);
	ss.initEnum($Client_Scope_Directive_SwingDirection, { topLeft: 0, top: 1, topRight: 2, right: 3, bottomRight: 4, bottom: 5, bottomLeft: 6, left: 7 });
	ss.initClass($Client_Scope_Directive_TestAreaScope, {}, $Client_Scope_Controller_TestGameControllerScope);
	ss.initClass($Client_Scope_Directive_TestSpaceScope, {}, $Client_Scope_Controller_TestGameControllerScope);
	ss.initClass($Client_Scope_Directive_TestCardScope, {}, $Client_Scope_Directive_TestSpaceScope);
	ss.initClass($Client_Scope_Directive_TestTextScope, {}, $Client_Scope_Controller_TestGameControllerScope);
	ss.initClass($Client_Services_ClientChatManagerService, {
		sendChatMessage: function(sendChatMessageModel) {
			this.$clientChatManager.sendChatMessage(sendChatMessageModel);
		}
	});
	ss.initClass($Client_Services_ClientDebugManagerService, {
		answerQuestion: function(gameAnswerQuestionModel) {
			this.$clientDebugManager.answerQuestion(gameAnswerQuestionModel);
			console.time('Question');
		},
		debugResponse: function(debugResponse) {
			this.$clientDebugManager.debugResponse(debugResponse);
		},
		createGame: function(createDebugGameRequest) {
			this.$clientDebugManager.createGame(createDebugGameRequest);
		},
		destroyGame: function(destroyDebugGameRequest) {
			this.$clientDebugManager.destroyGame(destroyDebugGameRequest);
		}
	});
	ss.initClass($Client_Services_ClientGameManagerService, {
		answerQuestion: function(gameAnswerQuestionModel) {
			this.$clientGameManager.answerQuestion(gameAnswerQuestionModel);
		}
	});
	ss.initClass($Client_Services_ClientManagerService, {});
	ss.initClass($Client_Services_ClientSiteManagerService, {
		login: function(userName, password) {
			this.$clientSiteManager.login(userName, password);
		},
		createUser: function(userName, password) {
			this.$clientSiteManager.createUser({ userName: userName, password: password });
		},
		getGameTypes: function() {
			this.$clientSiteManager.getGameTypes();
		},
		getRooms: function(getRoomsRequest) {
			this.$clientSiteManager.getRooms(getRoomsRequest);
		},
		createRoom: function(createRoom) {
			this.$clientSiteManager.createRoom(createRoom);
		},
		getRoomInfo: function(roomInfo) {
			this.$clientSiteManager.getRoomInfo(roomInfo);
		},
		joinRoom: function(joinRoom) {
			this.$clientSiteManager.joinRoom(joinRoom);
		},
		leaveRoom: function(leaveRoom) {
			this.$clientSiteManager.leaveRoom(leaveRoom);
		},
		startGame: function(startGameRequest) {
			this.$clientSiteManager.startGame(startGameRequest);
		},
		getGamesByUser: function(hash) {
			this.$clientSiteManager.getGamesByUser({ userHash: hash });
		},
		developerCreateGame: function(gameName) {
			this.$clientSiteManager.developerCreateGame({ gameName: gameName });
		},
		developerUpdateGame: function(gameModel) {
			this.$clientSiteManager.developerUpdateGame({ gameModel: gameModel });
		}
	});
	ss.initClass($Client_Services_CreateUIService, {
		create$1: function(T) {
			return function(ui) {
				return this.create$3(T).call(this, ui, function(a, b) {
				});
			};
		},
		create$3: function(T) {
			return function(ui, populateScope) {
				var scope = this.$myRootScopeService.$new();
				var html = $(ss.formatString('<div ng-include src="\'{1}partials/UIs/{0}.html\'"></div>', ui, CommonLibraries.Constants.contentAddress));
				populateScope(scope, html);
				var item = this.$myCompileService(html)(scope);
				item.appendTo(window.document.body);
				if (ss.isNullOrUndefined(scope.$$phase)) {
					scope.$apply();
				}
				scope = angular.element(item.children()[0]).scope() || scope;
				return new (ss.makeGenericType($Client_Services_CreatedUI$1, [T]))(scope, item);
			};
		},
		createSingleton: function(ui) {
			return this.createSingleton$1($Client_Services_ManagedScope).call(this, ui);
		},
		createSingleton$1: function(T) {
			return function(ui) {
				return this.createSingleton$2(T).call(this, ui, function(a, b) {
				});
			};
		},
		createSingleton$2: function(T) {
			return function(ui, populateScope) {
				var scope;
				if (ss.keyExists(this.$singltons, ui)) {
					var html = this.$singltons[ui];
					if (html.parent().length === 0) {
						delete this.$singltons[ui];
					}
				}
				if (ss.keyExists(this.$singltons, ui)) {
					var html1 = this.$singltons[ui];
					scope = this.$myRootScopeService.$new();
					populateScope(scope, html1);
					var item = this.$myCompileService(html1)(scope);
					if (ss.isNullOrUndefined(scope.$$phase)) {
						scope.$apply();
					}
					scope = angular.element(item.children()[0]).scope() || scope;
					return new (ss.makeGenericType($Client_Services_CreatedUI$1, [T]))(scope, html1);
				}
				else {
					scope = this.$myRootScopeService.$new();
					var html2 = $(ss.formatString('<div ng-include src="\'{1}partials/UIs/{0}.html\'"></div>', ui, CommonLibraries.Constants.contentAddress));
					populateScope(scope, html2);
					var item1 = this.$myCompileService(html2)(scope);
					item1.appendTo(window.document.body);
					if (ss.isNullOrUndefined(scope.$$phase)) {
						scope.$apply();
					}
					scope = angular.element(item1.children()[0]).scope() || scope;
					this.$singltons[ui] = item1;
					return new (ss.makeGenericType($Client_Services_CreatedUI$1, [T]))(scope, item1);
				}
			};
		},
		create: function(ui) {
			var scope = this.$myRootScopeService.$new();
			var item = this.$myCompileService($(ss.formatString('<div ng-include src="\'{1}partials/UIs/{0}.html\'"></div>', ui, CommonLibraries.Constants.contentAddress)))(scope);
			item.appendTo(window.document.body);
			if (ss.isNullOrUndefined(scope.$$phase)) {
				scope.$apply();
			}
			scope = angular.element(item.children()[0]).scope() || scope;
			return new (ss.makeGenericType($Client_Services_CreatedUI$1, [$Client_Services_ManagedScope]))(scope, item);
		},
		create$2: function(ui, scope) {
			var item = this.$myCompileService($(ss.formatString('<div ng-include src="\'{1}partials/UIs/{0}.html\'"></div>', ui, CommonLibraries.Constants.contentAddress)))(scope);
			item.appendTo(window.document.body);
			if (ss.isNullOrUndefined(scope.$$phase)) {
				scope.$apply();
			}
			scope = angular.element(item.children()[0]).scope() || scope;
			return new (ss.makeGenericType($Client_Services_CreatedUI$1, [$Client_Services_ManagedScope]))(scope, item);
		}
	});
	ss.initClass($Client_Services_GameContentManagerService, {});
	ss.initClass($Client_Services_GatewayService, {
		get_gateway: function() {
			return this.$1$GatewayField;
		},
		set_gateway: function(value) {
			this.$1$GatewayField = value;
		}
	});
	ss.initClass($Client_Services_MessageService, {
		popupOkay: function(title, message, callback) {
			this.$myCreateUIService.create$3($Client_Scope_Controller_MessageScope).call(this.$myCreateUIService, $Client_Controllers_$MessageController.$view, function(mess, item) {
				mess.model = $Client_Scope_Controller_MessageModel.$ctor();
				mess.model.callback = function() {
					mess.$destroy();
					item.remove();
					callback();
				};
				mess.model.title = title;
				mess.model.message = message;
				mess.model.messageType = 'okay';
			});
		},
		popupQuestion: function(title, message, callback) {
			this.$myCreateUIService.create$3($Client_Scope_Controller_MessageScope).call(this.$myCreateUIService, $Client_Controllers_$MessageController.$view, function(mess, item) {
				mess.model = $Client_Scope_Controller_MessageModel.$ctor();
				mess.model.callback = function() {
					mess.$destroy();
					item.remove();
					callback(mess.model.response);
				};
				mess.model.title = title;
				mess.model.message = message;
				mess.model.messageType = 'question';
			});
		}
	});
	ss.initClass($Client_Services_UIManagerService, {});
	$Client_Controllers_$QuestionController.$view = 'Question';
	$Client_Controllers_$QuestionController.$name = 'QuestionController';
	$Client_Controllers_GameController.name$1 = 'GameController';
	$Client_Controllers_GameController.view = 'GameUI';
	$Client_Services_ClientGameManagerService.name$1 = 'ClientGameManagerService';
	$Client_Services_GameContentManagerService.name$1 = 'GameContentManagerService';
	$Client_Services_CreateUIService.name$1 = 'CreateUIService';
	$Client_Services_UIManagerService.name$1 = 'UIManagerService';
	$Client_Controllers_$MinimizeController.$name = 'MinimizeController';
	$Client_Controllers_$MinimizeController.$view = 'MinimizeArea';
	$Client_Controllers_$DebugQuestionController.$name = 'DebugQuestionController';
	$Client_Controllers_$DebugQuestionController.$view = 'DebugQuestion';
	$Client_Controllers_DebugGameController.name$1 = 'DebugGameController';
	$Client_Controllers_DebugGameController.view = 'DebugGameUI';
	$Client_Services_ClientDebugManagerService.name$1 = 'ClientDebugManagerService';
	$Client_Controllers_TestGameController.name$1 = 'TestGameController';
	$Client_Controllers_TestGameController.view = 'TestGameUI';
	$Client_Controllers_$GameScenarioEditorController.$name = 'GameScenarioEditorController';
	$Client_Controllers_$GameScenarioEditorController.$view = 'GameScenarioEditor';
	$Client_Controllers_$GameLayoutEditorController.$name = 'GameLayoutEditorController';
	$Client_Controllers_$GameLayoutEditorController.$view = 'GameLayoutEditor';
	$Client_Controllers_EffectTesterController.name$1 = 'EffectTesterController';
	$Client_Controllers_EffectTesterController.view = 'EffectTester';
	$Client_Controllers_$GameEffectsEditorController.$name = 'GameEffectsEditorController';
	$Client_Controllers_$GameEffectsEditorController.$view = 'GameEffectsEditor';
	$Client_Controllers_$DebugGameCodeController.$name = 'DebugGameCodeController';
	$Client_Controllers_$DebugGameCodeController.$view = 'DebugGameCodeEditor';
	$Client_Controllers_$DebugGameCodeController.$instance = null;
	$Client_Controllers_$GameTestEditorController.$name = 'GameTestEditorController';
	$Client_Controllers_$GameTestEditorController.$view = 'GameTestEditor';
	$Client_Controllers_$GameCodeController.$name = 'GameCodeController';
	$Client_Controllers_$GameCodeController.$view = 'GameCodeEditor';
	$Client_Controllers_$GameCodeController.$instance = null;
	$Client_Controllers_$GameEditorController.$name = 'GameEditorController';
	$Client_Controllers_$GameEditorController.$view = 'GameEditor';
	$Client_Controllers_$GameManagerController.$view = 'GameManager';
	$Client_Controllers_$GameManagerController.$name = 'GameManagerController';
	$Client_Controllers_$CreateRoomController.$view = 'CreateRoomDialog';
	$Client_Controllers_$CreateRoomController.$name = 'CreateRoomController';
	$Client_Controllers_$ActiveLobbyController.$view = 'ActiveLobby';
	$Client_Controllers_$ActiveLobbyController.$name = 'ActiveLobbyController';
	$Client_Controllers_$HomeController.$name = 'HomeController';
	$Client_Controllers_$HomeController.$view = 'Home';
	$Client_Controllers_$LoginController.$name = 'LoginController';
	$Client_Controllers_$LoginController.$view = 'Login';
	$Client_Services_ClientSiteManagerService.name$1 = 'ClientSiteManagerService';
	$Client_Controllers_$MessageController.$name = 'MessageController';
	$Client_Controllers_$MessageController.$view = 'Message';
	$Client_Services_MessageService.name$1 = 'MessageService';
	$Client_Services_ClientManagerService.name$1 = 'ClientManagerService';
	$Client_Services_ClientChatManagerService.name$1 = 'ClientChatManagerService';
	$Client_Services_GatewayService.name$1 = 'GatewayService';
	$Client_Directives_GridDirective.name$1 = 'grid';
	$Client_Directives_DraggableDirective.name$1 = 'draggable';
	$Client_Directives_FloatingWindowDirective.name$1 = 'floatingWindow';
	$Client_Directives_FloatingWindowDirective.$items = new (ss.makeGenericType(ss.Dictionary$2, [Object, $Client_Scope_Directive_FloatingWindowScope]))();
	$Client_Directives_FancyListDirective.name$1 = 'fancyList';
	$Client_Directives_ChatBoxDirective.name$1 = 'chatBox';
	$Client_Directives_PropertyDirective.name$1 = 'property';
	$Client_Directives_AcgDrawCardDirective.name$1 = 'acgDrawCard';
	$Client_Directives_AcgDrawSpaceDirective.name$1 = 'acgDrawSpace';
	$Client_Directives_AcgDebugDrawCardDirective.name$1 = 'acgDebugDrawCard';
	$Client_Directives_AcgDebugDrawSpaceDirective.name$1 = 'acgDebugDrawSpace';
	$Client_Directives_AcgTestDrawCardDirective.name$1 = 'acgTestDrawCard';
	$Client_Directives_AcgTestDrawSpaceDirective.name$1 = 'acgTestDrawSpace';
	$Client_Directives_AcgEffectTestDrawAreaDirective.name$1 = 'acgEffectTestDrawArea';
	$Client_Directives_AcgEffectTestDrawTextDirective.name$1 = 'acgEffectTestDrawText';
	$Client_Directives_AcgEffectTestDrawCardDirective.name$1 = 'acgEffectTestDrawCard';
	$Client_Directives_AcgEffectTestDrawSpaceDirective.name$1 = 'acgEffectTestDrawSpace';
	$Client_Directives_AcgTestDrawAreaDirective.name$1 = 'acgTestDrawArea';
	$Client_Directives_AcgTestDrawTextDirective.name$1 = 'acgTestDrawText';
	$Client_Directives_ForNextDirective.name$1 = 'forNext';
	$Client_Directives_ForNextDirective.$forCounter = 0;
	$Client_Directives_SpecialNgRepeatDirective.name$1 = 'specialNgRepeat';
	$Client_Directives_AcgSpacesDirective.name$1 = 'acgSpaces';
	$Client_Filters_RoundFilter.name$1 = 'round';
	$Client_BuildAngular.$scopeName = '$scope';
	$Client_BuildAngular.$rootScopeName = '$rootScope';
	$Client_BuildAngular.$compileName = '$compile';
	$Client_BuildAngular.$http = '$http';
	$Client_BuildAngular.$templateCache = '$templateCache';
	$Client_BuildSite.instance = null;
})();
