const net = require('net');
const fs = require('fs-extra');
const os = require('os');
const http = require('http');
const http2 = require('spdy');
const serveStatic = require('serve-static');
const compression = require('compression');
const express = require('express');
const env = require('dotenv');
const chokidar = require('chokidar');
const chalk = require('chalk');
env.config();

const utility = require('./utility.js');
const build = require('./build.js');

const isPortTaken = (p) => new Promise((resolve, reject) => {
    const tester = net.createServer()
         .once('error', err => (err.code == 'EADDRINUSE' ? resolve(true) : reject(err)))
         .once('listening', () => tester.once('close', () => resolve(false)).close())
         .listen(p)
})


function serverSetup(protocal, port) {
    var app = express();
    app.use(compression())
    app.use(serveStatic('public', {
        'extensions': ['html'],
        'maxAge': 3600000   // 1 hour
    }))
    if (protocal === "https") {
        http2.createServer({
            key: fs.readFileSync(os.homedir() + process.env.SSL_KEY_PATH, 'utf8'),
            cert: fs.readFileSync(os.homedir() + process.env.SSL_CRT_PATH, 'utf8')
        }, app).listen(port);
    } else {
        http.createServer(app).listen(port);
    }
    utility.consoleTimestampedMessage(chalk.magenta("serving: ") + 'public' + "/ at " + protocal + "://localhost:" + port);
}

function startServer(port){
    fs.open('./.env', 'r', (err) => {
        if (err) {
            if (err.code === 'ENOENT') {
                utility.consoleTimestampedMessage(chalk.yellow("warning: ") + "no .env file found");
                serverSetup("http", port);
            }
        } else {
            fs.readFile('./.env', 'utf8', (err, data) => {
                if (data.indexOf('SSL_CRT_PATH') < 0 || data.indexOf('SSL_KEY_PATH') < 0 || data.indexOf('#SSL_CRT_PATH') > 0 || data.indexOf('# SSL_CRT_PATH') > 0 || data.indexOf('#SSL_KEY_PATH') > 0 || data.indexOf('# SSL_KEY_PATH') > 0) {
                    utility.consoleTimestampedMessage(chalk.yellow("warning: ") + "no SSL_CRT_PATH and/or SSL_KEY_PATH found in .env file");
                    serverSetup("http", port);
                } else {
                    serverSetup("https", port);
                }
            })
        }
        watching();
    })
}


function watching() {
    var time = Date.now();
    var watcher = chokidar.watch('src', {
        ignoreInitial: true,
        persistent: true
    });
    watcher.on('all', (event, path) => {
        if(Date.now() > (time + 1000) ){
            time = Date.now();
            build();
        }
    })
    utility.consoleTimestampedMessage("watching src directory");
}


var port = 8888;
function tryPorts(port){
    isPortTaken(port).then(res => {
        if(res){
            port++;
            tryPorts(port);
        }else{
            startServer(port);
        }
    })
}

tryPorts(port);
build();