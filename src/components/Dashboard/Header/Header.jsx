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
import { Link ,useHistory} from "react-router-dom";
import Badge from '@mui/material/Badge';
import SwipeableDrawer from "@material-ui/core/SwipeableDrawer";
import  SideBarMenu from '../SideBar/SideBar1'
import { makeStyles } from "@material-ui/core/styles";
import Box from '@mui/material/Box'
import Popper from '@mui/material/Popper';
import {useContextState} from '../../../Redux/Global/GlobalContext.js'
const Header = () => {
  const [isOpenDrawer, setIsOpenDrawer] = useState(false);
  const{logout,authState}=useContextState()
  const history=useHistory()
  console.log("which user",authState.WhichUser)
  const useStyles = makeStyles((theme) => ({
    grow: {
  
      "& .MuiDrawer-paperAnchorLeft": {
        width:"20%"       
        
      },
    },
    
  }))
  const classes= useStyles()
  const [anchorEl, setAnchorEl] = React.useState(null);
  
  const handleClick = (event) => {
    setAnchorEl(anchorEl ? null : event.currentTarget);
  };
  
  const logoutUser = () => {
    logout();
    history.push("/Login");
  };
  const open = Boolean(anchorEl);
  const id = open ? 'simple-popper' : undefined;

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
      sx={{ width: anchor === 'top' || anchor === 'bottom' ? 'auto' : 70 }}
      className={classes.grow}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
      
    >
      
<div>

  <SideBarMenu/>
</div>

    </Box>
    </>
  );
  return (
    <>
    <header className="header_container">
     <div className="inside sm:block md:hidden" >
      <ul >
        <li><MenuOutlinedIcon   onClick={toggleDrawer(true)} style={{"font-size":"25px"}} className="cursor-pointer" /></li>
        </ul>
     </div>
     <div className="inside md:flex md:justify-end">
      <ul>
        
        <li><DarkModeOutlinedIcon style={{"font-size":"25px"}} aria-describedby={id}  onClick={handleClick}/>
        <Popper id={id} open={open} anchorEl={anchorEl} style={{width:"150px"}}>
          
        
        <div className="flex flex-coloumn  bg-white " >
          <div className="flex  justify-center">

            <div onClick={logoutUser}>
          <Avatar alt="Remy Sharp" 
       sx={{ width: 35, height: 35 }}
      src="https://i.ytimg.com/vi/WV_0WylRdNo/maxresdefault.jpg"/>
              </div>

            <div>
            <p>Firecoder</p>
             <p>discribe</p>
             </div>

            </div>
          


          </div>
        
      </Popper>
        </li>

        <li><FindReplaceOutlinedIcon style={{"font-size":"20px"}}/></li>
        <li><ShoppingCartOutlinedIcon style={{"font-size":"20px"}}/></li>
        <li>
        <Badge badgeContent={4} color="primary">
          < NotificationsNoneOutlinedIcon style={{"font-size":"20px"}}/>
          </Badge>
          </li>
        
        <li> 
        <Stack direction="row" >
     <Link to="Login">
     <Avatar alt="Remy Sharp" 
       sx={{ width: 35, height: 35 }}
      src="https://i.ytimg.com/vi/WV_0WylRdNo/maxresdefault.jpg"/>
     </Link> 
          </Stack>
           </li>
           <li></li>
        </ul>
     </div>
    </header>
     <div>
     <SwipeableDrawer
     anchor={"left"}
     open={isOpenDrawer}
     onClose={toggleDrawer(false)}
     onOpen={toggleDrawer(true)}
   >
    {list("left")}
   </SwipeableDrawer>
   </div>
   </>
  );
};

export default Header;
