var socket = io.connect();

socket.on('connect', function() {
    console.log('Client connected')
});

socket.on('disconnect', function() {
    console.log('Client disconnected')
});

socket.on('newMessage', function(data) {
    console.log('New message received', data)
});
