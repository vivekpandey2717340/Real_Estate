import PropertyModel from "../models/PropertyModel.js";
import fs from 'fs';

// Add Property
const addProperty = async (req, res) => {
    const {
        title, content, propertyType, sellingType, bathroom, kitchen, hall, bhk, propertyStatus, bedroom,
        balcony, area, floor, price, city, state, totalFloor, areaSize, address, description,builtYear,Parking,roadAccess,
        direction,category,
       
    } = req.body;

    // Collect file names from req.files
    const images = req.files['images'] ? req.files['images'][0].path : null;
        const image2 = req.files['image2'] ? req.files['image2'][0].path : null;
        const image3 = req.files['image3'] ? req.files['image3'][0].path : null;
        const image4 = req.files['image4'] ? req.files['image4'][0].path : null;
        const video = req.files['video'] ? req.files['video'][0].path : null;
        const droneShootVideo = req.files['droneShootVideo'] ? req.files['droneShootVideo'][0].path : null;
        const floorPlanImage = req.files['floorPlanImage'] ? req.files['floorPlanImage'][0].path : null;
        const groundFloorPlanImage = req.files['groundFloorPlanImage'] ? req.files['groundFloorPlanImage'][0].path : null;


    // Create a new Property instance
    const Property = new PropertyModel({
        title,
        content,
        propertyType,
        sellingType,
        bathroom,
        kitchen,
        hall,
        bhk,
        propertyStatus,
        bedroom,
        balcony,
        area,
        floor,
        price,
        city,
        state,
        totalFloor,
        areaSize,
        address,
        description,
        roadAccess,
        direction,
        Parking,
        builtYear,
        category,
        images,
        image2,
        image3,
        image4,
        video,
        droneShootVideo,
        floorPlanImage,
        groundFloorPlanImage
       });

    try {
        // Save the property to the database
        await Property.save();
        res.json({ success: true, message: "Property added successfully." });
    } catch (error) {
        console.error("Error adding property:", error);
        res.status(500).json({ success: false, message: "Failed to add property." });
    }
};

// List all properties
const listProperty = async (req, res) => {
    try {
        const {
            sellingType, category, location, minPrice, maxPrice, propertyType
        } = req.query;

        const filters = {};
        if (sellingType) filters.sellingType = sellingType;
        if (category) filters.propertyType = category;
        if (location) filters.city = location;
        if (minPrice) filters.price = { ...filters.price, $gte: minPrice };
        if (maxPrice) filters.price = { ...filters.price, $lte: maxPrice };
        if (propertyType) filters.propertyType = propertyType;

        const properties = await PropertyModel.find(filters);

        // Define the base URL for images
        const baseUrl = 'http://localhost:4000/images/';

        // Prepend the base URL to each image and remove 'uploads' part
        properties.forEach(property => {
            if (property.images && Array.isArray(property.images)) {
                property.images = property.images.map(image => {
                    // Remove 'uploads\\' or 'uploads/' and replace with base URL
                    return image.replace(/(\\|\/)?uploads(\\|\/)/, baseUrl);
                });
            }
            if (property.image2 && Array.isArray(property.image2)) {
                property.image2 = property.image2.map(image => {
                    // Remove 'uploads\\' or 'uploads/' and replace with base URL
                    return image.replace(/(\\|\/)?uploads(\\|\/)/, baseUrl);
                });
            }
            if (property.image3 && Array.isArray(property.image3)) {
                property.image3 = property.image3.map(image => {
                    // Remove 'uploads\\' or 'uploads/' and replace with base URL
                    return image.replace(/(\\|\/)?uploads(\\|\/)/, baseUrl);
                });
            }
            if (property.image4 && Array.isArray(property.image4)) {
                property.image4 = property.image4.map(image => {
                    // Remove 'uploads\\' or 'uploads/' and replace with base URL
                    return image.replace(/(\\|\/)?uploads(\\|\/)/, baseUrl);
                });
            }
        });

        res.json({ success: true, data: properties });
    } catch (error) {
        console.error("Error listing properties:", error);
        res.status(500).json({ success: false, message: "Failed to retrieve properties." });
    }
};


// Remove property
const removeProperty = async (req, res) => {
    try {
        const property = await PropertyModel.findById(req.body.id);

        // Remove images from filesystem
        const deleteFiles = async (files) => {
            for (const file of files) {
                if (file) {
                    await fs.promises.unlink(`uploads/${file}`, (err) => {
                        if (err) console.error(`Failed to delete file: ${file}`, err);
                    });
                }
            }
        };

        // Delete property images and related files
        await deleteFiles(property.images);
        await deleteFiles([property.video, property.droneShootVideo, property.floorPlanImage, property.groundFloorPlanImage]);

        // Remove property from database
        await PropertyModel.findByIdAndDelete(req.body.id);
        
        res.json({ success: true, message: "Property removed successfully." });
    } catch (error) {
        console.error("Error removing property:", error);
        res.status(500).json({ success: false, message: "Failed to remove property." });
    }
}
// count users
const countProperty = async (req, res) => {
    try {
      const propertyCount = await PropertyModel.countDocuments({});
      res.json({ success: true, propertyCount });
    } catch (error) {
      console.log(error);
      res.json({ success: false, message: "Error" });
    }
}
export { addProperty, listProperty, removeProperty,countProperty  };
