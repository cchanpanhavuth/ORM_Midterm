const express = require("express");
const app = express();
const dotenv = require('dotenv');

dotenv.config();
const port = process.env.PORT;

const commentRoute = require("./src/routes/commentRoute")
const contentRoute = require("./src/routes/contentRoute")
app.use(express.json())

// Comments api
app.use("/v1", commentRoute)
app.use("/v1", contentRoute)



app.get("/", (req, res) => {
  const style = "stylesheet"
  res.send("Welcome to Server.")
})


// hosting port
app.listen(port, () =>{
    console.log(`Server started on port http://localhost:${port}`);
})