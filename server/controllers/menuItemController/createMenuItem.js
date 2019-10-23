const mongoose = require('mongoose');

// Models
const MenuItem = mongoose.model('menuItem');

module.exports = (req, res) => {
  const errors = {};

  new MenuItem(req.body)
    .save()
    .then((menuItem) => res.json({ menuItem, success: true }))
    .catch((err) => {
      errors.text = 'Error saving menu item into the database';
      res.status(500).json({ ...errors, ...err });
    });
};
