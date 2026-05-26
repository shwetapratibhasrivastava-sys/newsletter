import mongoose from "mongoose";



const newLetter=new mongoose.Schema({
    email:{
        type:String
    },
},{
    timestamps:true
})


const NewsLetter=mongoose.model("NewsLetter",newLetter)

export default NewsLetter