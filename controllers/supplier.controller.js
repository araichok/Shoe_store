const Supplier = require('../models/supplier.model');

exports.getSuppliers = async (req, res) => {
    const suppliers = await Supplier.find();
    res.json(suppliers);
};

exports.createSupplier = async (req, res) => {
    const supplier = new Supplier(req.body);
    await supplier.save();
    res.status(201).json(supplier);
};

exports.updateSupplier = async (req, res) => {
    const supplier = await Supplier.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.json(supplier);
};

exports.deleteSupplier = async (req, res) => {
    await Supplier.findByIdAndDelete(req.params.id);
    res.json({ message: 'Supplier deleted' });
};
