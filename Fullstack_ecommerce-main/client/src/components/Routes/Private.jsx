import { useState, useEffect } from "react";
import { useAuth } from "../../context/auth";
import { Outlet, Navigate } from "react-router-dom";
import axios from "axios";
import Spinner from "../Spinner";

export default function PrivateRoute() {
  const [ok, setOk] = useState(false);
  const [loading, setLoading] = useState(true);
  const [auth, setAuth] = useAuth();

  useEffect(() => {
    const authCheck = async () => {
      try {
        const res = await axios.get('http://localhost:8000/api/v1/auth/user-auth',{
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

  return loading ? <Spinner path="" /> : ok ? <Outlet /> : <Navigate to="/login" />;
}
