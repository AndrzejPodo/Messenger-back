const Conv= require('../models').Conversation;
const Users = require('../models').User
const Sequelize = require('sequelize');
const Op = Sequelize.Op;

const addConv = data => Conv.create(data);

const addUserToConv = (convId, userId) => {
    // Users.findAll({
    //     where: {
    //         id: {
    //             [Op.or]: usersId
    //         }
    //     }
    // }).then(data => { //dziala
    //     console.log(JSON.stringify(data));
    // }}
    // models.User.find({ where: {first_name: 'john'} }).on('success', function(user) {
    //     models.City.find({where: {id: 10}}).on('success', function(city){
    //       user.setCities([city]);
    //     });      {"convId":"1","userId":"1"}
    //   });
    console.log(convId);
    console.log(userId);

    Conv.findAll({where:{id: convId}}).then(conv => {
        Users.findAll({where: {id: userId}}).then(user => {
            conv[0].addUsers(user);
        })
    })
    // Conv.findAll(
    //     {where:{id: convId}}
    // ).then(data =>{
    //     console.log(JSON.stringify(data));
    // });
}

module.exports = {
    addConv,
    addUserToConv
}