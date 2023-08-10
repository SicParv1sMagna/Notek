const express = require('express');
const router = express.Router();

const passport = require('passport');

const controller = require('../controller/authController');

// ${URL}/api/auth/login-user
router.post('/login-user', controller.login);

// ${URL}/api/auth/register-user
router.post('/register-user', controller.register);

module.exports = router;