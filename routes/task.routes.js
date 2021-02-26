const express = require("express");
const route = express.Router();
const {
  removeTask,
  createTask
} = require("../controllers/task.controller");

route
  .post("/:projectId", createTask)
  .delete("/:taskId", removeTask)
  
;

module.exports = route;