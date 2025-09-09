import { useEffect, useState } from "react";
import AdminMenu from "../../components/layout/AdminMenu";
import toast from "react-hot-toast";
import axios from "axios";
import { Link } from "react-router-dom";

const Products = () => {
  const [products, setProducts] = useState([]);

  const getAllProduct = async () => {
    try {
      const { data } = await axios.get(
        "http://localhost:8000/api/v1/products/get-product"
      );
      setProducts(data.products);
    } catch (error) {
      console.log(error);
      toast.error("Cannot get all products");
    }
  };

  useEffect(() => {
    getAllProduct();
  }, []);

  return (
    <div className="flex">
      <div>
        <AdminMenu />
      </div>
      <div className="container removemax mx-auto flex flex-wrap justify-center my-10">
        {/* <h1 className="text-2xl font-bold mb-6">Products page</h1> */}
        {products?.map((p) => (
            <Link key={p._id} to={`/dashboard/admin/products/${p.slug}`}>
          <div  className="m-4 w-60">
            
            <div>
                <img className="h-[300px] w-[400px] overflow-hidden bg-green-400" src={`http://localhost:8000/api/v1/products//product-photo/${p._id}`} alt="" />
            </div>


            <div className="flex flex-col bg-white p-4 shadow-md">
              <div className="flex justify-between mb-2">
                <div>
                  <span className="text-sm font-bold">{p.name}</span>
                  <p className="text-xs text-gray-700"> {p.description.substring(0, 20)}...</p>
                </div>
                <span className="font-bold text-green-600">₹ {p.price}</span>
              </div>
              <button className="hover:bg-sky-700 text-gray-50 bg-sky-800 py-2">
                Add to cart
              </button>
            </div>
          </div>
        </Link>
        ))}
      </div>
    </div>
  );
};

export default Products;
