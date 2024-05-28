const roleRoutes = require("express").Router();
const roleController = require("../controllers/roleController")

roleRoutes.get("/roles", roleController.getAllRole)

roleRoutes.post("/roles", roleController.createNewRole)

roleRoutes.patch("/roles/:id/updateDescription", roleController.updateDesciption)

roleRoutes.delete("/roles/:id/deleteuser", roleController.deleteRole)

module.exports = roleRoutes;