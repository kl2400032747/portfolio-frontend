const mongoose = require('mongoose');

const projectSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
  techStack: { type: [String], default: [] },
  repoLink: { type: String },
  demoLink: { type: String },
  imageUrl: { type: String }
}, { timestamps: true });

module.exports = mongoose.model('Project', projectSchema);
