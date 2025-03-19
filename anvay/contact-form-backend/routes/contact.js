// filepath: contact-form-backend/routes/contact.js
const express = require('express');
const router = express.Router();
const Contact = require('../models/Contact');

// POST route to handle form submission
router.post('/', async (req, res) => {
  const { name, email, subject, message } = req.body;

  console.log('Received data:', { name, email, subject, message });

  try {
    const newContact = new Contact({ name, email, subject, message });
    await newContact.save();
    console.log('Saved new contact:', newContact);
    res.status(201).json({ message: 'Message sent successfully' });
  } catch (error) {
    console.error('Error saving contact:', error);
    res.status(500).json({ error: 'Failed to send message' });
  }
});

module.exports = router;