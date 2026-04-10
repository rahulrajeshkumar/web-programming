import { HashRouter, Routes, Route, Link } from "react-router-dom";
import "./style.css";

import Home from "./home";
import Products from "./products";
import Order from "./order";
import Contact from "./contact";

function App(){
  return(
    <HashRouter>

      <header className="main-header">
        <h1>Sri Krishna Agencies</h1>
        <p>Authorized Distributor of TPRG Brand Products</p>
        <p>Perambalur</p>
      </header>

      <nav className="navbar">
        <Link to="/">Home</Link>
        <Link to="/products">Products</Link>
        <Link to="/order">Place Order</Link>
        <Link to="/contact">Contact</Link>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Products />} />
        <Route path="/order" element={<Order />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>

    </HashRouter>
    
  );
}

export default App;