import axios from "axios";
import React, { useEffect } from "react";
import { useState } from "react";
import Modal from '../Modal/index'

let initialState = {
  name: "",
  price: "",
  originalquantity: "",
  quantity: "",
  partNo: "",
  gst: "",
  description: "",
  model: "",
  oem: "",
  producttype: "",
  subcategory: "",
  category: "",
  variant: "",
  fuelType: "",
  outside_ncr: "",
  inside_ncr: "",
  originalPrice: "",
};



const AddProduct = () => {
  const [categoryName, setCategoryName] = useState(null);
  const [subCategories, setSubCategories] = useState([]);
  const [isProductModal, setIsProductModal] = useState(false);
  const [product, setProduct] = useState(initialState);
  const [images, setImages] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  // const [oesBrand, setOesBrand] = useState([]);
  const [xlsxFile, setXlsxFile] = useState(null);
  const [imageFile, setImageFile] = useState(null);
  const [oemBrand, setOemBrand] = useState([]);
  
  const handleChange = ({ target }) => {
    setProduct((prev) => ({ ...prev, [target.name]: target.value }));
   
  };
  const onSubmitZip = async (e) => {
    e.preventDefault();
       const formdata= new FormData();
       if(imageFile){
         formdata.append("imagefile",imageFile);
         const res= await axios.post("http://localhost:8080/api/events/product/imagezip",formdata).catch((err)=>console.log(err.message))
      // if (res?.data.status === "success") {
        
      //   alert("product added successfully");
      // }
      // if (res.data.status === "failed") {
        
      //   alert("failed");
      // }

    }else{
         alert("pls upload image file")
       }
  };
  const onSubmitXlsx = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    if (xlsxFile) {
      
      formData.append("xlsxfile", xlsxFile);
      formData.append("createdBy", "47jdvnf");
      const res = await axios
        .post("http://localhost:8080/api/events/product/xlsx", formData)
        .catch((err) => {          
          console.log(err.message);
        });
      // if (res?.data.status === "success") {
      //   setIsLoading(false);
      //   alert("product added successfully");
      // }
      // if (res.data.status === "failed") {
      //   setIsLoading(false);
      //   alert(JSON.stringify(res.data));
      // }
    } else {
      alert("please select xlsx file");
    }
  };

  return (
    <div  className=" w-full">
      <div className="px-6 mb-8">
      <div
        style={{
          
          backgroundColor: "white",
          
          borderTop: "1px solid #494949",
          
        }}
        className=" font-bold   text-gray-600 uppercase focus:bg-white my-2 p-4 flex justify-between border  border-gray-300 rounded svelte-1l8159u"
      >
       <div>
         <p> ADD PRODUCT</p>
         </div>
       <div>
       <button class="rounded-full bg-blue-500 pl-3  pr-3 pt-1 pb-1 text-white"  onClick={() => {
                        
                        setIsProductModal(true);
                      }}>Add in Bulk</button>
         {/* <p> ADD IN BULK</p> */}
         </div>
      </div>
        <form
          enctype="multipart/form-data"
          
          className="p-4 lg:px-10 pb-6 grid grid-cols-1 sm:grid-cols-2 gap-0 md:grid-cols-3 lg:grid-cols-4 sm:gap-6"
        >
          <div className="w-full mx-2 svelte-1l8159u">
            <div className="font-bold h-6 mt-3 text-gray-600 text-xs leading-8 uppercase">
              Name
            </div>
            <div className="bg-white my-2 p-1 flex border border-gray-300 rounded svelte-1l8159u">
              <input
                required
                autoComplete="off"
                onChange={handleChange}
                type="text"
                name="name"
                value={product.name}
                className="p-1 px-2 appearance-none outline-none w-full text-gray-800"
              />
            </div>
          </div>

          <div className="w-full mx-2 svelte-1l8159u">
            <div className="font-bold h-6 mt-3 text-gray-600 text-xs leading-8 uppercase">
              Listed Price (inc. GST)
            </div>
            <div className="bg-white my-2 p-1 flex border border-gray-300 rounded svelte-1l8159u">
              <input
                autoComplete="off"
                required
                disabled
                onChange={handleChange}
                type="number"
                name="price"
                value={product.price}
                className="p-1 px-2 appearance-none outline-none w-full text-gray-800"
              />
            </div>
          </div>

          <div className="w-full mx-2 svelte-1l8159u">
            <div className="font-bold h-6 mt-3 text-gray-600 text-xs leading-8 uppercase">
              Original Price
            </div>
            <div className="bg-white my-2 p-1 flex border border-gray-300 rounded svelte-1l8159u">
              <input
                autoComplete="off"
                required
                onChange={handleChange}
                type="number"
                name="originalPrice"
                value={product.originalPrice}
                className="p-1 px-2 appearance-none outline-none w-full text-gray-800"
              />
            </div>
          </div>

          <div className="w-full mx-2 svelte-1l8159u">
            <div className="font-bold h-6 mt-3 text-gray-600 text-xs leading-8 uppercase">
              Quantity
            </div>
            <div className="bg-white my-2 p-1 flex border border-gray-300 rounded svelte-1l8159u">
              <input
                autoComplete="off"
                required
                onChange={handleChange}
                type="number"
                name="quantity"
                value={product.quantity}
                className="p-1 px-2 appearance-none outline-none w-full text-gray-800"
              />
            </div>
          </div>

          <div className="w-full mx-2 svelte-1l8159u">
            <div className="font-bold h-6 mt-3 text-gray-600 text-xs leading-8 uppercase">
              GST Tax (0% - 100%)
            </div>
            <div className="bg-white my-2 p-1 flex border border-gray-300 rounded svelte-1l8159u">
              <input
                min="0"
                max="100"
                autoComplete="off"
                required
                onChange={handleChange}
                type="number"
                name="gst"
                value={product.gst}
                className="p-1 px-2 appearance-none outline-none w-full text-gray-800"
              />
            </div>
          </div>

          <div className="w-full mx-2 svelte-1l8159u">
            <div className="font-bold h-6 mt-3 text-gray-600 text-xs leading-8 uppercase">
              Part Number
            </div>
            <div className="bg-white my-2 p-1 flex border border-gray-300 rounded svelte-1l8159u">
              <input
                autoComplete="off"
                required
                onChange={handleChange}
                type="text"
                name="partNo"
                value={product.partNo}
                className="p-1 px-2 appearance-none outline-none w-full text-gray-800"
              />
            </div>
          </div>

          <div className="w-full mx-2 svelte-1l8159u">
            <div className="font-bold h-6 mt-3 text-gray-600 text-xs leading-8 uppercase">
              Variant
            </div>
            <div className="bg-white my-2 p-1 flex border border-gray-300 rounded svelte-1l8159u">
              <input
                autoComplete="off"
                required
                onChange={handleChange}
                type="text"
                name="variant"
                value={product.variant}
                className="p-1 px-2 appearance-none outline-none w-full text-gray-800"
              />
            </div>
          </div>

          <div className="w-full mx-2 svelte-1l8159u">
            <div className="font-bold h-6 mt-3 text-gray-600 text-xs leading-8 uppercase">
              Shipping (Inside NCR)
            </div>
            <div className="bg-white my-2 p-1 flex border border-gray-300 rounded svelte-1l8159u">
              <input
                autoComplete="off"
                required
                onChange={handleChange}
                type="number"
                name="inside_ncr"
                value={product.inside_ncr}
                className="p-1 px-2 appearance-none outline-none w-full text-gray-800"
              />
            </div>
          </div>

          <div className="w-full mx-2 svelte-1l8159u">
            <div className="font-bold h-6 mt-3 text-gray-600 text-xs leading-8 uppercase">
              Shipping (Outside NCR)
            </div>
            <div className="bg-white my-2 p-1 flex border border-gray-300 rounded svelte-1l8159u">
              <input
                autoComplete="off"
                required
                onChange={handleChange}
                type="number"
                name="outside_ncr"
                value={product.outside_ncr}
                className="p-1 px-2 appearance-none outline-none w-full text-gray-800"
              />
            </div>
          </div>

          <div className="w-full mx-2 svelte-1l8159u">
            <div className="font-bold h-6 mt-3 text-gray-600 text-xs leading-8 uppercase">
              Fuel Type
            </div>
            <div className="bg-white my-2 p-1 flex border border-gray-300 rounded svelte-1l8159u">
              <select
                autoComplete="off"
                required
                onChange={handleChange}
                type="text"
                name="fuelType"
                value={product.fuelType}
                className="block w-full p-1 b px-3 bg-white rounded-md shadow-sm focus:outline-none focus:ring-primary-500 focus:border-primary-500"
              >
                <option value="" className="mt-2">
                  Select a fuel type
                </option>
                <option value="petrol">PETROL</option>
                <option value="diesel">DIESEL</option>
                <option value="electric">ELECTRIC</option>
                <option value="petrol,diesel">PETROL,DIESEL</option>
              </select>
            </div>
          </div>

          <div className="w-full mx-2 svelte-1l8159u">
            <div className="font-bold h-6 mt-3 text-gray-600 text-xs leading-8 uppercase">
              Description
            </div>
            <div className="bg-white my-2 p-1 flex border border-gray-300 rounded svelte-1l8159u">
              <input
                autoComplete="off"
                required
                maxLength="1000"
                onChange={handleChange}
                type="text"
                name="description"
                value={product.description}
                className="p-1 px-2 appearance-none outline-none w-full text-gray-800"
              />
            </div>
          </div>

          <div className="w-full mx-2 svelte-1l8159u">
            <div className="font-bold h-6 mt-3 text-gray-600 text-xs leading-8 uppercase">
              OEM Brand
            </div>
            <div className="bg-white my-2 p-1 flex border border-gray-300 rounded svelte-1l8159u">
          
            </div>
          </div>

          <div className="w-full mx-2 svelte-1l8159u">
            <div className="font-bold h-6 mt-3 text-gray-600 text-xs leading-8 uppercase">
              Condition
            </div>
            <div className="bg-white my-2 p-1 flex border border-gray-300 rounded svelte-1l8159u">
            
            </div>
          </div>

          <div className="w-full mx-2 svelte-1l8159u">
            <div className="font-bold h-6 mt-3 text-gray-600 text-xs leading-8 uppercase">
              Category
            </div>
            <div className="bg-white my-2 p-1 flex border-2 border-gray-300 rounded svelte-1l8159u">
             
            </div>
          </div>

          <div className="w-full mx-2 svelte-1l8159u">
            <div className="font-bold h-6 mt-3 text-gray-600 text-xs leading-8 uppercase">
              SubCategory
            </div>
            <div className="bg-white my-2 p-1 flex border border-gray-300 rounded svelte-1l8159u">
            
            </div>
          </div>

          <fieldset className="w-full mx-2 mt-3">
            <label
              for="files"
              className="font-bold h-6 mt-3 text-gray-600 text-xs leading-8 uppercase"
            >
              Images
            </label>
            <div className="flex bg-white p-1 flex rounded border border-gray-300">
              <input
                // required
                type="file"
                name="images[]"
                id="files"
                className="w-full"
                multiple
                onChange={(e) => setImages(e.target.files)}
              />
            </div>
          </fieldset>
          <div className="mt-8">
            <button
              type="submit"
              className="bg-custom-red rounded hover:text-custom-red hover:bg-white transition duration-500 border border-custom-red w-full ml-2 sm:ml-0 text-white my-3 p-2"
            >
              SAVE
            </button>
          </div>
        </form>
      </div>
      <Modal
      isModal={isProductModal}
      setIsModal={setIsProductModal}
      title="Add in Bulk"
    >
      <div>
      
      <div className="flex justify-center mt-5">
        <div className="mb-5">
          <form
            enctype="multipart/form-data"
            className="flex flex-col justify-center mb-3"
            onSubmit={onSubmitZip}
          >
            <h3 className="text-custom-red font-semibold ">STEP 1</h3>
            <fieldset className="w-full text-coolGray-800">
              <label
                for="imagefile"
                className="font-bold h-6 mt-3 text-gray-600 text-xs leading-8 uppercase"
              >
                Select Images Zip File
              </label>
              <div className="flex bg-white py-1 flex border border-gray-200">
                <input
                  required
                  type="file"
                  name="imagefile"
                  id="imagefile"
                  className="w-full"
                  onChange={(e)=>setImageFile(e.target.files[0])}
                />
              </div>
            </fieldset>
            <button
              type="submit"
              className="border rounded mt-3 bg-indigo-500 text-white  bg-custom-blue text-white hover:text-custom-blue
               hover:bg-indigo-300  hover:border-custom-blue p-2 transition duration-500"
            >
              UPLOAD IMAGES
            </button>
          </form>

          <form
            enctype="multipart/form-data"
            className="flex flex-col justify-center mt-6"
            onSubmit={onSubmitXlsx}
          >
            <h3 className="text-custom-red font-semibold ">STEP 2</h3>
            <fieldset className="w-full text-coolGray-800">
              <label
                for="xlsxfile"
                className="font-bold h-6 mt-3 text-gray-600 text-xs leading-8 uppercase"
              >
                Select XLSX File
              </label>
              <div className="flex bg-white py-1 flex border border-gray-200">
                <input
                  required
                  type="file"
                  name="xlsxfile"
                  id="xlsxfile"
                  className="w-full"
                  onChange={(e) => setXlsxFile(e.target.files[0])}
                />
              </div>
            </fieldset>
            <button
              type="submit"
              className="border bg-custom-blue bg-indigo-500  text-white p-2 hover:text-custom-blue hover:border-custom-blue hover:bg-indigo-300 rounded mt-3 transition duration-500"
             
            >
              UPLOAD XLSX
            </button>
          </form>
        </div>
      </div>
    </div>


    </Modal>
    </div>
  );
};

export default AddProduct;

// import React from 'react'
// import TextField from '@mui/material/TextField';
// import Coursal from '../coursal/coursal'
// import Button from '@mui/material/Button';
// import './clender.css'
// const Clendar=()=>{
    
    
//     return(
//         <>
//         <div className="  shadow-xl   h-full w-full flex  item-center justify-center ">


//             <div className="coursalcontianer    md:flex sm:flex-col md:flex-row" >
       


//         <div className="coursals flex  flex-col   sm:order-last md:order-first bg-white shadow-2xl text-gray-600  m-1 p-3 rounded-lg  " >
              
        
//         <div className="grid  grid-cols-2  w-full    p-3  ">
//             <label className="text-2xl mr-3 text-indigo-500 ">Product Name</label>
//                 <TextField id="outlined-basic border-red-500" label="Product" variant="outlined" />
//             </div>
//             <div className="grid  grid-cols-2  w-full    p-3  ">
//                 <label className="text-2xl mr-3 text-indigo-500 ">Description Name</label>
//                 <TextField id="outlined-basic border-red-500" label="Description Name" variant="outlined" />
//             </div>
//             <div className="grid  grid-cols-2  w-full    p-3  ">
//                 <label className="text-2xl mr-3  text-indigo-500 ">Price</label>
//                 <TextField id="outlined-basic border-red-500" label="Price" variant="outlined" />
//             </div>
//             <div className="grid  grid-cols-2  w-full    p-3  ">
//                 <label className="text-2xl mr-3  text-indigo-500 ">Original</label>
//                 <TextField id="outlined-basic border-red-500" label="Original" variant="outlined" />
//             </div>
//             <div className="grid  grid-cols-2  w-full    p-3  ">
//                 <label className="text-2xl mr-3  text-indigo-500 ">Bulk/Single Image</label>
//                 <TextField id="outlined-basic border-red-500" label="Bulk/Single Image" variant="outlined" />
//             </div>
//             <div className="flex self-end w-full h-full     items-center justify-center   p-3   ">
                
//             <Button className="border-white border-4 text-white">Upload</Button>
//             </div>
          

//       </div>

//         <div className=" coursals flex  flex-col  bg-white  shadow-2xl text-gray-600  m-1  p-3 rounded-lg " >
// {/*               
//          <div>
//            <Coursal/>
//          </div>        */}
//          <div className="flex flex-col p-3">
//              <div className="mb-1"><p>Add Product</p></div>
//              <div className="rounded  border-2  border-dashed h-56 relative">
//                  <p className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">  Drag & Drop</p>
               
//              </div>
//              <div>
                 
//              </div>
//          </div>
//       </div>

//             </div>


//         </div>
//         </>
//     )
// }
// export default Clendar