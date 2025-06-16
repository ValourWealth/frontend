import { useState } from "react";
import "./styles/sales-form.css";

function SalesContactForm({ onClose, inquiryType }) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const payload = {
      ...formData,
      inquiry_type: inquiryType,
    };

    try {
      const response = await fetch(
        `${process.env.REACT_APP_API_URL}api/training-inquiry/`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(payload),
        }
      );

      if (response.ok) {
        alert("Inquiry sent!");
        onClose();
      } else {
        alert("Submission failed");
      }
    } catch (error) {
      alert("Error submitting form");
      console.error(error);
    }
  };

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <h1 className="sales-form-title">Sales Contact Form</h1>
        <h3>
          Thanks for your interest! Please share your contact details below, and
          one of our sales representatives will reach out to you soon.
        </h3>
        <p className="sales-form-subtitle">
          Plan Selected: <strong>{inquiryType}</strong>
        </p>

        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label>Name</label>
            <input
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group">
            <label>Email</label>
            <input
              name="email"
              type="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group">
            <label>Phone</label>
            <input
              name="phone"
              type="tel"
              value={formData.phone}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-actions">
            <button type="submit" className="btn-submit">
              Submit
            </button>
            <button
              type="button"
              className="btn-cancel button close"
              onClick={onClose}
            >
              Cancel
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default SalesContactForm;
