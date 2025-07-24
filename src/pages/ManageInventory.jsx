import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons'
import AddProduct from '../Components/AddProduct'
import { useEffect, useState } from 'react';
import Product from "../Components/Product"
const ManageInventory = ({openSidebar}) => {
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
        if (searchVal === "") { url = "http://localhost:5000/api/products"; }
        else { url = `http://localhost:5000/api/products/${searchVal}`; }
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
  }, [productAdded, productEdited, productDeleted, searchVal])
  useEffect(() => {
    if (productAdded || productEdited || productDeleted) {
      const timer = setTimeout(() => {
        setProductAdded(false);
        setProductEdited(false);
        setProductDeleted(false);
      }, 1000);
      return () => clearTimeout(timer); // clean-up
    }
  }, [productAdded, productEdited, productDeleted]);

  return (
    <>
      <div className={`overflow-y-auto ${openSidebar?'w-[83vw]':"w-full"} mt-[9vh]
                     flex flex-col bg-gray-200 overflow-y-hidden h-[91vh]`}>
        <div className='w-full flex flex-row justify-between
                         px-5 my-7 items-center' >
          <div>
            <h1 className='text-3xl font-bold'>Inventory Management</h1>
            <p>Mange your products and stock levels</p>
          </div>
          <button onClick={() => setpopup(true)} className='bg-blue-500 text-white font-bold rounded-md 
                                p-3 items-center whitespace-pre h-9 flex flex-row justify-center'>+   Add Product</button>
        </div>
        <input type="text" placeholder="🔍 Enter Item Name"
          className='mx-5 h-12 rounded-md text-gray-800 px-5 bg-white'
          onChange={(e) => { setSearchVal(e.target.value) }} value={searchVal} ></input>

        <div className="bg-white m-5 mb-4 h-full overflow-y-scroll overflow-x-hidden rounded-md flex flex-col pb-6">
          <div className="mx-5 py-5 text-3xl ">Products({productCount})</div>
          <div className="flex flex-row py-5 justify-around border-b mx-5 border-b-gray-600">
            <div className="flex flex-row justify-start w-[10vw] font-bold">Name</div>
            <div className="flex flex-row justify-start w-[10vw] font-bold">Details</div>
            <div className="flex flex-row justify-start w-[10vw] font-bold">Price</div>
            <div className="flex flex-row justify-start w-[10vw] font-bold">Stock</div>
            <div className="flex flex-row justify-start w-[10vw] font-bold">Barcode</div>
            <div className="flex flex-row gap-1 w-[4vw] font-bold">Actions</div>
          </div>
          {
            products.map((details) => {
              return <Product key={details._id} details={details}
                setProductAdded={setProductAdded}
                setProductEdited={setProductEdited}
                setProductDeleted={setProductDeleted} />;
            })
          }

        </div>
      </div>

      {popup && <AddProduct popup={popup} setpopup={setpopup}
        setProductAdded={setProductAdded}
        isEditMode={false} productToEdit={null}
        setProductEdited={setProductEdited} />}

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
