const express = require('express');
const router = express.Router();

const skills = [
  { name: 'JavaScript', level: 'Advanced' },
  { name: 'React.js', level: 'Advanced' },
  { name: 'Node.js', level: 'Intermediate' },
  { name: 'Express', level: 'Intermediate' },
  { name: 'MongoDB', level: 'Intermediate' },
  { name: 'HTML & CSS', level: 'Advanced' }
];

router.get('/', (req, res) => {
  res.json(skills);
});

module.exports = router;
