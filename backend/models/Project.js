const mongoose = require('mongoose');


const ProjectSchema = new mongoose.Schema({
title: { type: String, required: true },
description: String,
tech: [String],
demo: String,
repo: String
}, { timestamps:true });


module.exports = mongoose.model('Project', ProjectSchema);