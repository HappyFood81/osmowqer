const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const MerchantSchema = new Schema({
    name: { type: String, required: true },
    status: { type: String, required: true },
    profit: { type: String, required: true }, // Delivered or Finished
});

module.exports = mongoose.model("MerchantPost", MerchantSchema);