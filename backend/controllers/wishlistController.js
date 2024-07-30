import WishlistModel from '../models/wishlistModel.js'; // Create this model

// Add to wishlist
const addToWishlist = async (req, res) => {
  const { userId } = req.params;
  const { propertyId } = req.body;

  try {
    let wishlist = await WishlistModel.findOne({ userId });

    if (!wishlist) {
      wishlist = new WishlistModel({ userId, properties: [propertyId] });
    } else {
      if (wishlist.properties.includes(propertyId)) {
        wishlist.properties = wishlist.properties.filter(id => id !== propertyId); // Remove if exists
      } else {
        wishlist.properties.push(propertyId); // Add if not exists
      }
    }

    await wishlist.save();
    res.json({ success: true, wishlist });
  } catch (error) {
    res.status(500).json({ success: false, message: 'Failed to update wishlist.' });
  }
};

// Get wishlist
const getWishlist = async (req, res) => {
  const { userId } = req.params;

  try {
    const wishlist = await WishlistModel.findOne({ userId }).populate('properties');
    res.json({ success: true, wishlist });
  } catch (error) {
    res.status(500).json({ success: false, message: 'Failed to retrieve wishlist.' });
  }
};

export { addToWishlist, getWishlist };
