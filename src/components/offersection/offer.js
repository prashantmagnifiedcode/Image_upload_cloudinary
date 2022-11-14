import axios from "axios";
import React, { useEffect } from "react";
import { useState } from "react";


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



const AddOfferProduct = () => {


  return (
    <div  className=" w-full">
      <div className="px-6 mb-8">
      <div
        style={{
          
          backgroundColor: "white",
          
          borderTop: "1px solid #494949",
          
        }}
        className=" font-bold   text-gray-600 uppercase focus:bg-white my-2 p-4 flex border  border-gray-300 rounded svelte-1l8159u"
      >
    Offer Section
      </div>
      <form action="" className="flex">
          <div className=" grid justify-items-center border-2 p-3 w-1/2 mb-2">
              <div className="flex flex-col w-5/6">

              <div className="border-2 border-dotted w-full rounded-lg" style={{height:"250px"}}>img</div>
             
              <div className="bg-white my-2 p-1 flex border border-gray-300 rounded svelte-1l8159u">
              <input
                required
                autoComplete="off"
               
                type="text"
                name="name"
                 placeholder="Description"
                className="p-1 px-2 appearance-none outline-none w-full text-gray-800"
              />
            </div>
              <div className="bg-white my-2 p-1 flex border border-gray-300 rounded svelte-1l8159u">
              <input
                required
                autoComplete="off"
               
                type="text"
                name="name"
                 placeholder="Description"
                className="p-1 px-2 appearance-none outline-none w-full text-gray-800"
              />
            </div>
              <div className="bg-white my-2 p-1 flex border border-gray-300 rounded svelte-1l8159u">
              <input
                required
                autoComplete="off"
               
                type="text"
                name="name"
                 placeholder="Description"
                className="p-1 px-2 appearance-none outline-none w-full text-gray-800"
              />
            </div>
              </div>

          </div>
          <div className=" flex flex-col border-2 p-3 w-1/2 ">
               <div className="grid grid-cols-2 gap-1 ">

              <div className="bg-white my-2 p-1 flex border border-gray-300 rounded svelte-1l8159u">
              <input
                required
                autoComplete="off"
               
                type="text"
                name="name"
                 placeholder="Offer starting"
                className="p-1 px-2 appearance-none outline-none w-full text-gray-800"
              />
            </div>
              <div className="bg-white my-2  p-1 flex border border-gray-300 rounded svelte-1l8159u">
              <input
                required
                autoComplete="off"
               
                type="text"
                name="name"
                 placeholder="Offer ending"
                className="p-1 px-2 appearance-none outline-none w-full text-gray-800"
              />
            </div>
               </div>
            

          </div>
         
      </form>
       
        
      </div>
    </div>
  );
};

export default AddOfferProduct;
