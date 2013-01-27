
////////////////////////////////////////////////////////////////////////////////
// Client.Globals
var $Globals = function() {
};
////////////////////////////////////////////////////////////////////////////////
// LoginUI
var $LoginUI = function(shuffUIManager, pageHandler) {
	var $t1 = new (Type.makeGenericType(ShuffUI.ShuffWindow$1, [Object]))();
	$t1.title = 'Login';
	$t1.set_x($('body').innerWidth() - 500);
	$t1.set_y(100);
	$t1.set_width(CommonLibraries.Number.op_Implicit$2(250));
	$t1.set_height(CommonLibraries.Number.op_Implicit$2(165));
	$t1.allowClose = true;
	$t1.allowMinimize = true;
	$t1.set_visible(true);
	var loginScreen = shuffUIManager.createWindow(Object).call(shuffUIManager, $t1);
	var loginName;
	var password;
	loginScreen.addElement(ShuffUI.ShuffTextbox).call(loginScreen, loginName = new ShuffUI.ShuffTextbox(140, 40, CommonLibraries.Number.op_Implicit$2(150), CommonLibraries.Number.op_Implicit$2(30), '', 'Username', null));
	loginScreen.addElement(ShuffUI.ShuffTextbox).call(loginScreen, password = new ShuffUI.ShuffTextbox(140, 75, CommonLibraries.Number.op_Implicit$2(150), CommonLibraries.Number.op_Implicit$2(30), '', 'Password', null));
	loginScreen.addElement(ShuffUI.ShuffButton).call(loginScreen, new ShuffUI.ShuffButton(40, 150, CommonLibraries.Number.op_Implicit$2(250), CommonLibraries.Number.op_Implicit$2(30), Type.makeGenericType(CommonLibraries.DelegateOrValue$1, [String]).op_Implicit$2('Login'), function(e) {
		pageHandler.clientSiteManager.login(loginName.get_text(), password.get_text());
	}));
};
////////////////////////////////////////////////////////////////////////////////
// Client.BuildSite
var $Client_BuildSite = function(gatewayServerAddress) {
	this.codeArea = null;
	this.devArea = null;
	this.$gatewayServerAddress = null;
	this.home = null;
	this.questionArea = null;
	this.selectedGame = 'Sevens';
	this.$shuffUIManager = null;
	$Client_BuildSite.instance = this;
	this.$gatewayServerAddress = gatewayServerAddress;
	var url = 'http://50.116.22.241:8881/';
	window.topLevel = url;
	$Client_BuildSite.$loadJunk(url, Function.mkdel(this, this.$ready));
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
		var dvGame;
		$('body').append(dvGame = document.createElement('div'));
		dvGame.id = 'dvGame';
		dvGame.style.left = '0%';
		dvGame.style.position = 'absolute';
		dvGame.style.top = '0';
		dvGame.style.right = '0';
		dvGame.style.bottom = '0';
		dvGame.style['-webkit-transform'] = 'scale(1.2)';
		document.body.style['overflow'] = 'hidden';
		document.body.addEventListener('contextmenu', function(e) {
			//e.PreventDefault();
			//todo: Special right click menu;
		}, false);
		var pageHandler = new $Client_PageHandler(this.$gatewayServerAddress, this);
		this.$shuffUIManager = new ShuffUI.ShuffUIManager();
		new $LoginUI(this.$shuffUIManager, pageHandler);
		var $t2 = this.$shuffUIManager;
		var $t1 = new (Type.makeGenericType(ShuffUI.ShuffWindow$1, [$Client_Information_HomeAreaInformation]).$ctor1)(new $Client_Information_HomeAreaInformation());
		$t1.title = 'CardGame';
		$t1.set_x($('body').innerWidth() - 500);
		$t1.set_y(100);
		$t1.set_width(CommonLibraries.Number.op_Implicit$2(420));
		$t1.set_height(CommonLibraries.Number.op_Implicit$2(450));
		$t1.allowClose = true;
		$t1.allowMinimize = true;
		$t1.set_visible(true);
		this.home = $t2.createWindow($Client_Information_HomeAreaInformation).call($t2, $t1);
		this.home.addElement(ShuffUI.ShuffButton).call(this.home, new ShuffUI.ShuffButton(280, 54, CommonLibraries.Number.op_Implicit$2(150), CommonLibraries.Number.op_Implicit$2(25), Type.makeGenericType(CommonLibraries.DelegateOrValue$1, [String]).op_Implicit$2('Update game list'), function(e1) {
			pageHandler.clientSiteManager.getGameList();
		}));
		//home.AddButton(new ShuffButton()
		//{
		//X = 280,
		//Y = 84,
		//Width = "150",
		//Height = "25",
		//Text = "Create Game",
		//Click = (e) =>
		//{
		//
		//pageHandler.gateway.Emit("Area.Game.Create", new { user = new { userName = home.Data.txtUserName[0].NodeValue } }, devArea.Data.gameServer); //NO EMIT'ING OUTSIDE OF PageHandler
		//
		//
		//}
		//});
		this.home.data.btnStartGame = this.home.addElement(ShuffUI.ShuffButton).call(this.home, new ShuffUI.ShuffButton(280, 164, CommonLibraries.Number.op_Implicit$2(120), CommonLibraries.Number.op_Implicit$2(25), Type.makeGenericType(CommonLibraries.DelegateOrValue$1, [String]).op_Implicit$2('Start Game'), function(e2) {
			pageHandler.clientGameManager.startGame({ roomID: pageHandler.gameStuff.roomID });
		}));
		var randomName = '';
		var ra = Math.random() * 10;
		for (var i = 0; i < ra; i++) {
			randomName += String.fromCharCode(ss.Int32.trunc(65 + Math.random() * 26));
		}
		this.home.data.txtUserName = this.home.addElement(ShuffUI.ShuffTextbox).call(this.home, new ShuffUI.ShuffTextbox(130, 43, CommonLibraries.Number.op_Implicit$2(130), CommonLibraries.Number.op_Implicit$2(20), randomName, 'Username=', null));
		//home.Data.gameList = home.AddListBox(new ShuffListBox()
		//{
		//X = 30,
		//Y = 85,
		//Width = "215",
		//Height = "150".ToString(),
		//Label = "Rooms",
		//Click = (e) =>
		//{
		//pageHandler.gateway.Emit("Area.Game.Join", new { roomID = "foo", user = new { userName = home.Data.txtUserName.GetValue() } }, devArea.Data.gameServer); //NO EMIT"ING OUTSIDE OF PageHandler
		//}
		//});
		//
		//            home.Data.userList = home.AddElement(new ShuffListBox(new ShuffListBoxOptions() {
		//
		//            X = 30,
		//
		//            Y = 280,
		//
		//            Width = 215,
		//
		//            Height = 25 * 5,
		//
		//            Label = "Users"
		//
		//            }));
		this.home.data.loadRoomInfo = function(room) {
			//
			//
			//home.Data.userList.Remove();
			//
			//
			//home.Data.btnStartGame.CSS("display","block");
			//
			//
			//
			//
			//
			//var users = new List<string>();
			//
			//
			//
			//
			//
			//for (var i = 0; i < room.players.length; i++) {
			//
			//
			//
			//
			//
			//users.Add(room.players[i]);
			//
			//
			//
			//
			//
			//}
			//
			//
			//
			//
			//
			//
			//
			//
			//home.Data.userList = home.AddListBox(new ShuffListBox(){
			//
			//
			//X= 30,
			//
			//
			//Y= 280,
			//
			//
			//Width= "215",
			//
			//
			//Height = "125",
			//
			//
			//Label= "Users",
			//
			//
			//Items= users
			//
			//
			//});
		};
		this.home.data.loadRoomInfos = function(room1) {
			//   home.Data.gameList.Remove();
			//   
			//   var rooms = new List<string>();
			//   
			//   for (var i = 0; i < room.length; i++) {
			//   //rooms.Add({ label= room[i].name, value= room[i].roomID });
			//   }
			//   
			//   
			//   home.Data.gameList = home.AddListBox(new ShuffListBox(){
			//   X= 30,
			//   Y= 85,
			//   Width = "215",
			//   Height = "150",
			//   Label= "Rooms",
			//   Items= rooms,
			//   Click=  (item)=> {
			//   pageHandler.gateway.Emit("Area.Game.Join", new { roomID= item.value, user=new  { userName= home.Data.txtUserName.GetValue()} }, devArea.Data.gameServer); //NO EMIT"ING OUTSIDE OF PageHandler
			//   }
			//   });
		};
		var $t4 = this.$shuffUIManager;
		var $t3 = new (Type.makeGenericType(ShuffUI.ShuffWindow$1, [$Client_Information_DevAreaInformation]).$ctor1)(new $Client_Information_DevAreaInformation());
		$t3.title = 'Developer';
		$t3.set_x(500);
		$t3.set_y(100);
		$t3.set_width(CommonLibraries.Number.op_Implicit$2(420));
		$t3.set_height(CommonLibraries.Number.op_Implicit$2(450));
		$t3.allowClose = true;
		$t3.allowMinimize = true;
		this.devArea = $t4.createWindow($Client_Information_DevAreaInformation).call($t4, $t3);
		this.devArea.data.beginGame = Function.mkdel(this, function() {
			$('#dvGame').empty();
			// pageHandler.ClearCache();
			pageHandler.gameDrawer.clearCache();
			$('#dvGame').width('100%');
			$('#dvGame').height('100%');
			//clearLevel();
			this.devArea.data.created = false;
			this.devArea.data.joined = 0;
			pageHandler.startGameServer();
			pageHandler.clientGameManager.createDebuggedGame({ name: 'main room', gameName: this.selectedGame, source: this.codeArea.data.codeEditor.information.editor.getValue(), breakPoints: this.codeArea.data.breakPoints });
		});
		this.devArea.addElement(ShuffUI.ShuffButton).call(this.devArea, new ShuffUI.ShuffButton(280, 54, CommonLibraries.Number.op_Implicit$2(150), CommonLibraries.Number.op_Implicit$2(25), Type.makeGenericType(CommonLibraries.DelegateOrValue$1, [String]).op_Implicit$2('Begin Game'), Function.mkdel(this, function(e3) {
			this.devArea.data.beginGame();
		})));
		var but = null;
		this.devArea.addElement(ShuffUI.ShuffButton).call(this.devArea, but = new ShuffUI.ShuffButton(280, 84, CommonLibraries.Number.op_Implicit$2(150), CommonLibraries.Number.op_Implicit$2(25), Type.makeGenericType(CommonLibraries.DelegateOrValue$1, [String]).op_Implicit$1(Function.mkdel(this, function() {
			return 'Game: ' + this.selectedGame;
		})), Function.mkdel(this, function(e4) {
			if (this.selectedGame === 'Sevens') {
				this.selectedGame = 'BlackJack';
			}
			else {
				this.selectedGame = 'Sevens';
			}
			pageHandler.clientDebugManager.requestGameSource({ gameName: this.selectedGame });
			var m = Type.makeGenericType(CommonLibraries.DelegateOrValue$1, [String]).op_Implicit(but.text);
		})));
		this.devArea.data.lblHowFast = this.devArea.addElement(ShuffUI.ShuffLabel).call(this.devArea, new ShuffUI.ShuffLabel(80, 80, Type.makeGenericType(CommonLibraries.DelegateOrValue$1, [String]).op_Implicit$2('Time Taken:')));
		this.devArea.data.lblAnother = this.devArea.addElement(ShuffUI.ShuffLabel).call(this.devArea, new ShuffUI.ShuffLabel(80, 100, Type.makeGenericType(CommonLibraries.DelegateOrValue$1, [String]).op_Implicit$2('Another: ')));
		// devArea.AddButton(new ShuffButton()
		// {
		// X = 280,
		// Y = 94,
		// Width = "150",
		// Height = "25",
		// Text = "Continue",
		// Click = (evt) =>
		// {
		// pageHandler.gateway.Emit("Area.Debug.Continue", new { }, devArea.Data.gameServer); //NO EMIT"ING OUTSIDE OF PageHandler
		// }
		// });
		var pop;
		var $t6 = this.devArea;
		var $t5 = new ShuffUI.ShuffListBox(25, 200, CommonLibraries.Number.op_Implicit$2(250), CommonLibraries.Number.op_Implicit$2(250));
		$t5.itemCreation = function(item, index) {
			var ik = $(String.format('<div style=\'width=100%;height=25px; background-color={0};\'></div>', ((index % 2 === 0) ? 'red' : 'green')));
			var ikc = $(String.format('<div style=\'width=50%;height=25px; float=left;\'>{0}</div>', item.label));
			ik.append(ikc);
			var ikd = $(String.format('<input type=\'text\' style=\'width=48%;height=25px\' value=\'{0}\' />', item.value));
			ik.append(ikd);
			return ik;
		};
		var propBox = $t6.addElement(ShuffUI.ShuffListBox).call($t6, pop = $t5);
		pop.addItem(new ShuffUI.ShuffListItem('foos', 99));
		this.devArea.data.varText = this.devArea.addElement(ShuffUI.ShuffTextbox).call(this.devArea, new ShuffUI.ShuffTextbox(150, 134, CommonLibraries.Number.op_Implicit$2(100), CommonLibraries.Number.op_Implicit$2(25), 'Var Lookup', null, null));
		//  devArea.AddButton(new ShuffButton()
		//  {
		//  X = 280,
		//  Y = 134,
		//  Width = "150",
		//  Height = "25",
		//  Text = "Lookup",
		//  Click = (evt) =>
		//  {
		//  pageHandler.gateway.Emit("Area.Debug.VariableLookup.Request", new { variableName = devArea.Data.varText.GetValue() }, devArea.Data.gameServer); //NO EMIT"ING OUTSIDE OF PageHandler
		//  }
		//  });
		//   devArea.AddButton(new ShuffButton()
		//   {
		//   X = 280,
		//   Y = 164,
		//   Width = "150",
		//   Height = "25",
		//   Text = "Push New Source",
		//   Click = (evt) =>
		//   {
		//   pageHandler.gateway.Emit("Area.Debug.PushNewSource", new { source = codeArea.Data.codeEditor.editor.GetValue(), breakPoints = codeArea.Data.breakPoints },
		//   devArea.Data.gameServer); //NO EMIT"ING OUTSIDE OF PageHandler
		//   }
		//   });
		this.devArea.data.loadRoomInfo = Function.mkdel(this, function(room2) {
			this.devArea.data.gameServer = room2.gameServer;
			this.devArea.data.lblAnother.set_text(room2.gameServer);
			var count = parseInt(this.devArea.data.txtNumOfPlayers.get_text());
			if (!this.devArea.data.created) {
				pageHandler.clientGameManager.joinDebugger({ roomID: room2.roomID });
				for (var i1 = 0; i1 < count; i1++) {
					var $t9 = pageHandler.clientGameManager;
					var $t8 = room2.roomID;
					var $t7 = new Models.UserModel();
					$t7.userName = 'player ' + (i1 + 1);
					$t9.joinPlayer({ roomID: $t8, user: $t7 });
				}
				this.devArea.data.created = true;
			}
			else if (++this.devArea.data.joined === count) {
				pageHandler.clientGameManager.startGame({ roomID: room2.roomID });
			}
		});
		this.devArea.data.txtNumOfPlayers = this.devArea.addElement(ShuffUI.ShuffTextbox).call(this.devArea, new ShuffUI.ShuffTextbox(130, 43, CommonLibraries.Number.op_Implicit$2(130), CommonLibraries.Number.op_Implicit$2(20), '6', 'Number of players=', 'font-size=13px'));
		var $t11 = this.$shuffUIManager;
		var $t10 = new (Type.makeGenericType(ShuffUI.ShuffWindow$1, [$Client_Information_CodeAreaInformation]).$ctor1)(new $Client_Information_CodeAreaInformation());
		$t10.title = 'Code';
		$t10.set_x(0);
		$t10.set_y(0);
		$t10.staticPositioning = false;
		$t10.set_width(CommonLibraries.Number.op_Implicit$2($(window).width() * 0.5));
		$t10.set_height(CommonLibraries.Number.op_Implicit$2($(window).height() * 0.9));
		$t10.allowClose = true;
		$t10.allowMinimize = true;
		$t10.set_visible(false);
		this.codeArea = $t11.createWindow($Client_Information_CodeAreaInformation).call($t11, $t10);
		this.codeArea.data.breakPoints = [];
		var $t14 = this.codeArea.data;
		var $t13 = this.codeArea;
		var $t12 = new ShuffUI.ShuffCodeEditor.$ctor1(0, 0, CommonLibraries.Number.op_Implicit$3('100%'), CommonLibraries.Number.op_Implicit$3('80%'), '');
		$t12.set_dock(2);
		$t14.codeEditor = $t13.addElement(ShuffUI.ShuffCodeEditor).call($t13, $t12);
		var $t17 = this.codeArea.data;
		var $t16 = this.codeArea;
		var $t15 = new ShuffUI.ShuffCodeEditor.$ctor1(0, 0, CommonLibraries.Number.op_Implicit$3('100%'), CommonLibraries.Number.op_Implicit$3('20%'), '');
		$t15.lineNumbers = false;
		$t15.set_dock(2);
		$t17.console = $t16.addElement(ShuffUI.ShuffCodeEditor).call($t16, $t15);
		var $t19 = this.$shuffUIManager;
		var $t18 = new (Type.makeGenericType(ShuffUI.ShuffWindow$1, [$Client_Information_QuestionAreaInformation]).$ctor1)($Client_Information_QuestionAreaInformation.$ctor());
		$t18.title = 'Question';
		$t18.set_x(600);
		$t18.set_y(100);
		$t18.set_width(CommonLibraries.Number.op_Implicit$2(300));
		$t18.set_height(CommonLibraries.Number.op_Implicit$2(275));
		$t18.allowClose = true;
		$t18.allowMinimize = true;
		$t18.set_visible(true);
		this.questionArea = $t19.createWindow($Client_Information_QuestionAreaInformation).call($t19, $t18);
		this.questionArea.data.question = this.questionArea.addElement(ShuffUI.ShuffLabel).call(this.questionArea, new ShuffUI.ShuffLabel(20, 70, Type.makeGenericType(CommonLibraries.DelegateOrValue$1, [String]).op_Implicit$2('')));
		this.questionArea.data.load = Function.mkdel(this, function(question) {
			this.questionArea.set_visible(true);
			this.questionArea.data.question.set_text(question.question);
			var $t20 = this.questionArea.data.answerBox.get_parent();
			$t20.removeElement(ShuffUI.ShuffListBox).call($t20, this.questionArea.data.answerBox);
			var answers = [];
			for (var i2 = 0; i2 < question.answers.length; i2++) {
				answers.add(new ShuffUI.ShuffListItem(question.answers[i2], i2));
			}
			var $t23 = this.questionArea.data;
			var $t22 = this.questionArea;
			var $t21 = new ShuffUI.ShuffListBox(30, 65, CommonLibraries.Number.op_Implicit$2(215), CommonLibraries.Number.op_Implicit$2(125));
			$t21.items = answers;
			$t23.answerBox = $t22.addElement(ShuffUI.ShuffListBox).call($t22, $t21);
		});
		this.questionArea.data.answerBox = this.questionArea.addElement(ShuffUI.ShuffListBox).call(this.questionArea, new ShuffUI.ShuffListBox(30, 65, CommonLibraries.Number.op_Implicit$2(215), CommonLibraries.Number.op_Implicit$2(125)));
		this.$shuffUIManager.focus(this.devArea.information);
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
	var scriptLoader = new $Client_ScriptLoader();
	$Client_ScriptLoader.loadCss(url + 'lib/jquery-ui-1.8.20.custom.css');
	$Client_ScriptLoader.loadCss(url + 'lib/codemirror/lib/codemirror.css');
	$Client_ScriptLoader.loadCss(url + 'lib/site.css');
	$Client_ScriptLoader.loadCss(url + 'lib/codemirror/theme/night.css');
	$Client_ScriptLoader.loadCss(url + 'lib/jqwidgets/styles/jqx.base.css');
	scriptLoader.loadSync([url + 'lib/jquery-1.7.2.min.js', url + 'lib/jquery-ui-1.8.20.custom.min.js', url + 'lib/jqwidgets/scripts/gettheme.js', url + 'lib/jqwidgets/jqxcore.js'], function() {
		scriptLoader.load([url + 'lib/jqwidgets/jqxbuttons.js', url + 'lib/jqwidgets/jqxscrollbar.js', url + 'lib/linq.js', url + 'lib/tween.js', url + 'lib/socket.io.js', url + 'lib/codemirror/lib/codemirror.js', url + 'lib/jqwidgets/jqxlistbox.js'], false, function() {
			scriptLoader.load([url + 'lib/codemirror/mode/javascript/javascript.js', url + 'lib/WorkerConsole.js', url + 'lib/FunctionWorker.js', url + 'lib/Stats.js', url + 'lib/keyboardjs.js', url + 'lib/Dialog.js'], false, function() {
				scriptLoader.load([url + 'CommonLibraries.js', url + 'ShuffleGameLibrary.js', url + 'Models.js'], true, function() {
					scriptLoader.load([url + 'lib/RawDeflate.js', url + 'ShuffUI.js'], true, ready);
				});
			});
		});
	});
};
////////////////////////////////////////////////////////////////////////////////
// Client.ClientDebugManager
var $Client_ClientDebugManager = function(gateway) {
	this.$myGateway = null;
	this.$1$OnGetGameSourceField = null;
	this.$myGateway = gateway;
	this.$setup();
};
$Client_ClientDebugManager.prototype = {
	add_onGetGameSource: function(value) {
		this.$1$OnGetGameSourceField = Function.combine(this.$1$OnGetGameSourceField, value);
	},
	remove_onGetGameSource: function(value) {
		this.$1$OnGetGameSourceField = Function.remove(this.$1$OnGetGameSourceField, value);
	},
	$setup: function() {
		this.$myGateway.on('Area.Debug.GetGameSource.Response', Function.mkdel(this, function(a) {
			this.$1$OnGetGameSourceField(a);
		}));
	},
	requestGameSource: function(gameSourceRequestModel) {
		this.$myGateway.emit('Area.Debug2.GetGameSource.Request', gameSourceRequestModel, null);
	}
};
////////////////////////////////////////////////////////////////////////////////
// Client.ClientGameManager
var $Client_ClientGameManager = function(gateway) {
	this.$myGateway = null;
	this.$1$GameServerField = null;
	this.$1$OnGetRoomInfoField = null;
	this.$1$OnGetDebugLogField = null;
	this.$1$OnGetDebugBreakField = null;
	this.$1$OnAskQuestionField = null;
	this.$1$OnUpdateStateField = null;
	this.$1$OnGameStartedField = null;
	this.$1$OnGameOverField = null;
	this.$1$OnDebugGameOverField = null;
	this.$myGateway = gateway;
	this.$setup();
};
$Client_ClientGameManager.prototype = {
	get_gameServer: function() {
		return this.$1$GameServerField;
	},
	set_gameServer: function(value) {
		this.$1$GameServerField = value;
	},
	add_onGetRoomInfo: function(value) {
		this.$1$OnGetRoomInfoField = Function.combine(this.$1$OnGetRoomInfoField, value);
	},
	remove_onGetRoomInfo: function(value) {
		this.$1$OnGetRoomInfoField = Function.remove(this.$1$OnGetRoomInfoField, value);
	},
	add_onGetDebugLog: function(value) {
		this.$1$OnGetDebugLogField = Function.combine(this.$1$OnGetDebugLogField, value);
	},
	remove_onGetDebugLog: function(value) {
		this.$1$OnGetDebugLogField = Function.remove(this.$1$OnGetDebugLogField, value);
	},
	add_onGetDebugBreak: function(value) {
		this.$1$OnGetDebugBreakField = Function.combine(this.$1$OnGetDebugBreakField, value);
	},
	remove_onGetDebugBreak: function(value) {
		this.$1$OnGetDebugBreakField = Function.remove(this.$1$OnGetDebugBreakField, value);
	},
	add_onAskQuestion: function(value) {
		this.$1$OnAskQuestionField = Function.combine(this.$1$OnAskQuestionField, value);
	},
	remove_onAskQuestion: function(value) {
		this.$1$OnAskQuestionField = Function.remove(this.$1$OnAskQuestionField, value);
	},
	add_onUpdateState: function(value) {
		this.$1$OnUpdateStateField = Function.combine(this.$1$OnUpdateStateField, value);
	},
	remove_onUpdateState: function(value) {
		this.$1$OnUpdateStateField = Function.remove(this.$1$OnUpdateStateField, value);
	},
	add_onGameStarted: function(value) {
		this.$1$OnGameStartedField = Function.combine(this.$1$OnGameStartedField, value);
	},
	remove_onGameStarted: function(value) {
		this.$1$OnGameStartedField = Function.remove(this.$1$OnGameStartedField, value);
	},
	add_onGameOver: function(value) {
		this.$1$OnGameOverField = Function.combine(this.$1$OnGameOverField, value);
	},
	remove_onGameOver: function(value) {
		this.$1$OnGameOverField = Function.remove(this.$1$OnGameOverField, value);
	},
	add_onDebugGameOver: function(value) {
		this.$1$OnDebugGameOverField = Function.combine(this.$1$OnDebugGameOverField, value);
	},
	remove_onDebugGameOver: function(value) {
		this.$1$OnDebugGameOverField = Function.remove(this.$1$OnDebugGameOverField, value);
	},
	$setup: function() {
		this.$myGateway.on('Area.Game.RoomInfo', Function.mkdel(this, function(a) {
			this.$1$OnGetRoomInfoField(a);
		}));
		this.$myGateway.on('Area.Debug.Log', Function.mkdel(this, function(a1) {
			this.$1$OnGetDebugLogField(a1);
		}));
		this.$myGateway.on('Area.Debug.Break', Function.mkdel(this, function(a2) {
			this.$1$OnGetDebugBreakField(a2);
		}));
		this.$myGateway.on('Area.Game.AskQuestion', Function.mkdel(this, function(a3) {
			this.$1$OnAskQuestionField(a3);
		}));
		this.$myGateway.on('Area.Game.UpdateState', Function.mkdel(this, function(a4) {
			this.$1$OnUpdateStateField(Type.cast(a4, String));
		}));
		this.$myGateway.on('Area.Game.Started', Function.mkdel(this, function(a5) {
			this.$1$OnGameStartedField(a5);
		}));
		this.$myGateway.on('Area.Game.GameOver', Function.mkdel(this, function(a6) {
			this.$1$OnGameOverField(Type.cast(a6, String));
		}));
		this.$myGateway.on('Area.Debug.GameOver', Function.mkdel(this, function(a7) {
			this.$1$OnDebugGameOverField(Type.cast(a7, String));
		}));
	},
	answerQuestion: function(gameAnswerQuestionModel) {
		this.$myGateway.emit('Area.Game.AnswerQuestion', gameAnswerQuestionModel, this.get_gameServer());
	},
	startGame: function(startGameRequestModel) {
		this.$myGateway.emit('Area.Game.Start', startGameRequestModel, this.get_gameServer());
	},
	createDebuggedGame: function(o) {
		this.$myGateway.emit('Area.Debug.Create', o, null);
	},
	joinDebugger: function(debuggerJoinRequestModel) {
		this.$myGateway.emit('Area.Game.DebuggerJoin', debuggerJoinRequestModel, this.get_gameServer());
	},
	joinPlayer: function(joinGameRequestModel) {
		this.$myGateway.emit('Area.Game.Join', joinGameRequestModel, this.get_gameServer());
	}
};
////////////////////////////////////////////////////////////////////////////////
// Client.ClientSiteManager
var $Client_ClientSiteManager = function(gateway) {
	this.$myGateway = null;
	this.$1$GameServerField = null;
	this.$1$OnLoginField = null;
	this.$myGateway = gateway;
	this.$setup();
};
$Client_ClientSiteManager.prototype = {
	get_gameServer: function() {
		return this.$1$GameServerField;
	},
	set_gameServer: function(value) {
		this.$1$GameServerField = value;
	},
	add_onLogin: function(value) {
		this.$1$OnLoginField = Function.combine(this.$1$OnLoginField, value);
	},
	remove_onLogin: function(value) {
		this.$1$OnLoginField = Function.remove(this.$1$OnLoginField, value);
	},
	$setup: function() {
		this.$myGateway.on('Area.Main.Login.Response', Function.mkdel(this, function(a) {
			var userLoginResponse = a;
			if (userLoginResponse.successful) {
				this.$siteLogin(userLoginResponse.hash);
			}
		}));
		this.$myGateway.on('Area.Site.Login.Response', Function.mkdel(this, function(a1) {
			this.$1$OnLoginField(a1);
		}));
	},
	$siteLogin: function(hash) {
		this.$myGateway.emit('Area.Site.Login', { hash: hash }, this.get_gameServer());
	},
	login: function(userName, password) {
		this.$myGateway.login(userName, password);
	},
	getGameList: function() {
		this.$myGateway.emit('Area.Game.GetGames', null, this.get_gameServer());
	}
};
////////////////////////////////////////////////////////////////////////////////
// Client.GameDrawer
var $Client_GameDrawer = function() {
	this.$cardImages = null;
	this.cards = {};
	this.$resetStyles = ['border-radius', '-moz-border-radius', 'left', 'top', '-webkit-border-radius', 'box-shadow', '-moz-box-shadow', 'transform', '-webkit-transform', 'padding', 'background-color', 'border'];
	this.spaces = {};
	this.$cardImages = {};
	for (var i = 101; i < 153; i++) {
		var img = new Image();
		var domain = window.topLevel + 'assets';
		var src = domain + '/cards/' + i;
		var jm;
		img.src = jm = Type.cast(src + '.gif', String);
		this.$cardImages[jm] = img;
	}
};
$Client_GameDrawer.prototype = {
	draw: function(data) {
		for (var $t1 = 0; $t1 < data.spaces.length; $t1++) {
			var space = data.spaces[$t1];
			space.appearance = this.$fixAppearance(space.appearance);
			for (var $t2 = 0; $t2 < space.pile.cards.length; $t2++) {
				var card = space.pile.cards[$t2];
				card.appearance = this.$fixAppearance(card.appearance);
			}
		}
		this.drawArea(data);
	},
	$fixAppearance: function(appearance) {
		return global.Appearance.fromJson(appearance);
	},
	drawArea: function(mainArea) {
		this.$newDrawArea(mainArea);
		for (var $t1 = 0; $t1 < mainArea.textAreas.length; $t1++) {
			var ta = mainArea.textAreas[$t1];
			//  gameboard.Context.FillStyle = "rgba(200, 0, 200, 0.5)";
			//  gameboard.Context.FillText(ta.Text, ta.X * scale.X, ta.Y * scale.Y);
		}
	},
	$findSpace: function(space) {
		var id = 'dv_space_' + space.name;
		if (ss.isValue(this.spaces[id])) {
			return this.spaces[id];
		}
		else {
			var sp = document.createElement('div');
			sp.id = id;
			sp.style.position = 'absolute';
			$('#dvGame').append(sp);
			return this.spaces[id] = new global.SpaceDrawing(sp);
		}
	},
	$findCard: function(wantedSpace, card) {
		var id = 'dv_card_' + card.type + '_' + card.value;
		var space = this.$findSpace(wantedSpace);
		var doc;
		if (ss.isValue(this.cards[id])) {
			var m = document.getElementById(id);
			if (!ss.referenceEquals(m.parentNode, space.outerElement)) {
				m.parentNode.removeChild(m);
				space.outerElement.appendChild(m);
			}
			doc = this.cards[id];
		}
		else {
			var sp = document.createElement('div');
			sp.id = id;
			$(space.outerElement).append(sp);
			var cardImage = this.$cloneImage(this.$cardImages[this.drawCard(card)]);
			sp.appendChild(cardImage);
			sp.style.position = 'absolute';
			doc = this.cards[id] = new global.CardDrawing(sp);
		}
		return doc;
	},
	$newDrawArea: function(mainArea) {
		//jQuery.Select("#dvGame").Children().Remove();
		var scale = new CommonLibraries.Point(ss.Int32.div(document.documentElement.clientWidth, mainArea.size.width) * 0.9, ss.Int32.div(document.documentElement.clientHeight - 250, mainArea.size.height) * 0.9);
		//ExtensionMethods.debugger(null);
		var sl = mainArea.spaces.length;
		//
		//                        for (int spaceIndex = 0; spaceIndex < sl; spaceIndex++)
		//
		//                        {
		//
		//                        var space = mainArea.Spaces[spaceIndex];
		//
		//                        var jf = findSpace(space).OuterElement;
		//
		//                        
		//
		//                        for (int i = 0; i < resetStyles.Length; i++)
		//
		//                        {
		//
		//                        jf.Style[resetStyles[i]] = null;
		//
		//                        }
		//
		//                        
		//
		//                        l = space.Pile.Cards.Count;
		//
		//                        for (int index = 0; index < l; index++)
		//
		//                        {
		//
		//                        var card = space.Pile.Cards[index];
		//
		//                        var m = findCard(space, card);
		//
		//                        
		//
		//                        for (int i = 0; i < resetStyles.Length; i++)
		//
		//                        {
		//
		//                        m.OuterElement.Style[resetStyles[i]] = null;
		//
		//                        m.Image.Style[resetStyles[i]] = null;
		//
		//                        }
		//
		//                        }
		//
		//                        }
		for (var index = 0; index < sl; index++) {
			var space = mainArea.spaces[index];
			var vertical = space.vertical;
			var spaceDiv = this.$findSpace(space);
			// var spaceDivJ = jQuery.FromElement(spaceDiv);
			//ExtensionMethods.debugger();
			var cl = space.appearance.effects.length;
			for (var i = 0; i < cl; i++) {
				var effect = space.appearance.effects[i];
				effect.build$1(spaceDiv);
			}
			spaceDiv.outerElementStyle.set_width(global.domUtils.px(space.width * scale.x));
			spaceDiv.outerElementStyle.set_height(global.domUtils.px(space.height * scale.y));
			//   gameboard.Context.FillRect(space.X * scale.X, space.Y * scale.Y, space.Width * scale.X, space.Height * scale.Y);
			var spaceScale = new CommonLibraries.Point(space.width / space.pile.cards.length, space.height / space.pile.cards.length);
			var j = 0;
			var numOfCards = space.pile.cards.length;
			for (var i1 = 0; i1 < numOfCards; i1++) {
				var card = space.pile.cards[i1];
				var xx = 0;
				var yy = 0;
				switch (space.resizeType) {
					case 1: {
						if (vertical) {
							yy = card.value * scale.y / 2;
						}
						else {
							xx = card.value * scale.x / 2;
						}
						break;
					}
					case 0: {
						xx = (!vertical ? (j * spaceScale.x * scale.x) : 0);
						yy = (vertical ? (j * spaceScale.y * scale.y) : 0);
						break;
					}
					default: {
						xx = (!vertical ? (j * spaceScale.x * scale.x) : 0);
						yy = (vertical ? (j * spaceScale.y * scale.y) : 0);
						break;
					}
				}
				var cardDiv = this.$findCard(space, card);
				xx -= global.domUtils.nopx(cardDiv.outerElementStyle.get_width()) / 2;
				yy -= global.domUtils.nopx(cardDiv.outerElementStyle.get_height()) / 2;
				cardDiv.outerElementStyle.set_borderRadius('5px');
				cardDiv.outerElementStyle.set_boxShadow('3px 3px 2px #2c2c2c');
				this.$styleAppearanceFromSpace(cardDiv, j, space);
				this.$styleAppearance(cardDiv, card.appearance);
				spaceDiv.outerElementStyle.set_left(global.domUtils.px(space.x * scale.x));
				spaceDiv.outerElementStyle.set_top(global.domUtils.px(space.y * scale.y));
				//cardDiv.OuterElement.Style["transform"] = 0.0.TransformRotate();
				cardDiv.outerElementStyle.set_left(global.domUtils.px(xx + (vertical ? (space.width * scale.x / 2) : 0)));
				cardDiv.outerElementStyle.set_top(global.domUtils.px(yy + (!vertical ? (space.height * scale.y / 2) : 0)));
				cardDiv.outerElementStyle.set_transform(global.domUtils.transformRotate(space.appearance.innerStyle.rotate));
				cardDiv.outerElementStyle.setStyle(cardDiv.outerElement);
				this.fixBrowserPrefixes(cardDiv.outerElement.style);
				//                    spaceDiv.AppendChild(cardDiv);
				j++;
				//effects
			}
			var el = space.appearance.effects.length;
			for (var i2 = 0; i2 < el; i2++) {
				var effect1 = space.appearance.effects[i2];
				effect1.tearDown$1(spaceDiv);
			}
		}
		for (var $t1 = 0; $t1 < mainArea.spaces.length; $t1++) {
			var space1 = mainArea.spaces[$t1];
			this.$findSpace(space1).outerElementStyle.setStyle(this.$findSpace(space1).outerElement);
			for (var $t2 = 0; $t2 < space1.pile.cards.length; $t2++) {
				var card1 = space1.pile.cards[$t2];
				//                    var m = findCard(space, card);
				this.$findSpace(space1).outerElementStyle.setStyle(this.$findSpace(space1).outerElement);
				//
				//                                        m.ImageStyle = new MyStyle();
				//
				//                                        m.OuterElementStyle = new MyStyle();
			}
		}
		//
		//
		//            foreach (var ta in mainArea.TextAreas)
		//
		//
		//            {
		//
		//
		//            gameboard.Context.FillStyle = "rgba(200, 0, 200, 0.5)";
		//
		//
		//            gameboard.Context.FillText(ta.Text, ta.X * scale.X, ta.Y * scale.Y);
		//
		//
		//            }
	},
	$styleAppearanceFromSpace: function(element, cardIndex, space) {
		var appearance = space.appearance;
		for (var $t1 = 0; $t1 < appearance.effects.length; $t1++) {
			var cardGameAppearanceEffect = appearance.effects[$t1];
			//   cardGameAppearanceEffect.Build(element.Item1);
			switch (cardGameAppearanceEffect.type) {
				case 2: {
					var bEffect = Type.cast(cardGameAppearanceEffect, global.Effect$Bend);
					var trans = element.outerElementStyle.get_transform();
					if (ss.coalesce(trans, '').startsWith('rotate(')) {
						element.outerElementStyle.set_transform(global.domUtils.transformRotate(-bEffect.degrees / 2 + bEffect.degrees / (space.pile.cards.length - 1) * cardIndex + global.domUtils.noTransformRotate(trans)));
					}
					else {
						element.outerElementStyle.set_transform(global.domUtils.transformRotate(appearance.innerStyle.rotate));
					}
					break;
				}
			}
		}
		element.outerElementStyle.set_backgroundColor(appearance.innerStyle.backColor);
	},
	$styleAppearance: function(element, appearance) {
		for (var $t1 = 0; $t1 < appearance.effects.length; $t1++) {
			var cardGameAppearanceEffect = appearance.effects[$t1];
			cardGameAppearanceEffect.build(element);
			//new object().debugger();
			cardGameAppearanceEffect.tearDown(element);
		}
		//rotate
		var trans = element.outerElementStyle.get_transform();
		if (ss.coalesce(trans, '').startsWith('rotate(')) {
			element.outerElementStyle.set_transform(String.format('rotate({0}deg)', appearance.innerStyle.rotate + parseInt(trans.replaceAll('rotate(', '').replaceAll('deg)', ''))));
		}
		else {
			element.outerElementStyle.set_transform(String.format('rotate({0}deg)', appearance.innerStyle.rotate));
		}
		element.outerElementStyle.set_backgroundColor(appearance.innerStyle.backColor);
	},
	fixBrowserPrefixes: function(cardImage) {
		if (ss.isValue(cardImage['transform'])) {
			cardImage['-webkit-transform'] = cardImage['transform'];
		}
		if (ss.isValue(cardImage['box-shadow'])) {
			cardImage['-moz-box-shadow'] = cardImage['box-shadow'];
			cardImage['-webkit-box-shadow'] = cardImage['box-shadow'];
		}
		if (ss.isValue(cardImage['border-radius'])) {
			cardImage['-moz-border-radius'] = cardImage['box-shadow'];
			cardImage['-webkit-border-radius'] = cardImage['box-shadow'];
		}
	},
	$cloneImage: function(cardImage) {
		var img = new Image();
		img.src = cardImage.src;
		return img;
	},
	drawCard: function(card) {
		var src = '';
		var domain = window.topLevel + 'assets';
		src = Type.cast(domain + '/cards/' + (100 + (card.value + 1) + card.type * 13), String);
		return src + '.gif';
	},
	canvasOnClick: function(e) {
		e.preventDefault();
	},
	canvasMouseMove: function(e) {
		e.preventDefault();
		document.body.style.cursor = 'default';
	},
	canvasMouseUp: function(e) {
		e.preventDefault();
	},
	handleScroll: function(e) {
		e.preventDefault();
	},
	clearCache: function() {
		this.cards = {};
		this.spaces = {};
	}
};
////////////////////////////////////////////////////////////////////////////////
// Client.GameInfo
var $Client_GameInfo = function() {
	this.roomID = '-1';
};
////////////////////////////////////////////////////////////////////////////////
// Client.Gateway
var $Client_Gateway = function(gatewayServer) {
	this.$channels = null;
	this.gatewaySocket = null;
	this.$channels = new (Type.makeGenericType(ss.Dictionary$2, [String, Function]))();
	this.gatewaySocket = io.connect(gatewayServer);
	this.gatewaySocket.on('Client.Message', Function.mkdel(this, function(data) {
		this.$channels.get_item(data.channel)(data.content);
	}));
};
$Client_Gateway.prototype = {
	emit: function(channel, content, gameServer) {
		this.gatewaySocket.emit('Gateway.Message', Models.GatewayMessageModel.$ctor(channel, content, gameServer));
	},
	on: function(channel, callback) {
		this.$channels.set_item(channel, callback);
	},
	login: function(userName, password) {
		var $t2 = this.gatewaySocket;
		var $t1 = new Models.UserModel();
		$t1.userName = userName;
		$t1.set_password(password);
		$t2.emit('Gateway.Login', $t1);
	}
};
////////////////////////////////////////////////////////////////////////////////
// Client.PageHandler
var $Client_PageHandler = function(gatewayServerAddress, buildSite) {
	this.$buildSite = null;
	this.clientGameManager = null;
	this.clientDebugManager = null;
	this.clientSiteManager = null;
	this.$endTime = 0;
	this.gameDrawer = null;
	this.gameStuff = null;
	this.$numOfTimes = 0;
	this.$startTime = 0;
	this.$timeValue = 0;
	this.$buildSite = buildSite;
	this.gameStuff = new $Client_GameInfo();
	this.gameDrawer = new $Client_GameDrawer();
	this.$startTime = Date.get_now();
	//            Window.SetTimeout(() => { buildSite.devArea.Data.beginGame(); }, 2000);
	var gateway = new $Client_Gateway(gatewayServerAddress);
	this.clientGameManager = new $Client_ClientGameManager(gateway);
	this.clientSiteManager = new $Client_ClientSiteManager(gateway);
	this.clientDebugManager = new $Client_ClientDebugManager(gateway);
	this.clientSiteManager.add_onLogin(function(data) {
		window.alert('GooooD!');
	});
	//gateway.On("Area.Lobby.ListCardGames.Response", (data) => { });
	//gateway.On("Area.Lobby.ListRooms.Response", (data) => { Console.Log(data); });
	var randomName = '';
	var ra = Math.random() * 10;
	for (var i = 0; i < ra; i++) {
		randomName += String.fromCharCode(ss.Int32.trunc(65 + Math.random() * 26));
	}
	this.clientDebugManager.add_onGetGameSource(Function.mkdel(this, function(gameSource) {
		var endTime = new Date();
		var time = endTime - this.$startTime;
		this.$numOfTimes++;
		this.$timeValue += time;
		buildSite.devArea.data.lblHowFast.set_text('Time Taken: ' + ss.Int32.div(this.$timeValue, this.$numOfTimes));
		buildSite.codeArea.data.codeEditor.information.editor.setValue(gameSource.content);
		//
		//                                                 buildSite.codeArea.Data.codeEditor.Information.editor.SetMarker(0, "<span style=\"color: #900\">&nbsp;&nbsp;</span> %N%");
		buildSite.codeArea.data.codeEditor.information.editor.refresh();
	}));
	//ie8
	//   {
	//   dynamic d2 = (Action<string, ElementEventHandler>)Document.Body.AttachEvent;
	//   
	//   var m = (Action<string, ElementEventHandler>)d2;
	//   m("contextmenu", () =>
	//   {
	//   
	//   });
	//   }
};
$Client_PageHandler.prototype = {
	startGameServer: function() {
		this.clientGameManager.add_onGetRoomInfo(Function.mkdel(this, function(roomInfo) {
			this.clientGameManager.set_gameServer(roomInfo.gameServer);
			this.gameStuff.roomID = roomInfo.roomID;
			this.$buildSite.home.data.loadRoomInfo(roomInfo);
			this.$buildSite.devArea.data.loadRoomInfo(roomInfo);
		}));
		//
		//                        gateway.On<GameRoom>("Area.Game.RoomInfos", data =>
		//
		//                        {
		//
		//                        buildSite.home.Data.loadRoomInfos(data);
		//
		//                        
		//
		//                        });
		this.clientGameManager.add_onGetDebugLog(Function.mkdel(this, function(gameAnswer) {
			this.$buildSite.home.data.loadRoomInfos(gameAnswer);
			var lines = this.$buildSite.codeArea.data.console.information.editor.getValue().split('\n');
			lines = lines.extract(lines.length - 40, 40);
			this.$buildSite.codeArea.data.console.information.editor.setValue(lines.join('\n') + '\n' + gameAnswer.value);
			this.$buildSite.codeArea.data.console.information.editor.setCursor(this.$buildSite.codeArea.data.console.information.editor.lineCount(), 0);
		}));
		this.clientGameManager.add_onGetDebugBreak(Function.mkdel(this, function(gameAnswer1) {
			this.$buildSite.home.data.loadRoomInfos(gameAnswer1);
			var cm = this.$buildSite.codeArea.data.codeEditor;
			//    cm.Information.editor.ClearMarker(gameAnswer.LineNumber);
			//    cm.Information.editor.SetMarker(gameAnswer.LineNumber, "<span style=\"color: #059\">●</span> %N%");
			//    cm.Information.editor.SetCursor(gameAnswer.LineNumber + 15, 0);
			//    cm.Information.editor.SetCursor(gameAnswer.LineNumber - 15, 0);
			//    cm.Information.editor.SetCursor(gameAnswer.LineNumber, 0);
		}));
		//
		//                        gateway.On("Area.Debug.VariableLookup.Response", data =>
		//
		//                        {
		//
		//                        Window.Alert(Json.Stringify(data));
		//
		//                        });
		this.clientGameManager.add_onAskQuestion(Function.mkdel(this, function(gameSendAnswerModel) {
			this.$buildSite.questionArea.data.load(gameSendAnswerModel);
			//alert(JSON.stringify(data));
			this.$endTime = new Date();
			var time = this.$endTime - this.$startTime;
			this.$buildSite.devArea.data.lblHowFast.set_text('how long: ' + time);
			window.setTimeout(Function.mkdel(this, function() {
				this.clientGameManager.answerQuestion({ roomID: this.gameStuff.roomID, answer: 1 });
				this.$buildSite.questionArea.set_visible(false);
				this.$startTime = new Date();
			}), 200);
		}));
		this.clientGameManager.add_onUpdateState(Function.mkdel(this, function(update) {
			var data = JSON.parse((new Compressor()).DecompressText(update));
			//  gameContext.Context.ClearRect(0, 0, gameContext.CanvasInfo.canvas.Width, gameContext.CanvasInfo.canvas.Height);
			this.gameDrawer.draw(data);
		}));
		this.clientGameManager.add_onGameStarted(function(room) {
			//alert(JSON.stringify(data));
		});
		this.clientGameManager.add_onGameOver(function(room1) {
			//alert(JSON.stringify(data));
		});
		this.clientGameManager.add_onDebugGameOver(function(room2) {
			//alert(JSON.stringify(data));
		});
	}
};
////////////////////////////////////////////////////////////////////////////////
// Client.ScriptLoader
var $Client_ScriptLoader = function() {
};
$Client_ScriptLoader.prototype = {
	$loadScript: function(url, cache, callback) {
		cache = false;
		var head = document.getElementsByTagName('head')[0];
		var script = document.createElement('script');
		script.type = 'text/javascript';
		script.src = url + (cache ? ('?' + Math.floor(Math.random() * 10000)) : '');
		//caching
		if (ss.isValue(callback)) {
			script.onreadystatechange = function(a) {
				if (!!(script.readyState === 'loaded' || script.readyState === 'complete')) {
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
		nextOne = Function.mkdel(this, function() {
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
$Client_ScriptLoader.loadCss = function(filename) {
	var fileref = document.createElement('link');
	fileref.setAttribute('rel', 'stylesheet');
	fileref.setAttribute('type', 'text/css');
	fileref.setAttribute('href', filename);
	document.getElementsByTagName('head')[0].appendChild(fileref);
};
////////////////////////////////////////////////////////////////////////////////
// Client.Information.CodeAreaInformation
var $Client_Information_CodeAreaInformation = function() {
	this.codeEditor = null;
	this.console = null;
	this.breakPoints = null;
};
////////////////////////////////////////////////////////////////////////////////
// Client.Information.DevAreaInformation
var $Client_Information_DevAreaInformation = function() {
	this.txtNumOfPlayers = null;
	this.loadRoomInfo = null;
	this.varText = null;
	this.lblAnother = null;
	this.lblHowFast = null;
	this.gameServer = null;
	this.beginGame = null;
	this.joined = 0;
	this.created = false;
};
////////////////////////////////////////////////////////////////////////////////
// Client.Information.HomeAreaInformation
var $Client_Information_HomeAreaInformation = function() {
	this.loadRoomInfos = null;
	this.userList = null;
	this.gameList = null;
	this.txtUserName = null;
	this.btnStartGame = null;
	this.loadRoomInfo = null;
};
////////////////////////////////////////////////////////////////////////////////
// Client.Information.QuestionAreaInformation
var $Client_Information_QuestionAreaInformation = function() {
};
$Client_Information_QuestionAreaInformation.createInstance = function() {
	return $Client_Information_QuestionAreaInformation.$ctor();
};
$Client_Information_QuestionAreaInformation.$ctor = function() {
	var $this = {};
	$this.question = null;
	$this.answerBox = null;
	$this.load = null;
	return $this;
};
Type.registerClass(global, 'Globals', $Globals, Object);
Type.registerClass(global, 'LoginUI', $LoginUI, Object);
Type.registerClass(global, 'Client.BuildSite', $Client_BuildSite, Object);
Type.registerClass(global, 'Client.ClientDebugManager', $Client_ClientDebugManager, Object);
Type.registerClass(global, 'Client.ClientGameManager', $Client_ClientGameManager, Object);
Type.registerClass(global, 'Client.ClientSiteManager', $Client_ClientSiteManager, Object);
Type.registerClass(global, 'Client.GameDrawer', $Client_GameDrawer, Object);
Type.registerClass(global, 'Client.GameInfo', $Client_GameInfo, Object);
Type.registerClass(global, 'Client.Gateway', $Client_Gateway, Object);
Type.registerClass(global, 'Client.PageHandler', $Client_PageHandler, Object);
Type.registerClass(global, 'Client.ScriptLoader', $Client_ScriptLoader, Object);
Type.registerClass(global, 'Client.Information.CodeAreaInformation', $Client_Information_CodeAreaInformation, Object);
Type.registerClass(global, 'Client.Information.DevAreaInformation', $Client_Information_DevAreaInformation, Object);
Type.registerClass(global, 'Client.Information.HomeAreaInformation', $Client_Information_HomeAreaInformation, Object);
Type.registerClass(global, 'Client.Information.QuestionAreaInformation', $Client_Information_QuestionAreaInformation, Object);
$Client_BuildSite.instance = null;
