const contentRoutes = require("express").Router();
const contentData = require('../models/contents.json');
const contentController = require("../controllers/contentController")
const paginatedResults = require('../middlewares/pagination');

contentRoutes.get('/contents', paginatedResults(contentData), contentController.getAllContent);

contentRoutes.post("/contents", contentController.createNewContent)

contentRoutes.patch("/contents/:id/updatePassword", contentController.updatePassword)

contentRoutes.delete("/contents/:id/deleteContent", contentController.deleteContent)

module.exports = contentRoutes;