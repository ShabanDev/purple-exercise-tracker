const express = require('express');
const userController = require('../controllers/userController');

let router = express.Router();

router.post('/new-user', userController.createUser)

module.exports = router;