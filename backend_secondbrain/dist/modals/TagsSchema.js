"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Tags = void 0;
const mongoose = require('mongoose');
const tagSchema = new mongoose.Schema({
    title: { type: String, required: true, unique: true }
});
exports.Tags = mongoose.model('Tag', tagSchema);
