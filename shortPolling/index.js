const express = require("express");

const app = express();

let data = "initial data";


app.get("/", async (req,res)=>{
    res.sendFile(__dirname + '/index.html');
})

app.get("/getData", async (req, res) => {
    res.send({
      data,
    });
  });
//Post Or update from client Side but no Db that's why i am taking it
app.get("/updateData", async(req,res)=>
{
    data = 'Updated data';
    res.send({
        data
    });
})


app.listen(5011,()=>{
    console.log(`Server is running on Port 5011`);
});