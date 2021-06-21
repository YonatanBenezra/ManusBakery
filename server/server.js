const express = require('express'); 
const app = express(); 
const cors = require('cors');
const mongoose = require('mongoose');

app.use(cors())
app.use(express.json());

mongoose.connect("mongodb+srv://Flandechocolate:Flandechocolate@datacluster.tp3tc.mongodb.net/postsDatabase"); 

app.use("/", require("./routes/index"))
app.listen(3001, function() { 
  console.log(`Server listening on port 3001.`);
});