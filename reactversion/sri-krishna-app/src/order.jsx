import { useEffect, useState } from "react";

function Order(){

  const productList = [
    "Varshini",
    "Vinayaga Dhoop",
    "Attar",
    "Javvadhu",
    "Sambrani Cups",
    "Sandal Dhoop",
    "Rose Attar",
    "Herbal Floor Cleaner",
    "Temple Dhoop Sticks"
  ];

  const [selected, setSelected] = useState([]);
  const [cart, setCart] = useState([]);
  const [quantities, setQuantities] = useState({});
  const [form, setForm] = useState({
    shop: "",
    owner: "",
    phone: ""
  });

  /* LOAD CART */
  useEffect(() => {
    let saved = JSON.parse(localStorage.getItem("cart")) || [];
    setCart(saved);
  }, []);

  /* CHECKBOX */
  const handleCheckbox = (item) => {
    if(selected.includes(item)){
      setSelected(selected.filter(p => p !== item));
    } else {
      setSelected([...selected, item]);
    }
  };

  /* ADD TO CART */
  const addSelectedToCart = () => {
    if(selected.length === 0){
      alert("Please select at least one product");
      return;
    }

    let updatedCart = [...new Set([...cart, ...selected])];

    setCart(updatedCart);
    localStorage.setItem("cart", JSON.stringify(updatedCart));

    setSelected([]);
  };

  /* 🔴 CLEAR CART */
  const clearCart = () => {
    if(window.confirm("Are you sure you want to clear the cart?")){
      setCart([]);
      localStorage.removeItem("cart");
    }
  };

  /* FORM INPUT */
  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  /* QUANTITY */
  const handleQtyChange = (product, value) => {
    setQuantities({ ...quantities, [product]: value });
  };

  /* SUBMIT */
  const handleSubmit = (e) => {
    e.preventDefault();

    if(!form.shop || !form.owner || !form.phone){
      alert("Please fill all fields");
      return;
    }

    if(form.phone.length < 10){
      alert("Enter valid phone number");
      return;
    }

    let finalProducts = cart.map(product => ({
      name: product,
      quantity: quantities[product] || 0
    })).filter(p => p.quantity > 0);

    if(finalProducts.length === 0){
      alert("Enter quantity for at least one product");
      return;
    }

    let finalOrder = {
      ...form,
      products: finalProducts
    };

    let allOrders = JSON.parse(localStorage.getItem("finalOrders")) || [];
    allOrders.push(finalOrder);
    localStorage.setItem("finalOrders", JSON.stringify(allOrders));

    alert("Order Confirmed Successfully!");

    setForm({ shop:"", owner:"", phone:"" });
    setQuantities({});
    setCart([]);
    localStorage.removeItem("cart");
  };

  return(
    <div>

      <section className="content">

        <h2>Products</h2>

        {/* PRODUCT SELECTION */}
        <div className="product-list">
          {productList.map((item, index) => (
            <label key={index}>
              <input
                type="checkbox"
                checked={selected.includes(item)}
                onChange={() => handleCheckbox(item)}
              />
              {item}
            </label>
          ))}
        </div>

        <br/>

        <button onClick={addSelectedToCart}>
          Add Selected to Cart
        </button>

        {/* CART */}
        <h3>Cart</h3>

        {cart.length === 0 ? (
          <p>No items in cart</p>
        ) : (
          <>
            <ul>
              {cart.map((item, i) => (
                <li key={i}>{item}</li>
              ))}
            </ul>

            {/* 🔴 CLEAR BUTTON */}
            <button 
              onClick={clearCart} 
              style={{ background: "#e74c3c", marginTop: "10px" }}
            >
              Clear Cart
            </button>
          </>
        )}

      </section>

      {/* ORDER FORM */}
      <section className="content">

        <h2>Place a Bulk Order</h2>

        <p>
          Retail shop owners can place bulk orders for TPRG products using the form below.
        </p>

        <form onSubmit={handleSubmit} className="order-form">

          <label>Shop Name</label><br/>
          <input 
            type="text" 
            placeholder="Enter your shop name" 
            name="shop" 
            value={form.shop} 
            onChange={handleChange} 
          /><br/><br/>

          <label>Owner Name</label><br/>
          <input 
            type="text" 
            placeholder="Enter your name" 
            name="owner" 
            value={form.owner} 
            onChange={handleChange} 
          /><br/><br/>

          <label>Contact Number</label><br/>
          <input 
            type="tel" 
            placeholder="Enter your contact number" 
            name="phone" 
            value={form.phone} 
            onChange={handleChange} 
          /><br/><br/>

          <h3>Selected Products</h3>

          {cart.length === 0 ? (
            <p>No products selected</p>
          ) : (
            cart.map((product, index) => (
              <div key={index} className="order-item">
                <span>{product}</span>
                <input
                  type="number"
                  min="1"
                  placeholder="Qty"
                  value={quantities[product] || ""}
                  onChange={(e) => handleQtyChange(product, e.target.value)}
                />
              </div>
            ))
          )}

          <br/>

          <input type="submit" value="Confirm Order" />

        </form>

      </section>

      {/* FOOTER */}
      <footer className="footer">
        <p>Sri Krishna Agencies</p>
        <p>TPRG Brand Distributor – Perambalur</p>
        <p>Contact: +91 9XXXXXXXXX</p>
        <p>Email: srikrishnaagencies@gmail.com</p>
        <p>© 2026 Sri Krishna Agencies</p>
      </footer>

    </div>
  );
}

export default Order;