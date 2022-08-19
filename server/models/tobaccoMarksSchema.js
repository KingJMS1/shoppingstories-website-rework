import mongoose from 'mongoose';

const tobaccoMarkSchema = new mongoose.Schema({
    description: String,
    image: String,
    netWeight: String,
    note: String,
    notes: String,
    tobaccoMarkId: String,
    where: String,
    warehouse: String,
    whoRepresents:String,
    whoUnder:String,
});

const TobaccoMarkObject = mongoose.model("TobaccoMarkObject", tobaccoMarkSchema);
export default TobaccoMarkObject