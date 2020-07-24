const app = require('./src/app/app');
const http = require('http').Server(app);
const port = process.env.PORT || 3000;

const io = require('socket.io')(http);

// using websocket to receive events from the application
io.on('connection', function (socket) {

  require('./src/app/sockets/events')(socket, io);
  // if the function above returns true
  // the same event happened in the lasts 3 seconds
});

http.listen(port, function () {
  console.log('listening on *:' + port);
});