const mongoose = require("mongoose");
const Project = require("../models/Project.model");

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
    }).then(() => mongoose.connection.close());
  });
