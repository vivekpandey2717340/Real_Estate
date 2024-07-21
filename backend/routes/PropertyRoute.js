import express from "express";
import { addProperty, countProperty, listProperty, removeProperty  } from "../controllers/PropertyController.js";
import multer from "multer";

const PropertyRouter = express.Router();

// Image storage engine
const storage = multer.diskStorage({
    destination: "uploads",
    filename: (req, file, cb) => {
        cb(null, `${Date.now()}_${file.originalname}`);
    }
});

const upload = multer({ storage });

const multipleUpload = upload.fields([
    { name: 'image', maxCount: 1 },
    { name: 'image2', maxCount: 1 },
    { name: 'image3', maxCount: 1 },
    { name: 'image4', maxCount: 1 },
    { name: 'video', maxCount: 1 },
    { name: 'droneShootVideo', maxCount: 1 },
    { name: 'floorPlanImage', maxCount: 1 },
    { name: 'groundFloorPlanImage', maxCount: 1 }
]);

PropertyRouter.post("/add", multipleUpload, addProperty);
PropertyRouter.get("/list", listProperty);
PropertyRouter.post("/remove", removeProperty);
PropertyRouter.get("/count", countProperty);

export default PropertyRouter;

