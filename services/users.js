const Conversation = require("../models").Conversation;
const User = require("../models").User;

const getConvUsers = c_id =>
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
    return data.map(user => user.id);
  });

module.exports = { getConvUsers };
