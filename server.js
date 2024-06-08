const express = require("express");
const commentRoute = require("./src/routes/commentRoute")
const contentRoute = require("./src/routes/contentRoute")
const userRoutes = require("./src/routes/userRoutes")
const app = express();
const dotenv = require('dotenv');

dotenv.config();
const port = process.env.PORT;

app.use(express.json())
app.use("/assets", express.static("public"))
app.use("/v1",userRoutes,commentRoute,contentRoute)
app.get("/", (req, res) => {
  const style = "stylesheet"
  res.send("Welcome to Server.")
})


// hosting port
app.listen(port, () =>{
    console.log(`Server started on port http://localhost:${port}`);
})