import { Link } from "react-router-dom"

const UserMenu = () => {
  return (
    <>
      <div className="p-12 flex flex-col gap-4">
        <h1 className="text-3xl">User Dashboard</h1>
        <Link to="/dashboard/user/profile"> Profile</Link>
        <Link to="/dashboard/user/Orders"> Orders</Link>
      </div>
    </>
  )
}

export default UserMenu
