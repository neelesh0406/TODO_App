const express = require('express');
const router = express.Router();


router.post('/', require('../controllers/delete_controller') );

module.exports = router;