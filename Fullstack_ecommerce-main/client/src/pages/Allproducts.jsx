import { useEffect, useState } from "react";
import axios from "axios";
import { Checkbox, Radio } from "antd";
import { prices } from "../components/Prices";
import { useNavigate } from "react-router-dom";
import { useCart } from "../context/cart";
import toast from "react-hot-toast";
import Layout from "antd/es/layout/layout";
import Pagination from "../components/Pagination";
import LazyImage from "../components/LazyImage";

const Allproducts = () => {
  const [products, setProducts] = useState([]);
  const [catagory, setCatagory] = useState([]);
  const [checked, setChecked] = useState([]);
  const [radio, setRadio] = useState([]);
  const navigate = useNavigate()
  const [cart, setCart]=useCart()
  
  // Pagination state
  const [currentPage, setCurrentPage] = useState(1);
  const [pagination, setPagination] = useState({
    currentPage: 1,
    totalPages: 1,
    totalProducts: 0,
    hasNextPage: false,
    hasPrevPage: false
  });

  //get all catagories

  const getAllCatagory = async () => {
    try {
      const { data } = await axios.get(
        "http://localhost:8000/api/v1/catagory/get-catagory"
      );
      if (data?.success) {
        setCatagory(data?.catagory);
      }
    } catch (error) {
      console.log(error);
      // toast.error("something went wrong while getting catagory");
    }
  };

  useEffect(() => {
    getAllCatagory();
  }, []);

  const getAllProducts = async (page = 1) => {
    try {
      const { data } = await axios.get(
        `http://localhost:8000/api/v1/products/get-product?page=${page}&limit=12`
      );
      setProducts(data.products);
      if (data.pagination) {
        setPagination(data.pagination);
        setCurrentPage(page);
      }
    } catch (error) {
      console.log(error);
    }
  };

  // Handle page change
  const handlePageChange = (page) => {
    getAllProducts(page);
  };

  //filter by category
  const handelFilter = (value, id) => {
    let all = [...checked];
    if (value) {
      all.push(id);
    } else {
      all = all.filter((c) => c !== id);
    }
    setChecked(all);
    setCurrentPage(1); // Reset to first page when filtering
  };

  useEffect(() => {
    if (!checked.length || !radio.length) {
      getAllProducts(currentPage);
    }
  }, [checked.length, radio.length, currentPage]);

  useEffect(() => {
    if (checked.length || radio.length) {
      filteredProduct();
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [checked, radio]);

  const filteredProduct = async () => {
    try {
      const { data } = await axios.post(
        "http://localhost:8000/api/v1/products/product-filters",
        { checked, radio }
      );
      setProducts(data?.products);
      // Reset pagination for filtered results
      setPagination({
        currentPage: 1,
        totalPages: 1,
        totalProducts: data?.products?.length || 0,
        hasNextPage: false,
        hasPrevPage: false
      });
      setCurrentPage(1);
    } catch (error) {
      console.log(error);
    }
  };
  

  return (
    <Layout  className="flex lg:flex-row flex-col pt-24">


      <div className=" lg:ml-12 justify-center pl-8 flex-col filterdiv">
        <div className="flex lg:items-start lg:justify-center items-center flex-col ">
          <h1 className="my-3 w-44 bg-black text-white py-2 px-2 rounded-xl text-center">Filter by category</h1>
          <div className="flex my-3 lg:items-start lg:justify-center items-center flex-col">
            {catagory?.map((c) => (
              <Checkbox
                key={c._id}
                onChange={(e) => handelFilter(e.target.checked, c._id)}
              >
                {c.name}
              </Checkbox>
            ))}
          </div>
        </div>

        <div className="flex  items-center lg:items-start flex-col my-6 justify-center">
        <h1 className="my-3 w-44  bg-black text-white py-2 px-2 rounded-xl text-center">Filter by Price</h1>
          <Radio.Group onChange={(e) => setRadio(e.target.value)}>
            {prices?.map((p) => (
              <div key={p._id}>
                <Radio value={p.Array}>{p.name}</Radio>
              </div>
            ))}
          </Radio.Group>
        </div>
        <button onClick={()=>{window.location.reload()}} className="border-2 top-2/3 w-44 rounded-xl hover:bg-black hover:text-white border-black py-2 px-3">Reset Filter</button>
      </div>

      <div  className="lg:ml- lg:overflow-scroll lg:h-screen removemax mx-auto flex flex-wrap justify-center ">
        {/* <h1 className="text-2xl font-bold mb-6">Products page</h1> */}
        {products?.map((p) => (
          <div
            key={p._id}
            className="m-4 products rounded-md overflow-hidden w-72"
          >
            <div className="overflow-hidden">
              <LazyImage
                src={`http://localhost:8000/api/v1/products/product-photo/${p._id}`}
                alt=""
                className="h-[300px] w-[400px] productimg overflow-hidden bg-white"
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
              <div className="flex justify-center items-center ">
                <button 

                 onClick={()=> {setCart([...cart, p])
                  localStorage.setItem("cart", JSON.stringify([...cart, p]))
                  toast.success("item added to bag") 
                  } }
                  
                  className="hover:bg-black border-2 border-black text-black rounded-lg hover:text-white py-2 px-3">
                  Add to bag
                </button>
                
                <button onClick={()=> navigate(`/productDetails/${p.slug}`)} className="hover:bg-black border-2 border-black text-black rounded-lg hover:text-white py-2 px-3">
                  More details
                </button>
              </div>
            </div>
          </div>
        ))}
        
        {/* Pagination Component */}
        {!checked.length && !radio.length && (
          <div className="w-full flex justify-center">
            <Pagination
              currentPage={pagination.currentPage}
              totalPages={pagination.totalPages}
              onPageChange={handlePageChange}
              hasNextPage={pagination.hasNextPage}
              hasPrevPage={pagination.hasPrevPage}
            />
          </div>
        )}
      </div>
    </Layout>
  );
};

export default Allproducts;
