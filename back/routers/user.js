const express= require('express');
const { logIn } = require('../controllers/users');
const router = express.Router();

router.post('/logIn', logIn)

module.exports = router;