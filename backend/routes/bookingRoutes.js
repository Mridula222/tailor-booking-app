const express = require('express');
const router = express.Router();
const Booking = require('../models/Booking');

router.get('/', async (req, res) => {
  const bookings = await Booking.find();
  res.json(bookings);
});

router.post('/', async (req, res) => {
  const newBooking = new Booking(req.body);
  await newBooking.save();
  res.status(201).json(newBooking);
});

module.exports = router;
