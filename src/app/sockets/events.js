const { newEvent } = require('../controllers/EventController');
const interval = process.env.INTERVAL || 3;

module.exports = function (socket, io) {
  socket.on('user_event', function (userEvent) {
    // each event have the user information and event information
    // here we handle the event to a function to store it
    const result = newEvent(userEvent);

    // if the event exists in cache
    if (result.exists) {
      io.emit('user_notification', `You already clicked in this button in the lasts ${interval} seconds.
      Total ${result.total} events from you`);
    }
  });
};