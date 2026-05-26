import express from "express"
import cors from "cors"
import dotenv from "dotenv"
import connectDb from "./config/db.js"
import authRoute from "./routes/authRoute.js"
import newLetterRoute from "./routes/newLetterRoute.js"


dotenv.config()

const app=express()

connectDb()

const PORT=process.env.PORT

app.use(cors())
app.use(express.json())



app.get("/",(req,res)=>{
    res.json("Api is running...")
})
app.use("/api/auth",authRoute)
app.use("/api/newletter",newLetterRoute)


app.listen(PORT,()=>{
 console.log(`SERVER IS RUNNING ON PORT ${PORT}`)
})