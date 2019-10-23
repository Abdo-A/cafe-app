const express = require('express');

const router = express.Router();
const menuItemController = require('../controllers/menuItemController');

// @route  POST api/menuitem
// @desc   Create menu item
// @access Public

router.post('/', menuItemController.createMenuItem);

// @route  GET api/menuitem/all
// @desc   Get all menu items
// @access Public

router.get('/all', menuItemController.getAllMenuItems);

// @route  DELETE api/menuitem/:id
// @desc   Get all menu items
// @access Public

router.delete('/:id', menuItemController.deleteMenuItem);

module.exports = router;
