// const { response } = require("express");
const contentData = require("../models/contents.json")


const getAllContents = (req, res) => {
    res.json(res.paginatedResults);
}

const getContentById = (req, res) => {
    const { params } = req;
    const id = parseInt(params.id);

    const content = contentData.find(content => content.contentId === id);

    if (content) {
        res.status(200).json(content); // Use JSON format for response data
    } else {
        res.status(404).send("Content not found");
    }
};


const createNewContent = (req, res) => {
    const body = req.body;
    const { categoryId, userId, title, contentDescription, publishDate } = body;
    // Generate a unique content ID (consider using a library for robustness)
    let newContentId;
    if (contentData.length === 0) {
        newContentId = 1;
    } else {
        const highestId = Math.max(...contentData.map(content => content.contentId));
        newContentId = highestId + 1;
    }
    const newContent = {
        contentId: newContentId,
        categoryId,
        userId,
        title,
        contentDescription,
        publishDate
    };

    contentData.push(newContent);
    res.status(201).send("Content created successfully");
};


const updateContent = (req, res) => {
    const { body, params } = req;
    const id = parseInt(params.id);
    const { title, contentDescription } = body;

    // Find the content by ID
    const contentIndex = contentData.findIndex(content => content.contentId === id);

    if (contentIndex !== -1) {
        contentData[contentIndex].title = title;
        contentData[contentIndex].contentDescription = contentDescription;
        res.status(200).send("Content updated successfully"); // Use 200 for successful update
    } else {
        res.status(404).send("Content not found");
    }
};

const deleteContent = (req, res) => {
    const { params } = req;
    const id = parseInt(params.id);
  
    // Find the index of the content to delete
    const contentIndex = contentData.findIndex(content => content.contentId === id);
  
    if (contentIndex !== -1) {
      // Remove the content using splice
      contentData.splice(contentIndex, 1);
      res.status(200).send("Content deleted successfully");
    } else {
      res.status(404).send("Content not found");
    }
  };


module.exports = {
    getAllContents,
    getContentById,
    createNewContent,
    updateContent,
    deleteContent
}