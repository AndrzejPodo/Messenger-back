const Orders = require('../models').Order;
const getAll = () => Orders.findAll();
const getById = id => Orders.findByPk(id);
const add = order => Orders.create(order);
module.exports = {add, getAll, getById};