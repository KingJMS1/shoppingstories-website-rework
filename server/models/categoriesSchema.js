import mongoose from 'mongoose';

const categorySchema = new mongoose.Schema({
    item: String,
    category: String,
    subCategory: String,
});

const CategoryObject = mongoose.model("CategoryObject", categorySchema);
export default CategoryObject