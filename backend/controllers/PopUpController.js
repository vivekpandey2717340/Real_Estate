import PopUp from "../models/PopUpModel.js";
import fs from 'fs';
import path from 'path';

// Create a new PopUp
const addPopUp = async (req, res) => {
    const { title } = req.body;
    const image = req.file ? req.file.filename : null;

    try {
        const newPopup = new PopUp({ title, image });
        await newPopup.save();
        res.json({ success: true, message: "PopUp added successfully." });
    } catch (error) {
        console.error("Error creating PopUp:", error);
        res.status(500).json({ success: false, message: "Failed to add PopUp." });
    }
};

// Update an existing Popup
const updatePopUp = async (req, res) => {
    const popupId = req.params.id;
    const { title } = req.body;
    const image = req.file ? req.file.filename : null;

    try {
        const popup = await PopUp.findById(popupId);
        if (!popup) return res.status(404).json({ success: false, message: "Popup not found." });

        if (image && popup.image) {
            fs.unlink(path.join('uploads', popup.image), (err) => {
                if (err) console.error("Failed to delete image:", err);
            });
        }

        popup.title = title;
        if (image) popup.image = image;

        await popup.save();
        res.json({ success: true, message: "Popup updated successfully." });
    } catch (error) {
        console.error("Error updating Popup:", error);
        res.status(500).json({ success: false, message: "Failed to update Popup." });
    }
};

export { addPopUp, updatePopUp };
