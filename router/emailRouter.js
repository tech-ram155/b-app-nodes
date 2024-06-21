const express = require('express');
const router = express.Router();
const bodyParser = require('body-parser');
const emailController = require('../controler/emailControler');
const authenticateToken = require('../middleware/auth')



// Middleware
router.use(bodyParser.json());
router.use(bodyParser.urlencoded({ extended: true }));

// Email sending endpoint
router.post('/send-email',authenticateToken, emailController.sendEmail);

module.exports = router;