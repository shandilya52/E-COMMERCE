import AdminMenu from "../../components/layout/AdminMenu"
import { useEffect, useState } from "react"
import axios from "axios"

const Users = () => {
  const [users, setUsers] = useState([])
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState("")

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        setLoading(true)
        setError("")
        const { data } = await axios.get("/api/v1/auth/users")
        setUsers(data?.users || [])
      } catch (err) {
        setError("Failed to load users")
      } finally {
        setLoading(false)
      }
    }
    fetchUsers()
  }, [])

  return (
    <div className="flex flex-row">
        <div >
          <AdminMenu />
        </div>
        <div className="container mx-auto flex flex-col my-10 p-6 bg-white rounded-lg shadow-xl">
          <h1 className="text-2xl font-semibold mb-4">Users</h1>
          {loading && <div>Loading...</div>}
          {error && <div className="text-red-600">{error}</div>}
          {!loading && !error && (
            <div className="overflow-x-auto">
              <table className="min-w-full text-left text-sm">
                <thead>
                  <tr className="border-b">
                    <th className="py-2 px-3">Name</th>
                    <th className="py-2 px-3">Email</th>
                    <th className="py-2 px-3">Phone</th>
                    <th className="py-2 px-3">Role</th>
                  </tr>
                </thead>
                <tbody>
                  {users.map((u) => (
                    <tr key={u._id} className="border-b">
                      <td className="py-2 px-3">{u.name}</td>
                      <td className="py-2 px-3">{u.email}</td>
                      <td className="py-2 px-3">{u.phone}</td>
                      <td className="py-2 px-3">{u.role === 1 ? "Admin" : "User"}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
              {users.length === 0 && (
                <div className="text-gray-500 mt-4">No users found.</div>
              )}
            </div>
          )}
        </div>
    </div>
  )
}

export default Users
