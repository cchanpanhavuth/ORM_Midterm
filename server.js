const express = require('express');
const dotenv = require('dotenv');

dotenv.config();


const app = express();
const port = process.env.PORT;

app.use("/assets", express.static("public"));


app.listen(port, () =>{
    console.log(`Server started on port http://localhost:${port}`);
})