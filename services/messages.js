const Message = require('../models').Message;



const getByConvId = id => {
  return new Promise(function(resolved, rejected){
    Message.findAll({where:{conversationId: id}}).then(data => {
      resolved(data);
    }).catch(err => rejected(err));
  });
}

const addMessage = message => {
  return new Promise(function(resolved, rejected){
    Message.create(message).then(data => {resolved(data)}).catch(err => {rejected(err)});
  });
}

module.exports = {getByConvId, addMessage, getByConvId};