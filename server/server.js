const express = require('express');
const socketIO = require('socket.io');
const app = express();

const port = process.env.PORT || 3000;
const server = app.listen(port, function(){
    console.log(`Listening for requests on port ${port}`);
});

const io = socketIO(server);

const path = require('path');
const publicPath = path.join(__dirname, '../public');

app.use(express.static(publicPath));

io.on('connection', (socket) => {
  console.log('We made a socket connection', socket.id)
  
  socket.on('disconnect', () => {
    console.log('Socket is disconnected')
  });

});
