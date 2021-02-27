const mongoose = require("mongoose");
const Project = require("../models/Project.model");
const Task = require("../models/Task.model")

mongoose
  .connect("mongodb://localhost/project-api", {
    useCreateIndex: true,
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then((res) => {
    Project.create({
      title: "First Project",
      description: "This is our first project",
    }).then((res) => {
      Task.create({
        title: "First Task",
        description: "This is our first Task",
        status: "encantado"
      }).then(() => mongoose.connection.close());
  });
  })
