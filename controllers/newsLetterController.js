import NewsLetter from "../models/newLetterModel.js";

export const createNewsLetter = async (req, res) => {
  try {
    const { email } = req.body;

    if (!email) {
      return res.status(400).json({
        message: "Enter your email",
      });
    }

    const user = await NewsLetter.create({ email });

    res.status(201).json({
      message: "Thank you for subscribing...",
      data: user,
    });
  } catch (error) {
    // Handle duplicate key error
    if (error.code === 11000) {
      return res.status(400).json({
        message: "You are already subscribed",
      });
    }
    // Handle validation errors
    if (error.name === "ValidationError") {
      const messages = Object.values(error.errors).map((err) => err.message);
      return res.status(400).json({
        message: messages.join(", "),
      });
    }
    res.status(500).json({
      message: error.message,
    });
  }
};



export const getNewsLetter = async (req, res) => {
  try {
    const users = await NewsLetter.find();

    res.status(200).json({
      message: "Details fetched successfully",
      data: users,
      
    });
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};


export const getNewsLetterById = async (req, res) => {
  try {
    const user = await NewsLetter.findById(req.params.id);

    if (!user) {
      return res.status(404).json({
        message: "This email doesn't exist",
      });
    }

    res.status(200).json({
      message: "Details fetched successfully",
      data: user,
    });
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};



export const deleteNewsLetter = async (req, res) => {
  try {
    const user = await NewsLetter.findByIdAndDelete(req.params.id);

    if (!user) {
      return res.status(404).json({
        message: "This email doesn't exist",
      });
    }

    res.status(200).json({
      message: "Email deleted successfully",
    });
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};