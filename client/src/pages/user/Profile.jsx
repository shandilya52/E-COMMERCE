
import { useAuth } from "../../context/auth";

import { useEffect, useState } from "react"
import toast from 'react-hot-toast';
import axios from 'axios'


const Profile = () => {

  const [auth, setAuth] = useAuth();
  
  
  const [name, setName]=useState("")
  const [email, setEmail]=useState("")
  const [password, setPassword]=useState("")
  const [phone, setPhone]=useState("")
  const [address, setAddress]=useState("")


  useEffect(()=>{
    const {email,name,phone,address}=auth.user
    setName(name)
    setEmail(email)
    setAddress(address)
    setPhone(phone)
    
  },[auth?.user])

  const handelSubmit= async(e)=>{
      e.preventDefault()
     
      try {
          const {data} = await axios.put('http://localhost:8000/api/v1/auth/profile', { name, email, password, phone, address });
         
          if (data?.success) {
            setAuth({...auth, user:data?.updatedUser})
            let ls = localStorage.getItem("auth")
            ls=JSON.parse(ls)
            ls.user= data.updatedUser
            localStorage.setItem("auth",JSON.stringify(ls) )
            toast.success(data.message);
          } else {
            toast.error(data?.message || "Registration failed");
          }
        } catch (error) {
          if (error.response) {
            // The request was made and the server responded with a status code
            // other than 2xx (e.g., 404).
            console.error("Response data:", error.response.data);
            console.error("Response status:", error.response.status);
            console.error("Response headers:", error.response.headers);
            toast.error(`Server error: ${error.response.status}`);
          } else if (error.request) {
            // The request was made but no response was received.
            console.error("No response received:", error.request);
            toast.error("No response from the server");
          } else {
            // Something happened in setting up the request that triggered an Error.
            console.error("Request setup error:", error.message);
            toast.error("Error setting up the request");
          }
        }
        
  }
  
  return (
    <div className="flex h-screen w-screen bg-white justify-center py-5">
    <form onSubmit={handelSubmit} className="flex flex-col justify-center items-center h-screen w-screen">
    <p className="text-5xl text-center w-full text-black font-bold mb-1 ">Update User Information </p>
   
       
        <label>
            <input value={name} onChange={(e)=>{
                setName(e.target.value)
            }} required="" placeholder="Full Name" type="text" className="h-12 bg-zinc-200  my-1 px-4 lg:w-96 w-80"/>
            {/* <span>Firstname</span> */}
        </label>

        <label>
        <input value={phone} onChange={(e)=>{
            setPhone(e.target.value)
        }} required="" placeholder="Mobile no." type="text" className="h-12 bg-zinc-200  my-1 px-4 lg:w-96 w-80"/>
        {/* <span>Mobile no.</span> */}
    </label>
    
            
    <label>
        <input value={email} onChange={(e)=>{
                setEmail(e.target.value)
            }} required="" placeholder="E-mail" type="email" className="h-12 bg-zinc-200  my-1 px-4 lg:w-96 w-80"/>
        {/* <span>Email</span> */}
    </label> 
        
    <label>
        <input value={password} onChange={(e)=>{
                setPassword(e.target.value)
            }} required="" placeholder="Password" type="password" className="h-12  bg-zinc-200 my-1 px-4 lg:w-96 w-80"/>
        {/* <span>Password</span> */}
    </label>   
    
    <label>
            <input value={address} onChange={(e)=>{
                setAddress(e.target.value)
            }} required="" placeholder="Address" type="text" className="h-12 bg-zinc-200  my-1 px-4 lg:w-96 w-80"/>
            {/* <span>Address</span> */}
        </label>
    <button className="bg-black hover:bg-zinc-700 text-white h-12 my-3 lg:w-96 w-80 px-4">Update Details</button>
  
</form>
    </div>
  );
};

export default Profile;
