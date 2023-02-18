const express = require('express');
const app = express();
const http = require('http');
const server = http.createServer(app);
const { Server } = require("socket.io");
const io = new Server(server);

const port = process.env.PORT || 3000;

//tell express where to find static web files (js,css,images)
app.use(express.static('public'))

//app.get is a route handler
app.get('/', (req, res) => {
  res.sendFile(__dirname + '/views/index.html');
});
//route for every team member!!

server.listen(port, () => {
  console.log(`listening on ${port}`);
});

//socket.io stuff 

io.on('connection', (socket) => {
  console.log('a user connected');
  socket.emit('connected',{ sID: socket.id, message: 'new connection' });

  //listen for incoming messages from anyone connected to the chat service and then see what msg is. 
  socket.on('chat_message', function(msg){
    console.log(msg);

    //step 2 - show everyone what was just sent through (send the message to everyone connected to the service)
  io.emit('new_message', { message: msg });
  })

  //listen for typing event and broadcast to all 
  socket.on('user_typing', function(user){
    console.log(user);

    io.emit('typing', { currentUser: user })
  }) ;

  socket.on('stopTyping', function(user) {
    console.log(user);
    io.emit('stopTyping', { currentlytyping: user });
});

  socket.emit('connected', {sID: socket.id, message: 'new connection'});


  socket.on ('typing', (data) => {
    socket.broadcast.emit('typing', (data));
    });
});