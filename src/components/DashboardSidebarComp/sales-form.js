// // SalesContactForm.jsx
// import React, { useState } from "react";
// import "./styles/sales-form.css";

// function SalesContactForm({ onClose }) {
//   const [formData, setFormData] = useState({
//     name: "",
//     email: "",
//     phone: "",
//   });

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData((prev) => ({ ...prev, [name]: value }));
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     console.log("Form submitted:", formData);
//     onClose(); // close after submission
//   };

//   return (
//     <div className="modal-overlay">
//       <div className="modal-content">
//         <h2 className="sales-form-title">Sales Contact Form</h2>
//         <p className="sales-form-subtitle">
//           Thank you for expressing interest. Fill in your contact details and
//           our sales executive will get in touch shortly.
//         </p>

//         <form onSubmit={handleSubmit}>
//           <div className="form-group">
//             <label>Name</label>
//             <input
//               type="text"
//               name="name"
//               placeholder="Enter Name"
//               value={formData.name}
//               onChange={handleChange}
//               required
//             />
//           </div>

//           <div className="form-group">
//             <label>Email Address</label>
//             <input
//               type="email"
//               name="email"
//               placeholder="youremail@gmail.com"
//               value={formData.email}
//               onChange={handleChange}
//               required
//             />
//           </div>

//           <div className="form-group">
//             <label>Phone Number</label>
//             <div className="phone-input-container">
//               <span className="phone-prefix">+1</span>
//               <input
//                 type="tel"
//                 name="phone"
//                 value={formData.phone}
//                 onChange={handleChange}
//                 required
//               />
//             </div>
//           </div>

//           <div className="form-actions">
//             <button type="submit" className="btn-submit">
//               Submit
//             </button>
//             <button type="button" className="btn-cancel" onClick={onClose}>
//               Cancel
//             </button>
//           </div>
//         </form>
//       </div>
//     </div>
//   );
// }

// export default SalesContactForm;

import { useState } from "react";
import "./styles/sales-form.css";

function SalesContactForm({ onClose, inquiryType }) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
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
        `${process.env.REACT_APP_API_URL}api/sales-inquiry/`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(payload),
        }
      );

      if (response.ok) {
        alert("Form submitted successfully!");
        onClose();
      } else {
        alert("Submission failed!");
      }
    } catch (error) {
      console.error("Error:", error);
      alert("Error submitting form");
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
          Inquiry Type: <strong>{inquiryType}</strong>
        </p>

        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label>Name</label>
            <input
              type="text"
              name="name"
              placeholder="Enter Name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group">
            <label>Email Address</label>
            <input
              type="email"
              name="email"
              placeholder="youremail@gmail.com"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group">
            <label>Phone Number</label>
            <input
              type="tel"
              name="phone"
              placeholder="+1 555-123456"
              value={formData.phone}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group">
            <label>Subject</label>
            <input
              type="text"
              name="subject"
              placeholder="Enter Subject"
              value={formData.subject}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group">
            <label>Message</label>
            <textarea
              name="message"
              placeholder="Enter your message here..."
              value={formData.message}
              onChange={handleChange}
              required
            ></textarea>
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
