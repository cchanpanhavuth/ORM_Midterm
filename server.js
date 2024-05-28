const express = require("express");
const userRoutes = require("./src/routes/userRoutes")
const app = express();
const dotenv = require('dotenv');

dotenv.config();
const port = process.env.PORT;

app.use(express.json())
app.use("/assets", express.static("public"))
app.use("/v1",userRoutes)
app.get("/", (req, res) => {
  const style = "stylesheet"
  res.send("<link rel='"+ style +"' href='/assets/css/styles.css'><h1 style='color: red'><img src='/assets/img/landscape.webp'>NodeJS Project</h1>")
})

app.listen(port, () =>{
    console.log(`Server started on port http://localhost:${port}`);
})