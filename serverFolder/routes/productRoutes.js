import Product from "../models/product.js"
import express from 'express';
const router = express.Router();
router.post('/',async (req,res)=>{
     try{
        const { name, price, category, stock, barcode } = req.body;
        const newProduct = new Product({
        name,
        price,
        category,
        stock,
        barcode,
        });
        const savedProduct = await newProduct.save();
        res.status(201).json(savedProduct);
     }catch(err){
        res.status(500).json({ message: 'Failed to add product', error: err.message});
     }
});
router.get('/', async(req, res) => {
   try{
      const products=await Product.find();
   res.json(products);
   }
   catch(err){
      res.status(500).json({message:err.message});
   }
   
});
export default router;