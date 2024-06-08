// const { response } = require("express");
const categoryData = require("../models/categories.json")

const getAllCategories = (req, res) => {
  res.json(res.paginatedResults);
}

//Create New Category
const createNewCategory = (req, res) => {
  const body = req.body;
  console.log({ body })
  const {categoryName} = body;
  categoryData.push({ categoryId: categoryData.length+1, categoryName})
  res.status(201).send("New Category was Created Successfully")
}

//Update Category
const updateCategory = (req, res) => {
  const { body, params } = req;
  const id = parseInt(params.id);
  const { categoryName } = body;

  let categoryFound = false;

  categoryData.forEach(category => {
    if (category.categoryId === id) {
      category.categoryName = categoryName;
      categoryFound = true;
    }
  });

  if (categoryFound) {
    res.status(204).send("Category was updated successfully");
  } else {
    res.status(404).send("Category Could not find");
  }
};


//Delete Category
const deleteCategory = (req, res) => {
  const { params } = req;
  const id = parseInt(params.id);

  // Find the index of the comment to delete
  const categoryIndex = categoryData.findIndex(category => category.categoryId === id);

  if (categoryIndex !== -1) {
    // Remove the comment using splice
    categoryData.splice(categoryIndex, 1);
    res.status(200).send("Category deleted successfully");
  } else {
    res.status(404).send("Category not found");
  }
};

module.exports = {
    getAllCategories, createNewCategory,updateCategory, deleteCategory
}