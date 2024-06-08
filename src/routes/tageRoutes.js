const tageRoutes = require("express").Router();
const tageData = require("../models/tages.json")
const tageController = require("../controllers/tageController")
const paginatedResults = require('../middlewares/pagination');

tageRoutes.get("/tages", paginatedResults(tageData),tageController.getAllTages);

tageRoutes.post("/tages", tageController.createNewTage)

tageRoutes.patch("/tages/:id/updateTage", tageController.updateTage);

tageRoutes.delete("/tages/:id/deleteTage", tageController.deleteTage);

module.exports = tageRoutes;