const messagesService = require('../services/messages');
const getUsers = require('../services/users');
const wss = require('../messaging-server');

function sendMessage(req, res){
    messagesService.addMessage(req.body).then(()=>{
        getUsers.getConvUsers(req.body.conversationId).then(names => {
            if(Array.isArray(names)){
                for(var i = 0; i < names.length; i++){
                    console.log(names[i]);
                    if(wss.clients[names[i]]){
                        wss.clients[names[i]].send(JSON.parse("tik xd CHUJKU"));
                    }
                }
            }
        }).then(() => res.send("success!"));
    }).catch(err => console.log(err))
        // getUsers.getConvUsers(req.body.conversationId).then(names => {
        //     console.log("HALO1");
        //     console.log(JSON.stringify(names));
        //     if(Array.isArray(names)){
        //         for(var i = 0; i < names.length; i++){
        //             wss.clients[names[i]].send("tik xd CHUJKU");
        //         }
        //     }
        // })
    
}

function getConversationMessages(req, res){
    messagesService.getByConvId(req.params.id).then(data => res.send(data)).catch(err => res.send(err));
}

module.exports = {
    sendMessage,
    getConversationMessages
}