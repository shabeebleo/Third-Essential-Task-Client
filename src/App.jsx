import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Login from "./components/Login";
import ProductList from "./components/ProductList";
import CreateProduct from "./components/CreateProduct";
import EditProduct from "./components/EditProduct";
import UserProducts from "./components/Admin/UserProducts";
import UserList from "./components/Admin/UserList";

export default function App() {
  return (
    <Router>
      {/* <Route path="/user-products/:userId" component={UserProducts} /> */}
      <div className="App">
        <Login />
        {/* <UserProducts/> */}
        {/* <ProductList /> */}

        {/* <UserList /> */}
      </div>
    </Router>
  );
}
