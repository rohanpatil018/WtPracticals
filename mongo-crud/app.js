const express=require("express");

const app=express() //instance for express

//Improt UserModel File 
const UserModel=require('./usermodel.js')
app.get('/',(req,res)=>{
    res.send("hey");

})
app.get('/create', async (req,res)=>{
    let createduser=await UserModel.create({
        name:"Rohan",
        username:"rohanpatil018",
        email:"rohanj@gmail.com"
    })

    res.send(createduser);
    

})
app.get('/update', async (req,res)=>{
    const updateUser=await UserModel.findOneAndUpdate({username:"rohanpatil018"},{name:"Rohan Patil"},{new:true});
    res.send(updateUser);
    
})
app.get('/read', async (req,res)=>{
    const user=await UserModel.find();

    res.send(user);
    
})
app.get('/delete', async (req,res)=>{
    const userdelete=await UserModel.findOneAndDelete({name:"Rohan"});

    res.send(userdelete);
    
})

app.listen(3000);