import { useEffect, useState } from "react";
import "../DashboardSidebarComp/styles/mentorship.css";
import MentorshipPlans from "./MentorshipCards";

const Mentorship = () => {
  const [activeTab, setActiveTab] = useState("pricing");
  const [loading, setLoading] = useState(true);

  // Simulate initial loading
  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000);
    return () => clearTimeout(timer);
  }, []);

  const handleTradeGPTRedirect = async () => {
    const accessToken = localStorage.getItem("accessToken");

    try {
      const response = await fetch(
        `https://valourwealthdjango-production.up.railway.app/api/generate-tradegpt-token/`,
        {
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
        }
      );

      if (!response.ok) {
        throw new Error("Failed to get token");
      }

      const { token } = await response.json();

      // Redirect to TradeGPT with token
      window.location.href = `https://frontend-eight-rho-95.vercel.app?token=${token}`;
    } catch (error) {
      console.error("TradeGPT redirect failed:", error);
    }
  };

  return (
    <div className="sessions-container">
      {/* Top Buttons */}
      <div className="buttons-container">
        {/* <button
          className={`btn ${
            activeTab === "pricing" ? "btn-secondary" : "btn-outline-light"
          } manage-btn`}
          onClick={() => setActiveTab("pricing")}
        >
          View All Price Plans
        </button> */}
      </div>

      {loading ? (
        // Shimmer Effect
        <div className="shimmer-content">
          {activeTab === "mentorship" ? (
            // Mentorship Panel Shimmer
            <div className="mentorship-panel">
              <div className="mentorship-header">
                <div className="icon-container">
                  <div
                    className="shimmer-block"
                    style={{
                      height: "30px",
                      width: "30px",
                      borderRadius: "50%",
                    }}
                  ></div>
                </div>
                <div className="mentorship-title">
                  <div
                    className="shimmer-block mb-2"
                    style={{
                      height: "16px",
                      width: "150px",
                      borderRadius: "4px",
                    }}
                  ></div>
                  <div
                    className="shimmer-block"
                    style={{
                      height: "24px",
                      width: "120px",
                      borderRadius: "4px",
                    }}
                  ></div>
                </div>
              </div>
              <hr />
              <div className="mentorship-content">
                {/* Description Shimmer */}
                <div
                  className="shimmer-block mb-2"
                  style={{ height: "16px", width: "100%", borderRadius: "4px" }}
                ></div>
                <div
                  className="shimmer-block mb-2"
                  style={{ height: "16px", width: "95%", borderRadius: "4px" }}
                ></div>
                <div
                  className="shimmer-block mb-3"
                  style={{ height: "16px", width: "80%", borderRadius: "4px" }}
                ></div>

                <div
                  className="shimmer-block mb-2"
                  style={{ height: "16px", width: "90%", borderRadius: "4px" }}
                ></div>
                <div
                  className="shimmer-block mb-4"
                  style={{ height: "16px", width: "85%", borderRadius: "4px" }}
                ></div>

                {/* Telegram Access Shimmer */}
                <div className="telegram-access">
                  <div
                    className="shimmer-block mb-3"
                    style={{
                      height: "16px",
                      width: "200px",
                      borderRadius: "4px",
                    }}
                  ></div>
                  <div
                    className="shimmer-block mb-2"
                    style={{
                      height: "40px",
                      width: "250px",
                      borderRadius: "6px",
                    }}
                  ></div>
                  <div
                    className="shimmer-block"
                    style={{
                      height: "40px",
                      width: "150px",
                      borderRadius: "6px",
                    }}
                  ></div>
                </div>
              </div>
            </div>
          ) : (
            // Pricing Plans Shimmer
            <div className="pricing-shimmer">
              <div className="row">
                {[...Array(3)].map((_, index) => (
                  <div key={index} className="col-md-4 mb-4">
                    <div className="card h-100">
                      <div className="card-body">
                        {/* Plan Title Shimmer */}
                        <div
                          className="shimmer-block mb-3"
                          style={{
                            height: "24px",
                            width: "70%",
                            borderRadius: "4px",
                          }}
                        ></div>
                        {/* Price Shimmer */}
                        <div
                          className="shimmer-block mb-3"
                          style={{
                            height: "32px",
                            width: "50%",
                            borderRadius: "4px",
                          }}
                        ></div>
                        {/* Features Shimmer */}
                        {[...Array(5)].map((_, i) => (
                          <div
                            key={i}
                            className="shimmer-block mb-2"
                            style={{
                              height: "16px",
                              width: "90%",
                              borderRadius: "4px",
                            }}
                          ></div>
                        ))}
                        {/* Button Shimmer */}
                        <div
                          className="shimmer-block mt-3"
                          style={{
                            height: "40px",
                            width: "100%",
                            borderRadius: "6px",
                          }}
                        ></div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      ) : (
        // Actual Content
        <>
          {/* Pricing Plans */}
          {activeTab === "pricing" && <MentorshipPlans />}
        </>
      )}
    </div>
  );
};

export default Mentorship;
