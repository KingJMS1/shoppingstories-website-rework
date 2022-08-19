import mongoose from 'mongoose';

const moneySchema = mongoose.Schema({
    pounds : String,
    shilling: String,
    pence: String,
    songs : [{type: String, _id: false}],
})

const MoneyObject = mongoose.model("MoneyObject", moneySchema);
export default MoneyObject