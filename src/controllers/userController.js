const userData = require("../models/users.json")

const getAllUser = (req, res) => {
  res.json(res.paginatedResults);
};

const getUserById = (req, res) => {
  const { params } = req;
  const id = parseInt(params.id);

  const user = userData.find(user => user.userId === id);

  if (user) {
      res.status(200).json(user); // Use JSON format for response data
  } else {
      res.status(404).send("User not found");
  }
};

const createNewUser = (request, response) => {
  const body = request.body;
  console.log({ body })
  const { username, password, email, roleId } = body;
  userData.push({ userId: userData.length+1, username: username, email: email, roleId: roleId, password:password})
  response.status(201).send("Success Created")
}
const updateUser = (req, res) => {
  const { body, params } = req;
  const id = parseInt(params.id);
  const { password,username } = body;

  let userFound = false;

  userData.forEach(user => {
    if (user.userId === id) {
      user.password = password,
      user.username = username
      userFound = true;
    }
  });

  if (userFound) {
    res.status(204).send("User updated successfully");
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
  updateUser,
  deleteUser,
  getUserById
}