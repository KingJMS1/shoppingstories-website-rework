import mongoose from 'mongoose';

const itemSchema = new mongoose.Schema({
    itemName: String,
    variants: [String],
    createdAt: { type: Date, default: Date.now }
});

const ItemObject = mongoose.model("ItemObject", itemSchema);
export default ItemObject