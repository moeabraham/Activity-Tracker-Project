const express = require('express');
const router = express.Router;

// router.get('/', function(req, res, next){
//     res.redirect('/activities')
// });

router.get('/', indexCtrl.index);

module.exports = router;