const express = require("express");

const app = express();


app.use('/css' ,express.static('css'));

app.use('/images', express.static('images'))

app.get("/", function(req,res){
  res.sendFile(__dirname + "/index.html")
});

app.listen(3000, function(){
  console.log("Listening")
});
