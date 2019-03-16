const messagesService = require('../services/messages');

function getMessages(req, res){
    console.log(req.params.id);
    messagesService.getByConvId(req.params.id).then(
            data => {res.send(data);
        }
    );
}

function sendMessage(req, res){
    messagesService.addMessage({
        text: req.body.text,
        conversationId: req.body.conv_id,
        userId: req.body.user_id
    }).then(data => res.send(data));
}

module.exports = {
    getMessages,
    sendMessage
}