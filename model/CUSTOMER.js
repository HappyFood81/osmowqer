const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const PostSchema = new Schema({
    resto: { type: String, required: true},
    name: { type: String, required: true},
    phone: { type: String, required: true},
    house: { type: String, required: true},
    email: { type: String, required: true},
    subTotal: { type: String, required: true},
    delFee: { type: String, required: true},
    total: { type: String, required: true},
    time: { type: String, required: true},
    orders: { type: String, required: true},
    parcel: { type: Boolean, required: true},
    new: { type: Boolean, required: true},
    preparing: { type: Boolean, required: true},
    finished: { type: Boolean, required: true},
});

module.exports = mongoose.model("CustomerPost", PostSchema);