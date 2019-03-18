const WebSocket = require('ws').Server;

var wss = new WebSocket({
    port: 8080,
    verifyClient: function (info, cb) {
        var token = info.req.headers.token
        if (!token)
            cb(false, 401, 'Unauthorized')
        else {
            jwt.verify(token, 'secret-key', function (err, decoded) {
                if (err) {
                    cb(false, 401, 'Unauthorized')
                } else {
                    info.req.user = decoded //[1]
                    cb(true)
                }
            })

        }
    }
})


 
wss.on('connection', function connection(ws) {
  ws.on('message', function incoming(message) {
    console.log('received: %s', message);
  });
 
  ws.send('something');
});
 