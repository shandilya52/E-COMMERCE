import { useState } from "react"
import toast from 'react-hot-toast';
import axios from 'axios'
import {Link, useNavigate} from "react-router-dom"
const Register = () => {

    const [name, setName]=useState("")
    const [email, setEmail]=useState("")
    const [password, setPassword]=useState("")
    const [phone, setPhone]=useState("")
    const [address, setAddress]=useState("")
    const [answer, setAnswer]=useState("")

    const navigate= useNavigate()

    const handelSubmit= async(e)=>{
        e.preventDefault()
       
        try {
            const res = await axios.post('http://localhost:8000/api/v1/auth/register', { name, email, password, phone, address, answer });
            console.log(res)
            if (res?.data?.success) {
              toast.success(res.data.message);
              navigate("/login");
            } else {
              toast.error(res?.data?.message || "Registration failed");
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
    <p className="text-5xl text-center w-full text-black font-bold mb-1 ">Register </p>
    <p className="message">Signup now and get full access to our website. </p>
       
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
    
    <label>
        <input value={answer} onChange={(e)=>{
            setAnswer(e.target.value)
        }} required="" placeholder="Security answer (e.g., your favorite color)" type="text" className="h-12 bg-zinc-200  my-1 px-4 lg:w-96 w-80"/>
        {/* <span>Security Answer</span> */}
    </label>
    <button className="bg-black hover:bg-zinc-700 text-white h-12 my-3 lg:w-96 w-80 px-4">Submit</button>
    <Link to="/login">
    <h1 className="">Already have an acount ? <span className="text-blue-700 underline">Signin</span> </h1>
    </Link>
</form>
    </div>
  )
}

export default Register
