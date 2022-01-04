const express = require("express");
const app = express();
app.use(express.json());
const userModel = require("./model/user")
const port = 4000;
const mongoose = require("mongoose"); //this is for dealing with mongoDB

mongoose.connect("mongodb://localhost:27017/dcs")
.then(()=> console.log("Connected mongoDB"));


app.get("/api/fetch",async(req,res)=>{
    const userList = await userModel.find();
    if(userList.length=== 0)
    {
        return res.json({data:"No data in full stack"});
    }
    else
    {
        return res.json({username:userList});
        // return res.json({username:userList[0].username,password:userList[0].password,id:userList[0].id});
    }
});


app.post("/login",async(req,res)=>{
    const username = req.body.username;
    const password = req.body.password;

    const verify_user = await userModel.findOne({username:username,password:password});
    if(verify_user.length === 0)
    {
        return res.json({data:"no such user"});
    }
    else
    {
        return res.json({data:"user exist"});
    }
});

app.post("/api/register",async(req,res)=>{
    const user = req.body;
    userModel.create(user);
    return res.json({data:"added succesfully"});
});

app.put("/update/:uname",async(req,res)=>{
    const username = req.params.uname;
    const password = req.body.password;
    const update = await userModel.findOneAndUpdate({username:username},{password:password},{new:true});
    return res.json({
        data:"updated succesfully"
    })
});

app.delete("/delete/:uname",async(req,res)=>{
    const username = req.params.uname;
    const deleteUser = await userModel.findOneAndDelete({username:username});
    return res.json({
        data:"deleted user",
        username:username,
    });
});

app.listen(port,()=> console.log("Listenng on port 4000"));