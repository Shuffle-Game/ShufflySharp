require('./mscorlib.js');require('./CommonLibraries.js');require('./CommonShuffleLibrary.js');require('./Models.js');
////////////////////////////////////////////////////////////////////////////////
// GatewayServer.GatewayServer
var $GatewayServer_GatewayServer = function() {
	this.$ps = null;
	this.users = {};
	debugger;
	var http = require('http');
	var app = http.createServer(function(req, res) {
		res.end();
	});
	var io = require('socket.io').listen(app);
	var fs = require('fs');
	var queueManager;
	var port = 1800 + (ss.Int32.trunc(Math.random() * 4000) | 0);
	app.listen(port);
	io.set('log level', 1);
	var myName = 'Gateway ' + CommonLibraries.Guid.newGuid();
	this.$ps = new CommonShuffleLibrary.PubSub(Function.mkdel(this, function() {
		this.$ps.subscribe('PUBSUB.GatewayServers.Ping', Function.mkdel(this, function(message) {
			this.$ps.publish('PUBSUB.GatewayServers', String.format('http://{0}:{1}', CommonShuffleLibrary.IPs.get_gatewayIP(), port));
		}));
		this.$ps.publish('PUBSUB.GatewayServers', String.format('http://{0}:{1}', CommonShuffleLibrary.IPs.get_gatewayIP(), port));
	}));
	queueManager = new CommonShuffleLibrary.QueueManager(myName, new CommonShuffleLibrary.QueueManagerOptions([new CommonShuffleLibrary.QueueWatcher('GatewayServer', Function.mkdel(this, this.$messageReceived)), new CommonShuffleLibrary.QueueWatcher(myName, Function.mkdel(this, this.$messageReceived))], ['SiteServer', 'GameServer*', 'DebugServer', 'ChatServer', 'HeadServer']));
	io.sockets.on('connection', Function.mkdel(this, function(socket) {
		var user = null;
		socket.on('Gateway.Message', function(data) {
			var channel = 'Bad';
			switch (data.channel.split(String.fromCharCode(46))[1]) {
				case 'Game': {
					channel = 'GameServer';
					break;
				}
				case 'Site': {
					channel = 'SiteServer';
					break;
				}
				case 'Debug': {
					channel = 'GameServer';
					break;
				}
				case 'Debug2': {
					channel = 'DebugServer';
					break;
				}
				case 'Chat': {
					channel = 'ChatServer';
					break;
				}
			}
			queueManager.sendMessage(user.toUserModel(), ss.coalesce(data.gameServer, channel), data.channel, data.content);
		});
		socket.on('Gateway.Login', Function.mkdel(this, function(data1) {
			user = new Models.UserSocketModel();
			user.set_password(data1.password);
			user.socket = socket;
			user.userName = data1.userName;
			user.set_hash(data1.userName);
			this.users[data1.userName] = user;
			$GatewayServer_GatewayServer.$sendMessage(user, 'Area.Main.Login.Response', { successful: true, hash: user.get_hash() }, user.toUserModel());
		}));
		socket.on('disconnect', Function.mkdel(this, function(data2) {
			delete this.users[user.userName];
		}));
	}));
};
$GatewayServer_GatewayServer.prototype = {
	$messageReceived: function(gateway, user, eventChannel, content) {
		if (Object.keyExists(this.users, user.userName)) {
			var u = this.users[user.userName];
			$GatewayServer_GatewayServer.$sendMessage(u, eventChannel, content, user);
		}
	}
};
$GatewayServer_GatewayServer.main = function() {
	try {
		new $GatewayServer_GatewayServer();
	}
	catch ($t1) {
		var exc = ss.Exception.wrap($t1);
		console.log('CRITICAL FAILURE: ' + CommonLibraries.ExtensionMethods.goodMessage(exc));
	}
};
$GatewayServer_GatewayServer.$sendMessage = function(user, eventChannel, content, u) {
	user.socket.emit('Client.Message', new Models.SocketClientMessageModel(u, eventChannel, content));
};
Type.registerClass(global, 'GatewayServer.GatewayServer', $GatewayServer_GatewayServer, Object);
$GatewayServer_GatewayServer.main();
