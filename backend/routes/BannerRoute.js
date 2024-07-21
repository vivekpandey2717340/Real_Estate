import express from "express";
import multer from 'multer';
import { addBanner, updateBanner} from "../controllers/BannerController.js";

const BannerRouter = express.Router();

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

BannerRouter.post("/add", upload.single('image'), addBanner);
BannerRouter.put("/update/:id", upload.single('image'), updateBanner);

export default BannerRouter;

