const mongoose = require('mongoose');

const EventSchema = new mongoose.Schema(
  {
    companyId: Number,
    profileId: Number,
    name: String,
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model('Event', EventSchema);
