const mongoose = require('mongoose');
const eventSchema = new mongoose.Schema({
  name: { type: String, required: true },
  date: { type: Date, required: true },
  location: { type: String, required: true },
  description: { type: String, required: true },
  image: { type: String, default: 'https://via.placeholder.com/300x200?text=Event' },
});

module.exports = mongoose.model('Event', eventSchema);