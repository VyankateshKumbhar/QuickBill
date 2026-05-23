import express from 'express';
import Cart from "../models/cart.js";
import Product from "../models/product.js"
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
router.patch('/',async(req,res)=>{
   try{
      const {items}=req.body;
      for(const item of items){
      await Product.findByIdAndUpdate(item.id,{$inc:{stock : -item.quantity}});
      }
      res.status(200).json({
         message:"stock updated successfuly",
      });
   }catch(err){
         res.status(500).json({
            message:"failed to update stock",
            error:err.message,
         })
   }
});
export default router;