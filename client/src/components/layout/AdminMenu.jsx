import { Link } from "react-router-dom"

const AdminMenu = () => {
  return (
    <>
      <div className="container mx-auto my-6 p-4 bg-white rounded-lg shadow flex-col w-64">
        <h1 className="text-3xl mb-3">Admin Panel</h1>
        <nav className="flex flex-col space-y-2">
          <Link className="block hover:underline" to="/dashboard/admin/create-catagory">create catagory</Link>
          <Link className="block hover:underline" to="/dashboard/admin/create-product">create product</Link>
          <Link className="block hover:underline" to="/dashboard/admin/create-users">users</Link>
          <Link className="block hover:underline" to="/dashboard/admin/products">Products</Link>
        </nav>
      </div>
    </>
  )
}

export default AdminMenu
