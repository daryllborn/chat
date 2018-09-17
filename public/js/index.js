var socket = io.connect();

socket.on('connect', function() {
    console.log('Client connected')

    socket.emit('createMessage', {
      from: 'Paul',
      text: 'Hello world'
    });
});

socket.on('disconnect', function() {
    console.log('Client disconnected')
});

socket.on('newMessage', function(data) {
    console.log('New message received', data)
});
