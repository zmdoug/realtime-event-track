const EventModel = require('../models/EventModel');

class EventRepository {
  async create(event) {
    try {
      const result = await EventModel.create(event);
      return result;
    } catch (error) {
      console.log(error)
    }
  }
}

module.exports = EventRepository;