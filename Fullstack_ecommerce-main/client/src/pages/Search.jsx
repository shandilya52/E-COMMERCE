import { Layout } from "antd"
import { useSearch } from "../context/search"
import { useNavigate } from "react-router-dom"
import { toast } from "react-hot-toast"
import { useCart } from "../context/cart"
const Search = () => {
  const [cart, setCart]=useCart()
  const navigate=useNavigate()
    // eslint-disable-next-line no-unused-vars
    const [value, setValue]=useSearch()
  return (
    <Layout>
      <div className="text-center pt-24">
        <h1>Search results...</h1>
        <h4>{value?.result.length < 1 ? "no product found" : `found ${value?.result.length} results based on your search` }</h4>

        <div className=" removemax mx-auto flex flex-wrap justify-center ">
        {/* <h1 className="text-2xl font-bold mb-6">Products page</h1> */}
        {value?.result.map((p) => (
          <div
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
              <div className="flex justify-center items-center ">
                <button  
                onClick={()=> {setCart([...cart, p])
                  localStorage.setItem("cart", JSON.stringify([...cart, p]))
                  toast.success("item added to bag") 
                  } }
                   className="hover:bg-black border-2 border-black text-black rounded-lg hover:text-white py-2 px-3">
                  Add to bag
                </button>
                <button  onClick={()=> navigate(`/productDetails/${p.slug}`)} className="hover:bg-black border-2 border-black text-black rounded-lg hover:text-white py-2 px-3">
                  More details
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
      </div>
    </Layout>
  )
}

export default Search
