import React from 'react'
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'
import AddProduct from '../Components/AddProduct'
import { useEffect, useState } from 'react';
import Product from "../Components/Product"
const ManageInventory = () => {
  const [popup, setpopup] = useState(false);
  const [productAdded, setProductAdded] = useState(false);
  const [productEdited, setProductEdited] = useState(false);
  const [productDeleted, setProductDeleted] = useState(false);
  const [productCount, setProductCount] = useState(0);
  const [products, setProducts] = useState([]);
  const [searchVal, setSearchVal] = useState((""));
  useEffect(() => {
    const fetchData = async () => {
      try {
        let url;
        if(searchVal===""){url="http://localhost:5000/api/products";}
        else {url=`http://localhost:5000/api/products/${searchVal}`;}
        const res = await fetch(url);
        const data = await res.json();
        setProducts(data);
        setProductCount(data.length)
      }
      catch (err) {
        console.error("Error", err);
      }
    }
    fetchData();
  }, [productAdded,productEdited,productDeleted,searchVal])
  useEffect(() => {
    if (productAdded||productEdited||productDeleted) {
      const timer = setTimeout(() => {
        setProductAdded(false);
        setProductEdited(false);
        setProductDeleted(false);
      }, 1000);
      return () => clearTimeout(timer); // clean-up
    }
  }, [productAdded,productEdited,productDeleted]);

  return (
    <>
      <div className='h-auto overflow-y-auto w-[80vw] ml-[17vw] mt-[9vh]
                    flex flex-col bg-gray-50'>
        <div className='w-full h-[14.5vh]  flex flex-row justify-between
                        items-center px-5'>
          <div>
            <h1 className='text-3xl font-bold'>Inventory Management</h1>
            <p>Mange your products and stock levels</p>
          </div>
          <button onClick={() => setpopup(true)} className='bg-blue-500 text-white font-bold rounded-md 
                                p-3 items-center whitespace-pre'>+   Add Product</button>
        </div>
        <input type="text" placeholder="🔍 Enter Item Name" 
        className='mx-5 h-10 rounded-md text-gray-800 px-5 bg-white' 
        onChange={(e)=>{setSearchVal(e.target.value)}} value={searchVal} ></input>

        <div className="bg-white m-5 rounded-md flex flex-col pb-6">
          <div className="mx-5 py-5 text-3xl ">Products({productCount})</div>
          {
            products.map((details) => {
              return <Product key={details._id} details={details}
              setProductAdded={setProductAdded}
              setProductEdited={setProductEdited}
              setProductDeleted={setProductDeleted}/>;
            })
          }

        </div>
      </div>

      {popup && <AddProduct popup={popup} setpopup={setpopup}
        setProductAdded={setProductAdded} 
        isEditMode={false} productToEdit={null}
        setProductEdited={setProductEdited}/>}

      {productAdded && (
        <div className='h-auto w-screen text-white flex justify-center  fixed top-5 z-50'>
          <div className="h-auto w-auto bg-green-500 shadow-md py-2 px-4">
            Product Added Successfully!
          </div>
        </div>
      )}
      {productEdited && (
        <div className='h-auto w-screen text-white flex justify-center  fixed top-5 z-50'>
          <div className="h-auto w-auto bg-green-500 shadow-md py-2 px-4">
            Product Updated Successfully!
          </div>
        </div>
      )}
      {productDeleted && (
        <div className='h-auto w-screen text-white flex justify-center  fixed top-5 z-50'>
          <div className="h-auto w-auto bg-green-500 shadow-md py-2 px-4">
            Product Deleted Successfully!
          </div>
        </div>
      )}
    </>
  )
}

export default ManageInventory
