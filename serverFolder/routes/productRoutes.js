import Product from "../models/product.js"
import express from 'express';
const router = express.Router();
router.post('/',async (req,res)=>{
     try{
        const {name, price, category, stock, barcode } = req.body;
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
      const products=await Product.find().sort({ name: 1 });
      res.json(products);
   }
   catch(err){
      res.status(500).json({message:err.message});
   }
   
});
router.get('/:searchVal', async(req, res) => {
   const searchVal=req.params.searchVal;
   try{
      const products=await Product.find({
      $or: [
        { name: { $regex: searchVal, $options: 'i' } },
        { barcode: { $regex: searchVal, $options: 'i' } }
      ]
    }).sort({ name: 1 });
      res.json(products);
   }
   catch(err){
      res.status(500).json({message:err.message});
   }
   
});
router.put('/:id',async(req, res)=>{
   const id = req.params.id;
   try{
      const updatedProduct=await Product.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true, runValidators: true }
    );
    if (!updatedProduct) {
      return res.status(404).json({ message: 'Product not found' });
    }
    res.json(updatedProduct);
   }catch(err){res.status(400).json({ message: 'Update failed', error: err.message });}
})
router.delete('/:id',async(req,res)=>{
   try{
      const deletedProduct=await Product.findByIdAndDelete(req.params.id)
      if (!deletedProduct) {
      return res.status(404).json({ message: 'Product not found' });
    }
    res.json({ message: 'Product deleted successfully', product: deletedProduct });
   }catch(err){res.status(500).json({ message: 'Delete failed', error: err.message });}
})
export default router;