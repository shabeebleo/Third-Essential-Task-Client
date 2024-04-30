import React, { useState, useEffect } from "react";
import axios from "axios";

function UpdateProductModal({
  isOpen,
  onClose,
  price: initialPrice,
  description: initialDescription,
  name: initialName,
  productId,
  image: initialImage,
}) {
  const [formData, setFormData] = useState({
    image: initialImage,
    name: initialName,
    description: initialDescription,
    price: initialPrice,
  });
  console.log(onClose, "onCloseonClose");
  useEffect(() => {
    // Update formData with new props when they change
    setFormData({
      image: initialImage,
      name: initialName,
      description: initialDescription,
      price: initialPrice,
    });
  }, [initialImage, initialName, initialDescription, initialPrice]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleUpdate = async (e) => {
    e.preventDefault();
  const token =localStorage.getItem("userToken").toString();
  const parsedToken=JSON.parse(token)
    try {
      // Make API call to update the product
      await axios.put(
        `http://localhost:5050/users/products/${productId}`,
        formData,
        {
          headers: {
            Authorization: `Bearer ${parsedToken}`,
          },
        }
      );
      console.log("Product updated successfully");
      // setReload(true); // Set reload to true to trigger product list update
      onClose(); // Close the modal after form submission
    } catch (error) {
      console.error("Error updating product:", error);
      // Handle error
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white p-8 rounded-lg shadow-lg w-96">
        <h2 className="text-xl font-semibold mb-4">Update Product</h2>
        <form onSubmit={handleUpdate}>
          <div className="mb-4">
            <label htmlFor="image" className="block font-medium mb-1">
              Image URL
            </label>
            <input
              type="text"
              id="image"
              name="image"
              value={formData.image}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:border-indigo-500"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="name" className="block font-medium mb-1">
              Name
            </label>
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
            <label htmlFor="description" className="block font-medium mb-1">
              Description
            </label>
            <textarea
              id="description"
              name="description"
              value={formData.description}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:border-indigo-500"
            ></textarea>
          </div>
          <div className="mb-4">
            <label htmlFor="price" className="block font-medium mb-1">
              Price
            </label>
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
              type="button"
              className="mr-2 px-4 py-2 text-gray-500 hover:text-gray-700 focus:outline-none"
              onClick={()=>{onClose()}}
            >
              Cancel
            </button>
        
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

export default UpdateProductModal;
