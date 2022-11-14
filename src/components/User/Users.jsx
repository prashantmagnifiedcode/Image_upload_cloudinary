import React from 'react'
import FadeMenu from './option'
import CustomizedInputBase from './search'
import BasicTable from './table'
import SelectSmall from '../Payment/slector'
import Head_Wrap from '../Dashboard/Head_wrap'
const Users=()=>{
    return(
        <>
        <Head_Wrap>

        <div className=" w-full">
            
            <div className=" h-1/8 m-2 bg-white rounded p-2 ">
             <div className=" h-1/3 text-xl 	font-bold text-gray-600 uppercase ">{" "}<p style={{fontSize:"17px"}}>Filter</p></div>

             <div className="  flex h-2/3   justify-evenly  ">

                 <div className="  w-1/4    rounded-lg">
                     <div className="   h-1/3   font-bold text-gray-600 uppercase">
                  
                 <p  style={{fontSize:"15px"}}>Role</p>
                     </div>
                 <div className=" h-2/3">

                 <SelectSmall/>
                 </div>
                 </div>
                 
                 <div className="  w-1/4     rounded-lg">
                     <div className="   h-1/3  font-bold text-gray-600 uppercase">

                 <p style={{fontSize:"15px"}}>Plan</p>
                     </div>
                 <div className=" h-2/3 ">

                <SelectSmall />
                 </div>
                 </div>

                 <div className="  w-1/4     rounded-lg">
                     <div className="  h-1/3  font-bold text-gray-600 uppercase">

                 <p style={{fontSize:"15px"}} >Status</p>
                     </div>
                 <div className=" h-2/3 ">

                <SelectSmall/>
                 </div>
                 </div>

               
             </div>
             
            </div>

           {/* users list */}
              <div className="bg-white h-4/5 m-2 rounded-lg">
              
              <div className=" bg-indigo-500 p-3 flex justify-between items-center ">
            
              <button className=" text-white border-indigo-50 border-2 p-2 rounded-lg hover:bg-indigo-300 hover:rounded-full "><p>Add User</p></button>
              
               <CustomizedInputBase />
              </div>

              <div>
               <BasicTable/>
                 
              </div>
  
              </div>
        </div>
        </Head_Wrap>
        </>
    )
}
export default Users