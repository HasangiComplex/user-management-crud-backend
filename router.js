//when data passed from mongo db to controllers, we can access controllers using router
const express = require('express');
const router = express.Router();
const controller = require('./controller.js');


router.get('/users', controller.getUsers)
router.get('/user', controller.getUserById)
router.post('/createuser', controller.addUser)
router.put('/updateuser', controller.updateUser)
router.delete('/deleteuser', controller.deleteUser)

module.exports = router;
