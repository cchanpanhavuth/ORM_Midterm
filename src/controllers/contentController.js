const contentData = require("../models/contents.json")
// const paginatedResults = require("./pagination.js")

const getAllContent = (req, res) => {
  res.json(res.paginatedResults);
};

const createNewContent = (request, response) => {
  const body = request.body;
  console.log({ body })
  const { categoryId, userId, title, contentDescription,publishDate } = body;
  contentData.push({ contentId: contentData.length+1, categoryId: categoryId, userId: userId, title: title, contentDescription:contentDescription,publishDate:publishDate})
  response.status(201).send("Success Created")
}
const updatePassword = (req, res) => {
  const { body, params } = req;
  const id = parseInt(params.id);
  const { password } = body;

  let contentFound = false;

  contentData.forEach(content => {
    if (content.contentId === id) {
        content.password = password;
        contentFound = true;
    }
  });

  if (contentFound) {
    res.status(204).send("Password updated successfully");
  } else {
    res.status(404).send("content not found");
  }
};


const deletecontent = (req, res) => {
  const {params} = req;
  console.log({params})
  const id = parseInt(params.id)

  const filteredContent = contentData.filter(content => content.contentId !== id);

  if (filteredContent.length < contentData.length) {
    contentData = filteredContent;
    res.status(200).send("Success Deleted");
  }else{
    res.status(404).send("content not found");
  }


}
module.exports = {
  getAllUser,
  createNewUser,
  updatePassword,
  deleteUser
}