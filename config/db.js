import mongoose from "mongoose";


const connectDb=async(req,res)=>{
 if(!process.env.MONGO_URI){
    return console.log("MONGO URI is not accessible")
 }
 try {
    await mongoose.connect(process.env.MONGO_URI)
    console.log("Mongodb connected....")
 } catch (error) {
    console.log(error.message)
 }

}

export default connectDb