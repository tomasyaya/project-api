const express = require("express");
const route = express.Router();
const {
  getTasks,
  getTask,
  updateTask,
  createTask,
  removeTask,
} = require("../controllers/task.controller");

route
  .get("/", getTasks)
  .get("/:taskId", getTask)
  .patch("/:taskId", updateTask)
  .post("/", createTask)
  .delete("/:taskId", removeTask);

module.exports = route;
