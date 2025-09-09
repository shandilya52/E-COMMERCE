import { useEffect, useState } from "react";
import AdminMenu from "../../components/layout/AdminMenu";
import toast from "react-hot-toast";
import axios from "axios";
import CatagoryForm from "../../components/form/CatagoryForm";
import { Modal } from "antd";

const CreateCatagory = () => {
  const [catagory, setCatagory] = useState([]);
  const [name, setName] = useState("");
  const [visible, setVisible] = useState(false);
  const [selected, setSelected] = useState(null);
  const [updatedname, setupdatedname] = useState("");

  //handelform
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const { data } = await axios.post(
        "http://localhost:8000/api/v1/catagory/create-catagory",
        {
          name,
        }
      );
      if (data?.success) {
        toast.success(`${name} is created`);
        getAllCatagory();
        setName("")
      } else {
        toast.error(data.message);
      }
    } catch (error) {
      console.log(error);
      toast.error("somthing went wrong in input form");
    }
  };

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
      toast.error("something went wrong while getting catagory");
    }
  };

  useEffect(() => {
    getAllCatagory();
  }, []);

  const handleupdateSubmit=async(e)=>{
    e.preventDefault();
    try {
      const{data}=await axios.put(`http://localhost:8000/api/v1/catagory/update-catagory/${selected._id}`, {name:updatedname})
      if (data?.success) {
        toast.success(`${data.message} is updated`)
        setSelected(null)
        setupdatedname("")
        setVisible(false)
        getAllCatagory()
      }else{
        toast.error(data.message)
       
      }
    } catch (error) {
      toast.error("something went wrong")
    }
  }  
  
  const handledelete=async(pId)=>{
    try {
      const{data}=await axios.delete(`http://localhost:8000/api/v1/catagory/delete-catagory/${pId}`, {name:updatedname})
      if (data?.success) {
        toast.success(`category is deleted`)
        getAllCatagory()
      }else{
        toast.error(data.message)
       
      }
    } catch (error) {
      toast.error("something went wrong")
    }
  }

  return (
    <div className="flex flex-row">
      <div>
        <AdminMenu />
      </div>
      <div className="container mx-auto flex flex-col my-10 p-6 bg-white rounded-lg shadow-xl justify-center">
        <h1 className="text-xl">MANAGE CATEGORY</h1>
        <CatagoryForm
          handelSubmit={handleSubmit}
          value={name}
          setValue={setName}
        />
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {catagory?.map((c) => (
              <tr key={c._id}>
                <td>{c.name}</td>
                <td>
                  <button
                    onClick={() => {
                      setVisible(true);setupdatedname(c.name); setSelected(c)
                    }}
                    className="bg-blue-400 py-1 px-3"
                  >
                    Edit
                  </button>
                </td>
                <td>
                  <button onClick={()=>{
                    handledelete(c._id)}} className="bg-red-400 py-1 px-3">Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <Modal
          footer={null}
          onCancel={() => {
            setVisible(false);
          }}
          open={visible}
        >
          <CatagoryForm
          handelSubmit={handleupdateSubmit}
          value={updatedname}
          setValue={setupdatedname}
        />
        </Modal>
      </div>
    </div>
  );
};

export default CreateCatagory;
