const Sequelize = require("sequelize");
const sequelize = require("../db");
const User = sequelize.define(
  "user",
  {
    login: Sequelize.STRING,
    password: Sequelize.STRING
  },
  { timestamps: true }
);

const Conversation = sequelize.define("conversation", {
  name: Sequelize.STRING
});

Conversation.addUser = function(user) {
  this.setUsers(user);
};

const Message = sequelize.define(
  "message",
  {
    text: Sequelize.TEXT,
    userName: Sequelize.STRING
  },
  { timestamps: true }
);

const ConvUser = sequelize.define(
  "convuser",{},
  { timestamps: false }
);

User.belongsToMany(Conversation, {through: "ConvUsers"});
Conversation.belongsToMany(User, {through: "ConvUsers"});

Message.belongsTo(Conversation);

sequelize.sync({
  force: false,
  logging: console.log
});


module.exports = {
  User,
  Message,
  Conversation,
  ConvUser
};
