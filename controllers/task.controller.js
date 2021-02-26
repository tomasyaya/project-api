const Task = require("../models/Task.model");
const Project = require("../models/Project.model");

exports.createTask = async (req, res) => {
  try {
    const { projectId } = req.params;
    const newTask = await Task.create(req.body);
    await Project.findByIdAndUpdate(projectId, {
      $addToSet: { tasks: newTask },
    });
    res.status(200).json( newTask );
  } catch (e) {
    res.status(400);
  }
};

exports.removeTask = async (req, res) => {
  try {
    const { taskId } = req.params
    const task = await Task.findByIdAndDelete( taskId )
    res.status(200).json( { message: "delete succesfull" } );
  } catch (e) {
    res.status(400);
  }
};
