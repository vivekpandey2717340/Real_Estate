import UserModel from "../models/UserModel.js";
import jwt from "jsonwebtoken"
import bcrypt from "bcrypt"
import validator from "validator"



//login user
const loginUser = async (req,res) => {
      const { email,password } = req.body;
      try {
        const user = await UserModel.findOne({email});
        if (!user){
            return res.json({success:false,message:"User Doesn't exist"})
        }
        
        const isMatch = await bcrypt.compare(password,user.password);
        if (!isMatch){
          return res.json({success:false,message:"Invalid credentials"})
        }
        const token = createToken(user._id)
        res.json({sucess:true,token});
    
      } catch (error) {
        console.log(error);
        res.json({success:false,message:"Error"})
      } 


}
const createToken = (id) => {
      return jwt.sign({id},process.env.JWT_SECRET)
}

//register user
const registerUser = async (req, res) => {
   const {name,password,email} = req.body;
   try {
    //checking is user already exists
    const exists = await await UserModel.findOne({email});
    if(exists){
        return res.json({success:false,message:"User already exists"})
    }
    //validating email format & strong password
    if (!validator.isEmail(email)){
        return res.json({success:false,message:"Please enter a valid email"})
    }
    //Checking lenth of password 
    if (password.length<8) {
        return res.json({success:false,message:"Please enter a strong password"})  
    }
    //hashing user password 
    const salt = await bcrypt.genSalt(10)
    const hashedpassword = await bcrypt.hash(password,salt);

    const newUser = new UserModel({
        name:name,
        email:email,
        password:hashedpassword
    })
      
    const user = await newUser.save()
    const token = createToken(user._id)
    res.json({sucess:true,token});

   } catch (error) {
        console.log(error);
        res.json({success:false,message:"Error"})
   }   

}
// List all users
const listUser = async (req, res) => {
  try {
    const users = await UserModel.find({});
    res.json({ success: true, users });
  } catch (error) {
    console.log(error);
    res.json({ success: false, message: "Error" });
  }
};

// Delete user
const deleteUser = async (req, res) => {
  const { userId } = req.params;
  try {
    const user = await UserModel.findByIdAndDelete(userId);
    if (!user) {
      return res.json({ success: false, message: "User not found" });
    }
    res.json({ success: true, message: "User deleted successfully" });
  } catch (error) {
    console.log(error);
    res.json({ success: false, message: "Error" });
  }
};
// count users
const countUser = async (req, res) => {
  try {
    const userCount = await UserModel.countDocuments({});
    res.json({ success: true, userCount });
  } catch (error) {
    console.log(error);
    res.json({ success: false, message: "Error" });
  }
};
export {loginUser,registerUser,listUser,deleteUser, countUser};