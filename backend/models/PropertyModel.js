import mongoose from "mongoose";

const PropertySchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    content: {
        type: String,
        required: false
    },
    propertyType: {
        type: String,
        required: true
    },
    sellingType: {
        type: String,
        required: true
    },
    bathroom: {
        type: Number,
        required: false
    },
    kitchen: {
        type: Number,
        required: false
    },
    hall: {
        type: Number,
        required: false
    },
    bhk: {
        type: String,
        required: false
    },
    propertyStatus: {
        type: String,
        required: true
    },
    bedroom: {
        type: Number,
        required: false
    },
    balcony: {
        type: Number,
        required: false
    },
    area: {
        type: Number,
        required: false
    },
    floor: {
        type: String,
        required: false
    },
    price: {
        type: Number,
        required: true
    },
    city: {
        type: String,
        required: true
    },
    state: {
        type: String,
        required: true
    },
    totalFloor: {
        type: String,
        required: false
    },
    areaSize: {
        type: Number,
        required: false
    },
    address: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: false
    },
    roadAccess: {
        type: String,
        required: false
    },
    direction: {
        type: String,
        required: false
    },
    Parking: {
        type: String,
        required: false
    },
    builtYear: {
        type: Number,
        required: false
    },
    
    category: {
        type: String,
        required: true
    },
    images: {
        type: [String],
        required: true
    },image2: {
        type: [String],
        required: false
    },image3: {
        type: [String],
        required: false
    },image4: {
        type: [String],
        required: false
    },
    video: {
        type: String,
        required: false
    },
    droneShootVideo: {
        type: String,
        required: false
    },
    floorPlanImage: {
        type: String,
        required: false
    },
    groundFloorPlanImage: {
        type: String,
        required: false
    }
}, {
    timestamps: true
});

export default mongoose.model("Property", PropertySchema);
