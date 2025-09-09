import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Select, Input, Button, } from "antd";
import axios from "axios";
import toast from "react-hot-toast";
import AdminMenu from "../../components/layout/AdminMenu";
import { useAuth } from "../../context/auth";

const { Option } = Select;

const CreateProduct = () => {
  const navigate = useNavigate();
  const [auth] = useAuth();
  const [catagories, setCatagories] = useState([]);
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [Catagory, setCatagory] = useState("");
  const [quantity, setQuantity] = useState("");
  const [shipping, setShipping] = useState(false);
  const [photo, setPhoto] = useState(null);

  useEffect(() => {
    const getAllCatagories = async () => {
      try {
        const { data } = await axios.get(
          "http://localhost:8000/api/v1/catagory/get-catagory"
        );

        if (data?.success) {
          setCatagories(data?.catagory);
        }
      } catch (error) {
        console.error(error);
        toast.error("Something went wrong while getting categories");
      }
    };

    getAllCatagories();
  }, []);
  

  const createProduct = async (e) => {
    e.preventDefault();
    
    // Check if user is authenticated
    if (!auth?.token) {
      toast.error("Please login first");
      navigate("/login");
      return;
    }
    
    // Check if user is admin
    if (auth?.user?.role !== 1) {
      toast.error("Only admin can create products");
      return;
    }
    
    // Validation
    if (!name || !description || !price || !Catagory || !quantity) {
      toast.error("Please fill all required fields");
      return;
    }
    
    try {
      const formData = new FormData();
      formData.append("name", name);
      formData.append("description", description);
      formData.append("price", price);
      formData.append("quantity", quantity);
      formData.append("Catagory", Catagory);
      formData.append("shipping", shipping ? "true" : "false");
      formData.append("photo", photo);

      const { data } = await axios.post(
        "http://localhost:8000/api/v1/products/create-product",
        formData,
        {
          headers: {
            Authorization: auth?.token,
            "Content-Type": "multipart/form-data",
          },
        }
      );

      if (data?.success) {
        toast.success("Product created successfully");
        navigate("/dashboard/admin/products");
      } else {
        toast.error(data?.message);
      }
    } catch (error) {
      console.error("Product creation error:", error);
      console.error("Error response:", error.response?.data);
      console.error("Error status:", error.response?.status);
      
      if (error.response?.data?.error) {
        toast.error(error.response.data.error);
      } else if (error.response?.data?.message) {
        toast.error(error.response.data.message);
      } else if (error.code === 'ECONNREFUSED') {
        toast.error("Server is not running. Please start the backend server.");
      } else {
        toast.error("Something went wrong while creating the product");
      }
    }
  };

  return (
    <div className="flex flex-row">
      <div>
        <AdminMenu />
      </div>
      <div className="container mx-auto my-10 p-6 bg-white rounded-lg shadow-xl flex-1">
        <h1 className="text-2xl font-semibold mb-4">Create Product</h1>
        <div className="mx-auto w-full max-w-2xl">
          <Select
            bordered={false}
            placeholder="Select a category"
            size="large"
            showSearch
            className="form-select mb-3 w-full"
            onChange={(value) => setCatagory(value)}
          >
            {catagories.map((c) => (
              <Option key={c._id} value={c._id}>
                {c.name}
              </Option>
            ))}
          </Select>

          <div className="mb-3">  
                <label className="inline-block bg-green-200 rounded-full px-4 py-2 hover:bg-green-400 cursor-pointer">
                  {photo ? photo.name : "Upload Photo"}
                  <input
                    type="file"
                    name="photo"
                    accept="image/*"
                    onChange={(e) => setPhoto(e.target.files[0])}
                    hidden
                  />
                </label>
              </div>

          {photo && (
            <div className="mb-4">
              <img
                className="h-40 w-40 object-cover rounded"
                src={URL.createObjectURL(photo)}
                alt=""
                height="200px"
              />
            </div>
          )}

          <Input
            className="my-3"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Write name of your product"
          />

          <Input.TextArea
            className="my-3"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            placeholder="Write description of your product"
          />

          <Input
            className="my-3"
            type="number"
            value={quantity}
            onChange={(e) => setQuantity(e.target.value)}
            placeholder="Set quantity of your product"
          />

          <Input
            className="my-3"
            type="number"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
            placeholder="Set price of your product"
          />

          <Select
            bordered={false}
            placeholder="Select shipping"
            size="large"
            showSearch
            className="form-select mb-4 w-full"
            onChange={(value) => setShipping(value)}
          >
            <Option value="true">In Stock</Option>
            <Option value="false">Out of Stock</Option>
          </Select>

          <Button
            onClick={createProduct}
            className="py-2 px-4 bg-blue-500 hover:bg-blue-600 text-white w-full sm:w-auto"
          >
            Create Product
          </Button>
        </div>
      </div>
    </div>
  );
};

export default CreateProduct;
