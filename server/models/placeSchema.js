import mongoose from 'mongoose';

const placeSchema = new mongoose.Schema({
    locationName: String,
    alias: [String],
    descriptor: String,
});

const PlaceObject = mongoose.model("PlaceObject", placeSchema);
export default PlaceObject