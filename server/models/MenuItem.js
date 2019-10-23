const mongoose = require('mongoose');

const { Schema } = mongoose;

const MenuItemSchema = new Schema({
  name: {
    type: String,
  },
  type: { // Side or Main Course
    type: String,
  },
  price: {
    type: Number,
  },
  photo: {
    type: String,
  },
  date: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model('menuItem', MenuItemSchema);
