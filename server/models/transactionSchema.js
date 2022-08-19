import mongoose from 'mongoose';

const transactionSchema = new mongoose.Schema({
    quantity: String,
    qualifier:String,
    variant: String,
    item: String,
    service: String,
    unitCost: {type : mongoose.Schema.Types.ObjectId, ref:"moneyObject"},
    totalCost: {type : mongoose.Schema.Types.ObjectId, ref:"moneyObject"},
    otherItems: [{type : mongoose.Schema.Types.ObjectId, ref:"transactionObject"}],
});

const TransactionObject = mongoose.model("TransactionObject", transactionSchema);
export default TransactionObject