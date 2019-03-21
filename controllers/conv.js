const convService = require('../services/conv');
    
function createConv(req,ws){
    let jsonReq = JSON.parse(req);
    convService.addConv(jsonReq).then(data => {
        ws.send(JSON.stringify({result: true}));
    }).catch(error => {
        ws.send(JSON.stringify(error));
    });
}

function addUserToConv(req, ws){
    let jsonReq = JSON.parse(req);
    convService.addUserToConv(jsonReq.convId, jsonReq.userId);
}


module.exports = {
    createConv,
    addUserToConv,
}