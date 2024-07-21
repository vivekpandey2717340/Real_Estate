import mongoose from "mongoose";

const ReviewSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    review: {
        type: String,
        required:true
    },
    image: {
        type: String,
        required: true
    }
}, { timestamps: true });

const Review = mongoose.model("Review", ReviewSchema);

export default Review;