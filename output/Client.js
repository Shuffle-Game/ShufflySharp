
Type.registerNamespace('Client');
////////////////////////////////////////////////////////////////////////////////
// Client.BuildSite
Client.BuildSite = function(gatewayServerAddress) {
	this.$gatewayServerAddress = null;
	this.$scriptLoader = new Client.ScriptLoader();
	this.home = null;
	this.devArea = null;
	this.questionArea = null;
	this.codeArea = null;
	this.$gatewayServerAddress = gatewayServerAddress;
	var url = 'http://50.116.22.241:8881/';
	//       window .topLevel = url;
	this.$loadCss(url + 'lib/jquery-ui-1.8.20.custom.css');
	this.$loadCss(url + 'lib/codemirror/codemirror.css');
	this.$loadCss(url + 'lib/site.css');
	this.$loadCss(url + 'lib/codemirror/theme/night.css');
	this.$loadCss(url + 'lib/jqwidgets/styles/jqx.base.css');
	this.$scriptLoader.loadSync([url + 'lib/jquery-1.7.2.min.js', url + 'lib/jquery-ui-1.8.20.custom.min.js', url + 'lib/jqwidgets/scripts/gettheme.js', url + 'lib/jqwidgets/jqxcore.js'], Function.mkdel(this, function() {
		this.$scriptLoader.load([url + 'lib/jqwidgets/jqxbuttons.js', url + 'lib/jqwidgets/jqxscrollbar.js', url + 'lib/linq.js', url + 'lib/tween.js', url + 'lib/socket.io.js', url + 'lib/codemirror/codemirror.js', url + 'lib/jqwidgets/jqxlistbox.js'], Function.mkdel(this, function() {
			this.$scriptLoader.load([url + 'lib/codemirror/mode/javascript/javascript.js', url + 'lib/WorkerConsole.js', url + 'lib/FunctionWorker.js', url + 'lib/Stats.js', url + 'lib/keyboardjs.js', url + 'lib/Dialog.js'], Function.mkdel(this, this.$ready));
		}));
	}));
};
Client.BuildSite.prototype = {
	$ready: function() {
		var elem = document.getElementById('loading');
		elem.parentNode.removeChild(elem);
		var stats = new xStats();
		document.body.appendChild(stats.element);
		var pageHandler = new Client.PageHandler(this.$gatewayServerAddress, this);
		var shuffUIManager = new Client.ShuffUI.ShuffUIManager();
		(window).shuffUIManager = shuffUIManager;
		var $t1 = new (Type.makeGenericType(Client.ShuffUI.ShuffWindow$1, [Client.HomeAreaInformation]))(new Client.HomeAreaInformation());
		$t1.title = 'CardGame';
		$t1.set_x(($('body')).innerWidth() - 500);
		$t1.set_y(100);
		$t1.set_width('420');
		$t1.set_height('450');
		$t1.allowClose = true;
		$t1.allowMinimize = true;
		$t1.set_visible(false);
		this.home = shuffUIManager.createWindow(Client.HomeAreaInformation).call(shuffUIManager, $t1);
		var $t3 = this.home;
		var $t2 = new Client.ShuffUI.ShuffButton();
		$t2.set_x(280);
		$t2.set_y(54);
		$t2.set_width('150');
		$t2.set_height('25');
		$t2.set_text('Update Game List');
		$t2.set_click(Function.mkdel(this, function(e) {
			pageHandler.gateway.emit('Area.Game.GetGames', this.devArea.get_data().gameServer, null);
			//NO EMIT'ING OUTSIDE OF PageHandler
		}));
		$t3.addButton($t2);
		var $t5 = this.home;
		var $t4 = new Client.ShuffUI.ShuffButton();
		$t4.set_x(280);
		$t4.set_y(84);
		$t4.set_width('150');
		$t4.set_height('25');
		$t4.set_text('Create Game');
		$t4.set_click(Function.mkdel(this, function(e1) {
			pageHandler.gateway.emit('Area.Game.Create', { User: { UserName: (this.home.get_data().txtUserName[0]).nodeValue } }, this.devArea.get_data().gameServer);
			//NO EMIT'ING OUTSIDE OF PageHandler
		}));
		$t5.addButton($t4);
		var $t7 = this.home;
		var $t6 = new Client.ShuffUI.ShuffButton();
		$t6.set_x(280);
		$t6.set_y(84);
		$t6.set_width('150');
		$t6.set_height('25');
		$t6.set_text('Create Game');
		$t6.set_click(Function.mkdel(this, function(e2) {
			pageHandler.gateway.emit('Area.Game.Create', { User: { UserName: this.home.get_data().txtUserName.get(0).nodeValue } }, this.devArea.get_data().gameServer);
			//NO EMIT'ING OUTSIDE OF PageHandler
		}));
		$t7.addButton($t6);
		var $t10 = this.home.get_data();
		var $t9 = this.home;
		var $t8 = new Client.ShuffUI.ShuffButton();
		$t8.set_x(280);
		$t8.set_y(164);
		$t8.set_width('120');
		$t8.set_height('25');
		$t8.set_text('Start Game');
		$t8.set_click(Function.mkdel(this, function(e3) {
			pageHandler.gateway.emit('Area.Game.Start', { roomID: pageHandler.gameStuff.roomID }, this.devArea.get_data().gameServer);
			//NO EMIT"ING OUTSIDE OF PageHandler
		}));
		$t10.btnStartGame = $t9.addButton($t8);
		var randomName = '';
		var ra = Math.random() * 10;
		for (var i = 0; i < ra; i++) {
			randomName += String.fromCharCode(ss.Int32.trunc(65 + Math.random() * 26));
		}
		var $t13 = this.home.get_data();
		var $t12 = this.home;
		var $t11 = new Client.ShuffUI.ShuffTextBox();
		$t11.set_x(130);
		$t11.set_y(43);
		$t11.set_width('130');
		$t11.set_height('20');
		$t11.set_text(randomName);
		$t11.set_label('Username=');
		$t13.txtUserName = $t12.addTextbox($t11);
		//
		//        genericArea.gameList = home.addListBox({
		//
		//        x: 30,
		//
		//        y: 85,
		//
		//        width: 215,
		//
		//        height: 25 * 6,
		//
		//        label: "Rooms",
		//
		//        click: function () {
		//
		//        window.PageHandler.gateway.emit("Area.Game.Join", { roomID: id, user: { userName: genericArea.txtUserName[0].value} }, devArea.gameServer); //NO EMIT"ING OUTSIDE OF PageHandler
		//
		//        }
		//
		//        });
		//
		//        genericArea.userList = home.addListBox({
		//
		//        x: 30,
		//
		//        y: 280,
		//
		//        width: 215,
		//
		//        height: 25 * 5,
		//
		//        label: "Users"
		//
		//        });
		//
		//        
		//
		//        
		//
		//        
		//
		//        genericArea.loadRoomInfo = function (room) {
		//
		//        
		//
		//        
		//
		//        genericArea.userList.remove();
		//
		//        genericArea.btnStartGame.visible(true);
		//
		//        
		//
		//        var users = [];
		//
		//        
		//
		//        for (var i = 0; i < room.players.length; i++) {
		//
		//        
		//
		//        users.push(room.players[i]);
		//
		//        
		//
		//        }
		//
		//        
		//
		//        
		//
		//        genericArea.userList = home.addListBox({
		//
		//        x: 30,
		//
		//        y: 280,
		//
		//        width: 215,
		//
		//        height: 25 * 5,
		//
		//        label: "Users",
		//
		//        items: users
		//
		//        });
		//
		//        
		//
		//        };
		//
		//        
		//
		//        genericArea.loadRoomInfos = function (room) {
		//
		//        genericArea.gameList.remove();
		//
		//        
		//
		//        var rooms = [];
		//
		//        
		//
		//        for (var i = 0; i < room.length; i++) {
		//
		//        rooms.push({ label: room[i].name, value: room[i].roomID });
		//
		//        }
		//
		//        
		//
		//        
		//
		//        genericArea.gameList = home.addListBox({
		//
		//        x: 30,
		//
		//        y: 85,
		//
		//        width: 215,
		//
		//        height: 25 * 6,
		//
		//        label: "Rooms",
		//
		//        items: rooms,
		//
		//        click: function (item) {
		//
		//        window.PageHandler.gateway.emit("Area.Game.Join", { roomID: item.value, user: { userName: genericArea.txtUserName.val()} }, devArea.gameServer); //NO EMIT"ING OUTSIDE OF PageHandler
		//
		//        }
		//
		//        });
		//
		//        };
		var $t14 = new (Type.makeGenericType(Client.ShuffUI.ShuffWindow$1, [Client.DevAreaInformation]))(new Client.DevAreaInformation());
		$t14.title = 'Developer';
		$t14.set_x(($('body')).innerWidth() - 500);
		$t14.set_y(100);
		$t14.set_width('420');
		$t14.set_height('450');
		$t14.allowClose = true;
		$t14.allowMinimize = true;
		this.devArea = shuffUIManager.createWindow(Client.DevAreaInformation).call(shuffUIManager, $t14);
		this.devArea.get_data().beginGame = Function.mkdel(this, function() {
			this.devArea.get_data().created = false;
			this.devArea.get_data().joined = 0;
			pageHandler.startGameServer();
			pageHandler.gateway.emit('Area.Debug.Create', { user: { userName: this.devArea.get_data().txtNumOfPlayers.val() }, Name: 'main room', Source: (window).shuffUIManager.codeArea.codeEditor.getValue(), BreakPoints: (window).shuffUIManager.codeArea.breakPoints }, null);
		});
		var $t16 = this.devArea;
		var $t15 = new Client.ShuffUI.ShuffButton();
		$t15.set_x(280);
		$t15.set_y(54);
		$t15.set_width('150');
		$t15.set_height('25');
		$t15.set_text('Begin Game');
		$t15.set_click(Function.mkdel(this, function(e4) {
			this.devArea.get_data().beginGame();
		}));
		$t16.addButton($t15);
		var $t19 = this.devArea.get_data();
		var $t18 = this.devArea;
		var $t17 = new Client.ShuffUI.ShuffLabel();
		$t17.set_x(80);
		$t17.set_y(80);
		$t17.set_width('250');
		$t17.set_height('25');
		$t17.set_text('How Many= ');
		$t19.lblHowFast = $t18.addLabel($t17);
		var $t22 = this.devArea.get_data();
		var $t21 = this.devArea;
		var $t20 = new Client.ShuffUI.ShuffLabel();
		$t20.set_x(80);
		$t20.set_y(100);
		$t20.set_width('250');
		$t20.set_height('25');
		$t20.set_text('Another: ');
		$t22.lblAnother = $t21.addLabel($t20);
		var $t24 = this.devArea;
		var $t23 = new Client.ShuffUI.ShuffButton();
		$t23.set_x(280);
		$t23.set_y(94);
		$t23.set_width('150');
		$t23.set_height('25');
		$t23.set_text('Continue');
		$t23.set_click(Function.mkdel(this, function(evt) {
			pageHandler.gateway.emit('Area.Debug.Continue', {}, this.devArea.get_data().gameServer);
			//NO EMIT"ING OUTSIDE OF PageHandler
		}));
		$t24.addButton($t23);
		var $t26 = this.devArea;
		var $t25 = new Client.ShuffUI.ShuffPropertyBox();
		$t25.set_x(25);
		$t25.set_y(200);
		$t25.set_width('250');
		$t25.set_height('250');
		$t25.set_itemCreation(function(item, index) {
			var ik = $('<div style=\'width=100%;height=25px; background-color=' + ((index % 2 === 0) ? 'red' : 'green') + ';\'></div>');
			var ikc = $(Type.cast('<div style=\'width=50%;height=25px; float=left;\'>' + item.key + '</div>', String));
			ik.append(ikc);
			var ikd = $(Type.cast('<input type=\'text\' style=\'width=48%;height=25px\' value=\'' + item.value + '\' />', String));
			ik.append(ikd);
			return ik;
		});
		var propBox = $t26.addPropertyBox($t25);
		(propBox).addItem({ key: 'Foos', value: '99' });
		(propBox).addItem({ key: 'Foos', value: '99' });
		(propBox).addItem({ key: 'Foos', value: '99' });
		(propBox).addItem({ key: 'Foos', value: '99' });
		(propBox).addItem({ key: 'Foos', value: '99' });
		(propBox).addItem({ key: 'Foos', value: '99' });
		(propBox).addItem({ key: 'Foos', value: '99' });
		(propBox).addItem({ key: 'Foos', value: '99' });
		(propBox).addItem({ key: 'Foos', value: '99' });
		(propBox).addItem({ key: 'Foos', value: '99' });
		(propBox).addItem({ key: 'Foos', value: '99' });
		(propBox).addItem({ key: 'Foos', value: '99' });
		(propBox).addItem({ key: 'Foos', value: '99' });
		(propBox).addItem({ key: 'Foos', value: '99' });
		(propBox).addItem({ key: 'Foos', value: '99' });
		(propBox).addItem({ key: 'Foos', value: '99' });
		(propBox).addItem({ key: 'Foos', value: '99' });
		var $t29 = this.devArea.get_data();
		var $t28 = this.devArea;
		var $t27 = new Client.ShuffUI.ShuffTextBox();
		$t27.set_x(150);
		$t27.set_y(134);
		$t27.set_width('100');
		$t27.set_height('25');
		$t27.set_label('Var Lookup');
		$t29.varText = $t28.addTextbox($t27);
		var $t31 = this.devArea;
		var $t30 = new Client.ShuffUI.ShuffButton();
		$t30.set_x(280);
		$t30.set_y(134);
		$t30.set_width('150');
		$t30.set_height('25');
		$t30.set_text('Lookup');
		$t30.set_click(Function.mkdel(this, function(evt1) {
			pageHandler.gateway.emit('Area.Debug.VariableLookup.Request', { variableName: this.devArea.get_data().varText.val() }, this.devArea.get_data().gameServer);
			//NO EMIT"ING OUTSIDE OF PageHandler
		}));
		$t31.addButton($t30);
		var $t33 = this.devArea;
		var $t32 = new Client.ShuffUI.ShuffButton();
		$t32.set_x(280);
		$t32.set_y(164);
		$t32.set_width('150');
		$t32.set_height('25');
		$t32.set_text('Push New Source');
		$t32.set_click(Function.mkdel(this, function(evt2) {
			pageHandler.gateway.emit('Area.Debug.PushNewSource', { source: (window).shuffUIManager.codeArea.codeEditor.getValue(), breakPoints: (window).shuffUIManager.codeArea.breakPoints }, this.devArea.get_data().gameServer);
			//NO EMIT"ING OUTSIDE OF PageHandler
		}));
		$t33.addButton($t32);
		this.devArea.get_data().loadRoomInfo = Function.mkdel(this, function(room) {
			this.devArea.get_data().gameServer = Type.cast(room.gameServer, String);
			this.devArea.get_data().lblAnother.text(room.gameServer);
			var count = parseInt(this.devArea.get_data().txtNumOfPlayers.val());
			if (!this.devArea.get_data().created) {
				pageHandler.gateway.emit('Area.Game.DebuggerJoin', { roomID: room.roomID }, this.devArea.get_data().gameServer);
				//NO EMIT"ING OUTSIDE OF PageHandler
				for (var i1 = 0; i1 < count; i1++) {
					pageHandler.gateway.emit('Area.Game.Join', { roomID: room.roomID, user: { userName: 'player ' + (i1 + 1) } }, this.devArea.get_data().gameServer);
					//NO EMIT"ING OUTSIDE OF PageHandler
				}
				this.devArea.get_data().created = true;
			}
			else if (++this.devArea.get_data().joined === count) {
				pageHandler.gateway.emit('Area.Game.Start', { roomID: room.roomID }, this.devArea.get_data().gameServer);
				//NO EMIT"ING OUTSIDE OF PageHandler
			}
		});
		var $t36 = this.devArea.get_data();
		var $t35 = this.devArea;
		var $t34 = new Client.ShuffUI.ShuffTextBox();
		$t34.set_x(130);
		$t34.set_y(43);
		$t34.set_width('130');
		$t34.set_height('20');
		$t34.set_text('6');
		$t34.set_label('Number of players=');
		$t34.set_labelStyle('font-size=13px');
		$t36.txtNumOfPlayers = $t35.addTextbox($t34);
		var $t37 = new (Type.makeGenericType(Client.ShuffUI.ShuffWindow$1, [Client.CodeAreaInformation]))(new Client.CodeAreaInformation());
		$t37.title = 'Code';
		$t37.set_x(0);
		$t37.set_y(0);
		$t37.static = true;
		$t37.set_width(ss.Int32.trunc(($(window)).width() * 0.5).toString());
		$t37.set_height(ss.Int32.trunc(($(window)).height() * 0.9).toString());
		$t37.allowClose = true;
		$t37.allowMinimize = true;
		$t37.set_visible(true);
		this.codeArea = shuffUIManager.createWindow(Client.CodeAreaInformation).call(shuffUIManager, $t37);
		this.codeArea.get_data().breakPoints = new Array();
		var $t40 = this.codeArea.get_data();
		var $t39 = this.codeArea;
		var $t38 = new Client.ShuffUI.ShuffCodeEditor();
		$t38.set_height('20%');
		$t38.set_lineNumbers(false);
		$t40.console = $t39.addCodeEditor($t38);
		var $t43 = this.codeArea.get_data();
		var $t42 = this.codeArea;
		var $t41 = new Client.ShuffUI.ShuffCodeEditor();
		$t41.set_height('80%');
		$t41.set_lineNumbers(true);
		$t43.codeEditor = $t42.addCodeEditor($t41);
		//
		//             
		//        var questionArea = shuffUIManager.createWindow({
		//
		//             
		//        title: "Question",
		//
		//             
		//        x: 600,
		//
		//             
		//        y: 100,
		//
		//             
		//        width: 300,
		//
		//             
		//        height: 275,
		//
		//             
		//        allowClose: true,
		//
		//             
		//        allowMinimize: true,
		//
		//             
		//        visible: false
		//
		//             
		//        
		//
		//             
		//        });
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
		//        window.shuffUIManager.questionArea = questionArea;
		//
		//             
		//        
		//
		//             
		//        
		//
		//             
		//        window.shuffUIManager.questionArea.question = questionArea.addLabel({
		//
		//             
		//        x: 20,
		//
		//             
		//        y: 5,
		//
		//             
		//        width: 150,
		//
		//             
		//        height: 25,
		//
		//             
		//        text: "",
		//
		//             
		//        click: function (e) {
		//
		//             
		//        window.PageHandler.gateway.emit("Area.Game.GetGames", devArea.gameServer); //NO EMIT"ING OUTSIDE OF PageHandler
		//
		//             
		//        
		//
		//             
		//        }
		//
		//             
		//        });
		//
		//             
		//        
		//
		//             
		//        
		//
		//             
		//        window.shuffUIManager.questionArea.load = function (question) {
		//
		//             
		//        window.shuffUIManager.questionArea.visible(true);
		//
		//             
		//        window.shuffUIManager.questionArea.question.text = question.question;
		//
		//             
		//        window.shuffUIManager.questionArea.answerBox.remove();
		//
		//             
		//        
		//
		//             
		//        var answers = [];
		//
		//             
		//        for (var i = 0; i < question.answers.length; i++) {
		//
		//             
		//        answers.push({ label: question.answers[i], value: i });
		//
		//             
		//        }
		//
		//             
		//        
		//
		//             
		//        window.shuffUIManager.questionArea.answerBox = questionArea.addListBox({
		//
		//             
		//        x: 30,
		//
		//             
		//        y: 65,
		//
		//             
		//        width: 215,
		//
		//             
		//        height: 25 * 5,
		//
		//             
		//        label: "Answers",
		//
		//             
		//        items: answers,
		//
		//             
		//        click: function (item) {
		//
		//             
		//        window.PageHandler.gateway.emit("Area.Game.AnswerQuestion", { answer: item.value, roomID: window.PageHandler.gameStuff.roomID }, devArea.gameServer);
		//
		//             
		//        window.shuffUIManager.questionArea.visible(false);
		//
		//             
		//        
		//
		//             
		//        }
		//
		//             
		//        });
		//
		//             
		//        
		//
		//             
		//        };
		//
		//             
		//        
		//
		//             
		//        window.shuffUIManager.questionArea.answerBox = questionArea.addListBox({
		//
		//             
		//        x: 30,
		//
		//             
		//        y: 65,
		//
		//             
		//        width: 215,
		//
		//             
		//        height: 25 * 5,
		//
		//             
		//        label: "Answers",
		//
		//             
		//        click: function (item) {
		//
		//             
		//        window.PageHandler.gateway.emit("Area.Game.AnswerQuestion", { answer: item.index, roomID: window.PageHandler.gameStuff.roomID }, devArea.gameServer);
		//
		//             
		//        window.shuffUIManager.questionArea.visible = false;
		//
		//             
		//        
		//
		//             
		//        }
		//
		//             
		//        });
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
		//        var chatArea = shuffUIManager.createWindow({
		//
		//             
		//        title: "Chat",
		//
		//             
		//        x: 600,
		//
		//             
		//        y: 100,
		//
		//             
		//        width: 300,
		//
		//             
		//        height: 275,
		//
		//             
		//        allowClose: true,
		//
		//             
		//        allowMinimize: true,
		//
		//             
		//        visible: false
		//
		//             
		//        
		//
		//             
		//        });
	},
	$loadCss: function(filename) {
		var fileref = document.createElement('link');
		fileref.setAttribute('rel', 'stylesheet');
		fileref.setAttribute('type', 'text/css');
		fileref.setAttribute('href', filename);
		(document.getElementsByTagName('head')[0]).appendChild(fileref);
	}
};
////////////////////////////////////////////////////////////////////////////////
// Client.CardGameArea
Client.CardGameArea = function() {
	this.size = null;
	this.spaces = null;
	this.textAreas = null;
};
////////////////////////////////////////////////////////////////////////////////
// Client.CardGameAreaSpace
Client.CardGameAreaSpace = function() {
	this.vertical = false;
	this.x = 0;
	this.y = 0;
	this.width = 0;
	this.height = 0;
	this.pile = null;
	this.rotate = 0;
};
////////////////////////////////////////////////////////////////////////////////
// Client.CardGameCard
Client.CardGameCard = function() {
	this.value = 0;
	this.type = 0;
	this.effects = null;
};
////////////////////////////////////////////////////////////////////////////////
// Client.CardGameEffect
Client.CardGameEffect = function() {
	this.type = 0;
	this.radius = 0;
	this.color = null;
	this.rotate = 0;
	this.offsetX = 0;
	this.offsetY = 0;
};
////////////////////////////////////////////////////////////////////////////////
// Client.CardGamePile
Client.CardGamePile = function() {
	this.cards = null;
};
////////////////////////////////////////////////////////////////////////////////
// Client.CardGameTextArea
Client.CardGameTextArea = function() {
	this.text = null;
	this.x = 0;
	this.y = 0;
};
////////////////////////////////////////////////////////////////////////////////
// Client.ClientHelp
Client.ClientHelp = function() {
};
////////////////////////////////////////////////////////////////////////////////
// Client.CodeAreaInformation
Client.CodeAreaInformation = function() {
	this.codeEditor = null;
	this.console = null;
	this.breakPoints = null;
};
////////////////////////////////////////////////////////////////////////////////
// Client.DevAreaInformation
Client.DevAreaInformation = function() {
	this.txtNumOfPlayers = null;
	this.loadRoomInfo = null;
	this.varText = null;
	this.lblAnother = null;
	this.lblHowFast = null;
	this.gameServer = null;
	this.beginGame = null;
	this.joined = 0;
	this.created = false;
	this.loadRoomInfos = null;
};
////////////////////////////////////////////////////////////////////////////////
// Client.EffectType
Client.EffectType = function() {
};
Client.EffectType.prototype = {};
Client.EffectType.registerEnum('Client.EffectType', false);
////////////////////////////////////////////////////////////////////////////////
// Client.GameInfo
Client.GameInfo = function() {
	this.roomID = -1;
};
////////////////////////////////////////////////////////////////////////////////
// Client.Gateway
Client.Gateway = function(gatewayServer) {
	this.$channels = null;
	this.$1$GatewaySocketField = null;
	this.$channels = ({});
	this.set_gatewaySocket(io.connect(gatewayServer));
	this.get_gatewaySocket().on('Client.Message', Function.mkdel(this, function(data) {
		this.$channels[Type.cast(data.channel, String)](data.content);
	}));
};
Client.Gateway.prototype = {
	get_gatewaySocket: function() {
		return this.$1$GatewaySocketField;
	},
	set_gatewaySocket: function(value) {
		this.$1$GatewaySocketField = value;
	},
	emit: function(channel, content, gameServer) {
		this.get_gatewaySocket().emit('Gateway.Message', { Channel: channel, Content: content, GameServer: gameServer });
	},
	on: function(channel, callback) {
		this.$channels[channel] = callback;
	},
	login: function(userName) {
		this.get_gatewaySocket().emit('Gateway.Login', { Username: userName });
	}
};
////////////////////////////////////////////////////////////////////////////////
// Client.HomeAreaInformation
Client.HomeAreaInformation = function() {
	this.txtUserName = null;
	this.btnStartGame = null;
	this.loadRoomInfo = null;
};
////////////////////////////////////////////////////////////////////////////////
// Client.PageHandler
Client.PageHandler = function(gatewayServerAddress, buildSite) {
	this.$buildSite = null;
	this.gateway = null;
	this.$lastMouseMove = null;
	this.$lastMainArea = null;
	this.$gameContext = null;
	this.$startTime = null;
	this.$numOfTimes = 0;
	this.$timeValue = 0;
	this.$cardImages = null;
	this.$gameCanvas = null;
	this.gameStuff = null;
	this.$endTime = null;
	this.$buildSite = buildSite;
	this.gameStuff = new Client.GameInfo();
	this.$startTime = Date.get_now();
	window.setTimeout(function() {
		buildSite.devArea.get_data().beginGame();
	}, 2000);
	this.gateway = new Client.Gateway(gatewayServerAddress);
	this.gateway.on('Area.Main.Login.Response', function(data) {
		window.alert(JSON.stringify(data));
	});
	this.gateway.on('Area.Lobby.ListCardGames.Response', function(data1) {
	});
	this.gateway.on('Area.Lobby.ListRooms.Response', function(data2) {
		console.log(data2);
	});
	var randomName = '';
	var ra = Math.random() * 10;
	for (var i = 0; i < ra; i++) {
		randomName += String.fromCharCode(ss.Int32.trunc(65 + Math.random() * 26));
	}
	this.gateway.login(randomName);
	this.gateway.on('Area.Debug.GetGameSource.Response', Function.mkdel(this, function(data3) {
		var endTime = new Date();
		var time = endTime - this.$startTime;
		this.$numOfTimes++;
		this.$timeValue += time;
		buildSite.devArea.get_data().lblHowFast.text('How Many: ' + ss.Int32.div(this.$timeValue, this.$numOfTimes));
		buildSite.codeArea.get_data().codeEditor.setValue(data3);
		buildSite.codeArea.get_data().codeEditor.setMarker(0, '<span style="color: #900">&nbsp;&nbsp;</span> %N%');
		buildSite.codeArea.get_data().codeEditor.refresh();
	}));
	this.gateway.emit('Area.Debug2.GetGameSource.Request', { gameName: 'Sevens' }, null);
	this.$cardImages = ({});
	for (var i1 = 101; i1 < 153; i1++) {
		var img = new Image();
		var domain = (window).topLevel + 'client/assets';
		var src = domain + '/cards/' + i1;
		var jm;
		img.src = jm = Type.cast(src + '.gif', String);
		this.$cardImages[jm] = img;
	}
	this.$lastMainArea = null;
	($('body')).append(this.$gameCanvas = document.createElement('canvas'));
	var props = {};
	props['margin'] = '0px';
	props['position'] = 'absolute';
	props['top'] = '0px';
	props['left'] = ($(window)).width() * 0.5 + 'px';
	props['z-index'] = ($(window)).width() * 0.5 + 'px';
	($(this.$gameCanvas)).css(props);
	//todo css prop object
	this.$gameContext = this.$gameCanvas.getContext('2d');
	(this.$gameContext).canvas = this.$gameCanvas;
	(this.$gameContext).domCanvas = ($(this.$gameCanvas));
	(this.$gameContext).canvas.width = ($(window)).width() * 0.5;
	(this.$gameContext).canvas.height = ($(window)).height();
	this.$lastMouseMove = false;
	this.$gameCanvas.addEventListener('DOMMouseScroll', Function.mkdel(this, this.handleScroll), false);
	this.$gameCanvas.addEventListener('mousewheel', Function.mkdel(this, this.handleScroll), false);
	this.$gameCanvas.addEventListener('touchmove', Function.mkdel(this, this.canvasMouseMove), true);
	this.$gameCanvas.addEventListener('touchstart', Function.mkdel(this, this.canvasOnClick), true);
	this.$gameCanvas.addEventListener('touchend', Function.mkdel(this, this.canvasMouseUp), true);
	this.$gameCanvas.addEventListener('mousedown', Function.mkdel(this, this.canvasMouseMove), true);
	this.$gameCanvas.addEventListener('mouseup', Function.mkdel(this, this.canvasOnClick), true);
	this.$gameCanvas.addEventListener('mousemove', Function.mkdel(this, this.canvasMouseUp), true);
	this.$gameCanvas.addEventListener('contextmenu', function(e) {
		e.preventDefault();
		//todo: Sspecial right click menu;
	}, false);
	($(window)).resize(Function.mkdel(this, this.resizeCanvas));
	this.resizeCanvas(null);
	window.setInterval(Function.mkdel(this, this.draw), 16);
};
Client.PageHandler.prototype = {
	startGameServer: function() {
		this.gateway.on('Area.Game.RoomInfo', Function.mkdel(this, function(data) {
			this.gameStuff.roomID = ss.Nullable.unbox(Type.cast(data.roomID, ss.Int32));
			this.$buildSite.home.get_data().loadRoomInfo(data);
			this.$buildSite.devArea.get_data().loadRoomInfo(data);
		}));
		this.gateway.on('Area.Game.RoomInfos', Function.mkdel(this, function(data1) {
			this.$buildSite.devArea.get_data().loadRoomInfos(data1);
		}));
		this.gateway.on('Area.Debug.Log', Function.mkdel(this, function(data2) {
			this.$buildSite.devArea.get_data().loadRoomInfos(data2);
			var lines = this.$buildSite.codeArea.get_data().console.getValue().split(String.fromCharCode(10));
			lines = Type.cast((lines).slice(lines.length - 40, lines.length), Array);
			(this.$buildSite.codeArea).console.setValue((lines).join(10) + '\n' + data2.value);
			(this.$buildSite.codeArea).console.setCursor((this.$buildSite.codeArea.get_data().console).lineCount(), 0);
		}));
		this.gateway.on('Area.Debug.Break', Function.mkdel(this, function(data3) {
			this.$buildSite.devArea.get_data().loadRoomInfos(data3);
			var cm = this.$buildSite.codeArea.get_data().codeEditor;
			cm.clearMarker(ss.Nullable.unbox(Type.cast(data3.lineNumber, ss.Int32)));
			cm.setMarker(ss.Nullable.unbox(Type.cast(data3.lineNumber, ss.Int32)), '<span style="color: #059">●</span> %N%');
			cm.setCursor(ss.Nullable.unbox(Type.cast(data3.lineNumber + 15, ss.Int32)), 0);
			cm.setCursor(ss.Nullable.unbox(Type.cast(data3.lineNumber - 15, ss.Int32)), 0);
			cm.setCursor(ss.Nullable.unbox(Type.cast(data3.lineNumber, ss.Int32)), 0);
		}));
		this.gateway.on('Area.Debug.VariableLookup.Response', function(data4) {
			window.alert(JSON.stringify(data4));
		});
		this.gateway.on('Area.Game.AskQuestion', Function.mkdel(this, function(data5) {
			this.$buildSite.questionArea.get_data().load(data5);
			//alert(JSON.stringify(data));
			this.$endTime = new Date();
			var time = this.$endTime - this.$startTime;
			this.$buildSite.devArea.get_data().lblHowFast.text('how long: ' + time);
			window.setTimeout(Function.mkdel(this, function() {
				this.gateway.emit('Area.Game.AnswerQuestion', { Answer: 1, RoomID: this.gameStuff.roomID }, this.$buildSite.devArea.get_data().gameServer);
				this.$buildSite.questionArea.set_visible(false);
				this.$startTime = new Date();
			}), 200);
		}));
		this.gateway.on('Area.Game.UpdateState', Function.mkdel(this, function(data6) {
			this.$gameContext.clearRect(0, 0, ss.Nullable.unbox(Type.cast((this.$gameContext).canvas.width, Number)), ss.Nullable.unbox(Type.cast((this.$gameContext).canvas.height, Number)));
			this.drawArea(Type.cast(data6, Client.CardGameArea));
		}));
		this.gateway.on('Area.Game.Started', function(data7) {
			//alert(JSON.stringify(data));
		});
		this.gateway.on('Area.Game.GameOver', function(data8) {
		});
		this.gateway.on('Area.Debug.GameOver', Function.mkdel(this, function(data9) {
			window.setTimeout(Function.mkdel(this, function() {
				this.$buildSite.devArea.get_data().beginGame();
			}), 1000);
		}));
	},
	drawArea: function(mainArea) {
		var gameboard = this.$gameContext;
		this.$lastMainArea = mainArea;
		var scale = new CommonLibraries.Point(ss.Nullable.unbox(Type.cast((this.$gameContext).canvas.width / mainArea.size.width, Number)), ss.Nullable.unbox(Type.cast((this.$gameContext).canvas.height / mainArea.size.height, Number)));
		gameboard.fillStyle = 'rgba(0,0,200,0.5)';
		var $t1 = mainArea.spaces.getEnumerator();
		try {
			while ($t1.moveNext()) {
				var space = $t1.get_current();
				var vertical = space.vertical;
				gameboard.fillRect(space.x * scale.get_x(), space.y * scale.get_y(), space.width * scale.get_x(), space.height * scale.get_y());
				var spaceScale = new CommonLibraries.Point(space.width / space.pile.cards.length, space.height / space.pile.cards.length);
				var j = 0;
				var $t2 = space.pile.cards.getEnumerator();
				try {
					while ($t2.moveNext()) {
						var card = $t2.get_current();
						var xx = Math.floor(space.x * scale.get_x() + (!vertical ? (j * spaceScale.get_x() * scale.get_x()) : 0));
						var yy = Math.floor(space.y * scale.get_y() + (vertical ? (j * spaceScale.get_y() * scale.get_y()) : 0));
						var cardImage = this.$cardImages[this.drawCard(card)];
						gameboard.save();
						gameboard.translate(xx + (vertical ? (space.width * scale.get_x() / 2) : 0), yy + (!vertical ? (space.height * scale.get_y() / 2) : 0));
						gameboard.rotate(space.rotate * Math.PI / 180);
						gameboard.translate(ss.Int32.div(-cardImage.width, 2), ss.Int32.div(-cardImage.height, 2));
						var $t3 = card.effects.getEnumerator();
						try {
							while ($t3.moveNext()) {
								var effect = $t3.get_current();
								switch (effect.type) {
									case 0: {
										gameboard.save();
										gameboard.translate(effect.offsetX, effect.offsetY);
										gameboard.rotate(effect.rotate * Math.PI / 180);
										gameboard.translate(-effect.radius, -effect.radius);
										gameboard.fillStyle = effect.color;
										gameboard.strokeStyle = 'black';
										gameboard.fillRect(0, 0, cardImage.width + effect.radius * 2, cardImage.height + effect.radius * 2);
										gameboard.strokeRect(0, 0, cardImage.width + effect.radius * 2, cardImage.height + effect.radius * 2);
										gameboard.restore();
										break;
									}
								}
							}
						}
						finally {
							if (Type.isInstanceOfType($t3, ss.IDisposable)) {
								Type.cast($t3, ss.IDisposable).dispose();
							}
						}
						//todo gayness
						gameboard.drawImage((cardImage), 0, 0);
						gameboard.restore();
						j++;
					}
				}
				finally {
					if (Type.isInstanceOfType($t2, ss.IDisposable)) {
						Type.cast($t2, ss.IDisposable).dispose();
					}
				}
			}
		}
		finally {
			if (Type.isInstanceOfType($t1, ss.IDisposable)) {
				Type.cast($t1, ss.IDisposable).dispose();
			}
		}
		var $t4 = mainArea.textAreas.getEnumerator();
		try {
			while ($t4.moveNext()) {
				var ta = $t4.get_current();
				gameboard.fillStyle = 'rgba(200, 0, 200, 0.5)';
				gameboard.fillText(ta.text, ta.x * scale.get_x(), ta.y * scale.get_y());
			}
		}
		finally {
			if (Type.isInstanceOfType($t4, ss.IDisposable)) {
				Type.cast($t4, ss.IDisposable).dispose();
			}
		}
	},
	drawCard: function(card) {
		var src = '';
		var domain = (window).topLevel + 'client/assets';
		src = Type.cast(domain + '/cards/' + (100 + (card.value + 1) + card.type * 13), String);
		return src + '.gif';
	},
	canvasOnClick: function(e) {
		e.preventDefault();
	},
	canvasMouseMove: function(e) {
		e.preventDefault();
		document.body.style.cursor = 'default';
		this.$lastMouseMove = e;
	},
	canvasMouseUp: function(e) {
		e.preventDefault();
	},
	handleScroll: function(e) {
		e.preventDefault();
	},
	resizeCanvas: function(jQueryEvent) {
		if (ss.Nullable.unbox(Type.cast(!ss.referenceEquals((this.$gameContext).domCanvas.attr('width'), ($(window)).width()), Boolean))) {
			(this.$gameContext).domCanvas.attr('width', ($(window)).width() * 0.5);
		}
		if (ss.Nullable.unbox(Type.cast(!ss.referenceEquals((this.$gameContext).domCanvas.attr('height'), ($(window)).height()), Boolean))) {
			(this.$gameContext).domCanvas.attr('height', ($(window)).height());
		}
		if (ss.isValue(this.$lastMainArea)) {
			this.drawArea(this.$lastMainArea);
		}
	},
	draw: function() {
		(this.$gameContext).canvas.width = (this.$gameContext).canvas.width;
		if (ss.isValue(this.$lastMainArea)) {
			this.drawArea(this.$lastMainArea);
		}
	}
};
////////////////////////////////////////////////////////////////////////////////
// Client.QuestionAreaInformation
Client.QuestionAreaInformation = function() {
	this.load = null;
};
////////////////////////////////////////////////////////////////////////////////
// Client.ScriptLoader
Client.ScriptLoader = function() {
};
Client.ScriptLoader.prototype = {
	$loadScript: function(url, callback) {
		var head = document.getElementsByTagName('head')[0];
		var script = document.createElement('script');
		script.setAttribute('type', 'text/javascript');
		script.setAttribute('src', url);
		// +"?" + (Math.floor(Math.random() * 10000)); //caching
		if (ss.isValue(callback)) {
			(script).onreadystatechange = function(a) {
				var b = script;
				if (ss.Nullable.unbox(Type.cast(b.readyState === 'loaded', Boolean))) {
					callback();
				}
			};
			(script).onload = function(a1) {
				callback();
			};
		}
		head.appendChild(script);
	},
	load: function(items, done) {
		var counter = 0;
		for (var i = 0; i < items.length; i++) {
			this.$loadScript(items[i], function() {
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
				this.$loadScript(items[counter], nextOne);
			}
		});
		this.$loadScript(items[0], nextOne);
	}
};
Type.registerNamespace('Client.ShuffUI');
////////////////////////////////////////////////////////////////////////////////
// Client.ShuffUI.ShuffButton
Client.ShuffUI.ShuffButton = function() {
	this.$2$TextField = null;
	this.$2$ClickField = null;
	Client.ShuffUI.ShuffElement.call(this);
};
Client.ShuffUI.ShuffButton.prototype = {
	get_text: function() {
		return this.$2$TextField;
	},
	set_text: function(value) {
		this.$2$TextField = value;
	},
	get_click: function() {
		return this.$2$ClickField;
	},
	set_click: function(value) {
		this.$2$ClickField = value;
	}
};
////////////////////////////////////////////////////////////////////////////////
// Client.ShuffUI.ShuffButton$1
Client.ShuffUI.ShuffButton$1 = function(T) {
	var $type = function(data) {
		this.data = T.getDefaultValue();
		this.$2$TextField = null;
		this.$2$ClickField = null;
		Client.ShuffUI.ShuffElement.call(this);
		this.data = data;
	};
	$type.prototype = {
		get_text: function() {
			return this.$2$TextField;
		},
		set_text: function(value) {
			this.$2$TextField = value;
		},
		get_click: function() {
			return this.$2$ClickField;
		},
		set_click: function(value) {
			this.$2$ClickField = value;
		}
	};
	$type.registerGenericClassInstance($type, Client.ShuffUI.ShuffButton$1, [T], function() {
		return Client.ShuffUI.ShuffElement;
	}, function() {
		return [];
	});
	return $type;
};
Client.ShuffUI.ShuffButton$1.registerGenericClass('Client.ShuffUI.ShuffButton$1', 1);
////////////////////////////////////////////////////////////////////////////////
// Client.ShuffUI.ShuffCodeEditor
Client.ShuffUI.ShuffCodeEditor = function() {
	this.$2$LineNumbersField = false;
	Client.ShuffUI.ShuffElement.call(this);
};
Client.ShuffUI.ShuffCodeEditor.prototype = {
	get_lineNumbers: function() {
		return this.$2$LineNumbersField;
	},
	set_lineNumbers: function(value) {
		this.$2$LineNumbersField = value;
	}
};
////////////////////////////////////////////////////////////////////////////////
// Client.ShuffUI.ShuffCodeEditor$1
Client.ShuffUI.ShuffCodeEditor$1 = function(T) {
	var $type = function(data) {
		this.data = T.getDefaultValue();
		this.$2$LineNumbersField = false;
		Client.ShuffUI.ShuffElement.call(this);
		this.data = data;
	};
	$type.prototype = {
		get_lineNumbers: function() {
			return this.$2$LineNumbersField;
		},
		set_lineNumbers: function(value) {
			this.$2$LineNumbersField = value;
		}
	};
	$type.registerGenericClassInstance($type, Client.ShuffUI.ShuffCodeEditor$1, [T], function() {
		return Client.ShuffUI.ShuffElement;
	}, function() {
		return [];
	});
	return $type;
};
Client.ShuffUI.ShuffCodeEditor$1.registerGenericClass('Client.ShuffUI.ShuffCodeEditor$1', 1);
////////////////////////////////////////////////////////////////////////////////
// Client.ShuffUI.ShuffElement
Client.ShuffUI.ShuffElement = function() {
	this.$1$XField = 0;
	this.$1$YField = 0;
	this.$1$WidthField = null;
	this.$1$HeightField = null;
	this.$1$ElementField = null;
	this.$visible = false;
	this.$visible = true;
};
Client.ShuffUI.ShuffElement.prototype = {
	get_x: function() {
		return this.$1$XField;
	},
	set_x: function(value) {
		this.$1$XField = value;
	},
	get_y: function() {
		return this.$1$YField;
	},
	set_y: function(value) {
		this.$1$YField = value;
	},
	get_width: function() {
		return this.$1$WidthField;
	},
	set_width: function(value) {
		this.$1$WidthField = value;
	},
	get_height: function() {
		return this.$1$HeightField;
	},
	set_height: function(value) {
		this.$1$HeightField = value;
	},
	get_element: function() {
		return this.$1$ElementField;
	},
	set_element: function(value) {
		this.$1$ElementField = value;
	},
	get_visible: function() {
		return this.$visible;
	},
	set_visible: function(value) {
		if (ss.isValue(this.get_element())) {
			this.get_element().css('display', (this.$visible ? 'block' : 'none'));
		}
		this.$visible = value;
	}
};
////////////////////////////////////////////////////////////////////////////////
// Client.ShuffUI.ShuffLabel
Client.ShuffUI.ShuffLabel = function() {
	this.$2$TextField = null;
	Client.ShuffUI.ShuffElement.call(this);
};
Client.ShuffUI.ShuffLabel.prototype = {
	get_text: function() {
		return this.$2$TextField;
	},
	set_text: function(value) {
		this.$2$TextField = value;
	}
};
////////////////////////////////////////////////////////////////////////////////
// Client.ShuffUI.ShuffLabel$1
Client.ShuffUI.ShuffLabel$1 = function(T) {
	var $type = function(data) {
		this.data = T.getDefaultValue();
		this.$2$TextField = null;
		Client.ShuffUI.ShuffElement.call(this);
		this.data = data;
	};
	$type.prototype = {
		get_text: function() {
			return this.$2$TextField;
		},
		set_text: function(value) {
			this.$2$TextField = value;
		}
	};
	$type.registerGenericClassInstance($type, Client.ShuffUI.ShuffLabel$1, [T], function() {
		return Client.ShuffUI.ShuffElement;
	}, function() {
		return [];
	});
	return $type;
};
Client.ShuffUI.ShuffLabel$1.registerGenericClass('Client.ShuffUI.ShuffLabel$1', 1);
////////////////////////////////////////////////////////////////////////////////
// Client.ShuffUI.ShuffPropertyBox
Client.ShuffUI.ShuffPropertyBox = function() {
	this.$2$ItemCreationField = null;
	Client.ShuffUI.ShuffElement.call(this);
};
Client.ShuffUI.ShuffPropertyBox.prototype = {
	get_itemCreation: function() {
		return this.$2$ItemCreationField;
	},
	set_itemCreation: function(value) {
		this.$2$ItemCreationField = value;
	}
};
////////////////////////////////////////////////////////////////////////////////
// Client.ShuffUI.ShuffPropertyBox$1
Client.ShuffUI.ShuffPropertyBox$1 = function(T) {
	var $type = function(data) {
		this.data = T.getDefaultValue();
		this.$2$ItemCreationField = null;
		Client.ShuffUI.ShuffElement.call(this);
		this.data = data;
	};
	$type.prototype = {
		get_itemCreation: function() {
			return this.$2$ItemCreationField;
		},
		set_itemCreation: function(value) {
			this.$2$ItemCreationField = value;
		}
	};
	$type.registerGenericClassInstance($type, Client.ShuffUI.ShuffPropertyBox$1, [T], function() {
		return Client.ShuffUI.ShuffElement;
	}, function() {
		return [];
	});
	return $type;
};
Client.ShuffUI.ShuffPropertyBox$1.registerGenericClass('Client.ShuffUI.ShuffPropertyBox$1', 1);
////////////////////////////////////////////////////////////////////////////////
// Client.ShuffUI.ShuffTextBox
Client.ShuffUI.ShuffTextBox = function() {
	this.$2$LabelStyleField = null;
	this.$2$LabelField = null;
	this.$2$TextField = null;
	Client.ShuffUI.ShuffElement.call(this);
};
Client.ShuffUI.ShuffTextBox.prototype = {
	get_labelStyle: function() {
		return this.$2$LabelStyleField;
	},
	set_labelStyle: function(value) {
		this.$2$LabelStyleField = value;
	},
	get_label: function() {
		return this.$2$LabelField;
	},
	set_label: function(value) {
		this.$2$LabelField = value;
	},
	get_text: function() {
		return this.$2$TextField;
	},
	set_text: function(value) {
		this.$2$TextField = value;
	}
};
////////////////////////////////////////////////////////////////////////////////
// Client.ShuffUI.ShuffTextBox$1
Client.ShuffUI.ShuffTextBox$1 = function(T) {
	var $type = function(data) {
		this.data = T.getDefaultValue();
		this.$2$LabelStyleField = null;
		this.$2$LabelField = null;
		this.$2$TextField = null;
		Client.ShuffUI.ShuffElement.call(this);
		this.data = data;
	};
	$type.prototype = {
		get_labelStyle: function() {
			return this.$2$LabelStyleField;
		},
		set_labelStyle: function(value) {
			this.$2$LabelStyleField = value;
		},
		get_label: function() {
			return this.$2$LabelField;
		},
		set_label: function(value) {
			this.$2$LabelField = value;
		},
		get_text: function() {
			return this.$2$TextField;
		},
		set_text: function(value) {
			this.$2$TextField = value;
		}
	};
	$type.registerGenericClassInstance($type, Client.ShuffUI.ShuffTextBox$1, [T], function() {
		return Client.ShuffUI.ShuffElement;
	}, function() {
		return [];
	});
	return $type;
};
Client.ShuffUI.ShuffTextBox$1.registerGenericClass('Client.ShuffUI.ShuffTextBox$1', 1);
////////////////////////////////////////////////////////////////////////////////
// Client.ShuffUI.ShuffUIManager
Client.ShuffUI.ShuffUIManager = function() {
	this.$uiAreas = new Array();
};
Client.ShuffUI.ShuffUIManager.prototype = {
	createWindow: function(T) {
		return function(ui) {
			var windowID = ui.title;
			var outer = $('<div class=\'window-outer\' style=\'background-color: #87B6D9;\'></div>');
			($('body')).append(outer);
			ui.outer = outer;
			outer.css('position', 'absolute');
			outer.css('padding', '2em 0.8em 0.8em 1.3em');
			outer.css('left', ui.get_x() + 'px');
			outer.css('top', ui.get_y() + 'px');
			outer.css('width', ui.get_width() + 'px');
			outer.css('height', ui.get_height() + 'px');
			outer.css('di', ui.get_height() + 'px');
			outer.css('display', ((ui.get_visible() === false) ? 'none' : 'block'));
			var top = $('<div style=\'width:100%; text-align:center; font-size:25px; position:absolute; top:0px;left:-2px;  \'></div>');
			outer.append(top);
			var title = $('<div class=\'rounded\' style=\'margin:auto; background-color:white; width:40%; text-align:center;opacity:0.4;\'>' + ui.title + '</div>');
			top.append(title);
			var rightSideBar = $('<div style=\'width:100%; text-align:center; font-size:25px; position:absolute; top:0px;left:-2px;\'></div>');
			top.append(rightSideBar);
			var x = $('<div class=\'rounded window-header-button window-close\' style=\'height:30px; vertical-align:top;background-color:white; width:6%; text-align:center;opacity:0.4;float:right;\'>X</div> ');
			rightSideBar.append(x);
			var max = $('<div class=\'rounded window-header-button window-maximize\' style=\'height:30px; vertical-align:top; background-color:white; width:6%; text-align:center;opacity:0.4;float:right;\'>[]</div>  ');
			rightSideBar.append(max);
			var min = $('<div class=\'rounded window-header-button window-minimize\' style=\'height:30px; vertical-align:top; background-color:white; width:6%; text-align:center;opacity:0.4;float:right;\'>_</div>  ');
			rightSideBar.append(min);
			var inner = $('<div class=\'window-inner\' id=\'window' + windowID + '\' style=\'background-color: #FDFEFE;width:100%; height:100%; \'> </div> ');
			outer.append(inner);
			ui.set_$window(($('#window' + windowID)));
			this.$uiAreas.add({ Element: outer, Inner: inner });
			x.click(function(evt) {
				outer.css('display', 'none');
			});
			var toggleSize = false;
			max.click(function(evt1) {
				toggleSize = !toggleSize;
				if (toggleSize) {
					outer.css('width', '100%');
					outer.css('height', '100%');
					outer.css('left', '0px');
					outer.css('top', '0px');
				}
				else {
					outer.css('width', '100%');
					outer.css('height', '100%');
				}
			});
			($('.window-minimize')).click(function(evt2) {
				window.alert('3');
			});
			outer.mousedown(Function.mkdel(this, function(evt3) {
				for (var i = 0; i < this.$uiAreas.length; i++) {
					(this.$uiAreas[i]).Element.css('z-index', 1800);
				}
				outer.css('z-index', 1900);
			}));
			($('.window-header-button')).button();
			if (!ui.static) {
				outer.draggable({
					cancel: '.window-inner, .CodeMirror, .CodeMirror-fullscreen, .CodeMirror-wrap, .CodeMirror-focused',
					containment: ('window'),
					start: function(evt4, o) {
					}
				});
				outer.resizable({
					handles: ('n, e, s, w, ne, se, sw, nw'),
					resize: function(evt5, o1) {
					}
				});
			}
			return ui;
		};
	}
};
////////////////////////////////////////////////////////////////////////////////
// Client.ShuffUI.ShuffWindow$1
Client.ShuffUI.ShuffWindow$1 = function(T) {
	var $type = function(data) {
		this.$2$DataField = T.getDefaultValue();
		this.elements = null;
		this.title = null;
		this.allowClose = false;
		this.allowMinimize = false;
		this.outer = null;
		this.static = false;
		Client.ShuffUI.ShuffElement.call(this);
		this.set_data(data);
		this.elements = new Array();
	};
	$type.prototype = {
		get_data: function() {
			return this.$2$DataField;
		},
		set_data: function(value) {
			this.$2$DataField = value;
		},
		get_$window: function() {
			return this.get_element();
		},
		set_$window: function(value) {
			this.set_element(value);
		},
		get_$outer: function() {
			return this.outer;
		},
		set_$outer: function(value) {
			this.outer = value;
			this.outer.resizable({ handles: ('n, e, s, w, ne, se, sw, nw') });
		},
		addButton: function(element) {
			this.elements.add(element);
			var but = $('<div></div>');
			element.set_element(but);
			this.get_$window().append(but);
			but.text(element.get_text());
			but.css('position', 'absolute');
			but.css('left', element.get_x() + 'px');
			but.css('top', element.get_y() + 'px');
			but.css('width', element.get_width() + 'px');
			but.css('height', element.get_height() + 'px');
			but.button();
			but.click(element.get_click());
			(but).disableSelection();
			but.css('display', ((element.get_visible() === false) ? 'none' : 'block'));
			return but;
		},
		addLabel: function(element) {
			this.elements.add(element);
			var but = $('<span></span>');
			element.set_element(but);
			this.get_$window().append(but);
			but.text(element.get_text());
			but.css('position', 'absolute');
			but.css('left', element.get_x() + 'px');
			but.css('top', element.get_y() + 'px');
			(but).disableSelection();
			but.css('display', ((element.get_visible() === false) ? 'none' : 'block'));
			return but;
		},
		addTextbox: function(element) {
			this.elements.add(element);
			var but = $('<input value=\'' + Object.coalesce(element.get_text(), '') + '\' />');
			element.set_element(but);
			this.get_$window().append(but);
			but.text(element.get_text());
			but.css('position', 'absolute');
			but.css('left', element.get_x() + 'px');
			but.css('top', element.get_y() + 'px');
			but.css('width', element.get_width() + 'px');
			but.css('height', element.get_height() + 'px');
			(but).disableSelection();
			if (ss.isValue(element.get_label())) {
				var lbl = $('<span style=\'' + element.get_labelStyle() + '\'></span>');
				lbl.text(element.get_label());
				this.get_$window().append(lbl);
				lbl.css('position', 'absolute');
				lbl.css('left', element.get_x() - lbl.width());
				lbl.css('top', element.get_y() + 2);
				(lbl).disableSelection();
			}
			but.css('display', ((element.get_visible() === false) ? 'none' : 'block'));
			return but;
		},
		addCodeEditor: function(element) {
			this.elements.add(element);
			//
			//             options = objMerge({ width: '100%', height: '100%' }, options);
			//
			//             var divs = $('<div style="width:' + options.width + '; height:' + options.height + ';"> </div>');
			//
			//             self.element.append(divs);
			//
			//             
			//
			//             divs.append('<textarea id="code" name="code" class="CodeMirror-fullscreen " style=""></textarea>');
			//
			//             
			//
			//             
			//
			//             var codeMirror = document.getElementById("code");
			//
			//             codeMirror.value = '';
			//
			//             var editor = CodeMirror.fromTextArea(codeMirror, {
			//
			//             lineNumbers: options.lineNumbers,
			//
			//             lineWrapping: true,
			//
			//             matchBrackets: true,
			//
			//             onGutterClick: function (cm, n) {
			//
			//             var info = cm.lineInfo(n);
			//
			//             if (info.markerText) {
			//
			//             window.shuffUIManager.codeArea.breakPoints.splice(window.shuffUIManager.codeArea.breakPoints.indexOf(n-1), 0);
			//
			//             cm.clearMarker(n);
			//
			//             } else {
			//
			//             window.shuffUIManager.codeArea.breakPoints.push(n-1);
			//
			//             cm.setMarker(n, "<span style=\"color: #900\">●</span> %N%");
			//
			//             }
			//
			//             },
			//
			//             extraKeys: {
			//
			//             "Ctrl-Space": function (cm) {
			//
			//             CodeMirror.simpleHint(cm, CodeMirror.javascriptHint);
			//
			//             },
			//
			//             "Ctrl-I": function (cm) {
			//
			//             var pos = cm.getCursor();
			//
			//             cm.setValue(window.fjs.format(cm.getValue()));
			//
			//             cm.setCursor(pos);
			//
			//             
			//
			//             }
			//
			//             },
			//
			//             
			//
			//             onCursorActivity: function () {
			//
			//             editor.setLineClass(hlLine, null);
			//
			//             hlLine = editor.setLineClass(editor.getCursor().line, "activeline");
			//
			//             },
			//
			//             onFocus: function (editor) {
			//
			//             
			//
			//             },
			//
			//             onBlur: function (editor) {
			//
			//             }
			//
			//             });
			//
			//             
			//
			//             var hlLine = editor.setLineClass(0, "activeline");
			//
			//             
			//
			//             var scroller = editor.getScrollerElement();
			//
			//             scroller.style.height = divs[0].offsetHeight + "px";
			//
			//             scroller.style.width = divs[0].offsetWidth + "px";
			//
			//             editor.refresh();
			//
			//             editor.setOption("theme", "night");
			//
			//             /*(function (outer, scroller) {
			//
			//             
			//
			//             outer.resizable({
			//
			//             handles: "n, e, s, w, ne, se, sw, nw",
			//
			//             resize: function () {
			//
			//             scroller.style.height = divs[0].offsetHeight + "px";
			//
			//             scroller.style.width = divs[0].offsetWidth + "px";
			//
			//             
			//
			//             }
			//
			//             });
			//
			//             })(self.outer,scroller);* /
			//
			//             
			//
			//             editor.codeElement = codeMirror;
			//
			//             return editor;
			return null;
		},
		addListBox: function(element) {
			this.elements.add(element);
			var but = $('<div></div>');
			element.set_element(but);
			this.get_$window().append(but);
			but.text(element.get_text());
			but.css('position', 'absolute');
			but.css('left', element.get_x() + 'px');
			but.css('top', element.get_y() + 'px');
			var theme = 'getTheme()';
			//
			//                     var theme = getTheme();
			//
			//                     but.jqxListBox({ source: options.items, width: options.width, height: options.height, theme: theme });
			//
			//                     but.bind('select', function (event) {
			//
			//                     var item = event.args.item;
			//
			//                     if (options.click)
			//
			//                     options.click(item);
			//
			//                     });
			//
			//                     return but;
			return but;
		},
		addPropertyBox: function(shuffPropertyBox) {
			var but = $('<div></div>');
			this.get_$window().append(but);
			but.css('position', 'absolute');
			but.css('left', shuffPropertyBox.get_x());
			but.css('top', shuffPropertyBox.get_y());
			but.css('width', shuffPropertyBox.get_width());
			but.css('height', shuffPropertyBox.get_height());
			but.css('overflow', 'scroll');
			(but).items = [];
			(but).addItem = function(ij) {
				but.append(shuffPropertyBox.get_itemCreation()(ij, ss.Nullable.unbox(Type.cast((but).items.length, ss.Int32))));
				(but).items.push(ij);
			};
			return but;
		}
	};
	$type.registerGenericClassInstance($type, Client.ShuffUI.ShuffWindow$1, [T], function() {
		return Client.ShuffUI.ShuffElement;
	}, function() {
		return [];
	});
	return $type;
};
Client.ShuffUI.ShuffWindow$1.registerGenericClass('Client.ShuffUI.ShuffWindow$1', 1);
Type.registerNamespace('');
////////////////////////////////////////////////////////////////////////////////
// Globals
Globals = function() {
};
Client.BuildSite.registerClass('Client.BuildSite', Object);
Client.CardGameArea.registerClass('Client.CardGameArea', Object);
Client.CardGameAreaSpace.registerClass('Client.CardGameAreaSpace', Object);
Client.CardGameCard.registerClass('Client.CardGameCard', Object);
Client.CardGameEffect.registerClass('Client.CardGameEffect', Object);
Client.CardGamePile.registerClass('Client.CardGamePile', Object);
Client.CardGameTextArea.registerClass('Client.CardGameTextArea', Object);
Client.ClientHelp.registerClass('Client.ClientHelp', Object);
Client.CodeAreaInformation.registerClass('Client.CodeAreaInformation', Object);
Client.DevAreaInformation.registerClass('Client.DevAreaInformation', Object);
Client.GameInfo.registerClass('Client.GameInfo', Object);
Client.Gateway.registerClass('Client.Gateway', Object);
Client.HomeAreaInformation.registerClass('Client.HomeAreaInformation', Object);
Client.PageHandler.registerClass('Client.PageHandler', Object);
Client.QuestionAreaInformation.registerClass('Client.QuestionAreaInformation', Object);
Client.ScriptLoader.registerClass('Client.ScriptLoader', Object);
Client.ShuffUI.ShuffElement.registerClass('Client.ShuffUI.ShuffElement', Object);
Client.ShuffUI.ShuffLabel.registerClass('Client.ShuffUI.ShuffLabel', Client.ShuffUI.ShuffElement);
Client.ShuffUI.ShuffPropertyBox.registerClass('Client.ShuffUI.ShuffPropertyBox', Client.ShuffUI.ShuffElement);
Client.ShuffUI.ShuffTextBox.registerClass('Client.ShuffUI.ShuffTextBox', Client.ShuffUI.ShuffElement);
Client.ShuffUI.ShuffUIManager.registerClass('Client.ShuffUI.ShuffUIManager', Object);
Globals.registerClass('Globals', Object);
Client.ShuffUI.ShuffButton.registerClass('Client.ShuffUI.ShuffButton', Client.ShuffUI.ShuffElement);
Client.ShuffUI.ShuffCodeEditor.registerClass('Client.ShuffUI.ShuffCodeEditor', Client.ShuffUI.ShuffElement);

