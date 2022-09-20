//import routes

const express = require("express");
const todo = require("./models/todo.js");
const user = require("./models/user.js");
const cors = require("cors");
//create the connection
const db = require("./models");
const app = express();

// RequestHandler creates a separate execution context using domains, so that every
// transaction/span/breadcrumb is attached to its own Hub instance
app.use(express.json());
app.use(express.static("public"));
app.use(cors());
// TracingHandler creates a trace for every incoming request

//define routes
// app.use("/api/v1/products", products);
// app.use("/api/v1/reviews", reviews);
//API documentation route

app.get("/", async (req, res) => {
  const result = await db.Todo.findAll({
    include: [
      {
        model: db.User,
      },
    ],
  });
  res.json({ result });
});

app.listen(3000, () => {
  console.log(`listening at 3000`);
});
