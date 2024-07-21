import Ourexpertise from "../models/OurexpertiseModel.js";
import fs from 'fs';
import path from 'path';

// Create a new Ourexpertise
const addOurexpertise = async (req, res) => {
    const { name,content } = req.body;
    const image = req.file ? req.file.filename : null;

    try {
        const newOurexpertise = new Ourexpertise({ name,content, image });
        await newOurexpertise.save();
        res.json({ success: true, message: "added successfully." });
    } catch (error) {
        console.error("Error creating:", error);
        res.status(500).json({ success: false, message: "Failed to add." });
    }
};

// Update an existing Ourexpertise
const updateOurexpertise = async (req, res) => {
    const ourexpertiseId = req.params.id;
    const { name, content } = req.body;
    const image = req.file ? req.file.filename : null;

    try {
        const ourexpertise = await Ourexpertise.findById(ourexpertiseId);
        if (!ourexpertise) return res.status(404).json({ success: false, message: "Expertise not found." });

        if (image && Ourexpertise.image) {
            fs.unlink(path.join('uploads', ourexpertise.image), (err) => {
                if (err) console.error("Failed to delete image:", err);
            });
        }

        ourexpertise.name = name;
        ourexpertise.content = content;
        if (image) ourexpertise.image = image;

        await ourexpertise.save();
        res.json({ success: true, message: "updated successfully." });
    } catch (error) {
        console.error("Error updating:", error);
        res.status(500).json({ success: false, message: "Failed to update." });
    }
};

export { addOurexpertise, updateOurexpertise };
