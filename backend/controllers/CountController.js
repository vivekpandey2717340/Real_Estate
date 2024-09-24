import UserModel from '../models/UserModel.js';
import PropertyModel from '../models/PropertyModel.js';
import OurexpertiseModel from '../models/OurexpertiseModel.js'; 
import BlogsModel from '../models/BlogsModel.js';
import ContactModel from '../models/ContactModel.js';
import InquiryModel from '../models/InquiryModel.js'

export const getAllCounts = async(req, res) => {
    try {
        const userCount = await UserModel.countDocuments();
        const propertyCount = await PropertyModel.countDocuments();
        const ourexpertiseCount = await OurexpertiseModel.countDocuments();
        const blogsCount = await BlogsModel.countDocuments();
        const contactCount = await ContactModel.countDocuments();
        const inquiryCount = await InquiryModel.countDocuments();

        res.status(200).json({
            sucess: true,
            data:{
                users: userCount,
                property : propertyCount,
                ourexpertise : ourexpertiseCount,
                blogs : blogsCount,
                contact : contactCount,
                inquiry : inquiryCount,
            },
        });
        } catch (error) {
            console.error(error);
            res.status(500).json({
            sucess: false,
            message: 'Server Error',
        });
    }
};
