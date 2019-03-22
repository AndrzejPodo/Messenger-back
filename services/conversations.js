const Conv= require('../models').Conversation;
const Users = require('../models').User

const addConv = data => {
    return new Promise(function(resolved, rejected){
        Conv.create(data).then(data => {
            resolved(data);
        }).catch(err => rejected(err));
    });
}

const addUserToConv = data => {
    return new Promise(function(resolved, rejected){
        Conv.findAll({where:{id: data.conversationId}}).then(conv => {
            Users.findAll({where: {login: data.userLogin}}).then(user => {
                conv[0].addUsers(user).then(data => resolved(data)).catch(err => rejected(err));
            })
        })
    });
}

const getConversationByUserId = userId => {
    return new Promise(function(resolved, rejected){
        Users.findAll({where:{id:userId}}).then(user => {
            user[0].getConversations().then(result => resolved(result)).catch(err => rejected(err)); 
        });
    })
}

module.exports = {
    addConv,
    addUserToConv,
    getConversationByUserId
}