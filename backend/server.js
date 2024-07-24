import express from "express";
import cors from "cors";
import { connectDB } from "./config/db.js";
import PropertyRouter from "./routes/PropertyRoute.js";
import BannerRouter from "./routes/BannerRoute.js";
import PopUpRouter from "./routes/PopUpRoute.js";
import ProfileRouter from "./routes/ProfileRoute.js"
import UserRouter from "./routes/UserRoute.js";
import BlogsRouter from "./routes/BlogsRoute.js"
import OurexpertiseRouter from "./routes/OurexpertiseRoute.js";
import ReviewRouter from "./routes/ReviewRoute.js";
import multer from 'multer';
import dotenv from 'dotenv' ;
 dotenv.config();
// App config
const app = express();
const port = process.env.PORT || 4000;

// Middleware 
app.use(express.json());
app.use(cors());

// DB connection
connectDB();

// Set static folder for image uploads
app.use("/images", express.static('uploads'));


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
app.use("/api/property/", PropertyRouter);
app.use("/api/Banner/", BannerRouter);
app.use("/api/PopUp/", PopUpRouter);
app.use("/api/Profile/", ProfileRouter);
app.use("/api/User/", UserRouter)
app.use("/api/Blogs/",BlogsRouter);
app.use("/api/Ourexpertise/",OurexpertiseRouter);
app.use("/api/Review/", ReviewRouter);




app.get("/", (req, res) => {
    res.send("Hi VIVEK API Is Working");
});

app.listen(port, () => {
    console.log(`Vivek Server Started on http://localhost:${port}`);
});

export { upload };
