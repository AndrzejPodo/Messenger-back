const WebSocket = require('ws').Server;
const jwt = require("jsonwebtoken");
const config = require('./config');
const messageController = require('./controllers/message');
const mesageservice = require('./services/users');


var wss = new WebSocket({
    port: 8080,
    clientTracking: true
    // verifyClient: function (info, cb) {
    //     var token = info.req.headers.token
    //     if (!token)
    //         cb(false, 401, 'Unauthorized')
    //     else {
    //         jwt.verify(token, config.jwtSecret , function (err, decoded) {
    //             if (err) {
    //                 cb(false, 401, 'Unauthorized')
    //             } else {
    //                 info.req.user = decoded //[1]
    //                 cb(true)
    //             }
    //         })
    //     }
    // }
})

wss.on('connection', (ws, req) => {
    ws.on('message', message => {
        console.log('url: %s', req.url);
        switch(req.url){
            case '/postMessage':
                messageController.sendMessage(message,ws);
                break;
            case '/getMessages':
                messageController.getMessages(message, ws);
                break;
            
        }
    });
});