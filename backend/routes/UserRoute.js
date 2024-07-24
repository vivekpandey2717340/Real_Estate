import express from "express"
import { loginUser , registerUser ,listUser , deleteUser ,countUser, getUser } from "../controllers/UserController.js"
import protect from '../middleware/authMiddleware.js'; 

const UserRouter = express.Router();

UserRouter.post("/register", registerUser);
UserRouter.post("/login",loginUser);
UserRouter.get("/list", listUser); 
UserRouter.delete("/delete/:userId", deleteUser); 
UserRouter.get("/count", countUser);
UserRouter.get("/me/:userId", protect, getUser);
export default UserRouter;