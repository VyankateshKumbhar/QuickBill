import mongoose from 'mongoose'
const cartSchema= new mongoose.Schema({
    barcode  : {type:String,required:true},
    quantity : {type:Number,required:true}
},
{
    timestamps:true
});
const Cart=mongoose.model('Cart',cartSchema);
export default Cart;