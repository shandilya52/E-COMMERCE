import axios from "axios";
import { useEffect, useState } from "react";
import { FaShoppingBag } from "react-icons/fa";
import { useNavigate, useParams } from "react-router-dom";
import { useCart } from "../context/cart";
import toast from "react-hot-toast";

const ProductDetails = () => {
  const [cart, setCart]=useCart()
  const navigate=useNavigate()
  const params = useParams();
  const [product, setproduct] = useState({});
  const [relatedproduct, setrelatedproduct] = useState([]);

  //initial details
  useEffect(() => {
    if (params?.slug) {
      getproduct();
    }
  }, [params?.slug]);

  //get product

  const getproduct = async () => {
    try {
      const { data } = await axios.get(
        `http://localhost:8000/api/v1/products/getSingle-product/${params.slug}`
      );
      setproduct(data?.product);
      getSimilarproduct(data?.product._id, data?.product.Catagory._id);
    } catch (error) {
      console.log(error);
    }
  };

  //get similar product

  const getSimilarproduct = async (pid, cid) => {
    try {
      const { data } = await axios.get(
        `http://localhost:8000/api/v1/products/related-product/${pid}/${cid}`
      );

      setrelatedproduct(data?.products);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <div className="pt-28 pb-8 flex lg:flex-row md:flex-col items-center justify-center gap-12 px-12">
        <div className="h-[500px] mx-12 w-96 bg-red-400">
          <img
            className="h-full w-full productimg overflow-hidden bg-green-400"
            src={`http://localhost:8000/api/v1/products/product-photo/${product._id}`}
            alt=""
          />
        </div>
        <div className="h-[500px] mx-12 w-96 py-12">
          <h1 className="text-3xl font-bold">{product.name}</h1>
          <h1>{product.description}</h1>
          <h1>Price : Rs. {product.price}</h1>
          <h1>Category : {product.Catagory?.name}</h1>
          <h1>Remaining Stock : {product.quantity} Pieces</h1>
          {product?.shipping ? (
            <h1 className="border-2 border-black w-24 text-center p-2 rounded-xl">
              IN STOCK
            </h1>
          ) : (
            <h1 className="border-2 border-black w-24 text-center p-2 rounded-xl">
              OUT OF STOCK
            </h1>
          )}
          <div className="bg-black rounded-xl p-2 w-full flex justify-center items-center">
            <FaShoppingBag className=" text-xs text-white rounded-full h-10 w-6" />
            <button onClick={()=> {setCart([...cart, product])
                  localStorage.setItem("cart", JSON.stringify([...cart, product]))
                  toast.success("item added to bag") 
                  } } className="text-2xl mb-0 px-4 text-center text-white">
              Add to bag
            </button>
          </div>
        </div>
      </div>
      <div className="flex flex-col">
        <h1 className="text-2xl text-center">Similar products...</h1>
        <div  className=" removemax mx-auto flex flex-wrap justify-center lg:justify-start ">
        {/* <h1 className="text-2xl font-bold mb-6">Products page</h1> */}
        {relatedproduct?.map((p) => (
          <div
          onClick={()=> navigate(`/productDetails/${p.slug}`)}
            key={p._id}
            className="m-4 products rounded-md overflow-hidden w-72"
          >
            <div className="overflow-hidden">
              <img
                className="h-[300px] w-[400px] productimg overflow-hidden bg-green-400"
                src={`http://localhost:8000/api/v1/products/product-photo/${p._id}`}
                alt=""
              />
            </div>

            <div className="flex flex-col bg-white p-4 shadow-md">
              <div className="flex justify-between mb-2">
                <div>
                  <span className=" font-bold">{p.name}</span>
                  <p className="text-xs text-gray-700">
                    {p.description.substring(0, 30)}...
                  </p>
                </div>
                <span className="font-bold text-green-600">₹ {p.price}</span>
              </div>
              <div 
                   className="flex justify-center items-center ">
                <button onClick={()=> {setCart([...cart, p])
                  localStorage.setItem("cart", JSON.stringify([...cart, p]))
                  toast.success("item added to bag") 
                  } } className="hover:bg-black border-2 border-black text-black rounded-lg hover:text-white py-2 px-3">
                  Add to bag
                </button>
                
                <button onClick={()=> navigate(`/productDetails/${p.slug}`)} className="hover:bg-black border-2 border-black text-black rounded-lg hover:text-white py-2 px-3">
                  More details
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
      </div>
    </>
  );
};

export default ProductDetails;
