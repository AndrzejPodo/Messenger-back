
const authController = require('./controllers/auth');

const orderController = require('./controllers/order');

const messageController = require('./controllers/message');

module.exports.set = app => {
    app.post('/login', authController.login);
    app.post('/register', authController.register);
    app.get('/orders', orderController.getOrders);
    app.get('/orders/:id', orderController.getOrder);
    app.post('/orders', orderController.addOrder);
    app.post('/addMessage/', messageController.sendMessage);
    app.get('/getMessages/:id', messageController.getMessages);
}