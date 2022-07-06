import { Route, Routes } from "react-router-dom";
import "./styles.css";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Products from "./components/Products";
import Product from "./components/Product";
function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Products />} />
        <Route path="/products/:product_id" element={<Product />} />
      </Routes>
    </div>
  );
}
export default App;
