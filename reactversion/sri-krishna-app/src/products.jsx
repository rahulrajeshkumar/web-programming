import { useNavigate } from "react-router-dom";

function Products(){

  const navigate = useNavigate();

  return(
    <div>

      {/* INTRO */}
      <section className="content">
        <h2>Our Product Range</h2>
        <p>
          We distribute a wide variety of TPRG brand products including
          devotional and household essentials. All products are known for
          their quality, fragrance, and long-lasting performance.
        </p>
      </section>

      {/* FEATURED PRODUCTS */}
      <section className="content">
        <h2>Featured Products</h2>

        <div className="products">

          <div className="product-card">
            <h3>Varshini</h3>
            <p>Creates a divine atmosphere with long-lasting fragrance.</p>
            <img src="images/varshini.webp" alt="Varshini"/>
          </div>

          <div className="product-card">
            <h3>Vinayaga Dhoop</h3>
            <p>Perfect for daily pooja rituals and spiritual use.</p>
            <img src="images/vinayaga.webp" alt="Vinayaga"/>
          </div>

          <div className="product-card">
            <h3>Attar</h3>
            <p>Premium fragrance oil with long-lasting aroma.</p>
            <img src="images/attar.webp" alt="Attar"/>
          </div>

          <div className="product-card">
            <h3>Javvadhu</h3>
            <p>Traditional fragrance widely used in temples and rituals.</p>
            <img src="images/javvadhu.webp" alt="Javvadhu"/>
          </div>

        </div>
      </section>

      {/* ALL PRODUCTS LIST */}
      <section className="content">
        <h2>Complete Product List</h2>

        <ul>
          <li>Varshini Sambrani Cups</li>
          <li>Vinayaga Dhoop</li>
          <li>Attar (Various Fragrances)</li>
          <li>Javvadhu Powder</li>
          <li>Sambrani Cups</li>
          <li>Sandal Dhoop</li>
          <li>Rose Attar</li>
          <li>Herbal Floor Cleaner</li>
          <li>Temple Dhoop Sticks</li>
        </ul>
      </section>

      {/* WHY CHOOSE PRODUCTS */}
      <section className="content">
        <h2>Why Choose TPRG Products?</h2>

        <ul>
          <li>✔ High-quality ingredients</li>
          <li>✔ Long-lasting fragrance</li>
          <li>✔ Suitable for daily rituals</li>
          <li>✔ Trusted by retailers and customers</li>
          <li>✔ Affordable bulk pricing</li>
        </ul>
      </section>

      {/* CALL TO ACTION */}
      <section className="content" style={{ textAlign: "center" }}>
        <h2>Ready to Place an Order?</h2>
        <p>
          Choose your required products and place your bulk order easily.
        </p>

        <button onClick={() => navigate("/order")}>
          Go to Order Page
        </button>
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

export default Products;