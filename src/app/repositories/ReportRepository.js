const EventModel = require('../models/EventModel');

class ReportRepository {
  async reportByUserId(profileId) {
    try {
      const result = await EventModel.find({ profileId: profileId });
      return result;
    } catch (error) {
      console.log(error)
    }
  }
}

module.exports = ReportRepository;