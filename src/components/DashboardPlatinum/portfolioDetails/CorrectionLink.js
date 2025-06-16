// // // const correlationData = [
// // //   { pair: "AAPL / MSFT", correlation: 0.85, level: "High" },
// // // ];

// // // const getBarColor = (level) => {
// // //   switch (level) {
// // //     case "High":
// // //       return "#ff4d6d";
// // //     case "Medium":
// // //       return "#ffae42";
// // //     case "Low":
// // //       return "#2ecc71";
// // //     default:
// // //       return "#ccc";
// // //   }
// // // };

// // // const CorrelationRisk = () => {
// // //   return (
// // //     <div className="correlation-risk">
// // //       <h3 className="correlation-title">Portfolio Pulse</h3>
// // //       <div className="correlation-table">
// // //         <div className="correlation-header">
// // //           <span>Asset Pair</span>
// // //           <span>Correlation</span>
// // //           <span>Risk Level</span>
// // //           <span>Visualization</span>
// // //         </div>
// // //         {correlationData.map((item, index) => (
// // //           <div className="correlation-row" key={index}>
// // //             <span>{item.pair}</span>
// // //             <span>{item.correlation.toFixed(2)}</span>
// // //             <span className={`risk-pill ${item.level.toLowerCase()}`}>
// // //               {item.level}
// // //             </span>
// // //             <div className="bar-container">
// // //               <div
// // //                 className="bar-fill"
// // //                 style={{
// // //                   width: `${item.correlation * 100}%`,
// // //                   backgroundColor: getBarColor(item.level),
// // //                 }}
// // //               ></div>
// // //             </div>
// // //           </div>
// // //         ))}
// // //       </div>
// // //     </div>
// // //   );
// // // };

// // // export default CorrelationRisk;

// // const correlationData = [
// //   { pair: "AAPL / MSFT", correlation: 0.85, level: "High" },
// // ];

// // const getBarColor = (level) => {
// //   switch (level) {
// //     case "High":
// //       return "#ff4d6d";
// //     case "Medium":
// //       return "#ffae42";
// //     case "Low":
// //       return "#2ecc71";
// //     default:
// //       return "#ccc";
// //   }
// // };

// // const dailyWrap =
// //   "*Daily Wrap:* Portfolio up +5%; Market trends: EURUSD spread up (3e-05), GBPUSD spread down (0.0001); Positive sentiment on tech stocks, negative on energy and MSFT.\n\n*Key Drivers:*\n• [AAPL] - Positive sentiment due to tech earnings";

// // const CorrelationRisk = () => {
// //   return (
// //     <div className="correlation-risk d-flex flex-wrap gap-4">
// //       <div className="flex-grow-1 correlation-table-box">
// //         <h3 className="correlation-title">Portfolio Pulse</h3>
// //         <div className="correlation-table">
// //           <div className="correlation-header">
// //             <span>Asset Pair</span>
// //             <span>Correlation</span>
// //             <span>Risk Level</span>
// //             <span>Visualization</span>
// //           </div>
// //           {correlationData.map((item, index) => (
// //             <div className="correlation-row" key={index}>
// //               <span>{item.pair}</span>
// //               <span>{item.correlation.toFixed(2)}</span>
// //               <span className={`risk-pill ${item.level.toLowerCase()}`}>
// //                 {item.level}
// //               </span>
// //               <div className="bar-container">
// //                 <div
// //                   className="bar-fill"
// //                   style={{
// //                     width: `${item.correlation * 100}%`,
// //                     backgroundColor: getBarColor(item.level),
// //                   }}
// //                 ></div>
// //               </div>
// //             </div>
// //           ))}
// //         </div>
// //       </div>

// //       <div
// //         className="wrap-box bg-dark text-white p-3 rounded"
// //         style={{ flex: 1, minWidth: "300px", maxWidth: "500px" }}
// //       >
// //         <h5 className="mb-2">AI Daily Wrap</h5>
// //         <pre style={{ whiteSpace: "pre-wrap" }}>{dailyWrap}</pre>
// //       </div>
// //     </div>
// //   );
// // };

// // export default CorrelationRisk;

// import { useState } from "react";

// const correlationData = [
//   { pair: "AAPL / MSFT", correlation: 0.85, level: "High" },
// ];

// const getBarColor = (level) => {
//   switch (level) {
//     case "High":
//       return "#ff4d6d";
//     case "Medium":
//       return "#ffae42";
//     case "Low":
//       return "#2ecc71";
//     default:
//       return "#ccc";
//   }
// };

// const CorrelationRisk = () => {
//   const [dailyWrap, setDailyWrap] = useState("Loading AI summary...");

//   // useEffect(() => {
//   //   fetch(
//   //     "https://working-coral-hopelessly.ngrok-free.app/portfolio-commentary",
//   //     {
//   //       method: "POST",
//   //       headers: { "Content-Type": "application/json" },
//   //       body: JSON.stringify({
//   //         summary: { change_value: 25.99, percent_change: 5.0 },
//   //         asset_allocation: { stocks: 75, crypto: 15, cash: 10 },
//   //         portfolio_history: [],
//   //         market_watch: [
//   //           { symbol: "EURUSD", ask: 1.13323, bid: 1.1332, spread: 0.00003 },
//   //           { symbol: "GBPUSD", ask: 1.2845, bid: 1.2844, spread: 0.0001 },
//   //         ],
//   //         sentiment: {
//   //           AAPL: 0.12,
//   //           MSFT: -0.08,
//   //           TSLA: 0.25,
//   //           NVDA: 0.18,
//   //         },
//   //         headlines: [
//   //           "Fed holds rates steady amid inflation concerns",
//   //           "Tech earnings beat expectations across the board",
//   //           "Energy sector rallies on supply concerns",
//   //         ],
//   //       }),
//   //     }
//   //   )
//   //     .then((res) => res.json())
//   //     .then((data) => {
//   //       setDailyWrap(data.response || "No summary available.");
//   //     })
//   //     .catch((err) => {
//   //       console.error("Failed to fetch Portfolio Pulse:", err);
//   //       setDailyWrap("❌ Failed to load AI summary.");
//   //     });
//   // }, []);

//   return (
//     <div className="correlation-risk d-flex flex-wrap gap-4">
//       <div className="flex-grow-1 correlation-table-box">
//         <h3 className="correlation-title">Portfolio Pulse</h3>
//         <div className="correlation-table">
//           <div className="correlation-header">
//             <span>Asset Pair</span>
//             <span>Correlation</span>
//             <span>Risk Level</span>
//             <span>Visualization</span>
//           </div>
//           {correlationData.map((item, index) => (
//             <div className="correlation-row" key={index}>
//               <span>{item.pair}</span>
//               <span>{item.correlation.toFixed(2)}</span>
//               <span className={`risk-pill ${item.level.toLowerCase()}`}>
//                 {item.level}
//               </span>
//               <div className="bar-container">
//                 <div
//                   className="bar-fill"
//                   style={{
//                     width: `${item.correlation * 100}%`,
//                     backgroundColor: getBarColor(item.level),
//                   }}
//                 ></div>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>

//       {/* <div
//         className="wrap-box bg-dark text-white p-3 rounded"
//         style={{ flex: 1, minWidth: "300px", maxWidth: "500px" }}
//       >
//         <h5 className="mb-2">AI Daily Wrap</h5>
//         <pre style={{ whiteSpace: "pre-wrap" }}>{dailyWrap}</pre>
//       </div> */}
//     </div>
//   );
// };

// export default CorrelationRisk;

import axios from "axios";
import { useEffect, useState } from "react";

const CorrelationRisk = () => {
  const [diversification, setDiversification] = useState({
    score: 0,
    breakdown: [],
    insight: "",
  });
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchDiversification = async () => {
      try {
        const token = localStorage.getItem("accessToken");
        const res = await axios.get(
          "https://valourwealthdjango-production.up.railway.app/api/portfolio/diversification/",
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );
        setDiversification(res.data);
      } catch (err) {
        console.error("Diversification fetch error:", err);
        setError("Failed to fetch diversification data.");
      } finally {
        setLoading(false);
      }
    };

    fetchDiversification();
  }, []);

  const getRiskClass = (score) => {
    if (score >= 75) return "low-risk-bg";
    if (score >= 50) return "medium-risk-bg";
    return "high-risk-bg";
  };

  if (loading) return <p>Loading diversification...</p>;
  if (error) return <p className="text-danger">{error}</p>;

  return (
    <>
      <div className="d-flex align-items-center mb-3">
        <h2 className="section-title">Diversification Level</h2>
        <div className="info-icon ms-2">
          <i className="bi bi-info-circle"></i>
        </div>
      </div>

      <div className="row">
        <div className="col-lg-5 mb-4 mb-lg-0">
          <div className="diversification-card">
            <div className="diversification-chart-container">
              <div className="diversification-chart">
                <div className="diversification-score">
                  <div className="score-value">{diversification.score}</div>
                  <div className="score-label">out of 100</div>
                </div>
              </div>
            </div>
            <h3 className="diversification-title">
              {diversification.score >= 75
                ? "High Diversification"
                : diversification.score >= 50
                ? "Moderate Diversification"
                : "Low Diversification"}
            </h3>
            <p className="diversification-description">
              Your portfolio has a{" "}
              {diversification.score >= 75
                ? "strong"
                : diversification.score >= 50
                ? "moderate"
                : "limited"}{" "}
              level of diversification across multiple dimensions.
            </p>
          </div>
        </div>

        <div className="col-lg-7">
          <div className="breakdown-card">
            <h3 className="breakdown-title mb-4">Diversification Breakdown</h3>

            {diversification.breakdown.map((item, idx) => (
              <div key={idx} className="breakdown-item mb-4">
                <div className="d-flex justify-content-between mb-2">
                  <div className="breakdown-category">{item.category}</div>
                  <div className="breakdown-score">
                    {item.score}/{item.maxScore}
                  </div>
                </div>
                <div className="progress">
                  <div
                    className={`progress-bar ${getRiskClass(item.score)}`}
                    role="progressbar"
                    style={{ width: `${(item.score / item.maxScore) * 100}%` }}
                    aria-valuenow={item.score}
                    aria-valuemin="0"
                    aria-valuemax={item.maxScore}
                  ></div>
                </div>
              </div>
            ))}

            <div className="insight-box mt-4">
              <div className="d-flex align-items-center mb-2">
                <div className="insight-icon">
                  <i className="bi bi-lightbulb"></i>
                </div>
                <h5 className="insight-title">Diversification Insight</h5>
              </div>
              <p className="insight-text">{diversification.insight}</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CorrelationRisk;
