import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Login from "./components/Login";
import ProductList from "./components/ProductList";
import CreateProduct from "./components/CreateProduct";
import EditProduct from "./components/EditProduct";
import UserProducts from "./components/Admin/UserProducts";
import UserList from "./components/Admin/UserList";
import AdminLogin from "./components/Admin/AdminLogin";
import UserRegistration from "./components/Admin/UserRegister"
import { useState } from "react";
export default function App() {
  const [isLogin,setIslogin]=useState(true)
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login isLogin={isLogin} />} />
        <Route path="/product-list" element={<ProductList setIslogin={setIslogin} />} />
        <Route path="/create-product" element={<CreateProduct />} />
        <Route path="/edit-product" element={<EditProduct />} />
        <Route path="/user-products" element={<UserProducts />} />
        <Route path="/user-list" element={<UserList />} />
        <Route path="/admin-login" element={<AdminLogin />} />
        <Route path="/admin-user-registration" element={<UserRegistration />} />
      </Routes>
    </Router>
  );
}
