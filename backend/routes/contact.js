const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  res.json({
    name: 'Sravanthi',
    email: '2400032747@kluniversity.in',
    location: 'Remote',
    summary: 'Full Stack Developer building modern web experiences with React, Node.js, and MongoDB.'
  });
});

module.exports = router;
