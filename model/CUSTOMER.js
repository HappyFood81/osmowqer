const mongoose = require('mongoose');
const Schema = mongoose.Schema;
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
    orders: { type: Array, required: true},
    parcel: { type: String, required: true},
    newOrder: { type: String, required: true},
    preparing: { type: String, required: true},
    finished: { type: String, required: true},
});

module.exports = mongoose.model("CustomerPost", PostSchema);
