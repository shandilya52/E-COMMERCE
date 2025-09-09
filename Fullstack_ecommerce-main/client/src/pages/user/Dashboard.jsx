import { Link } from "react-router-dom";
import Layout from "../../components/layout/Layout";

const Dashboard = () => {
  return (
    <Layout>
      <div className="flex  flex-col lg:px-44 pt-28">

        <h1 className="lg:text-3xl px-5 font-semibold">Your Account</h1>

        <div className="flex justify-center items-center flex-row flex-wrap">
        <Link to="/dashboard/user/orders">
          <div className="h-40 lg:mr-4 w-1/3 profile rounded-lg flex items-center">
            <img className="lg:h-32 h-24 p-4" src="../public/order.png" alt="" />
            <div className="flex flex-col">
              <h1 className="text-2xl">Your orders</h1>
              <h1>Track, return or buy these things again...</h1>
            </div>
          </div>
        </Link>

        <Link to="/dashboard/user/profile">
          <div className="h-40 lg:mr-4 w-1/3 profile sm rounded-lg flex items-center">
            <img className="lg:h-32 h-24 p-4" src="../public/user.png" alt="" />
            <div className="flex flex-col">
              <h1 className="text-2xl">Your Account</h1>
              <h1>Edit login, name, and mobile number...</h1>
            </div>
          </div>
        </Link>
        </div>
      </div>
    </Layout>
  );
};

export default Dashboard;
