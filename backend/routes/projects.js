const express = require('express');
const router = express.Router();
const Project = require('../models/Project');


// GET all projects
router.get('/', async (req, res) => {
try {
const projects = await Project.find().sort({ createdAt: -1 });
res.json(projects);
} catch (err) {
res.status(500).json({ error: err.message });
}
});


// POST add project
router.post('/', async (req, res) => {
try {
const proj = new Project(req.body);
await proj.save();
res.status(201).json(proj);
} catch (err) {
res.status(400).json({ error: err.message });
}
});


module.exports = router;