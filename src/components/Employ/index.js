import React from 'react'
import Profile from './card'
const Emply=()=>{
    return(
        <>
        <div className="d-flex ">
            <div className="w-screen flex justify-center">
               < input type="text" className=" p-2 w-1/2 rounded-full" placeholder="Search" />
            </div>

        <Profile/>
        <Profile/>
        </div>
        </>
    )
}
export default Emply