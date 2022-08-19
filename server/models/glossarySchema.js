import mongoose from 'mongoose';

const glossarySchema = new mongoose.Schema({
    name: String,
    descritpion:String,
    origin: String,
    use: String,
    category: String,
    subCategory: String,
    qualifiers: String,
    culturalContext: String,
    citations: String,
    images: String,
    createdAt: { type: Date, default: new Date() },
    updatedAt: { type: Date, default: new Date() },
    __v: String
});

const GlossaryObject = mongoose.model("GlossaryObject", glossarySchema);
export default GlossaryObject