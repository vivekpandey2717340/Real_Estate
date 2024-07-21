import express from "express";
import multer from 'multer';
import { addReview, updateReview} from "../controllers/ReviewController.js";

const ReviewRouter = express.Router();

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

ReviewRouter.post("/add", upload.single('image'), addReview);
ReviewRouter.put("/update/:id", upload.single('image'), updateReview);

export default ReviewRouter;