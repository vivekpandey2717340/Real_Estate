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
        required: true
    },
    kitchen: {
        type: Number,
        required: true
    },
    hall: {
        type: Number,
        required: true
    },
    bhk: {
        type: String,
        required: true
    },
    propertyStatus: {
        type: String,
        required: true
    },
    bedroom: {
        type: Number,
        required: true
    },
    balcony: {
        type: Number,
        required: true
    },
    area: {
        type: Number,
        required: true
    },
    floor: {
        type: String,
        required: true
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
        required: true
    },
    areaSize: {
        type: Number,
        required: true
    },
    address: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    isFeatured: {
        type: Boolean,
        required: false
    },
    isNew: {
        type: Boolean,
        required: false
    },
    isPremium: {
        type: Boolean,
        required: false
    },
    isHotSelling: {
        type: Boolean,
        required: false
    },
    images: {
        type: [String],
        required: true
    },image2: {
        type: [String],
        required: true
    },image3: {
        type: [String],
        required: true
    },image4: {
        type: [String],
        required: true
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
