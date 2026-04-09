function Contact(){
  return(
    <div>

      {/* HEADER SECTION */}
      <section className="content">
        <h2>Contact Us</h2>
        <p>
          We’re here to help! Reach out to Sri Krishna Agencies for bulk orders,
          product inquiries, or any support related to TPRG products.
        </p>
      </section>

      {/* CONTACT DETAILS */}
      <section className="content">
        <h3>📍 Our Details</h3>

        <p><strong>Business Name:</strong> Sri Krishna Agencies</p>
        <p><strong>Location:</strong> Perambalur, Tamil Nadu</p>
        <p><strong>Phone:</strong> +91 9XXXXXXXXX</p>
        <p><strong>Email:</strong> srikrishnaagencies@gmail.com</p>
      </section>

      {/* BUSINESS HOURS */}
      <section className="content">
        <h3>🕒 Business Hours</h3>

        <p>Monday – Saturday: 9:00 AM – 8:00 PM</p>
        <p>Sunday: Closed</p>
      </section>

      {/* CONTACT FORM */}
      <section className="content">
        <h3>📩 Send Us a Message</h3>

        <form className="order-form">

          <label>Your Name</label><br></br>
          <input type="text" placeholder="Enter your name" />
          <br></br>
          <br></br>

          <label>Your Email</label><br></br>
          <input type="email" placeholder="Enter your email" />
          <br></br>
          <br></br>

          <label>Message</label><br></br>
          <textarea 
            placeholder="Write your message..."
            rows="4"
            style={{
              width: "280px",
              padding: "12px",
              borderRadius: "10px",
              border: "none",
              background: "rgba(255,255,255,0.7)"
            }}
          ></textarea>

          <br/><br/>

          <button type="submit">Send Message</button>

        </form>
      </section>

      {/* MAP / LOCATION INFO */}
      <section className="content">
        <h3>📌 Location</h3>
        <p>
          We are located in Perambalur and serve nearby regions with fast delivery
          and reliable distribution services.
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

export default Contact;