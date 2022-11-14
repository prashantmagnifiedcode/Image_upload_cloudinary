import {  Button } from "react-bootstrap";
import React, { useState } from "react";

import {Link} from "react-router-dom"

// import { useNavigate } from "react-router-dom";
import {useSelector,useDispatch} from 'react-redux';
import { event } from '../../../Redux/Axios/event.js';
import Modal from './modal.jsx'
const Popping = ({open, setOpen,rerender,renderStatus})=> {
  const mystate= useSelector((state)=>state)
  const dispatch= useDispatch()
  //  const navigate = useNavigate();
   const {id, describe, title, start, end} =mystate.event;

   const handleDelete =async () => {
     
     
     try {
       const result = await event.delete(`/calendars/${id}/delete`)
         console.log(result.status)
         if(result.status==200){
          setOpen(false)
          //  await dispatch({
          //   type: "DELETE_EVENT",
          //   payload: id
          // })
          rerender(!renderStatus)

         }else{

           setOpen(false)
         }
     }catch(err){
        //  const message = await result.data.message;
         console.log("error")
         setOpen(false)
     }
   }



   if(id){
     return (
       <>
       <Modal
      isModal={open}
      setIsModal={setOpen}
      title="box"
      
    >
      
            {/* <Modal.Title className="text-capitalize">{title}</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            {describe? <p className="lead">{describe}</p>: "No Dsecriptions Yet"}
          </Modal.Body> */}
          
          <div>
            <p className="col small text-muted text-center pb-0 mb-0">from: {start}</p>
            <p className="col small text-muted text-center pb-0 mb-0">from: {describe}</p>
            <p className="col small text-muted text-center pb-0 mb-0">to: {end}</p>
          </div>
     
            {/* <Button variant="warning" onClick={()=>setOpen(false)}>Close</Button> */}
            <Link to={`/calendars/event/${id}/update`}><button variant="success">Update</button></Link>
            <Button variant="danger" onClick={handleDelete}>Delete</Button>
        
      </Modal>
       </>
     )
   }else{
    <Modal
    isModal={open}
    setIsModal={setOpen}
    title="box"
    
  >
    
          {/* <Modal.Title className="text-capitalize">{title}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {describe? <p className="lead">{describe}</p>: "No Dsecriptions Yet"}
        </Modal.Body> */}
  
          <p>there is no modal to preview</p>
      
    </Modal>
   }
   
  }

  
  
  export default Popping;