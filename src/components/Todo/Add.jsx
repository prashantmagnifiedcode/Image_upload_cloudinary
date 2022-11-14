import React from 'react'
import StarBorderOutlinedIcon from '@mui/icons-material/StarBorderOutlined';
import CloseIcon from '@mui/icons-material/Close';
import TextField from '@mui/material/TextField';
import Button from "@mui/material/Button";
import {Link} from 'react-router-dom'
import './todo.css'
const TodoAdd=()=>{
  
  
    return (
        <>
       
        
        <div className= "  h-screen w-full   grid  grid-flow-col  ">
         
       
         
          <div className="h-full bg-white  shadow-lg   ">
                
                
                <div className=" h-20 w-full bg-gray-50   grid grid-flow-col p-2 ">
              
                   <div className="flex items-center pl-2 font-bold text-lg "><p>Add Task</p></div>
                    <div className="col-start-3 ">
                      <div className="flex w-full h-full justify-end pr-2  items-center ">
                      <StarBorderOutlinedIcon className="text-yellow-500 m-3" />
                     
                      </div>
                      </div>
                  </div>

              <div className=" w-full  grid grid-flow-col p-2 ">
                     <div>
                       <div className="pb-3 pl-4 font-mono text-gray-500 ">

                       <label>Title</label>
                       </div>
                       <div  className="flex justify-center">

                       <TextField id="outlined-basic border-red-500" label="Product" variant="outlined" className="w-5/6 " sx={{height:"20%"}}/>
                       </div>
                       </div>
             </div>

              <div className=" w-full  grid grid-flow-col p-2 ">
                     <div>
                       <div className="pb-3 pl-4 font-mono text-gray-500 ">

                       <label>Assignee</label>
                       </div>
                       <div   className="flex justify-center">

                       <TextField id="outlined-basic border-red-500" label="Product" variant="outlined" className="w-5/6 " sx={{height:"20%"}}/>
                       </div>
                       </div>
             </div>

              <div className=" w-full  grid grid-flow-col p-2 ">
                     <div>
                       <div className="pb-3 pl-4 font-mono text-gray-500 ">

                       <label>Due Date</label>
                       </div>
                       <div   className="flex justify-center">

                       <TextField id="outlined-basic border-red-500" label="Product" variant="outlined" className="w-5/6 " sx={{height:"20%"}}/>
                       </div>
                       </div>
             </div>

              <div className=" w-full  grid grid-flow-col p-2 ">
                     <div >
                       <div className="pb-3 pl-4 font-mono text-gray-500 ">

                       <label>Tag</label>
                       </div>
                       <div   className="flex justify-center">

                       <TextField id="outlined-basic border-red-500" label="Product" variant="outlined" className="w-5/6   " sx={{height:"20%"}}/>
                       </div>
                       </div>
             </div>
              <div className=" w-full  grid grid-flow-col p-2 ">
                     <div>
                       <div className="pb-3 pl-4 font-mono text-gray-500 ">

                       <label>Description</label>
                       </div>
                       <div   className="flex justify-center  ">

                       <textarea  id="outlined-basic border-red-500" label="Product" variant="outlined" className="w-5/6  border-2 border-gray-300 rounded-lg" sx={{height:"20%"}}/>
                       </div>
                       </div>
             </div>
              <div className=" w-full  grid grid-flow-col p-2 ">
                     <div className="grid grid-flow-col w-1/2  gap-4 ">
                     <Button variant="contained" style={{background:"#6366f1"}}>Add</Button>
                     <Button variant="contained" style={{background:"#6366f1"}}>Reset</Button>

                     </div>
                
             </div>


                
         
            </div>
        
        
        </div>


        </>
    )
}
export default TodoAdd;