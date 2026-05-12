import Cart from "../models/cart.js"
import express from 'express';
const router = express.Router();
router.post('/',async (req,res)=>{
     try{
        const {barcode,quantity } = req.body;
        const newProduct = new Cart({
        barcode,
        quantity
        });
        const savedProduct = await newProduct.save();
        res.status(201).json(savedProduct);
     }catch(err){
        res.status(500).json({ message: 'Failed to add product', error: err.message});
     }
});
export default router;