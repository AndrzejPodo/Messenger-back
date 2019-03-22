
const authController = require('./controllers/auth');

const convs = require('./httpcontrollers/conversations');

const orderController = require('./controllers/order');

const messageController = require('./controllers/message');

const authMidlleware = require('./middlewares/auth');

module.exports.set = app => {
    app.post('/login', authController.login);
    app.post('/register', authController.register);
    app.get('/getConversations/:id', convs.getConvsByUserId);
    app.post('/createConversation', convs.createConversation);
    app.post('/addUserToConversation',convs.addUserToConversation)
    // app.get('/orders', orderController.getOrders);
    // app.get('/orders/:id', orderController.getOrder);
    // app.post('/orders', orderController.addOrder);
    // app.post('/addMessage/', authMidlleware.checkAuth, messageController.sendMessage);
    // app.get('/getMessages/:id', authMidlleware.checkAuth, messageController.getMessages);
}