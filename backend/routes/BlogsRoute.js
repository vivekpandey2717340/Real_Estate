import express from "express";
import multer from 'multer';
import { addBlogs, updateBlogs} from "../controllers/BlogsController.js";

const BlogsRouter = express.Router();

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

BlogsRouter.post("/add", upload.single('image'), addBlogs);
BlogsRouter.put("/update/:id", upload.single('image'), updateBlogs);

export default BlogsRouter;
