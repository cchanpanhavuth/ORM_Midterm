const tageRoutes = require("express").Router();
const tageData = require("../models/tages.json")
const tageController = require("../controllers/categoryController")
const paginatedResults = require('../middlewares/pagination');

categoryRoutes.get("/categories", paginatedResults(categoryData),categoryController.getAllCategories);

categoryRoutes.post("/categories", categoryController.createNewCategory)

categoryRoutes.patch("/categories/:id/updateCategory", categoryController.updateCategory);

categoryRoutes.delete("/categories/:id/deleteCategory", categoryController.deleteCategory);

module.exports = categoryRoutes;