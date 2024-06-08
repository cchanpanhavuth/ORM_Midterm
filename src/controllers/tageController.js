// const { response } = require("express");
const categoryData = require("../models/tages.json")

const getAllTages= (req, res) => {
  res.json(res.paginatedResults);
}

//Create New Category
const createNewTage = (req, res) => {
  const body = req.body;
  console.log({ body })
  const {categoryName} = body;
  categoryData.push({ categoryId: categoryData.length+1, categoryName})
  res.status(201).send("New Category was Created Successfully")
}

//Update Category
const updateTage = (req, res) => {
  //Look up category using the req id
  // If category does not exist, then resture 404 not found
  console.log(parseInt(req.params.id))
  const category = categoryData.find(c => c.categoryId === parseInt(req.params.id));
  if(!category) {
    res.status(404).send("A category was not found")
  }
  //Validation
  //If invalid then return 400 -Bad Request

  //Update Course 
  //Return the category
  category.categoryName = req.body.categoryName;
  res.send(category);
};


//Delete Category
const deleteTage = (req, res) => {
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
    getAllTages, createNewTage,updateTage, deleteTage
}