// const mongoose=require('mongoose');

// const foodSchema=new mongoose.Schema({
//     name:{
//         type:String,
//         required:true,
//     },
//     video:{
//         type:String,// url store kenge ap file bhi database me store kr skte hain 
//         // lekin bhut gnda rhega aisa krna

//         required:true,
//     },
//     description:{
//         type:String,
//     },
//     foodPartner:{
//         type:mongoose.Schema.Types.ObjectId,
//         ref:"foodpartner"
//     },
//     likeCount:{
//         type:Number,
//         default:0
//     },savesCount:{
//         type:Number,
//         default:0
//     }
// })

// const foodModel=mongoose.model("food",foodSchema);
// module.exports=foodModel;


const mongoose = require("mongoose");

const foodSchema = new mongoose.Schema(
{
    name: {
        type: String,
        required: true,
    },

    video: {
        type: String,
        required: true,
    },

    description: {
        type: String,
    },

    foodPartner: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "foodpartner"
    },

    likeCount: {
        type: Number,
        default: 0
    },

    savesCount: {
        type: Number,
        default: 0
    },

    commentsCount: {
        type: Number,
        default: 0
    }

},
{
    timestamps: true
}
);


const foodModel = mongoose.model("food", foodSchema);

module.exports = foodModel;