import mongoose from 'mongoose';

const personSchema = new mongoose.Schema({
    prefix: String,
    firstName: String,
    lastName: String,
    suffix: String,
    variation: String,
    profession: String,
    professionCategory: String,
    professionQualifier: String,
    enslaved: String,
    gender: String,
    store: String,
    location: String,
    reference: String,
    relations: [{
        type : String,
        person : {type : mongoose.Schema.Types.ObjectId, ref:"peopleObject"}
    }],
    updatedAt: {type: Date, default: Date.now},
});

const PersonObject = mongoose.model("PersonObject", personSchema);
export default PersonObject