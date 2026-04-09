function Home(){
  return(
    <div>

      {/* ABOUT */}
      <section className="content">
        <h2>About Sri Krishna Agencies</h2>

        <p>
          Sri Krishna Agencies is a leading distributor of TPRG brand products located in Perambalur.
          We supply high-quality household and devotional products to retail shops.
        </p>
      </section>

      {/* TPRG BRAND */}
      <section className="content">
        <h2>About TPRG Brand</h2>

        <p>
          TPRG manufactures devotional and household products used in daily rituals.
          The brand is known for its purity, fragrance, and long-lasting quality.
        </p>

        <h3>Main Products</h3>

        <ul>
          <li>Sambrani Cups</li>
          <li>Vinayaga Dhoop</li>
          <li>Attars</li>
          <li>Javvadhu Fragrance</li>
        </ul>
      </section>

      {/* PRODUCTS DISPLAY */}
      <section className="content">
        <h2>Some of the Products We Distribute (TPRG Brand)</h2>

        <div className="products">

          <div className="product-card">
            <h3>Varshini</h3>
            <p>High-quality cleaning solution for daily use.</p>
            <img src="/images/varshini.webp" alt="Varshini"/>
          </div>

          <div className="product-card">
            <h3>Vinayaga Dhoop</h3>
            <p>Effective detergent for superior stain removal.</p>
            <img src="/images/vinayaga.webp" alt="Vinayaga"/>
          </div>

          <div className="product-card">
            <h3>Attar</h3>
            <p>Long-lasting fragrance product for retail shops.</p>
            <img src="/images/attar.webp" alt="Attar"/>
          </div>

          <div className="product-card">
            <h3>Javvadhu</h3>
            <p>Powerful fragrance with traditional essence.</p>
            <img src="/images/javvadhu.webp" alt="Javvadhu"/>
          </div>

        </div>
      </section>

      {/* WHY CHOOSE US */}
      <section className="content">
        <h2>Why Choose Sri Krishna Agencies?</h2>

        <ul>
          <li>✔ Trusted distributor of TPRG products</li>
          <li>✔ High-quality and authentic products</li>
          <li>✔ Fast and reliable delivery</li>
          <li>✔ Bulk order support for retailers</li>
          <li>✔ Strong customer relationships</li>
        </ul>
      </section>

      {/* SERVICES */}
      <section className="content">
        <h2>Our Services</h2>

        <ul>
          <li>Wholesale distribution of TPRG products</li>
          <li>Doorstep delivery to retail shops</li>
          <li>Easy bulk order management system</li>
          <li>Consistent product availability</li>
        </ul>
      </section>

      {/* HOW IT WORKS */}
      <section className="content">
        <h2>How It Works</h2>

        <ol>
          <li>Browse available products</li>
          <li>Select required items</li>
          <li>Add products to cart</li>
          <li>Place bulk order</li>
          <li>Get delivery at your shop</li>
        </ol>
      </section>

      {/* FEATURES */}
      <section className="content">
        <h2>Key Features</h2>

        <div className="features">
          <p>📦 Bulk Order Management</p>
          <p>⚡ Fast Processing</p>
          <p>📊 Easy Product Selection</p>
          <p>🔒 Secure Data Handling</p>
        </div>
      </section>

      {/* CUSTOMER TRUST */}
      <section className="content">
        <h2>Trusted by Retailers</h2>

        <p>
          Sri Krishna Agencies has built a strong reputation among retailers in
          Perambalur and nearby regions. Our consistent supply and quality products
          make us a preferred distributor.
        </p>
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

export default Home;