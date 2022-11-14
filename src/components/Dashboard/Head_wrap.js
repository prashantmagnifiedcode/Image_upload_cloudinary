import React from 'react'
import './dashs.css'
import Header from "./Header/Header.jsx";
const Head_Wrap=({children})=>{
    return (
        <>
        <div className="header">
        <Header />
      </div>  
       <div className="Card_section  overflow-y-scroll   ">

    {children}
</div>

        </>
    )
}
export default Head_Wrap;