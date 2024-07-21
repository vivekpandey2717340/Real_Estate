import mongoose from "mongoose";

const OurexpertiseSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    content: {
        type: String,
        required:true
    },
    image: {
        type: String,
        required: true
    }
}, { timestamps: true });

const Ourexpertise  = mongoose.model("Ourexpertise", OurexpertiseSchema);

export default Ourexpertise;