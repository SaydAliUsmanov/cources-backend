const { Router } = require('express');

const router = Router();

const { courcesController } = require('../controllers/cources.controller');

router.get('/', courcesController.getAll);
router.post('/', courcesController.addCource);
router.patch('/:id', courcesController.createCource);
router.delete('/:id', courcesController.deleteCource);

module.exports = router;
