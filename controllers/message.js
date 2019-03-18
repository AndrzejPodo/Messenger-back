const messagesService = require('../services/messages');
const getUsers = require('../services/users');
// function getMessages(req, res){
//     messagesService.getByConvId(req.params.id).then(
//             data => {res.send(data);
//         }
//     );
// }

function getMessages(req, ws){
    let jsonReq = JSON.parse(req);    
    messagesService.getByConvId(jsonReq.id).then(
        data => {ws.send(JSON.stringify(data))}
    );
}

function sendMessage(req,ws){
    let jsonReq = JSON.parse(req);
    messagesService.addMessage(jsonReq);
    getUsers.getConvUsers(jsonReq.conversationId).then(
        data => {
            console.log(data);
            ws.send(JSON.stringify(data));
        }
    );
}
// function sendMessage(req, res){
//     messagesService.addMessage({
//         text: req.body.text,
//         conversationId: req.body.conv_id,
//         userId: req.body.user_id
//     }).then(data => res.send(data));
// }

module.exports = {
    getMessages,
    sendMessage
}