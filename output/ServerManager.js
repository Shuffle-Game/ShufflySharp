require('./mscorlib.js');EventEmitter= require('events').EventEmitter;require('./NodeLibraries.js');require('./CommonLibraries.js');require('./CommonShuffleLibrary.js');require('./ShuffleGameLibrary.js');require('./Models.js');require('./DataModels.js');require('./RawDeflate.js');
(function() {
	'use strict';
	global.ServerManager = global.ServerManager || {};
	global.ServerManager.AdminServer = global.ServerManager.AdminServer || {};
	global.ServerManager.ChatServer = global.ServerManager.ChatServer || {};
	global.ServerManager.DebugGameServer = global.ServerManager.DebugGameServer || {};
	global.ServerManager.DebugGameServer.Models = global.ServerManager.DebugGameServer.Models || {};
	global.ServerManager.GameServer = global.ServerManager.GameServer || {};
	global.ServerManager.GameServer.Models = global.ServerManager.GameServer.Models || {};
	global.ServerManager.GatewayServer = global.ServerManager.GatewayServer || {};
	global.ServerManager.HeadServer = global.ServerManager.HeadServer || {};
	global.ServerManager.MonitorServer = global.ServerManager.MonitorServer || {};
	global.ServerManager.SiteServer = global.ServerManager.SiteServer || {};
	////////////////////////////////////////////////////////////////////////////////
	// ServerManager.ServerManager
	var $ServerManager_$ServerManager = function() {
	};
	$ServerManager_$ServerManager.__typeName = 'ServerManager.$ServerManager';
	$ServerManager_$ServerManager.$main = function() {
		try {
			switch (process.argv[2].toLowerCase()) {
				case 'a':
				case 'admin': {
					new $ServerManager_AdminServer_AdminServer();
					break;
				}
				case 'gw':
				case 'gateway': {
					new $ServerManager_GatewayServer_GatewayServer();
					break;
				}
				case 'g':
				case 'game': {
					new $ServerManager_GameServer_GameServer();
					break;
				}
				case 'd':
				case 'debug': {
					new $ServerManager_DebugGameServer_DebugGameServer();
					break;
				}
				case 'c':
				case 'chat': {
					new $ServerManager_ChatServer_ChatServer();
					break;
				}
				case 'h':
				case 'head': {
					new $ServerManager_HeadServer_HeadServer();
					break;
				}
				case 'm':
				case 'monitor': {
					new $ServerManager_MonitorServer_MonitorServer();
					break;
				}
				case 's':
				case 'site': {
					new $ServerManager_SiteServer_SiteServer();
					break;
				}
				default: {
					NodeLibraries.Common.Logging.Logger.log('Failed to load: ' + process.argv[2], 'error');
					break;
				}
			}
		}
		catch ($t1) {
			var exc = ss.Exception.wrap($t1);
			NodeLibraries.Common.Logging.Logger.log('CRITICAL FAILURE: ' + CommonLibraries.ExtensionMethods.goodMessage(exc), 'error');
		}
	};
	////////////////////////////////////////////////////////////////////////////////
	// ServerManager.AdminServer.AdminServer
	var $ServerManager_AdminServer_AdminServer = function() {
		this.$__dirname = null;
		this.$debug = false;
		this.$exec = null;
		this.$fs = require('fs');
		this.$games = null;
		this.$gateways = null;
		this.$chats = null;
		this.$sites = null;
		this.$debugs = null;
		this.$head = null;
		this.$monitor = null;
		this.$indexPageData = 0;
		this.$nodeInspector = null;
		this.$nonDebuggable = null;
		this.$numOfChatServers = 1;
		this.$numOfGameServers = 1;
		this.$numOfGateways = 1;
		this.$numOfSiteServers = 1;
		this.$util = null;
		var fs = require('fs');
		CommonShuffleLibrary.ServerLogger.initLogger('AdminServer', 'AdminServer');
		NodeLibraries.Common.Logging.Logger.start('Admin');
		CommonShuffleLibrary.ServerLogger.logInformation('Shuffly Admin V0.51', null);
		var redis = require('redis');
		var client = redis.createClient(6379, CommonLibraries.Constants.redisIP);
		// client.On<string,object>("monitor",(time, args) => {
		// ServerLogger.Log("Monitor: "+time+" "+Json.Stringify(args),LogLevel.DebugInformation);
		// });
		this.$util = require('util');
		this.$exec = require('child_process').exec;
		this.$__dirname = CommonLibraries.Constants.HARDLOCATION;
		this.$nonDebuggable = ['node-inspector', 'pkill'];
		require('http').createServer(ss.mkdel(this, this.$handler)).listen(8090);
		this.$debug = true;
		setInterval(function() {
			console.log('keep alive ' + NodeLibraries.Common.Logging.Common.shortDate());
		}, 10000);
		process.on('exit', ss.mkdel(this, function() {
			CommonShuffleLibrary.ServerLogger.logDebug('Exiting ', null);
			this.$onAsk('k', false);
			this.$runProcess('pkill', ['node'], 0, null);
		}));
		if (this.$debug) {
			this.$onAsk('d', true);
		}
		this.$onAsk('d', true);
		if (this.$debug) {
			this.$nodeInspector = this.$runProcess('node-inspector', [], 0, null);
			CommonShuffleLibrary.ServerLogger.logDebug('node-inspector Started', null);
		}
		this.$onAsk('s', false);
	};
	$ServerManager_AdminServer_AdminServer.__typeName = 'ServerManager.AdminServer.AdminServer';
	global.ServerManager.AdminServer.AdminServer = $ServerManager_AdminServer_AdminServer;
	////////////////////////////////////////////////////////////////////////////////
	// ServerManager.AdminServer.ProcessInformation
	var $ServerManager_AdminServer_ProcessInformation = function(process, name, index, debugPort) {
		this.process = null;
		this.name = null;
		this.index = 0;
		this.debugPort = 0;
		this.process = process;
		this.name = name;
		this.index = index;
		this.debugPort = debugPort;
	};
	$ServerManager_AdminServer_ProcessInformation.__typeName = 'ServerManager.AdminServer.ProcessInformation';
	global.ServerManager.AdminServer.ProcessInformation = $ServerManager_AdminServer_ProcessInformation;
	////////////////////////////////////////////////////////////////////////////////
	// ServerManager.ChatServer.ChatClientManager
	var $ServerManager_ChatServer_ChatClientManager = function(chatServerIndex) {
		this.$qManager = null;
		this.$1$ChatServerIndexField = null;
		this.$1$OnCreateChatChannelField = null;
		this.$1$OnSendMessageField = null;
		this.$1$OnJoinChatChannelField = null;
		this.$1$OnUserDisconnectField = null;
		this.$1$OnLeaveChatRoomField = null;
		this.set_chatServerIndex(chatServerIndex);
		this.$setup();
	};
	$ServerManager_ChatServer_ChatClientManager.__typeName = 'ServerManager.ChatServer.ChatClientManager';
	global.ServerManager.ChatServer.ChatClientManager = $ServerManager_ChatServer_ChatClientManager;
	////////////////////////////////////////////////////////////////////////////////
	// ServerManager.ChatServer.ChatManager
	var $ServerManager_ChatServer_ChatManager = function(chatServerIndex) {
		this.$myDataManager = null;
		this.$myServerManager = null;
		this.$runningRooms = [];
		this.$myDataManager = new CommonShuffleLibrary.DataManager();
		this.$myServerManager = new $ServerManager_ChatServer_ChatClientManager(chatServerIndex);
		this.$myServerManager.add_onCreateChatChannel(ss.mkdel(this, this.$onCreateChatChannel));
		this.$myServerManager.add_onJoinChatChannel(ss.mkdel(this, this.$onJoinChatChannel));
		this.$myServerManager.add_onSendMessage(ss.mkdel(this, this.$onSendMessage));
		this.$myServerManager.add_onLeaveChatRoom(ss.mkdel(this, this.$onLeaveChatRoom));
		this.$myServerManager.add_onUserDisconnect(ss.mkdel(this, this.$onUserDisconnect));
	};
	$ServerManager_ChatServer_ChatManager.__typeName = 'ServerManager.ChatServer.ChatManager';
	global.ServerManager.ChatServer.ChatManager = $ServerManager_ChatServer_ChatManager;
	////////////////////////////////////////////////////////////////////////////////
	// ServerManager.ChatServer.ChatServer
	var $ServerManager_ChatServer_ChatServer = function() {
		this.$chatServerIndex = null;
		this.$chatServerIndex = 'ChatServer' + ss.Guid.newGuid();
		CommonShuffleLibrary.ServerLogger.initLogger('ChatServer', this.$chatServerIndex);
		NodeLibraries.Common.Logging.Logger.start(this.$chatServerIndex);
		new global.ArrayUtils();
		process.on('exit', function() {
			CommonShuffleLibrary.ServerLogger.logError('exi ChatServer', null);
		});
		var chatManager = new $ServerManager_ChatServer_ChatManager(this.$chatServerIndex);
	};
	$ServerManager_ChatServer_ChatServer.__typeName = 'ServerManager.ChatServer.ChatServer';
	global.ServerManager.ChatServer.ChatServer = $ServerManager_ChatServer_ChatServer;
	////////////////////////////////////////////////////////////////////////////////
	// ServerManager.DebugGameServer.DebugGameClientManager
	var $ServerManager_DebugGameServer_DebugGameClientManager = function(debugGameServerIndex) {
		this.$qManager = null;
		this.$1$DebugGameServerIndexField = null;
		this.$1$OnGameCreateField = null;
		this.$1$OnGameDestroyField = null;
		this.$1$OnUserAnswerQuestionField = null;
		this.$1$OnUserDisconnectField = null;
		this.$1$OnHandleDebugResponseField = null;
		this.$1$OnUserLeaveField = null;
		this.set_debugGameServerIndex(debugGameServerIndex);
		this.$setup();
	};
	$ServerManager_DebugGameServer_DebugGameClientManager.__typeName = 'ServerManager.DebugGameServer.DebugGameClientManager';
	global.ServerManager.DebugGameServer.DebugGameClientManager = $ServerManager_DebugGameServer_DebugGameClientManager;
	////////////////////////////////////////////////////////////////////////////////
	// ServerManager.DebugGameServer.DebugGameData
	var $ServerManager_DebugGameServer_DebugGameData = function() {
		this.finishedGames = 0;
		this.totalGames = 0;
		this.totalPlayers = 0;
		this.totalQuestionsAnswered = 0;
	};
	$ServerManager_DebugGameServer_DebugGameData.__typeName = 'ServerManager.DebugGameServer.DebugGameData';
	global.ServerManager.DebugGameServer.DebugGameData = $ServerManager_DebugGameServer_DebugGameData;
	////////////////////////////////////////////////////////////////////////////////
	// ServerManager.DebugGameServer.DebugGameManager
	var $ServerManager_DebugGameServer_DebugGameManager = function(debugServerIndex) {
		this.$QUEUEPERTICK = 1;
		this.$answerQueue = [];
		this.$dataManager = null;
		this.$gameData = null;
		this.$myServerManager = null;
		this.$rooms = null;
		this.$skipped__ = 0;
		this.$startTime = new Date();
		this.$total__ = 0;
		this.$processor = null;
		this.$processor = require('./uglify5.js');
		this.$myServerManager = new $ServerManager_DebugGameServer_DebugGameClientManager(debugServerIndex);
		this.$myServerManager.add_onGameCreate(ss.mkdel(this, this.createGame));
		this.$myServerManager.add_onHandleDebugResponse(ss.mkdel(this, this.handleDebugResponse));
		this.$myServerManager.add_onGameDestroy(ss.mkdel(this, this.$gameDestroy));
		this.$myServerManager.add_onUserAnswerQuestion(ss.mkdel(this, this.userAnswerQuestion));
		this.$myServerManager.add_onUserDisconnect(ss.mkdel(this, this.$userDisconnect));
		this.$myServerManager.add_onUserLeave(ss.mkdel(this, this.$userLeave));
		this.$rooms = [];
		this.$gameData = new $ServerManager_DebugGameServer_DebugGameData();
		this.$dataManager = new CommonShuffleLibrary.DataManager();
		setInterval(ss.mkdel(this, this.$flushQueue), 50);
	};
	$ServerManager_DebugGameServer_DebugGameManager.__typeName = 'ServerManager.DebugGameServer.DebugGameManager';
	global.ServerManager.DebugGameServer.DebugGameManager = $ServerManager_DebugGameServer_DebugGameManager;
	////////////////////////////////////////////////////////////////////////////////
	// ServerManager.DebugGameServer.DebugGameServer
	var $ServerManager_DebugGameServer_DebugGameServer = function() {
		this.$childProcess = null;
		this.$debugServerIndex = null;
		this.$debugServerIndex = 'DebugServer' + ss.Guid.newGuid();
		CommonShuffleLibrary.ServerLogger.initLogger('DebugServer', this.$debugServerIndex);
		NodeLibraries.Common.Logging.Logger.start(this.$debugServerIndex);
		this.$childProcess = require('child_process');
		global.Fiber = require('fibers');
		process.on('exit', function() {
			CommonShuffleLibrary.ServerLogger.logError('exi', null);
		});
		var debugGameManager = new $ServerManager_DebugGameServer_DebugGameManager(this.$debugServerIndex);
	};
	$ServerManager_DebugGameServer_DebugGameServer.__typeName = 'ServerManager.DebugGameServer.DebugGameServer';
	global.ServerManager.DebugGameServer.DebugGameServer = $ServerManager_DebugGameServer_DebugGameServer;
	////////////////////////////////////////////////////////////////////////////////
	// ServerManager.DebugGameServer.Models.DebugGameRoom
	var $ServerManager_DebugGameServer_Models_DebugGameRoom = function() {
	};
	$ServerManager_DebugGameServer_Models_DebugGameRoom.__typeName = 'ServerManager.DebugGameServer.Models.DebugGameRoom';
	$ServerManager_DebugGameServer_Models_DebugGameRoom.createInstance = function() {
		return $ServerManager_DebugGameServer_Models_DebugGameRoom.$ctor();
	};
	$ServerManager_DebugGameServer_Models_DebugGameRoom.$ctor = function() {
		var $this = {};
		$this.emulatedAnswers = null;
		$this.debuggingSender = null;
		$this.fiber = null;
		$this.game = null;
		$this.gameType = null;
		$this.maxUsers = 0;
		$this.players = null;
		$this.roomID = null;
		$this.started = false;
		$this.unwind = null;
		$this.playerLeave = null;
		$this.playersLeft = null;
		$this.players = [];
		$this.roomID = ss.Guid.newGuid().toString();
		$this.emulatedAnswers = [];
		return $this;
	};
	global.ServerManager.DebugGameServer.Models.DebugGameRoom = $ServerManager_DebugGameServer_Models_DebugGameRoom;
	////////////////////////////////////////////////////////////////////////////////
	// ServerManager.GameServer.GameClientManager
	var $ServerManager_GameServer_GameClientManager = function(gameServerIndex) {
		this.$qManager = null;
		this.$1$GameServerIndexField = null;
		this.$compress = new Compressor();
		this.$1$OnGameCreateField = null;
		this.$1$OnUserAnswerQuestionField = null;
		this.$1$OnUserDisconnectField = null;
		this.$1$OnUserLeaveField = null;
		this.set_gameServerIndex(gameServerIndex);
		this.$setup();
	};
	$ServerManager_GameServer_GameClientManager.__typeName = 'ServerManager.GameServer.GameClientManager';
	global.ServerManager.GameServer.GameClientManager = $ServerManager_GameServer_GameClientManager;
	////////////////////////////////////////////////////////////////////////////////
	// ServerManager.GameServer.GameData
	var $ServerManager_GameServer_GameData = function() {
		this.finishedGames = 0;
		this.totalGames = 0;
		this.totalPlayers = 0;
		this.totalQuestionsAnswered = 0;
	};
	$ServerManager_GameServer_GameData.__typeName = 'ServerManager.GameServer.GameData';
	global.ServerManager.GameServer.GameData = $ServerManager_GameServer_GameData;
	////////////////////////////////////////////////////////////////////////////////
	// ServerManager.GameServer.GameManager
	var $ServerManager_GameServer_GameManager = function(gameServerIndex) {
		this.$QUEUEPERTICK = 1;
		this.$answerQueue = [];
		this.$cachedGames = null;
		this.$dataManager = null;
		this.$gameData = null;
		this.$myServerManager = null;
		this.$rooms = null;
		this.$skipped__ = 0;
		this.$startTime = new Date();
		this.$total__ = 0;
		this.$myServerManager = new $ServerManager_GameServer_GameClientManager(gameServerIndex);
		this.$myServerManager.add_onGameCreate(ss.mkdel(this, this.createGame));
		this.$myServerManager.add_onUserAnswerQuestion(ss.mkdel(this, this.userAnswerQuestion));
		this.$myServerManager.add_onUserDisconnect(ss.mkdel(this, this.$userDisconnect));
		this.$myServerManager.add_onUserLeave(ss.mkdel(this, this.$userLeave));
		this.$rooms = [];
		this.$cachedGames = {};
		this.$gameData = new $ServerManager_GameServer_GameData();
		this.$dataManager = new CommonShuffleLibrary.DataManager();
		setInterval(ss.mkdel(this, this.$flushQueue), 50);
	};
	$ServerManager_GameServer_GameManager.__typeName = 'ServerManager.GameServer.GameManager';
	global.ServerManager.GameServer.GameManager = $ServerManager_GameServer_GameManager;
	////////////////////////////////////////////////////////////////////////////////
	// ServerManager.GameServer.GameServer
	var $ServerManager_GameServer_GameServer = function() {
		this.$childProcess = null;
		this.$gameServerIndex = null;
		this.$gameServerIndex = 'GameServer' + ss.Guid.newGuid();
		CommonShuffleLibrary.ServerLogger.initLogger('GameServer', this.$gameServerIndex);
		NodeLibraries.Common.Logging.Logger.start(this.$gameServerIndex);
		this.$childProcess = require('child_process');
		global.Fiber = require('fibers');
		process.on('exit', function() {
			CommonShuffleLibrary.ServerLogger.logError('exi', null);
		});
		var gameManager = new $ServerManager_GameServer_GameManager(this.$gameServerIndex);
	};
	$ServerManager_GameServer_GameServer.__typeName = 'ServerManager.GameServer.GameServer';
	global.ServerManager.GameServer.GameServer = $ServerManager_GameServer_GameServer;
	////////////////////////////////////////////////////////////////////////////////
	// ServerManager.GameServer.Models.GameRoom
	var $ServerManager_GameServer_Models_GameRoom = function() {
	};
	$ServerManager_GameServer_Models_GameRoom.__typeName = 'ServerManager.GameServer.Models.GameRoom';
	$ServerManager_GameServer_Models_GameRoom.createInstance = function() {
		return $ServerManager_GameServer_Models_GameRoom.$ctor();
	};
	$ServerManager_GameServer_Models_GameRoom.$ctor = function() {
		var $this = {};
		$this.emulatedAnswers = null;
		$this.fiber = null;
		$this.game = null;
		$this.gameType = null;
		$this.maxUsers = 0;
		$this.players = null;
		$this.roomID = null;
		$this.started = false;
		$this.unwind = null;
		$this.playerLeave = null;
		$this.playersLeft = null;
		$this.players = [];
		$this.roomID = ss.Guid.newGuid().toString();
		$this.emulatedAnswers = [];
		return $this;
	};
	global.ServerManager.GameServer.Models.GameRoom = $ServerManager_GameServer_Models_GameRoom;
	////////////////////////////////////////////////////////////////////////////////
	// ServerManager.GatewayServer.GatewayServer
	var $ServerManager_GatewayServer_GatewayServer = function() {
		this.$myGatewayName = null;
		this.$users = {};
		this.$curc = 0;
		this.$myGatewayName = 'Gateway ' + ss.Guid.newGuid();
		//
		//
		//                        var charm = Charmer.Setup();
		//
		//
		//                        
		//
		//
		//                        var prog = new ProgressBar(charm, 0, 100) {X = 5, Y = 5, Width = 10, CurValue = 12};
		//
		//
		//                        
		//
		//
		//                        Global.SetInterval(() => {
		//
		//
		//                        prog.CurValue++;
		//
		//
		//                        },200);
		CommonShuffleLibrary.ServerLogger.initLogger('GatewayServer', this.$myGatewayName);
		NodeLibraries.Common.Logging.Logger.start(this.$myGatewayName);
		//ExtensionMethods.debugger("");
		var http = require('http');
		var app = http.createServer(function(req, res) {
			res.end();
		});
		var io = require('socket.io').listen(app);
		var fs = require('fs');
		var queueManager;
		var port = 1800 + (Math.random() * 4000 | 0);
		port = 1800;
		var currentSubdomain = 'gateway1';
		var currentIP = NodeLibraries.Common.Logging.ServerHelper.getNetworkIPs()[0] + ':' + port;
		var content;
		if (CommonLibraries.Constants.local) {
			content = ss.formatString('http://{0}', currentIP);
		}
		else {
			content = ss.formatString('http://{0}.{1}', currentSubdomain, 'anycardgame.com');
		}
		CommonShuffleLibrary.ServerLogger.logInformation('Server URL', content);
		app.listen(port);
		io.set('log level', 0);
		new CommonShuffleLibrary.PubSub(function(ps) {
			ps.subscribe('PUBSUB.GatewayServers.Ping', function(message) {
				ps.publish('PUBSUB.GatewayServers', content);
				//                          ps.Publish("PUBSUB.GatewayServers", string.Format("http://{0}:{1}", currentIP, port));
			});
			//                                ps.Publish("PUBSUB.GatewayServers", string.Format("http://{0}:{1}", currentIP, port));
			ps.publish('PUBSUB.GatewayServers', content);
		});
		queueManager = new CommonShuffleLibrary.QueueManager(this.$myGatewayName, new CommonShuffleLibrary.QueueManagerOptions([new CommonShuffleLibrary.QueueWatcher('GatewayServer', ss.mkdel(this, this.$messageReceived)), new CommonShuffleLibrary.QueueWatcher(this.$myGatewayName, ss.mkdel(this, this.$messageReceived))], ['SiteServer', 'GameServer*', 'GameServer', 'DebugServer', 'ChatServer', 'ChatServer*', 'HeadServer']));
		io.sockets.on('connection', ss.mkdel(this, function(socket) {
			var j = ++this.$curc;
			CommonShuffleLibrary.ServerLogger.logDebug('Socket Connected ' + j, null);
			var user = null;
			socket.on('Gateway.Message', function(data) {
				if (ss.isNullOrUndefined(user)) {
					return;
				}
				CommonShuffleLibrary.ServerLogger.logDebug('Socket message ' + j + '  ', { data: data, user: user });
				var channel = 'Bad';
				switch (data.channel.split(String.fromCharCode(46))[1]) {
					case 'Game': {
						channel = ss.coalesce(user.currentGameServer, 'GameServer');
						break;
					}
					case 'Site': {
						channel = 'SiteServer';
						break;
					}
					case 'Debug': {
						channel = ss.coalesce(user.currentDebugServer, 'DebugServer');
						break;
					}
					case 'Chat': {
						channel = ss.coalesce(user.currentChatServer, 'ChatServer');
						break;
					}
				}
				queueManager.sendMessage(channel, data.channel, Models.UserSocketModel.toLogicModel(user), data.content);
			});
			socket.on('Gateway.Login', ss.mkdel(this, function(data1) {
				//ExtensionMethods.debugger();
				user = Models.UserSocketModel.$ctor();
				user.password = data1.password;
				user.socket = socket;
				user.userName = data1.userName;
				user.hash = data1.userName;
				user.gateway = this.$myGatewayName;
				CommonShuffleLibrary.ServerLogger.logDebug('Socket login ' + j, { data: data1, user: user });
				this.$users[data1.userName] = user;
				queueManager.sendMessage('SiteServer', 'Area.Site.Login', Models.UserSocketModel.toLogicModel(user), { hash: user.hash });
			}));
			socket.on('disconnect', ss.mkdel(this, function(data2) {
				if (ss.isNullOrUndefined(user)) {
					return;
				}
				CommonShuffleLibrary.ServerLogger.logDebug('Socket Left ' + j, { data: data2, user: user });
				queueManager.sendMessage('SiteServer', 'Area.Site.UserDisconnect', Models.UserSocketModel.toLogicModel(user), { user: Models.UserSocketModel.toLogicModel(user) });
				//disconnecting from the room in site server disconencts from chat..
				// if (user.CurrentChatServer != null)
				//     queueManager.SendMessage(user.ToLogicModel(), user.CurrentChatServer, "Area.Chat.UserDisconnect", new UserDisconnectModel(user.ToLogicModel()));
				if (ss.isValue(user.currentGameServer)) {
					queueManager.sendMessage(user.currentGameServer, 'Area.Game.UserDisconnect', Models.UserSocketModel.toLogicModel(user), { user: Models.UserSocketModel.toLogicModel(user) });
				}
				if (ss.isValue(user.currentDebugServer)) {
					queueManager.sendMessage(user.currentDebugServer, 'Area.Debug.UserDisconnect', Models.UserSocketModel.toLogicModel(user), { user: Models.UserSocketModel.toLogicModel(user) });
				}
				delete this.$users[user.userName];
				socket.removeAllListeners();
				//socket.Delete();
				delete io.sockets.sockets[socket.id];
				this.$curc--;
			}));
		}));
	};
	$ServerManager_GatewayServer_GatewayServer.__typeName = 'ServerManager.GatewayServer.GatewayServer';
	global.ServerManager.GatewayServer.GatewayServer = $ServerManager_GatewayServer_GatewayServer;
	////////////////////////////////////////////////////////////////////////////////
	// ServerManager.HeadServer.HeadServer
	var $ServerManager_HeadServer_HeadServer = function() {
		this.$__dirname = CommonLibraries.Constants.HARDLOCATION;
		this.$fs = require('fs');
		this.$gateways = [];
		this.$indexForSites = [];
		this.$indexPageData = null;
		this.$oldGateways = [];
		this.$oldIndex = [];
		this.$pubsub = null;
		this.$qManager = null;
		this.$siteIndex = 0;
		var name = 'Head1';
		CommonShuffleLibrary.ServerLogger.initLogger('HeadServer', name);
		NodeLibraries.Common.Logging.Logger.start(name);
		this.$qManager = new CommonShuffleLibrary.QueueManager(name, new CommonShuffleLibrary.QueueManagerOptions([new CommonShuffleLibrary.QueueWatcher('HeadServer', null), new CommonShuffleLibrary.QueueWatcher(name, null)], ['GatewayServer']));
		this.$fs.readFile(this.$__dirname + '/index.html', 'ascii', ss.mkdel(this, this.ready));
		this.$pubsub = new CommonShuffleLibrary.PubSub(ss.mkdel(this, function(ps) {
			ps.subscribe('PUBSUB.GatewayServers', ss.mkdel(this, function(message) {
				ss.add(this.$indexForSites, ss.replaceAllString(this.$indexPageData, '{{gateway}}', message));
				ss.add(this.$gateways, message);
			}));
		}));
		require('http').createServer(ss.mkdel(this, this.$handlerWS)).listen(8844);
		setInterval(ss.mkdel(this, this.$pollGateways), 5000);
		this.$pollGateways();
	};
	$ServerManager_HeadServer_HeadServer.__typeName = 'ServerManager.HeadServer.HeadServer';
	global.ServerManager.HeadServer.HeadServer = $ServerManager_HeadServer_HeadServer;
	////////////////////////////////////////////////////////////////////////////////
	// ServerManager.MonitorServer.MonitorServer
	var $ServerManager_MonitorServer_MonitorServer = function() {
		this.users = {};
		//ExtensionMethods.debugger("");
		var http = require('http');
		var app = http.createServer(function(req, res) {
			res.end();
		});
		var io = require('socket.io').listen(app);
		var fs = require('fs');
		var queueManager;
		var port = 9991;
		var currentIP = NodeLibraries.Common.Logging.ServerHelper.getNetworkIPs()[0];
		console.log(currentIP);
		app.listen(port);
		io.set('log level', 0);
		var serverTypes = ['DebugServer', 'AdminServer', 'SiteServer', 'GameServer', 'ChatServer', 'GatewayServer', 'HeadServer'];
		var connections = [];
		for (var $t1 = 0; $t1 < serverTypes.length; $t1++) {
			var serverType = serverTypes[$t1];
			new CommonShuffleLibrary.ServerLogListener(serverType, function(mess) {
				for (var $t2 = 0; $t2 < connections.length; $t2++) {
					var socketIoConnection = connections[$t2];
					socketIoConnection.emit(mess.serverType, mess);
				}
			});
		}
		io.sockets.on('connection', function(socket) {
			ss.add(connections, socket);
			socket.on('Gateway.Message', function(data) {
			});
			socket.on('disconnect', function(data1) {
				ss.remove(connections, socket);
			});
		});
	};
	$ServerManager_MonitorServer_MonitorServer.__typeName = 'ServerManager.MonitorServer.MonitorServer';
	global.ServerManager.MonitorServer.MonitorServer = $ServerManager_MonitorServer_MonitorServer;
	////////////////////////////////////////////////////////////////////////////////
	// ServerManager.SiteServer.SiteClientManager
	var $ServerManager_SiteServer_SiteClientManager = function(siteServerIndex) {
		this.$qManager = null;
		this.$1$SiteServerIndexField = null;
		this.$1$OnUserCreateField = null;
		this.$1$OnUserLoginField = null;
		this.$1$OnGetGameTypesField = null;
		this.$1$OnGetRoomsField = null;
		this.$1$OnGetRoomInfoField = null;
		this.$1$OnUserDisconnectField = null;
		this.$1$OnLeaveRoomField = null;
		this.$1$OnCreateRoomField = null;
		this.$1$OnJoinRoomField = null;
		this.$1$OnStartGameField = null;
		this.$1$OnGetGamesByUserField = null;
		this.$1$OnDoesGameNameExistField = null;
		this.$1$OnDeveloperCreateGameField = null;
		this.$1$OnDeveloperUpdateGameField = null;
		this.set_siteServerIndex(siteServerIndex);
		this.$setup();
	};
	$ServerManager_SiteServer_SiteClientManager.__typeName = 'ServerManager.SiteServer.SiteClientManager';
	global.ServerManager.SiteServer.SiteClientManager = $ServerManager_SiteServer_SiteClientManager;
	////////////////////////////////////////////////////////////////////////////////
	// ServerManager.SiteServer.SiteManager
	var $ServerManager_SiteServer_SiteManager = function(siteServerIndex) {
		this.$myDataManager = null;
		this.$mySiteClientManager = null;
		this.$myDataManager = new CommonShuffleLibrary.DataManager();
		this.$mySiteClientManager = new $ServerManager_SiteServer_SiteClientManager(siteServerIndex);
		this.$mySiteClientManager.add_onUserLogin(ss.mkdel(this, this.$onUserLogin));
		this.$mySiteClientManager.add_onUserCreate(ss.mkdel(this, this.$onUserCreate));
		this.$mySiteClientManager.add_onGetGameTypes(ss.mkdel(this, this.$onGetGameTypes));
		this.$mySiteClientManager.add_onGetRoomInfo(ss.mkdel(this, this.$onGetRoomInfo));
		this.$mySiteClientManager.add_onGetRooms(ss.mkdel(this, this.$onGetRooms));
		this.$mySiteClientManager.add_onCreateRoom(ss.mkdel(this, this.$onCreateRoom));
		this.$mySiteClientManager.add_onJoinRoom(ss.mkdel(this, this.$onJoinRoom));
		this.$mySiteClientManager.add_onLeaveRoom(ss.mkdel(this, this.$onLeaveRoom));
		this.$mySiteClientManager.add_onStartGame(ss.mkdel(this, this.$onStartGame));
		this.$mySiteClientManager.add_onGetGamesByUser(ss.mkdel(this, this.$onGetGamesByUser));
		this.$mySiteClientManager.add_onDoesGameNameExist(ss.mkdel(this, this.$onDoesGameNameExist));
		this.$mySiteClientManager.add_onDeveloperCreateGame(ss.mkdel(this, this.$onDeveloperCreateGame));
		this.$mySiteClientManager.add_onDeveloperUpdateGame(ss.mkdel(this, this.$onDeveloperUpdateGame));
		this.$mySiteClientManager.add_onUserDisconnect(ss.mkdel(this, this.$onUserDisconnect));
	};
	$ServerManager_SiteServer_SiteManager.__typeName = 'ServerManager.SiteServer.SiteManager';
	global.ServerManager.SiteServer.SiteManager = $ServerManager_SiteServer_SiteManager;
	////////////////////////////////////////////////////////////////////////////////
	// ServerManager.SiteServer.SiteServer
	var $ServerManager_SiteServer_SiteServer = function() {
		this.$siteServerIndex = null;
		new global.ArrayUtils();
		this.$siteServerIndex = 'SiteServer' + ss.Guid.newGuid();
		CommonShuffleLibrary.ServerLogger.initLogger('SiteServer', this.$siteServerIndex);
		NodeLibraries.Common.Logging.Logger.start(this.$siteServerIndex);
		process.on('exit', function() {
			CommonShuffleLibrary.ServerLogger.logError('exi SiteServer', null);
		});
		var siteManager = new $ServerManager_SiteServer_SiteManager(this.$siteServerIndex);
	};
	$ServerManager_SiteServer_SiteServer.__typeName = 'ServerManager.SiteServer.SiteServer';
	global.ServerManager.SiteServer.SiteServer = $ServerManager_SiteServer_SiteServer;
	ss.initClass($ServerManager_$ServerManager, {});
	ss.initClass($ServerManager_AdminServer_AdminServer, {
		$handler: function(request, response) {
			this.$fs.readFile(this.$__dirname + '/blank.html', 'ascii', ss.mkdel(this, function(err, content) {
				var fieldSets = '';
				fieldSets += ss.formatString('<span>Main Site: {0}</span>', ss.formatString('<a href=\'#{0}\' onclick=\'goHere("{1}","MainSite");\'>Launch</a>', parseInt((Math.random() * 20000).toString()), CommonLibraries.Constants.homeAddress));
				fieldSets += this.$buildFieldset(this.$sites, 'Site Servers');
				fieldSets += this.$buildFieldset(this.$gateways, 'Gateway Servers');
				fieldSets += this.$buildFieldset(this.$games, 'Game Servers');
				fieldSets += this.$buildFieldset(this.$debugs, 'Debug Servers');
				fieldSets += this.$buildFieldset(this.$chats, 'Chat Servers');
				fieldSets += this.$buildFieldset(this.$chats, 'Chat Servers');
				var dict = {};
				dict['Content-Type'] = 'text/html';
				response.writeHead(200, dict);
				response.end(ss.replaceAllString(ss.replaceAllString(content, '{0}', fieldSets), '{1}', CommonLibraries.Constants.homeAddress));
			}));
		},
		$buildFieldset: function(items, name) {
			var str = '<fieldset>';
			str += "<ul style='list-style-type:none;'>";
			str += ss.formatString('<li >{0}</li>', name);
			str += ss.formatString('<li ></li>');
			for (var $t1 = 0; $t1 < items.length; $t1++) {
				var process = items[$t1];
				str += '<li>';
				str += ss.formatString('<span>{0} ({1}): {2}</span>', process.name, process.index + 1, (this.$debug ? ss.formatString('<a href=\'#{1}\' onclick=\'goHere("{2}:8080/debug?port={0}","{3}({4})");\'>Debug</a>', process.debugPort + '&foo=' + parseInt((Math.random() * 5000000).toString()), parseInt((Math.random() * 20000).toString()), CommonLibraries.Constants.rootAddress, name, process.index + 1) : 'Debug'));
				str += '</li>';
				//document.frames["test"].location.reload();
			}
			str += '</ul>';
			str += '</fieldset>';
			return str;
		},
		$loop: function() {
			this.$ask('?: ', '', ss.mkdel(this, function(a) {
				this.$onAsk(a, false);
			}));
		},
		$onAsk: function(data, ignore) {
			var rest = data.substr(0, 2);
			switch (data.charAt(0)) {
				case 'd': {
					this.$debug = !this.$debug;
					CommonShuffleLibrary.ServerLogger.logDebug('Debug ' + (this.$debug ? 'Enabled' : 'Disabled'), null);
					break;
				}
				case 's': {
					this.$sites = [];
					this.$games = [];
					this.$chats = [];
					this.$debugs = [];
					this.$gateways = [];
					this.$monitor = new $ServerManager_AdminServer_ProcessInformation(this.$runProcess('node', [this.$__dirname + 'ServerManager.js', 'monitor'], 3900, null), 'Monitor Server', 0, 3900);
					CommonShuffleLibrary.ServerLogger.logInformation('Monitor Server Started', null);
					this.$head = new $ServerManager_AdminServer_ProcessInformation(this.$runProcess('node', [this.$__dirname + 'ServerManager.js', 'head'], 4000, null), 'Head Server', 0, 4000);
					CommonShuffleLibrary.ServerLogger.logInformation('Head Server Started', null);
					for (var j = 0; j < this.$numOfSiteServers; j++) {
						ss.add(this.$sites, new $ServerManager_AdminServer_ProcessInformation(this.$runProcess('node', [this.$__dirname + 'ServerManager.js', 'site'], 4100 + j, null), 'Site Server', j, 4100 + j));
					}
					CommonShuffleLibrary.ServerLogger.logInformation(this.$sites.length + ' Site Servers Started', null);
					for (var j1 = 0; j1 < this.$numOfGateways; j1++) {
						ss.add(this.$gateways, new $ServerManager_AdminServer_ProcessInformation(this.$runProcess('node', [this.$__dirname + 'ServerManager.js', 'gateway'], 4400 + j1, null), 'Gateway Server', j1, 4400 + j1));
					}
					CommonShuffleLibrary.ServerLogger.logInformation(this.$gateways.length + ' Gateway Servers Started', null);
					for (var j2 = 0; j2 < this.$numOfGameServers; j2++) {
						ss.add(this.$games, new $ServerManager_AdminServer_ProcessInformation(this.$runProcess('node', [this.$__dirname + 'ServerManager.js', 'game'], 4200 + j2, null), 'Game Server', j2, 4200 + j2));
					}
					CommonShuffleLibrary.ServerLogger.logInformation(this.$games.length + ' Game Servers Started', null);
					for (var j3 = 0; j3 < this.$numOfChatServers; j3++) {
						ss.add(this.$chats, new $ServerManager_AdminServer_ProcessInformation(this.$runProcess('node', [this.$__dirname + 'ServerManager.js', 'chat'], 4500 + j3, null), 'Chat Server', j3, 4500 + j3));
					}
					CommonShuffleLibrary.ServerLogger.logInformation(this.$chats.length + ' Chat Servers Started', null);
					ss.add(this.$debugs, new $ServerManager_AdminServer_ProcessInformation(this.$runProcess('node', [this.$__dirname + 'ServerManager.js', 'debug'], 4300, null), 'Debug Server', 0, 4300));
					CommonShuffleLibrary.ServerLogger.logInformation(this.$debugs.length + ' Debug Servers Started', null);
					break;
				}
				case 'q': {
					process.exit();
					break;
				}
			}
			if (!ignore) {
				this.$loop();
			}
		},
		$ask: function(question, format, callback) {
			var stdin = process.stdin;
			var stdout = process.stdout;
			stdin.resume();
			stdout.write(question);
			stdin.once('data', function(data) {
				data = data.toString().trim();
				callback(data);
			});
		},
		$runProcess: function(process, args, debugPort, appArgs) {
			var al;
			var name = '';
			if (args.length > 0) {
				name = (al = args[0].split('/'))[al.length - 1].split('.')[0];
			}
			if (ss.indexOf(this.$nonDebuggable, process) === -1 && this.$debug) {
				var jf = ' --debug=';
				if (name.indexOf('Gatewa-') > -1) {
					jf = ' --debug-brk=';
				}
				args[0] = jf + debugPort + ' ' + args[0];
			}
			var dummy = this.$exec(process + ' ' + args.join(' ') + ' ' + ss.coalesce(appArgs, ''));
			if (ss.indexOf(this.$nonDebuggable, process) === -1) {
				dummy.stdout.on('data', ss.mkdel(this, function(data) {
					if (data.indexOf('debug: ') === -1) {
						this.$util.print(ss.formatString('{0} {1} {2}', debugPort, NodeLibraries.Common.Logging.Common.shortDate(), data));
						this.$util.print('?: ');
					}
				}));
				dummy.stderr.on('data', ss.mkdel(this, function(data1) {
					this.$util.print(ss.formatString('{0} {1} {2}', debugPort, NodeLibraries.Common.Logging.Common.shortDate(), data1));
					this.$util.print('?: ');
				}));
			}
			return dummy;
		}
	});
	ss.initClass($ServerManager_AdminServer_ProcessInformation, {});
	ss.initClass($ServerManager_ChatServer_ChatClientManager, {
		get_chatServerIndex: function() {
			return this.$1$ChatServerIndexField;
		},
		set_chatServerIndex: function(value) {
			this.$1$ChatServerIndexField = value;
		},
		add_onCreateChatChannel: function(value) {
			this.$1$OnCreateChatChannelField = ss.delegateCombine(this.$1$OnCreateChatChannelField, value);
		},
		remove_onCreateChatChannel: function(value) {
			this.$1$OnCreateChatChannelField = ss.delegateRemove(this.$1$OnCreateChatChannelField, value);
		},
		add_onSendMessage: function(value) {
			this.$1$OnSendMessageField = ss.delegateCombine(this.$1$OnSendMessageField, value);
		},
		remove_onSendMessage: function(value) {
			this.$1$OnSendMessageField = ss.delegateRemove(this.$1$OnSendMessageField, value);
		},
		add_onJoinChatChannel: function(value) {
			this.$1$OnJoinChatChannelField = ss.delegateCombine(this.$1$OnJoinChatChannelField, value);
		},
		remove_onJoinChatChannel: function(value) {
			this.$1$OnJoinChatChannelField = ss.delegateRemove(this.$1$OnJoinChatChannelField, value);
		},
		add_onUserDisconnect: function(value) {
			this.$1$OnUserDisconnectField = ss.delegateCombine(this.$1$OnUserDisconnectField, value);
		},
		remove_onUserDisconnect: function(value) {
			this.$1$OnUserDisconnectField = ss.delegateRemove(this.$1$OnUserDisconnectField, value);
		},
		add_onLeaveChatRoom: function(value) {
			this.$1$OnLeaveChatRoomField = ss.delegateCombine(this.$1$OnLeaveChatRoomField, value);
		},
		remove_onLeaveChatRoom: function(value) {
			this.$1$OnLeaveChatRoomField = ss.delegateRemove(this.$1$OnLeaveChatRoomField, value);
		},
		$setup: function() {
			this.$qManager = new CommonShuffleLibrary.QueueManager(this.get_chatServerIndex(), new CommonShuffleLibrary.QueueManagerOptions([new CommonShuffleLibrary.QueueWatcher('ChatServer', null), new CommonShuffleLibrary.QueueWatcher(this.get_chatServerIndex(), null)], ['ChatServer', 'GatewayServer', 'Gateway*']));
			this.$qManager.addChannel('Area.Chat.CreateChatRoom', ss.mkdel(this, function(user, data) {
				this.$1$OnCreateChatChannelField(user, data);
			}));
			this.$qManager.addChannel('Area.Chat.JoinChatRoom', ss.mkdel(this, function(user1, data1) {
				this.$1$OnJoinChatChannelField(user1, data1);
			}));
			this.$qManager.addChannel('Area.Chat.SendMessage', ss.mkdel(this, function(user2, data2) {
				this.$1$OnSendMessageField(user2, data2);
			}));
			this.$qManager.addChannel('Area.Chat.UserDisconnect', ss.mkdel(this, function(user3, data3) {
				this.$1$OnUserDisconnectField(user3, data3);
			}));
			this.$qManager.addChannel('Area.Chat.LeaveChatRoom', ss.mkdel(this, function(user4, data4) {
				this.$1$OnLeaveChatRoomField(user4);
			}));
		},
		sendChatLines: function(user, response) {
			this.$qManager.sendMessage(user.gateway, 'Area.Chat.ChatLines.Response', user, response);
		},
		sendChatInfo: function(user, response) {
			this.$qManager.sendMessage(user.gateway, 'Area.Chat.ChatInfo.Response', user, { info: response });
		},
		registerChatServer: function(user) {
			this.$qManager.sendMessage(user.gateway, 'Area.Chat.RegisterServer', user, { server: this.get_chatServerIndex() });
		},
		unregisterChatServer: function(user) {
			this.$qManager.sendMessage(user.gateway, 'Area.Chat.UnregisterServer', user, { server: this.get_chatServerIndex() });
		}
	});
	ss.initClass($ServerManager_ChatServer_ChatManager, {
		$onLeaveChatRoom: function(user) {
			this.$leaveChatRoom(user);
		},
		$leaveChatRoom: function(user) {
			//ExtensionMethods.debugger();
			var room = this.$getRoomFromUser(user);
			if (ss.isNullOrUndefined(room)) {
				throw new ss.Exception('idk');
			}
			for (var $t1 = 0; $t1 < room.users.length; $t1++) {
				var userLogicModel = room.users[$t1];
				if (ss.referenceEquals(userLogicModel.hash, user.hash)) {
					ss.remove(room.users, userLogicModel);
					break;
				}
			}
			this.$myDataManager.chatData.removeUser(room, user, ss.mkdel(this, function(a) {
				this.$myServerManager.unregisterChatServer(user);
				var roomToSend = { roomName: room.roomName, users: room.users, messages: null };
				if (room.users.length === 0) {
					this.$myDataManager.chatData.removeRoom(room, function() {
					});
					return;
				}
				for (var $t2 = 0; $t2 < room.users.length; $t2++) {
					var userLogicModel1 = room.users[$t2];
					this.$myServerManager.sendChatInfo(userLogicModel1, DataModels.ChatManagerModels.ChatRoomDataModel.toModel(roomToSend));
				}
			}));
		},
		$onSendMessage: function(user, data) {
			var room = this.$getRoomFromUser(user);
			if (ss.isNullOrUndefined(room)) {
				throw new ss.Exception('idk');
			}
			this.$myDataManager.chatData.addChatLine(user, room, data.message, ss.mkdel(this, function(a) {
				for (var $t1 = 0; $t1 < room.users.length; $t1++) {
					var userLogicModel = room.users[$t1];
					var $t3 = this.$myServerManager;
					var $t2 = [];
					ss.add($t2, a);
					null;
					$t3.sendChatLines(userLogicModel, { messages: $t2 });
				}
			}));
		},
		$getRoomFromUser: function(user) {
			var currentRoomData = null;
			for (var $t1 = 0; $t1 < this.$runningRooms.length; $t1++) {
				var chatRoomModel = this.$runningRooms[$t1];
				for (var $t2 = 0; $t2 < chatRoomModel.users.length; $t2++) {
					var item = chatRoomModel.users[$t2];
					if (ss.referenceEquals(item.userName, user.userName)) {
						currentRoomData = chatRoomModel;
					}
				}
			}
			return currentRoomData;
		},
		$onJoinChatChannel: function(user, data) {
			var cur = this.$getRoomFromUser(user);
			if (ss.isValue(cur)) {
				this.$leaveChatRoom(user);
			}
			var currentRoomData = null;
			for (var $t1 = 0; $t1 < this.$runningRooms.length; $t1++) {
				var chatRoomModel = this.$runningRooms[$t1];
				if (ss.referenceEquals(chatRoomModel.roomName, data.room.chatChannel)) {
					currentRoomData = chatRoomModel;
				}
			}
			if (ss.isNullOrUndefined(currentRoomData)) {
				throw new ss.Exception('idk');
			}
			this.$myDataManager.chatData.addUser(currentRoomData, user, ss.mkdel(this, function(room) {
				this.$myServerManager.registerChatServer(user);
				var roomToSend = { roomName: room.roomName, users: room.users, messages: room.messages };
				roomToSend.messages = ss.arrayExtract(room.messages, room.messages.length - 5);
				this.$myServerManager.sendChatInfo(user, DataModels.ChatManagerModels.ChatRoomDataModel.toModel(roomToSend));
				roomToSend = { roomName: room.roomName, users: room.users, messages: null };
				for (var $t2 = 0; $t2 < currentRoomData.users.length; $t2++) {
					var userLogicModel = currentRoomData.users[$t2];
					this.$myServerManager.sendChatInfo(userLogicModel, DataModels.ChatManagerModels.ChatRoomDataModel.toModel(roomToSend));
				}
			}));
		},
		$onCreateChatChannel: function(user, data) {
			var cur = this.$getRoomFromUser(user);
			if (ss.isValue(cur)) {
				this.$leaveChatRoom(user);
			}
			this.$myDataManager.siteData.room_SetChatServer(data.room, this.$myServerManager.get_chatServerIndex(), ss.mkdel(this, function(r) {
				this.$myDataManager.chatData.createChatChannel(data.room.chatChannel, user, ss.mkdel(this, function(a) {
					this.$myServerManager.registerChatServer(user);
					ss.add(this.$runningRooms, a);
					this.$myServerManager.sendChatInfo(user, DataModels.ChatManagerModels.ChatRoomDataModel.toModel(a));
				}));
			}));
		},
		$onUserDisconnect: function(user, data) {
			CommonShuffleLibrary.ServerLogger.logDebug('Awww, dat ' + user.userName + ' disconnected ' + new Date(), data);
			this.$myServerManager.unregisterChatServer(user);
			this.$leaveChatRoom(user);
			//removeUserFromRoom(data.User, (room) => { });
		}
	});
	ss.initClass($ServerManager_ChatServer_ChatServer, {});
	ss.initClass($ServerManager_DebugGameServer_DebugGameClientManager, {
		get_debugGameServerIndex: function() {
			return this.$1$DebugGameServerIndexField;
		},
		set_debugGameServerIndex: function(value) {
			this.$1$DebugGameServerIndexField = value;
		},
		add_onGameCreate: function(value) {
			this.$1$OnGameCreateField = ss.delegateCombine(this.$1$OnGameCreateField, value);
		},
		remove_onGameCreate: function(value) {
			this.$1$OnGameCreateField = ss.delegateRemove(this.$1$OnGameCreateField, value);
		},
		add_onGameDestroy: function(value) {
			this.$1$OnGameDestroyField = ss.delegateCombine(this.$1$OnGameDestroyField, value);
		},
		remove_onGameDestroy: function(value) {
			this.$1$OnGameDestroyField = ss.delegateRemove(this.$1$OnGameDestroyField, value);
		},
		add_onUserAnswerQuestion: function(value) {
			this.$1$OnUserAnswerQuestionField = ss.delegateCombine(this.$1$OnUserAnswerQuestionField, value);
		},
		remove_onUserAnswerQuestion: function(value) {
			this.$1$OnUserAnswerQuestionField = ss.delegateRemove(this.$1$OnUserAnswerQuestionField, value);
		},
		add_onUserDisconnect: function(value) {
			this.$1$OnUserDisconnectField = ss.delegateCombine(this.$1$OnUserDisconnectField, value);
		},
		remove_onUserDisconnect: function(value) {
			this.$1$OnUserDisconnectField = ss.delegateRemove(this.$1$OnUserDisconnectField, value);
		},
		add_onHandleDebugResponse: function(value) {
			this.$1$OnHandleDebugResponseField = ss.delegateCombine(this.$1$OnHandleDebugResponseField, value);
		},
		remove_onHandleDebugResponse: function(value) {
			this.$1$OnHandleDebugResponseField = ss.delegateRemove(this.$1$OnHandleDebugResponseField, value);
		},
		add_onUserLeave: function(value) {
			this.$1$OnUserLeaveField = ss.delegateCombine(this.$1$OnUserLeaveField, value);
		},
		remove_onUserLeave: function(value) {
			this.$1$OnUserLeaveField = ss.delegateRemove(this.$1$OnUserLeaveField, value);
		},
		$setup: function() {
			this.$qManager = new CommonShuffleLibrary.QueueManager(this.get_debugGameServerIndex(), new CommonShuffleLibrary.QueueManagerOptions([new CommonShuffleLibrary.QueueWatcher('DebugServer', null), new CommonShuffleLibrary.QueueWatcher(this.get_debugGameServerIndex(), null)], ['DebugServer', 'GatewayServer', 'Gateway*']));
			this.$qManager.addChannel('Area.Debug.Create', ss.mkdel(this, function(user, data) {
				this.$1$OnGameCreateField(user, data);
			}));
			this.$qManager.addChannel('Area.Debug.DebugResponse', ss.mkdel(this, function(user1, data1) {
				this.$1$OnHandleDebugResponseField(user1, data1);
			}));
			this.$qManager.addChannel('Area.Debug.Destroy', ss.mkdel(this, function(user2, data2) {
				this.$1$OnGameDestroyField(user2, data2);
			}));
			this.$qManager.addChannel('Area.Debug.AnswerQuestion', ss.mkdel(this, function(user3, data3) {
				this.$1$OnUserAnswerQuestionField(user3, data3);
			}));
			this.$qManager.addChannel('Area.Debug.UserDisconnect', ss.mkdel(this, function(user4, data4) {
				this.$1$OnUserDisconnectField(user4, data4);
			}));
			this.$qManager.addChannel('Area.Debug.LeaveGameRoom', ss.mkdel(this, function(user5, data5) {
				this.$1$OnUserLeaveField(user5, data5);
			}));
		},
		$sendMessageToTester: function(room, message, val) {
			this.$qManager.sendMessage(room.debuggingSender.gateway, message, room.debuggingSender, val);
		},
		sendGameStarted: function(room) {
			var $t1 = Models.GameManagerModels.GameRoomModel.$ctor();
			$t1.roomID = room.roomID;
			this.$sendMessageToTester(room, 'Area.Debug.Started', $t1);
		},
		sendGameOver: function(room) {
			this.$sendMessageToTester(room, 'Area.Debug.GameOver', 'a');
		},
		sendUpdateState: function(room) {
			this.$sendMessageToTester(room, 'Area.Debug.UpdateState', (new Compressor()).CompressText(JSON.stringify(CommonLibraries.Help.cleanUp(global.CardGame).call(null, room.game.cardGame))));
		},
		sendDebugLog: function(room, ganswer) {
			this.$qManager.sendMessage(room.debuggingSender.gateway, 'Area.Debug.Log', room.debuggingSender, ganswer);
		},
		sendDebugBreak: function(room, ganswer) {
			this.$qManager.sendMessage(room.debuggingSender.gateway, 'Area.Debug.Break', room.debuggingSender, ganswer);
		},
		sendAskQuestion: function(user, gameAnswer) {
			this.$qManager.sendMessage(user.gateway, 'Area.Debug.AskQuestion', user, CommonLibraries.Help.cleanUp(Models.DebugGameManagerModels.DebugGameSendAnswerModel).call(null, gameAnswer));
		},
		registerGameServer: function(user) {
			this.$qManager.sendMessage(user.gateway, 'Area.Debug.RegisterServer', user, { server: this.get_debugGameServerIndex() });
		},
		unregisterGameServer: function(user) {
			this.$qManager.sendMessage(user.gateway, 'Area.Debug.UnregisterServer', user, { server: this.get_debugGameServerIndex() });
		}
	});
	ss.initClass($ServerManager_DebugGameServer_DebugGameData, {
		toString: function() {
			return 'Total: ' + this.totalGames + '\n Running: ' + this.$runningGames() + '\n Total Players: ' + this.totalPlayers + '\n Answered: ' + this.totalQuestionsAnswered;
		},
		$runningGames: function() {
			return this.totalGames - this.finishedGames;
		}
	});
	ss.initClass($ServerManager_DebugGameServer_DebugGameManager, {
		$userDisconnect: function(user, data) {
			for (var $t1 = 0; $t1 < this.$rooms.length; $t1++) {
				var gameRoom = this.$rooms[$t1];
				for (var $t2 = 0; $t2 < gameRoom.players.length; $t2++) {
					var player = gameRoom.players[$t2];
					if (ss.referenceEquals(player.userName, user.userName)) {
						CommonShuffleLibrary.ServerLogger.logDebug('22User Left: ' + player.userName, player);
						gameRoom.playerLeave(player);
						break;
					}
				}
			}
		},
		$userLeave: function(user, data) {
			for (var $t1 = 0; $t1 < this.$rooms.length; $t1++) {
				var gameRoom = this.$rooms[$t1];
				for (var $t2 = 0; $t2 < gameRoom.players.length; $t2++) {
					var player = gameRoom.players[$t2];
					if (ss.referenceEquals(player.userName, user.userName)) {
						CommonShuffleLibrary.ServerLogger.logDebug('11User Left: ' + player.userName, player);
						gameRoom.playerLeave(player);
						break;
					}
				}
			}
		},
		$gameDestroy: function(user, data) {
			this.$myServerManager.unregisterGameServer(user);
			var room = this.$rooms.filter(function(a) {
				return ss.referenceEquals(a.roomID, data.roomID);
			})[0];
			if (ss.isNullOrUndefined(room)) {
				CommonShuffleLibrary.ServerLogger.logError('--room not found ', data);
				return;
			}
			ss.remove(this.$rooms, room);
			room.fiber.reset();
		},
		createGame: function(user, data) {
			CommonShuffleLibrary.ServerLogger.logDebug('--debug game created ', data);
			this.$dataManager.siteData.game_GetGamesByName(data.gameName, ss.mkdel(this, function(game) {
				if (ss.isNullOrUndefined(game)) {
					CommonShuffleLibrary.ServerLogger.logDebug('--game not found ' + data.gameName, user);
					return;
				}
				CommonShuffleLibrary.ServerLogger.logDebug('--game found ' + game.name, game);
				var room;
				ss.add(this.$rooms, room = $ServerManager_DebugGameServer_Models_DebugGameRoom.$ctor());
				room.maxUsers = data.numberOfPlayers;
				//todo idk
				room.gameType = data.gameName;
				room.started = false;
				for (var i = 0; i < data.numberOfPlayers; i++) {
					ss.add(room.players, user);
				}
				room.debuggingSender = user;
				var evaluated_game = null;
				eval('evaluated_game=' + this.$processor.processJSFile(game.gameCode.code));
				var gameObject;
				gameObject = evaluated_game;
				room.fiber = this.$createFiber(room, gameObject, true, game, data.breakpoints);
				room.unwind = ss.mkdel(this, function(players) {
					this.$gameData.finishedGames++;
					CommonShuffleLibrary.ServerLogger.logDebug('--game closed', game);
				});
				room.playerLeave = ss.delegateCombine(room.playerLeave, ss.mkdel(this, function(player) {
					//todo laeve player api in the game
					ss.remove(room.players, player);
					ss.add(room.playersLeft, player);
					if (room.players.length === 0) {
						ss.remove(this.$rooms, room);
						room.fiber.reset();
					}
				}));
				this.$myServerManager.registerGameServer(user);
				this.$startGame(room);
			}));
		},
		$startGame: function(room) {
			if (!room.started) {
				this.$myServerManager.sendGameStarted(room);
				room.started = true;
			}
			var answer = room.fiber.run(room.players);
			this.$processGameResponse(room, answer);
		},
		userAnswerQuestion: function(user, data) {
			ss.add(this.$answerQueue, { item1: user, item2: data });
		},
		$flushQueue: function() {
			var ind = 0;
			for (ind = 0; this.$answerQueue.length > 0 && ind < this.$QUEUEPERTICK; ind++) {
				CommonShuffleLibrary.ServerLogger.logDebug(ss.formatString('-- answer pop, queue length: {0}', this.$answerQueue.length), null);
				var answer = this.$answerQueue[0];
				ss.removeAt(this.$answerQueue, 0);
				var room = this.$getRoomByPlayer(answer.item1.userName);
				if (ss.isNullOrUndefined(room)) {
					CommonShuffleLibrary.ServerLogger.logError('Room not found for user: ' + answer.item1.userName, answer);
					continue;
					throw new ss.Exception('idk');
				}
				var dict = global.CardGameAnswer.$ctor();
				dict.value = answer.item2.answer;
				ss.add(room.emulatedAnswers, dict);
				var answ = room.fiber.run(dict);
				//dataManager.GameData.Insert(new GameInfoModel() {GameName = room.Name, AnswerIndex = answ.Contents});
				this.$processGameResponse(room, answ);
			}
			if (ind === 0) {
				this.$skipped__++;
			}
			else {
				this.$total__ += ind;
				if ((this.$total__ + this.$skipped__) % 20 === 0) {
					var dt = new Date();
					CommonShuffleLibrary.ServerLogger.logDebug(ss.formatString('{0} =  tot: __{1}__ + shift: {2} + T: {3} + QSize: {4} + T Rooms: {5} + Per SecondL {6}', this.$myServerManager.get_debugGameServerIndex().substr(0, 19), this.$total__ + this.$skipped__, ind, this.$total__, this.$answerQueue.length, this.$rooms.length, this.$gameData.totalQuestionsAnswered / ((dt.getTime() - this.$startTime.getTime()) / 1000)), null);
				}
			}
		},
		handleDebugResponse: function(user, data) {
			var room = this.$rooms.filter(function(a) {
				return ss.referenceEquals(a.roomID, data.roomID);
			})[0];
			if (ss.isNullOrUndefined(room)) {
				CommonShuffleLibrary.ServerLogger.logError('--room not found ', data);
				return;
			}
			room.game.cardGame.debugInfo.breakpoints = data.breakpoints;
			room.game.cardGame.debugInfo.stepThrough = data.step;
			room.game.cardGame.debugInfo.action = data.action;
			if (room.game.cardGame.debugInfo.action) {
				var $t2 = room.fiber;
				var $t1 = new global.FiberYieldResponse.$ctor1(4, '');
				$t1.variableLookup = data.variableLookup;
				var debugFiberYieldResponse = $t2.run($t1);
				this.$processGameResponse(room, debugFiberYieldResponse);
			}
		},
		$createFiber: function(room, gameObject, emulating, game, breakpoints) {
			return new Fiber(ss.mkdel(this, function(players) {
				if (ss.isNullOrUndefined(players) || players.length === 0) {
					return true;
				}
				room.players = players;
				CommonShuffleLibrary.ServerLogger.logDebug('game started', room);
				var sev = null;
				eval('sev = new gameObject();');
				room.playersLeft = [];
				sev.cardGame = new global.CardGame();
				sev.cardGame.emulating = emulating;
				room.game = sev;
				var $t2 = sev.cardGame;
				var $t1 = global.DebugInfo.$ctor();
				$t1.breakpoints = breakpoints || [];
				$t2.debugInfo = $t1;
				sev.cardGame.setEmulatedAnswers(room.emulatedAnswers);
				sev.cardGame.setPlayers(players);
				sev.cardGame.size = CommonLibraries.Size.$ctor1(game.gameLayout.width, game.gameLayout.height);
				for (var $t3 = 0; $t3 < game.gameLayout.texts.length; $t3++) {
					var gameTextModel = game.gameLayout.texts[$t3];
					var $t5 = sev.cardGame.textAreas;
					var $t4 = global.GameCardGameTextAreaOptions.$ctor();
					$t4.x = gameTextModel.left;
					$t4.y = gameTextModel.top;
					$t4.name = gameTextModel.name;
					$t4.text = gameTextModel.text;
					ss.add($t5, new global.TableTextArea($t4));
				}
				for (var $t6 = 0; $t6 < game.gameLayout.spaces.length; $t6++) {
					var gameSpaceModel = game.gameLayout.spaces[$t6];
					var $t8 = sev.cardGame.spaces;
					var $t7 = new global.CardGameTableSpaceOptions();
					$t7.x = gameSpaceModel.left;
					$t7.y = gameSpaceModel.top;
					$t7.height = gameSpaceModel.height;
					$t7.width = gameSpaceModel.width;
					$t7.name = gameSpaceModel.name;
					$t7.vertical = gameSpaceModel.vertical;
					$t7.resizeType = gameSpaceModel.resizeType;
					ss.add($t8, new global.TableSpace($t7));
				}
				for (var $t9 = 0; $t9 < game.effects.length; $t9++) {
					var gameEffect = game.effects[$t9];
					var $t12 = sev.cardGame.effects;
					var $t10 = global.CardGameEffectOptions.$ctor();
					$t10.name = gameEffect.name;
					$t10.type = gameEffect.type;
					$t10.properties = gameEffect.properties.map(function(a) {
						var $t11 = global.CardGameEffectProperty.$ctor();
						$t11.name = a.name;
						$t11.value = a.value;
						return $t11;
					});
					ss.add($t12, new global.CardGameEffect($t10));
				}
				this.$gameData.totalGames++;
				this.$gameData.totalPlayers += players.length;
				sev.cardGame.emulatedAnswerIndex = 0;
				//todo to data
				sev.cardGame.numberOfCards = 52;
				sev.cardGame.numberOfJokers = 0;
				sev.cardGame.configurationCompleted();
				sev.constructor();
				sev.runGame();
				CommonShuffleLibrary.ServerLogger.logDebug('Doneski', this.$gameData);
				room.unwind(players);
				return true;
			}));
		},
		$processGameResponse: function(room, response) {
			if (ss.isNullOrUndefined(response)) {
				CommonShuffleLibrary.ServerLogger.logDebug('game request over', room);
				this.$myServerManager.sendGameOver(room);
				room.fiber.run();
				ss.remove(this.$rooms, room);
				room.unwind(room.players);
				return;
			}
			switch (response.type) {
				case 0: {
					this.$askPlayerQuestion(room, response);
					break;
				}
				case 5: {
					this.$didPlayersLeave(room, response);
					break;
				}
				case 2: {
					this.$gameOver(room);
					break;
				}
				case 1: {
					this.$logGameConsoleLine(room, response);
					break;
				}
				case 4: {
					console.log('vlook  ' + JSON.stringify(response));
					this.$breakGameExecution(room, response);
					break;
				}
				case 3: {
					console.log('broke  ' + JSON.stringify(response));
					this.$breakGameExecution(room, response);
					break;
				}
			}
		},
		$didPlayersLeave: function(room, response) {
			room.fiber.run(room.playersLeft);
			ss.clear(room.playersLeft);
		},
		$breakGameExecution: function(room, response) {
			var ganswer = { lineNumber: response.lineNumber, variableLookupResult: response.value };
			this.$myServerManager.sendDebugBreak(room, ganswer);
		},
		$logGameConsoleLine: function(room, answer) {
			var answ2 = room.fiber.run();
			this.$processGameResponse(room, answ2);
			if (!room.game.cardGame.emulating) {
				this.$myServerManager.sendDebugLog(room, { value: answer.contents });
			}
		},
		$gameOver: function(room) {
			CommonShuffleLibrary.ServerLogger.logDebug('game real over', room);
			this.$myServerManager.sendUpdateState(room);
			this.$myServerManager.sendGameOver(room);
			ss.remove(this.$rooms, room);
			room.fiber.reset();
		},
		$askPlayerQuestion: function(room, answer) {
			this.$gameData.totalQuestionsAnswered++;
			var answ = answer.question;
			if (ss.isNullOrUndefined(answ)) {
				CommonShuffleLibrary.ServerLogger.logDebug('game question over', room);
				this.$myServerManager.sendGameOver(room);
				room.fiber.run();
				//     profiler.takeSnapshot('game over ' + room.roomID);
				return;
			}
			this.$askQuestion(answ, room);
			//ServerLogger.Log(gameData.toString());
			var dt = new Date();
			var then = dt.getMilliseconds();
			//ServerLogger.Log(then - now + " Milliseconds");
			//  ServerLogger.Log(gameData.TotalQuestionsAnswered / ((dt.GetTime() - startTime.GetTime()) / 1000d) + " Answers per seconds", LogLevel.DebugInformation);
		},
		$askQuestion: function(answ, room) {
			var user = this.$getPlayerByUsername(room, answ.user.userName);
			this.$myServerManager.sendAskQuestion(user, { question: answ.question, answers: answ.answers });
			this.$myServerManager.sendUpdateState(room);
			CommonShuffleLibrary.ServerLogger.logDebug('Ask question   ', answ);
		},
		$getPlayerByUsername: function(room, userName) {
			for (var $t1 = 0; $t1 < room.players.length; $t1++) {
				var player = room.players[$t1];
				if (ss.referenceEquals(player.userName, userName)) {
					return player;
				}
			}
			return null;
		},
		$getRoomByPlayer: function(userName) {
			for (var $t1 = 0; $t1 < this.$rooms.length; $t1++) {
				var gameRoom = this.$rooms[$t1];
				for (var $t2 = 0; $t2 < gameRoom.players.length; $t2++) {
					var userLogicModel = gameRoom.players[$t2];
					if (ss.referenceEquals(userLogicModel.userName, userName)) {
						return gameRoom;
					}
				}
			}
			return null;
		}
	});
	ss.initClass($ServerManager_DebugGameServer_DebugGameServer, {});
	ss.initClass($ServerManager_DebugGameServer_Models_DebugGameRoom, {});
	ss.initClass($ServerManager_GameServer_GameClientManager, {
		get_gameServerIndex: function() {
			return this.$1$GameServerIndexField;
		},
		set_gameServerIndex: function(value) {
			this.$1$GameServerIndexField = value;
		},
		add_onGameCreate: function(value) {
			this.$1$OnGameCreateField = ss.delegateCombine(this.$1$OnGameCreateField, value);
		},
		remove_onGameCreate: function(value) {
			this.$1$OnGameCreateField = ss.delegateRemove(this.$1$OnGameCreateField, value);
		},
		add_onUserAnswerQuestion: function(value) {
			this.$1$OnUserAnswerQuestionField = ss.delegateCombine(this.$1$OnUserAnswerQuestionField, value);
		},
		remove_onUserAnswerQuestion: function(value) {
			this.$1$OnUserAnswerQuestionField = ss.delegateRemove(this.$1$OnUserAnswerQuestionField, value);
		},
		add_onUserDisconnect: function(value) {
			this.$1$OnUserDisconnectField = ss.delegateCombine(this.$1$OnUserDisconnectField, value);
		},
		remove_onUserDisconnect: function(value) {
			this.$1$OnUserDisconnectField = ss.delegateRemove(this.$1$OnUserDisconnectField, value);
		},
		add_onUserLeave: function(value) {
			this.$1$OnUserLeaveField = ss.delegateCombine(this.$1$OnUserLeaveField, value);
		},
		remove_onUserLeave: function(value) {
			this.$1$OnUserLeaveField = ss.delegateRemove(this.$1$OnUserLeaveField, value);
		},
		$setup: function() {
			this.$qManager = new CommonShuffleLibrary.QueueManager(this.get_gameServerIndex(), new CommonShuffleLibrary.QueueManagerOptions([new CommonShuffleLibrary.QueueWatcher('GameServer', null), new CommonShuffleLibrary.QueueWatcher(this.get_gameServerIndex(), null)], ['GameServer', 'GatewayServer', 'Gateway*']));
			this.$qManager.addChannel('Area.Game.Create', ss.mkdel(this, function(user, data) {
				this.$1$OnGameCreateField(data);
			}));
			this.$qManager.addChannel('Area.Game.AnswerQuestion', ss.mkdel(this, function(user1, data1) {
				this.$1$OnUserAnswerQuestionField(user1, data1);
			}));
			this.$qManager.addChannel('Area.Game.UserDisconnect', ss.mkdel(this, function(user2, data2) {
				this.$1$OnUserDisconnectField(user2, data2);
			}));
			this.$qManager.addChannel('Area.Game.LeaveGameRoom', ss.mkdel(this, function(user3, data3) {
				this.$1$OnUserLeaveField(user3, data3);
			}));
		},
		$sendMessageToAll: function(room, message, val) {
			for (var $t1 = 0; $t1 < room.players.length; $t1++) {
				var player = room.players[$t1];
				this.$qManager.sendMessage(player.gateway, message, player, val);
			}
		},
		sendGameStarted: function(room) {
			var $t1 = Models.GameManagerModels.GameRoomModel.$ctor();
			$t1.roomID = room.roomID;
			this.$sendMessageToAll(room, 'Area.Game.Started', $t1);
		},
		sendGameOver: function(room) {
			this.$sendMessageToAll(room, 'Area.Game.GameOver', 'a');
		},
		sendUpdateState: function(room, user) {
			for (var $t1 = 0; $t1 < room.players.length; $t1++) {
				var player = room.players[$t1];
				var tmp = JSON.parse(JSON.stringify(room.game.cardGame));
				var piles = {};
				for (var $t2 = 0; $t2 < tmp.users.length; $t2++) {
					var cgUser = tmp.users[$t2];
					piles[cgUser.cards.name] = cgUser.cards;
					for (var $t3 = 0; $t3 < cgUser.cards.cards.length; $t3++) {
						var card = cgUser.cards.cards[$t3];
						if (card.state === 2 && !ss.referenceEquals(cgUser.userName, player.userName)) {
							card.type = -1;
							card.value = -1;
						}
						if (card.state === 1) {
							card.type = -1;
							card.value = -1;
						}
					}
				}
				for (var $t4 = 0; $t4 < tmp.spaces.length; $t4++) {
					var space = tmp.spaces[$t4];
					if (ss.isValue(piles[space.pileName])) {
						space.pile = piles[space.pileName];
					}
					for (var $t5 = 0; $t5 < space.pile.cards.length; $t5++) {
						var card1 = space.pile.cards[$t5];
						if (card1.state === 1) {
							card1.type = -1;
							card1.value = -1;
						}
					}
				}
				for (var $t6 = 0; $t6 < tmp.deck.cards.length; $t6++) {
					var card2 = tmp.deck.cards[$t6];
					if (card2.state === 1) {
						card2.type = -1;
						card2.value = -1;
					}
				}
				var stringify = JSON.stringify(CommonLibraries.Help.cleanUp(global.CardGame).call(null, tmp));
				CommonShuffleLibrary.ServerLogger.logData('Send Data' + player.userName, stringify);
				var val = this.$compress.CompressText(stringify);
				this.$qManager.sendMessage(player.gateway, 'Area.Game.UpdateState', player, val);
			}
		},
		sendAskQuestion: function(user, gameAnswer) {
			this.$qManager.sendMessage(user.gateway, 'Area.Game.AskQuestion', user, CommonLibraries.Help.cleanUp(Models.GameManagerModels.GameSendAnswerModel).call(null, gameAnswer));
		},
		registerGameServer: function(user) {
			this.$qManager.sendMessage(user.gateway, 'Area.Game.RegisterServer', user, { server: this.get_gameServerIndex() });
		},
		unregisterGameServer: function(user) {
			this.$qManager.sendMessage(user.gateway, 'Area.Game.UnregisterServer', user, { server: this.get_gameServerIndex() });
		}
	});
	ss.initClass($ServerManager_GameServer_GameData, {
		toString: function() {
			return 'Total: ' + this.totalGames + '\n Running: ' + this.$runningGames() + '\n Total Players: ' + this.totalPlayers + '\n Answered: ' + this.totalQuestionsAnswered;
		},
		$runningGames: function() {
			return this.totalGames - this.finishedGames;
		}
	});
	ss.initClass($ServerManager_GameServer_GameManager, {
		$userDisconnect: function(user, data) {
			for (var $t1 = 0; $t1 < this.$rooms.length; $t1++) {
				var gameRoom = this.$rooms[$t1];
				for (var $t2 = 0; $t2 < gameRoom.players.length; $t2++) {
					var player = gameRoom.players[$t2];
					if (ss.referenceEquals(player.userName, user.userName)) {
						CommonShuffleLibrary.ServerLogger.logDebug('22User Left: ' + player.userName, player);
						gameRoom.playerLeave(player);
						break;
					}
				}
			}
		},
		$userLeave: function(user, data) {
			for (var $t1 = 0; $t1 < this.$rooms.length; $t1++) {
				var gameRoom = this.$rooms[$t1];
				for (var $t2 = 0; $t2 < gameRoom.players.length; $t2++) {
					var player = gameRoom.players[$t2];
					if (ss.referenceEquals(player.userName, user.userName)) {
						CommonShuffleLibrary.ServerLogger.logDebug('11User Left: ' + player.userName, player);
						gameRoom.playerLeave(player);
						break;
					}
				}
			}
		},
		createGame: function(data) {
			CommonShuffleLibrary.ServerLogger.logDebug('--game created ', data);
			this.$dataManager.siteData.game_GetGamesByName(data.gameType, ss.mkdel(this, function(game) {
				if (ss.isNullOrUndefined(game)) {
					CommonShuffleLibrary.ServerLogger.logError('--game not found ' + data.gameType, data);
					return;
				}
				CommonShuffleLibrary.ServerLogger.logDebug('--game found ' + game.name, game);
				var room;
				ss.add(this.$rooms, room = $ServerManager_GameServer_Models_GameRoom.$ctor());
				room.maxUsers = data.players.length;
				//todo idk
				room.gameType = data.gameType;
				room.started = false;
				ss.arrayAddRange(room.players, data.players);
				var evaluated_game = null;
				eval('evaluated_game=' + game.gameCode.code);
				var gameObject;
				if (ss.keyExists(this.$cachedGames, room.gameType)) {
					gameObject = this.$cachedGames[room.gameType];
				}
				else {
					gameObject = this.$cachedGames[room.gameType] = evaluated_game;
				}
				room.fiber = this.$createFiber(room, gameObject, true, game);
				room.unwind = ss.mkdel(this, function(players) {
					this.$gameData.finishedGames++;
					CommonShuffleLibrary.ServerLogger.logDebug('--game closed', this.$gameData);
				});
				room.playerLeave = ss.delegateCombine(room.playerLeave, function(player) {
					//todo laeve player api in the game
					ss.remove(room.players, player);
					ss.add(room.playersLeft, player);
				});
				for (var $t1 = 0; $t1 < room.players.length; $t1++) {
					var userLogicModel = room.players[$t1];
					this.$myServerManager.registerGameServer(userLogicModel);
				}
				this.$startGame(room);
			}));
		},
		$startGame: function(room) {
			this.$myServerManager.sendGameStarted(room);
			room.started = true;
			var answer = room.fiber.run(room.players);
			this.$processGameResponse(room, answer);
		},
		userAnswerQuestion: function(user, data) {
			ss.add(this.$answerQueue, { item1: user, item2: data });
		},
		$flushQueue: function() {
			var ind = 0;
			for (ind = 0; this.$answerQueue.length > 0 && ind < this.$QUEUEPERTICK; ind++) {
				CommonShuffleLibrary.ServerLogger.logDebug(ss.formatString('-- answer pop, queue length: {0}', this.$answerQueue.length), null);
				var answer = this.$answerQueue[0];
				ss.removeAt(this.$answerQueue, 0);
				var room = this.$getRoomByPlayer(answer.item1.userName);
				if (ss.isNullOrUndefined(room)) {
					CommonShuffleLibrary.ServerLogger.logError('Room not found for user: ' + answer.item1.userName, answer);
					continue;
					throw new ss.Exception('idk');
				}
				var dict = global.CardGameAnswer.$ctor();
				dict.value = answer.item2.answer;
				ss.add(room.emulatedAnswers, dict);
				var answ = room.fiber.run(dict);
				//dataManager.GameData.Insert(new GameInfoModel() {GameName = room.Name, AnswerIndex = answ.Contents});
				this.$processGameResponse(room, answ);
			}
			if (ind === 0) {
				this.$skipped__++;
			}
			else {
				this.$total__ += ind;
				if ((this.$total__ + this.$skipped__) % 20 === 0) {
					var dt = new Date();
					CommonShuffleLibrary.ServerLogger.logDebug(ss.formatString('{0} =  tot: __{1}__ + shift: {2} + T: {3} + QSize: {4} + T Rooms: {5} + Per SecondL {6}', this.$myServerManager.get_gameServerIndex().substr(0, 19), this.$total__ + this.$skipped__, ind, this.$total__, this.$answerQueue.length, this.$rooms.length, this.$gameData.totalQuestionsAnswered / ((dt.getTime() - this.$startTime.getTime()) / 1000)), null);
				}
			}
		},
		$createFiber: function(room, gameObject, emulating, game) {
			return new Fiber(ss.mkdel(this, function(players) {
				if (ss.isNullOrUndefined(players) || players.length === 0) {
					return true;
				}
				room.players = players;
				CommonShuffleLibrary.ServerLogger.logDebug('game started', room);
				var sev = null;
				eval('sev = new gameObject();');
				room.playersLeft = [];
				sev.cardGame = new global.CardGame();
				sev.cardGame.emulating = emulating;
				room.game = sev;
				sev.cardGame.setEmulatedAnswers(room.emulatedAnswers);
				sev.cardGame.setPlayers(players);
				sev.cardGame.size = CommonLibraries.Size.$ctor1(game.gameLayout.width, game.gameLayout.height);
				for (var $t1 = 0; $t1 < game.gameLayout.texts.length; $t1++) {
					var gameTextModel = game.gameLayout.texts[$t1];
					var $t3 = sev.cardGame.textAreas;
					var $t2 = global.GameCardGameTextAreaOptions.$ctor();
					$t2.x = gameTextModel.left;
					$t2.y = gameTextModel.top;
					$t2.name = gameTextModel.name;
					$t2.text = gameTextModel.text;
					ss.add($t3, new global.TableTextArea($t2));
				}
				for (var $t4 = 0; $t4 < game.gameLayout.spaces.length; $t4++) {
					var gameSpaceModel = game.gameLayout.spaces[$t4];
					var $t6 = sev.cardGame.spaces;
					var $t5 = new global.CardGameTableSpaceOptions();
					$t5.x = gameSpaceModel.left;
					$t5.y = gameSpaceModel.top;
					$t5.height = gameSpaceModel.height;
					$t5.width = gameSpaceModel.width;
					$t5.name = gameSpaceModel.name;
					$t5.vertical = gameSpaceModel.vertical;
					$t5.resizeType = gameSpaceModel.resizeType;
					ss.add($t6, new global.TableSpace($t5));
				}
				for (var $t7 = 0; $t7 < game.effects.length; $t7++) {
					var gameEffect = game.effects[$t7];
					var $t10 = sev.cardGame.effects;
					var $t8 = global.CardGameEffectOptions.$ctor();
					$t8.name = gameEffect.name;
					$t8.type = gameEffect.type;
					$t8.properties = gameEffect.properties.map(function(a) {
						var $t9 = global.CardGameEffectProperty.$ctor();
						$t9.name = a.name;
						$t9.value = a.value;
						return $t9;
					});
					ss.add($t10, new global.CardGameEffect($t8));
				}
				this.$gameData.totalGames++;
				this.$gameData.totalPlayers += players.length;
				sev.cardGame.emulatedAnswerIndex = 0;
				//todo to data
				sev.cardGame.numberOfCards = 52;
				sev.cardGame.numberOfJokers = 0;
				sev.cardGame.configurationCompleted();
				sev.constructor();
				sev.runGame();
				CommonShuffleLibrary.ServerLogger.logDebug('Doneski', this.$gameData);
				room.unwind(players);
				return true;
			}));
		},
		$processGameResponse: function(room, response) {
			if (ss.isNullOrUndefined(response)) {
				CommonShuffleLibrary.ServerLogger.logDebug('game request over', room);
				this.$myServerManager.sendGameOver(room);
				room.fiber.run();
				ss.remove(this.$rooms, room);
				room.unwind(room.players);
				return;
			}
			switch (response.type) {
				case 0: {
					this.$askPlayerQuestion(room, response);
					break;
				}
				case 5: {
					this.$didPlayersLeave(room, response);
					break;
				}
				case 2: {
					this.$gameOver(room);
					break;
				}
				case 1: {
					this.$gameNoop(room);
					break;
				}
				case 3: {
					this.$gameNoop(room);
					break;
				}
			}
		},
		$didPlayersLeave: function(room, response) {
			room.fiber.run(room.playersLeft);
			ss.clear(room.playersLeft);
		},
		$gameNoop: function(room) {
			var answ2 = room.fiber.run();
			this.$processGameResponse(room, answ2);
		},
		$gameOver: function(room) {
			CommonShuffleLibrary.ServerLogger.logDebug('game real over', room);
			this.$myServerManager.sendUpdateState(room, null);
			this.$myServerManager.sendGameOver(room);
			ss.remove(this.$rooms, room);
			room.fiber.reset();
		},
		$askPlayerQuestion: function(room, answer) {
			this.$gameData.totalQuestionsAnswered++;
			var answ = answer.question;
			if (ss.isNullOrUndefined(answ)) {
				CommonShuffleLibrary.ServerLogger.logDebug('game question over', room);
				this.$myServerManager.sendGameOver(room);
				room.fiber.run();
				//     profiler.takeSnapshot('game over ' + room.roomID);
				return;
			}
			this.$askQuestion(answ, room);
			//ServerLogger.Log(gameData.toString());
			var dt = new Date();
			var then = dt.getMilliseconds();
			//ServerLogger.Log(then - now + " Milliseconds");
			//  ServerLogger.Log(gameData.TotalQuestionsAnswered / ((dt.GetTime() - startTime.GetTime()) / 1000d) + " Answers per seconds", LogLevel.DebugInformation);
		},
		$askQuestion: function(answ, room) {
			var user = this.$getPlayerByUsername(room, answ.user.userName);
			this.$myServerManager.sendAskQuestion(user, { question: answ.question, answers: answ.answers });
			this.$myServerManager.sendUpdateState(room, answ.user);
			CommonShuffleLibrary.ServerLogger.logDebug('Ask question   ', answ);
		},
		$getPlayerByUsername: function(room, userName) {
			for (var $t1 = 0; $t1 < room.players.length; $t1++) {
				var player = room.players[$t1];
				if (ss.referenceEquals(player.userName, userName)) {
					return player;
				}
			}
			return null;
		},
		$getRoomByPlayer: function(userName) {
			for (var $t1 = 0; $t1 < this.$rooms.length; $t1++) {
				var gameRoom = this.$rooms[$t1];
				for (var $t2 = 0; $t2 < gameRoom.players.length; $t2++) {
					var userLogicModel = gameRoom.players[$t2];
					if (ss.referenceEquals(userLogicModel.userName, userName)) {
						return gameRoom;
					}
				}
			}
			return null;
		}
	});
	ss.initClass($ServerManager_GameServer_GameServer, {});
	ss.initClass($ServerManager_GameServer_Models_GameRoom, {});
	ss.initClass($ServerManager_GatewayServer_GatewayServer, {
		$messageReceived: function(gateway, user, eventChannel, content) {
			if (ss.keyExists(this.$users, user.userName)) {
				var u = this.$users[user.userName];
				this.$sendMessage(u, eventChannel, content);
			}
		},
		$sendMessage: function(user, eventChannel, content) {
			if (this.$specialHandle(user, eventChannel, content)) {
				var socketClientMessageModel = new Models.SocketClientMessageModel(Models.UserSocketModel.toUserModel(user), eventChannel, content);
				CommonShuffleLibrary.ServerLogger.logTransport('Send Message', socketClientMessageModel);
				user.socket.emit('Client.Message', socketClientMessageModel);
			}
		},
		$specialHandle: function(user, eventChannel, content) {
			if (eventChannel === 'Area.Chat.RegisterServer') {
				CommonShuffleLibrary.ServerLogger.logDebug(ss.formatString('Chat Server {0} Registered to {1}', content.server, user.hash), user);
				user.currentChatServer = content.server;
				return false;
			}
			if (eventChannel === 'Area.Chat.UnregisterServer') {
				CommonShuffleLibrary.ServerLogger.logDebug(ss.formatString('Chat Server UnRegistered from {0}', user.currentChatServer), user);
				user.currentChatServer = null;
				return false;
			}
			if (eventChannel === 'Area.Game.RegisterServer') {
				CommonShuffleLibrary.ServerLogger.logDebug(ss.formatString('Game Server {0} Registered to {1}', content.server, user.hash), user);
				user.currentGameServer = content.server;
				return false;
			}
			if (eventChannel === 'Area.Game.UnregisterServer') {
				CommonShuffleLibrary.ServerLogger.logDebug(ss.formatString('Game Server UnRegistered from {0}', user.currentGameServer), user);
				user.currentGameServer = null;
				return false;
			}
			if (eventChannel === 'Area.Debug.RegisterServer') {
				CommonShuffleLibrary.ServerLogger.logDebug(ss.formatString('Debug Server {0} Registered to {1}', content.server, user.hash), user);
				user.currentDebugServer = content.server;
				return false;
			}
			if (eventChannel === 'Area.Debug.UnregisterServer') {
				CommonShuffleLibrary.ServerLogger.logDebug(ss.formatString('Debug Server UnRegistered from {0}', user.currentDebugServer), user);
				user.currentDebugServer = null;
				return false;
			}
			return true;
		}
	});
	ss.initClass($ServerManager_HeadServer_HeadServer, {
		$pollGateways: function() {
			this.$pubsub.publish('PUBSUB.GatewayServers.Ping', '');
			if (this.$indexForSites.length > 0) {
				this.$oldIndex = this.$indexForSites;
			}
			if (this.$gateways.length > 0) {
				this.$oldGateways = this.$gateways;
			}
			this.$indexForSites = [];
			this.$gateways = [];
			this.$siteIndex = 0;
		},
		$handlerWS: function(request, response) {
			if (this.$oldGateways.length > 0) {
				var inj = this.$siteIndex++ % this.$oldIndex.length;
				response.end(this.$oldGateways[inj]);
				return;
			}
			response.end();
		},
		$handler: function(request, response) {
			var dict = {};
			dict['Content-Type'] = 'text/html';
			if (this.$oldIndex.length > 0) {
				response.writeHead(200, dict);
				var inj = this.$siteIndex++ % this.$oldIndex.length;
				response.end(this.$oldIndex[inj]);
			}
			else {
				response.writeHead(200, dict);
				response.end();
			}
		},
		ready: function(error, content) {
			this.$indexPageData = content.toString();
			this.$indexPageData = content.toString();
			require('http').createServer(ss.mkdel(this, this.$handler)).listen(1700);
		}
	});
	ss.initClass($ServerManager_MonitorServer_MonitorServer, {});
	ss.initClass($ServerManager_SiteServer_SiteClientManager, {
		get_siteServerIndex: function() {
			return this.$1$SiteServerIndexField;
		},
		set_siteServerIndex: function(value) {
			this.$1$SiteServerIndexField = value;
		},
		add_onUserCreate: function(value) {
			this.$1$OnUserCreateField = ss.delegateCombine(this.$1$OnUserCreateField, value);
		},
		remove_onUserCreate: function(value) {
			this.$1$OnUserCreateField = ss.delegateRemove(this.$1$OnUserCreateField, value);
		},
		add_onUserLogin: function(value) {
			this.$1$OnUserLoginField = ss.delegateCombine(this.$1$OnUserLoginField, value);
		},
		remove_onUserLogin: function(value) {
			this.$1$OnUserLoginField = ss.delegateRemove(this.$1$OnUserLoginField, value);
		},
		add_onGetGameTypes: function(value) {
			this.$1$OnGetGameTypesField = ss.delegateCombine(this.$1$OnGetGameTypesField, value);
		},
		remove_onGetGameTypes: function(value) {
			this.$1$OnGetGameTypesField = ss.delegateRemove(this.$1$OnGetGameTypesField, value);
		},
		add_onGetRooms: function(value) {
			this.$1$OnGetRoomsField = ss.delegateCombine(this.$1$OnGetRoomsField, value);
		},
		remove_onGetRooms: function(value) {
			this.$1$OnGetRoomsField = ss.delegateRemove(this.$1$OnGetRoomsField, value);
		},
		add_onGetRoomInfo: function(value) {
			this.$1$OnGetRoomInfoField = ss.delegateCombine(this.$1$OnGetRoomInfoField, value);
		},
		remove_onGetRoomInfo: function(value) {
			this.$1$OnGetRoomInfoField = ss.delegateRemove(this.$1$OnGetRoomInfoField, value);
		},
		add_onUserDisconnect: function(value) {
			this.$1$OnUserDisconnectField = ss.delegateCombine(this.$1$OnUserDisconnectField, value);
		},
		remove_onUserDisconnect: function(value) {
			this.$1$OnUserDisconnectField = ss.delegateRemove(this.$1$OnUserDisconnectField, value);
		},
		add_onLeaveRoom: function(value) {
			this.$1$OnLeaveRoomField = ss.delegateCombine(this.$1$OnLeaveRoomField, value);
		},
		remove_onLeaveRoom: function(value) {
			this.$1$OnLeaveRoomField = ss.delegateRemove(this.$1$OnLeaveRoomField, value);
		},
		add_onCreateRoom: function(value) {
			this.$1$OnCreateRoomField = ss.delegateCombine(this.$1$OnCreateRoomField, value);
		},
		remove_onCreateRoom: function(value) {
			this.$1$OnCreateRoomField = ss.delegateRemove(this.$1$OnCreateRoomField, value);
		},
		add_onJoinRoom: function(value) {
			this.$1$OnJoinRoomField = ss.delegateCombine(this.$1$OnJoinRoomField, value);
		},
		remove_onJoinRoom: function(value) {
			this.$1$OnJoinRoomField = ss.delegateRemove(this.$1$OnJoinRoomField, value);
		},
		add_onStartGame: function(value) {
			this.$1$OnStartGameField = ss.delegateCombine(this.$1$OnStartGameField, value);
		},
		remove_onStartGame: function(value) {
			this.$1$OnStartGameField = ss.delegateRemove(this.$1$OnStartGameField, value);
		},
		add_onGetGamesByUser: function(value) {
			this.$1$OnGetGamesByUserField = ss.delegateCombine(this.$1$OnGetGamesByUserField, value);
		},
		remove_onGetGamesByUser: function(value) {
			this.$1$OnGetGamesByUserField = ss.delegateRemove(this.$1$OnGetGamesByUserField, value);
		},
		add_onDoesGameNameExist: function(value) {
			this.$1$OnDoesGameNameExistField = ss.delegateCombine(this.$1$OnDoesGameNameExistField, value);
		},
		remove_onDoesGameNameExist: function(value) {
			this.$1$OnDoesGameNameExistField = ss.delegateRemove(this.$1$OnDoesGameNameExistField, value);
		},
		add_onDeveloperCreateGame: function(value) {
			this.$1$OnDeveloperCreateGameField = ss.delegateCombine(this.$1$OnDeveloperCreateGameField, value);
		},
		remove_onDeveloperCreateGame: function(value) {
			this.$1$OnDeveloperCreateGameField = ss.delegateRemove(this.$1$OnDeveloperCreateGameField, value);
		},
		add_onDeveloperUpdateGame: function(value) {
			this.$1$OnDeveloperUpdateGameField = ss.delegateCombine(this.$1$OnDeveloperUpdateGameField, value);
		},
		remove_onDeveloperUpdateGame: function(value) {
			this.$1$OnDeveloperUpdateGameField = ss.delegateRemove(this.$1$OnDeveloperUpdateGameField, value);
		},
		$setup: function() {
			this.$qManager = new CommonShuffleLibrary.QueueManager(this.get_siteServerIndex(), new CommonShuffleLibrary.QueueManagerOptions([new CommonShuffleLibrary.QueueWatcher('SiteServer', null), new CommonShuffleLibrary.QueueWatcher(this.get_siteServerIndex(), null)], ['ChatServer', 'GameServer', 'SiteServer', 'GatewayServer', 'Gateway*']));
			this.$qManager.addChannel('Area.Site.Login', ss.mkdel(this, function(user, data) {
				this.$1$OnUserLoginField(user, data);
			}));
			this.$qManager.addChannel('Area.Site.CreateUser', ss.mkdel(this, function(user1, data1) {
				this.$1$OnUserCreateField(user1, data1);
			}));
			this.$qManager.addChannel('Area.Site.GetGameTypes', ss.mkdel(this, function(user2, data2) {
				this.$1$OnGetGameTypesField(user2);
			}));
			this.$qManager.addChannel('Area.Site.GetRooms', ss.mkdel(this, function(user3, data3) {
				this.$1$OnGetRoomsField(user3, data3);
			}));
			this.$qManager.addChannel('Area.Site.GetRoomInfo', ss.mkdel(this, function(user4, data4) {
				this.$1$OnGetRoomInfoField(user4, data4);
			}));
			this.$qManager.addChannel('Area.Site.CreateRoom', ss.mkdel(this, function(user5, data5) {
				this.$1$OnCreateRoomField(user5, data5);
			}));
			this.$qManager.addChannel('Area.Site.LeaveRoom', ss.mkdel(this, function(user6, data6) {
				this.$1$OnLeaveRoomField(user6, data6);
			}));
			this.$qManager.addChannel('Area.Site.JoinRoom', ss.mkdel(this, function(user7, data7) {
				this.$1$OnJoinRoomField(user7, data7);
			}));
			this.$qManager.addChannel('Area.Site.StartGame', ss.mkdel(this, function(user8, data8) {
				this.$1$OnStartGameField(user8, data8);
			}));
			this.$qManager.addChannel('Area.Site.UserDisconnect', ss.mkdel(this, function(user9, data9) {
				this.$1$OnUserDisconnectField(user9, data9);
			}));
			this.$qManager.addChannel('Area.Site.GetGamesByUser', ss.mkdel(this, function(user10, data10) {
				this.$1$OnGetGamesByUserField(user10, data10);
			}));
			this.$qManager.addChannel('Area.Site.DoesGameNameExist', ss.mkdel(this, function(user11, data11) {
				this.$1$OnDoesGameNameExistField(user11, data11);
			}));
			this.$qManager.addChannel('Area.Site.DeveloperCreateGame', ss.mkdel(this, function(user12, data12) {
				this.$1$OnDeveloperCreateGameField(user12, data12);
			}));
			this.$qManager.addChannel('Area.Site.DeveloperUpdateGame', ss.mkdel(this, function(user13, data13) {
				this.$1$OnDeveloperUpdateGameField(user13, data13);
			}));
		},
		sendLoginResponse: function(user, success) {
			this.$qManager.sendMessage(user.gateway, 'Area.Site.Login.Response', user, { successful: success });
		},
		sendCreateResponse: function(user, success) {
			this.$qManager.sendMessage(user.gateway, 'Area.Site.CreateUser.Response', user, { successful: success });
		},
		sendGameTypes: function(user, gameTypes) {
			this.$qManager.sendMessage(user.gateway, 'Area.Site.GetGameTypes.Response', user, gameTypes);
		},
		createChatRoom: function(user, roomRequest) {
			this.$qManager.sendMessage('ChatServer', 'Area.Chat.CreateChatRoom', user, roomRequest);
		},
		joinChatRoom: function(user, joinChatRoomRequest) {
			this.$qManager.sendMessage(joinChatRoomRequest.room.chatServer, 'Area.Chat.JoinChatRoom', user, joinChatRoomRequest);
		},
		sendRooms: function(user, response) {
			this.$qManager.sendMessage(user.gateway, 'Area.Site.GetRooms.Response', user, response);
		},
		sendRoomInfo: function(user, response) {
			this.$qManager.sendMessage(user.gateway, 'Area.Site.GetRoomInfo.Response', user, response);
		},
		roomJoined: function(user, roomJoinResponse) {
			this.$qManager.sendMessage(user.gateway, 'Area.Site.JoinRoom.Response', user, roomJoinResponse);
		},
		leaveChatRoom: function(user) {
			this.$qManager.sendMessage(user.currentChatServer, 'Area.Chat.LeaveChatRoom', user, null);
		},
		leaveGameRoom: function(user) {
			this.$qManager.sendMessage(user.currentGameServer, 'Area.Game.LeaveGameRoom', user, null);
		},
		createGame: function(gameCreateRequestModel) {
			this.$qManager.sendMessage('GameServer', 'Area.Game.Create', null, gameCreateRequestModel);
		},
		sendGamesByUser: function(user, getGamesByUserResponse) {
			this.$qManager.sendMessage(user.gateway, 'Area.Site.GetGamesByUser.Response', user, getGamesByUserResponse);
		},
		sendDoesGameNameExist: function(user, doesGameExistResponse) {
			this.$qManager.sendMessage(user.gateway, 'Area.Site.DoesGameNameExist.Response', user, doesGameExistResponse);
		},
		sendUpdateGameResponse: function(user, developerUpdateGameResponse) {
			this.$qManager.sendMessage(user.gateway, 'Area.Site.DeveloperUpdateGame.Response', user, developerUpdateGameResponse);
		},
		sendCreateGameResponse: function(user, developerCreateGameResponse) {
			this.$qManager.sendMessage(user.gateway, 'Area.Site.DeveloperCreateGame.Response', user, developerCreateGameResponse);
		}
	});
	ss.initClass($ServerManager_SiteServer_SiteManager, {
		$onLeaveRoom: function(user, data) {
			CommonShuffleLibrary.ServerLogger.logDebug(user.userName + ' manual leave', user);
			this.$removeUserFromRoom(user, function(room) {
			});
		},
		$onUserDisconnect: function(user, data) {
			CommonShuffleLibrary.ServerLogger.logDebug('Awww, dat ' + user.userName + ' disconnected ' + new Date(), user);
			this.$removeUserFromRoom(data.user, function(room) {
			});
		},
		$removeUserFromRoom: function(user, result) {
			CommonShuffleLibrary.ServerLogger.logDebug(user.userName + ' removing', user);
			this.$myDataManager.siteData.room_GetRoomByUser(user, ss.mkdel(this, function(room) {
				if (ss.isNullOrUndefined(room)) {
					result(null);
					return;
				}
				if (ss.isValue(user.currentChatServer)) {
					this.$mySiteClientManager.leaveChatRoom(user);
				}
				if (ss.isValue(user.currentGameServer)) {
					this.$mySiteClientManager.leaveGameRoom(user);
					CommonShuffleLibrary.ServerLogger.logDebug(user.userName + ' left Game room', user);
					user.currentGameServer = null;
				}
				for (var $t1 = 0; $t1 < room.players.length; $t1++) {
					var player = room.players[$t1];
					if (ss.referenceEquals(player.userName, user.userName)) {
						ss.remove(room.players, player);
					}
				}
				if (room.players.length === 0) {
					this.$myDataManager.siteData.room_DeleteRoom(room);
				}
				else {
					this.$myDataManager.siteData.room_RemovePlayer(room, user, ss.mkdel(this, function(ro) {
						for (var $t2 = 0; $t2 < room.players.length; $t2++) {
							var userLogicModel = room.players[$t2];
							this.$mySiteClientManager.sendRoomInfo(userLogicModel, { room: DataModels.SiteManagerModels.RoomDataModel.toModel(room) });
						}
					}));
				}
				result(DataModels.SiteManagerModels.RoomDataModel.toModel(room));
			}));
		},
		$onGetRooms: function(user, data) {
			this.$myDataManager.siteData.room_GetAllByGameType(data.gameType, ss.mkdel(this, function(a) {
				this.$mySiteClientManager.sendRooms(user, { rooms: a.map(function(b) {
					return DataModels.SiteManagerModels.RoomDataModel.toModel(b);
				}) });
			}));
		},
		$onStartGame: function(user, data) {
			//   ServerLogger.Log("--game started 1 ", LogLevel.DebugInformation);
			this.$myDataManager.siteData.room_GetRoomByUser(user, ss.mkdel(this, function(room) {
				if (ss.isNullOrUndefined(room)) {
					throw new ss.Exception('idk');
				}
				//       ServerLogger.Log("--game started 2", LogLevel.DebugInformation);
				this.$mySiteClientManager.createGame({ gameType: room.gameType, players: room.players });
			}));
		},
		$onGetRoomInfo: function(user, data) {
			this.$myDataManager.siteData.room_GetByRoomName(data.gameType, data.roomName, ss.mkdel(this, function(a) {
				this.$mySiteClientManager.sendRoomInfo(user, { room: DataModels.SiteManagerModels.RoomDataModel.toModel(a) });
			}));
		},
		$onCreateRoom: function(user, data) {
			CommonShuffleLibrary.ServerLogger.logDebug(user.userName + ' create room', user);
			this.$removeUserFromRoom(user, ss.mkdel(this, function(disconnectedRoom) {
				this.$myDataManager.siteData.room_CreateRoom(data.gameType, data.roomName, user, ss.mkdel(this, function(room) {
					this.$mySiteClientManager.createChatRoom(user, { room: DataModels.SiteManagerModels.RoomDataModel.toModel(room) });
					this.$mySiteClientManager.roomJoined(user, { room: DataModels.SiteManagerModels.RoomDataModel.toModel(room) });
					this.$myDataManager.siteData.room_GetAllByGameType(data.gameType, ss.mkdel(this, function(a) {
						this.$mySiteClientManager.sendRooms(user, { rooms: a.map(function(b) {
							return DataModels.SiteManagerModels.RoomDataModel.toModel(b);
						}) });
					}));
				}));
			}));
		},
		$onJoinRoom: function(user, data) {
			CommonShuffleLibrary.ServerLogger.logDebug(user.userName + ' join room', user);
			this.$removeUserFromRoom(user, ss.mkdel(this, function(disconnectedRoom) {
				this.$myDataManager.siteData.room_JoinRoom(data.gameType, data.roomName, user, ss.mkdel(this, function(room) {
					this.$mySiteClientManager.roomJoined(user, { room: DataModels.SiteManagerModels.RoomDataModel.toModel(room) });
					this.$mySiteClientManager.joinChatRoom(user, { room: DataModels.SiteManagerModels.RoomDataModel.toModel(room) });
					for (var $t1 = 0; $t1 < room.players.length; $t1++) {
						var UserLogicModel = room.players[$t1];
						this.$mySiteClientManager.sendRoomInfo(UserLogicModel, { room: DataModels.SiteManagerModels.RoomDataModel.toModel(room) });
					}
				}));
			}));
		},
		$onGetGameTypes: function(user) {
			var $t1 = [];
			ss.add($t1, { name: 'Blackjack' });
			null;
			ss.add($t1, { name: 'Sevens' });
			null;
			ss.add($t1, { name: 'NewSevens' });
			null;
			var types = $t1;
			this.$mySiteClientManager.sendGameTypes(user, { gameTypes: types });
		},
		$onUserLogin: function(user, data) {
			this.$myDataManager.siteData.user_GetFirstByUsernamePassword(user.userName, user.password, ss.mkdel(this, function(users) {
				this.$mySiteClientManager.sendLoginResponse(user, users.length !== 0);
			}));
		},
		$onUserCreate: function(user, data) {
			this.$myDataManager.siteData.user_CheckUsernameExists(data.userName, ss.mkdel(this, function(exists) {
				if (!exists) {
					var $t2 = this.$myDataManager.siteData;
					var $t1 = DataModels.SiteManagerModels.UserModelData.$ctor();
					$t1.username = data.userName;
					$t1.password = data.password;
					$t2.user_Insert($t1, ss.mkdel(this, function() {
						this.$mySiteClientManager.sendCreateResponse(user, true);
					}));
				}
				else {
					this.$mySiteClientManager.sendCreateResponse(user, false);
				}
			}));
		},
		$onGetGamesByUser: function(user, data) {
			this.$myDataManager.siteData.game_GetGamesByUser(data.userHash, ss.mkdel(this, function(games) {
				this.$mySiteClientManager.sendGamesByUser(user, { games: games.map(function(a) {
					return DataModels.SiteManagerModels.Game.GameDataModel.toModel(a);
				}) });
			}));
		},
		$onDoesGameNameExist: function(user, data) {
			this.$myDataManager.siteData.game_GameNameExists(data.gameName, ss.mkdel(this, function(exists) {
				this.$mySiteClientManager.sendDoesGameNameExist(user, { gameName: data.gameName, exists: exists });
			}));
		},
		$onDeveloperUpdateGame: function(user, data) {
			this.$myDataManager.siteData.game_UpdateGame(data.gameModel, ss.mkdel(this, function(success) {
				this.$mySiteClientManager.sendUpdateGameResponse(user, { success: success });
			}));
		},
		$onDeveloperCreateGame: function(user, data) {
			this.$myDataManager.siteData.game_CreateGame(user.hash, data.gameName, ss.mkdel(this, function(game) {
				this.$mySiteClientManager.sendCreateGameResponse(user, { gameModel: DataModels.SiteManagerModels.Game.GameDataModel.toModel(game) });
			}));
		}
	});
	ss.initClass($ServerManager_SiteServer_SiteServer, {});
	$ServerManager_$ServerManager.$main();
})();
