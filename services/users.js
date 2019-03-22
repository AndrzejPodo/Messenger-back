const Conversation = require("../models").Conversation;
const User = require("../models").User;

const getConvUsers = c_id => {
  return Promise(function(resolved, rejected){
    User.findAll({
      include: [
        {
          model: Conversation,
          where: {
            id: c_id
          }
        }
      ]
    }).then(data => {
      resolved(data.map(user => user.name))
    });
  });
}

module.exports = { getConvUsers };
