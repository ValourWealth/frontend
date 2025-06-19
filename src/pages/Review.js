// import { useState } from "react";

// function Review() {
//   const [email, setEmail] = useState("");
//   const [allowUpdates, setAllowUpdates] = useState(false);
//   const [message, setMessage] = useState("");

//   const handleReviewSubmit = async (e) => {
//     e.preventDefault();

//     const res = await fetch(
//       "https://backend-production-1e63.up.railway.app/api/leave-review/",
//       {
//         method: "POST",
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify({ email, allowUpdates }),
//       }
//     );

//     const result = await res.json();
//     if (res.ok) {
//       setMessage("Review submitted successfully!");
//       setEmail("");
//       setAllowUpdates(false);
//     } else {
//       setMessage(result.error || "Failed to submit review.");
//     }
//   };

//   return (
//     <section className="review-section text-center py-5">
//       <div className="container">
//         <div className="review-container">
//           <h6 className="review-title">
//             OUR MISSION AT VALOUR WEALTH IS TO EMPOWER OVER 100 MILLION TRADERS
//             TO TAKE CONTROL OF THEIR FINANCIAL DESTINY.
//           </h6>
//           <h2 className="fw-bold mt-lg-5 mt-3">
//             Leave Us An Honest Review <span role="img" aria-label="hand"></span>
//           </h2>
//           <p className="text-white mt-2">
//             We want to hear from you how we can improve our service.
//           </p>

//           {/* Subscription Form */}
//           <form
//             className="review-form d-flex justify-content-center"
//             onSubmit={handleReviewSubmit}
//           >
//             <input
//               type="email"
//               className="review-input form-input"
//               placeholder="Enter your email"
//               value={email}
//               onChange={(e) => setEmail(e.target.value)}
//               required
//             />
//             <button className="theme_btn review-btn" type="submit">
//               Subscribe
//             </button>
//           </form>

//           {/* Checkbox */}
//           <div className="form-check mt-3 d-flex justify-content-center">
//             <input
//               className="form-check-input me-2"
//               type="checkbox"
//               id="updatesCheckbox"
//               checked={allowUpdates}
//               onChange={(e) => setAllowUpdates(e.target.checked)}
//             />
//             <label
//               className="form-check-label text-white"
//               htmlFor="updatesCheckbox"
//             >
//               Allow Valour Wealth to Send You Latest Updates.
//             </label>
//           </div>

//           {/* Message */}
//           {message && (
//             <p
//               className="mt-3"
//               style={{ color: message.includes("success") ? "green" : "red" }}
//             >
//               {message}
//             </p>
//           )}
//         </div>
//       </div>
//     </section>
//   );
// }

// export default Review;

import { useState } from "react";

export default function ReviewSection() {
  const [email, setEmail] = useState("");
  const [allowUpdates, setAllowUpdates] = useState(false);
  const [message, setMessage] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleReviewSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setMessage("");

    try {
      const res = await fetch(
        "https://valourwealthdjango-production.up.railway.app/api/leave-review/",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ email, allowUpdates }),
        }
      );

      const result = await res.json();
      if (res.ok) {
        setMessage("Review submitted successfully!");
        setEmail("");
        setAllowUpdates(false);
      } else {
        setMessage(result.error || "Failed to submit review.");
      }
    } catch (error) {
      setMessage("Network error. Please try again.");
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
        
        .review-section {
          background: linear-gradient(135deg, #040805 0%, #38a739 100%);
          min-height: 80vh;
          display: flex;
          align-items: center;
          position: relative;
          overflow: hidden;
        }
        
        .star-bg {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          pointer-events: none;
          z-index: 1;
        }
        
        .star {
          position: absolute;
          color: #22C55E;
          opacity: 0.4;
          font-size: 16px;
          animation: twinkle 3s ease-in-out infinite;
        }
        
        .star:nth-child(1) { top: 20%; left: 15%; animation-delay: 0s; }
        .star:nth-child(2) { top: 30%; right: 20%; animation-delay: 1s; }
        .star:nth-child(3) { bottom: 30%; left: 10%; animation-delay: 2s; }
        .star:nth-child(4) { bottom: 25%; right: 15%; animation-delay: 0.5s; }
        .star:nth-child(5) { top: 40%; left: 50%; animation-delay: 1.5s; }
        
        @keyframes twinkle {
          0%, 100% { opacity: 0.3; }
          50% { opacity: 0.8; }
        }
        
        .content-wrapper {
          position: relative;
          z-index: 2;
        }
        
        .mission-text {
          font-size: clamp(1.5rem, 4vw, 2.8rem);
          font-weight: 700;
          line-height: 1.3;
          color: white;
          text-align: center;
          margin-bottom: 4rem;
          letter-spacing: -0.01em;
        }
        
        .highlight {
          background: linear-gradient(135deg, #22C55E, #16A34A);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }
        
        .review-heading {
          font-size: clamp(2rem, 5vw, 3.2rem);
          font-weight: 700;
          color: white;
          text-align: center;
          margin-bottom: 1rem;
        }
        
        .review-subheading {
          font-size: 1.2rem;
          color: rgba(255, 255, 255, 0.8);
          text-align: center;
          margin-bottom: 3rem;
          font-weight: 400;
        }
        
        .form-container {
          max-width: 600px;
          margin: 0 auto;
          background: rgba(255, 255, 255, 0.95);
          border-radius: 16px;
          padding: 2.5rem;
          box-shadow: 0 20px 40px rgba(0, 0, 0, 0.2);
          backdrop-filter: blur(10px);
        }
        
        .email-group {
          display: flex;
          gap: 0;
          border-radius: 12px;
          overflow: hidden;
          box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
          margin-bottom: 1.5rem;
        }
        
        .email-input {
          flex: 1;
          padding: 16px 20px;
           border-radius: 14px 0 0 14px;
          border: 2px solid #e5e7eb;
          border-right: none;
          background: white;
          font-size: 16px;
          font-weight: 500;
          color: #374151;
          outline: none;
          transition: all 0.3s ease;
        }
        
        .email-input:focus {
          border-color: #22C55E;
          box-shadow: 0 0 0 3px rgba(34, 197, 94, 0.1);
          border-radius: 14px 0 0 14px;
        }
        
        .email-input::placeholder {
          color: #9ca3af;
        }
        
        .subscribe-btn {
          background: linear-gradient(135deg, #22C55E, #16A34A);
          border: none;
          color: white;
          padding: 16px 32px;
          font-size: 16px;
          font-weight: 600;
          cursor: pointer;
          transition: all 0.3s ease;
          letter-spacing: 0.5px;
          position: relative;
          overflow: hidden;
        }
        
        .subscribe-btn:hover:not(:disabled) {
          background: linear-gradient(135deg, #16A34A, #15803D);
          transform: translateY(-1px);
          box-shadow: 0 8px 20px rgba(34, 197, 94, 0.3);
        }
        
        .subscribe-btn:disabled {
          opacity: 0.7;
          cursor: not-allowed;
        }
        
        .spinner {
          width: 16px;
          height: 16px;
          border: 2px solid rgba(255, 255, 255, 0.3);
          border-radius: 50%;
          border-top-color: white;
          animation: spin 1s ease-in-out infinite;
        }
        
        @keyframes spin {
          to { transform: rotate(360deg); }
        }
        
        .checkbox-wrapper {
          display: flex;
          align-items: center;
          gap: 12px;
          justify-content: center;
          margin-bottom: 1rem;
        }
        
        .custom-checkbox {
          width: 20px;
          height: 20px;
          border: 2px solid #d1d5db;
          border-radius: 4px;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          transition: all 0.3s ease;
          background: white;
        }
        
        .custom-checkbox.checked {
          background: linear-gradient(135deg, #22C55E, #16A34A);
          border-color: #22C55E;
        }
        
        .custom-checkbox.checked::after {
          content: "✓";
          color: white;
          font-size: 12px;
          font-weight: bold;
        }
        
        .checkbox-label {
          color: #374151;
          font-size: 15px;
          font-weight: 500;
          cursor: pointer;
          user-select: none;
        }
        
        .feature-badge {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          background: rgba(34, 197, 94, 0.1);
          color: #22C55E;
          padding: 8px 16px;
          border-radius: 20px;
          font-size: 14px;
          font-weight: 600;
          margin-bottom: 2rem;
          border: 1px solid rgba(34, 197, 94, 0.2);
        }
        
        .message {
          padding: 12px 16px;
          border-radius: 8px;
          font-weight: 500;
          text-align: center;
          margin-top: 1rem;
        }
        
        .message.success {
          background: rgba(34, 197, 94, 0.1);
          color: #22C55E;
          border: 1px solid rgba(34, 197, 94, 0.2);
        }
        
        .message.error {
          background: rgba(239, 68, 68, 0.1);
          color: #dc2626;
          border: 1px solid rgba(239, 68, 68, 0.2);
        }
        
        @media (max-width: 768px) {
          .mission-text {
            margin-bottom: 3rem;
            padding: 0 1rem;
          }
          
          .review-subheading {
            margin-bottom: 2rem;
            padding: 0 1rem;
          }
          
          .form-container {
            margin: 0 1rem;
            padding: 2rem;
          }
          
          .email-group {
            flex-direction: column;
          }
          
          .email-input {
            border-right: 2px solid #e5e7eb;
            border-bottom: none;
          }
          
          .email-input:focus {
            border-color: #22C55E;
            border-bottom: none;
          }
          
          .subscribe-btn {
            border-top: 2px solid #22C55E;
          }
          
          .checkbox-wrapper {
            flex-direction: column;
            gap: 8px;
          }
          
          .checkbox-label {
            text-align: center;
            font-size: 14px;
          }
        }
      `}</style>

      <section className="review-section py-5">
        {/* Simple Star Background */}
        <div className="star-bg">
          <div className="star">★</div>
          <div className="star">★</div>
          <div className="star">★</div>
          <div className="star">★</div>
          <div className="star">★</div>
        </div>

        <div className="container content-wrapper">
          <div className="row">
            <div className="col-12">
              {/* Mission Statement */}
              <h1 className="mission-text">
                OUR MISSION AT <span className="highlight">VALOUR WEALTH</span>{" "}
                IS TO EMPOWER OVER{" "}
                <span className="highlight">100 MILLION TRADERS</span> TO TAKE
                CONTROL OF THEIR FINANCIAL DESTINY.
              </h1>

              {/* Review Section */}
              <div className="text-center">
                <div className="feature-badge">
                  <svg
                    width="16"
                    height="16"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  Trusted by Traders Worldwide
                </div>
              </div>

              <h2 className="review-heading">Leave Us An Honest Review</h2>

              <p className="review-subheading">
                We want to hear from you how we can improve our service.
              </p>

              {/* Form with Backend Integration */}
              <div className="form-container">
                <form onSubmit={handleReviewSubmit}>
                  <div className="email-group">
                    <input
                      type="email"
                      className="email-input"
                      placeholder="Enter your email address"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      required
                      disabled={isLoading}
                    />
                    <button
                      type="submit"
                      className="subscribe-btn"
                      disabled={isLoading}
                    >
                      {isLoading ? (
                        <>
                          <div className="spinner me-2"></div>
                          Submitting...
                        </>
                      ) : (
                        "Subscribe"
                      )}
                    </button>
                  </div>

                  {/* Checkbox */}
                  <div className="checkbox-wrapper">
                    <div
                      className={`custom-checkbox ${
                        allowUpdates ? "checked" : ""
                      }`}
                      onClick={() => setAllowUpdates(!allowUpdates)}
                    ></div>
                    <label
                      className="checkbox-label"
                      onClick={() => setAllowUpdates(!allowUpdates)}
                    >
                      Allow Valour Wealth to Send You Latest Updates.
                    </label>
                  </div>
                </form>

                {/* Message Display */}
                {message && (
                  <div
                    className={`message ${
                      message.includes("success") ? "success" : "error"
                    }`}
                  >
                    {message}
                  </div>
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
