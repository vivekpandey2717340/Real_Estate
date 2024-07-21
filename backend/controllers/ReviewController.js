import Review from "../models/ReviewModel.js";
import fs from 'fs';
import path from 'path';

// Create a new Review
const addReview = async (req, res) => {
    const { name,review } = req.body;
    const image = req.file ? req.file.filename : null;

    try {
        const newReview = new Review({ name,review, image });
        await newReview.save();
        res.json({ success: true, message: "added successfully." });
    } catch (error) {
        console.error("Error creating:", error);
        res.status(500).json({ success: false, message: "Failed to add." });
    }
};

// Update an existing Review
const updateReview = async (req, res) => {
    const reviewId = req.params.id;
    const { name, review } = req.body;
    const image = req.file ? req.file.filename : null;

    try {
        const review = await Review.findById(reviewId);
        if (!review) return res.status(404).json({ success: false, message: "Expertise not found." });

        if (image && Review.image) {
            fs.unlink(path.join('uploads', review.image), (err) => {
                if (err) console.error("Failed to delete image:", err);
            });
        }

        review.name = name;
        review.review = review;
        if (image) review.image = image;

        await review.save();
        res.json({ success: true, message: "updated successfully." });
    } catch (error) {
        console.error("Error updating:", error);
        res.status(500).json({ success: false, message: "Failed to update." });
    }
};

export { addReview, updateReview };
