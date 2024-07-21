import Blogs from "../models/BlogsModel.js";
import fs from 'fs';
import path from 'path';

// Create a new Blogs
const addBlogs = async (req, res) => {
    const { title,content } = req.body;
    const image = req.file ? req.file.filename : null;

    try {
        const newBlogs = new Blogs({ title,content, image });
        await newBlogs.save();
        res.json({ success: true, message: "Blogs added successfully." });
    } catch (error) {
        console.error("Error creating Blogs:", error);
        res.status(500).json({ success: false, message: "Failed to add Blogs." });
    }
};

// Update an existing Blogs
const updateBlogs = async (req, res) => {
    const blogsId = req.params.id;
    const { title, content } = req.body;
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
        if (image) blogs.image = image;

        await blogs.save();
        res.json({ success: true, message: "Blogs updated successfully." });
    } catch (error) {
        console.error("Error updating blogs:", error);
        res.status(500).json({ success: false, message: "Failed to update Blogs." });
    }
};

export { addBlogs, updateBlogs };
