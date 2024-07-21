import express from "express";
import multer from 'multer';
import { addPopUp, updatePopUp} from "../controllers/PopUpController.js";

const PopUpRouter = express.Router();

// Configure Multer for file uploads
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'uploads/');
    },
    filename: (req, file, cb) => {
        cb(null, `${Date.now()}_${file.originalname}`);
    }
});

const upload = multer({ storage });

PopUpRouter.post("/add", upload.single('image'), addPopUp);
PopUpRouter.put("/update/:id", upload.single('image'), updatePopUp);

export default PopUpRouter;
