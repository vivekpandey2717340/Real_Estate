import jwt from 'jsonwebtoken';
import asyncHandler from 'express-async-handler';
import UserModel from '../models/UserModel.js'; // Ensure you use the correct model

const protect = asyncHandler(async (req, res, next) => {
    let token;

    if (
        req.headers.authorization &&
        req.headers.authorization.startsWith('Bearer')
    ) {
        try {
            // Get token from header
            token = req.headers.authorization.split(' ')[1];

            // Verify token
            const decoded = jwt.verify(token, process.env.JWT_SECRET);

            // Get user from the token
            req.user = await UserModel.findById(decoded.id).select('-password');

            // Proceed to next middleware or route handler
            next();
        } catch (error) {
            res.status(401);
            throw new Error('Not authorized, token failed');
        }
    } else {
        // If no token
        res.status(401);
        throw new Error('Not authorized, no token');
    }
});

export default protect;
