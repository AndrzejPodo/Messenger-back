const Message = require('../models').Message;

const getByConvId = id => Message.findAll({
    where: {
      conversationId: id
    }
})

const addMessage = message => Message.create(message);

module.exports = {getByConvId, addMessage};