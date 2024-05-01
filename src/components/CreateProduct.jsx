// import React, { useState } from "react";
// import axios from "axios";
// import { Cloudinary } from 'cloudinary-react';

// function CreateProductModal({ isOpen, onClose}) {
 
//   Cloudinary.configure({
//     cloud_name: import.meta.env.cloud_name,
//     api_key: import.meta.env.api_key,
//     api_secret: import.meta.env.api_secret
//   });

//   const [formData, setFormData] = useState({
//     image: "",
//     name: "",
//     description: "",
//     price: "",
//   });

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData((prevData) => ({
//       ...prevData,
//       [name]: value,
//     }));
//   };

//   const handleSubmit = async (e) => {
//     const token =localStorage.getItem("userToken").toString();
//     const parsedToken=JSON.parse(token)
//     e.preventDefault();
//     try {
//       // Make API call to save the product data
//       await axios.post("http://localhost:5050/users/products/", formData, {
//         headers: {
//           Authorization: `Bearer ${parsedToken}`,
//           "Content-Type": "application/json",
//         },
//       });
//       console.log("Product saved successfully");
//       onClose(); // Close the modal after form submission
//     } catch (error) {
//       console.error("Error saving product:", error);
//       // Handle error
//     }
//   };
//   if (!isOpen) return null;

//   return (
//     <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
//       <div className="bg-white p-8 rounded-lg shadow-lg w-96">
//         <h2 className="text-xl font-semibold mb-4">Add Product</h2>
//         <form onSubmit={handleSubmit}>
//           <div className="mb-4">
//             <label htmlFor="image" className="block font-medium mb-1">Image URL</label>
//             <input
//               type="text"
//               id="image"
//               name="image"
//               value={formData.image}
//               onChange={handleChange}
//               className="w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:border-indigo-500"
//             />
//           </div>
//           <div className="mb-4">
//             <label htmlFor="name" className="block font-medium mb-1">Name</label>
//             <input
//               type="text"
//               id="name"
//               name="name"
//               value={formData.name}
//               onChange={handleChange}
//               className="w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:border-indigo-500"
//             />
//           </div>
//           <div className="mb-4">
//             <label htmlFor="description" className="block font-medium mb-1">Description</label>
//             <textarea
//               id="description"
//               name="description"
//               value={formData.description}
//               onChange={handleChange}
//               className="w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:border-indigo-500"
//             ></textarea>
//           </div>
//           <div className="mb-4">
//             <label htmlFor="price" className="block font-medium mb-1">Price</label>
//             <input
//               type="number"
//               id="price"
//               name="price"
//               value={formData.price}
//               onChange={handleChange}
//               className="w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:border-indigo-500"
//             />
//           </div>
//           <div className="flex justify-end">
//             <button
//               type="button"
//               className="mr-2 px-4 py-2 text-gray-500 hover:text-gray-700 focus:outline-none"
//               onClick={onClose}
//             >
//               Cancel
//             </button>
//             <button
//               type="submit"
//               className="px-4 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700 focus:outline-none"
//             >
//               Save
//             </button>
//           </div>
//         </form>
//       </div>
//     </div>
//   );
// }

// export default CreateProductModal;






// import React, { useState } from "react";
// import axios from "axios";
// import { Cloudinary } from 'cloudinary-react';
// function CreateProductModal({ isOpen, onClose }) {
  
//   Cloudinary.configure({
//     cloud_name: import.meta.env.cloud_name,
//     api_key: import.meta.env.api_key,
//     api_secret: import.meta.env.api_secret
//   });

//   const [formData, setFormData] = useState({
//     image: "",
//     name: "",
//     description: "",
//     price: "",
//   });

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData((prevData) => ({
//       ...prevData,
//       [name]: value,
//     }));
//   };

//   const handleImageUpload = async (e) => {
//     const file = e.target.files[0];
//     const formData = new FormData();
//     formData.append("file", file);
//     formData.append("upload_preset", "your_cloudinary_upload_preset");

//     try {
//       const response = await axios.post(
//         "https://api.cloudinary.com/v1_1/your_cloud_name/image/upload",
//         formData
//       );
//       setFormData((prevData) => ({
//         ...prevData,
//         image: response.data.secure_url,
//       }));
//     } catch (error) {
//       console.error("Error uploading image:", error);
//       // Handle error
//     }
//   };

//   const handleSubmit = async (e) => {
//     const token =localStorage.getItem("userToken").toString();
//         const parsedToken=JSON.parse(token)
//     e.preventDefault();
//     try {
//       // Make API call to save the product data
//       await axios.post("http://localhost:5050/users/products/", formData, {
//         headers: {
//           Authorization: `Bearer ${parsedToken}`,
//           "Content-Type": "application/json",
//         },
//       });
//       console.log("Product saved successfully");
//       onClose(); // Close the modal after form submission
//     } catch (error) {
//       console.error("Error saving product:", error);
//       // Handle error
//     }
//   };

//   if (!isOpen) return null;

//   return (
//     <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
//       <div className="bg-white p-8 rounded-lg shadow-lg w-96">
//         <h2 className="text-xl font-semibold mb-4">Add Product</h2>
//         <form onSubmit={handleSubmit}>
//           <div className="mb-4">
//             <label htmlFor="image" className="block font-medium mb-1">
//               Image Upload
//             </label>
//             <input
//               type="file"
//               id="image"
//               name="image"
//               accept="image/*"
//               onChange={handleImageUpload}
//               className="border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:border-indigo-500"
//             />
//           </div>
//           {/* Rest of the form fields */}
//           <button
//             type="submit"
//             className="px-4 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700 focus:outline-none"
//           >
//             Save
//           </button>
//         </form>
//       </div>
//     </div>
//   );
// }

// export default CreateProductModal;


import React, { useState } from "react";
import axios from "axios";
import { CloudinaryContext, Image } from 'cloudinary-react';

function CreateProductModal({ isOpen, onClose }) {
  // Define Cloudinary configuration
  const cloudName = "dooc9crf3"; // Access cloudName from Vite environment variables
  const uploadPreset = "cpivviio"; // Access upload preset from React environment variables

  const [formData, setFormData] = useState({
    image: "",
    name: "",
    description: "",
    price: "",
  });

  // Handle form input change
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  // Handle image upload to Cloudinary
  const handleImageUpload = async (e) => {
    const file = e.target.files[0];
    const formData = new FormData();
    formData.append("file", file);
    formData.append("upload_preset", uploadPreset);
    formData.append("cloudName", cloudName);

    try {
      console.log("...............");
      const response = await axios.post(
        `https://api.cloudinary.com/v1_1/${cloudName}/image/upload`,
        formData
      );
      console.log(response,"of'''''''''''''''''''''''''' cloudinary");
      setFormData((prevData) => ({
        ...prevData,
        image: response.data.secure_url,
      }));
      console.log(response.data.secure_url,"url      of cloud[[[[[[[[[[[[[[[[[[[[[[[inary");
    } catch (error) {
      console.error("Error[[[[[[[[[[]]]]]]]]]] uploading image:", error);
      // Handle error
    }
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    const token = localStorage.getItem("userToken");
    const parsedToken = JSON.parse(token);
    console.log(formData,"ahhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhh");
    try {
      // Make API call to save the product data
      await axios.post("http://localhost:5050/users/products/", formData, {
        headers: {
          Authorization: `Bearer ${parsedToken}`,
          "Content-Type": "application/json",
        },
      });
      console.log("Product saved successfully");
      onClose(); // Close the modal after form submission
    } catch (error) {
      console.error("Error saving product:", error);
      // Handle error
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white p-8 rounded-lg shadow-lg w-96">
        <h2 className="text-xl font-semibold mb-4">Add Product</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="image" className="block font-medium mb-1">
              Image Upload
            </label>
            <input
              type="file"
              id="image"
              name="image"
              accept="image/*"
              onChange={handleImageUpload}
              className="border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:border-indigo-500"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="name" className="block font-medium mb-1">Name</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:border-indigo-500"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="description" className="block font-medium mb-1">Description</label>
            <textarea
              id="description"
              name="description"
              value={formData.description}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:border-indigo-500"
            ></textarea>
          </div>
          <div className="mb-4">
            <label htmlFor="price" className="block font-medium mb-1">Price</label>
            <input
              type="number"
              id="price"
              name="price"
              value={formData.price}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:border-indigo-500"
            />
          </div>
          <div className="flex justify-end">
            <button
              type="submit"
              className="px-4 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700 focus:outline-none"
            >
              Save
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default CreateProductModal;
