// import axios from "axios";
// import { useState } from "react";
// import "react-toastify/dist/ReactToastify.css";

// const Contact = () => {
//   const [formData, setFormData] = useState({
//     firstName: "",
//     lastName: "",
//     email: "",
//     phone: "",
//     message: "",
//     agree: false,
//   });

//   const [isSubmitted, setIsSubmitted] = useState(false);
//   const [error, setError] = useState(null);

//   const handleChange = (e) => {
//     const { name, value, type, checked } = e.target;
//     setFormData({ ...formData, [name]: type === "checkbox" ? checked : value });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setError(null);

//     if (!formData.agree) {
//       setError("You must agree to the terms and privacy policy.");
//       return;
//     }

//     try {
//       const response = await axios.post(
//         `${process.env.REACT_APP_API_URL}api/contact-us/`,
//         formData
//       );

//       if (response.status === 200) {
//         setIsSubmitted(true);
//         setFormData({
//           firstName: "",
//           lastName: "",
//           email: "",
//           phone: "",
//           message: "",
//           agree: false,
//         });
//       }
//     } catch (error) {
//       setError("Failed to send message. Please try again.");
//       console.error("API Error:", error);
//     }
//   };

//   return (
//     <div className="container my-5">
//       <div className="row shadow-lg rounded">
//         {/* Left Section */}
//         <div className="col-lg-5 d-flex flex-column justify-content-center p-0">
//           <div className="left-contact-sec">
//             <h1 className="mb-3">Get in Touch</h1>
//             <p className="mb-2">
//               Have any questions? Feel free to reach out to us!
//             </p>
//             <p className="mb-2">
//               <a
//                 className="text-white text-decoration-none"
//                 href="mailto:contact@valourwealth.com"
//               >
//                 <strong>Email:</strong> contact@valourwealth.com
//               </a>
//             </p>
//             <p>
//               <a
//                 className="text-white text-decoration-none"
//                 href="tel:+1 414 485 8800"
//               >
//                 <strong>Phone:</strong> +1 414 485 8800
//               </a>
//             </p>
//           </div>
//         </div>

//         {/* Contact Form */}
//         <div className="col-lg-7 bg-white p-5">
//           <h2>Contact Us</h2>
//           <p className="text-muted">We'd love to hear from you!</p>

//           {isSubmitted ? (
//             <div className="text-center submission-message">
//               <h3>Thank you!</h3>
//               <p>Your message has been received.</p>
//             </div>
//           ) : (
//             <form onSubmit={handleSubmit} className="row g-3">
//               {error && <p className="text-danger">{error}</p>}

//               <div className="col-md-6">
//                 <input
//                   type="text"
//                   name="firstName"
//                   className="form-input"
//                   placeholder="First name"
//                   required
//                   value={formData.firstName}
//                   onChange={handleChange}
//                 />
//               </div>

//               <div className="col-md-6">
//                 <input
//                   type="text"
//                   name="lastName"
//                   className="form-input"
//                   placeholder="Last name"
//                   required
//                   value={formData.lastName}
//                   onChange={handleChange}
//                 />
//               </div>

//               <div className="col-md-12">
//                 <input
//                   type="email"
//                   name="email"
//                   className="form-input"
//                   placeholder="Enter your email"
//                   required
//                   value={formData.email}
//                   onChange={handleChange}
//                 />
//               </div>

//               <div className="col-md-12">
//                 <input
//                   type="tel"
//                   name="phone"
//                   className="form-input"
//                   placeholder="Enter your phone number"
//                   required
//                   value={formData.phone}
//                   onChange={handleChange}
//                 />
//               </div>

//               <div className="col-md-12">
//                 <textarea
//                   name="message"
//                   className="form-input"
//                   rows="4"
//                   placeholder="Message"
//                   required
//                   value={formData.message}
//                   onChange={handleChange}
//                 ></textarea>
//               </div>

//               <div className="col-12">
//                 <div className="form-check">
//                   <input
//                     className="form-check-input"
//                     type="checkbox"
//                     name="agree"
//                     id="agree"
//                     checked={formData.agree}
//                     onChange={handleChange}
//                   />
//                   <label className="form-check-label text-dark" htmlFor="agree">
//                     Allow Valour Wealth to Send You Latest Updates.
//                   </label>
//                 </div>
//               </div>

//               <div className="col-12 text-center">
//                 <button
//                   type="submit"
//                   className="justify-content-center w-100 rounded-pill text-white theme_btn"
//                 >
//                   Send Message
//                 </button>
//               </div>
//             </form>
//           )}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Contact;
import axios from "axios";
import { useState } from "react";
import "react-toastify/dist/ReactToastify.css";

export default function ContactUsPage() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    message: "",
    agree: false, // backend field name
  });

  const [isSubmitted, setIsSubmitted] = useState(false);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({ ...formData, [name]: type === "checkbox" ? checked : value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(null);
    setIsLoading(true);

    if (!formData.agree) {
      setError("You must agree to the terms and privacy policy.");
      setIsLoading(false);
      return;
    }

    try {
      const response = await axios.post(
        `${process.env.REACT_APP_API_URL}api/contact-us/`,
        formData
      );

      if (response.status === 200) {
        setIsSubmitted(true);
        setFormData({
          firstName: "",
          lastName: "",
          email: "",
          phone: "",
          message: "",
          agree: false,
        });
      }
    } catch (error) {
      setError("Failed to send message. Please try again.");
      console.error("API Error:", error);
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
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap');
        
        * {
          font-family: 'Inter', sans-serif;
        }
        
        .main-bg {
          background: linear-gradient(135deg, #f8fafc 0%, #e2e8f0 100%);
          min-height: 100vh;
        }
        
        .hero-section {
          background: linear-gradient(135deg, #1A8F2B 0%, #22C55E 100%);
          border-radius: 0 0 50px 50px;
          position: relative;
          overflow: hidden;
        }
        
        .hero-section::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E") repeat;
        }
        
        .main-card {
          background: white;
          border-radius: 24px;
          box-shadow: 
            0 20px 25px -5px rgba(0, 0, 0, 0.1),
            0 10px 10px -5px rgba(0, 0, 0, 0.04);
          border: 1px solid rgba(255, 255, 255, 0.2);
          transition: all 0.3s ease;
          margin-top: -100px;
          position: relative;
          z-index: 10;
        }
        
        .hero-icon {
          width: 80px;
          height: 80px;
          background: linear-gradient(135deg, #22C55E, #1A8F2B);
          border-radius: 24px;
          display: flex;
          align-items: center;
          justify-content: center;
          margin: 0 auto 1rem;
          box-shadow: 0 10px 25px rgba(26, 143, 43, 0.3);
          transition: transform 0.3s ease;
        }
        
        .hero-icon:hover {
          transform: translateY(-5px);
        }
        
        .form-control {
          border: 2px solid #e2e8f0;
          border-radius: 12px;
          padding: 14px 18px;
          font-size: 16px;
          font-weight: 500;
          transition: all 0.3s ease;
          background: #f8fafc;
        }
        
        .form-control:focus {
          border-color: #1A8F2B;
          box-shadow: 0 0 0 4px rgba(26, 143, 43, 0.1);
          background: white;
          transform: translateY(-1px);
        }
        
        .form-label {
          font-weight: 600;
          color: #374151;
          margin-bottom: 8px;
        }
        
        .btn-primary {
          background: linear-gradient(135deg, #1A8F2B, #22C55E);
          border: none;
          border-radius: 14px;
          padding: 16px 32px;
          font-weight: 600;
          font-size: 16px;
          letter-spacing: 0.5px;
          transition: all 0.3s ease;
          box-shadow: 0 8px 20px rgba(26, 143, 43, 0.3);
          position: relative;
          overflow: hidden;
        }
        
        .btn-primary:hover:not(:disabled) {
          transform: translateY(-3px);
          box-shadow: 0 12px 28px rgba(26, 143, 43, 0.4);
          background: linear-gradient(135deg, #156B21, #16A34A);
        }
        
        .btn-primary:disabled {
          opacity: 0.7;
          cursor: not-allowed;
        }
        
        .contact-card {
          background: linear-gradient(135deg, #f8fafc, #e2e8f0);
          border: 1px solid #e2e8f0;
          border-radius: 20px;
          padding: 24px;
          transition: all 0.3s ease;
          height: 100%;
        }
        
        .contact-card:hover {
          transform: translateY(-8px);
          box-shadow: 0 20px 40px rgba(0, 0, 0, 0.1);
          background: linear-gradient(135deg, #ffffff, #f1f5f9);
        }
        
        .contact-icon {
          width: 60px;
          height: 60px;
          background: linear-gradient(135deg, #1A8F2B, #22C55E);
          border-radius: 16px;
          display: flex;
          align-items: center;
          justify-content: center;
          margin-bottom: 16px;
          transition: all 0.3s ease;
        }
        
        .contact-card:hover .contact-icon {
          transform: scale(1.1) rotate(5deg);
        }
        
        .section-title {
          background: linear-gradient(135deg, #1A8F2B, #22C55E);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          font-weight: 700;
        }
          .contact-title::after {
          left: 44px;
          }
        
        .form-check-input:checked {
          background-color: #1A8F2B;
          border-color: #1A8F2B;
          transform: scale(1.1);
        }
        
        .form-check-input:focus {
          box-shadow: 0 0 0 0.25rem rgba(26, 143, 43, 0.25);
        }
        
        .feature-badge {
          background: linear-gradient(135deg, #dcfce7, #bbf7d0);
          color: #166534;
          border: 1px solid #22c55e;
          border-radius: 50px;
          padding: 8px 16px;
          font-size: 14px;
          font-weight: 600;
          display: inline-flex;
          align-items: center;
          gap: 8px;
        }
        
        .divider {
          height: 2px;
          background: linear-gradient(90deg, transparent, #1A8F2B 50%, transparent);
          margin: 2rem 0;
          border-radius: 2px;
        }
        
        .success-message {
          text-align: center;
          padding: 3rem 2rem;
        }
        
        .success-icon {
          width: 80px;
          height: 80px;
          background: linear-gradient(135deg, #22C55E, #1A8F2B);
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          margin: 0 auto 1.5rem;
          animation: successPulse 1.5s ease-in-out;
        }
        
        @keyframes successPulse {
          0% { transform: scale(0.8); opacity: 0; }
          50% { transform: scale(1.1); }
          100% { transform: scale(1); opacity: 1; }
        }
        
        .error-alert {
          background: linear-gradient(135deg, #fef2f2, #fee2e2);
          border: 1px solid #fca5a5;
          color: #dc2626;
          border-radius: 12px;
          padding: 12px 16px;
          margin-bottom: 1rem;
          font-weight: 500;
        }
        
        .spinner {
          width: 20px;
          height: 20px;
          border: 2px solid rgba(255, 255, 255, 0.3);
          border-radius: 50%;
          border-top-color: white;
          animation: spin 1s ease-in-out infinite;
        }
        
        @keyframes spin {
          to { transform: rotate(360deg); }
        }
        
        @media (max-width: 768px) {
          .main-card {
            margin-top: -50px;
            border-radius: 16px;
          }
          
          .hero-section {
            border-radius: 0 0 30px 30px;
          }
          
          .hero-icon {
            width: 60px;
            height: 60px;
          }
        }
      `}</style>

      <div className="main-bg">
        {/* Hero Section */}
        <div className="hero-section py-5">
          <div className="container text-center position-relative">
            <div className="hero-icon">
              <svg width="40" height="40" fill="white" viewBox="0 0 24 24">
                <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" />
              </svg>
            </div>
            <h1 className="display-4 fw-bold text-white mb-3">Get in Touch</h1>
            <p className="lead text-white opacity-90 mb-4">
              Have any questions? Feel free to reach out to us!
            </p>
            <div className="feature-badge">
              <svg
                width="16"
                height="16"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              24/7 Support Available
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div className="container pb-5">
          <div className="row justify-content-center">
            <div className="col-12 col-xl-10">
              <div className="main-card p-4 p-lg-5">
                <div className="row g-5">
                  {/* Contact Form */}
                  <div className="col-lg-8">
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
                        <h2 className="section-title h2 mb-3">Thank You!</h2>
                        <p className="text-muted fs-5 mb-4">
                          Your message has been received. We'll get back to you
                          soon!
                        </p>
                        <button
                          onClick={() => {
                            setIsSubmitted(false);
                            setError(null);
                          }}
                          className="btn btn-primary"
                        >
                          Send Another Message
                        </button>
                      </div>
                    ) : (
                      // Contact Form
                      <>
                        <h2 className="section-title h3 mb-4 contact-title">
                          Contact Us
                        </h2>
                        <p className="text-muted mb-4">
                          We'd love to hear from you!
                        </p>

                        {error && (
                          <div className="error-alert">
                            <svg
                              width="16"
                              height="16"
                              fill="currentColor"
                              viewBox="0 0 24 24"
                              className="me-2"
                            >
                              <path d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                            </svg>
                            {error}
                          </div>
                        )}

                        <div className="row g-4">
                          {/* First & Last Name */}
                          <div className="col-12">
                            <div className="row g-3">
                              <div className="col-md-6">
                                <label
                                  htmlFor="firstName"
                                  className="form-label"
                                >
                                  First Name *
                                </label>
                                <input
                                  type="text"
                                  className="form-control"
                                  id="firstName"
                                  name="firstName"
                                  placeholder="First name"
                                  value={formData.firstName}
                                  onChange={handleChange}
                                  required
                                />
                              </div>
                              <div className="col-md-6">
                                <label
                                  htmlFor="lastName"
                                  className="form-label"
                                >
                                  Last Name *
                                </label>
                                <input
                                  type="text"
                                  className="form-control"
                                  id="lastName"
                                  name="lastName"
                                  placeholder="Last name"
                                  value={formData.lastName}
                                  onChange={handleChange}
                                  required
                                />
                              </div>
                            </div>
                          </div>

                          {/* Email */}
                          <div className="col-12">
                            <label htmlFor="email" className="form-label">
                              Email Address *
                            </label>
                            <input
                              type="email"
                              className="form-control"
                              id="email"
                              name="email"
                              placeholder="Enter your email"
                              value={formData.email}
                              onChange={handleChange}
                              required
                            />
                          </div>

                          {/* Phone */}
                          <div className="col-12">
                            <label htmlFor="phone" className="form-label">
                              Phone Number *
                            </label>
                            <input
                              type="tel"
                              className="form-control"
                              id="phone"
                              name="phone"
                              placeholder="Enter your phone number"
                              value={formData.phone}
                              onChange={handleChange}
                              required
                            />
                          </div>

                          {/* Message */}
                          <div className="col-12">
                            <label htmlFor="message" className="form-label">
                              Message *
                            </label>
                            <textarea
                              className="form-control"
                              id="message"
                              name="message"
                              rows="4"
                              placeholder="Message"
                              value={formData.message}
                              onChange={handleChange}
                              required
                            ></textarea>
                          </div>

                          {/* Checkbox */}
                          <div className="col-12">
                            <div className="form-check d-flex align-items-center gap-3">
                              <input
                                className="form-check-input"
                                type="checkbox"
                                id="agree"
                                name="agree"
                                checked={formData.agree}
                                onChange={handleChange}
                              />
                              <label
                                className="form-check-label text-muted"
                                htmlFor="agree"
                              >
                                Allow Valour Wealth to Send You Latest Updates.
                              </label>
                            </div>
                          </div>

                          {/* Submit Button */}
                          <div className="col-12">
                            <button
                              type="submit"
                              onClick={handleSubmit}
                              disabled={isLoading}
                              className="btn btn-primary btn-lg w-100 w-md-auto px-5"
                            >
                              {isLoading ? (
                                <>
                                  <div className="spinner me-2"></div>
                                  Sending...
                                </>
                              ) : (
                                <>
                                  <svg
                                    width="20"
                                    height="20"
                                    fill="currentColor"
                                    viewBox="0 0 24 24"
                                    className="me-2"
                                  >
                                    <path d="M2.01 21L23 12 2.01 3 2 10l15 2-15 2z" />
                                  </svg>
                                  Send Message
                                </>
                              )}
                            </button>
                          </div>
                        </div>
                      </>
                    )}
                  </div>

                  {/* Contact Information */}
                  <div className="col-lg-4">
                    <h2 className="section-title h3 mb-4">
                      Contact Information
                    </h2>

                    <div className="d-flex flex-column gap-4 h-100">
                      {/* Email Card */}
                      <div className="contact-card">
                        <div className="contact-icon">
                          <svg
                            width="28"
                            height="28"
                            fill="white"
                            viewBox="0 0 24 24"
                          >
                            <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" />
                          </svg>
                        </div>
                        <h5 className="fw-bold mb-2">Email</h5>
                        <a
                          href="mailto:contact@valourwealth.com"
                          className="text-muted text-decoration-none"
                        >
                          contact@valourwealth.com
                        </a>
                      </div>

                      {/* Phone Card */}
                      <div className="contact-card">
                        <div className="contact-icon">
                          <svg
                            width="28"
                            height="28"
                            fill="white"
                            viewBox="0 0 24 24"
                          >
                            <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z" />
                          </svg>
                        </div>
                        <h5 className="fw-bold mb-2">Phone</h5>
                        <a
                          href="tel:+14144858800"
                          className="text-muted text-decoration-none"
                        >
                          +1 414 485 8800
                        </a>
                      </div>

                      {/* Response Time */}
                      <div className="contact-card">
                        <div className="contact-icon">
                          <svg
                            width="28"
                            height="28"
                            fill="white"
                            viewBox="0 0 24 24"
                          >
                            <path d="M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z" />
                            <path d="M12.5 7H11v6l5.25 3.15.75-1.23-4.5-2.67z" />
                          </svg>
                        </div>
                        <h5 className="fw-bold mb-2">Response Time</h5>
                        <p className="text-muted mb-0">
                          Within 24 hours on business days
                        </p>
                      </div>

                      <div className="divider"></div>

                      {/* Privacy Note */}
                      <div
                        className="text-center p-3 rounded-3"
                        style={{
                          background:
                            "linear-gradient(135deg, #f0fdf4, #dcfce7)",
                        }}
                      >
                        <svg
                          width="24"
                          height="24"
                          fill="#22C55E"
                          viewBox="0 0 24 24"
                          className="mb-2"
                        >
                          <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        <p className="small text-muted mb-0">
                          We value your privacy and will never share your
                          information
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <script src="https://cdnjs.cloudflare.com/ajax/libs/bootstrap/5.3.0/js/bootstrap.bundle.min.js"></script>
    </>
  );
}
