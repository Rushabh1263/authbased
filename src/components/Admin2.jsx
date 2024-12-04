import Navbar from "../Navbar"
import React, { useContext } from 'react'
import Infocontext from "../context/InfoContext"

const admin2 = ()=>{
    const {role} =  useContext(Infocontext)
    return(
        <>
         <Navbar/>
          admin2
          {role}
        </>
    )
}

export default admin2