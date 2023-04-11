const pushNotoficationController = require('../controllers/push-notifications.controllers');
const express = require('express');
const router = express.Router();

router.get("/SendNotification", pushNotoficationController.SendNotification);

module.exports = router;