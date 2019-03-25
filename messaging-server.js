const WebSocket = require('ws').Server;
const jwt = require("jsonwebtoken");
const config = require('./config');

class Clients {
    constructor(){
        this.clientLits = {};
        this.saveClient = this.saveClient.bind(this);
        this.removeClient = this.removeClient.bind(this);
    }
    saveClient(username, client){
        this.clientLits[username] = client;
    }

    removeClient(username){
        delete this.clientLits[username];
    }
}

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
const clients = new Clients();

wss.on('connection', (client) => {
    client.on('message', (msg)=>{
        console.log(JSON.parse(msg).username);
        clients.saveClient(JSON.parse(msg).username, client);
    }),
    client.on('close', (msg) => {
        console.log(JSON.parse(msg).username);
        clients.removeClient(JSON.parse(msg).username);
        console.log(clients.clientLits);
    })
});

module.exports = {
    clients
}