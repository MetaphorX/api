const express = require('express')
const router = express.Router()
const {getUsers, setUser, updateUser, deleteUser} = require('../controller/userController')

//get users
router.get('/', getUsers)

//create users
router.post('/', setUser)

//update user
router.put('/:id', updateUser)

//delete user
router.delete('/:id', deleteUser)

module.exports = router