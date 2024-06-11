const roleRoutes = require("express").Router();
const roleData = require("../models/roles.json")
const roleController = require("../controllers/roleController")
const paginatedResults = require('../middlewares/pagination');

roleRoutes.get("/roles", paginatedResults(roleData), roleController.getAllRole)

roleRoutes.get("/roles/:id", roleController.getRoleById)

roleRoutes.post("/roles", roleController.createNewRole)

roleRoutes.patch("/roles/:id/updateDescription", roleController.updateDesciption)

roleRoutes.delete("/roles/:id/deleteRole", roleController.deleteRole)

module.exports = roleRoutes;