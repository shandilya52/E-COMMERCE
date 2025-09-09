/* eslint-disable react/no-unescaped-entities */
import { useState } from "react";
import axios from "axios";
import toast from "react-hot-toast";
import { useNavigate, useLocation, Link } from "react-router-dom";
import { useAuth } from "../../context/auth";
const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPasword] = useState("");
  const [auth, setAuth] = useAuth();

  const navigate = useNavigate();
  const location = useLocation();

  const handelSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await axios.post("http://localhost:8000/api/v1/auth/login", {
        email,
        password,
      });
      // console.log(res);
      if (res?.data?.success) {
        toast.success("login successfully");
        setAuth({
          ...auth,
          user: res.data.user,
          token: res.data.token,
        });
        localStorage.setItem("auth", JSON.stringify(res.data));
        navigate(location.state || "/");
      } else {
        toast.error("wrong email or password");
      }
    } catch (error) {
      if (error.response) {
        // The request was made and the server responded with a status code
        // other than 2xx (e.g., 404).
        console.error("Response data:", error.response.data);
        console.error("Response status:", error.response.status);
        console.error("Response headers:", error.response.headers);
        toast.error("wrong email or password");
      } else if (error.request) {
        // The request was made but no response was received.
        console.error("No response received:", error.request);
        // toast.error("No response from the server");
      } else {
        // Something happened in setting up the request that triggered an Error.
        console.error("Request setup error:", error.message);
        // toast.error("Error setting up the request");
      }
    }
  };

  return (
    <div className=" flex justify-center items-start">
      <div
        onSubmit={handelSubmit}
        className="flex h-screen px-4 w-screen justify-center items-start flex-col bg-white"
      >
        <h1 className=" text-5xl text-center w-full text-black font-bold">
          Sign In
        </h1>
        <h1 className="text-center text-zinc-600 text-sm mb-0 w-full">SignIn now and get full access to our website.</h1>
       
        <form action="" className="flex px-1 flex-col justify-center items-center">
          <input
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
            required=""
            className="bg-zinc-200 h-12 my-1 lg:w-96 md:w-96 w-80 px-4"
            type="email"
            name="email"
            id="email"
            placeholder="E-mail"
          />
          <input
            value={password}
            onChange={(e) => {
              setPasword(e.target.value);
            }}
            required=""
            className="bg-zinc-200 h-12 my-1 lg:w-96 md:w-96 w-80 px-4"
            type="password"
            name="password"
            id="password"
            placeholder="Password"
          />

          <input
            className="bg-black hover:bg-zinc-700 text-white h-12 my-3 lg:w-96 md:w-96 w-80 px-4"
            type="submit"
            value="Sign In"
          />

          <h1>Don't have account? <Link to="/register"> <span className="text-blue-700 underline">Signup</span> </Link> </h1>
        </form>
      </div>
    </div>
  );
};

export default Login;
