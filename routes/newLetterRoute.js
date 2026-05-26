import express from "express";
import {
  createNewsLetter,
  deleteNewsLetter,
  getNewsLetter,
  getNewsLetterById,
} from "../controllers/newsLetterController.js";
import authMiddleware from "../middleware/authMiddleware.js";

const newLetterRoute = express.Router();

newLetterRoute.post("/create", createNewsLetter);
newLetterRoute.get("/get", authMiddleware, getNewsLetter);
newLetterRoute.get("/get/:id", authMiddleware, getNewsLetterById);
newLetterRoute.delete("/delete/:id", authMiddleware, deleteNewsLetter); // ✅ fixed

export default newLetterRoute;