import mongoose from "mongoose";

export const connectDB = async () => {
    await mongoose.connect('mongodb+srv://TWB:Twb123456@cluster0.c3ypot7.mongodb.net/Real_Estate').then(()=>console.log("Vivek Your DB Connected"));
}