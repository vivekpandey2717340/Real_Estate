import PropertyModel from "../models/PropertyModel.js";
import fs from 'fs';
import path from 'path';
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
const deleteProperty = async (req, res) => {
    const propertyId = req.params.id;

    try {
        const property = await PropertyModel.findById(propertyId);
        if (!property) {
            return res.status(404).json({ success: false, message: "Property not found." });
        }

        // Fields that may contain single or multiple file paths
        const imageFields = [
            'images',
            'image2',
            'image3',
            'image4',
            'floorPlanImage',
            'groundFloorPlanImage',
            'video',
            'droneShootVideo'
        ];

        imageFields.forEach(field => {
            const filePaths = property[field];
            
            if (filePaths) {
                // Ensure filePaths is an array
                const paths = Array.isArray(filePaths) ? filePaths : [filePaths];
                
                paths.forEach(filePath => {
                    // Construct the absolute path to the file
                    const fullPath = path.join(process.cwd(), 'uploads', path.basename(filePath));
                    
                    fs.unlink(fullPath, (err) => {
                        if (err) {
                            console.error(`Failed to delete file at ${fullPath}:`, err);
                        }
                    });
                });
            }
        });

        await PropertyModel.findByIdAndDelete(propertyId);

        res.json({ success: true, message: "Property deleted successfully." });
    } catch (error) {
        console.error("Error deleting property:", error);
        res.status(500).json({ success: false, message: "Failed to delete property." });
    }
};


// count users

const markPropertyAsSold = async (req, res) => {
    try {
        const updatedProperty = await Property.findByIdAndUpdate(
            req.params.id,
            { status: 'Sold' },
            { new: true }
        );
        if (!updatedProperty) return res.status(404).json({ message: 'Property not found' });
        res.json(updatedProperty);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};
const updateProperty = async (req, res) => {
    try {
        const updatedProperty = await Property.findByIdAndUpdate(
            req.params.id,
            req.body,
            { new: true } // To return the updated document
        );
        if (!updatedProperty) return res.status(404).json({ message: 'Property not found' });
        res.json(updatedProperty);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

export { addProperty, listProperty, deleteProperty,markPropertyAsSold, updateProperty };
