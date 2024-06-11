const roleData = require("../models/roles.json")

const getAllRole = (req, res) => {
  res.json(res.paginatedResults);
}

const getRoleById = (req, res) => {
  const { params } = req;
  const id = parseInt(params.id);

  const role = roleData.find(role => role.roleId === id);

  if (role) {
      res.status(200).json(role); // Use JSON format for response data
  } else {
      res.status(404).send("Role not found");
  }
};

const createNewRole = (req, res) => {
  const body = req.body;
  console.log({ body })
  const { roleName, roleDescription} = body;
  roleData.push({ roleId: roleData.length+1, roleName, roleDescription})
  res.status(201).send("Success Created")
}
const updateDesciption = (req, res) => {
  const { body, params } = req;
  const id = parseInt(params.id);
  const { roleDescription } = body;

  let roleFound = false;

  roleData.forEach(role => {
    if (role.roleId === id) {
      role.roleDescription = roleDescription;
      roleFound = true;
    }
  });

  if (roleFound) {
    res.status(204).send("Role Description updated successfully");
  } else {
    res.status(404).send("Role not found");
  }
};


const deleteRole = (req, res) => {
  const {params} = req;
  console.log({params})
  const id = parseInt(params.id)

  const roleIndex = roleData.findIndex(role => role.roleId === id);

  if (roleIndex !== -1) {
    roleData.splice(roleIndex, 1);
    res.status(200).send("Role deleted successfully");
  } else {
    res.status(404).send("Role not found");
  }
}
module.exports = {
  getAllRole,
  createNewRole,
  updateDesciption,
  deleteRole,
  getRoleById
}