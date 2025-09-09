import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Select, Input, Button } from "antd";

import axios from "axios";
import toast from "react-hot-toast";
import AdminMenu from "../../components/layout/AdminMenu";

const { Option } = Select;

const UpdateProduct = () => {
  const params = useParams();
  const navigate = useNavigate();
  const [catagories, setCatagories] = useState([]);
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [Catagory, setCatagory] = useState("");
  const [quantity, setQuantity] = useState("");
  const [id, setId] = useState("");
  const [shipping, setShipping] = useState(false);
  const [photo, setPhoto] = useState(null);

  //get single product

  const getSingleproduct = async () => {
    try {
      const { data } = await axios.get(
        `http://localhost:8000/api/v1/products/getSingle-product/${params.slug}`
      );
      setName(data.product.name);
      setId(data.product._id);
      setDescription(data.product.description);
      setPrice(data.product.price);
      setQuantity(data.product.quantity);
      setShipping(data.product.shipping);
      setCatagory(data.product.catagory);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getSingleproduct();
    //eslint-disable-next-line
  }, []);

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

  const updateProduct = async (e) => {
    e.preventDefault();
    try {
      const formData = new FormData();
      formData.append("name", name);
      formData.append("description", description);
      formData.append("price", price);
      formData.append("quantity", quantity);
      formData.append("Catagory", Catagory);
      formData.append("shipping", shipping ? "true" : "false");
      photo && formData.append("photo", photo);

      const { data } = await axios.put(
        `http://localhost:8000/api/v1/products/update-product/${id}`,
        formData
      );

      if (data?.success) {
        toast.success("Product updated successfully");
        navigate("/dashboard/admin/products");
      } else {
        toast.error(data?.message);
      }
    } catch (error) {
      console.error(error);
      toast.error("Something went wrong while updating the product");
    }
  };

  //delete product function

  const deleteProduct = async () => {
    try {
      let answer = window.prompt("Type yes if you want to delete this product ?");
      if (!answer) return;
      // eslint-disable-next-line no-unused-vars
      const { data } =
        await axios.delete(`http://localhost:8000/api/v1/products/delete-product/${id}`);
      toast.success("product deleted product");
      navigate("/dashboard/admin/products");
    } catch (error) {
      console.log(error);
      toast.error("unable to delete product");
    }
  };

  return (
    <div className="flex flex-row">
      {/* Add your AdminMenu component here */}
      <div>
        <AdminMenu />
      </div>
      <div className="container mx-auto flex flex-col my-10 p-6 bg-white rounded-lg shadow-xl">
        <h1>Update Product</h1>
        <div className="m-1 w-[75%]">
          <Select
            bordered={false}
            placeholder="Select a category"
            size="large"
            showSearch
            value={Catagory}
            className="form-select mb-3"
            onChange={(value) => setCatagory(value)}
          >
            {catagories.map((c) => (
              <Option key={c._id} value={c._id}>
                {c.name}
              </Option>
            ))}
          </Select>

          <div className="mb-3">
            <label className="bg-green-200 rounded-full p-2 hover:bg-green-400">
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

          {photo ? (
            <div>
              <img
                className="h-40 w-40"
                src={URL.createObjectURL(photo)}
                alt=""
                height="200px"
              />
            </div>
          ) : (
            <div>
              <img
                className="h-40 w-40"
                src={`http://localhost:8000/api/v1/products/product-photo/${id}`}
                alt=""
                height="200px"
              />
            </div>
          )}

          <Input
            className="my-5"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Write name of your product"
          />

          <Input.TextArea
            className="my-5"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            placeholder="Write description of your product"
          />

          <Input
            className="my-5"
            type="number"
            value={quantity}
            onChange={(e) => setQuantity(e.target.value)}
            placeholder="Set quantity of your product"
          />

          <Input
            className="my-5"
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
            className="form-select mb-3"
            onChange={(value) => setShipping(value)}
            value={shipping ? "In Stock" : "Out Of Stock"}
          >
            <Option value="true">In Stock</Option>
            <Option value="false">Out of Stock</Option>
          </Select>

          <Button
            onClick={updateProduct}
            className="py-1 px-3 bg-blue-500 text-white"
          >
            Update Product
          </Button>
          <Button
            onClick={deleteProduct}
            className="py-1 px-3 bg-red-500 text-white"
          >
            Delete Product
          </Button>
        </div>
      </div>
    </div>
  );
};

export default UpdateProduct;
