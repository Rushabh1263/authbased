import React from 'react'
import { Link } from 'react-router-dom'
import { useContext } from 'react'
import Infocontext from './context/InfoContext'

const Navbar = () => {
  const {role} =  useContext(Infocontext)
  return (
    <div>
       
       <Link to="/"> Home </Link>
       {role == "Admin"  || role == "Subscriber" ?
       <>
       <Link to="/Subscriber1"> Subscriber1 </Link>
       <Link to="/Subscriber2"> Subscriber2 </Link>
       </>
       :<></>}
       {role == "Admin" ?<>
        <Link to="/Admin1"> Admin1 </Link>
        <Link to="/Admin2"> Admin2 </Link>
       </>:<></>}
       
    </div>
  )
}

export default Navbar