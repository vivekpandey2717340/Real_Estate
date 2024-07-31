import mongoose from "mongoose";

const BlogsSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    content: {
        type: String,
        required:true
    },
    category: {
        type: String,
        required:true
    },
    image: {
        type: String,
        required: true
    }
}, { timestamps: true });

const Blogs  = mongoose.model("Blogs", BlogsSchema);

export default Blogs;