import React ,{useState}from 'react'
import Button from '@mui/material/Button';
import Avatar from '@mui/material/Avatar';
import EditIcon from '@mui/icons-material/Edit';
import Modal from './Modal'
import './profile.css'
const Profile=()=>{
    const [isProductModal, setIsProductModal] = useState(false);
    return(
        <>
          <Modal
      isModal={isProductModal}
      setIsModal={setIsProductModal}
      title="Profile"
    ></Modal>

        <div className=" bg-white rounded-lg m-2 relative" style={{width:"320px" ,boxShadow : " rgba(0, 0, 0, 0.16) 0px 1px 4px"}}>
            <div className="pro" style={{height:"180px"}}>
                    
                <div clssName="flex ">
                    <EditIcon/>
                </div>
                
                <div className=" absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2" >

            <Avatar alt="Travis Howard" className="inline-flex" src="https://static.remove.bg/remove-bg-web/c05ac62d076574fad1fbc81404cd6083e9a4152b/assets/start_remove-c851bdf8d3127a24e2d137a55b1b427378cd17385b01aec6e59d5d4b5f39d2ec.png" sx={{ width: 84, height: 84 }}/>
                <div className="flex flex-col justify-center items-center">
                    <p style={{fontSize:"16px",fontWeight:"500"}}>Developer</p>
                    <p style={{fontSize:"14px",fontWeight:"450",}}>Prashant</p>
                    </div>
                </div>
                
                <div className="btn">
                    <button  onClick={()=>setIsProductModal(true)}>view</button>
                </div>
            </div>
            {/* <div className="flex justify-center pro1" style={{height:"180px"}}>
                
            
            </div> */}

        </div>
        </>
    )
}
export default Profile