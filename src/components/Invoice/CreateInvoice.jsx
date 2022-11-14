import React ,{useState}from 'react'
import TextField from '@mui/material/TextField';
import FadeMenu from '../User/option'
import TextareaAutosize from '@mui/material/TextareaAutosize';
import Button from '@mui/material/Button';
import PreviewInvoice from './preview'
import Switch from '@mui/material/Switch';

const label = { inputProps: { 'aria-label': 'Switch demo' } };

const CreateInvoice=()=>{
 const [prev,setprev]=useState(false)
    
    return(

        <>{
            prev?<PreviewInvoice/>:
        
       
         <div className=" h-full w-full flex   flex-col md:flex-row overflow-y-scroll bg-gray-200 round rounded-lg justify-around p-4">
           
        <div  className=" bg-white rounded-lg  md:w-3/4 order-last w-full p-2 overflow-y-auto  ">

            {/* //dataee */}
           <div className="w-full  flex justify-between mb-8  mt-4">
               <div className="flex  ">
                   <label htmlFor=""className="mr-2">Date : </label>
                   <input type="month" name="" id="" />
               </div>
               <div>
               <label htmlFor="" className="mr-2">Due :</label>
                   <input type="month" name="" id="" />
               </div>
           </div>
           <div className="w-full  flex justify-center mb-2">
             
               
                   <p className="text-2xl decoration-1">invoice</p>
               
           </div>
           <hr/>
           <div className="w-full  flex justify-between p-4 flex-wrap">
               <div className="w-1/2 text-black">
                   <div className="w-full m-1">
                       <p>Company Details</p>
                   </div>
                   <input type="email" name="email" id=""  placeholder="Company name" className="bg-gray-100 p-2 w-full rounded-lg m-1"/>
                   <input type="email" name="name" id=""   placeholder="Address" className="bg-gray-100 p-2 rounded-lg m-1"/>
                   <input type="email" name="car " id=""  placeholder="GSITN"  className="bg-gray-100 p-2 rounded-lg m-1"/>
                   <input type="email" name="car " id=""  placeholder="Phone"  className="bg-gray-100 p-2 rounded-lg m-1"/>
                   <input type="email" name="car " id=""  placeholder="Email"  className="bg-gray-100 p-2 rounded-lg m-1"/>
               </div>
               
              
           </div>
           <div className="w-full  flex justify-between p-4 flex-wrap">
               <div className="md:w-1/2  w-full text-black">
                   <div className="w-full m-1">
                       <p>Invoice no.</p>
                   </div>
                   <input type="email" name="email" id="" placeholder="Dated"  className="bg-gray-100 p-2 rounded-lg m-1"/>
                   <input type="email" name="name" id=""  placeholder="Place of supply"  className="bg-gray-100 p-2 rounded-lg m-1"/>
                   <input type="email" name="car " id="" placeholder="Reverse No"  className="bg-gray-100 p-2 rounded-lg m-1"/>
                   <input type="email" name="car " id="" placeholder="GR/RR No"  className="bg-gray-100 p-2 rounded-lg m-1"/>
                   <input type="email" name="car " id="" placeholder="Transport No"  className="bg-gray-100 p-2 rounded-lg m-1"/>
               </div>
               <div className="md:w-1/2 w-full">
               <div className="w-full m-1">
                       <p>Vehicle No</p>
                   </div>
                   <input type="email" name="email" id="" placeholder="Station"  className="bg-gray-100 p-2 rounded-lg m-1"/>
                   <input type="email" name="name" id=""  placeholder="E-way Bill No"  className="bg-gray-100 p-2 rounded-lg m-1"/>
                   <input type="email" name="car " id="" placeholder="P.O No"  className="bg-gray-100 p-2 rounded-lg m-1"/>
                   <input type="email" name="car " id="" placeholder="Challen No"  className="bg-gray-100 p-2 rounded-lg m-1"/>
                   
               </div>
              
           </div>
           <div className="w-full  flex justify-between p-4 flex-wrap">
               <div className="w-1/2 text-black">
                   <div className="w-full m-1">
                       <p>Bill to</p>
                   </div>
                   <input type="email" name="email" id="" placeholder="Invoice no."  className="bg-gray-100 p-2 rounded-lg m-1"/>
                   <input type="email" name="name" id=""  placeholder="GSTIN/UIN "  className="bg-gray-100 p-2 rounded-lg m-1"/>
                  
                  
               </div>
               <div className="w-1/2">
               <div className="w-full m-1">
                       <p>Shipped to</p>
                   </div>
                   <input type="email" name="email" id="" placeholder="Invoice no."  className="bg-gray-100 p-2 rounded-lg m-1"/>
                   <input type="email" name="name" id=""  placeholder="GSTIN/UIN "  className="bg-gray-100 p-2 rounded-lg m-1"/>
                  
                  
               </div>
              
           </div>
               <hr/>

               <div className="w-full  flex justify-between p-4 flex-wrap">
               <div className=" text-black">
                   <div className="w-full m-1">
                       <p>ADD Items</p>
                   </div>
                   <input type="email" name="email" id="" placeholder="Invoice no."  className="bg-gray-100 p-2 rounded-lg m-1"/>
                   <input type="email" name="name" id=""  placeholder="GSTIN/UIN "  className="bg-gray-100 p-2 rounded-lg m-1"/>
                  
                  
               </div>
               
             
              
           </div>


           <div className="w-full  flex justify-between p-4 flex-wrap">
               <div className=" text-black">
                   <div className=" m-1">
                       <p>Bank Details</p>
                   </div>
                   <input type="email" name="email" id="" placeholder="Bank detials"  className="bg-gray-100 p-2 rounded-lg m-1"/>
               </div>
           </div>

 <div className="w-full  flex justify-between p-4 flex-wrap">
               <div className=" w-1/2">
                   <div className="w-full m-1">
                       <p>Term and Condition</p>
                   </div>
                   <textarea type="email" name="email" id="" placeholder="Invoice no."  className="bg-gray-100 p-2 rounded-lg h-full w-full m-4"/>
                 
                  
                  
               </div>
               <div className="w-1/2 p-8">
               <div className="w-full">
                       <p>Reciever Signature</p>
                   </div>
                  
                  
                  
               </div>
              
           </div>




        </div>

        <div className=" rounded-lg h-full md:w-1/5  md:bg-red-500  w-full bg-yellow-500 flex  flex-col  ">

                <div className="bg-indigo-500 text-white w-full p-3 mt-2 mb-2 rounded-lg flex justify-center ">
                    <button >Send Invoice</button>
                </div>
            
                  <div className=" w-full  flex flex-justify ">

                <div className="bg-white   m-1 w-1/2 rounded-lg flex justify-center p-3">
                    <button>Download</button>
                </div>
                <div className="bg-white  m-1 w-1/2 rounded-lg flex justify-center p-3">
                    <button onClick={()=>setprev(true)}>Preview</button>
                </div>

                  </div>

                
                  <div className="bg-white  w-full p-3 mt-2 mb-2 rounded-lg flex justify-center ">
                    
                </div>
                
                  <div className="bg-white  w-full p-3 mt-2 mb-2 rounded-lg flex justify-between ">
                    <div>Payment</div>
                    <div><Switch {...label} defaultChecked /></div>
                </div>
                  <div className="bg-white  w-full p-3 mt-2 mb-2 rounded-lg flex justify-between ">
                    <div>Late payment</div>
                    <div><Switch {...label} defaultChecked /></div>
                </div>
        
        
        
        </div>





        </div>}
     
    </>)
}
export default CreateInvoice