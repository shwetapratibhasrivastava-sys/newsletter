import express from "express"
import { createNewsLetter, deleteNewsLetter, getNewsLetter, getNewsLetterById } from "../controllers/newsLetterController.js"


const newLetterRoute=express.Router()

newLetterRoute.post("/create",createNewsLetter)
newLetterRoute.get("/get",getNewsLetter)
newLetterRoute.get("/get/:id",getNewsLetterById)
newLetterRoute.delete("/delete",deleteNewsLetter)

export default newLetterRoute