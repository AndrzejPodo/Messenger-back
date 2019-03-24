
const authController = require('./controllers/auth');

const convs = require('./httpcontrollers/conversations');

const messageController = require('./httpcontrollers/messages');

const authMidlleware = require('./middlewares/auth');

module.exports.set = app => {
    app.post('/login', authController.login);
    app.post('/register', authController.register);

    app.get('/getConversations/:id', convs.getConvsByUserId);
    app.post('/createConversation', convs.createConversation);
    app.post('/addUserToConversation',convs.addUserToConversation);
    
    app.post('/sendMessage/', messageController.sendMessage);
    app.get('/getConversationMessages/:id', messageController.getConversationMessages);
    
}