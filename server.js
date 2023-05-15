

const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const path= require('path'); 
const nodemailer = require('nodemailer');
const port =  process.env.PORT || 3000;
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, 'public')));
app.use('*',(req,res)=>{
    res.status(200).sendFile(path.join(__dirname+('/index.html')));
})

app.listen(port, () => {
    console.log("Server started at port: " + port);
  });