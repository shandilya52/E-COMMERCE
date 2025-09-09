import { Routes, Route } from "react-router-dom";
import Homepage from "./pages/Homepage";
import Contact from "./pages/Contact";
import About from "./pages/About";
import Pagenotfound from "./pages/Pagenotfound";
import Register from "./pages/Auth/Register";
import Login from "./pages/Auth/Login";
// import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";
import Layout from "./components/layout/Layout";
import Dashboard from "./pages/user/Dashboard";
// import PrivateRoute from "./components/Routes/Private";
// import AdminRoute from "./components/Routes/AdminRoute";
import AdminDashboard from "./pages/admin/AdminDashboard";
import CreateCatagory from "./pages/admin/CreateCatagory";
import CreateProduct from "./pages/admin/CreateProduct";
import Users from "./pages/admin/Users";
import Orders from "./pages/user/Orders";
import Profile from "./pages/user/Profile";
import Products from "./pages/admin/Products";
import UpdateProduct from "./pages/admin/UpdateProduct";
import Allproducts from "./pages/Allproducts";
import Search from "./pages/Search";
import ProductDetails from "./pages/ProductDetails";
import CartPage from "./pages/CartPage";
import Loader from "./components/Loader";
import { useEffect, useState } from "react";


// import AdminDashboard from "./pages/admin/AdminDashboard";

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate content loading delay (you can replace this with actual data fetching)
    const timeoutId = setTimeout(() => {
      setLoading(false);
    }, 2000); // 2 seconds

    // Clear the timeout when the component is unmounted
    return () => clearTimeout(timeoutId);
  }, []);

  return (
    <div className="app-container">
      {loading ? (
        <Loader />
      ) : (
        <div>
          <div className="fixed w-full z-50">
            {/* <Navbar /> */}
          </div>
          <Layout>
            <Routes>
              <Route path="/" element={<Homepage />} />
              <Route
                path="/productDetails/:slug"
                element={<ProductDetails />}
              />
              <Route path="/allproducts" element={<Allproducts />} />
              <Route path="/search" element={<Search />} />
              <Route path="/cart" element={<CartPage />} />

              {/* User dashboard route */}
              <Route path="/dashboard/user" element={<Dashboard />} />
              <Route path="/dashboard/user/orders" element={<Orders />} />
              <Route path="/dashboard/user/profile" element={<Profile />} />

              {/* Admin dashboard route */}
              <Route path="/dashboard/admin" element={<AdminDashboard />} />
              <Route
                path="/dashboard/admin/create-catagory"
                element={<CreateCatagory />}
              />
              <Route
                path="/dashboard/admin/create-product"
                element={<CreateProduct />}
              />
              <Route
                path="/dashboard/admin/products/:slug"
                element={<UpdateProduct />}
              />
              <Route path="/dashboard/admin/create-users" element={<Users />} />
              <Route path="/dashboard/admin/products" element={<Products />} />

              <Route path="/about" element={<About />} />
              <Route path="/category" element={<About />} />
              <Route path="/login" element={<Login />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/register" element={<Register />} />
              <Route path="/*" element={<Pagenotfound />} />
            </Routes>
          </Layout>
          <div className="mt-24">
          <Footer />
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
