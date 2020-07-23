const app = require('express')();
const http = require('http').Server(app);
const io = require('socket.io')(http);
const port = process.env.PORT || 3000;

app.get('/', function (req, res) {
  res.sendFile(__dirname + '/public/index.html');

});

io.on('connection', function (socket) {
  socket.on('user_event', function (msg) {
    io.emit('user_notification', msg);
  });
});

http.listen(port, function () {
  console.log('listening on *:' + port);
});