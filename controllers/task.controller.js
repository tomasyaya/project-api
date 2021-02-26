const Task = require("../models/Task.model");

exports.getTasks = async (req, res) => {
    try {
        const tasks = await Task.find()
        res.status(200).json({data:tasks})
    } catch (error) {
        res.status(400)
    }
}

exports.createTask = async (req, res) => {
    try {
        const newTask = await Task.create(req.body)
        res.status(200).json({data: newTask})
    } catch (error) {
        res.status(400)
    }
}

exports.deleteTask = async(req, res)=>{
    try {
        const {taskId} = req.params;
        await Task.findByIdAndDelete(taskId) ;
        res.status(200).json({data: {message: "delete task success"}})
    } catch (error) {
        res.status(400)
    }
}
