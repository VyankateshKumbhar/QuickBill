import express from 'express';
import mongoose from 'mongoose';
import router from './serverFolder/routes/productRoutes.js';
import connectDB from './serverFolder/config/db.js';
import dotenv from 'dotenv';
import cors from 'cors';

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

 
connectDB();

app.use('/api/products', router);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});