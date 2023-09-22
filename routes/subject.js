var express = require('express');
var router = express.Router();
var subjectController = require('../controller/subjectController');

router.get('/', subjectController.getSubject);
router.post('/subject', subjectController.postSubject);

module.exports = router;
