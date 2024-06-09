const userData = require("../models/users.json")
// const paginatedResults = require("./pagination.js")

const getAllUser = (req, res) => {
  res.json(res.paginatedResults);
};

const createNewUser = (request, response) => {
  const body = request.body;
  console.log({ body })
  const { username, password, email, roleId } = body;
  userData.push({ userId: userData.length+1, username: username, email: email, roleId: roleId, password:password})
  response.status(201).send("Success Created")
}
const updatePassword = (req, res) => {
  const { body, params } = req;
  const id = parseInt(params.id);
  const { password } = body;

  let userFound = false;

  userData.forEach(user => {
    if (user.userId === id) {
      user.password = password;
      userFound = true;
    }
  });

  if (userFound) {
    res.status(204).send("Password updated successfully");
  } else {
    res.status(404).send("User not found");
  }
};


const deleteUser = (req, res) => {
  const {params} = req;
  console.log({params})
  const id = parseInt(params.id)

  const userIndex = userData.findIndex(user => user.userId === id);

  if (userIndex !== -1) {
    userData.splice(userIndex, 1);
    res.status(200).send("User deleted successfully");
  } else {
    res.status(404).send("User not found");
  }
}
module.exports = {
  getAllUser,
  createNewUser,
  updatePassword,
  deleteUser
}