const { Router } = require('express');

const router = Router();

const { lessonsController } = require('../controllers/lessons.controller');

router.get('/', lessonsController.getAll);
router.post('/', lessonsController.addLesson);
router.patch('/:id', lessonsController.createLesson);
router.delete('/:id', lessonsController.deleteLesson);

module.exports = router;
