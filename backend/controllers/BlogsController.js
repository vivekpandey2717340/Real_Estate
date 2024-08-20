import Blogs from "../models/BlogsModel.js";
import fs from 'fs';
import path from 'path';


const addBlogs = async (req, res) => {
    const { title,content,category } = req.body;
    const image = req.file ? req.file.filename : null;

    try {
        const newBlogs = new Blogs({ title,content,category, image });
        await newBlogs.save();
        res.json({ success: true, message: "Blogs added successfully." });
    } catch (error) {
        console.error("Error creating Blogs:", error);
        res.status(500).json({ success: false, message: "Failed to add Blogs." });
    }
};


const updateBlogs = async (req, res) => {
    const blogsId = req.params.id;
    const { title, content,category } = req.body;
    const image = req.file ? req.file.filename : null;

    try {
        const blogs = await Blogs.findById(blogsId);
        if (!blogs) return res.status(404).json({ success: false, message: "Blogs not found." });

        if (image && Blogs.image) {
            fs.unlink(path.join('uploads', blogs.image), (err) => {
                if (err) console.error("Failed to delete image:", err);
            });
        }

        blogs.title = title;
        blogs.content = content;
        blogs.category = category;
        if (image) blogs.image = image;

        await blogs.save();
        res.json({ success: true, message: "Blogs updated successfully." });
    } catch (error) {
        console.error("Error updating blogs:", error);
        res.status(500).json({ success: false, message: "Failed to update Blogs." });
    }
};

const listBlogs = async (req, res) => {
    try {
        const blogs = await Blogs.find();
        res.json({ success: true, blogs });
    } catch (error) {
        console.error("Error fetching Blogs:", error);
        res.status(500).json({ success: false, message: "Failed to fetch Blogs." });
    }
};
const deleteBlogs = async (req, res) => {
    const blogsId = req.params.id;

    try {
       
        const blog = await Blogs.findById(blogsId);
        if (!blog) {
            return res.status(404).json({ success: false, message: "Blog not found." });
        }

        if (blog.image) {
            const imagePath = path.join('uploads', blog.image);
            fs.unlink(imagePath, (err) => {
                if (err) {
                    console.error("Failed to delete image:", err);
                }
            });
        }

        await Blogs.findByIdAndDelete(blogsId);

        res.json({ success: true, message: "Blog deleted successfully." });
    } catch (error) {
        console.error("Error deleting blog:", error);
        res.status(500).json({ success: false, message: "Failed to delete blog." });
    }
};

const getBlogsById = async (req, res) => {
    const blogsId = req.params.id;

    try {
        const blog = await Blogs.findById(blogsId);
        if (!blog) return res.status(404).json({ success: false, message: "Blog not found." });
        res.json({ success: true, blog });
    } catch (error) {
        console.error("Error fetching blog:", error);
        res.status(500).json({ success: false, message: "Failed to fetch blog." });
    }
};
const countBlogs = async (req, res) => {
    try {
        const count = await Blogs.countDocuments();
        res.json({ success: true, count });
    } catch (error) {
        console.error("Error counting Blogs:", error);
        res.status(500).json({ success: false, message: "Failed to count Blogs." });
    }
};


export { addBlogs, updateBlogs, listBlogs, deleteBlogs, getBlogsById, countBlogs };
