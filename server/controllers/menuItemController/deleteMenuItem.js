const mongoose = require('mongoose');

// Models
const MenuItem = mongoose.model('menuItem');

module.exports = (req, res) => {
  const errors = {};

  MenuItem.findOneAndDelete({ _id: req.params.id })
    .then(() => res.json({ success: true }))
    .catch((err) => {
      errors.text = 'Error checking for the menu item in database';
      return res.status(500).json({ ...errors, ...err });
    });
};
