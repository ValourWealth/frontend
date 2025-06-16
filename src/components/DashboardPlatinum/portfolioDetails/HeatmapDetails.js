// import { useState } from "react";
// import AISuggestions from "../AiSuggestion";
// import DiversificationLevel from "../DisverificationLevel";
// import CorrectionLink from "../portfolioDetails/CorrectionLink";

// const PortfolioAnalysis = () => {
//   const [activeTab, setActiveTab] = useState("sector-exposure");

//   const sectorData = [
//     {
//       id: 1,
//       name: "Technology",
//       allocation: 35,
//       value: 85987.62,
//       risk: "High Risk",
//       riskColor: "high-risk",
//     },
//     {
//       id: 2,
//       name: "Healthcare",
//       allocation: 20,
//       value: 49135.78,
//       risk: "Medium Risk",
//       riskColor: "medium-risk",
//     },
//     {
//       id: 3,
//       name: "Financials",
//       allocation: 15,
//       value: 36851.84,
//       risk: "Medium Risk",
//       riskColor: "medium-risk",
//     },
//     {
//       id: 4,
//       name: "Consumer Discretionary",
//       allocation: 10,
//       value: 24567.89,
//       risk: "High Risk",
//       riskColor: "high-risk",
//     },
//     {
//       id: 5,
//       name: "Industrials",
//       allocation: 8,
//       value: 19654.31,
//       risk: "Low Risk",
//       riskColor: "low-risk",
//     },
//     {
//       id: 6,
//       name: "Energy",
//       allocation: 5,
//       value: 12283.95,
//       risk: "High Risk",
//       riskColor: "high-risk",
//     },
//     {
//       id: 7,
//       name: "Materials",
//       allocation: 4,
//       value: 9827.16,
//       risk: "Medium Risk",
//       riskColor: "medium-risk",
//     },
//     {
//       id: 8,
//       name: "Utilities",
//       allocation: 3,
//       value: 7370.37,
//       risk: "Low Risk",
//       riskColor: "low-risk",
//     },
//   ];

//   const formatCurrency = (value) => {
//     return new Intl.NumberFormat("en-US", {
//       style: "currency",
//       currency: "USD",
//       minimumFractionDigits: 2,
//     }).format(value);
//   };

//   const renderSectorCards = () => (
//     <div className="row g-3">
//       {sectorData.map((sector) => (
//         <div key={sector.id} className="col-md-6 col-lg-3">
//           <div className="sector-card">
//             <div className="d-flex justify-content-between mb-2">
//               <h5 className="sector-name">{sector.name}</h5>
//               <span className={`risk-badge ${sector.riskColor}`}>
//                 {sector.risk}
//               </span>
//             </div>
//             <div className="allocation-label">Allocation</div>
//             <div className="progress allocation-progress">
//               <div
//                 className={`progress-bar ${sector.riskColor}-bg`}
//                 role="progressbar"
//                 style={{ width: `${sector.allocation}%` }}
//                 aria-valuenow={sector.allocation}
//                 aria-valuemin="0"
//                 aria-valuemax="100"
//               ></div>
//             </div>
//             <div className="allocation-percentage">{sector.allocation}%</div>
//             <div className="sector-value">{formatCurrency(sector.value)}</div>
//           </div>
//         </div>
//       ))}
//     </div>
//   );

//   const renderTabContent = () => {
//     switch (activeTab) {
//       case "sector-exposure":
//         return (
//           <>
//             <div className="d-flex align-items-center mb-3">
//               <h2 className="section-title">Sector Exposure</h2>
//               <div className="info-icon ms-2">
//                 <i className="bi bi-info-circle"></i>
//               </div>
//             </div>
//             {renderSectorCards()}
//             <div className="risk-analysis-box mt-4">
//               <div className="d-flex align-items-center mb-2">
//                 <div className="risk-icon">
//                   <i className="bi bi-lightbulb"></i>
//                 </div>
//                 <h5 className="risk-title">Risk Analysis</h5>
//               </div>
//               <p className="risk-text">
//                 Your portfolio shows a high concentration in the Technology
//                 sector (35%), which increases your vulnerability to
//                 sector-specific downturns. Consider rebalancing to reduce
//                 sector-specific risk.
//               </p>
//             </div>
//           </>
//         );
//       case "correlation-risk":
//         return <CorrectionLink />;
//       case "diversification-level":
//         return <DiversificationLevel />;
//       case "ai-suggestions":
//         return <AISuggestions />;
//       default:
//         return null;
//     }
//   };

//   return (
//     <div className="portfolio-analysis-container">
//       <div className="header-section">
//         <div className="d-flex justify-content-between align-items-center mb-3">
//           <div>
//             <h1 className="analysis-title">Portfolio Analysis</h1>
//             <p className="last-updated">
//               Last updated: April 12, 2025 at 10:30 AM
//             </p>
//           </div>
//           {/* <div className="action-buttons">
//             <button className="btn btn-refresh me-2">
//               <i className="bi bi-arrow-clockwise"></i> Refresh Analysis
//             </button>
//             <button className="btn btn-export">
//               <i className="bi bi-download"></i> Export Data
//             </button>
//           </div> */}
//         </div>

//         <div className="tabs-container">
//           <div className="nav-tabs">
//             <button
//               className={`tab-button ${
//                 activeTab === "sector-exposure" ? "active" : ""
//               }`}
//               onClick={() => setActiveTab("sector-exposure")}
//             >
//               Sector Exposure
//             </button>
//             <button
//               className={`tab-button ${
//                 activeTab === "correlation-risk" ? "active" : ""
//               }`}
//               onClick={() => setActiveTab("correlation-risk")}
//             >
//               Correlation Risk
//             </button>
//             <button
//               className={`tab-button ${
//                 activeTab === "diversification-level" ? "active" : ""
//               }`}
//               onClick={() => setActiveTab("diversification-level")}
//             >
//               Diversification Level
//             </button>
//             <button
//               className={`tab-button ${
//                 activeTab === "ai-suggestions" ? "active" : ""
//               }`}
//               onClick={() => setActiveTab("ai-suggestions")}
//             >
//               AI Suggestions
//             </button>
//           </div>
//         </div>
//       </div>

//       <div className="content-section">{renderTabContent()}</div>
//     </div>
//   );
// };

// export default PortfolioAnalysis;

import axios from "axios";
import { useEffect, useState } from "react";
import AISuggestions from "../AiSuggestion";
import DiversificationLevel from "../DisverificationLevel";
import CorrectionLink from "../portfolioDetails/CorrectionLink";

const PortfolioAnalysis = () => {
  const [activeTab, setActiveTab] = useState("sector-exposure");
  const [sectorData, setSectorData] = useState([]);
  const [aiSuggestions, setAiSuggestions] = useState([]);

  useEffect(() => {
    fetchSectorExposure();
    fetchAISuggestions();
  }, []);

  // const fetchSectorExposure = async () => {
  //   try {
  //     const token = localStorage.getItem("accessToken");
  //     const res = await axios.get(
  //       "https://valourwealthdjango-production.up.railway.app/api/portfolio/sector-exposure/",
  //       {
  //         headers: { Authorization: `Bearer ${token}` },
  //       }
  //     );
  //     setSectorData(res.data || []);
  //   } catch (error) {
  //     console.error("Sector exposure fetch error", error);
  //   }
  // };
  const fetchSectorExposure = async () => {
    try {
      const token = localStorage.getItem("accessToken");
      const res = await axios.get(
        "https://valourwealthdjango-production.up.railway.app/api/portfolio/sector-exposure/",
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      );

      // Handle: res.data might be an object like { data: [...] }
      const data = Array.isArray(res.data) ? res.data : res.data?.data || [];
      setSectorData(data);
    } catch (error) {
      console.error("Sector exposure fetch error", error);
      setSectorData([]); // fallback to empty array to avoid breaking map
    }
  };

  const fetchAISuggestions = async () => {
    try {
      const token = localStorage.getItem("accessToken");
      const res = await axios.get(
        "https://valourwealthdjango-production.up.railway.app/api/portfolio/ai-suggestions/",
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      );
      setAiSuggestions(res.data?.response?.split("\n\n") || []);
    } catch (error) {
      console.error("AI suggestions fetch error", error);
    }
  };

  const formatCurrency = (value) => {
    return new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
      minimumFractionDigits: 2,
    }).format(value);
  };

  // const renderSectorCards = () => (
  //   <div className="row g-3">
  //     {sectorData.map((sector, index) => (
  //       <div key={index} className="col-md-6 col-lg-3">
  //         <div className="sector-card">
  //           <div className="d-flex justify-content-between mb-2">
  //             <h5 className="sector-name">{sector.sector_name}</h5>
  //             <span
  //               className={`risk-badge ${sector.risk_level
  //                 .toLowerCase()
  //                 .replace(" ", "-")}`}
  //               >
  //               {sector.risk_level}
  //             </span>
  //           </div>
  //           <div className="allocation-label">Allocation</div>
  //           <div className="progress allocation-progress">
  //             <div
  //               className={`progress-bar ${sector.risk_level
  //                 .toLowerCase()
  //                 .replace(" ", "-")}-bg`}
  //               role="progressbar"
  //               style={{ width: `${sector.allocation_percentage}%` }}
  //             ></div>
  //           </div>
  //           <div className="allocation-percentage">
  //             {sector.allocation_percentage}%
  //           </div>
  //           <div className="sector-value">
  //             {formatCurrency(sector.allocation_value)}
  //           </div>
  //         </div>
  //       </div>
  //     ))}
  //   </div>
  // );

  const renderSectorCards = () => (
    <div className="row g-3">
      {sectorData.map((sector, index) => {
        const riskLevel = sector?.risk_level || "Unknown";
        const riskClass = riskLevel.toLowerCase().replace(/\s+/g, "-");

        return (
          <div key={index} className="col-md-6 col-lg-3">
            <div className="sector-card">
              <div className="d-flex justify-content-between mb-2">
                <h5 className="sector-name">{sector?.sector_name || "N/A"}</h5>
                <span className={`risk-badge ${riskClass}`}>{riskLevel}</span>
              </div>
              <div className="allocation-label">Allocation</div>
              <div className="progress allocation-progress">
                <div
                  className={`progress-bar ${riskClass}-bg`}
                  role="progressbar"
                  style={{ width: `${sector?.allocation_percentage || 0}%` }}
                ></div>
              </div>
              <div className="allocation-percentage">
                {sector?.allocation_percentage || 0}%
              </div>
              <div className="sector-value">
                {formatCurrency(sector?.allocation_value || 0)}
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );

  const renderAISuggestions = () => (
    <div className="ai-suggestion-box mt-4">
      <h2 className="section-title-heatmap">
        AI-Powered Portfolio Suggestions
      </h2>
      {aiSuggestions.map((block, i) => {
        const [titleLine, impactLine, ...desc] = block
          .split("  \n")
          .map((x) => x.trim());
        return (
          <div key={i} className="ai-card">
            <div className="d-flex justify-content-between mb-1">
              <strong>{titleLine}</strong>
              <span
                className={`impact-badge ${
                  (impactLine || "").toLowerCase().includes("high")
                    ? "high-risk"
                    : "medium-risk"
                }`}
              >
                {impactLine || "Unknown Impact"}
              </span>
            </div>
            <p className="mb-1">{desc.join(" ")}</p>
            <div className="d-flex gap-2 mt-2">
              <button className="btn btn-sm btn-light">View Details</button>
              <button className="btn btn-sm btn-dark">Apply Suggestion</button>
            </div>
          </div>
        );
      })}
    </div>
  );

  const renderTabContent = () => {
    switch (activeTab) {
      case "sector-exposure":
        return (
          <>
            <div className="d-flex align-items-center mb-3">
              <h2 className="section-title-heatmap">Sector Exposure</h2>
              <div className="info-icon ms-2">
                <i className="bi bi-info-circle"></i>
              </div>
            </div>
            {renderSectorCards()}
            <div className="risk-analysis-box mt-4">
              <div className="d-flex align-items-center mb-2">
                <div className="risk-icon">
                  <i className="bi bi-lightbulb"></i>
                </div>
                <h5 className="risk-title">Risk Analysis</h5>
              </div>
              <p className="risk-text">
                Your portfolio shows a high concentration in the Technology
                sector, which increases your vulnerability to sector-specific
                downturns. Consider rebalancing to reduce sector-specific risk.
              </p>
            </div>
          </>
        );
      case "correlation-risk":
        return <CorrectionLink />;
      case "diversification-level":
        return <DiversificationLevel />;
      case "ai-suggestions":
        {
          renderAISuggestions();
        }
        return <AISuggestions />;
      default:
        return null;
    }
  };

  return (
    <div className="portfolio-analysis-container">
      <div className="header-section">
        <div className="d-flex justify-content-between align-items-center mb-3">
          <div>
            <h1 className="analysis-title">Portfolio Analysis</h1>
            <p className="last-updated">
              Last updated: April 12, 2025 at 10:30 AM
            </p>
          </div>
        </div>
        <div className="tabs-container">
          <div className="nav-tabs">
            <button
              className={`tab-button ${
                activeTab === "sector-exposure" ? "active" : ""
              }`}
              onClick={() => setActiveTab("sector-exposure")}
            >
              Sector Exposure
            </button>
            <button
              className={`tab-button ${
                activeTab === "correlation-risk" ? "active" : ""
              }`}
              onClick={() => setActiveTab("correlation-risk")}
            >
              Diversification Level
            </button>
            <button
              className={`tab-button ${
                activeTab === "diversification-level" ? "active" : ""
              }`}
              onClick={() => setActiveTab("diversification-level")}
            >
              Sector IQ
            </button>
            <button
              className={`tab-button ${
                activeTab === "ai-suggestions" ? "active" : ""
              }`}
              onClick={() => setActiveTab("ai-suggestions")}
            >
              AI Suggestions
            </button>
            {/* <button
              className={`tab-button ${
                activeTab === "ai-suggestions" ? "active" : ""
              }`}
            >
              CorrectionLink
            </button> */}
          </div>
        </div>
      </div>

      <div className="content-section">{renderTabContent()}</div>
    </div>
  );
};

export default PortfolioAnalysis;
