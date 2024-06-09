const tagRoutes = require("express").Router();
const tagData = require("../models/tags.json")
const tagController = require("../controllers/tagController")
const paginatedResults = require('../middlewares/pagination');

tagRoutes.get("/tags", paginatedResults(tagData),tagController.getAllTags);

tagRoutes.post("/tags", tagController.createNewTag)

tagRoutes.patch("/tags/:id/updatetag", tagController.updateTag);

tagRoutes.delete("/tags/:id/deletetag", tagController.deleteTag);

module.exports = tagRoutes;