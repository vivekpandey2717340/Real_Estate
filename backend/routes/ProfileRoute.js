import express from 'express';
import { loginUser } from '../controllers/ProfileController.js';


const ProfileRouter = express.Router();

ProfileRouter.post("/login", loginUser);


export default ProfileRouter;
