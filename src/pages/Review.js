import { useState } from "react";

function Review() {
  const [email, setEmail] = useState("");
  const [allowUpdates, setAllowUpdates] = useState(false);
  const [message, setMessage] = useState("");

  const handleReviewSubmit = async (e) => {
    e.preventDefault();

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
  };

  return (
    <section className="review-section text-center py-5">
      <div className="container">
        <div className="review-container">
          <h6 className="review-title">
            OUR MISSION AT VALOUR WEALTH IS TO EMPOWER OVER 100 MILLION TRADERS
            TO TAKE CONTROL OF THEIR FINANCIAL DESTINY.
          </h6>
          <h2 className="fw-bold mt-lg-5 mt-3">
            Leave Us An Honest Review <span role="img" aria-label="hand"></span>
          </h2>
          <p className="text-white mt-2">
            We want to hear from you how we can improve our service.
          </p>

          {/* Subscription Form */}
          <form
            className="review-form d-flex justify-content-center"
            onSubmit={handleReviewSubmit}
          >
            <input
              type="email"
              className="review-input form-input"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <button className="theme_btn review-btn" type="submit">
              Subscribe
            </button>
          </form>

          {/* Checkbox */}
          <div className="form-check mt-3 d-flex justify-content-center">
            <input
              className="form-check-input me-2"
              type="checkbox"
              id="updatesCheckbox"
              checked={allowUpdates}
              onChange={(e) => setAllowUpdates(e.target.checked)}
            />
            <label
              className="form-check-label text-white"
              htmlFor="updatesCheckbox"
            >
              Allow Valour Wealth to Send You Latest Updates.
            </label>
          </div>

          {/* Message */}
          {message && (
            <p
              className="mt-3"
              style={{ color: message.includes("success") ? "green" : "red" }}
            >
              {message}
            </p>
          )}
        </div>
      </div>
    </section>
  );
}

export default Review;
