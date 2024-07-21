import asyncHandler from 'express-async-handler';
import Profile from '../models/ProfileModel.js';
import generateToken from '../utils/generateToken.js';

// Hardcoded user credentials
const hardcodedUser = {
    _id: '1',
    name: 'Vivek',
    email: 'vivek2717340@gmail.com',
    password: 'TWB12345',
    isAdmin: true,
};
// @desc    Auth user & get token
// @route   POST /api/profile/login
// @access  Public
const loginUser = asyncHandler(async (req, res) => {
    const { email, password } = req.body;

    if (email === hardcodedUser.email && password === hardcodedUser.password) {
        res.json({
            _id: hardcodedUser._id,
            name: hardcodedUser.name,
            email: hardcodedUser.email,
            isAdmin: hardcodedUser.isAdmin,
            token: generateToken(hardcodedUser._id),
        });
    } else {
        res.status(401);
        throw new Error('Invalid email or password');
    }
});



export { loginUser };
