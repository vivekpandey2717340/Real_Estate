import mongoose from 'mongoose';

const InquirySchema = new mongoose.Schema({
    name: { type: String, required: true },
    email: { type: String, required: true },
    number: { type: String, required: true },
    inqueryFor: { type: String, required: true },
    message: { type: String, required: true },
}, { timestamps: true });

const Inquiry = mongoose.model('Inquiry', InquirySchema);

export default Inquiry;
