import { BarChart3, MessageCircle, Star } from "lucide-react";
import { useState } from "react";
import SalesContactForm from "./formformentorship";

const FeatureItem = ({ text }) => (
  <div className="feature-item d-flex align-items-start mb-2">
    <div
      className="feature-check bg-success rounded-circle me-2"
      style={{ width: "8px", height: "8px", marginTop: "6px" }}
    ></div>
    <span>{text}</span>
  </div>
);

const PricingCard = ({
  type,
  icon,
  sessions,
  duration,
  price,
  features,
  onContact,
}) => {
  const renderIcon = () => {
    switch (icon) {
      case "star":
        return <Star className="card-icon mb-2 text-primary" size={24} />;
      case "message":
        return (
          <MessageCircle className="card-icon mb-2 text-success" size={24} />
        );
      case "chart":
        return <BarChart3 className="card-icon mb-2 text-danger" size={24} />;
      default:
        return <Star className="card-icon mb-2" size={24} />;
    }
  };

  return (
    <div className="pricing-cards p-4 rounded shadow-sm h-100 d-flex flex-column justify-content-between">
      <div className="card-header text-center mb-3">
        {renderIcon()}
        <h2 className="card-type h5 fw-bold">{type}</h2>
        <p className="card-sessions text-muted">
          {sessions} over {duration}
        </p>
        <h1 className="card-price h3 mt-2">USD ${price}</h1>
      </div>

      <div className="card-features mb-3">
        {features.map((feature, index) => (
          <FeatureItem key={index} text={feature} />
        ))}
      </div>

      <button className="btn btn-dark w-100" onClick={() => onContact(type)}>
        Contact Us <span className="ms-2">→</span>
      </button>
    </div>
  );
};

const PricingCards = () => {
  const [showForm, setShowForm] = useState(false);
  const [selectedPlan, setSelectedPlan] = useState("");

  const handleContactClick = (plan) => {
    setSelectedPlan(plan);
    setShowForm(true);
  };

  const cardsData = [
    {
      type: "Starter",
      icon: "star",
      sessions: "3 sessions",
      duration: "3 months",
      price: "749.50",
      features: [
        "Fundamental concepts",
        "Basic trading strategies",
        "Market structure",
        "Essential tools",
        "Hands-on exercises",
      ],
    },
    {
      type: "Intermediate",
      icon: "message",
      sessions: "10 sessions",
      duration: "6 months",
      price: "2,450",
      features: [
        "Advanced strategies",
        "Risk management",
        "Technical analysis",
        "Portfolio optimization",
        "Market psychology",
      ],
    },
    {
      type: "Advanced",
      icon: "chart",
      sessions: "25 sessions",
      duration: "12 months",
      price: "7,000",
      features: [
        "Complex strategies",
        "Institutional techniques",
        "Algorithmic trading",
        "Volatility analysis",
        "Professional mentorship",
      ],
    },
  ];

  return (
    <div className="container">
      <div className="row">
        {cardsData.map((card, index) => (
          <div className="col-lg-4 mb-4" key={index}>
            <PricingCard {...card} onContact={handleContactClick} />
          </div>
        ))}
      </div>

      {showForm && (
        <SalesContactForm
          inquiryType={selectedPlan}
          onClose={() => setShowForm(false)}
        />
      )}
    </div>
  );
};

export default PricingCards;
