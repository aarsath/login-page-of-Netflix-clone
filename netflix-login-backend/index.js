const express = require("express");
const app = express();
const cors =require("cors")
const Email = "abdularsath79@gmail.com"
const Password = "12345678"
app.use(cors())
app.use(express.json())
app.get("/", (req, res) => {
    res.send("Netflix Login Backend is running!");
});
app.post("/",function(req,res){
    res.send("Validation email and password");
    if(req.body.Email === Email && req.body.Password === Password)
    {
        res.send(true)
    }
    else
    {
        res.send(false)
    }
})

app.listen(5000, function () {
    console.log("Port Running 5000....");
});
