import mongoose from 'mongoose';

const WishlistSchema = new mongoose.Schema({
  userId: { type: String, required: true },
  properties: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Property' }]
});

const WishlistModel = mongoose.model('Wishlist', WishlistSchema);

export default WishlistModel;
