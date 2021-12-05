const express= require('express');
const router = express.Router();
const {createMessage,updateMessages} = require('../controllers/messages')

router.post('/create', createMessage)
router.get('/update/:user', updateMessages)
module.exports = router;