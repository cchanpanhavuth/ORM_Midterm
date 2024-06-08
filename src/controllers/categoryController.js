// const { response } = require("express");
const categoryData = require("../models/categories.json")

const getAllCategories = (req, res) => {
  res.json(res.paginatedResults);
}

// const getCategoryById = (req, res) => {
//   const { params } = req;
//   const id = parseInt(params.id);

//   const category = categoryData.find(category => category.categoryId === id);

//   if (category) {
//     res.status(200).json(category); // Use JSON format for response data
//   } else {
//     res.status(404).send("Comment not found");
//   }
// };

//Create New Category
const createNewCategory = (req, res) => {
  const body = req.body;
  const {categoryName} = body;
  // Generate a unique comment ID (consider using a library for robustness)
  let newCategoryId;
  if (categoryData.length === 0) {
    newCategoryId = 1;
  } else {
    const highestId = Math.max(...categoryData.map(category => category.categoryId));
    newCategoryId = highestId + 1;
  }
  const newCategory = {
    categoryId: newCategoryId,
    categoryName
  };

  categoryData.push(newCategory);
  res.status(201).send("Category created successfully");
};

//Update Category
const updateCategory = (req, res) => {
  const { body, params } = req;
  const id = parseInt(params.id);
  const { categoryName } = body;

  // Find the comment by ID
  const categoryIndex = categoryData.findIndex(category => category.categoryId === id);

  if (categoryIndex !== -1) {
    categoryData[categoryIndex].categoryName = categoryName ;
    res.status(200).send("Category updated successfully"); // Use 200 for successful update
  } else {
    res.status(404).send("Category not found");
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
    getAllCategories, updateCategory, deleteCategory
}