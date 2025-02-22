const express = require('express');
require('dotenv').config();

const authRoutes = require('./routes/auth.routes');
const userRoutes = require('./routes/user.routes');

const connectDB = require('./config/db');
const storeRoutes = require('./routes/store.routes');
const supplierRoutes = require('./routes/supplier.routes');


const app = express();

connectDB();
app.use(express.json());
app.use('/api/stores', storeRoutes);
app.use('/api/suppliers', supplierRoutes);


app.use('/api/auth', authRoutes);
app.use('/api/users', userRoutes);

app.listen(5001, () => console.log('Server running on port 5000'));

