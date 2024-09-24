import express from 'express';
import cors from 'cors';
import multer from 'multer';
import dotenv from 'dotenv';
import { connectDB } from './config/db.js';
import PropertyRouter from './routes/PropertyRoute.js';
import BannerRouter from './routes/BannerRoute.js';
import PopUpRouter from './routes/PopUpRoute.js';
import ProfileRouter from './routes/ProfileRoute.js';
import UserRouter from './routes/UserRoute.js';
import BlogsRouter from './routes/BlogsRoute.js';
import OurexpertiseRouter from './routes/OurexpertiseRoute.js';
import ReviewRouter from './routes/ReviewRoute.js';
import WishlistRouter from './routes/wishlistRoute.js';
import CompareRouter from './routes/CompareRoute.js';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import CountRouter from './routes/CountRoute.js';
import ContactRouter from './routes/ContactRoute.js';
import InquiryRouter from './routes/InquiryRoute.js';

dotenv.config();

// Get __dirname in ES module
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);


//Count 


// App config
const app = express();
const port = process.env.PORT || 4000;

// Middleware
app.use(express.json());
app.use(cors());

// DB connection
connectDB();

// Set static folder for image uploads
app.use('/images', express.static(path.join(__dirname, 'uploads')));

// Ensure the 'uploads' directory exists
const uploadDir = path.join(__dirname, 'uploads');
if (!fs.existsSync(uploadDir)) {
    fs.mkdirSync(uploadDir, { recursive: true });
}

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

// API endpoints
app.use('/api/property', PropertyRouter);
app.use('/api/banner', BannerRouter);
app.use('/api/popup', PopUpRouter);
app.use('/api/profile', ProfileRouter);
app.use('/api/user', UserRouter);
app.use('/api/blogs', BlogsRouter);
app.use('/api/ourexpertise', OurexpertiseRouter);
app.use('/api/review', ReviewRouter);
app.use('/api/wishlist', WishlistRouter);
app.use('/api/compare', CompareRouter);
app.use('/api/count',CountRouter);
app.use('/api/contact',ContactRouter);
app.use('/api/inquiry', InquiryRouter);
app.get('/', (req, res) => {
    res.send('Hi VIVEK API Is Working');
});

app.listen(port, () => {
    console.log(`Vivek Server Started on http://localhost:${port}`);
});

export { upload };
