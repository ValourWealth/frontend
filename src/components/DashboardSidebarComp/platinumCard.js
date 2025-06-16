import React from "react";

const PlatinumCard = () => {
  // Features list with icons
  const features = [
    {
      id: 1,
      text: "12 one-on-one coaching sessions",
      icon: "bi-check-circle-fill",
    },
    { id: 2, text: "Live trading stream access", icon: "bi-check-circle-fill" },
    { id: 3, text: "Exclusive market alerts", icon: "bi-check-circle-fill" },
    { id: 4, text: "Premium trading resources", icon: "bi-check-circle-fill" },
    { id: 5, text: "Priority support", icon: "bi-check-circle-fill" },
    {
      id: 6,
      text: "Advanced options strategies",
      icon: "bi-check-circle-fill",
    },
    { id: 7, text: "Weekly market analysis", icon: "bi-check-circle-fill" },
    { id: 8, text: "Trading community access", icon: "bi-check-circle-fill" },
  ];

  return (
    <div className="platinum-prize-card">
      <div class="dashboard-title text-center">
        <h2 className="text-center fw-bold product-p">PLatinum Program</h2>
        <p
          style={{
            width: "530px",
            textAlign: "center",
            margin: "auto",
          }}
          className="text-gray-400 text-base sm:text-lg product-p"
        >
          Discover our comprehensive suite of premium financial products and
          services designed to elevate your trading and investment experience.
        </p>
      </div>
      <div class="price-platinum-main">
        <div className="card-header">
          <div className="shield-icon">
            <i className="bi bi-shield-fill"></i>
          </div>
          <h2 className="title">Platinum Access</h2>
        </div>

        <div className="price-section">
          <h1 className="price">$297</h1>
          <p className="price-period">per month</p>
        </div>

        <div className="features-list">
          {features.map((feature) => (
            <div key={feature.id} className="feature-item">
              <i className={`feature-icon bi ${feature.icon}`}></i>
              <span className="feature-text">{feature.text}</span>
            </div>
          ))}
        </div>
        <div className="cta-section">
          <button className="btn btn-unlock-cta">
            <i className="bi bi-unlock-fill me-2"></i>
            Unlock Platinum Access
          </button>
        </div>
      </div>
    </div>
  );
};

export default PlatinumCard;
