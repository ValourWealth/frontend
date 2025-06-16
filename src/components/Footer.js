import { useState } from "react";
import { Link } from "react-router-dom";
import "../styles/footer.css";

const Footer = () => {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleFooterSubmit = async (e) => {
    e.preventDefault();

    const res = await fetch(
      "https://backend-production-1e63.up.railway.app/api/footer-subscribe/",
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      }
    );

    const result = await res.json();
    if (res.ok) {
      setMessage("Subscribed successfully!");
      setEmail("");
    } else {
      setMessage(result.error || "Subscription failed.");
    }
  };
  return (
    <footer className="footer">
      <div className="footer-container">
        {/* Left Section - About */}
        <div className="footer-left">
          <h2 className="footer-logo-title">Valour Wealth</h2>
          <p className="footer-text">
            Headquartered in London. ValourWealth delivers unparalleled access
            to market tools with over 50 billion events processed daily.
          </p>

          {/* Subscribe Form */}
          <div className="footer-subscribe">
            <h3 className="subscribe-title">Subscribe</h3>
            <form className="footer-form" onSubmit={handleFooterSubmit}>
              <input
                type="email"
                placeholder="Your Email"
                required
                className="footer-input"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <button type="submit" className="footer-join-btn">
                Join!
              </button>

              {message && (
                <p
                  className="mt-2"
                  style={{
                    color: message.includes("success") ? "green" : "red",
                  }}
                >
                  {message}
                </p>
              )}
            </form>
          </div>
        </div>

        {/* Middle Section - Menu */}
        <div className="footer-middle">
          <h3 className="footer-title">Menu</h3>
          <ul className="footer-links">
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/technology-details">Technology</Link>
            </li>
            <li>
              <Link to="/contact">Contact</Link>
            </li>
            <li>
              <Link to="/latest-news">News</Link>
            </li>
            <li>
              <Link to="/leave-a-review">Leave a Review</Link>
            </li>
          </ul>
        </div>

        {/* Right Section - Pages */}
        <div className="footer-right">
          <h3 className="footer-title">Pages</h3>
          <ul className="footer-links">
            <li>
              <Link to="/privacy-policy">Privacy Policy</Link>
            </li>
            <li>
              <Link to="/terms-of-service">Terms Of Service</Link>
            </li>
            <li>
              <Link to="/acceptable-use-policy">Acceptable Use Policy</Link>
            </li>
            <li>
              <Link to="/legal-disclaimer">Legal Disclaimer</Link>
            </li>
          </ul>
        </div>

        <div className="contact-menu">
          <h3 className="footer-title" style={{ textAlign: "left" }}>
            Contact
          </h3>
          <ul className="footer-links" style={{ textAlign: "left" }}>
            <li>
              {" "}
              <a href="mailto:Contact@valourwealth.com">
                Contact@valourwealth.com
              </a>
            </li>
            <li>
              {" "}
              <a href="tel:+1234567890">+1 414 485 8800</a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
