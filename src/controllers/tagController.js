// const { response } = require("express");
const tagData = require("../models/tags.json")

const getAllTags= (req, res) => {
  res.json(res.paginatedResults);
}

//Create New Category
const createNewTag = (req, res) => {
  const body = req.body;
  console.log({ body })
  const {tagName} = body;
  tagData.push({ tagId: tagData.length+1, tagName})
  res.status(201).send("New Tage was Created Successfully")
}

//Update Category
const updateTag = (req, res) => {
  //Look up category using the req id
  // If category does not exist, then resture 404 not found
  console.log(parseInt(req.params.id))
  const tag = tageData.find(t => t.tagId === parseInt(req.params.id));
  if(!tag) {
    res.status(404).send("A tag was not found")
  }
  //Validation
  //If invalid then return 400 -Bad Request

  //Update Course 
  //Return the category
  tag.tagName = req.body.tagName;
  res.send(tag);
};


//Delete Category
const deleteTag = (req, res) => {
  const { params } = req;
  // Find the index of the comment to delete
  const tagIndex = tagData.findIndex(t => t.tagId === parseInt(params.id));

  if (tagIndex !== -1) {
    // Remove the comment using splice
    tagData.splice(tagIndex, 1);
    res.status(200).send("Tage was deleted successfully");
  } else {
    res.status(404).send("Tage was not found");
  }
};

module.exports = {
    getAllTags, createNewTag,updateTag, deleteTag
}