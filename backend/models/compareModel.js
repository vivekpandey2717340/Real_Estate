import mongoose from 'mongoose';

const CompareSchema = new mongoose.Schema({
  userId: { type: String, required: true },
  properties: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Property' }]
});

const CompareModel = mongoose.model('Compare', CompareSchema);

export default CompareModel;
