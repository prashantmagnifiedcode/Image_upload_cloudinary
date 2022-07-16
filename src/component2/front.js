import React, { useState,useEffect } from "react";
import {useSelector,useDispatch} from 'react-redux'
import TextField from '@mui/material/TextField';
import {UploadUserData} from '../Redux/action'
import Button from '@mui/material/Button';
const Upload = () => {
  const states=useSelector((state)=>state.Imagecollector)
  const dispatch= useDispatch()
 
  const [data, setData] = useState({name: "",description:"", image: "",});
  useEffect(async() => {
   
      const res = await fetch(`http://localhost:5000/user`);
      const data = await res.json();
       dispatch(UploadUserData(data))
       
   
  }, [data]);
  const handleChange =(e) => {
      const value = e.target.name === "image" ? e.target.files[0] : e.target.value;
      setData({ ...data, [e.target.name]: value });
    };

  const handleSubmit = async () => {
    try {
      let formData = new FormData();
      console.log(data)
      formData.append("image", data.image);
      formData.append("description", data.description);
      formData.append("name", data.name);
      const res = await fetch(`http://localhost:5000/user`, {
        method: "POST",
        body: formData,
      });
      if (res.ok) {
        
        setData({ name: "", description:"",image: "" });
        alert("Upload Successfully")
      }
    } catch (error) {
      console.log(error);
    }
  };
  
  return (
    <div style={{ display:"grid", gridTemplateRows:"20% auto", height:"100%",width:"100%" }}>
      <div className="mb-3 bg">
      <TextField  color="success" focused
      label="Name"
        placeholder="Enter name"
        type="text"
        name="name"
        value={data.name}
        onChange={(e)=>handleChange(e)}
        style={{margin:"2px"}}
      />
      <TextField  color="success" focused
      label="Description"
         placeholder="description"
         type="text"
         name="description"
         value={data.description}
         onChange={(e)=>handleChange(e)}
         style={{margin:"2px"}}
      />
      <TextField  color="success" focused
      label="Image_File"
       border={0}
       type="file"
       accept="image/*"
       name="image"
       onChange={(e)=>handleChange(e)}
       style={{margin:"2px"}}
      />
       <Button variant="contained" style={{height:"52px",width:"80px"}} onClick={handleSubmit}>Upload</Button>
     </div>
      <div style={{display:"flex",flexWrap:"wrap" ,padding:"5px"}}>
      {
        states.length===0?<h1>No Image is Available</h1>:
        states?.map((e)=>{
          console.log(e.avatar)
          return(
            <>
            <div style={{display:"flex",flexDirection:"column" ,padding:"4px" ,border:"1px solid skyblue"}}>
            
            <img src={e.avatar} alt="image" height={200} width={200} style={{margin:"3px"}} />
               <h3>Name:{e.name}</h3>
               <h3>Description:{e.Description}</h3>
           </div>
            </>
          )
        })

      }

      </div>
    </div>
  );
};

export default Upload;
