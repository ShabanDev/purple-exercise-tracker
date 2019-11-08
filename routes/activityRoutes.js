const express = require('express');

const controller = require('../controllers/activityController');

let router = express.Router();

router.post('/add', controller.addActivity);
router.get('/log', controller.getActivities);

module.exports = router;