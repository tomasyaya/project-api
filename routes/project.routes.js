const express = require("express");
const route = express.Router();
const {
  getProjects,
  getProject,
  updateProject,
  createProject,
  removeProject,
} = require("../controllers/project.controller");

route
  .get("/", getProjects)
  .get("/:projectId", getProject)
  .patch("/:projectId", updateProject)
  .post("/", createProject)
  .delete("/:projectId", removeProject);

module.exports = route;
