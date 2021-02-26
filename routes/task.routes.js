const express = require('express')
const route = express.Router()

const { 
    getTasks,
    createTask, 
    deleteTask
} = require('../controllers/task.controller')

route.get('/tasks', getTasks)
route.post('/task', createTask)
route.delete('/:taskId', deleteTask)

module.exports = route;