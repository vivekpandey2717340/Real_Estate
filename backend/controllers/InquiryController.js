import Inquiry from '../models/InquiryModel.js';

// @desc    Create a new inquery entry
export const addInquiry = async (req, res) => {
    const { name, email, number, inqueryFor, message } = req.body;

    try {
        const newInquiry = new Inquiry({
            name,
            email,
            number,
            inqueryFor,
            message
        });

        const savedInquiry = await newInquiry.save();
        res.status(201).json(savedInquiry);
    } catch (error) {
        res.status(500).json({ message: 'Server Error', error: error.message });
    }
};

// @desc    Get all inquery entries
export const getInquiry = async (req, res) => {
    try {
        const inquiry = await Inquiry.find().sort({ createdAt: -1 });
        res.status(200).json(inquiry);
    } catch (error) {
        res.status(500).json({ message: 'Server Error', error: error.message });
    }
};

// @desc    Delete an inquery entry
export const deleteInquiry = async (req, res) => {
    try {
        await Inquiry.findByIdAndDelete(req.params.id);
        res.status(200).json({ message: 'Inquery deleted successfully' });
    } catch (error) {
        res.status(500).json({ message: 'Server Error', error: error.message });
    }
};
