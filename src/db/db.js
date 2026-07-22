const mongoose =require('mongoose');

function connectDB(){
    mongoose.connect(process.env.MONGODB_URI)//CLOUD database ke liye hide krna zarurui hai 
    .then(()=>{
        console.log("MongoDB connected");
    })
    .catch((err)=>{
        console.log("MongoDB connection error:",err);
    })
}

module.exports=connectDB;