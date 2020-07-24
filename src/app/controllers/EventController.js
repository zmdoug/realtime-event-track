const interval = process.env.INTERVAL || 3;
const EventRepository = require('../repositories/EventRepository');
const database = []; // just for demo ;}

// simple function to handle the event
function newEvent(userEvent) {
  // get the current time
  const eventTimeInSeconds = Math.floor(Date.now() / 1000); // in seconds

  // here we can use a server caching tool that can have a small lifetime;
  const checkEvent = database.some((item) => (item.name === userEvent.name && item.time >= (eventTimeInSeconds - interval)));

  // if some event match the criterea (lasts 3 seconds, same user, etc...)
  if (checkEvent) {
    return { exists: true, total: database.length };
  }

  // here we save the event on cache because isn't duplicated;
  // we can use redis memory-cache or any other tool
  database.push({ time: eventTimeInSeconds, ...userEvent });

  // save event to database
  const eventRepository = new EventRepository();
  eventRepository.create({ time: eventTimeInSeconds, ...userEvent });

  return { exists: false, total: database.length };
}

module.exports = { newEvent };