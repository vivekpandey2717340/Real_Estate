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

const LatestBanner = async (req, res) => {
    try {
      const banner = await Banner.findOne().sort({ createdAt: -1 });
  
      if (!banner) {
        return res.status(404).json({ message: 'No banners found' });
      }
  
      res.status(200).json(banner);
    } catch (error) {
      res.status(500).json({ message: 'Error fetching latest banner', error });
    }
  };
export { addBanner, updateBanner, LatestBanner };
