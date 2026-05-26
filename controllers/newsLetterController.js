import NewsLetter from "../models/newLetterModel.js";

export const createNewsLetter = async (req, res) => {
  try {
    const { email } = req.body;
    if (!email) {
      return res.json({
        message: "Enter your email",
      });
    }

    const exisitingEmail = await NewsLetter.findOne({ email });
    if (email) {
      return res.json({
        message: "You are already subscribed",
      });
    }

    const user = await NewsLetter.create({ email });
    res.json({
      message: "Thankyou for subscribing...",
      data: user,
    });
  } catch (error) {
    res.json(error.message);
  }
};




export const getNewsLetter=async(req,res)=>{
    try {
        const user=await NewsLetter.find()
        res.json({
            message:"Details fetched successfully",
            data:user
        })
    } catch (error) {
        res.json(error.message);
    }
}


export const getNewsLetterById=async(req,res)=>{
try {
    const user=await NewsLetter.findById(req.params.id)
    if(!user){
        return res.json({
            message:"This email doesn't exists"
        })
    }
    return res.json({
         message:"Details fetched successfully",
            data:user
    })
} catch (error) {
     res.json(error.message);
}
}


export const deleteNewsLetter=async(req,res)=>{
    try {
        const user=await NewsLetter.findByIdAndDelete(req.params.id)
        if(!user){
            return res.json({
                message:"This email doens't exists"
            })
        }
        res.json({
            message:"Email deleted successfully"
        })
    } catch (error) {
         res.json(error.message);
    }
}
