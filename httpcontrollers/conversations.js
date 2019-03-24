const convService = require('../services/conversations');

function addUserToConversation(req, res){
    convService.addUserToConv(req.body).then(data => res.send(data)).catch(err => res.send(err));
}

function createConversation(req, res){
    convService.addConv(req.body).then(data =>{
        res.send(data);
    }).catch(err => res.send(err));
}

function getConvsByUserId(req, res){
    convService.getConversationByUserId(req.params.id).then(data => {
        res.send(data)
    }).catch(err => console.log(err));
}
module.exports = {
    getConvsByUserId,
    createConversation,
    addUserToConversation
}