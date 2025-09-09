import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/auth";
import { useCart } from "../context/cart";

const CartPage = () => {
  const [cart, setCart] = useCart();
  // eslint-disable-next-line no-unused-vars
  const [auth, setAuth] = useAuth();
  const navigate = useNavigate();

  const removeCartItem = (pid) => {
    try {
      let myCart = [...cart];
      let index = myCart.findIndex((item) => item._id === pid);
      myCart.splice(index, 1);
      setCart(myCart);
      localStorage.setItem("cart", JSON.stringify(myCart));
    } catch (error) {
      console.log(error);
    }
  };

  const totalPrice = () => {
    try {
      let total = 0;
      cart?.map((item) => {
        total = total + item.price;
      });
      return total;
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div  className="pt-28 h-screen w-screen ">
    
        <h1 className="text-center text-lg p-2 mb-1">
          {!auth?.user
            ? "Hello Guest"
            : `Hello  ${auth?.token && auth?.user?.name}`}
          <p className="text-center">
            {cart?.length
              ? `You Have ${cart.length} items in your cart ${
                  auth?.token ? "" : "please login to checkout !"
                }`
              : " Your Cart Is Empty"}
          </p>
        </h1>

        <div className="flex flex-col h-full items-start lg:flex-row w-auto lg:items-start px-4 justify-between lg:px-64">
                
                <div className="h-full  overflow-hidden  flex-wrap">
         
            {cart?.map((p) => (
              <div key={p._id} className="flex maxwidh overflow-hidden  flex-col my-4">
                <div className="flex flex-col lg:flex-row">
                  <div className="h-[300]  w-[300] overflow-hidden">
                    <img
                      className="h-[250px] w-[200px] productimg overflow-hidden bg-green-400"
                      src={`http://localhost:8000/api/v1/products/product-photo/${p._id}`}
                      alt=""
                    />
                  </div>
                  <div>
                    <h1 className="text-xl mx-5">{p.name}</h1>
                    <h1 className="text-sm mx-5">  {p.description.substring(0, 40)}...</h1>
                    <h1 className="text-xl mx-5 font-semibold"> ₹ {p.price}</h1>
                    <button
                      onClick={() => removeCartItem(p._id)}
                      className="delbutton mx-4"
                    >
                      <svg viewBox="0 0 448 512" className="svgIcon">
                        <path d="M135.2 17.7L128 32H32C14.3 32 0 46.3 0 64S14.3 96 32 96H416c17.7 0 32-14.3 32-32s-14.3-32-32-32H320l-7.2-14.3C307.4 6.8 296.3 0 284.2 0H163.8c-12.1 0-23.2 6.8-28.6 17.7zM416 128H32L53.2 467c1.6 25.3 22.6 45 47.9 45H346.9c25.3 0 46.3-19.7 47.9-45L416 128z" />
                      </svg>
                    </button>
                  </div>
                </div>
                <div className="h-[2px] bg-zinc-500" />
              </div>
            ))}
         </div>
          <div className="lg:px-12 lg:fixed top-48 right-20 lg:w-96">
            {auth?.user?.address  ? (
              <>
            <h1 className="text-3xl font-semibold pt-4 ">Cart Summery</h1>
            <h1>
              <span className="text-xl">Total</span> : <span className="font-bold">₹ {totalPrice()}.00</span>
            </h1>
                <div className="flex flex-col">
                  <h2> <span className="font-semibold">Current Address :</span> {auth?.user?.address}</h2>

                  <button
                    onClick={() => navigate("/dashboard/user/profile")}
                    className="bg-black px-3 text-white py-2 hover:bg-zinc-700 rounded-xl"
                  >
                    Update Address
                  </button>
                </div>
              </>
            ) : (
              <>
                {auth?.token ? (
                  <button
                    onClick={() => navigate("/dashboard/user/profile")}
                    className="bg-black text-white px-3 py-2 hover:bg-slate-900 rounded-xl"
                  >
                    Update Address
                  </button>
                ) : (
                  <button
                    onClick={() => navigate ("/login", {state:"/cart"})}
                    className="px-3 py-1 text-black"
                  >
                    Please <span className="text-blue-500">login</span> to procced further
                  </button>
                )}
              </>
            )}
          </div>
        </div>

        
 
    </div>
  );
};

export default CartPage;
