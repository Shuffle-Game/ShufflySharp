﻿require('../common/Help.js');


var fs = require('fs');

console.log("Shuffly Admin V0.31");
var nonDebuggable = ['node-inspector', 'pkill'];

var util = require('util'),
    exec = require('child_process').exec;

var __dirname = '/usr/local/src/';
var indexPageData;



var numOfGameServers = 1;
var numOfGateways = 1;



/*fs.readFile(__dirname + '/index.html',
function(err, data) {
   
});*/
var head, sites, games, debugs, nodeInspector;

var debug = false;

function loop() {
    ask('?: ', '', onAsk);
}

setInterval(function () {
    console.log('keep alive ' + new Date().toString().substring(17, 24));

}, 10 * 1000);

nodeInspector = runProcess('node-inspector', []);
console.log('node-inspector Started');

process.on('exit', function () {
    console.log('exiting ');
    onAsk('k');
    runProcess('pkill', ['node']);
});


function onAsk(data, ignore) {
    var rest = data.substring(2);
    switch (data[0]) {
        case 'd':
            debug = !debug;
            console.log('Debug ' + (debug ? 'Enabled' : 'Disabled'));
            break;
        case 's':
            sites = [];
            games = [];
            debugs = [];
            gateways = [];


            head = runProcess('node', [__dirname + 'headServer/headApp.js'], 4000);
            console.log('Head Server Started');

            sites.push(runProcess('node', [__dirname + 'siteServer/siteApp.js'], 4100));
            console.log(sites.length + ' Sites Servers Started');
            var j;
            for (j = 0; j < numOfGateways; j++) {
                gateways.push(runProcess('node', [__dirname + 'gatewayServer/gatewayApp.js'], 4400 + j));
            }

            console.log(gateways.length + ' Gateway Servers Started');

            for (j = 0; j < numOfGameServers; j++) {
                games.push(runProcess('node', [__dirname + 'gameServer/gameApp.js'], 4200 + j));
                //    games.push(runProcess('node_modules/fibers/bin/node-fibers', [__dirname + 'gameServer/gameApp.js'], 4200 + j));
            }
            console.log(games.length + ' Games Servers Started');

            debugs.push(runProcess('node', [__dirname + 'debugServer/debugServerApp.js'], 4300));
            console.log(debugs.length + ' Debug Servers Started');

            break;
        case 'q':
            process.exit();
            break;
        case 'r':

            if (rest.length == 0) {
                restartProcs('h');
                restartProcs('g');
                restartProcs('s');
            } else {
                restartProcs(rest[0]);

            }
            break;
        case 'k':
            if (rest.length == 0) {
                if (head) {
                    head.kill();
                }
                for (var i = 0; i < games.length; i++) {
                    games[i].kill();
                }
                for (var i = 0; i < sites.length; i++) {
                    sites[i].kill();
                }

                for (var i = 0; i < debugs.length; i++) {
                    debugs[i].kill();
                }
                if (!nodeInspector.killed)
                    nodeInspector.kill();
                console.log('All killed');
            } else {
                restartProcs(rest[0]);

            }
            break;
    }
    if (!ignore)
        loop();
}

if (debug)
    onAsk('d', true);
onAsk('d', true);
onAsk('s');
//loop();  


 
function ask(question, format, callback) {
    var stdin = process.stdin, stdout = process.stdout;

    stdin.resume();
    stdout.write(question);

    stdin.once('data', function (data) {
        data = data.toString().trim();

        callback(data);

    });
}


function runProcess(process, args, debugPort, appArgs) {
    var al;
    var name = '';
    if (args.length > 0) {
        name = (al = args[0].split('/'))[al.length - 1].split('.')[0];
    }

    if (nonDebuggable.indexOf(process) == -1 && debug) {
        var jf = ' --debug=';
        if (name == "gatewayApp") {
            jf = ' --debug-brk=';
        }
        args[0] = jf + debugPort + " " + args[0];
    }
    var dummy = exec(process + " " + args.join() + " " + (appArgs ? appArgs : ''));

    if (nonDebuggable.indexOf(process) == -1) {
        dummy.stdout.on('data', function (data) {
            if (data.indexOf('debug: ') == -1) {
                util.print("--" + name + "    " + new Date().toString().substring(17, 24) + "     " + data);

                util.print("?: ");
            }
        });
        dummy.stderr.on('data', function (data) {
            util.print("--" + name + "    " + new Date().toString().substring(17, 24) + "     " + data);
            util.print("?: ");
        });

    }
    return dummy;
}