import mongoose from "mongoose"

const userSchema = new mongoose.Schema({
    name:{type:String,required:true},
    email:{type:String,requried:true,unique:true},
    password:{type:String,requried:true},
    Wishlist:{type:Object,default:{}} 
},{minimize:false })

const UserModel = mongoose.models.user || mongoose.model("user",userSchema);

export default UserModel;