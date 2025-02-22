const express = require('express');

const { getSuppliers, createSupplier, updateSupplier, deleteSupplier } = require('../controllers/supplier.controller');
const supplierRouter = express.Router();
supplierRouter.get('/', getSuppliers);
supplierRouter.post('/', createSupplier);
supplierRouter.put('/:id', updateSupplier);
supplierRouter.delete('/:id', deleteSupplier);
module.exports = supplierRouter;