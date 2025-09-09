import { useState, useEffect } from "react";
import { useAuth } from "../../context/auth";
import { Outlet } from "react-router-dom";
import { Navigate } from "react-router-dom";
import axios from "axios";
import Spinner from "../Spinner";

export default function AdminRoute(){
    const [ok, setOk]=useState(false)
    const [auth, setAuth]=useAuth()
    const [loading, setLoading] = useState(true);

    useEffect(() => {
      const authCheck = async () => {
        try {
          const res = await axios.get('http://localhost:8000/api/v1/auth/admin-auth',{
            headers:{
                "Authorization":auth?.token
            }
          });
          setOk(res.data.ok);
        } catch (error) {
          setOk(false);
        } finally {
          setLoading(false);
        }
      };
    
      if (auth?.token) authCheck();
    }, [auth?.token]);
    
    return loading ? <Spinner path="" /> : ok ? <Outlet /> : <Navigate to="/" />;


    
}
