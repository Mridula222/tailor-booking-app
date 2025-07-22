const express = require('express');
const router = express.Router();
const Design = require('../models/Design');

// GET all designs
router.get('/', async (req, res) => {
  try {
    const designs = await Design.find();
    res.json(designs);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch designs' });
  }
});

// POST a new design
router.post('/', async (req, res) => {
  try {
    const newDesign = new Design(req.body);
    await newDesign.save();
    res.status(201).json(newDesign);
  } catch (error) {
    res.status(400).json({ error: 'Failed to save design' });
  }
});

module.exports = router;
