const roleData = require("../models/roles.json")

const getAllRole = (req, res) => {
  res.json(res.paginatedResults);
}

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

  const filteredRoles = roleData.filter(role => role.roleId !== id);

  if (filteredRoles.length < roleData.length) {
    roleData = filteredRoles;
    res.status(200).send("Success Deleted");
  }else{
    res.status(404).send("Role not found");
  }


}
module.exports = {
  getAllRole,
  createNewRole,
  updateDesciption,
  deleteRole
}