import UserModel from '../models/UserModel.js';
import PropertyModel from '../models/PropertyModel.js';
import OurexpertiseModel from '../models/OurexpertiseModel.js'; 
import BlogsModel from '../models/BlogsModel.js';

export const getAllCounts = async(req, res) => {
    try {
        const userCount = await UserModel.countDocuments();
        const propertyCount = await PropertyModel.countDocuments();
        const ourexpertiseCount = await OurexpertiseModel.countDocuments();
        const blogsCount = await BlogsModel.countDocuments();

        res.status(200).json({
            sucess: true,
            data:{
                users: userCount,
                property : propertyCount,
                ourexpertise : ourexpertiseCount,
                blogs : blogsCount,
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
