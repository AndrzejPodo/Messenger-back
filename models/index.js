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

const Message = sequelize.define(
  "message",
  {
    text: Sequelize.TEXT
  },
  { timestamps: true }
);

const ConvUser = sequelize.define(
  "convuser",
  {
    // user_id: Sequelize.INTEGER,
    // conv_id: Sequelize.INTEGER
  },
  { timestamps: false }
);

Message.belongsTo(Conversation);
Message.belongsTo(User);

User.associate = User.belongsToMany(Conversation, {
  through: 'ConvUsers',
  foreignKey: "userId"
});
// Conversation.belongsToMany(User, {through: "conv_user"});

const Order = sequelize.define(
  "order",
  {
    title: Sequelize.STRING,
    date: {
      type: Sequelize.DATE,
      defaultValue: Sequelize.NOW
    },
    user_id: {
      type: Sequelize.INTEGER,
      references: {
        model: User,
        key: "id"
      }
    }
  },
  { timestamps: false }
);

sequelize.sync({
  force: true,
  logging: console.log
});

User.hasMany(Order, { foreignKey: "user_id" });

module.exports = {
  User,
  Order,
  Message,
  Conversation,
  ConvUser
};
