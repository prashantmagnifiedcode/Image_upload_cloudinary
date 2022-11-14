import React from 'react'


import { Link ,useHistory} from "react-router-dom";
import HomeIcon from '@mui/icons-material/Home';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import ChatBubbleOutlineOutlinedIcon from '@mui/icons-material/ChatBubbleOutlineOutlined';
import CalendarTodayOutlinedIcon from '@mui/icons-material/CalendarTodayOutlined';
import InsertDriveFileIcon from '@mui/icons-material/InsertDriveFile';
import PeopleAltIcon from '@mui/icons-material/PeopleAlt';
import SettingsIcon from '@mui/icons-material/Settings';
import DescriptionIcon from '@mui/icons-material/Description';
import PlaylistAddCheckIcon from '@mui/icons-material/PlaylistAddCheck';
import ForumIcon from '@mui/icons-material/Forum';
import LogoutIcon from '@mui/icons-material/Logout';
import {useContextState} from '../../../Redux/Global/GlobalContext.js'
const SideBarMenu=()=>{
    const{logout,authState}=useContextState()
     const willdisplay=authState.WhichUser
     const history = useHistory()
     const logoutUser = () => {
        logout();
        history.push("/Login");
      };
    return(
        <>
     
            <div class="_index">
                <div style={{padding:"10px"}}>
              <img height="100%" width="100%" src="https://pixinvent.com/demo/vuexy-vuejs-admin-dashboard-template/demo-2/img/logo.36f34a9f.svg" alt="" srcset="" />

                </div>
                <div className="menu_data">
                    <div  className="icons">
                <Link to="/">

                    <HomeIcon style={{fontSize:"20px"}}/>
                </Link>
                    </div>

                    <div className="icons">

                    <EmailOutlinedIcon style={{fontSize:"20px"}}/>
                    </div>
                    <div className="icons">

                    <ChatBubbleOutlineOutlinedIcon style={{fontSize:"20px"}}/>
                    </div>
                    <div className="icons">

                    <CalendarTodayOutlinedIcon style={{fontSize:"20px"}}/>
                    </div>
                    <div className="icons">
                     <Link to="/Profile">
                    <PeopleAltIcon style={{fontSize:"20px"}}/>
                     </Link>
                    </div>
                    <div className="icons">
                     <Link to="/users">
                    <PeopleAltIcon style={{fontSize:"20px"}}/>
                     </Link>
                    </div>
                    <div className="icons">
                    <Link to="/Clendar">
                
                    <InsertDriveFileIcon style={{fontSize:"20px"}}/>
                    </Link>
                    </div>
                    <div className="icons">
                    <Link to="/calendars">
                
                    <InsertDriveFileIcon style={{fontSize:"20px"}}/>
                    </Link>
                    </div>
                    <div className="icons">
                    <Link to="CreateInvoice">
                
                    <DescriptionIcon style={{fontSize:"20px"}}/>
                    </Link>
                    </div>
                    <div className="icons">
                    <Link to="Todo">
                
                    <PlaylistAddCheckIcon style={{fontSize:"20px"}}/>
                    </Link>
                    </div>
                    <div className="icons">
                    <Link to="ChatBox">
                
                    <ForumIcon style={{fontSize:"20px"}}/>
                    </Link>
                    </div>
                    {willdisplay==1?<>
                    <div className="icons">
                    <Link to="ListedProduct">
                
                    List
                    </Link>
                    </div>
                    <div className="icons">
                    <Link to="PendingForApproval">
                
                    Pend
                    </Link>
                    </div></>:null
                    }
                    <div className="icons">
                    
                
                    <LogoutIcon style={{fontSize:"20px"}} onClick={logoutUser}/>

                    </div>
                    
                   

                </div>
 

                    <div className="icons flex   items-end justify-center pb-4 ">
                    <Link to="/Clendar">
                
                    <SettingsIcon className=" animate-spin"style={{"font-size":"30px","color":"gray"}}/>
                   
                    </Link>
                    </div>
            </div>





            
        
        </>
    )
}
export default SideBarMenu