const commentRoute = require("express").Router();
const commentCrt = require("../controllers/commentController")
const commentData = require("../models/comments.json")
const paginatedResults = require("../middlewares/pagination");



commentRoute.get("/comments", paginatedResults(commentData), commentCrt.getAllComments)

commentRoute.get("/comments/:id", commentCrt.getCommentById)

commentRoute.post("/comments", commentCrt.createNewComment)

commentRoute.patch("/comments/:id/updateComment", commentCrt.updateComment);

commentRoute.delete("/comments/:id/deleteComment", commentCrt.deleteComment);

module.exports = commentRoute;