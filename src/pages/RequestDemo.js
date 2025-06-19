// import axios from "axios";
// import { useState } from "react";

// function RequestDemo() {
//   const [formData, setFormData] = useState({
//     firstName: "",
//     lastName: "",
//     email: "",
//     phone: "",
//     date: "",
//     allowUpdates: false, // new field
//   });

//   const [isSubmitted, setIsSubmitted] = useState(false);
//   const [error, setError] = useState(null);

//   const handleChange = (e) => {
//     const { name, type, checked, value } = e.target;
//     setFormData({
//       ...formData,
//       [name]: type === "checkbox" ? checked : value,
//     });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setError(null);

//     try {
//       const response = await axios.post(
//         `${process.env.REACT_APP_API_URL}api/request-demo/`,
//         formData
//       );

//       if (response.status === 200) {
//         setIsSubmitted(true);
//         setFormData({
//           firstName: "",
//           lastName: "",
//           email: "",
//           phone: "",
//           date: "",
//           allowUpdates: false,
//         });
//       } else {
//         setError("An unexpected error occurred. Please try again.");
//       }
//     } catch (error) {
//       console.error("API Error:", error);
//       setError(
//         error.response?.data?.error ||
//           "Failed to submit. Please check your details and try again."
//       );
//     }
//   };

//   return (
//     <div className="container mt-5">
//       <div className="col-lg-8 mx-auto">
//         <div className="form-card shadow-lg p-4 rounded">
//           {isSubmitted ? (
//             <div className="text-center submission-message">
//               <h2>Thank you!</h2>
//               <p>Your submission has been received.</p>
//               <p>
//                 We will be in touch with you shortly regarding your demo
//                 request.
//               </p>
//             </div>
//           ) : (
//             <>
//               <h2 className="text-center">Interested in Learning More?</h2>
//               <p className="text-center text-white">
//                 Submit your details and our team will reach out for a
//                 personalized demonstration.
//               </p>

//               {error && <p className="text-danger text-center">{error}</p>}

//               <form onSubmit={handleSubmit} className="row g-3">
//                 <div className="col-md-6">
//                   <label className="form-label">First Name</label>
//                   <input
//                     type="text"
//                     name="firstName"
//                     className="form-input"
//                     required
//                     value={formData.firstName}
//                     onChange={handleChange}
//                     placeholder="Enter First Name"
//                   />
//                 </div>

//                 <div className="col-md-6">
//                   <label className="form-label">Last Name</label>
//                   <input
//                     type="text"
//                     name="lastName"
//                     className="form-input"
//                     required
//                     value={formData.lastName}
//                     onChange={handleChange}
//                     placeholder="Enter Last Name"
//                   />
//                 </div>

//                 <div className="col-md-12">
//                   <label className="form-label">Email Address</label>
//                   <input
//                     type="email"
//                     name="email"
//                     className="form-input"
//                     required
//                     value={formData.email}
//                     onChange={handleChange}
//                     placeholder="Enter Email"
//                   />
//                 </div>

//                 <div className="col-md-6">
//                   <label className="form-label">Phone Number</label>
//                   <input
//                     type="tel"
//                     name="phone"
//                     className="form-input"
//                     required
//                     value={formData.phone}
//                     onChange={handleChange}
//                     placeholder="(201) 555-0123"
//                   />
//                 </div>

//                 <div className="col-md-6">
//                   <label className="form-label">Preferred Date</label>
//                   <input
//                     type="date"
//                     name="date"
//                     className="form-input"
//                     required
//                     value={formData.date}
//                     onChange={handleChange}
//                   />
//                 </div>

//                 <div className="col-md-12 d-flex align-items-center">
//                   <input
//                     className="form-check-input me-2"
//                     type="checkbox"
//                     id="allowUpdates"
//                     name="allowUpdates"
//                     checked={formData.allowUpdates}
//                     onChange={handleChange}
//                   />
//                   <label
//                     htmlFor="allowUpdates"
//                     className="form-check-label text-white"
//                   >
//                     Allow Valour Wealth to Send You Latest Updates.
//                   </label>
//                 </div>

//                 <div className="col-12 text-center">
//                   <button type="submit" className="theme_btn">
//                     Submit
//                   </button>
//                 </div>
//               </form>
//             </>
//           )}
//         </div>
//       </div>
//     </div>
//   );
// }

// export default RequestDemo;

import axios from "axios";
import { useState } from "react";

export default function DemoContactForm() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    date: "",
    allowUpdates: false, // backend field name
  });

  const [isSubmitted, setIsSubmitted] = useState(false);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (e) => {
    const { name, type, checked, value } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(null);
    setIsLoading(true);

    try {
      const response = await axios.post(
        `${process.env.REACT_APP_API_URL}api/request-demo/`,
        formData
      );

      if (response.status === 200) {
        setIsSubmitted(true);
        setFormData({
          firstName: "",
          lastName: "",
          email: "",
          phone: "",
          date: "",
          allowUpdates: false,
        });
      } else {
        setError("An unexpected error occurred. Please try again.");
      }
    } catch (error) {
      console.error("API Error:", error);
      setError(
        error.response?.data?.error ||
          "Failed to submit. Please check your details and try again."
      );
    }
    setIsLoading(false);
  };

  return (
    <>
      {/* Bootstrap 5 CSS */}
      <link
        href="https://cdnjs.cloudflare.com/ajax/libs/bootstrap/5.3.0/css/bootstrap.min.css"
        rel="stylesheet"
      />

      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap');
        
        * {
          font-family: 'Inter', sans-serif;
        }
        
        .demo-section {
          background: #000000;
          background-image: 
            radial-gradient(at 40% 20%, rgba(34, 197, 94, 0.1) 0px, transparent 50%),
            radial-gradient(at 80% 0%, rgba(34, 197, 94, 0.05) 0px, transparent 50%),
            radial-gradient(at 0% 50%, rgba(34, 197, 94, 0.05) 0px, transparent 50%);
          min-height: 100vh;
          display: flex;
          align-items: center;
          position: relative;
          overflow: hidden;
        }
        
        .demo-section::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          z-index: 1;
          background: linear-gradient(135deg, #040805 0%, #38a739 100%);
        }
        
        .content-wrapper {
          position: relative;
          z-index: 2;
        }
        
        .main-heading {
          font-size: clamp(2.5rem, 5vw, 4rem);
          font-weight: 800;
          color: white;
          text-align: center;
          margin-bottom: 1.5rem;
          letter-spacing: -0.02em;
          text-shadow: 0 2px 4px rgba(0, 0, 0, 0.3);
        }
        
        .subtitle {
          font-size: 1.25rem;
          color: rgba(255, 255, 255, 0.85);
          text-align: center;
          margin-bottom: 3rem;
          font-weight: 400;
          line-height: 1.6;
        }
        
        .form-container {
          max-width: 800px;
          margin: 0 auto;
          background: rgba(255, 255, 255, 0.98);
          border-radius: 20px;
          padding: 3rem;
          box-shadow: 
            0 25px 50px rgba(0, 0, 0, 0.3),
            0 0 0 1px rgba(255, 255, 255, 0.1);
          backdrop-filter: blur(20px);
          border: 1px solid rgba(255, 255, 255, 0.1);
        }
        
        .form-label {
          font-weight: 600;
          color: #374151;
          margin-bottom: 8px;
          font-size: 15px;
        }
        
        .form-control {
          border: 2px solid #e5e7eb;
          border-radius: 12px;
          padding: 16px 20px;
          font-size: 16px;
          font-weight: 500;
          color: #374151;
          background: white;
          transition: all 0.3s ease;
          box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
        }
        
        .form-control:focus {
          border-color: #22C55E;
          box-shadow: 
            0 0 0 4px rgba(34, 197, 94, 0.1),
            0 4px 8px rgba(0, 0, 0, 0.1);
          transform: translateY(-1px);
          background: #fafafa;
          outline: none;
        }
        
        .form-control::placeholder {
          color: #9ca3af;
          font-weight: 400;
        }
        
        .checkbox-wrapper {
          display: flex;
          align-items: center;
          gap: 12px;
          margin: 2rem 0;
        }
        
        .custom-checkbox {
          width: 24px;
          height: 24px;
          border: 2px solid #d1d5db;
          border-radius: 6px;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          transition: all 0.3s ease;
          background: white;
          box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
        }
        
        .custom-checkbox:hover {
          border-color: #22C55E;
          transform: scale(1.05);
        }
        
        .custom-checkbox.checked {
          background: linear-gradient(135deg, #22C55E, #16A34A);
          border-color: #22C55E;
          transform: scale(1.1);
        }
        
        .custom-checkbox.checked::after {
          content: "✓";
          color: white;
          font-size: 14px;
          font-weight: bold;
        }
        
        .checkbox-label {
          color: #374151;
          font-size: 16px;
          font-weight: 500;
          cursor: pointer;
          user-select: none;
          line-height: 1.5;
        }
        
        .submit-btn {
          background: linear-gradient(135deg, #22C55E, #16A34A);
          border: none;
          color: white;
          padding: 18px 40px;
          font-size: 18px;
          font-weight: 700;
          border-radius: 12px;
          cursor: pointer;
          transition: all 0.3s ease;
          letter-spacing: 0.5px;
          box-shadow: 
            0 8px 20px rgba(34, 197, 94, 0.3),
            0 2px 4px rgba(0, 0, 0, 0.1);
          position: relative;
          overflow: hidden;
        }
        
        .submit-btn::before {
          content: '';
          position: absolute;
          top: 0;
          left: -100%;
          width: 100%;
          height: 100%;
          background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.2), transparent);
          transition: left 0.5s ease;
        }
        
        .submit-btn:hover:not(:disabled) {
          background: linear-gradient(135deg, #16A34A, #15803D);
          transform: translateY(-2px);
          box-shadow: 
            0 12px 28px rgba(34, 197, 94, 0.4),
            0 4px 8px rgba(0, 0, 0, 0.15);
        }
        
        .submit-btn:hover::before {
          left: 100%;
        }
        
        .submit-btn:disabled {
          opacity: 0.7;
          cursor: not-allowed;
          transform: none;
        }
        
        .spinner {
          width: 20px;
          height: 20px;
          border: 2px solid rgba(255, 255, 255, 0.3);
          border-radius: 50%;
          border-top-color: white;
          animation: spin 1s ease-in-out infinite;
          display: inline-block;
          margin-right: 8px;
        }
        
        @keyframes spin {
          to { transform: rotate(360deg); }
        }
        
        .success-message {
          text-align: center;
          padding: 3rem 2rem;
        }
        
        .success-icon {
          width: 80px;
          height: 80px;
          background: linear-gradient(135deg, #22C55E, #16A34A);
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          margin: 0 auto 2rem;
          animation: successPulse 1.5s ease-in-out;
        }
        
        @keyframes successPulse {
          0% { transform: scale(0.8); opacity: 0; }
          50% { transform: scale(1.1); }
          100% { transform: scale(1); opacity: 1; }
        }
        
        .success-title {
          font-size: 2.5rem;
          font-weight: 700;
          color: #374151;
          margin-bottom: 1rem;
        }
        
        .success-text {
          font-size: 1.1rem;
          color: #6b7280;
          line-height: 1.6;
          margin-bottom: 0.5rem;
        }
        
        .error-message {
          background: rgba(239, 68, 68, 0.1);
          color: #dc2626;
          border: 2px solid rgba(239, 68, 68, 0.2);
          padding: 16px 20px;
          border-radius: 12px;
          font-weight: 500;
          text-align: center;
          margin-bottom: 1.5rem;
        }
        
        .brand-highlight {
          background: linear-gradient(135deg, #22C55E, #16A34A);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }
        
        @media (max-width: 768px) {
          .demo-section {
            min-height: auto;
            padding: 2rem 0;
          }
          
          .main-heading {
            margin-bottom: 1rem;
          }
          
          .subtitle {
            margin-bottom: 2rem;
            padding: 0 1rem;
          }
          
          .form-container {
            margin: 0 1rem;
            padding: 2rem;
            border-radius: 16px;
          }
          
          .checkbox-wrapper {
            flex-direction: column;
            align-items: flex-start;
            gap: 8px;
          }
          
          .checkbox-label {
            font-size: 14px;
          }
          
          .submit-btn {
            width: 100%;
            padding: 16px 32px;
            font-size: 16px;
          }
          
          .success-message {
            padding: 2rem 1rem;
          }
          
          .success-title {
            font-size: 2rem;
          }
        }
      `}</style>

      <section className="demo-section py-5">
        <div className="container content-wrapper">
          <div className="row">
            <div className="col-12">
              {/* Header */}
              <h1 className="main-heading">
                Interested in{" "}
                <span className="brand-highlight">Learning More?</span>
              </h1>

              <p className="subtitle">
                Submit your details and our team will reach out for a
                personalized demonstration.
              </p>

              {/* Form Container */}
              <div className="form-container">
                {isSubmitted ? (
                  // Success Message
                  <div className="success-message">
                    <div className="success-icon">
                      <svg
                        width="40"
                        height="40"
                        fill="white"
                        viewBox="0 0 24 24"
                      >
                        <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                    <h2 className="success-title">Thank you!</h2>
                    <p className="success-text">
                      Your submission has been received.
                    </p>
                    <p className="success-text">
                      We will be in touch with you shortly regarding your demo
                      request.
                    </p>
                  </div>
                ) : (
                  // Form
                  <>
                    {error && <div className="error-message">{error}</div>}

                    <form onSubmit={handleSubmit}>
                      <div className="row g-4">
                        {/* First Name & Last Name */}
                        <div className="col-md-6">
                          <label htmlFor="firstName" className="form-label">
                            First Name
                          </label>
                          <input
                            type="text"
                            className="form-control"
                            id="firstName"
                            name="firstName"
                            placeholder="Enter First Name"
                            value={formData.firstName}
                            onChange={handleChange}
                            required
                          />
                        </div>
                        <div className="col-md-6">
                          <label htmlFor="lastName" className="form-label">
                            Last Name
                          </label>
                          <input
                            type="text"
                            className="form-control"
                            id="lastName"
                            name="lastName"
                            placeholder="Enter Last Name"
                            value={formData.lastName}
                            onChange={handleChange}
                            required
                          />
                        </div>

                        {/* Email Address */}
                        <div className="col-12">
                          <label htmlFor="email" className="form-label">
                            Email Address
                          </label>
                          <input
                            type="email"
                            className="form-control"
                            id="email"
                            name="email"
                            placeholder="Enter Email"
                            value={formData.email}
                            onChange={handleChange}
                            required
                          />
                        </div>

                        {/* Phone Number & Preferred Date */}
                        <div className="col-md-6">
                          <label htmlFor="phone" className="form-label">
                            Phone Number
                          </label>
                          <input
                            type="tel"
                            className="form-control"
                            id="phone"
                            name="phone"
                            placeholder="(201) 555-0123"
                            value={formData.phone}
                            onChange={handleChange}
                            required
                          />
                        </div>
                        <div className="col-md-6">
                          <label htmlFor="date" className="form-label">
                            Preferred Date
                          </label>
                          <input
                            type="date"
                            className="form-control"
                            id="date"
                            name="date"
                            value={formData.date}
                            onChange={handleChange}
                            required
                          />
                        </div>

                        {/* Checkbox */}
                        <div className="col-12">
                          <div className="checkbox-wrapper">
                            <div
                              className={`custom-checkbox ${
                                formData.allowUpdates ? "checked" : ""
                              }`}
                              onClick={() =>
                                setFormData((prev) => ({
                                  ...prev,
                                  allowUpdates: !prev.allowUpdates,
                                }))
                              }
                            ></div>
                            <label
                              className="checkbox-label"
                              onClick={() =>
                                setFormData((prev) => ({
                                  ...prev,
                                  allowUpdates: !prev.allowUpdates,
                                }))
                              }
                            >
                              Allow Valour Wealth to Send You Latest Updates.
                            </label>
                          </div>
                        </div>

                        {/* Submit Button */}
                        <div className="col-12 text-center">
                          <button
                            type="submit"
                            className="submit-btn"
                            disabled={isLoading}
                          >
                            {isLoading ? (
                              <>
                                <div className="spinner"></div>
                                Submitting...
                              </>
                            ) : (
                              "Submit"
                            )}
                          </button>
                        </div>
                      </div>
                    </form>
                  </>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      <script src="https://cdnjs.cloudflare.com/ajax/libs/bootstrap/5.3.0/js/bootstrap.bundle.min.js"></script>
    </>
  );
}
