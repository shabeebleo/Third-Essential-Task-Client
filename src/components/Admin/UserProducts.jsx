import React, { useState, useEffect } from "react";
import axios from "axios";
import { parseDateTime } from "../../utils/useDate.jsx";
import { useNavigate } from "react-router-dom";
import { CloudinaryContext, Image } from "cloudinary-react";
import { useLocation } from "react-router-dom";
function ProductList({ user }) {
  console.log(user, "user specific product list");
  const location = useLocation();
  const userId = location.state.userId;
  console.log(userId, "userIduser...............IduserId");
  const cloudName = import.meta.cloudName;
  const [userData, setUserData] = useState({});

  const navigate = useNavigate();
  const token = localStorage.getItem("adminToken");
  const parsedToken = JSON.parse(token);
  useEffect(() => {
    const fetchUserDetails = async () => {
      console.log("fetchUserDetailsfetchUserDetailsfetchUserDetails");
      try {
        const response = await axios.get(
          `http://localhost:5050/admins/users/activity/${userId}`,
          {
            headers: {
              Authorization: `Bearer ${parsedToken}`,
            },
          }
        );

        console.log(response, "verum respnsse");
        console.log(
          response.data[0],
          "response.dataresponse.dataresponse.dataresponse.dataresponse.data"
        );

        const foundUser = response.data[0];
        console.log(foundUser, "foundUserfoundUser");
        setUserData(foundUser);
      } catch (error) {
        console.error("Error fetching user details:", error);
      }
    };

    fetchUserDetails();
  }, [user]);

  const handleLogout = () => {
    localStorage.removeItem("adminToken");
    window.location.href = "/admin-login";
  };

  const handleGoToPage = () => {
    // Implement logic to navigate to another page
    navigate("/user-list");
  };
  return (
    <main className="flex-1 pb-8">
      {/* User details */}
      <div className="py-7 px-10">
        <div className="flex justify-between">
          <div>
            <h1 className="text-2xl font-semibold leading-relaxed text-gray-800">
              {userData.username}
              {console.log(userData)}
            </h1>
            <p className="text-sm font-medium text-gray-500">
              {userData.email}
            </p>
            <p className="text-sm font-medium text-gray-500">
              Login Time:
              <span>{new Date(userData.loginTimes?.[0]).toDateString()}</span>
              {`  ${parseDateTime(userData.loginTimes?.[0]).hour}hr: ${
                parseDateTime(userData.loginTimes?.[0]).minute
              }mins`}
            </p>
            <p className="text-sm font-medium text-gray-500">
              Logout Time:
              <span>{new Date(userData.logoutTimes?.[0]).toDateString()}</span>
              {`  ${parseDateTime(userData.logoutTimes?.[0]).hour}hr: ${
                parseDateTime(userData.logoutTimes?.[0]).minute
              }mins`}
            </p>
          </div>
          <div>
            <button
              onClick={handleLogout}
              className="inline-flex gap-x-2 items-center py-1 px-3 h-10 mx-3 text-white bg-red-600 rounded-md hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-1"
            >
              Logout
            </button>
            <button
              onClick={handleGoToPage}
              className="inline-flex gap-x-2 items-center py-1 px-3 h-10 text-white bg-indigo-600 rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-1"
            >
              Back
              {/* Add SVG icon here if needed */}
            </button>
          </div>
        </div>
      </div>

      {/* Products table */}
      <table className="w-full border-b border-gray-200">
        <thead>
          <tr className="text-sm font-medium text-gray-700 border-b border-gray-200">
            <th className="pl-10">
              <div className="flex items-center justify-end mr-9">
                <span>Product Name</span>
              </div>
            </th>
            <th className="py-4 px-4 text-center">Pricing</th>
            <th className="py-4 px-4 text-center">Created At</th>
            <th className="py-4 px-4 text-center">Updated At</th>
          </tr>
        </thead>
        <tbody>
          {userData.productsCreated?.map((product) => (
            <tr
              //   key={product._id}
              className="hover:bg-gray-100 transition-colors group"
            >
              <td className="flex justify-around  items-center py-4 pl-10">
                {/* <img
                  src={product.image}
                  alt=""
                  className="w-40 aspect-w-3 aspect-h-2 rounded-lg object-cover object-top border border-gray-200"
                /> */}
                <CloudinaryContext cloudName={import.meta.env.VITE_CLOUD_NAME}>
                  {/* Image component to render Cloudinary image */}
                  {product.image && (
                    <Image
                      publicId={product.image}
                      width={150} // Set your desired width
                      height={150} // Set your desired height
                      crop="fill" // Adjust cropping to fill the specified dimensions
                    />
                  )}
                </CloudinaryContext>

                <div>
                  <a href="#" className="text-lg font-semibold text-gray-700">
                    {product.name}
                  </a>
                </div>
              </td>

              <td className="font-medium text-center">${product.price}</td>
              <td className="font-medium text-center">
                <div>{new Date(product.createdAt).toDateString()}</div>

                {`${parseDateTime(product.createdAt).hour}hr: ${
                  parseDateTime(product.createdAt).minute
                }mins`}
              </td>
              <td className="font-medium text-center ">
                <div>{new Date(product.updatedAt).toDateString()}</div>

                {`${parseDateTime(product.updatedAt).hour}hr: ${
                  parseDateTime(product.updatedAt).minute
                }mins`}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </main>
  );
}

export default ProductList;
