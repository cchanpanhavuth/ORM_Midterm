// const { response } = require("express");
const tageData = require("../models/tages.json")

const getAllTages= (req, res) => {
  res.json(res.paginatedResults);
}

//Create New Category
const createNewTage = (req, res) => {
  const body = req.body;
  console.log({ body })
  const {tageName} = body;
  tageData.push({ tageId: tageData.length+1, tageName})
  res.status(201).send("New Tage was Created Successfully")
}

//Update Category
const updateTage = (req, res) => {
  //Look up category using the req id
  // If category does not exist, then resture 404 not found
  console.log(parseInt(req.params.id))
  const tage = tageData.find(t => t.tageId === parseInt(req.params.id));
  if(!tage) {
    res.status(404).send("A tage was not found")
  }
  //Validation
  //If invalid then return 400 -Bad Request

  //Update Course 
  //Return the category
  tage.tageName = req.body.tageName;
  res.send(tage);
};


//Delete Category
const deleteTage = (req, res) => {
  const { params } = req;
  // Find the index of the comment to delete
  const tageIndex = tageData.findIndex(t => t.tageId === parseInt(params.id));

  if (tageIndex !== -1) {
    // Remove the comment using splice
    tageData.splice(tageIndex, 1);
    res.status(200).send("Tage was deleted successfully");
  } else {
    res.status(404).send("Tage was not found");
  }
};

module.exports = {
    getAllTages, createNewTage,updateTage, deleteTage
}