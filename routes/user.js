const express = require('express');
const router = express.Router();

let userController = require('../controllers/userController');


//Next is missing in all the router methods
router.route('/')
    .get(userController.getUsers)
    .post(userController.saveUser);

router.route('/:id')
    .get(userController.getUserById)
    .put(userController.updateUser)
    .delete(userController.deleteUser);

module.exports = router;