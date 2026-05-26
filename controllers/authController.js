import Auth from "../models/authModel.js";

export const register = async (req, res) => {
  try {
    const { name, email, password } = req.body;
    if (!name || !email || !password) {
      return res.json({
        message: "All feilds are required",
      });
    }

    const existingUser = await Auth.findOne({ email });
    if (existingUser) {
      return res.json({
        message: "User already exists",
      });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const user = await Auth.create({ name, email, password: hashedPassword });
    res.json({
      message: "User created successfully",
      data: user,
    });
  } catch (error) {
    res.json(error.message);
  }
};




