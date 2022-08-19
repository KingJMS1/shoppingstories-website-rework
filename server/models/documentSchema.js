import mongoose from 'mongoose';

const documentSchema = mongoose.Schema({
    name : String,
    fileKey: String,
    description: String,
    createdAt: { type: Date, default: new Date() },
    updatedAt: { type: Date, default: new Date() },
    data: [{type : mongoose.Schema.Types.ObjectId, ref:"entryObject"}],
    __v: {type : String },
})

const DocumentObject = mongoose.model("DocumentObject", documentSchema);
export default DocumentObject