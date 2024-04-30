import React, { useEffect, useState } from "react";
import axios from "axios";
import { parseDateTime } from "../../Utils/useDate.jsx";

function ProductList() {
  const [users, setUsers] = useState([]);
  const token =
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhZG1pbklkIjoiNjYzMDU0ZDAxYjk0MTg0MTZkNmJlYjAwIiwiaWF0IjoxNzE0NDkzNTQ4LCJleHAiOjE3MTQ0OTcxNDh9.xVOPQZ7rvvWJtVFM6QeT0BBxAx0m12bRl-Ishqgi998";

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await axios.get("http://localhost:5050/admins/users", {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        setUsers(response?.data);
        console.log(response);
      } catch (error) {
        console.error("Error fetching users:", error);
      }
    };

    fetchUsers();
  }, []);

  const handleMoreDetails = (user) => {
    console.log("More details for:", user);
  };

  return (
    <main className="flex-1 pb-8">
      {/* User list */}
      <table className="w-full border-b border-gray-200">
        <thead>
          <tr className="text-sm font-medium text-gray-700 border-b border-gray-200">
            <th className="pl-10">Name</th>
            <th>Email</th>
            <th>Login Time</th>
            <th>Logout Time</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr
              key={user.email}
              className="hover:bg-gray-100 transition-colors group"
            >
              <td className="py-4 pl-10">{user.username}</td>
              <td className="py-4">{user.email}</td>
              <td className="py-4">
             
                <span>
                  {new Date(
                    user.loginTimes[user.loginTimes.length - 1]
                  ).toDateString()}
                </span>
                {`  ${
                  parseDateTime(user.loginTimes[user.loginTimes.length - 1])
                    .hour
                }hr: ${
                  parseDateTime(user.loginTimes[user.loginTimes.length - 1])
                    .minute
                }mins`}
              </td>
              <td className="py-4">
             

                <span>
                  {new Date(
                    user.logoutTimes[user.logoutTimes.length - 1]
                  ).toDateString()}
                </span>
                {`  ${
                  parseDateTime(user.logoutTimes[user.logoutTimes.length - 1])
                    .hour
                }hr: ${
                  parseDateTime(user.logoutTimes[user.logoutTimes.length - 1])
                    .minute
                }mins`}
              </td>

              <td>
                <button
                  className="inline-flex gap-x-2 items-center py-2.5 px-6 text-white bg-indigo-600 rounded-xl hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-1"
                  onClick={() => handleMoreDetails(user)}
                >
                  More Details
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </main>
  );
}

export default ProductList;
