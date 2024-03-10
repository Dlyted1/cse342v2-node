const express = require('express');
const router = express.Router();

const usersController = require('../controllers/users');

router.get('/', usersController.getAll);

router.get('/:id', usersController.getSingle);

// used to create
router.post('/', usersController.createUser);

// used to update
router.put('/:id', usersController.updateUser);

// used to remove
router.delete('/:id', usersController.deleteUser);

module.exports = router;