const app = require('express')();
const http = require('http').Server(app);
const io = require('socket.io')(http);
const port = process.env.PORT || 3000;
const interval = process.env.INTERVAL || 3;

const { newEvent } = require('./events');

// I'm just using express to render the html
app.get('/', function (req, res) {
  res.sendFile(__dirname + '/public/index.html');
});

// using websocket to receive events from the application
io.on('connection', function (socket) {
  socket.on('user_event', function (userEvent) {
    // each event have the user information and event information
    // here we handle the event to a function to store it
    const result = newEvent(userEvent);

    // if the function above returns true
    // the same event happened in the lasts 3 seconds
    if (result.exists) {
      io.emit('user_notification', `You already clicked in this button in the lasts ${interval} seconds.
      Total ${result.total} events from you`);
    }
  });
});

http.listen(port, function () {
  console.log('listening on *:' + port);
});