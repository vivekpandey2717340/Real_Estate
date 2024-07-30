import express from 'express';
import { addToWishlist, getWishlist } from '../controllers/wishlistController.js';

const WishlistRouter = express.Router();

WishlistRouter.post('/:userId', addToWishlist);
WishlistRouter.get('/:userId', getWishlist);

export default WishlistRouter;
