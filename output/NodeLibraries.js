require('./mscorlib.js');EventEmitter= require('events').EventEmitter;
(function() {
	'use strict';
	global.NodeLibraries = global.NodeLibraries || {};
	global.NodeLibraries.Common = global.NodeLibraries.Common || {};
	global.NodeLibraries.Common.Charm = global.NodeLibraries.Common.Charm || {};
	global.NodeLibraries.Common.Logging = global.NodeLibraries.Common.Logging || {};
	global.NodeLibraries.MongoDB = global.NodeLibraries.MongoDB || {};
	global.NodeLibraries.Redis = global.NodeLibraries.Redis || {};
	////////////////////////////////////////////////////////////////////////////////
	// NodeLibraries.Common.Charm.CharmColors
	var $NodeLibraries_Common_Charm_CharmColors = function() {
	};
	$NodeLibraries_Common_Charm_CharmColors.__typeName = 'NodeLibraries.Common.Charm.CharmColors';
	global.NodeLibraries.Common.Charm.CharmColors = $NodeLibraries_Common_Charm_CharmColors;
	////////////////////////////////////////////////////////////////////////////////
	// NodeLibraries.Common.Charm.Charmer
	var $NodeLibraries_Common_Charm_Charmer = function() {
	};
	$NodeLibraries_Common_Charm_Charmer.__typeName = 'NodeLibraries.Common.Charm.Charmer';
	$NodeLibraries_Common_Charm_Charmer.setup = function() {
		var ch = require('charm');
		var charm = ch();
		charm.cursor(false);
		charm.pipe(process.stdout);
		charm.reset();
		charm.on('^C', function() {
			charm.foreground('white');
			charm.background('black');
			charm.position(0, 100);
			process.exit();
		});
		return charm;
	};
	$NodeLibraries_Common_Charm_Charmer.testSpinner = function() {
		var charm = $NodeLibraries_Common_Charm_Charmer.setup();
		var radius = 10;
		var theta = 0;
		var points = [];
		var iv = setInterval(function() {
			var x = 2 + (radius + Math.cos(theta) * radius) * 2;
			var y = 2 + radius + Math.sin(theta) * radius;
			ss.insert(points, 0, new CommonLibraries.Point(x, y));
			var colors = ['red', 'yellow', 'green', 'cyan', 'blue', 'magenta'];
			for (var i = 0; i < points.length; i++) {
				var p = points[i];
				charm.position(ss.Int32.trunc(p.x), ss.Int32.trunc(p.y));
				var c = colors[ss.Int32.trunc(Math.floor(i / 12))];
				charm.background(c).write(' ');
			}
			points = ss.arrayClone(points.slice(0, 12 * colors.length - 1));
			theta += Math.PI / 40;
		}, 50);
	};
	global.NodeLibraries.Common.Charm.Charmer = $NodeLibraries_Common_Charm_Charmer;
	////////////////////////////////////////////////////////////////////////////////
	// NodeLibraries.Common.Charm.DisplayType
	var $NodeLibraries_Common_Charm_DisplayType = function() {
	};
	$NodeLibraries_Common_Charm_DisplayType.__typeName = 'NodeLibraries.Common.Charm.DisplayType';
	global.NodeLibraries.Common.Charm.DisplayType = $NodeLibraries_Common_Charm_DisplayType;
	////////////////////////////////////////////////////////////////////////////////
	// NodeLibraries.Common.Charm.EraseType
	var $NodeLibraries_Common_Charm_EraseType = function() {
	};
	$NodeLibraries_Common_Charm_EraseType.__typeName = 'NodeLibraries.Common.Charm.EraseType';
	global.NodeLibraries.Common.Charm.EraseType = $NodeLibraries_Common_Charm_EraseType;
	////////////////////////////////////////////////////////////////////////////////
	// NodeLibraries.Common.Logging.Common
	var $NodeLibraries_Common_Logging_Common = function() {
	};
	$NodeLibraries_Common_Logging_Common.__typeName = 'NodeLibraries.Common.Logging.Common';
	$NodeLibraries_Common_Logging_Common.shortDate = function() {
		var sb = '';
		var dt = new Date();
		//
		//                        sb += dt.Day;
		//
		//                        sb += (dt.Month );
		//
		//                        sb += dt.Year;
		sb += dt.getHours() + ':';
		sb += dt.getMinutes() + ':';
		sb += dt.getSeconds();
		return sb;
	};
	$NodeLibraries_Common_Logging_Common.longDate = function() {
		var sb = '';
		var dt = new Date();
		sb += dt.getDate() + '-';
		sb += dt.getMonth() + 1 + '-';
		sb += dt.getFullYear() + '-';
		sb += dt.getHours() + '-';
		sb += dt.getMinutes() + '-';
		sb += dt.getSeconds();
		return sb;
	};
	global.NodeLibraries.Common.Logging.Common = $NodeLibraries_Common_Logging_Common;
	////////////////////////////////////////////////////////////////////////////////
	// NodeLibraries.Common.Logging.Logger
	var $NodeLibraries_Common_Logging_Logger = function() {
	};
	$NodeLibraries_Common_Logging_Logger.__typeName = 'NodeLibraries.Common.Logging.Logger';
	$NodeLibraries_Common_Logging_Logger.start = function(key) {
		console.log(key + ' - ' + $NodeLibraries_Common_Logging_Common.longDate());
		$NodeLibraries_Common_Logging_Logger.$key = key + ' - ' + $NodeLibraries_Common_Logging_Common.longDate() + '.txt';
		$NodeLibraries_Common_Logging_Logger.log('Start: ' + key, 'information');
	};
	$NodeLibraries_Common_Logging_Logger.log = function(item, level) {
		item = ss.formatString('{0} - {1}', $NodeLibraries_Common_Logging_Common.shortDate(), item);
		switch (level) {
			case 'error': {
				console.log(item);
				break;
			}
			case 'debugInformation': {
				break;
			}
			case 'information': {
				break;
			}
			case 'transportInfo': {
				break;
			}
			case 'dataInfo': {
				break;
			}
			case 'keepAlive': {
				return item;
			}
		}
		$NodeLibraries_Common_Logging_Logger.$fs.appendFile('logs/' + $NodeLibraries_Common_Logging_Logger.$key, item + '\n', null, function(error, outp) {
			if (ss.isValue(error)) {
				console.log(error.toString());
				console.log(outp);
			}
		});
		return item;
	};
	global.NodeLibraries.Common.Logging.Logger = $NodeLibraries_Common_Logging_Logger;
	////////////////////////////////////////////////////////////////////////////////
	// NodeLibraries.Common.Logging.LogLevel
	var $NodeLibraries_Common_Logging_LogLevel = function() {
	};
	$NodeLibraries_Common_Logging_LogLevel.__typeName = 'NodeLibraries.Common.Logging.LogLevel';
	global.NodeLibraries.Common.Logging.LogLevel = $NodeLibraries_Common_Logging_LogLevel;
	////////////////////////////////////////////////////////////////////////////////
	// NodeLibraries.Common.Logging.ProgressBar
	var $NodeLibraries_Common_Logging_ProgressBar = function(charm, minValue, maxValue) {
		this.$myCharm = null;
		this.$myCurValue = 0;
		this.$1$MinValueField = 0;
		this.$1$MaxValueField = 0;
		this.$1$XField = 0;
		this.$1$YField = 0;
		this.$1$WidthField = 0;
		this.set_minValue(minValue);
		this.set_maxValue(maxValue);
		this.$myCharm = charm;
	};
	$NodeLibraries_Common_Logging_ProgressBar.__typeName = 'NodeLibraries.Common.Logging.ProgressBar';
	global.NodeLibraries.Common.Logging.ProgressBar = $NodeLibraries_Common_Logging_ProgressBar;
	////////////////////////////////////////////////////////////////////////////////
	// NodeLibraries.Common.Logging.ServerHelper
	var $NodeLibraries_Common_Logging_ServerHelper = function() {
	};
	$NodeLibraries_Common_Logging_ServerHelper.__typeName = 'NodeLibraries.Common.Logging.ServerHelper';
	$NodeLibraries_Common_Logging_ServerHelper.getNetworkIPs = function() {
		var os = require('os');
		var interfaces = os.networkInterfaces();
		var addresses = [];
		var $t1 = new ss.ObjectEnumerator(interfaces);
		try {
			while ($t1.moveNext()) {
				var k = $t1.current();
				var $t2 = new ss.ObjectEnumerator(k.value);
				try {
					while ($t2.moveNext()) {
						var k2 = $t2.current();
						var address = k2.value;
						if (!!(address.family === 'IPv4' && !address.internal)) {
							ss.add(addresses, ss.cast(address.address, String));
						}
					}
				}
				finally {
					$t2.dispose();
				}
			}
		}
		finally {
			$t1.dispose();
		}
		return addresses;
	};
	global.NodeLibraries.Common.Logging.ServerHelper = $NodeLibraries_Common_Logging_ServerHelper;
	////////////////////////////////////////////////////////////////////////////////
	// NodeLibraries.MongoDB.MongoDocument
	var $NodeLibraries_MongoDB_MongoDocument = function() {
	};
	$NodeLibraries_MongoDB_MongoDocument.__typeName = 'NodeLibraries.MongoDB.MongoDocument';
	$NodeLibraries_MongoDB_MongoDocument.createInstance = function() {
		return $NodeLibraries_MongoDB_MongoDocument.$ctor();
	};
	$NodeLibraries_MongoDB_MongoDocument.getID = function(id) {
		if (ss.isNullOrUndefined(id)) {
			return null;
		}
		if (ss.referenceEquals(ss.getInstanceType(id), String)) {
			return $NodeLibraries_MongoDB_MongoDocument.objectID(id);
		}
		return id;
	};
	$NodeLibraries_MongoDB_MongoDocument.$ctor = function() {
		var $this = {};
		$this._id = null;
		return $this;
	};
	global.NodeLibraries.MongoDB.MongoDocument = $NodeLibraries_MongoDB_MongoDocument;
	////////////////////////////////////////////////////////////////////////////////
	// NodeLibraries.Redis.RedisClient
	var $NodeLibraries_Redis_RedisClient = function() {
		EventEmitter.call(this);
	};
	$NodeLibraries_Redis_RedisClient.__typeName = 'NodeLibraries.Redis.RedisClient';
	global.NodeLibraries.Redis.RedisClient = $NodeLibraries_Redis_RedisClient;
	ss.initEnum($NodeLibraries_Common_Charm_CharmColors, { red: 'red', cyan: 'cyan', yellow: 'yellow', green: 'green', blue: 'blue', magenta: 'magenta', black: 'black', white: 'white' });
	ss.initClass($NodeLibraries_Common_Charm_Charmer, {});
	ss.initEnum($NodeLibraries_Common_Charm_DisplayType, { reset: 'reset', bright: 'bright', dim: 'dim', underscore: 'underscore', blink: 'blink', reverse: 'reverse', hidden: 'hidden' });
	ss.initEnum($NodeLibraries_Common_Charm_EraseType, { end: 'end', start: 'start', line: 'line', down: 'down', Up: 'Up', screen: 'screen' });
	ss.initClass($NodeLibraries_Common_Logging_Common, {});
	ss.initClass($NodeLibraries_Common_Logging_Logger, {});
	ss.initEnum($NodeLibraries_Common_Logging_LogLevel, { error: 'error', debugInformation: 'debugInformation', information: 'information', transportInfo: 'transportInfo', dataInfo: 'dataInfo', keepAlive: 'keepAlive' });
	ss.initClass($NodeLibraries_Common_Logging_ProgressBar, {
		get_minValue: function() {
			return this.$1$MinValueField;
		},
		set_minValue: function(value) {
			this.$1$MinValueField = value;
		},
		get_maxValue: function() {
			return this.$1$MaxValueField;
		},
		set_maxValue: function(value) {
			this.$1$MaxValueField = value;
		},
		get_curValue: function() {
			return this.$myCurValue;
		},
		set_curValue: function(value) {
			this.$myCurValue = value;
			this.$redraw();
		},
		$redraw: function() {
			this.$myCharm.background('cyan');
			this.$myCharm.position(this.get_x() - 1, this.get_y() - 1);
			for (var i = 0; i <= this.get_width() + 2; i++) {
				this.$myCharm.write(' ');
			}
			this.$myCharm.position(this.get_x() - 1, this.get_y() + 1);
			for (var i1 = 0; i1 <= this.get_width() + 2; i1++) {
				this.$myCharm.write(' ');
			}
			this.$myCharm.position(this.get_x() + this.get_width() + 1, this.get_y());
			this.$myCharm.write(' ');
			this.$myCharm.position(this.get_x() - 1, this.get_y());
			this.$myCharm.write(' ');
			this.$myCharm.background('red');
			var w = ss.Int32.trunc(this.get_curValue() / (this.get_maxValue() - this.get_minValue()) * this.get_width());
			for (var i2 = 0; i2 < w; i2++) {
				this.$myCharm.write(' ');
			}
			this.$myCharm.background('black');
		},
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
		}
	});
	ss.initClass($NodeLibraries_Common_Logging_ServerHelper, {});
	ss.initClass($NodeLibraries_MongoDB_MongoDocument, {});
	ss.initClass($NodeLibraries_Redis_RedisClient, {
		publish: function(channel, content) {
		},
		subscribe: function(channel) {
		},
		rpush: function(channel, value) {
		},
		monitor: function(action) {
		},
		blpop: function(objectsAndTimeout, action) {
		}
	}, EventEmitter);
	$NodeLibraries_Common_Logging_Logger.$fs = null;
	$NodeLibraries_Common_Logging_Logger.$key = null;
	$NodeLibraries_Common_Logging_Logger.$fs = require('fs');
	$NodeLibraries_MongoDB_MongoDocument.objectID = null;
	$NodeLibraries_MongoDB_MongoDocument.objectID = require('bson').ObjectID;
})();
