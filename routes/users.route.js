const { Router } = require('express');
const { authMiddleware } = require('../middlewares/Auth.middleware');

const router = Router();

const { usersController } = require('../controllers/users.controller');

router.get('/', usersController.getAllUsers);
router.post('/registration', usersController.registerUser);
router.post('/login', usersController.login);

module.exports = router;
