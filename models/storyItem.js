// models/storyItem.js
const mongoose = require('../config/database')
const { Schema } = mongoose

const storyItemSchema = new Schema({
  item: { type: String, required: true },
  picture: { type: String, required: true },
  category: { type: String, required: true }
})

module.exports = mongoose.model('storyItems', storyItemSchema)
