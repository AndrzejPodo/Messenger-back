const messagesService = require('../services/messages');
const getUsers = require('../services/users');

function sendMessage(req, res){
    messagesService.addMessage(req.body).then(data => res.send(data)).catch(err => res.send(err));
}

function getConversationMessages(req, res){
    messagesService.getByConvId(req.params.id).then(data => res.send(data)).catch(err => res.send(err));
}

module.exports = {
    sendMessage,
    getConversationMessages
}