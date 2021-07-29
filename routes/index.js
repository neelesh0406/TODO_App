const express = require('express');
const router = express.Router();

router.get('/', require('../controllers/home_controller'));
router.use('/submit-task', require('./submit_route'))


module.exports = router;