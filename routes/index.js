const { Router } = require('express');

const router = Router();

router.use('/users', require('./users.route'));
router.use('/lessons', require('./lessons.route'));

module.exports = router;
