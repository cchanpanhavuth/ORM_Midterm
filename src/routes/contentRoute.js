const contentRoute = require("express").Router();
const contentCrt = require("../controllers/contentController")
const contentData = require("../models/contents.json")
const paginatedResults = require("../middlewares/pagination");


contentRoute.get("/contents", paginatedResults(contentData), contentCrt.getAllContents)

contentRoute.get("/contents/:id", contentCrt.getContentById)

contentRoute.post("/contents", contentCrt.createNewContent)

contentRoute.patch("/contents/:id/updateContent", contentCrt.updateContent);

contentRoute.delete("/contents/:id/deleteContent", contentCrt.deleteContent);

module.exports = contentRoute;