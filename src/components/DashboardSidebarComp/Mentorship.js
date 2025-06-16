// import { useState } from "react";
// import "../DashboardSidebarComp/styles/mentorship.css";
// import MentorshipPlans from "./MentorshipCards";

// const SessionsComponent = () => {
//   const [activeTab, setActiveTab] = useState("pricing");
//   const handleTradeGPTRedirect = async () => {
//     const accessToken = localStorage.getItem("accessToken");

//     try {
//       const response = await fetch(
//         `https://valourwealthdjango-production.up.railway.app/api/generate-tradegpt-token/`,
//         {
//           headers: {
//             Authorization: `Bearer ${accessToken}`,
//           },
//         }
//       );

//       if (!response.ok) {
//         throw new Error("Failed to get token");
//       }

//       const { token } = await response.json();

//       // Redirect to TradeGPT with token
//       window.location.href = `https://frontend-eight-rho-95.vercel.app?token=${token}`;
//     } catch (error) {
//       console.error("TradeGPT redirect failed:", error);
//     }
//   };

//   return (
//     <div className="sessions-container">
//       {/* Top Buttons */}
//       <div className="buttons-container">
//         <button
//           className={`btn ${
//             activeTab === "pricing" ? "btn-secondary" : "btn-outline-light"
//           } manage-btn`}
//           onClick={() => setActiveTab("pricing")}
//         >
//           View All Price Plans
//         </button>

//         <button
//           className={`btn ${
//             activeTab === "mentorship" ? "btn-secondary" : "btn-outline-light"
//           } price-btn`}
//           onClick={() => setActiveTab("mentorship")}
//         >
//           Contact us
//         </button>
//       </div>

//       {/* Mentorship Description */}
//       {activeTab === "mentorship" && (
//         <div className="mentorship-panel">
//           <div className="mentorship-header">
//             <div className="icon-container">
//               <span className="book-icon">📚</span>
//             </div>
//             <div className="mentorship-title">
//               <p className="text-muted mb-0">Options Mentorship:</p>
//               <h3>Starter Level</h3>
//             </div>
//           </div>
//           <hr />
//           <div className="mentorship-content">
//             <p>
//               The starter level sessions focus on introducing the fundamental
//               concepts and principles of options trading. Participants will
//               learn about market structure, basic trading strategies, and
//               essential tools for success.
//             </p>
//             <p>
//               Through hands-on exercises and engaging examples, newcomers will
//               develop a strong foundation in the world of options trading,
//               preparing them for more advanced topics.
//             </p>
//             <div className="telegram-access">
//               <p>Access the telegram channel here:</p>
//               <button className="btn btn-dark telegram-btn">
//                 <a
//                   target="_blank"
//                   rel="noopener noreferrer"
//                   className="text-decoration-none text-white"
//                   href="https://t.me/+nO3GSU_Jvts5MGE0"
//                 >
//                   <i className="telegram-icon">✈</i> Mentorship Telegram Alerts
//                 </a>
//               </button>
//               {/* <button
//                 onClick={handleTradeGPTRedirect}
//                 className="btn btn-primary"
//               >
//                 Go to TradeGPT
//               </button> */}
//             </div>
//           </div>
//         </div>
//       )}

//       {/* Pricing Plans */}
//       {activeTab === "pricing" && <MentorshipPlans />}
//     </div>
//   );
// };

// export default SessionsComponent;

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
