import Banner from "../models/BannerModel.js";
import fs from 'fs';
import path from 'path';

// Create a new banner
const addBanner = async (req, res) => {
    const { title } = req.body;
    const image = req.file ? req.file.filename : null;

    try {
        const newBanner = new Banner({ title, image });
        await newBanner.save();
        res.json({ success: true, message: "Banner added successfully." });
    } catch (error) {
        console.error("Error creating banner:", error);
        res.status(500).json({ success: false, message: "Failed to add banner." });
    }
};

// Update an existing banner
const updateBanner = async (req, res) => {
    const bannerId = req.params.id;
    const { title } = req.body;
    const image = req.file ? req.file.filename : null;

    try {
        const banner = await Banner.findById(bannerId);
        if (!banner) return res.status(404).json({ success: false, message: "Banner not found." });

        if (image && banner.image) {
            fs.unlink(path.join('uploads', banner.image), (err) => {
                if (err) console.error("Failed to delete image:", err);
            });
        }

        banner.title = title;
        if (image) banner.image = image;

        await banner.save();
        res.json({ success: true, message: "Banner updated successfully." });
    } catch (error) {
        console.error("Error updating banner:", error);
        res.status(500).json({ success: false, message: "Failed to update banner." });
    }
};
//// latest banner show
export const LatestBanner = async (req, res) => {
  try {
      const latestBanner = await Banner.findOne().sort({ createdAt: -1 }); // Assuming banners have a createdAt field
      if (latestBanner) {
          res.json({
              image: `http://localhost:4000/images/${latestBanner.image}`, // Adjust based on how you store image paths
              title: latestBanner.title,
          });
      } else {
          res.status(404).json({ message: 'No banner found' });
      }
  } catch (error) {
      res.status(500).json({ message: 'Server error', error });
  }
};

export { addBanner, updateBanner };
