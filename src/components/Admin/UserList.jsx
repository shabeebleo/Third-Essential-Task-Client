import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom"; // Import Link from React Router
import { parseDateTime } from "../../utils/useDate.jsx";

function UserList() {
  const [users, setUsers] = useState([]);
  const token = localStorage.getItem("adminToken");
  const parsedToken = JSON.parse(token);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await axios.get("http://localhost:5050/admins/users", {
          headers: {
            Authorization: `Bearer ${parsedToken}`,
          },
        });
        setUsers(response?.data);
      } catch (error) {
        console.error("Error fetching users:", error);
      }
    };

    fetchUsers();
  }, []);

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
              key={user._id}
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
                {/* Use Link to navigate to the UserProducts page */}
                <Link
                  to={{ pathname: "/user-products", state: { user } }}
                  className="inline-flex gap-x-2 items-center py-2.5 px-6 text-white bg-indigo-600 rounded-xl hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-1"
                >
                  More Details
                </Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </main>
  );
}

export default UserList;
