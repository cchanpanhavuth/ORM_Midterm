const categoryRoutes = require("express").Router();
const categoryController = require("../controllers/categoryController")

categoryRoutes.get("/categories", categoryController.getAllCategories)

categoryRoutes.get("/categories", categoryController.getCategoryById)

categoryRoutes.post("/categories", categoryController.updateCategory)

categoryRoutes.patch("/categories", categoryController.deleteCategory)

module.exports = categoryRoutes;