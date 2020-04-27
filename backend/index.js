const express = require("express");
const fs = require('fs');
const cors = require("cors");
const multer = require('multer');
const mongoose = require("mongoose");
const app = express();
const connection = mongoose.connect('mongodb://localhost:27017/myapp', {useNewUrlParser: true});
const router = express.Router();
const fileRoute = require('./routes/fileData');
//upload
const port = 3000;

const server = app.listen(port, function () {
	console.log(`server running on port 3000`);
});

mongoose.connection.on("open", err => {
    if (err) console.log("Error connecting to our mongo database");
    console.log("Connected to mongo database successfully");
  });

app.use(cors());
app.use(multer().any());

app.use('/api', router);
app.use('/api/process-file', fileRoute);
