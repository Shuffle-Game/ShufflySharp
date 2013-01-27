require('./mscorlib.js');require('./CommonShuffleLibrary.js');require('./Models.js');
////////////////////////////////////////////////////////////////////////////////
// HeadServer.HeadServer
var $HeadServer_HeadServer = function() {
	this.$__dirname = '/usr/local/src/new';
	this.$fs = require('fs');
	this.$gateways = [];
	this.$indexForSites = [];
	this.$indexPageData = null;
	this.$oldGateways = [];
	this.$oldIndex = [];
	this.$pubsub = null;
	this.$qManager = null;
	this.$siteIndex = 0;
	this.$qManager = new CommonShuffleLibrary.QueueManager('Head1', new CommonShuffleLibrary.QueueManagerOptions([new CommonShuffleLibrary.QueueWatcher('HeadServer', null), new CommonShuffleLibrary.QueueWatcher('Head1', null)], ['GatewayServer']));
	this.$fs.readFile(this.$__dirname + '/index.html', 'ascii', Function.mkdel(this, this.ready));
	this.$pubsub = new CommonShuffleLibrary.PubSub(Function.mkdel(this, function() {
		this.$pubsub.subscribe('PUBSUB.GatewayServers', Function.mkdel(this, function(message) {
			this.$indexForSites.add(this.$indexPageData.replaceAll('{{gateway}}', message));
			this.$gateways.add(message);
		}));
	}));
	require('http').createServer(Function.mkdel(this, this.$handlerWS)).listen(8844);
	setInterval(Function.mkdel(this, this.$pollGateways), 1000);
	this.$pollGateways();
};
$HeadServer_HeadServer.prototype = {
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
		require('http').createServer(Function.mkdel(this, this.$handler)).listen(80);
	}
};
$HeadServer_HeadServer.main = function() {
	try {
		new $HeadServer_HeadServer();
	}
	catch ($t1) {
		var exc = ss.Exception.wrap($t1);
		console.log('CRITICAL FAILURE: ' + CommonLibraries.ExtensionMethods.goodMessage(exc));
	}
};
Type.registerClass(global, 'HeadServer.HeadServer', $HeadServer_HeadServer, Object);
$HeadServer_HeadServer.main();
