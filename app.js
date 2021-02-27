const express = require("express");
const app = express();
const cors = require("cors")

app.use(
    cors({
      credentials: true,
      origin: ['http://localhost:4000'] 
    })
  );

// middleware configurations
require("./configs/middleware.config")(app);

// mongodb
require("./configs/db.config");

const projectRoutes = require("./routes/project.routes");
const taskRoutes = require("./routes/task.router")
app.use("/projects", projectRoutes);
app.use("/tasks", taskRoutes)

app.listen(4000, () => console.log("server running"));
