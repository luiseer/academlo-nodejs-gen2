const jwt = require('jsonwebtoken')
const express = require('express');


// Controllers
const {
  getAllUsers,
  getUserById,
  createNewUser,
} = require('../controllers/users.controller');

//middleswares

const  middleswares = require('../middlewares/auth.middleware')

const router = express.Router();

router.get('/',  getAllUsers);

router.get('/:id', getUserById);

router.post('/', createNewUser);



module.exports = { usersRouter: router };
