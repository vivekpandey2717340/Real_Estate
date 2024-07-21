import mongoose from "mongoose";

const PopUpSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    image: {
        type: String,
        required: true
    }
}, { timestamps: true });

const PopUp  = mongoose.model("Popup", PopUpSchema);

export default PopUp;

