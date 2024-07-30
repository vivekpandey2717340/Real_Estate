import express from "express"
import { loginUser , registerUser ,listUser , deleteUser ,countUser, getUser, updateUser } from "../controllers/UserController.js"
import protect from '../middleware/authMiddleware.js'; 

const UserRouter = express.Router();

UserRouter.post("/register", registerUser);
UserRouter.post("/login",loginUser);
UserRouter.get("/list", listUser); 
UserRouter.delete("/delete/:userId", deleteUser); 
UserRouter.get("/count", countUser);
UserRouter.get("/me", protect, getUser); // Updated route
UserRouter.put('/update', protect, updateUser);


export default UserRouter;