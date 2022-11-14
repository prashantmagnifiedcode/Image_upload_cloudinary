import React ,{useState}from "react";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import Button from "@mui/material/Button";
import StarBorderIcon from "@mui/icons-material/StarBorder";
import DoneIcon from "@mui/icons-material/Done";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import CustomizedInputBase from '../User/search'
import Checkbox from '@mui/material/Checkbox';
import {Link} from 'react-router-dom'
import Box from '@mui/material/Box';
import { List, ListItem, ListItemIcon, ListItemText } from "@material-ui/core";
import SwipeableDrawer from "@material-ui/core/SwipeableDrawer";
import TodoAdd from './Add'
import { makeStyles } from "@material-ui/core/styles";
import { Reorder } from "framer-motion/dist/framer-motion"

const useStyles = makeStyles((theme) => ({
  grow: {
   
    "& .MuiDrawer-paperAnchorRight": {
      width:"50%",
      backgroundColor: "#161a1d",
    },
  },
  
}))
const Todo = () => {
  const [items, setItems] = useState([1,2,3,4,5])
  const classes= useStyles()
  const [isOpenDrawer, setIsOpenDrawer] = useState(false);

  const toggleDrawer = (open) => (event) => {
    if (
      event &&
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }
    setIsOpenDrawer(open);
  };
  const list = (anchor) => (
    <>
    <Box 
      sx={{ width: anchor === 'top' || anchor === 'bottom' ? 'auto' : 450 }}
      className={classes.grow}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >

      <TodoAdd/>

    </Box>
    </>
  );
  return (
    <>
       
      <div className=" w-full   h-screen p-2  grid md:grid-cols-5 gap-2 sm:grid-cols-1  ">
    
        <div className=" grid md:grid-col-1 ">
         <div className=" grid gid-row-1 gap-2 ">

          <div className=" bg-white pl-1  rounded-lg border-2 border-gray-500">
          <div  className=" w-full">
               <CustomizedInputBase />
    
              </div>
          <div className=" flex w-full justify-center pt-3 mb-5 ">
                 <div className="bg-indigo-500  w-1/2 rounded-lg p-3 flex justify-center hover:bg-indigo-300 font-sans font-bold">

            <button type="submit"  onClick={toggleDrawer(true)}  >ADD</button>
          </div>
          </div>

          <div className=" gap-5">
            <div className=" mb-2 pt-2 pb-2 border-l-2  hover:text-indigo-300  hover:border-blue-600 ">
              <div className=" grid grid-cols-4  ">
                <div className=" grid justify-center">
                  <EmailOutlinedIcon />
                </div>
                <p className="grid col-span-3  font-bold ">My Task</p>
              </div>
            </div>

            <div className="mb-2 pt-2 pb-2 border-l-2  hover:text-indigo-300  hover:border-blue-600 ">
              <div className=" grid grid-cols-4  ">
                <div className=" grid justify-center">
                  <StarBorderIcon />
                </div>
                <p className="col-span-3 font-bold">Important</p>
              </div>
            </div>
            <div className="mb-2 pt-2 pb-2 border-l-2  hover:text-indigo-300  hover:border-blue-600 ">
              <div className=" grid grid-cols-4  ">
                <div className=" grid justify-center">
                  <DoneIcon />
                </div>
                <p className="col-span-3 font-bold">Compeleted</p>
              </div>
            </div>
            <div className="mb-2 pt-2 pb-2 border-l-2  hover:text-indigo-300  hover:border-blue-600 ">
              <div className=" grid grid-cols-4  ">
                <div className=" grid justify-center">
                  <DeleteOutlineIcon />
                </div>
                <p className="col-span-3 font-bold">Delete</p>
              </div>
            </div>
          </div>
        </div>
          </div>
        </div>
        <div className="bg-white  md:col-span-4 sm:col-span-0 rounded-lg p-1 ">


        <Reorder.Group axis="y" values={items} onReorder={setItems}>
      
      {items.map((item) => (
              <Reorder.Item key={item} value={item}>
                
          <div className="w-full flex justify-between bg-white-110 border-2 border-gray-300 rounded-lg items-center pt-2 pb-2 mb-1">
            <div className="flex items-center">
                <div>

            <Checkbox
            color="primary"
           
            inputProps={{
              'aria-label': 'select all desserts',
            }}
          />
                </div>
           
               <p>Fix Responsiveness for new structure 💻</p>
           
                </div>

             
              <div className="  text-gray-500 flex items-center text-lg">
              <p className="mr-3  ">4/5/8</p>
    <DeleteOutlineIcon  />
              </div>

          </div>
              </Reorder.Item>
            ))}
            
          </Reorder.Group>
            {/* <div className="w-full flex  bg-white  h-full  rounded-lg  
            items-center justify-center
            text-gray-500 text-4xl ">
                <p><strong>N</strong>othing</p>
             
            </div> */}




          </div>
      </div>
      <SwipeableDrawer
     anchor={"right"}
     open={isOpenDrawer}
     onClose={toggleDrawer(false)}
     onOpen={toggleDrawer(true)}
   >
    {list("right")}
   </SwipeableDrawer>
    </>
  );
};
export default Todo;
