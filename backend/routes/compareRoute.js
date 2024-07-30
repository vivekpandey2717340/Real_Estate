import express from 'express';
import { addToCompareList, getCompareList } from '../controllers/compareController.js';

const CompareRouter = express.Router();

CompareRouter.post('/:userId', addToCompareList);
CompareRouter.get('/:userId', getCompareList);

export default CompareRouter;
