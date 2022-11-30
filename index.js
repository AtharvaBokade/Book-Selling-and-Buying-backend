const express = require("express");
const app = express();
const cors = require("cors");
const mongoose = require("mongoose");
app.use(express.json());
app.use(cors());
const dataModel = require("./models/user_info");
const dataModel1=require("./models/book_info");
var ObjectId = require('mongodb').ObjectId;
const dotenv=require('dotenv');
dotenv.config();
const port = process.env.PORT || 6000

mongoose.connect("mongodb+srv://atharva:atharva1@booksb.kettshh.mongodb.net/?retryWrites=true&w=majority",
 {
    useNewUrlParser: true,
});

app.post("/add_user", async (req,res)=>{
    const userName = req.body.userName;
    const email = req.body.email;
    
    
const data = new dataModel({userName:userName,email:email});
try{
    await data.save();
    res.send("Data added");
} catch(err){
    console.log(err);
}
});

app.post("/add_book", async (req,res)=>{
    const bookName = req.body.bookName;
    const authorName = req.body.authorName;
    const year_edition = req.body.year_edition;
    const sellerCity = req.body.sellerCity;
    const subject = req.body.subject;
    const sellerName1 = req.body.sellerName1;
    const sellerEmail = req.body.sellerEmail;
    const sellerPhone = req.body.sellerPhone;
    const sellerPrice = req.body.sellerPrice;
    const originalPrice = req.body.originalPrice;
    const sellerState = req.body.sellerState;
    const imgLink1 = req.body.imgLink1;
    const imgLink2 = req.body.imgLink2;
    
    
const data = new dataModel1({bookName:bookName,authorName:authorName,year_edition:year_edition,sellerCity:sellerCity,subject:subject,sellerName1:sellerName1,sellerEmail:sellerEmail,sellerPhone:sellerPhone,originalPrice:originalPrice,sellerPrice:sellerPrice,sellerState:sellerState,imgLink1:imgLink1,ingLink2:imgLink2});
try{
    await data.save();
    res.send("Data added");
} catch(err){
    console.log(err);
}
});

app.get("/bookList",  (req,res)=>{
    
    dataModel1.find({},(err,result)=>{
   if(err){
       res.send(err);
   }
     res.send(result);
    });
   
   });

app.get("/getUser:email",  (req,res)=>{
    const email = req.params.email
    dataModel.find({email:req.params.email},(err,result,id)=>{
   if(err){
       res.send(err);
   }
     res.send({
        email:req.params.email,
        message:"Hello",
        user:result,


    });
     
    });
   
   });

   app.get("/getDetails:id",  (req,res)=>{
    const id = req.params.id
    dataModel1.find({_id:ObjectId(id)},(err,result,id)=>{
   if(err){
       res.send(err);
   }
     res.send({
        email:req.params.email,
        message:"Hello",
        user:result,


    });
     
    });
   
   });

app.listen(port, ()=>{
    console.log("Server running on port "+port);
});