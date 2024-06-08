// const { response } = require("express");
const commentData = require("../models/comments.json")

const getAllComments = (req, res) => {
  res.json(res.paginatedResults);
}

const getCommentById = (req, res) => {
  const { params } = req;
  const id = parseInt(params.id);

  const comment = commentData.find(comment => comment.commentId === id);

  if (comment) {
    res.status(200).json(comment); // Use JSON format for response data
  } else {
    res.status(404).send("Comment not found");
  }
};


const createNewComment = (req, res) => {
  const body = req.body;
  const { commentText, commentDate, userId, contentId} = body;
  // Generate a unique comment ID (consider using a library for robustness)
  let newCommentId;
  if (commentData.length === 0) {
    newCommentId = 1;
  } else {
    const highestId = Math.max(...commentData.map(comment => comment.commentId));
    newCommentId = highestId + 1;
  }
  const newComment = {
    commentId: newCommentId,
    commentText,
    commentDate,
    userId,
    contentId
  };

  commentData.push(newComment);
  res.status(201).send("Comment created successfully");
};



const updateComment = (req, res) => {
  const { body, params } = req;
  const id = parseInt(params.id);
  const { commentText } = body;

  // Find the comment by ID
  const commentIndex = commentData.findIndex(comment => comment.commentId === id);

  if (commentIndex !== -1) {
    commentData[commentIndex].commentText = commentText;
    res.status(200).send("Comment updated successfully"); // Use 200 for successful update
  } else {
    res.status(404).send("Comment not found");
  }
};


const deleteComment = (req, res) => {
  const { params } = req;
  const id = parseInt(params.id);

  // Find the index of the comment to delete
  const commentIndex = commentData.findIndex(comment => comment.commentId === id);

  if (commentIndex !== -1) {
    // Remove the comment using splice
    commentData.splice(commentIndex, 1);
    res.status(200).send("Comment deleted successfully");
  } else {
    res.status(404).send("Comment not found");
  }
};

module.exports = {
  getAllComments,
  getCommentById,
  createNewComment,
  updateComment,
  deleteComment
}