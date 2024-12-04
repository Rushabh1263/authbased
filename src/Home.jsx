import { useContext } from "react"
import Infocontext from "./context/InfoContext";
import Navbar from "./Navbar";



const Home = ()=>{
    
    const{name,setName,age,setAge,role,setRole} = useContext(Infocontext)

    const handleChange = (event) => {
        setRole(event.target.value);
    };

    
    return (
        <>
          <Navbar/>
           <h1>Routing based access</h1>
           <input type="text" placeholder="Name" />
           <input type="text" placeholder="Name" />
           <select  value={setRole}  onChange={handleChange} >
             <option value="User">{role}</option>
             <option value="User">User</option>
             <option value="Subscriber">Subscriber</option>
             <option value="Admin">Admin</option>
          </select>
          role ; {role}
          
        </>
    )


}

export default Home