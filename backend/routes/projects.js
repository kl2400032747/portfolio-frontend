const express = require('express');
const Project = require('../models/Project');
const router = express.Router();

router.get('/', async (req, res) => {
  try {
    const projects = await Project.find().sort({ createdAt: -1 });
    res.json(projects);
  } catch (error) {
    console.error('Failed to load projects:', error);
    res.status(500).json({ error: 'Unable to fetch projects' });
  }
});

module.exports = router;
