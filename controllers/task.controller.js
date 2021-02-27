const Task = require("../models/Task.model")

exports.getTasks = async (req, res) => {
    try {
      const tasks = await Task.find();
      res.status(200).json({ data: tasks });
    } catch (e) {
      res.status(400);
    }
  };
  
  exports.getTask = async (req, res) => {
    try {
      const { taskId } = req.params;
      const task = await Task.findById(taskId);
      res.status(200).json({ data: task });
    } catch (e) {
      res.status(400);
    }
  };
  
  exports.updateTask = async (req, res) => {
    try {
      const { taskId } = req.params;
      const updatedTask = await Task.findByIdAndUpdate(
        taskId,
        req.body,
        { new: true }
      );
      res.status(200).json({ data: updatedTask });
    } catch (e) {
      res.status(400);
    }
  };
  
  exports.createTask = async (req, res) => {
    try {
      const newTask = await Task.create(req.body);
      res.status(200).json({ data: newTask });
    } catch (e) {
      res.status(400);
    }
  };
  
  exports.removeTask = async (req, res) => {
    try {
      const { taskId } = req.params;
      await Task.findByIdAndDelete(taskId);
      res.status(200).json({ data: { message: "delete succesfull" } });
    } catch (e) {
      res.status(400);
    }
  };
  
