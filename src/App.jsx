import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Login from "./components/Login";
import ProductList from "./components/ProductList";
import CreateProduct from "./components/CreateProduct";
import EditProduct from "./components/EditProduct";
import UserProducts from "./components/Admin/UserProducts";
import UserList from "./components/Admin/UserList";
import AdminLogin from "./components/Admin/AdminLogin";
import UserRegistration from "./components/Admin/UserRegister"
export default function App() {

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login  />} />
        <Route path="/product-list" element={<ProductList  />} />
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
