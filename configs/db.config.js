const mongoose = require("mongoose");

mongoose
  .connect("mongodb://localhost/project-api", {
    useCreateIndex: true,
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then((res) => console.log("connected to mongoose"));
