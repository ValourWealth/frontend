import { useState } from "react";
import "../../styles/platinumDashboard.css";

const CreditRequestPopup = ({ show, onClose }) => {
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [credits, setCredits] = useState("");
  const [message, setMessage] = useState("");
  const accessToken = localStorage.getItem("accessToken");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch(
        `${process.env.REACT_APP_API_URL}api/request-call-credits/`,
        {
          method: "POST",
          headers: {
            Authorization: `Bearer ${accessToken}`,
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ email, phone, credits }),
        }
      );
      const result = await res.json();
      setMessage(result.message || result.error);
      if (res.ok) {
        setEmail("");
        setPhone("");
        setCredits("");
      }
    } catch (err) {
      setMessage("Submission failed.");
    }
  };

  if (!show) return null;

  return (
    <div className="overlay">
      <div className="popup">
        <h4>Request More Call Credits</h4>
        <form onSubmit={handleSubmit}>
          <input
            type="number"
            placeholder="Credits (e.g. 10, 20, 30)"
            value={credits}
            onChange={(e) => setCredits(e.target.value)}
            required
            className="input"
          />
          <input
            type="email"
            placeholder="Your Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="input"
          />
          <input
            type="tel"
            placeholder="Phone Number"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            required
            className="input"
          />
          <button type="submit" className="button">
            Submit
          </button>
        </form>
        {message && <p className="mt-2">{message}</p>}
        <button className="button close" onClick={onClose}>
          Close
        </button>
      </div>
    </div>
  );
};

export default CreditRequestPopup;
