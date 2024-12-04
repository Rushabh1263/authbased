import { Routes ,BrowserRouter as Router , Route, Form } from "react-router-dom"

import Infocontext from "./context/InfoContext"
import { useState } from "react"

import Home from "./Home"
import Subscribed1 from "./components/Subscribed1"
import Subscribed2 from "./components/Subscribed2"
import Admin1 from "./components/Admin1"
import Admin2 from "./components/Admin2"
import Navbar from "./Navbar"

function App() {
  
    const [name,setName] = useState("")
    const [age,setAge] = useState("")
    const [role,setRole] = useState("User")

  return (
    <>
     <Infocontext.Provider value={{name,setName,age,setAge,role,setRole}}>
      
      <Router>
         <Routes>
             <Route path="/" element = {<Home></Home>}/>
             <Route path = "/Subscriber1" element={<Subscribed1></Subscribed1>} />
             <Route path="/Subscriber2" element={<Subscribed2></Subscribed2>} />
             <Route path = "/Admin1" element={<Admin1></Admin1>} />
             <Route path = "/Admin2" element={<Admin2></Admin2>} />
         </Routes>
      </Router>
      </Infocontext.Provider> 
    </>
  )
}

export default App
