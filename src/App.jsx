import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Login from "./components/Login";
import ProductList from "./components/ProductList";
import CreateProduct from "./components/CreateProduct";
import EditProduct from "./components/EditProduct";

export default function App() {
  return (
    // <Router>

    <div className="App">
      {/* <Login /> */}
      <ProductList />
      {/* <CreateProduct /> */}
      {/* <EditProduct /> */}
    </div>

    // </Router>
  );
}





{/* <>
<Routes>
  <Route path="/" element={<Home />} /> */}
  {/* <Route path="/login" element={<Login />} />
  <Route path="/product-list" element={<ProductList />} />
  <Route path="/create-product" element={<CreateProduct />} />
  <Route path="/edit-product/:id" element={<EditProduct />} /> */}
{/* </Routes>
</> */}