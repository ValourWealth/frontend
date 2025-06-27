// import React, { useEffect, useState } from "react";
// import "../DashboardSidebarComp/styles/TradeAlertsTable.css";

// const API_BASE_URL = "https://valourwealthdjango-production.up.railway.app/";

// const apiPaths = {
//   "Large Caps": "api/alerts/large_caps/",
//   "Medium Caps": "api/alerts/medium_caps/",
//   "Small Caps": "api/alerts/small_caps/",
// };

// const TradeAlertsTable = () => {
//   const [activeTab, setActiveTab] = useState("Large Caps");
//   const [tableData, setTableData] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);

//   // Fetch API Data
//   useEffect(() => {
//     const fetchData = async () => {
//       setLoading(true);
//       setError(null);

//       const url = `${API_BASE_URL}${apiPaths[activeTab]}`;

//       try {
//         const response = await fetch(url);
//         if (!response.ok) throw new Error(`HTTP error: ${response.status}`);

//         const data = await response.json();
//         setTableData(Array.isArray(data) ? data : []);
//       } catch (err) {
//         console.error("Fetch error:", err.message);
//         setError("Failed to load data. Please try again later.");
//         setTableData([]);
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchData();
//   }, [activeTab]);

//   const handleTabChange = (tab) => {
//     setActiveTab(tab);
//   };

//   return (
//     <div className="ats-container p-0 container">
//       <h2 className="theme-title mb-4">ATS Irregular Activity Alerts</h2>

//       {/* Tabs */}
//       <div className="tabs-container">
//         {Object.keys(apiPaths).map((tab) => (
//           <button
//             key={tab}
//             className={`tab-button ${activeTab === tab ? "active" : ""}`}
//             onClick={() => handleTabChange(tab)}
//           >
//             {tab}
//           </button>
//         ))}
//       </div>

//       {/* Table */}
//       <div className="table-container table_history">
//         <table className="alerts-table">
//           <thead>
//             <tr>
//               <th className="time-col">TIME ENTERED</th>
//               <th>TICKER</th>
//               <th>COMPANY NAME</th>
//               <th>IRREGULAR VOLUME</th>
//               <th>PRICE DETECTED</th>
//             </tr>
//           </thead>
//           <tbody>
//             {loading ? (
//               <tr>
//                 <td colSpan="5" className="text-center">
//                   Loading data...
//                 </td>
//               </tr>
//             ) : error ? (
//               <tr>
//                 <td colSpan="5" className="text-danger text-center">
//                   {error}
//                 </td>
//               </tr>
//             ) : tableData.length > 0 ? (
//               tableData.map((alert, index) => (
//                 <tr key={index}>
//                   <td>{alert.time_entered || "-"}</td>
//                   <td className="ticker-col">{alert.ticker || "-"}</td>
//                   <td>{alert.company_name || "-"}</td>
//                   <td className="volume-col">
//                     {alert.irregular_volume || "-"}
//                   </td>
//                   <td>{alert.price_detected || "-"}</td>
//                 </tr>
//               ))
//             ) : (
//               <tr>
//                 <td colSpan="5" className="text-center">
//                   No data available.
//                 </td>
//               </tr>
//             )}
//           </tbody>
//         </table>
//       </div>

//       {/* Chart and Settings Icons */}
//       <div className="action-buttons">
//         <button className="chart-btn">
//           <span className="chart-icon"></span>
//         </button>
//         <button className="settings-btn">
//           <span className="settings-icon"></span>
//         </button>
//       </div>
//     </div>
//   );
// };

// export default TradeAlertsTable;

// import { useEffect, useState } from "react";
// import "../DashboardSidebarComp/styles/historicalDataFlow.css";

// const API_BASE_URL = "https://valourwealthdjango-production.up.railway.app/";

// const apiPaths = {
//   "Large Caps": "api/alerts/large_caps/",
//   "Medium Caps": "api/alerts/medium_caps/",
//   "Small Caps": "api/alerts/small_caps/",
// };

// const TradeAlertsTable = ({ darkMode }) => {
//   const [activeTab, setActiveTab] = useState("Large Caps");
//   const [tableData, setTableData] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);

//   useEffect(() => {
//     const fetchData = async () => {
//       setLoading(true);
//       setError(null);
//       const url = `${API_BASE_URL}${apiPaths[activeTab]}`;

//       try {
//         const response = await fetch(url);
//         if (!response.ok) throw new Error(`HTTP error: ${response.status}`);
//         const data = await response.json();
//         setTableData(Array.isArray(data) ? data : []);
//       } catch (err) {
//         console.error("Fetch error:", err.message);
//         setError("Failed to load data. Please try again later.");
//         setTableData([]);
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchData();
//   }, [activeTab]);

//   return (
//     <div
//       className="container"
//       style={{
//         backgroundColor: darkMode ? "#1c1e20" : "#ffffff",
//         color: darkMode ? "#ffffff" : "#000000",
//         padding: "20px",
//       }}
//     >
//       <div className="theme-title">
//         <h2>ATS Irregular Activity Alerts</h2>
//       </div>

//       {/* Tabs */}
//       <ul className="nav nav-tabs gap-2 mt-4 historic-table">
//         {Object.keys(apiPaths).map((tab) => (
//           <li className="nav-item" key={tab}>
//             <button
//               className={`nav-link ${activeTab === tab ? "active" : ""}`}
//               onClick={() => setActiveTab(tab)}
//             >
//               {tab}
//             </button>
//           </li>
//         ))}
//       </ul>

//       {/* Table */}
//       <div className="table-responsive mt-3">
//         <table className="table table-bordered table_history">
//           <thead
//             className="table-primary"
//             style={{
//               backgroundColor: darkMode ? "#000000" : "#ffffff",
//               color: darkMode ? "#ffffff" : "#000000",
//               border: darkMode ? "1px solid #444" : "1px solid #ddd",
//             }}
//           >
//             <tr>
//               <th>TIME ENTERED</th>
//               <th>TICKER</th>
//               <th>COMPANY NAME</th>
//               <th>IRREGULAR VOLUME</th>
//               <th>PRICE DETECTED</th>
//             </tr>
//           </thead>
//           <tbody
//             style={{
//               backgroundColor: darkMode ? "#1c1e20" : "#ffffff",
//               color: darkMode ? "#ffffff" : "#1c1e20",
//               border: darkMode ? "1px solid #444" : "1px solid #ddd",
//             }}
//           >
//             {loading ? (
//               <tr>
//                 <td colSpan="5" className="text-center">
//                   Loading data...
//                 </td>
//               </tr>
//             ) : error ? (
//               <tr>
//                 <td colSpan="5" className="text-danger text-center">
//                   {error}
//                 </td>
//               </tr>
//             ) : tableData.length > 0 ? (
//               tableData.map((item, idx) => (
//                 <tr key={idx}>
//                   <td>{item.time_entered || "-"}</td>
//                   <td>{item.ticker || "-"}</td>
//                   <td>{item.company_name || "-"}</td>
//                   <td>{item.irregular_volume || "-"}</td>
//                   <td>{item.price_detected || "-"}</td>
//                 </tr>
//               ))
//             ) : (
//               <tr>
//                 <td colSpan="5" className="text-center">
//                   No data available.
//                 </td>
//               </tr>
//             )}
//           </tbody>
//         </table>
//       </div>
//     </div>
//   );
// };

// export default TradeAlertsTable;

import { useEffect, useState } from "react";
import { FaArrowTrendDown, FaArrowTrendUp } from "react-icons/fa6";
import "../DashboardSidebarComp/styles/historicalDataFlow.css"; // reuse same style

const API_BASE_URL = "https://valourwealthdjango-production.up.railway.app/";

const apiPaths = {
  up: {
    "Large Caps": "api/alerts/large_caps/",
    "Medium Caps": "api/alerts/medium_caps/",
    "Small Caps": "api/alerts/small_caps/",
  },
  down: {
    "Large Caps": "api/alerts/large_caps_down/",
    "Medium Caps": "api/alerts/medium_caps_down/",
    "Small Caps": "api/alerts/small_caps_down/",
  },
};

const TradeAlertsTable = ({ darkMode }) => {
  const [activeTab, setActiveTab] = useState("Large Caps");
  const [trend, setTrend] = useState("up");
  const [activeTrend, setActiveTrend] = useState("up");
  const [tableData, setTableData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [active, setActive] = useState(null);

  useEffect(() => {
    // const fetchData = async () => {
    //   setLoading(true);
    //   setError(null);
    //   const url = `${API_BASE_URL}${apiPaths[trend][activeTab]}`;

    //   try {
    //     const response = await fetch(url);
    //     if (!response.ok) throw new Error(`HTTP error: ${response.status}`);
    //     const data = await response.json();
    //     setTableData(Array.isArray(data) ? data : []);
    //   } catch (err) {
    //     console.error("Fetch error:", err.message);
    //     setError("Failed to load data.");
    //     setTableData([]);
    //   } finally {
    //     setLoading(false);
    //   }
    // };

    const fetchData = async () => {
      setLoading(true);
      setError(null);
      const timestamp = Date.now(); // 👈 bust cache
      const url = `${API_BASE_URL}${apiPaths[trend][activeTab]}?t=${timestamp}`;

      try {
        const response = await fetch(url, {
          headers: {
            "Cache-Control": "no-cache", // optional but helpful
          },
        });
        if (!response.ok) throw new Error(`HTTP error: ${response.status}`);
        const data = await response.json();
        setTableData(Array.isArray(data) ? data : []);
      } catch (err) {
        console.error("Fetch error:", err.message);
        setError("Failed to load data.");
        setTableData([]);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [activeTab, trend]);

  return (
    <div
      className="container"
      style={{
        backgroundColor: darkMode ? "#1c1e20" : "#ffffff",
        color: darkMode ? "#ffffff" : "#000000",
        padding: "20px",
      }}
    >
      <div className="theme-title">
        <h2>ATS Irregular Activity Alerts</h2>
      </div>

      {/* Tabs */}
      <ul className="nav nav-tabs gap-2 mt-4 historic-table">
        {Object.keys(apiPaths.up).map((tab) => (
          <li className="nav-item" key={tab}>
            <button
              className={`nav-link ${activeTab === tab ? "active" : ""}`}
              onClick={() => setActiveTab(tab)}
            >
              {tab}
            </button>
          </li>
        ))}

        {/* Trend Toggle */}

        <div className="trend-icons" style={{ display: "flex", gap: "10px" }}>
          <FaArrowTrendUp
            className="up-icon"
            style={{
              backgroundColor: active === "up" ? "green" : "grey",
              color: "black",
              padding: "10px",
              borderRadius: "5px",
              cursor: "pointer",
            }}
            onClick={() => {
              setTrend("up");
              setActiveTrend("up");
              setActive("up");
            }}
          />
          <FaArrowTrendDown
            className="down-icon"
            style={{
              backgroundColor: active === "down" ? "red" : "grey",
              color: active === "down" ? "white" : "black",
              padding: "10px",
              borderRadius: "5px",
              cursor: "pointer",
            }}
            onClick={() => {
              setTrend("down");
              setActiveTrend("down");
              setActive("down");
            }}
          />
        </div>
      </ul>

      {/* Table */}
      <div className="table-responsive mt-3">
        <table className="table table-bordered table_history">
          <thead
            className="table-primary"
            style={{
              backgroundColor: darkMode ? "#000000" : "#ffffff",
              color: darkMode ? "#ffffff" : "#000000",
              border: darkMode ? "1px solid #444" : "1px solid #ddd",
            }}
          >
            <tr>
              <th>TIME ENTERED</th>
              <th>TICKER</th>
              <th>COMPANY NAME</th>
              <th>IRREGULAR VOLUME</th>
              <th>PRICE DETECTED</th>
            </tr>
          </thead>
          <tbody
            style={{
              backgroundColor: darkMode ? "#1c1e20" : "#ffffff",
              color: darkMode ? "#ffffff" : "#1c1e20",
              border: darkMode ? "1px solid #444" : "1px solid #ddd",
            }}
          >
            {/* {loading ? (
              <tr>
                <td colSpan="5" className="text-center">
                  Loading...
                </td>
              </tr> */}
            {loading ? (
              [...Array(5)].map((_, rowIndex) => (
                <tr key={rowIndex}>
                  {[...Array(5)].map((_, colIndex) => (
                    <td key={colIndex}>
                      <div className="shimmer shimmer-line"></div>
                    </td>
                  ))}
                </tr>
              ))
            ) : error ? (
              <tr>
                <td colSpan="5" className="text-danger text-center">
                  {error}
                </td>
              </tr>
            ) : tableData.length > 0 ? (
              tableData.map((item, idx) => (
                <tr key={idx}>
                  <td>{item.time_entered || "-"}</td>
                  <td>{item.ticker || "-"}</td>
                  <td>{item.company_name || "-"}</td>
                  <td>{item.irregular_volume || "-"}</td>
                  <td>{item.price_detected || "-"}</td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="5" className="text-center">
                  No data available.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default TradeAlertsTable;
