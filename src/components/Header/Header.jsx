import React  ,{useState}from "react";
import "./header.css"
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import ChatBubbleOutlineOutlinedIcon from '@mui/icons-material/ChatBubbleOutlineOutlined';
import CalendarTodayOutlinedIcon from '@mui/icons-material/CalendarTodayOutlined';
import StarBorderOutlinedIcon from '@mui/icons-material/StarBorderOutlined';
import DarkModeOutlinedIcon from '@mui/icons-material/DarkModeOutlined';
import FindReplaceOutlinedIcon from '@mui/icons-material/FindReplaceOutlined';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import NotificationsNoneOutlinedIcon from '@mui/icons-material/NotificationsNoneOutlined';
import MenuOutlinedIcon from '@mui/icons-material/MenuOutlined';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';
import CustomizedMenus from './Option'

const Header = () => {
   const [opt,setopt]=useState(["french","americaln","india"])

  return (
    <header className="header_container">
     <div className="inside" >
      <ul >
        <li><MenuOutlinedIcon style={{"font-size":"25px"}}/></li>
        <li><EmailOutlinedIcon  style={{"font-size":"25px"}}/></li>
        <li>< ChatBubbleOutlineOutlinedIcon style={{"font-size":"25px"}}/></li>
        <li><CalendarTodayOutlinedIcon style={{"font-size":"25px"}}/></li>
        <li style={{color:"orange"}}><StarBorderOutlinedIcon style={{"font-size":"25px"}}/></li>
        </ul>
     </div>
     <div className="inside">
      <ul>
        
        <li><DarkModeOutlinedIcon style={{"font-size":"25px"}}/></li>
        <li><FindReplaceOutlinedIcon style={{"font-size":"25px"}}/></li>
        <li><ShoppingCartOutlinedIcon style={{"font-size":"25px"}}/></li>
        <li>< NotificationsNoneOutlinedIcon style={{"font-size":"25px"}}/></li>
        <li>prashant srivastava</li>
        <li> 
        <Stack direction="row" >
      <Avatar alt="Remy Sharp" 
       sx={{ width: 25, height: 25 }}
      src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8cGVyc29ufGVufDB8fDB8fA%3D%3D&w=1000&q=80" />
          </Stack>
           </li>
           <li></li>
        </ul>
     </div>
    </header>
  );
};

export default Header;
