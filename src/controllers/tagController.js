// const { response } = require("express");
const tagData = require("../models/tags.json")

const getAllTags= (req, res) => {
  res.json(res.paginatedResults);
}

const getTagById = (req, res) => {
  const { params } = req;
  const id = parseInt(params.id);

  const tag = tagData.find(tag => tag.tagId === id);

  if (tag) {
      res.status(200).json(tag); // Use JSON format for response data
  } else {
      res.status(404).send("Tag not found");
  }
};

const createNewTag = (req, res) => {
  const body = req.body;
  console.log({ body })
  const {tagName} = body;
  tagData.push({ tagId: tagData.length+1, tagName})
  res.status(201).send("New Tag was Created Successfully")
}

const updateTag = (req, res) => {
  console.log(parseInt(req.params.id))
  const tag = tagData.find(t => t.tagId === parseInt(req.params.id));
  if(!tag) {
    res.status(404).send("A tag was not found")
  }

  tag.tagName = req.body.tagName;
  res.send(tag);
};


const deleteTag = (req, res) => {
  const { params } = req;
  // Find the index of the comment to delete
  const tagIndex = tagData.findIndex(t => t.tagId === parseInt(params.id));

  if (tagIndex !== -1) {
    // Remove the comment using splice
    tagData.splice(tagIndex, 1);
    res.status(200).send("Tag was deleted successfully");
  } else {
    res.status(404).send("Tag was not found");
  }
};

module.exports = {
    getAllTags, createNewTag,updateTag, deleteTag, getTagById
}