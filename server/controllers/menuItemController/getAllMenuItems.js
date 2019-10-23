const mongoose = require('mongoose');

// Models
const MenuItem = mongoose.model('menuItem');

module.exports = (req, res) => {
  const errors = {};

  MenuItem.find()
    .sort({ date: -1 })
    .then((menuItems) => {
      return res.json(menuItems);
    })
    .catch((err) => {
      errors.text = 'Error fetching menu items from database';
      res.status(500).json({ ...errors, ...err });
    });
};
