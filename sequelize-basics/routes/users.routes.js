const express = require('express');

// Controllers
const {
  getAllUsers,
  getUserById,
  createNewUser,
  createUser
} = require('../controllers/users.controller');

const router = express.Router();

router.get('/', getAllUsers);

router.get('/:id', getUserById);

router.post('/', createNewUser);

router.post('/', createUser);

module.exports = { usersRouter: router };
