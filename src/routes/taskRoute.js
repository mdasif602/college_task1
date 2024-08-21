const express = require("express")
const taskRoute = express.Router()
const taskContollers = require("../controllers/taskcontrollers")

taskRoute.post("/tasks", taskContollers.addTask)
taskRoute.get("/tasks", taskContollers.getAllTask)
taskRoute.get("/tasks/:id", taskContollers.getOneTask)
taskRoute.put("/tasks/:id", taskContollers.updateTask)
taskRoute.delete("/tasks/:id", taskContollers.deleteTask)

module.exports = taskRoute