import CompareModel from '../models/compareModel.js'; // Create this model

// Add to compare list
const addToCompareList = async (req, res) => {
  const { userId } = req.params;
  const { propertyId } = req.body;

  try {
    let compareList = await CompareModel.findOne({ userId });

    if (!compareList) {
      compareList = new CompareModel({ userId, properties: [propertyId] });
    } else {
      if (compareList.properties.includes(propertyId)) {
        compareList.properties = compareList.properties.filter(id => id !== propertyId); // Remove if exists
      } else {
        compareList.properties.push(propertyId); // Add if not exists
      }
    }

    await compareList.save();
    res.json({ success: true, compareList });
  } catch (error) {
    res.status(500).json({ success: false, message: 'Failed to update compare list.' });
  }
};

// Get compare list
const getCompareList = async (req, res) => {
  const { userId } = req.params;

  try {
    const compareList = await CompareModel.findOne({ userId }).populate('properties');
    res.json({ success: true, compareList });
  } catch (error) {
    res.status(500).json({ success: false, message: 'Failed to retrieve compare list.' });
  }
};

export { addToCompareList, getCompareList };
