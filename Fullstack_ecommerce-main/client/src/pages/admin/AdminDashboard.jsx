import AdminMenu from "../../components/layout/AdminMenu";
import Layout from "../../components/layout/Layout";
import { useAuth } from "../../context/auth";

const AdminDashboard = () => {

  const[auth]= useAuth()

  return (
    <Layout>
      <div className="px-4 py-6 flex flex-row">
        <div>
          <AdminMenu />
        </div>
        <div className="flex-1 mx-6">
          <div className="bg-white rounded-lg shadow p-6 space-y-3">
            <h2 className="text-xl font-semibold">Admin Details</h2>
            <p>Admin Name: {auth?.user?.name}</p>
            <p>Admin Email: {auth?.user?.email}</p>
            <p>Admin Contact: {auth?.user?.phone}</p>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default AdminDashboard;
