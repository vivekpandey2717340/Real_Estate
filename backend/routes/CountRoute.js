import express from 'express';
import { getAllCounts } from '../controllers/CountController.js';
const CountRouter = express.Router();

CountRouter.get('/all-counts', getAllCounts);

export default CountRouter;
