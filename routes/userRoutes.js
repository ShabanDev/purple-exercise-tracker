const express = require('express');
const controller = require('../controllers/userController');

let router = express.Router();

router.post('/new-user', controller.createUser);
router.get('/users', controller.getUsers)

module.exports = router;