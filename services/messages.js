const Message = require('../models').Message;



const getByConvId = id => {
  return new Promise(function(resolved, rejected){
    Message.findAll({where:{conversationId: id}}).then(data => {
      console.log(JSON.stringify(data));
      resolved(data);
    })
  });
}

const addMessage = message => {
  return new Promise(function(resolved, rejected){
    Message.create(message).then(data => {resolved(data)}).catch(err => {rejected(err)});
  });
}

module.exports = {getByConvId, addMessage, getByConvId};