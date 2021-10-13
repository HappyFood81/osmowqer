const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const MerchantSchema = new Schema({
    name: { type: String, required: true },
    house: { type: String, required: true },
    phone: { type: String, required: true },
    email: { type: String, required: true },
    time: { type: String, required: true },
    delFee: { type: String, required: true },
    resto: { type: String, required: true },
    subTotal: { type: String, required: true },

    orders: { type: Object, required: true },
    orderNum: { type: String, required: true },

    new: { type: String, required: true },
    preparing: { type: String, required: true },
    finished: { type: String, required: true },

    handler: { type: String, required: true },
});

module.exports = mongoose.model("MerchantSchema2", MerchantSchema);