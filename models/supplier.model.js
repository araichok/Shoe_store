const mongoose = require('mongoose');


const SupplierSchema = new mongoose.Schema(
    {
        name: String,
        contact: String,
        shoesSupplied: [String]
    },
    { versionKey: false } // Отключает __v
);


module.exports = mongoose.model('Supplier', SupplierSchema);