const mongoose = require('mongoose');

const bookingSchema = new mongoose.Schema({
  customerName: String,
  phoneNumber: String,
  date: String,
  time: String,
  status: { type: String, default: 'Pending' },
});

module.exports = mongoose.model('Booking', bookingSchema);
