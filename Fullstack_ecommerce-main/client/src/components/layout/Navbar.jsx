import { Link } from "react-router-dom";
import { useAuth } from "../../context/auth";
import { FaShoppingBag } from "react-icons/fa";
import { IoMdMenu } from "react-icons/io";
import toast from "react-hot-toast";
import SearchInput from "../form/SearchInput";
import { useCart } from "../../context/cart";
import { Badge } from "antd";
import { useState } from "react";
const Navbar = () => {
  const [hidden, setHidden] = useState(false);

  const [auth, setAuth] = useAuth();
  // eslint-disable-next-line no-unused-vars
  const [cart, setCart] = useCart();
  const handelLogout = () => {
    setAuth({
      ...auth,
      user: null,
      token: "",
    });
    localStorage.removeItem("auth");
    toast.success("logout successfully");
  };
  return (
    <div className="flex bg-white lg:px-20 h-20 lg:justify-between items-center justify-between px-3">
      <h1 className="text-2xl  font-semibold stylehub underline m-0">StyleHub</h1>
      <div className=" hidden lg:flex">
        <ul className="flex m-0 flex-row justify-between items-center">
          <Link to="/">
            <li className="  w-32 hover:border-b-2 font-semibold border-black text-center p-1">
              Home
            </li>
          </Link>
          <Link to="/allproducts">
            <li className="w-28 hover:border-b-2 font-semibold border-black text-center p-1">
              All Products
            </li>
          </Link>
          <Link to="/about">
            <li className="w-28 hover:border-b-2 font-semibold border-black text-center p-1">
              About
            </li>
          </Link>{" "}
          <Link to="/contact">
            <li className="w-28 hover:border-b-2 font-semibold border-black text-center p-1">
              Contact
            </li>
          </Link>
        </ul>
      </div>
      <div>
        {!auth.user ? (
          <div className="flex flex-row items-center justify-center">
            <div className=" lg:flex hidden  justify-center items-center px-4  rounded-2xl ">
                <Badge color="rgb(0, 0, 0)" count={cart?.length}>
                  <Link className="hover:text-black" to="/cart">
                    <FaShoppingBag className="  hover:text-black p-2 text-4xl rounded-full h-10 w-10 text-center" />
                  </Link>
                </Badge>
              </div>
            <Link to="/login">
              <h1 className=" hover:bg-black rounded-full hover:duration-150 m-0 hover:text-white w-24 text-center p-1 py-2">
                Login
              </h1>
            </Link>
            <Link to="/register">
              <h1 className=" bg-black hover:bg-zinc-700 hover:duration-150 m-0 text-white p-1 py-2 rounded-full w-24 text-center">
                SignUp
              </h1>
            </Link>
          </div>
        ) : (
          <div className="flex justify-end">
            <div className="lg:flex hidden">
              <SearchInput />

              <div className=" lg:flex hidden mx-4 justify-center items-center px-4  rounded-2xl ">
                <Badge color="rgb(0, 0, 0)" count={cart?.length}>
                  <Link className="hover:text-black" to="/cart">
                    <FaShoppingBag className="  hover:text-black p-2 text-4xl rounded-full h-10 w-10 text-center" />
                  </Link>
                </Badge>
              </div>

              <div className="dropdown flex">
                <button className="dropbtn border-2 border-black  text-white rounded-full  hover:duration-150 p-1 text-center">
                  <img className="h-6 w-6" src="/userpro.png" alt="" />
                </button>
                <div className="dropdown-content">
                  <Link
                    to={`/dashboard/${
                      auth?.user?.role === 1 ? "admin" : "user"
                    }`}
                  >
                    Your Account
                  </Link>
                  <Link to="/login">
                    <h1 onClick={handelLogout}>logout</h1>
                  </Link>
                </div>
              </div>
            </div>

            <div
              onClick={() => setHidden(!hidden)}
              className="text-3xl lg:hidden"
            >
              <IoMdMenu />

              {hidden && (
                <div
                  className={` hiddenclass absolute top-14 h-auto py-8 w-screen right-0 menumobile`}
                >
                  <div>
                    <Link to="/">
                      <h1 className="hover:border-b-2 border-black text-lg text-center p-1">
                        Home
                      </h1>
                    </Link>
                    <Link to="/allproducts">
                      <h1 className="hover:border-b-2 border-black text-lg text-center p-1">
                        All Products
                      </h1>
                    </Link>
                    <Link to="/cart">
                      <h1 className="hover:border-b-2 border-black text-lg text-center p-1">
                        Bag
                      </h1>
                    </Link>
                    <Link to="/about">
                      <h1 className="hover:border-b-2 border-black text-lg text-center p-1">
                        About
                      </h1>
                    </Link>
                    <Link to="/contact">
                      <h1 className="hover:border-b-2 border-black text-lg text-center p-1">
                        Contact
                      </h1>
                    </Link>
                    <Link
                    to={`/dashboard/${
                      auth?.user?.role === 1 ? "admin" : "user"
                    }`}
                  >
                     <h1 className="hover:border-b-2 border-black text-lg text-center p-1">
                           Your Account
                      </h1>

                 
                  </Link>
                    <Link to="/login">
                      <h1 onClick={handelLogout} className="hover:border-b-2 border-black text-lg text-center p-1">
                        Logout
                      </h1>
                    </Link>
                    
                  </div>
                </div>
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
