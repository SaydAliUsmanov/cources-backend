const { Router } = require('express');

const router = Router();

const { questionsController } = require('../controllers/questions.controller');

router.get('/', questionsController.getAll);
router.post('/', questionsController.addQuestion);
router.patch('/:id', questionsController.createQuestion);
router.delete('/:id', questionsController.deleteQuestion);

module.exports = router;
