const express = require('express');
const router = express.Router();

router.post('/', require('../controllers/submit_controller'));

// router.post('/', function(req,res) {
//     console.log(req.body);
//     res.send('<h1>Form submitted</h1>');
// })

module.exports = router;