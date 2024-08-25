import Contact from '../models/ContactModel.js';

// @desc    Create a new contact entry
export const createContact = async (req, res) => {
    const { name, email, number, inqueryFor, message } = req.body;

    try {
        const newContact = new Contact({
            name,
            email,
            number,
            inqueryFor,
            message
        });

        const savedContact = await newContact.save();
        res.status(201).json(savedContact);
    } catch (error) {
        res.status(500).json({ message: 'Server Error', error: error.message });
    }
};

// @desc    Get all contact entries
export const getContacts = async (req, res) => {
    try {
        const contacts = await Contact.find().sort({ date: -1 });
        res.status(200).json(contacts);
    } catch (error) {
        res.status(500).json({ message: 'Server Error', error: error.message });
    }
};
