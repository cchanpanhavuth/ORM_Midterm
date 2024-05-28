const userData = require("../models/users.json")

const getAllUser = (req, res) => {
  const {query} = req;
  if(query.username) {
    res.send(userData.filter(u=> u.username == query.username))
  } else{
    res.send(userData);
  }
  
}

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

  const filteredUsers = userData.filter(user => user.userId !== id);

  if (filteredUsers.length < userData.length) {
    userData = filteredUsers;
    res.status(200).send("Success Deleted");
  }else{
    res.status(404).send("User not found");
  }


}
module.exports = {
  getAllUser,
  createNewUser,
  updatePassword,
  deleteUser
}