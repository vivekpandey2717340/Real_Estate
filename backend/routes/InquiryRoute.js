import express from 'express';
import { addInquiry, getInquiry, deleteInquiry } from '../controllers/InquiryController.js';

const InquiryRouter = express.Router();

InquiryRouter.post('/add', addInquiry);
InquiryRouter.get('/all', getInquiry);
InquiryRouter.delete('/:id', deleteInquiry);

export default InquiryRouter;
