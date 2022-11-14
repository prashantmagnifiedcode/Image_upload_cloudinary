import React from 'react'
import FadeMenu from '../User/option'
import CustomizedInputBase from '../User/search'
import BasicTable from '../User/table'

const PaymentList=()=>{
    return(
        <>
        <div className=" w-full">
            {/* filers */}
            <div className=" h-1/5 m-2 bg-white rounded-lg p-2 ">
             <div className=" h-1/3 text-2xl font-bold  text-gray-400  "><p>{" "}Filter</p></div>

             <div className="  flex h-2/3   justify-evenly  ">

                 <div className="  w-1/4    rounded-lg">
                     <div className="   h-1/3   text-gray-400  font-bold">

                 <p >Role</p>
                     </div>
                 <div className=" h-2/3">

                <FadeMenu  type="Role"/>
                 </div>
                 </div>
                 
                 <div className="  w-1/4     rounded-lg">
                     <div className="   h-1/3  text-gray-500   font-bold">

                 <p >Plan</p>
                     </div>
                 <div className=" h-2/3 ">

                <FadeMenu type="Plan" />
                 </div>
                 </div>

                 <div className="  w-1/4     rounded-lg">
                     <div className="  h-1/3  text-gray-500   font-bold">

                 <p >Status</p>
                     </div>
                 <div className=" h-2/3 ">

                <FadeMenu type="Status" />
                 </div>
                 </div>

               
             </div>
             
            </div>

           {/* PaymentList list */}
              <div className="bg-white h-4/5 m-2 rounded-lg">
              
              <div className=" bg-indigo-500 p-3 flex justify-between items-center ">
            
              <button className=" text-white border-indigo-50 border-2 p-3 rounded-lg hover:bg-indigo-300 hover:rounded-full "><p>Add User</p></button>
              
               <CustomizedInputBase />
              </div>

              <div>
               <BasicTable/>
                 
              </div>
  
              </div>
        </div>
        </>
    )
}
export default PaymentList