const mongoose = require("mongoose");
const Tasks = require("../models/Task.model");

mongoose
  .connect("mongodb://localhost/project-api", {
    useCreateIndex: true,
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then((res) => {
    Tasks.create({
      name: "First Tasks",
      description: "This is our first Tasks",
      status: "Open"
    }).then(() => mongoose.connection.close());
    
  });
