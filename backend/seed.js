const mongoose = require('mongoose');
const dotenv = require('dotenv');
const Project = require('./models/Project');

dotenv.config();

const MONGODB_URI = process.env.MONGODB_URI || 'mongodb://127.0.0.1:27017/portfolio';

const projects = [
  {
    title: 'Personal Portfolio Website',
    description: 'A modern portfolio website built with React and Express, showcasing projects, skills, and contact information.',
    techStack: ['React', 'Express', 'MongoDB', 'CSS'],
    repoLink: 'https://github.com/yourusername/portfolio-frontend',
    demoLink: 'https://your-portfolio-demo.com',
    imageUrl: ''
  },
  {
    title: 'Task Manager API',
    description: 'A RESTful task management API with user authentication, task categories, and CRUD operations.',
    techStack: ['Node.js', 'Express', 'MongoDB', 'JWT'],
    repoLink: 'https://github.com/yourusername/task-manager-api',
    demoLink: '',
    imageUrl: ''
  },
  {
    title: 'E-commerce Landing Page',
    description: 'A responsive landing page for an e-commerce product using modern UI patterns and mobile-first design.',
    techStack: ['React', 'CSS Grid', 'Responsive Design'],
    repoLink: 'https://github.com/yourusername/ecommerce-landing-page',
    demoLink: '',
    imageUrl: ''
  }
];

async function seed() {
  try {
    await mongoose.connect(MONGODB_URI);
    console.log('Connected to MongoDB for seeding');

    await Project.deleteMany({});
    const created = await Project.insertMany(projects);
    console.log(`Seeded ${created.length} projects`);
  } catch (error) {
    console.error('Error seeding data:', error);
  } finally {
    await mongoose.disconnect();
    process.exit(0);
  }
}

seed();
