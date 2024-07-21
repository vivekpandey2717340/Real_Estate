import express from "express"
import { loginUser , registerUser ,listUser , deleteUser ,countUser } from "../controllers/UserController.js"


const UserRouter = express.Router();

UserRouter.post("/register", registerUser);
UserRouter.post("/login",loginUser);
UserRouter.get("/list", listUser); 
UserRouter.delete("/delete/:userId", deleteUser); 
UserRouter.get("/count", countUser);
export default UserRouter;