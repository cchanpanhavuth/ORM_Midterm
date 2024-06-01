const userRoutes = require("express").Router();
const userData = require('../models/users.json');
const userController = require("../controllers/userController")
const paginatedResults = require('../middlewares/pagination');

userRoutes.get('/users', paginatedResults(userData), userController.getAllUser);

userRoutes.post("/users", userController.createNewUser)

userRoutes.patch("/users/:id/updatePassword", userController.updatePassword)

userRoutes.delete("/users/:id/deleteuser", userController.deleteUser)

module.exports = userRoutes;