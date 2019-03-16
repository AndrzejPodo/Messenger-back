const Sequelize = require('sequelize');
const sequelize = require('../db');
const User = sequelize.define('user', {
    login: Sequelize.STRING,
    password: Sequelize.STRING,
});

const Conversation = sequelize.define('conversation',{
    name: Sequelize.STRING
});

const Message = sequelize.define('message',{
    text: Sequelize.TEXT
});

Message.belongsTo(Conversation);
Message.belongsTo(User);

const Order = sequelize.define('order', {
     title: Sequelize.STRING,
     date: {
         type: Sequelize.DATE,
         defaultValue: Sequelize.NOW
      },
     user_id: {
         type: Sequelize.INTEGER,
         references: {
              model: User,
              key: 'id'
          }
      }
 });

sequelize.sync({
    // force: true,
    logging: console.log
}).then(Conversation.create({name:"xdxdxd"}));

User.hasMany(Order, {foreignKey: 'user_id'});  

module.exports = {
     User,
     Order,
     Message
 }