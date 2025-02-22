const mongoose = require('mongoose');

const StoreSchema = new mongoose.Schema({
    name: String,
    location: String,
    suppliers: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Supplier' }],
    user: [{ type: mongoose.Schema.Types.ObjectId, ref: 'User' }]
});

module.exports = mongoose.model('Store', StoreSchema);