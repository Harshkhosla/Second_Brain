const mongoose = require('mongoose');

const tagSchema = new mongoose.Schema({
  title: { type: String, required: true, unique: true }
});

export const   Tags = mongoose.model('Tag', tagSchema);

