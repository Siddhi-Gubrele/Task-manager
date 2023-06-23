// console.log('Task Manager App')

require("./db/connect.js");
const express = require("express");
const app = express();
const tasks = require("./routes/tasks.js");
const connectDB = require("./db/connect.js");
require("dotenv").config();

// middleware

app.use(express.json());
app.use(express.static("./public"));

// routes

app.use("/api/v1/tasks", tasks);

// app.get("/api/v1/tasks")          - get all tasks
// app.get("/api/v1/tasks/:id")      - get one task
// app.post("/api/v1/tasks")         - add one new task
// app.delete("/api/v1/tasks/:id")   - delete one task
// app.patch("/api/v1/tasks/:id")      - update one task

const port = 3000;

const start = async () => {
  try {
    await connectDB(process.env.MONGO_URI);
    app.listen(port, () => {
      console.log(`server listining to port ${port}...`);
    });
  } catch (error) {}
};
start();
