
(function() {
	////////////////////////////////////////////////////////////////////////////////
	// Client.BuildAngular
	var $Client_BuildAngular = function() {
	};
	$Client_BuildAngular.setup = function(gatewayServer) {
		angular.module('acg', ['ui.utils']).config(['$routeProvider', $Client_BuildAngular.$buildRouteProvider]).config(['$httpProvider', $Client_BuildAngular.$buildHttpProvider]).value('gatewayServerURL', gatewayServer).controller('MinimizeController', ['$scope', 'UIManager', function(scope, uiManager) {
			return new $Client_Controllers_$MinimizeController(scope, uiManager);
		}]).controller('GameController', ['$scope', 'effectWatcher', 'clientGameManager', 'gameContentManager', 'effectManager', function(scope1, effectWatcher, clientGameManagerService, gameContentManager, effectManager) {
			return new $Client_Controllers_GameController(scope1, effectWatcher, clientGameManagerService, gameContentManager, effectManager);
		}]).controller('ListEffectsController', ['$scope', 'editEffects', 'effectWatcher', 'effectManager', function(scope2, editEffects, effectWatcher1, effectmanager) {
			return new $Client_Controllers_$ListEffectsController(scope2, editEffects, effectWatcher1, effectmanager);
		}]).controller('EffectEditorController', ['$scope', 'editEffects', function(scope3, editEffects1) {
			return new $Client_Controllers_$EffectEditorController(scope3, editEffects1);
		}]).controller('LoginController', ['$scope', 'UIManager', 'clientSiteManager', function(scope4, uiManager1, clientSiteManagerService) {
			return new $Client_Controllers_$LoginController(scope4, uiManager1, clientSiteManagerService);
		}]).controller('QuestionController', ['$scope', 'UIManager', 'clientGameManager', function(scope5, uiManager2, clientGameManagerService1) {
			return new $Client_Controllers_$QuestionController(scope5, uiManager2, clientGameManagerService1);
		}]).controller('HomeController', ['$scope', 'UIManager', 'clientSiteManager', function(scope6, uiManager3, clientSiteManagerService1) {
			return new $Client_Controllers_$HomeController(scope6, uiManager3, clientSiteManagerService1);
		}]).controller('ActiveLobbyController', ['$scope', 'UIManager', 'clientSiteManager', 'clientChatManager', '$compile', function(scope7, uiManager4, clientSiteManagerService2, clientChatManagerService, compile) {
			return new $Client_Controllers_$ActiveLobbyController(scope7, uiManager4, clientSiteManagerService2, clientChatManagerService, compile);
		}]).controller('CreateRoomController', ['$scope', 'UIManager', function(scope8, uiManager5) {
			return new $Client_Controllers_$CreateRoomController(scope8, uiManager5);
		}]).service('UIManager', ['clientGameManager', function(clientGameManagerService2) {
			return new $Client_Services_UIManagerService(clientGameManagerService2);
		}]).service('editEffects', [function() {
			return new $Client_Services_$EditEffectService();
		}]).service('effectWatcher', [function() {
			return new $Client_Services_EffectWatcherService();
		}]).service('effectManager', [function() {
			return new $Client_Services_EffectManagerService();
		}]).service('clientChatManager', ['gateway', function(gatewayService) {
			return new $Client_Services_ClientChatManagerService(gatewayService);
		}]).service('clientGameManager', ['gateway', function(gatewayService1) {
			return new $Client_Services_ClientGameManagerService(gatewayService1);
		}]).service('clientDebugManager', ['gateway', function(gatewayService2) {
			return new $Client_Services_ClientDebugManagerService(gatewayService2);
		}]).service('clientSiteManager', ['gateway', function(gatewayService3) {
			return new $Client_Services_ClientSiteManagerService(gatewayService3);
		}]).service('gateway', ['gatewayServerURL', function(serverUrl) {
			return new $Client_Services_GatewayService(serverUrl);
		}]).service('gameContentManager', [function() {
			return new $Client_Services_GameContentManager();
		}]).directive('draggable', [function() {
			return new $Client_Directives_DraggableDirective();
		}]).directive('floatingWindow', ['UIManager', function(uiManagerService) {
			return new $Client_Directives_FloatingWindowDirective(uiManagerService);
		}]).directive('fancyList', [function() {
			return new $Client_Directives_FancyListDirective();
		}]).directive('chatBox', [function() {
			return new $Client_Directives_ChatBoxDirective();
		}]).directive('property', [function() {
			return new $Client_Directives_PropertyDirective();
		}]).directive('acgDrawCard', ['effectManager', function(effectManager1) {
			return new $Client_Directives_AcgDrawCardDirective(effectManager1);
		}]).directive('acgDrawSpace', [function() {
			return new $Client_Directives_AcgDrawSpaceDirective();
		}]).directive('acgSpaces', ['$compile', 'gameContentManager', function(compile1, gameContentManager1) {
			return new $Client_Directives_AcgSpacesDirective(compile1, gameContentManager1);
		}]);
	};
	$Client_BuildAngular.$buildRouteProvider = function(provider) {
		// provider.When("/gameUI", new Route() {Controller = "GameController", TemplateURL = "http://content.anycardgame.com/partials/gameUI.html"}).Otherwise(new OtherwiseRoute() {RedirectTo = "/gameUI"});
	};
	$Client_BuildAngular.$buildHttpProvider = function(httpProvider) {
		httpProvider.defaults.useXDomain = true;
		delete httpProvider.defaults.headers.common['X-Requested-With'];
	};
	////////////////////////////////////////////////////////////////////////////////
	// Client.BuildSite
	var $Client_BuildSite = function(gatewayServerAddress) {
		this.$gatewayServerAddress = null;
		this.shuffUIManager = null;
		$Client_BuildSite.instance = this;
		this.$gatewayServerAddress = gatewayServerAddress;
		$Client_BuildSite.$loadJunk(CommonLibraries.IPs.webIP, ss.mkdel(this, this.$ready));
	};
	$Client_BuildSite.prototype = {
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
	};
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
			scriptLoader.load([url + 'lib/codemirror/mode/javascript/javascript.js', url + 'lib/WorkerConsole.js', url + 'lib/FunctionWorker.js', url + 'lib/Stats.js', url + 'lib/keyboardjs.js', url + 'lib/Dialog.js'], false, stepThree);
		};
		scriptLoader.load([url + 'lib/linq.js', url + 'lib/tween.js', url + 'lib/socket.io.js', url + 'lib/codemirror/lib/codemirror.js'], false, stepTwo);
	};
	////////////////////////////////////////////////////////////////////////////////
	// Client.Controllers.ActiveLobbyController
	var $Client_Controllers_$ActiveLobbyController = function(scope, uiManager, clientSiteManagerService, clientChatManagerService, compile) {
		this.$myScope = null;
		this.$myUIManager = null;
		this.$myClientSiteManagerService = null;
		this.$myClientChatManagerService = null;
		this.$myScope = scope;
		this.$myUIManager = uiManager;
		this.$myClientSiteManagerService = clientSiteManagerService;
		this.$myClientChatManagerService = clientChatManagerService;
		this.$myScope.model = $Client_Scope_ActiveLobbyModel.$ctor();
		this.$myScope.model.chatLines = [];
		this.$myScope.visible = false;
		this.$myScope.model.windowClosed = ss.delegateCombine(this.$myScope.model.windowClosed, ss.mkdel(this, function() {
			this.$myScope.swingAway(4, false, null);
			this.$myClientSiteManagerService.leaveRoom({ room: this.$myScope.model.room });
			uiManager.roomLeft();
		}));
		uiManager.onRoomJoined = ss.mkdel(this, function(room) {
			this.$myScope.visible = true;
			this.$myScope.swingAway(4, true, null);
			this.$myScope.model.room = room;
			this.$populateGameRoom(room);
			this.$myScope.swingBack(null);
			this.$myScope.$apply();
		});
		this.$myScope.model.startGame = ss.delegateCombine(this.$myScope.model.startGame, ss.mkdel(this, function() {
			var theScope = this.$myScope;
			compile($('<div ng-include src="\'http://content.anycardgame.com/partials/gameUI.html\'"></div>'))(theScope).appendTo(window.document.body);
			//                                           uiManager.GameManager.StartGame();
			clientSiteManagerService.startGame({});
			//UIWindow.Height = 200;
		}));
		this.$myScope.model.sendChatMessage = ss.delegateCombine(this.$myScope.model.sendChatMessage, ss.mkdel(this, function() {
			if (this.$myScope.model.currentChatMessage.trim() === '') {
				return;
			}
			this.$myClientChatManagerService.sendChatMessage({ message: this.$myScope.model.currentChatMessage.trim() });
			this.$myScope.model.currentChatMessage = '';
		}));
		this.$myClientSiteManagerService.add_onGetRoomInfoReceived(ss.mkdel(this, this.$getRoomInfo));
		this.$myClientChatManagerService.add_onGetChatLines(ss.mkdel(this, this.$getChatLines));
		this.$myClientChatManagerService.add_onGetChatInfo(ss.mkdel(this, this.$getChatInfo));
	};
	$Client_Controllers_$ActiveLobbyController.prototype = {
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
			ss.arrayAddRange(this.$myScope.model.chatLines, roomDataData.messages);
			this.$myScope.$apply();
		},
		$populateGameRoom: function(roomModel) {
		}
	};
	////////////////////////////////////////////////////////////////////////////////
	// Client.Controllers.CreateRoomController
	var $Client_Controllers_$CreateRoomController = function(scope, uiManager) {
		this.$myScope = null;
		this.$myUIManager = null;
		this.$myScope = scope;
		this.$myScope.visible = false;
		this.$myUIManager = uiManager;
		this.$myScope.model = $Client_Scope_CreateRoomModel.$ctor();
		this.$myScope.model.windowClosed = ss.mkdel(this, function() {
			this.$myScope.swingAway(2, false, null);
			this.$myScope.visible = false;
		});
		this.$myScope.model.createRoom = ss.mkdel(this, this.$createRoomFn);
		uiManager.openCreateRoomDialog = ss.delegateCombine(uiManager.openCreateRoomDialog, ss.mkdel(this, function() {
			this.$myScope.visible = true;
			this.$myScope.swingAway(6, true, null);
			this.$myScope.swingBack(null);
		}));
	};
	$Client_Controllers_$CreateRoomController.prototype = {
		$createRoomFn: function() {
			this.$myScope.swingAway(2, false, null);
			this.$myUIManager.createRoom(this.$myScope.model.roomName);
		}
	};
	////////////////////////////////////////////////////////////////////////////////
	// Client.Controllers.EffectEditorController
	var $Client_Controllers_$EffectEditorController = function(scope, editEffects) {
		this.$myScope = null;
		this.$myEditEffects = null;
		this.$myScope = scope;
		this.$myEditEffects = editEffects;
		editEffects.popOpenEffect = ss.delegateCombine(editEffects.popOpenEffect, ss.mkdel(this, this.$popOpenEffectFn));
	};
	$Client_Controllers_$EffectEditorController.prototype = {
		$popOpenEffectFn: function(effect) {
			this.$myScope.effect = effect;
		}
	};
	////////////////////////////////////////////////////////////////////////////////
	// Client.Controllers.HomeController
	var $Client_Controllers_$HomeController = function(scope, uiManager, clientSiteManagerService) {
		this.$myScope = null;
		this.$myUIManager = null;
		this.$myClientSiteManagerService = null;
		this.$myScope = scope;
		this.$myUIManager = uiManager;
		this.$myClientSiteManagerService = clientSiteManagerService;
		this.$myScope.model = $Client_Scope_HomeModel.$ctor();
		this.$myUIManager.userLoggedIn = ss.delegateCombine(this.$myUIManager.userLoggedIn, ss.mkdel(this, this.$myUIManager_UserLoggedIn));
		this.$myScope.visible = false;
		scope.model.gameTypeSelected = ss.delegateCombine(scope.model.gameTypeSelected, ss.mkdel(this, this.$gameTypeSelectedFn));
		scope.model.roomSelected = ss.delegateCombine(scope.model.roomSelected, ss.mkdel(this, this.$roomSelectedFn));
		scope.model.createRoom = ss.delegateCombine(scope.model.createRoom, ss.mkdel(this, this.$createRoomFn));
		scope.model.joinRoom = ss.delegateCombine(scope.model.joinRoom, ss.mkdel(this, this.$joinRoomFn));
		scope.$watch(ss.mkdel(this, function(_scope) {
			return this.$myScope.model.selectedGameType;
		}), function() {
			scope.model.gameTypeSelected();
		});
		//  scope.watch<HomeScope>((_scope) => { return myScope.Model.SelectedRoom; },
		//  () =>
		//  {
		//  scope.Model.RoomSelected();
		//  });
		this.$myUIManager.roomLeft = ss.delegateCombine(this.$myUIManager.roomLeft, ss.mkdel(this, function() {
			this.$myScope.swingBack(null);
		}));
		this.$myClientSiteManagerService.add_onGetGameTypesReceived(ss.mkdel(this, this.$populateGames));
		this.$myClientSiteManagerService.add_onGetRoomsReceived(ss.mkdel(this, this.$populateRooms));
		this.$myClientSiteManagerService.add_onRoomJoined(ss.mkdel(this, this.$roomJoined));
		this.$myClientSiteManagerService.add_onGetRoomInfoReceived(ss.mkdel(this, this.$getRoomInfoReceived));
	};
	$Client_Controllers_$HomeController.prototype = {
		$joinRoomFn: function() {
			this.$myClientSiteManagerService.joinRoom({ gameType: this.$myScope.model.selectedGameType.name, roomName: this.$myScope.model.selectedRoom.roomName });
		},
		$createRoomFn: function() {
			var action = null;
			action = ss.mkdel(this, function(roomName) {
				this.$myClientSiteManagerService.createRoom({ gameType: this.$myScope.model.selectedGameType.name, roomName: roomName });
				this.$myUIManager.createRoom = ss.delegateRemove(this.$myUIManager.createRoom, action);
			});
			this.$myUIManager.createRoom = ss.delegateCombine(this.$myUIManager.createRoom, action);
			this.$myUIManager.openCreateRoomDialog();
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
			this.$myScope.swingAway(0, false, null);
			this.$myUIManager.onRoomJoined(o.room);
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
		},
		$myUIManager_UserLoggedIn: function() {
			this.$myScope.visible = true;
			this.$myScope.swingAway(6, true, null);
			this.$myScope.swingBack(null);
			this.$myScope.$apply();
			this.$myScope.model.user = this.$myUIManager.clientInfo.loggedInUser;
			this.$myClientSiteManagerService.getGameTypes();
		}
	};
	////////////////////////////////////////////////////////////////////////////////
	// Client.Controllers.ListEffectsController
	var $Client_Controllers_$ListEffectsController = function(scope, editEffects, effectWatcher, effectManager) {
		this.$myScope = null;
		this.$myEditEffects = null;
		this.$myEffectWatcher = null;
		this.$myScope = scope;
		this.$myEditEffects = editEffects;
		this.$myEffectWatcher = effectWatcher;
		scope.effects = effectManager.effects = [];
		var effectTypes = [];
		ss.add(effectTypes, 'bend');
		ss.add(effectTypes, 'highlight');
		ss.add(effectTypes, 'rotate');
		ss.add(effectTypes, 'styleProperty');
		scope.effectTypes = effectTypes;
		scope.selectedEffectType = 'bend';
		scope.newEffect = '';
		scope.addEffect = ss.mkdel(this, this.$addEffectFn);
		scope.effectClick = ss.mkdel(this, this.$effectClickFn);
		scope.enableEffect = ss.mkdel(this, this.$enableEffectFn);
		ss.add(this.$myScope.effects, $Client_Controllers_$ListEffectsController.$makeEffect('bend', 'bend'));
	};
	$Client_Controllers_$ListEffectsController.prototype = {
		$enableEffectFn: function(effect) {
			this.$myEffectWatcher.applyEffect(effect);
		},
		$addEffectFn: function() {
			ss.add(this.$myScope.effects, $Client_Controllers_$ListEffectsController.$makeEffect(this.$myScope.newEffect, this.$myScope.selectedEffectType));
			this.$myScope.selectedEffectType = 'bend';
			this.$myScope.newEffect = '';
		},
		$effectClickFn: function(effect) {
			this.$myEditEffects.popOpenEffect(effect);
		}
	};
	$Client_Controllers_$ListEffectsController.$makeEffect = function(effectName, type) {
		var $t1 = new Models.SiteManagerModels.Game.GameEffectModel();
		$t1.name = effectName;
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
	// Client.Controllers.LoginController
	var $Client_Controllers_$LoginController = function(scope, uiManager, clientSiteManagerService) {
		this.$myScope = null;
		this.$myUIManager = null;
		this.$myclientSiteManagerService = null;
		this.$myScope = scope;
		this.$myScope.visible = true;
		this.$myUIManager = uiManager;
		this.$myclientSiteManagerService = clientSiteManagerService;
		this.$myScope.model = $Client_Scope_LoginModel.$ctor();
		this.$myScope.model.windowClosed = function() {
			window.alert('woooo');
		};
		this.$myScope.model.loginAccount = ss.mkdel(this, this.$loginAccountFn);
		this.$myScope.model.createAccount = ss.mkdel(this, this.$createAccountFn);
		this.$myclientSiteManagerService.add_onLogin(ss.mkdel(this, function(user, data) {
			uiManager.clientInfo.loggedInUser = user;
			this.$myUIManager.userLoggedIn();
			scope.swingAway(7, false, null);
		}));
	};
	$Client_Controllers_$LoginController.prototype = {
		$createAccountFn: function() {
			window.alert('Created! hahahJK');
		},
		$loginAccountFn: function() {
			this.$myclientSiteManagerService.login(this.$myScope.model.username, this.$myScope.model.password);
		}
	};
	////////////////////////////////////////////////////////////////////////////////
	// Client.Controllers.MinimizeController
	var $Client_Controllers_$MinimizeController = function(scope, uiManager) {
		this.$myScope = null;
		this.$myUIManager = null;
		this.$myScope = scope;
		this.$myUIManager = uiManager;
		scope.items = [];
		uiManager.set_onMinimize(function(floatingWindowBaseScope) {
			ss.add(scope.items, floatingWindowBaseScope);
		});
		scope.open = ss.mkdel(this, this.$openFn);
		scope.remove = ss.mkdel(this, this.$removeFn);
	};
	$Client_Controllers_$MinimizeController.prototype = {
		$removeFn: function(arg) {
			arg.close();
			ss.remove(this.$myScope.items, arg);
		},
		$openFn: function(arg) {
			arg.restore();
			ss.remove(this.$myScope.items, arg);
		}
	};
	////////////////////////////////////////////////////////////////////////////////
	// Client.Controllers.QuestionController
	var $Client_Controllers_$QuestionController = function(scope, uiManager, clientGameManagerService) {
		this.$myScope = null;
		this.$myUIManager = null;
		this.$myClientGameManagerService = null;
		this.$myScope = scope;
		this.$myUIManager = uiManager;
		this.$myClientGameManagerService = clientGameManagerService;
		this.$myScope.model = $Client_Scope_QuestionModel.$ctor();
		this.$myScope.model.windowClosed = function() {
			window.alert('woooo');
		};
		this.$myScope.model.answerQuestion = ss.mkdel(this, this.$answerQuestionFn);
		this.$myScope.visible = false;
		this.$myClientGameManagerService.add_onAskQuestion(ss.mkdel(this, function(user, gameSendAnswerModel) {
			window.setTimeout(ss.mkdel(this, function() {
				this.$myScope.visible = true;
				this.$myScope.swingAway(0, true, null);
				this.$myScope.swingBack(null);
				this.$onQuestionAskedFn(gameSendAnswerModel);
			}), 500);
		}));
	};
	$Client_Controllers_$QuestionController.prototype = {
		$onQuestionAskedFn: function(arg) {
			this.$myScope.model.question = arg.question;
			this.$myScope.model.answers = arg.answers;
			this.$myScope.model.selectedAnswer = arg.answers[0];
			this.$myScope.$apply();
		},
		$answerQuestionFn: function() {
			this.$myScope.swingAway(4, false, ss.mkdel(this, function() {
				this.$myClientGameManagerService.answerQuestion({ answer: ss.indexOf(this.$myScope.model.answers, this.$myScope.model.selectedAnswer) });
			}));
		}
	};
	////////////////////////////////////////////////////////////////////////////////
	// Client.Controllers.GameController
	var $Client_Controllers_GameController = function(scope, effectWatcher, clientGameManagerService, gameContentManager, effectManager) {
		this.$scope = null;
		this.$myEffectWatcher = null;
		this.$myClientGameManagerService = null;
		this.$myGameContentManager = null;
		this.$myEffectManager = null;
		this.$scope = scope;
		this.$myEffectWatcher = effectWatcher;
		this.$myClientGameManagerService = clientGameManagerService;
		this.$myGameContentManager = gameContentManager;
		this.$myEffectManager = effectManager;
		effectManager.effects = [];
		ss.add(effectManager.effects, $Client_Controllers_$ListEffectsController.$makeEffect('bend', 'bend'));
		//     myClientGameManagerService.OnAskQuestion += (user, gameSendAnswerModel) => {
		//     PageHandler.QuestionUI.Load(gameSendAnswerModel);
		//     //alert(JSON.stringify(data));
		//     PageHandler.TimeTracker.EndTime = new DateTime();
		//     var time = PageHandler.TimeTracker.EndTime - PageHandler.TimeTracker.StartTime;
		//     PageHandler.  DebugUI.lblHowFast.Text = ( "how long: " + time );
		//     };
		var addRule = (function(style) {
			var document = eval('window.document');
			var sheet = document.head.appendChild(style).sheet;
			return function(selector, css) {
				var propText = Object.keys(css).map(function(p) {
					return p + ':' + css[p];
				}).join(';');
				sheet.insertRule(selector + '{' + propText + '}', sheet.cssRules.length);
			};
		})(document.createElement('style'));
		this.$myClientGameManagerService.add_onUpdateState(ss.mkdel(this, function(user, update) {
			var data = JSON.parse((new Compressor()).DecompressText(update));
			var create = false;
			if (ss.isNullOrUndefined(scope.mainArea)) {
				create = true;
			}
			scope.mainArea = data;
			if (create) {
				scope.scale = new CommonLibraries.Point(ss.Int32.div($(window).width(), scope.mainArea.size.width) * 0.9, ss.Int32.div($(window).height() - 250, scope.mainArea.size.height) * 0.9);
				for (var $t1 = 0; $t1 < scope.mainArea.spaces.length; $t1++) {
					var space = scope.mainArea.spaces[$t1];
					addRule('.space' + space.name, {});
					addRule('.space' + space.name + '::before', {});
					addRule('.space' + space.name + '::after', {});
					for (var $t2 = 0; $t2 < space.pile.cards.length; $t2++) {
						var card = space.pile.cards[$t2];
						card.appearance.effectNames = [];
						if (ss.startsWithString(space.name, 'User')) {
							ss.add(card.appearance.effectNames, 'bend');
						}
						addRule('.card' + card.type + '-' + card.value + '', {});
						addRule('.card' + card.type + '-' + card.value + '::before', {});
						addRule('.card' + card.type + '-' + card.value + '::after', {});
					}
				}
			}
			scope.$apply();
			this.$myGameContentManager.redraw();
		}));
		this.$myClientGameManagerService.add_onGameStarted(function(user1, room) {
			//alert(JSON.stringify(data));
		});
		this.$myClientGameManagerService.add_onGameOver(function(user2, room1) {
			//alert(JSON.stringify(data));
		});
		scope.mainArea = null;
		scope.selectedCard = null;
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
		effectWatcher.applyEffect = ss.delegateCombine(effectWatcher.applyEffect, function(effect) {
			if (ss.isNullOrUndefined(scope.selectedCard)) {
				return;
			}
			ss.add(scope.selectedCard.appearance.effectNames, effect.name);
		});
	};
	////////////////////////////////////////////////////////////////////////////////
	// Client.Directives.AcgDrawCardDirective
	var $Client_Directives_AcgDrawCardDirective = function(effectManager) {
		this.$myEffectManager = null;
		this.link = null;
		this.$myEffectManager = effectManager;
		this.link = ss.mkdel(this, this.$linkFn);
	};
	$Client_Directives_AcgDrawCardDirective.prototype = {
		$linkFn: function(scope, element, attrs) {
			element.attr('style', 'width:71px; height:96px;');
			element.attr('class', 'card ' + ss.formatString('card{0}-{1}', scope.card.type, scope.card.value));
			scope.$watch('$parent.$parent.selectedCard', function() {
				if (ss.isNullOrUndefined(scope.$parent.$parent.selectedCard) || !ss.referenceEquals(scope.$parent.$parent.selectedCard, scope.card)) {
					scope.cardStyle.border = undefined;
				}
				else {
					scope.cardStyle.border = 'solid 4px green';
				}
			});
			scope.cardClick = function() {
				if (ss.referenceEquals(scope.$parent.$parent.selectedCard, scope.card)) {
					scope.$parent.$parent.selectedCard = null;
				}
				else {
					scope.$parent.$parent.selectedCard = scope.card;
				}
			};
			var redrawCard = ss.mkdel(this, function() {
				var scale = scope.$parent.$parent['$parent'].scale;
				var spaceScale = { width: scope.space.width / (scope.space.pile.cards.length - 1), height: scope.space.height / (scope.space.pile.cards.length - 1) };
				var vertical = scope.space.vertical;
				var cardIndex = ss.indexOf(scope.space.pile.cards, scope.card);
				scope.cardStyle = {};
				var xx = 0;
				var yy = 0;
				switch (scope.space.resizeType) {
					case 1: {
						if (vertical) {
							yy = (scope.card.value + 1) / 13 * scope.space.height * scale.y;
						}
						else {
							xx = (scope.card.value + 1) / 13 * scope.space.width * scale.x;
						}
						break;
					}
					case 0: {
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
				element.rotate(scope.$parent.space.appearance.innerStyle.rotate);
				scope.cardStyle.content = '""';
				if (ss.startsWithString(scope.space.name, 'User')) {
					if (scope.card.appearance.effectNames.length === 0) {
						ss.add(scope.card.appearance.effectNames, 'bend'.toString());
					}
				}
				else {
					for (var index = scope.card.appearance.effectNames.length - 1; index >= 0; index--) {
						var cardGameAppearanceEffect = scope.card.appearance.effectNames[index];
						if (ss.referenceEquals(cardGameAppearanceEffect, 'bend'.toString())) {
							ss.remove(scope.card.appearance.effectNames, cardGameAppearanceEffect);
						}
					}
				}
				for (var $t1 = 0; $t1 < scope.card.appearance.effectNames.length; $t1++) {
					var effect = scope.card.appearance.effectNames[$t1];
					var grabbedEffect = this.$myEffectManager.getEffectByName(effect);
					if (ss.isNullOrUndefined(grabbedEffect)) {
						continue;
					}
					switch (grabbedEffect.type) {
						case 'highlight': {
							var $t2 = global.CardGameEffectHighlightOptions.$ctor();
							$t2.color = grabbedEffect.getPropertyByName(String).call(grabbedEffect, 'color');
							$t2.radius = grabbedEffect.getPropertyByName(Number).call(grabbedEffect, 'radius');
							$t2.rotate = grabbedEffect.getPropertyByName(Number).call(grabbedEffect, 'rotate');
							$t2.offsetX = grabbedEffect.getPropertyByName(Number).call(grabbedEffect, 'offsetx');
							$t2.offsetY = grabbedEffect.getPropertyByName(Number).call(grabbedEffect, 'offsety');
							$t2.opacity = grabbedEffect.getPropertyByName(Number).call(grabbedEffect, 'opacity');
							var _effect = new global.Effect$Highlight($t2);
							var beforeStyle = {};
							beforeStyle['display'] = 'block';
							beforeStyle['position'] = 'relative';
							beforeStyle['z-index'] = '-1';
							beforeStyle['width'] = '100%';
							beforeStyle['height'] = '100%';
							beforeStyle['left'] = -_effect.radius + _effect.offsetX + 'px';
							beforeStyle['top'] = -_effect.radius + _effect.offsetY + 'px';
							beforeStyle['padding'] = _effect.radius + 'px';
							beforeStyle['border-radius'] = '5px';
							beforeStyle['box-shadow'] = 'rgb(44, 44, 44) 3px 3px 2px';
							var color = $Client_Directives_AcgDrawCardDirective.hextorgb(_effect.color);
							beforeStyle['background-color'] = ss.formatString('rgba({0}, {1}, {2}, {3})', color.R, color.G, color.B, _effect.opacity);
							beforeStyle['border'] = '2px solid black';
							$Client_Directives_AcgDrawCardDirective.$changeCSS('card' + scope.card.type + '-' + scope.card.value + '::before', beforeStyle);
							break;
						}
						case 'rotate': {
							break;
						}
						case 'bend': {
							var $t3 = global.CardGameEffectBendOptions.$ctor();
							$t3.degrees = grabbedEffect.getPropertyByName(Number).call(grabbedEffect, 'degrees');
							var bEffect = new global.Effect$Bend($t3);
							var rotate = ss.replaceAllString(element.css('transform'), ' scale(1, 1)', '');
							element.rotate(-bEffect.degrees / 2 + bEffect.degrees / (scope.space.pile.cards.length - 1) * cardIndex + $Client_Directives_AcgDrawCardDirective.noTransformRotate(rotate));
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
			});
			var keys = {};
			keys['content'] = 'url(\'http://content.anycardgame.com/assets/cards/' + (100 + (scope.card.value + 1) + scope.card.type * 13) + '.gif\')';
			$Client_Directives_AcgDrawCardDirective.$changeCSS('card' + scope.card.type + '-' + scope.card.value + '::before', keys);
			//   redrawCard();
			//
			//                          
			// 
			//            scope.watch("$parent.space", () =>
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
			//            scope.watch("card.appearance.effectNames.join()", () =>
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
			//scope.watch<CardScope>((_scope) =>
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
	};
	$Client_Directives_AcgDrawCardDirective.hextorgb = function(hex) {
		var result = (new RegExp('^#?([a-f\\d]{2})([a-f\\d]{2})([a-f\\d]{2})$')).exec(hex);
		return (ss.isValue(result) ? { R: parseInt(result[1], 16), G: parseInt(result[2], 16), B: parseInt(result[3], 16) } : null);
	};
	$Client_Directives_AcgDrawCardDirective.transformRotate = function(ar) {
		return ss.formatString('rotate({0}deg)', ar);
	};
	$Client_Directives_AcgDrawCardDirective.noTransformRotate = function(ar) {
		if (ar === '') {
			return 0;
		}
		return parseFloat(ss.replaceAllString(ss.replaceAllString(ar, 'rotate(', ''), 'deg)', ''));
		//todo regex??
	};
	$Client_Directives_AcgDrawCardDirective.$changeCSS = function(myClass, values) {
		myClass = '.' + myClass;
		var CSSRules = '';
		var document = eval('window.document');
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
				if (ss.referenceEquals(document.styleSheets[a][CSSRules][i].selectorText, myClass)) {
					var $t1 = new ss.ObjectEnumerator(values);
					try {
						while ($t1.moveNext()) {
							var m = $t1.current();
							document.styleSheets[a][CSSRules][i].style[m.key] = m.value;
						}
					}
					finally {
						$t1.dispose();
					}
				}
			}
		}
	};
	////////////////////////////////////////////////////////////////////////////////
	// Client.Directives.AcgDrawSpaceDirective
	var $Client_Directives_AcgDrawSpaceDirective = function() {
		this.link = null;
		this.link = ss.mkdel(this, this.$linkFn);
	};
	$Client_Directives_AcgDrawSpaceDirective.prototype = {
		$linkFn: function(scope, element, attrs) {
			var scale = scope.$parent['$parent'].scale;
			element.attr('class', 'space ' + ss.formatString('space{0}', scope.space.name));
			element.resizable({
				grid: [scale.x, scale.y],
				minHeight: -1,
				minWidth: -1,
				handles: 'n, e, s, w,nw,sw,ne,se',
				resize: function(ev, ele) {
					scope.space.width = ele.size.width / scale.x;
					scope.space.height = ele.size.height / scale.y;
					scope.$apply();
				}
			});
			element.draggable({
				cursor: 'crosshair',
				grid: [scale.x, scale.y],
				drag: function(ev1, ele1) {
					scope.space.x = ele1.position.left / scale.x;
					scope.space.y = ele1.position.top / scale.y;
					scope.$apply();
				}
			});
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
			$Client_Directives_AcgDrawSpaceDirective.$changeCSS('space' + scope.space.name + '::before', beforeStyle);
			scope.spaceStyle = {};
			scope.spaceStyle.position = 'absolute';
			scope.spaceStyle.left = scope.space.x * scale.x;
			scope.spaceStyle.top = scope.space.y * scale.y;
			scope.spaceStyle.width = scope.space.width * scale.x;
			scope.spaceStyle.height = scope.space.height * scale.y;
			scope.spaceStyle.backgroundColor = 'red';
			for (var $t1 = 0; $t1 < scope.space.appearance.effects.length; $t1++) {
				var effect = scope.space.appearance.effects[$t1];
				switch (effect.type) {
					case 0: {
						var hEffect = effect;
						scope.spaceStyle.padding = ss.formatString('{0} {0} {0} {0}', hEffect.radius);
						scope.spaceStyle.backgroundColor = hEffect.color;
						scope.spaceStyle.border = 'solid 2px black';
						scope.spaceStyle.borderRadius = 15;
						scope.spaceStyle.boxShadow = '4px 4px 2px #333';
						break;
					}
					case 1: {
						window.alert(effect.type.toString());
						break;
					}
					case 2: {
						var bEffect = effect;
						//rotate
						break;
					}
					case 3: {
						window.alert(effect.type.toString());
						break;
					}
					case 4: {
						window.alert(effect.type.toString());
						break;
					}
					default: {
						break;
					}
				}
			}
		}
	};
	$Client_Directives_AcgDrawSpaceDirective.transformRotate = function(ar) {
		return ss.formatString('rotate({0}deg)', ar);
	};
	$Client_Directives_AcgDrawSpaceDirective.$changeCSS = function(myClass, values) {
		myClass = '.' + myClass;
		var CSSRules = '';
		var document = eval('window.document');
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
				if (ss.referenceEquals(document.styleSheets[a][CSSRules][i].selectorText, myClass)) {
					var $t1 = new ss.ObjectEnumerator(values);
					try {
						while ($t1.moveNext()) {
							var m = $t1.current();
							document.styleSheets[a][CSSRules][i].style[m.key] = m.value;
						}
					}
					finally {
						$t1.dispose();
					}
				}
			}
		}
	};
	////////////////////////////////////////////////////////////////////////////////
	// Client.Directives.AcgSpacesDirective
	var $Client_Directives_AcgSpacesDirective = function(compile, gameContentManager) {
		this.$myCompile = null;
		this.$myGameContentManager = null;
		this.link = null;
		this.template = null;
		this.restrict = null;
		this.replace = false;
		this.transclude = false;
		this.scope = null;
		this.$myCompile = compile;
		this.$myGameContentManager = gameContentManager;
		this.restrict = 'EA';
		this.template = '\r\n    <div  >\r\n        \r\n    </div>';
		this.replace = true;
		this.transclude = false;
		this.scope = { spaces: '=acgSpaces' };
		this.link = ss.mkdel(this, this.$linkFn);
	};
	$Client_Directives_AcgSpacesDirective.prototype = {
		$linkFn: function(scope, element, attrs) {
			var updater = ss.mkdel(this, function() {
				element.children().each(function(ind, e) {
					angular.element(e).scope().$destroy();
				});
				element.empty();
				var content = '<div>\r\n    <div acg-draw-space ng-style=\'spaceStyle\'>\r\n        <div ng-repeat=\'card in space.pile.cards\' acg-draw-card ng-style=\'cardStyle\' ng-click=\'cardClick()\'>\r\n        </div>\r\n    </div> \r\n</';
				angular.forEach(scope.spaces, ss.mkdel(this, function(space) {
					var e1 = angular.element(content);
					var _scope = scope['$new']();
					_scope.space = space;
					var elk = this.$myCompile(e1.contents())(_scope);
					element.append(elk);
				}));
			});
			//scope["$watch"]("spaces",updater);
			this.$myGameContentManager.redraw = ss.delegateCombine(this.$myGameContentManager.redraw, function() {
				console.log('updatinggagaga');
				updater();
				scope['$apply']();
			});
			updater();
		}
	};
	////////////////////////////////////////////////////////////////////////////////
	// Client.Directives.ChatBoxDirective
	var $Client_Directives_ChatBoxDirective = function() {
		this.link = null;
		this.templateUrl = null;
		this.restrict = null;
		this.replace = false;
		this.transclude = false;
		this.scope = null;
		this.restrict = 'EA';
		this.templateUrl = 'http://content.anycardgame.com/partials/chatBox.html';
		this.replace = true;
		this.scope = { contents: '=' };
		this.link = ss.mkdel(this, this.$linkFn);
	};
	$Client_Directives_ChatBoxDirective.prototype = {
		$linkFn: function(scope, element, attr) {
		}
	};
	////////////////////////////////////////////////////////////////////////////////
	// Client.Directives.DraggableDirective
	var $Client_Directives_DraggableDirective = function() {
		this.link = null;
		this.link = ss.mkdel(this, this.$linkFn);
	};
	$Client_Directives_DraggableDirective.prototype = {
		$linkFn: function(scope, element, attrs) {
			element.draggable({ cancel: '.floating-window-inner' });
		}
	};
	////////////////////////////////////////////////////////////////////////////////
	// Client.Directives.FancyListDirective
	var $Client_Directives_FancyListDirective = function() {
		this.link = null;
		this.templateUrl = null;
		this.restrict = null;
		this.replace = false;
		this.transclude = false;
		this.scope = null;
		this.restrict = 'EA';
		this.templateUrl = 'http://content.anycardgame.com/partials/fancyList.html';
		this.replace = true;
		this.transclude = true;
		this.scope = { items: '=', bind: '=' };
		this.link = ss.mkdel(this, this.$linkFn);
	};
	$Client_Directives_FancyListDirective.prototype = {
		$linkFn: function(scope, element, attr) {
			scope.itemClick = function(item) {
				scope.bind = item;
			};
			scope.currentStyle = function(item1) {
				return { backgroundColor: (ss.referenceEquals(item1, scope.bind) ? 'blue' : 'white') };
			};
		}
	};
	////////////////////////////////////////////////////////////////////////////////
	// Client.Directives.FloatingWindowDirective
	var $Client_Directives_FloatingWindowDirective = function(uiManagerService) {
		this.$myUIManagerService = null;
		this.link = null;
		this.templateUrl = null;
		this.restrict = null;
		this.replace = false;
		this.transclude = false;
		this.scope = null;
		this.$myUIManagerService = uiManagerService;
		this.restrict = 'EA';
		this.templateUrl = 'http://content.anycardgame.com/partials/floatingWindow.html';
		this.replace = true;
		this.transclude = true;
		this.scope = { width: '=', height: '=', left: '=', top: '=', title: '=', visible: '=', onclose: '&' };
		this.link = ss.mkdel(this, this.$linkFn);
	};
	$Client_Directives_FloatingWindowDirective.prototype = {
		swingBack: function(scope, element, callback) {
			var js = {};
			js['left'] = scope.left;
			js['top'] = scope.top;
			element.animate(js, 'fast', 'swing', callback);
		},
		swingAway: function(direction, simulate, element, callback) {
			var js = {};
			var distance = '2000';
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
			}
			else {
				element.animate(js, 'slow', 'swing', callback);
			}
		},
		$linkFn: function(scope, element, attr) {
			scope.$parent.swingAway = ss.mkdel(this, function(a, b, c) {
				this.swingAway(a, b, element, c);
			});
			scope.$parent.swingBack = ss.mkdel(this, function(c1) {
				this.swingBack(scope, element, c1);
			});
			var $t1 = $Client_Directives_FloatingWindowPosition.$ctor();
			$t1.left = scope.left;
			$t1.top = scope.top;
			$t1.display = 'block';
			scope.positionStyles = $t1;
			var $t2 = $Client_Directives_Size.$ctor();
			$t2.width = scope.width;
			$t2.height = scope.height;
			scope.sizeStyle = $t2;
			scope.maximize = function() {
				if (!scope.isMaximized) {
					scope.lastPositionStyles = scope.positionStyles;
					scope.lastSizeStyle = scope.sizeStyle;
					var $t3 = $Client_Directives_FloatingWindowPosition.$ctor();
					$t3.left = 0;
					$t3.top = 0;
					$t3.display = 'block';
					scope.positionStyles = $t3;
					var $t4 = $Client_Directives_Size.$ctor();
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
				scope.positionStyles.display = 'none';
			};
			scope.minimize = ss.mkdel(this, function() {
				this.$myUIManagerService.get_onMinimize()(scope);
				scope.positionStyles.display = 'none';
			});
			scope.restore = function() {
				scope.positionStyles.display = 'block';
			};
		}
	};
	////////////////////////////////////////////////////////////////////////////////
	// Client.Directives.FloatingWindowPosition
	var $Client_Directives_FloatingWindowPosition = function() {
	};
	$Client_Directives_FloatingWindowPosition.createInstance = function() {
		return $Client_Directives_FloatingWindowPosition.$ctor();
	};
	$Client_Directives_FloatingWindowPosition.$ctor = function() {
		var $this = $Client_Directives_Position.$ctor();
		$this.display = null;
		return $this;
	};
	////////////////////////////////////////////////////////////////////////////////
	// Client.Directives.FloatingWindowScope
	var $Client_Directives_FloatingWindowScope = function() {
	};
	$Client_Directives_FloatingWindowScope.createInstance = function() {
		return $Client_Directives_FloatingWindowScope.$ctor();
	};
	$Client_Directives_FloatingWindowScope.$ctor = function() {
		var $this = {};
		$this.$parent = null;
		$this.visible = false;
		$this.width = null;
		$this.height = null;
		$this.left = null;
		$this.top = null;
		$this.sizeStyle = null;
		$this.lastSizeStyle = null;
		$this.positionStyles = null;
		$this.lastPositionStyles = null;
		$this.title = null;
		$this.onclose = null;
		$this.close = null;
		$this.minimize = null;
		$this.maximize = null;
		$this.restore = null;
		$this.isMaximized = false;
		return $this;
	};
	////////////////////////////////////////////////////////////////////////////////
	// Client.Directives.Position
	var $Client_Directives_Position = function() {
	};
	$Client_Directives_Position.createInstance = function() {
		return $Client_Directives_Position.$ctor();
	};
	$Client_Directives_Position.$ctor = function() {
		var $this = {};
		$this.left = null;
		$this.top = null;
		return $this;
	};
	////////////////////////////////////////////////////////////////////////////////
	// Client.Directives.PropertyDirective
	var $Client_Directives_PropertyDirective = function() {
		this.link = null;
		this.link = ss.mkdel(this, this.$linkFn);
	};
	$Client_Directives_PropertyDirective.prototype = {
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
	};
	////////////////////////////////////////////////////////////////////////////////
	// Client.Directives.Size
	var $Client_Directives_Size = function() {
	};
	$Client_Directives_Size.createInstance = function() {
		return $Client_Directives_Size.$ctor();
	};
	$Client_Directives_Size.$ctor = function() {
		var $this = {};
		$this.width = null;
		$this.height = null;
		return $this;
	};
	////////////////////////////////////////////////////////////////////////////////
	// Client.Libs.Extensions
	var $Client_Libs_Extensions = function() {
	};
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
	////////////////////////////////////////////////////////////////////////////////
	// Client.Libs.ScriptLoader
	var $Client_Libs_ScriptLoader = function() {
	};
	$Client_Libs_ScriptLoader.prototype = {
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
	};
	$Client_Libs_ScriptLoader.loadCss = function(filename) {
		var fileref = document.createElement('link');
		fileref.setAttribute('rel', 'stylesheet');
		fileref.setAttribute('type', 'text/css');
		fileref.setAttribute('href', filename);
		document.getElementsByTagName('head')[0].appendChild(fileref);
	};
	////////////////////////////////////////////////////////////////////////////////
	// Client.Libs.TimeTracker
	var $Client_Libs_TimeTracker = function() {
	};
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
	////////////////////////////////////////////////////////////////////////////////
	// Client.Scope._KeepBaseScopeAlive
	var $Client_Scope__KeepBaseScopeAlive = function() {
	};
	////////////////////////////////////////////////////////////////////////////////
	// Client.Scope.ActiveLobbyModel
	var $Client_Scope_ActiveLobbyModel = function() {
	};
	$Client_Scope_ActiveLobbyModel.createInstance = function() {
		return $Client_Scope_ActiveLobbyModel.$ctor();
	};
	$Client_Scope_ActiveLobbyModel.$ctor = function() {
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
	////////////////////////////////////////////////////////////////////////////////
	// Client.Scope.ActiveLobbyScope
	var $Client_Scope_ActiveLobbyScope = function() {
		this.model = null;
		$Client_Scope_FloatingWindowBaseScope.call(this);
	};
	////////////////////////////////////////////////////////////////////////////////
	// Client.Scope.CardScope
	var $Client_Scope_CardScope = function() {
		this.card = null;
		this.cardStyle = null;
		this.cardClick = null;
		this.space = null;
		this.$parent = null;
		Client.Scope.BaseScope.call(this);
	};
	////////////////////////////////////////////////////////////////////////////////
	// Client.Scope.CreateRoomModel
	var $Client_Scope_CreateRoomModel = function() {
	};
	$Client_Scope_CreateRoomModel.createInstance = function() {
		return $Client_Scope_CreateRoomModel.$ctor();
	};
	$Client_Scope_CreateRoomModel.$ctor = function() {
		var $this = {};
		$this.windowClosed = null;
		$this.roomName = null;
		$this.createRoom = null;
		return $this;
	};
	////////////////////////////////////////////////////////////////////////////////
	// Client.Scope.CreateRoomScope
	var $Client_Scope_CreateRoomScope = function() {
		this.model = null;
		$Client_Scope_FloatingWindowBaseScope.call(this);
	};
	////////////////////////////////////////////////////////////////////////////////
	// Client.Scope.EffectEditorScope
	var $Client_Scope_EffectEditorScope = function() {
		this.effect = null;
		Client.Scope.BaseScope.call(this);
	};
	////////////////////////////////////////////////////////////////////////////////
	// Client.Scope.FloatingWindowBaseScope
	var $Client_Scope_FloatingWindowBaseScope = function() {
		this.swingAway = null;
		this.swingBack = null;
		this.visible = false;
		Client.Scope.BaseScope.call(this);
	};
	////////////////////////////////////////////////////////////////////////////////
	// Client.Scope.GameCtrlScope
	var $Client_Scope_GameCtrlScope = function() {
		this.mainArea = null;
		this.scale = null;
		this.moveCard = null;
		this.animateCard = null;
		this.selectedCard = null;
		Client.Scope.BaseScope.call(this);
	};
	////////////////////////////////////////////////////////////////////////////////
	// Client.Scope.HomeModel
	var $Client_Scope_HomeModel = function() {
	};
	$Client_Scope_HomeModel.createInstance = function() {
		return $Client_Scope_HomeModel.$ctor();
	};
	$Client_Scope_HomeModel.$ctor = function() {
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
		return $this;
	};
	////////////////////////////////////////////////////////////////////////////////
	// Client.Scope.HomeScope
	var $Client_Scope_HomeScope = function() {
		this.model = null;
		$Client_Scope_FloatingWindowBaseScope.call(this);
	};
	////////////////////////////////////////////////////////////////////////////////
	// Client.Scope.ListEffectsScope
	var $Client_Scope_ListEffectsScope = function() {
		this.newEffect = null;
		this.addEffect = null;
		this.effects = null;
		this.effectTypes = null;
		this.selectedEffectType = 0;
		this.effectClick = null;
		this.enableEffect = null;
		Client.Scope.BaseScope.call(this);
	};
	////////////////////////////////////////////////////////////////////////////////
	// Client.Scope.LoginModel
	var $Client_Scope_LoginModel = function() {
	};
	$Client_Scope_LoginModel.createInstance = function() {
		return $Client_Scope_LoginModel.$ctor();
	};
	$Client_Scope_LoginModel.$ctor = function() {
		var $this = {};
		$this.windowClosed = null;
		$this.username = null;
		$this.password = null;
		$this.createAccount = null;
		$this.loginAccount = null;
		return $this;
	};
	////////////////////////////////////////////////////////////////////////////////
	// Client.Scope.LoginScope
	var $Client_Scope_LoginScope = function() {
		this.model = null;
		$Client_Scope_FloatingWindowBaseScope.call(this);
	};
	////////////////////////////////////////////////////////////////////////////////
	// Client.Scope.MinimizeScope
	var $Client_Scope_MinimizeScope = function() {
		this.items = null;
		this.open = null;
		this.remove = null;
		Client.Scope.BaseScope.call(this);
	};
	////////////////////////////////////////////////////////////////////////////////
	// Client.Scope.QuestionModel
	var $Client_Scope_QuestionModel = function() {
	};
	$Client_Scope_QuestionModel.createInstance = function() {
		return $Client_Scope_QuestionModel.$ctor();
	};
	$Client_Scope_QuestionModel.$ctor = function() {
		var $this = {};
		$this.windowClosed = null;
		$this.question = null;
		$this.answers = null;
		$this.selectedAnswer = null;
		$this.answerQuestion = null;
		return $this;
	};
	////////////////////////////////////////////////////////////////////////////////
	// Client.Scope.QuestionScope
	var $Client_Scope_QuestionScope = function() {
		this.model = null;
		$Client_Scope_FloatingWindowBaseScope.call(this);
	};
	////////////////////////////////////////////////////////////////////////////////
	// Client.Scope.SpaceScope
	var $Client_Scope_SpaceScope = function() {
		this.space = null;
		this.$parent = null;
		this.spaceStyle = null;
		Client.Scope.BaseScope.call(this);
	};
	////////////////////////////////////////////////////////////////////////////////
	// Client.Services.EditEffectService
	var $Client_Services_$EditEffectService = function() {
		this.popOpenEffect = null;
	};
	////////////////////////////////////////////////////////////////////////////////
	// Client.Services.ClientChatManagerService
	var $Client_Services_ClientChatManagerService = function(gateway) {
		this.$1$OnGetChatLinesField = null;
		this.$1$OnGetChatInfoField = null;
		this.$clientChatManager = null;
		this.$clientChatManager = new ClientLibs.Managers.ClientChatManager(gateway.get_gateway());
		this.$clientChatManager.add_onGetChatInfo(ss.mkdel(this, function(user, model) {
			if (!ss.staticEquals(this.$1$OnGetChatInfoField, null)) {
				this.$1$OnGetChatInfoField(user, model);
			}
		}));
		this.$clientChatManager.add_onGetChatLines(ss.mkdel(this, function(user1, model1) {
			if (!ss.staticEquals(this.$1$OnGetChatLinesField, null)) {
				this.$1$OnGetChatLinesField(user1, model1);
			}
		}));
	};
	$Client_Services_ClientChatManagerService.prototype = {
		add_onGetChatLines: function(value) {
			this.$1$OnGetChatLinesField = ss.delegateCombine(this.$1$OnGetChatLinesField, value);
		},
		remove_onGetChatLines: function(value) {
			this.$1$OnGetChatLinesField = ss.delegateRemove(this.$1$OnGetChatLinesField, value);
		},
		add_onGetChatInfo: function(value) {
			this.$1$OnGetChatInfoField = ss.delegateCombine(this.$1$OnGetChatInfoField, value);
		},
		remove_onGetChatInfo: function(value) {
			this.$1$OnGetChatInfoField = ss.delegateRemove(this.$1$OnGetChatInfoField, value);
		},
		sendChatMessage: function(sendChatMessageModel) {
			this.$clientChatManager.sendChatMessage(sendChatMessageModel);
		}
	};
	////////////////////////////////////////////////////////////////////////////////
	// Client.Services.ClientDebugManagerService
	var $Client_Services_ClientDebugManagerService = function(gateway) {
		this.$clientDebugManager = null;
		this.$1$OnGetGameSourceField = null;
		this.$1$OnGetDebugLogField = null;
		this.$1$OnGetDebugBreakField = null;
		this.$1$OnDebugGameOverField = null;
		this.$clientDebugManager = new ClientLibs.Managers.ClientDebugManager(gateway.get_gateway());
		this.$clientDebugManager.add_onDebugGameOver(ss.mkdel(this, function(user, model) {
			if (!ss.staticEquals(this.$1$OnDebugGameOverField, null)) {
				this.$1$OnDebugGameOverField(user, model);
			}
		}));
		this.$clientDebugManager.add_onGetDebugBreak(ss.mkdel(this, function(user1, model1) {
			if (!ss.staticEquals(this.$1$OnGetDebugBreakField, null)) {
				this.$1$OnGetDebugBreakField(user1, model1);
			}
		}));
		this.$clientDebugManager.add_onGetDebugLog(ss.mkdel(this, function(user2, model2) {
			if (!ss.staticEquals(this.$1$OnGetDebugLogField, null)) {
				this.$1$OnGetDebugLogField(user2, model2);
			}
		}));
		this.$clientDebugManager.add_onGetGameSource(ss.mkdel(this, function(user3, model3) {
			if (!ss.staticEquals(this.$1$OnGetGameSourceField, null)) {
				this.$1$OnGetGameSourceField(user3, model3);
			}
		}));
	};
	$Client_Services_ClientDebugManagerService.prototype = {
		add_onGetGameSource: function(value) {
			this.$1$OnGetGameSourceField = ss.delegateCombine(this.$1$OnGetGameSourceField, value);
		},
		remove_onGetGameSource: function(value) {
			this.$1$OnGetGameSourceField = ss.delegateRemove(this.$1$OnGetGameSourceField, value);
		},
		add_onGetDebugLog: function(value) {
			this.$1$OnGetDebugLogField = ss.delegateCombine(this.$1$OnGetDebugLogField, value);
		},
		remove_onGetDebugLog: function(value) {
			this.$1$OnGetDebugLogField = ss.delegateRemove(this.$1$OnGetDebugLogField, value);
		},
		add_onGetDebugBreak: function(value) {
			this.$1$OnGetDebugBreakField = ss.delegateCombine(this.$1$OnGetDebugBreakField, value);
		},
		remove_onGetDebugBreak: function(value) {
			this.$1$OnGetDebugBreakField = ss.delegateRemove(this.$1$OnGetDebugBreakField, value);
		},
		add_onDebugGameOver: function(value) {
			this.$1$OnDebugGameOverField = ss.delegateCombine(this.$1$OnDebugGameOverField, value);
		},
		remove_onDebugGameOver: function(value) {
			this.$1$OnDebugGameOverField = ss.delegateRemove(this.$1$OnDebugGameOverField, value);
		},
		requestGameSource: function(gameSourceRequestModel) {
			this.$clientDebugManager.requestGameSource(gameSourceRequestModel);
		}
	};
	////////////////////////////////////////////////////////////////////////////////
	// Client.Services.ClientGameManagerService
	var $Client_Services_ClientGameManagerService = function(gateway) {
		this.$clientGameManager = null;
		this.$1$OnAskQuestionField = null;
		this.$1$OnUpdateStateField = null;
		this.$1$OnGameStartedField = null;
		this.$1$OnGameOverField = null;
		this.$clientGameManager = new ClientLibs.Managers.ClientGameManager(gateway.get_gateway());
		this.$clientGameManager.add_onAskQuestion(ss.mkdel(this, function(user, model) {
			if (!ss.staticEquals(this.$1$OnAskQuestionField, null)) {
				this.$1$OnAskQuestionField(user, model);
			}
		}));
		this.$clientGameManager.add_onGameOver(ss.mkdel(this, function(user1, model1) {
			if (!ss.staticEquals(this.$1$OnGameOverField, null)) {
				this.$1$OnGameOverField(user1, model1);
			}
		}));
		this.$clientGameManager.add_onGameStarted(ss.mkdel(this, function(user2, model2) {
			if (!ss.staticEquals(this.$1$OnGameStartedField, null)) {
				this.$1$OnGameStartedField(user2, model2);
			}
		}));
		this.$clientGameManager.add_onUpdateState(ss.mkdel(this, function(user3, model3) {
			if (!ss.staticEquals(this.$1$OnUpdateStateField, null)) {
				this.$1$OnUpdateStateField(user3, model3);
			}
		}));
	};
	$Client_Services_ClientGameManagerService.prototype = {
		add_onAskQuestion: function(value) {
			this.$1$OnAskQuestionField = ss.delegateCombine(this.$1$OnAskQuestionField, value);
		},
		remove_onAskQuestion: function(value) {
			this.$1$OnAskQuestionField = ss.delegateRemove(this.$1$OnAskQuestionField, value);
		},
		add_onUpdateState: function(value) {
			this.$1$OnUpdateStateField = ss.delegateCombine(this.$1$OnUpdateStateField, value);
		},
		remove_onUpdateState: function(value) {
			this.$1$OnUpdateStateField = ss.delegateRemove(this.$1$OnUpdateStateField, value);
		},
		add_onGameStarted: function(value) {
			this.$1$OnGameStartedField = ss.delegateCombine(this.$1$OnGameStartedField, value);
		},
		remove_onGameStarted: function(value) {
			this.$1$OnGameStartedField = ss.delegateRemove(this.$1$OnGameStartedField, value);
		},
		add_onGameOver: function(value) {
			this.$1$OnGameOverField = ss.delegateCombine(this.$1$OnGameOverField, value);
		},
		remove_onGameOver: function(value) {
			this.$1$OnGameOverField = ss.delegateRemove(this.$1$OnGameOverField, value);
		},
		answerQuestion: function(gameAnswerQuestionModel) {
			this.$clientGameManager.answerQuestion(gameAnswerQuestionModel);
		}
	};
	////////////////////////////////////////////////////////////////////////////////
	// Client.Services.ClientSiteManagerService
	var $Client_Services_ClientSiteManagerService = function(gateway) {
		this.$1$OnGetGameTypesReceivedField = null;
		this.$1$OnLoginField = null;
		this.$1$OnGetRoomsReceivedField = null;
		this.$1$OnRoomJoinedField = null;
		this.$1$OnGetRoomInfoReceivedField = null;
		this.$clientSiteManager = null;
		this.$clientSiteManager = new ClientLibs.Managers.ClientSiteManager(gateway.get_gateway());
		this.$clientSiteManager.add_onGetGameTypesReceived(ss.mkdel(this, function(user, model) {
			if (!ss.staticEquals(this.$1$OnGetGameTypesReceivedField, null)) {
				this.$1$OnGetGameTypesReceivedField(user, model);
			}
		}));
		this.$clientSiteManager.add_onLogin(ss.mkdel(this, function(user1, model1) {
			if (!ss.staticEquals(this.$1$OnLoginField, null)) {
				this.$1$OnLoginField(user1, model1);
			}
		}));
		this.$clientSiteManager.add_onGetRoomsReceived(ss.mkdel(this, function(user2, model2) {
			if (!ss.staticEquals(this.$1$OnGetRoomsReceivedField, null)) {
				this.$1$OnGetRoomsReceivedField(user2, model2);
			}
		}));
		this.$clientSiteManager.add_onRoomJoined(ss.mkdel(this, function(user3, model3) {
			if (!ss.staticEquals(this.$1$OnRoomJoinedField, null)) {
				this.$1$OnRoomJoinedField(user3, model3);
			}
		}));
		this.$clientSiteManager.add_onGetRoomInfoReceived(ss.mkdel(this, function(user4, model4) {
			if (!ss.staticEquals(this.$1$OnGetRoomInfoReceivedField, null)) {
				this.$1$OnGetRoomInfoReceivedField(user4, model4);
			}
		}));
	};
	$Client_Services_ClientSiteManagerService.prototype = {
		add_onGetGameTypesReceived: function(value) {
			this.$1$OnGetGameTypesReceivedField = ss.delegateCombine(this.$1$OnGetGameTypesReceivedField, value);
		},
		remove_onGetGameTypesReceived: function(value) {
			this.$1$OnGetGameTypesReceivedField = ss.delegateRemove(this.$1$OnGetGameTypesReceivedField, value);
		},
		add_onLogin: function(value) {
			this.$1$OnLoginField = ss.delegateCombine(this.$1$OnLoginField, value);
		},
		remove_onLogin: function(value) {
			this.$1$OnLoginField = ss.delegateRemove(this.$1$OnLoginField, value);
		},
		add_onGetRoomsReceived: function(value) {
			this.$1$OnGetRoomsReceivedField = ss.delegateCombine(this.$1$OnGetRoomsReceivedField, value);
		},
		remove_onGetRoomsReceived: function(value) {
			this.$1$OnGetRoomsReceivedField = ss.delegateRemove(this.$1$OnGetRoomsReceivedField, value);
		},
		add_onRoomJoined: function(value) {
			this.$1$OnRoomJoinedField = ss.delegateCombine(this.$1$OnRoomJoinedField, value);
		},
		remove_onRoomJoined: function(value) {
			this.$1$OnRoomJoinedField = ss.delegateRemove(this.$1$OnRoomJoinedField, value);
		},
		add_onGetRoomInfoReceived: function(value) {
			this.$1$OnGetRoomInfoReceivedField = ss.delegateCombine(this.$1$OnGetRoomInfoReceivedField, value);
		},
		remove_onGetRoomInfoReceived: function(value) {
			this.$1$OnGetRoomInfoReceivedField = ss.delegateRemove(this.$1$OnGetRoomInfoReceivedField, value);
		},
		login: function(userName, password) {
			this.$clientSiteManager.login(userName, password);
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
		}
	};
	////////////////////////////////////////////////////////////////////////////////
	// Client.Services.EffectManagerService
	var $Client_Services_EffectManagerService = function() {
		this.effects = null;
		this.effects = [];
	};
	$Client_Services_EffectManagerService.prototype = {
		getEffectByName: function(effect) {
			for (var $t1 = 0; $t1 < this.effects.length; $t1++) {
				var eff = this.effects[$t1];
				if (ss.referenceEquals(eff.name.toLowerCase(), effect.toLowerCase())) {
					return eff;
				}
			}
			return null;
		}
	};
	////////////////////////////////////////////////////////////////////////////////
	// Client.Services.EffectWatcherService
	var $Client_Services_EffectWatcherService = function() {
		this.applyEffect = null;
	};
	////////////////////////////////////////////////////////////////////////////////
	// Client.Services.GameContentManager
	var $Client_Services_GameContentManager = function() {
		this.redraw = null;
	};
	////////////////////////////////////////////////////////////////////////////////
	// Client.Services.GatewayService
	var $Client_Services_GatewayService = function(serverUrl) {
		this.$1$GatewayField = null;
		this.set_gateway(new ClientLibs.Gateway(serverUrl, false));
	};
	$Client_Services_GatewayService.prototype = {
		get_gateway: function() {
			return this.$1$GatewayField;
		},
		set_gateway: function(value) {
			this.$1$GatewayField = value;
		}
	};
	////////////////////////////////////////////////////////////////////////////////
	// Client.Services.UIManagerService
	var $Client_Services_UIManagerService = function(clientGameManagerService) {
		this.userLoggedIn = null;
		this.createRoom = null;
		this.openCreateRoomDialog = null;
		this.onRoomJoined = null;
		this.roomLeft = null;
		this.clientInfo = null;
		this.$1$OnMinimizeField = null;
		this.clientInfo = Models.ClientInformation.$ctor();
		//            this.GameManager = new GameManager(clientGameManagerService,this);
	};
	$Client_Services_UIManagerService.prototype = {
		get_onMinimize: function() {
			return this.$1$OnMinimizeField;
		},
		set_onMinimize: function(value) {
			this.$1$OnMinimizeField = value;
		}
	};
	ss.registerClass(global, 'Client.BuildAngular', $Client_BuildAngular);
	ss.registerClass(global, 'Client.BuildSite', $Client_BuildSite);
	ss.registerClass(null, 'Client.Controllers.$ActiveLobbyController', $Client_Controllers_$ActiveLobbyController);
	ss.registerClass(null, 'Client.Controllers.$CreateRoomController', $Client_Controllers_$CreateRoomController);
	ss.registerClass(null, 'Client.Controllers.$EffectEditorController', $Client_Controllers_$EffectEditorController);
	ss.registerClass(null, 'Client.Controllers.$HomeController', $Client_Controllers_$HomeController);
	ss.registerClass(null, 'Client.Controllers.$ListEffectsController', $Client_Controllers_$ListEffectsController);
	ss.registerClass(null, 'Client.Controllers.$LoginController', $Client_Controllers_$LoginController);
	ss.registerClass(null, 'Client.Controllers.$MinimizeController', $Client_Controllers_$MinimizeController);
	ss.registerClass(null, 'Client.Controllers.$QuestionController', $Client_Controllers_$QuestionController);
	ss.registerClass(global, 'Client.Controllers.GameController', $Client_Controllers_GameController);
	ss.registerClass(global, 'Client.Directives.AcgDrawCardDirective', $Client_Directives_AcgDrawCardDirective);
	ss.registerClass(global, 'Client.Directives.AcgDrawSpaceDirective', $Client_Directives_AcgDrawSpaceDirective);
	ss.registerClass(global, 'Client.Directives.AcgSpacesDirective', $Client_Directives_AcgSpacesDirective);
	ss.registerClass(global, 'Client.Directives.ChatBoxDirective', $Client_Directives_ChatBoxDirective);
	ss.registerClass(global, 'Client.Directives.DraggableDirective', $Client_Directives_DraggableDirective);
	ss.registerClass(global, 'Client.Directives.FancyListDirective', $Client_Directives_FancyListDirective);
	ss.registerClass(global, 'Client.Directives.FloatingWindowDirective', $Client_Directives_FloatingWindowDirective);
	ss.registerClass(global, 'Client.Directives.Position', $Client_Directives_Position);
	ss.registerClass(global, 'Client.Directives.FloatingWindowPosition', $Client_Directives_FloatingWindowPosition, $Client_Directives_Position);
	ss.registerClass(global, 'Client.Directives.FloatingWindowScope', $Client_Directives_FloatingWindowScope);
	ss.registerClass(global, 'Client.Directives.PropertyDirective', $Client_Directives_PropertyDirective);
	ss.registerClass(global, 'Client.Directives.Size', $Client_Directives_Size);
	ss.registerClass(global, 'Client.Libs.Extensions', $Client_Libs_Extensions);
	ss.registerClass(global, 'Client.Libs.ScriptLoader', $Client_Libs_ScriptLoader);
	ss.registerClass(global, 'Client.Libs.TimeTracker', $Client_Libs_TimeTracker);
	ss.registerClass(global, 'Client.Scope._KeepBaseScopeAlive', $Client_Scope__KeepBaseScopeAlive);
	ss.registerClass(global, 'Client.Scope.ActiveLobbyModel', $Client_Scope_ActiveLobbyModel);
	ss.registerClass(global, 'Client.Scope.FloatingWindowBaseScope', $Client_Scope_FloatingWindowBaseScope, Client.Scope.BaseScope);
	ss.registerClass(global, 'Client.Scope.ActiveLobbyScope', $Client_Scope_ActiveLobbyScope, $Client_Scope_FloatingWindowBaseScope);
	ss.registerClass(global, 'Client.Scope.CardScope', $Client_Scope_CardScope, Client.Scope.BaseScope);
	ss.registerClass(global, 'Client.Scope.CreateRoomModel', $Client_Scope_CreateRoomModel);
	ss.registerClass(global, 'Client.Scope.CreateRoomScope', $Client_Scope_CreateRoomScope, $Client_Scope_FloatingWindowBaseScope);
	ss.registerClass(global, 'Client.Scope.EffectEditorScope', $Client_Scope_EffectEditorScope, Client.Scope.BaseScope);
	ss.registerClass(global, 'Client.Scope.GameCtrlScope', $Client_Scope_GameCtrlScope, Client.Scope.BaseScope);
	ss.registerClass(global, 'Client.Scope.HomeModel', $Client_Scope_HomeModel);
	ss.registerClass(global, 'Client.Scope.HomeScope', $Client_Scope_HomeScope, $Client_Scope_FloatingWindowBaseScope);
	ss.registerClass(global, 'Client.Scope.ListEffectsScope', $Client_Scope_ListEffectsScope, Client.Scope.BaseScope);
	ss.registerClass(global, 'Client.Scope.LoginModel', $Client_Scope_LoginModel);
	ss.registerClass(global, 'Client.Scope.LoginScope', $Client_Scope_LoginScope, $Client_Scope_FloatingWindowBaseScope);
	ss.registerClass(global, 'Client.Scope.MinimizeScope', $Client_Scope_MinimizeScope, Client.Scope.BaseScope);
	ss.registerClass(global, 'Client.Scope.QuestionModel', $Client_Scope_QuestionModel);
	ss.registerClass(global, 'Client.Scope.QuestionScope', $Client_Scope_QuestionScope, $Client_Scope_FloatingWindowBaseScope);
	ss.registerClass(global, 'Client.Scope.SpaceScope', $Client_Scope_SpaceScope, Client.Scope.BaseScope);
	ss.registerClass(null, 'Client.Services.$EditEffectService', $Client_Services_$EditEffectService);
	ss.registerClass(global, 'Client.Services.ClientChatManagerService', $Client_Services_ClientChatManagerService);
	ss.registerClass(global, 'Client.Services.ClientDebugManagerService', $Client_Services_ClientDebugManagerService);
	ss.registerClass(global, 'Client.Services.ClientGameManagerService', $Client_Services_ClientGameManagerService);
	ss.registerClass(global, 'Client.Services.ClientSiteManagerService', $Client_Services_ClientSiteManagerService);
	ss.registerClass(global, 'Client.Services.EffectManagerService', $Client_Services_EffectManagerService);
	ss.registerClass(global, 'Client.Services.EffectWatcherService', $Client_Services_EffectWatcherService);
	ss.registerClass(global, 'Client.Services.GameContentManager', $Client_Services_GameContentManager);
	ss.registerClass(global, 'Client.Services.GatewayService', $Client_Services_GatewayService);
	ss.registerClass(global, 'Client.Services.UIManagerService', $Client_Services_UIManagerService);
	$Client_BuildSite.instance = null;
})();
