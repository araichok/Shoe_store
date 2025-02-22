const Store = require('../models/store.model');
const User = require('../models/user.model');
const Supplier = require('../models/supplier.model');

exports.getStores = async (req, res) => {
    const stores = await Store.find().populate('suppliers').populate('user');
    res.json(stores);
};

exports.createStore = async (req, res) => {
    const { user, name, location, suppliers } = req.body;
    const existingUser = await User.findById(user);
    if (!existingUser) {
        return res.status(400).json({ message: 'User not found' });
    }

    if (suppliers && suppliers.length > 0) {
        const existingSuppliers = await Supplier.find({ _id: { $in: suppliers } });
        if (existingSuppliers.length !== suppliers.length) {
            return res.status(400).json({ message: 'One or more suppliers not found' });
        }
    }

    const store = new Store({ user, name, location, suppliers });
    await store.save();
    res.status(201).json(store);
};

exports.updateStore = async (req, res) => {
    const { user, suppliers } = req.body;

    if (user) {
        const existingUser = await User.findById(user);
        if (!existingUser) {
            return res.status(400).json({ message: 'User not found' });
        }
    }
    if (suppliers && suppliers.length > 0) {
        const existingSuppliers = await Supplier.find({ _id: { $in: suppliers } });
        if (existingSuppliers.length !== suppliers.length) {
            return res.status(400).json({ message: 'One or more suppliers not found' });
        }
    }

    const store = await Store.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.json(store);
};

exports.deleteStore = async (req, res) => {
    await Store.findByIdAndDelete(req.params.id);
    res.json({ message: 'Store deleted' });
};
