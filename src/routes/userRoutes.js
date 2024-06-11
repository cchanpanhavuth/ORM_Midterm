const userRoutes = require("express").Router();
const userData = require('../models/users.json');
const userController = require("../controllers/userController")
const paginatedResults = require('../middlewares/pagination');

userRoutes.get('/users', paginatedResults(userData), userController.getAllUser);

userRoutes.get("/users/:id", userController.getUserById)

userRoutes.post("/users", userController.createNewUser)

userRoutes.patch("/users/:id/updateUser", userController.updateUser)

userRoutes.delete("/users/:id/deleteUser", userController.deleteUser)

module.exports = userRoutes;