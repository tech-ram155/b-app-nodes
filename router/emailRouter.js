const express = require('express');
const router = express.Router();
const bodyParser = require('body-parser');
const emailController = require('../controler/emailControler');


// Middleware
router.use(bodyParser.json());
router.use(bodyParser.urlencoded({ extended: true }));

// Email sending endpoint
router.post('/send-email', emailController.sendEmail);

module.exports = router;