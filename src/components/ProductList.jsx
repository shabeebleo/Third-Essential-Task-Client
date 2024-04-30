import React, { useEffect, useState, useCallback } from "react";
import axios from "axios";
import CreateProductModal from "../components/CreateProduct";
import UpdateProductModal from "../components/EditProduct";
function ProductList() {
  const [products, setProducts] = useState([]);
  const [isCreateModalOpen, setIsCreateModalOpen] = useState(false);
  const [isUpdateModalOpen, setIsUpdateModalOpen] = useState(false);
  const [reload, setReload] = useState(false);

  console.log(reload, "reloaddddddddd in product list");
  const openCreateModal = () => {
    setIsCreateModalOpen(true);
  };
  const openUpdateModal = () => {
    setIsUpdateModalOpen(true);
  };

  const closeCreateModal = () => {
    setIsCreateModalOpen(false);
  };
  const closeUpdateModal = () => {
    setIsUpdateModalOpen(false);
  };
  const token =
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI2NjMwNTJjNzI4YzQ1Y2I2ODY4Njg2OGYiLCJpYXQiOjE3MTQ0NzgzNjksImV4cCI6MTcxNDQ4MTk2OX0.G27JHf-Ls1jChNCctl-MmS-WAiNpXkGAMfVrE93rP_g";

  const fetchUserProducts = async () => {
    try {
      const response = await axios.get("http://localhost:5050/users/products", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      setProducts(response.data);
    } catch (error) {
      console.error("Error fetching user products:", error);
      setProducts([]);
    }
  };


  useEffect(() => {
    fetchUserProducts();
  }, [fetchUserProducts]);

  const handleDelete = async (productId) => {
    try {
      // Make API call to delete the product
      await axios.delete(`http://localhost:5050/users/products/${productId}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      console.log("Product deleted successfully");
      // Refresh the product list or update state if needed
    } catch (error) {
      console.error("Error deleting product:", error);
      // Handle error
    }
  };

  return (
    <main className="flex-1 pb-8">
      <div className="flex items-center justify-between py-7 px-10">
        <div>
          <h1 className="text-2xl font-semibold leading-relaxed text-gray-800">
            Products
          </h1>
          <p className="text-sm font-medium text-gray-500">
            Let's grow your business! Create your product and upload here
          </p>
        </div>
        <button
          onClick={openCreateModal}
          className="inline-flex gap-x-2 items-center py-2.5 px-6 text-white bg-indigo-600 rounded-xl hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-1"
        >
          <svg
            className="w-6 h-6 fill-current"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M12 6v6m0 0v6m0-6h6m-6 0H6"
            ></path>
          </svg>
          <span className="text-sm font-semibold tracking-wide">
            Create Item
          </span>
        </button>
        <CreateProductModal
          isOpen={isCreateModalOpen}
          onClose={closeCreateModal}
          setReload={setReload}
          reload={reload}
        />
      </div>

      <table className="w-full border-b border-gray-200">
        <thead>
          <tr className="text-sm font-medium text-gray-700 border-b border-gray-200">
            <th className="pl-10">
              <div className="flex items-center gap-x-4">
                <span>Product Name</span>
              </div>
            </th>
            <th className="py-4 px-4 text-center">Pricing</th>
            <th className="py-4 px-4 text-center">Description</th>
            <th className="py-4 px-4 text-center">Created At</th>
            <th className="py-4 px-4 text-center">Updated At</th>
            <th className="py-4 px-4 text-center">Actions</th>
          </tr>
        </thead>
        <tbody>
          {products.map((product) => (
            <tr
              key={product._id}
              className="hover:bg-gray-100 transition-colors group"
            >
              <td className="flex gap-x-4 items-center py-4 pl-10">
                <img
                  src={product.image}
                  alt=""
                  className="w-40 aspect-w-3 aspect-h-2 rounded-lg object-cover object-top border border-gray-200"
                />
                <div>
                  <a href="#" className="text-lg font-semibold text-gray-700">
                    {product.name}
                  </a>
                </div>
              </td>
              <td className="font-medium text-center">${product.price}</td>
              <td className="font-medium text-center">{product.description}</td>
              <td className="font-medium text-center">{product.createdAt}</td>
              <td className="font-medium text-center">{product.updatedAt}</td>
              <td>
                <div className="hidden group-hover:flex group-hover:w-20 group-hover:items-center group-hover:text-gray-500 group-hover:gap-x-2">
                  <button
                    onClick={openUpdateModal}
                    className="p-2 hover:rounded-md hover:bg-gray-200"
                  >
                    <UpdateProductModal
                      isOpen={isUpdateModalOpen}
                      onClose={closeUpdateModal}
                      productId={product._id}
                      price={product.price}
                      description={product.description}
                      name={product.name}
                      image={product.image}
                    />
                    <svg
                      className="w-6 h-6 fill-current"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M19.9249 8.43943L11.4764 16.8879C11.1915 17.1728 10.8039 17.3311 10.401 17.3272L6.87763 17.2925C6.06962 17.2846 5.41312 16.638 5.39286 15.8302L5.30692 12.4031C5.29662 11.9923 5.45526 11.5953 5.74579 11.3048L14.268 2.78257C14.8538 2.19679 15.8035 2.19679 16.3893 2.78257L19.9249 6.31811C20.5106 6.90389 20.5106 7.85364 19.9249 8.43943Z"
                        fill="currentColor"
                      />
                      <path
                        opacity="0.3"
                        d="M19 20H6C5.44772 20 5 20.4477 5 21C5 21.5523 5.44772 22 6 22H19C19.5523 22 20 21.5523 20 21C20 20.4477 19.5523 20 19 20Z"
                        fill="currentColor"
                      />
                    </svg>
                  </button>
                  <button
                    onClick={() => handleDelete(product._id)}
                    className="p-2 hover:rounded-md hover:bg-gray-200"
                  >
                    <svg
                      className="w-6 h-6 fill-current"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M6 8H18L17.1065 19.615C17.0464 20.3965 16.3948 21 15.611 21H8.38905C7.60524 21 6.95358 20.3965 6.89347 19.615L6 8ZM8 10L8.45438 14.0894L15.5518 14.0339L16 10H8Z"
                        fill="currentColor"
                      />
                      <path
                        opacity="0.3"
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M14 4.5V3.5C14 3.22386 13.7761 3 13.5 3H10.5C10.2239 3 10 3.22386 10 3.5V4.5H5.5C5.22386 4.5 5 4.72386 5 5V5.5C5 5.77614 5.22386 6 5.5 6H18.5C18.7761 6 19 5.77614 19 5.5V5C19 4.72386 18.7761 4.5 18.5 4.5H14Z"
                        fill="currentColor"
                      />
                    </svg>
                  </button>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </main>
  );
}

export default ProductList;
