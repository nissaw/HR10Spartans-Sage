var express = require('express');
var router = express.Router();

var userController = require('../controllers/userController');

// List all Users
router.get('/', userController.allUsers);

// Get User by Id
router.get('/:id', userController.getUserById);

// Update User
router.put('/', userController.updateUser);

// Add a Task to a user
router.post('/tasks', userController.addTaskToUser);

// Add a Project to a user
router.post('/projects', userController.addProjectToUser);

// Add an Organization to a user
router.post('/orgs', userController.addOrganizationToUser);

// curl -H "Content-Type: application/json" -X POST -d '{"username":"testuser", "password":"testpass", "teamname":"my team"}' http://localhost:3000/api/users/destroy
router.post('/remove', userController.removeUser);


module.exports = router;
