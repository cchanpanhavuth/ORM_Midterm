const userRoutes = require("express").Router();
const userController = require("../controllers/userController")

userRoutes.get("/users", userController.getAllUser)

userRoutes.post("/users", userController.createNewUser)

userRoutes.patch("/users/:id/updatePassword", userController.updatePassword)


module.exports = userRoutes;