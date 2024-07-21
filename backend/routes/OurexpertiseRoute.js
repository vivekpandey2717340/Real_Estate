import express from "express";
import multer from 'multer';
import { addOurexpertise, updateOurexpertise} from "../controllers/OurexpertiseController.js";

const OurexpertiseRouter = express.Router();

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

OurexpertiseRouter.post("/add", upload.single('image'), addOurexpertise);
OurexpertiseRouter.put("/update/:id", upload.single('image'), updateOurexpertise);

export default OurexpertiseRouter;