import { useEffect, useState } from "react";
import { FaArrowTrendDown, FaArrowTrendUp } from "react-icons/fa6";
import "../DashboardSidebarComp/styles/historicalDataFlow.css";

const API_BASE_URL = "https://backend-production-1e63.up.railway.app/";

const HistoricalDataFlow = ({ darkMode }) => {
  const [activeTab, setActiveTab] = useState("largeCaps");
  const [trend, setTrend] = useState("up");
  const [tableData, setTableData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [active, setActive] = useState("up");

  const apiPaths = {
    up: {
      largeCaps: "api/Large_caps/",
      mediumCaps: "api/Medium_caps/",
      smallCaps: "api/Small_caps/",
    },
    down: {
      largeCaps: "api/large_caps_down/",
      mediumCaps: "api/medium_caps_down/",
      smallCaps: "api/small_caps_down/",
    },
  };

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      setError(null);

      const url = `${API_BASE_URL}${apiPaths[trend][activeTab]}`;

      try {
        const response = await fetch(url);
        if (!response.ok) throw new Error(`HTTP error: ${response.status}`);

        const data = await response.json();
        setTableData(Array.isArray(data) ? data : []);
      } catch (err) {
        console.error("Fetch error:", err.message);
        setError("Failed to load data. Please try again later.");
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
        <h2>Historic ATS Gainers & Losers</h2>
      </div>

      <ul className="nav nav-tabs gap-2 mt-4 historic-table">
        {["largeCaps", "mediumCaps", "smallCaps"].map((tab) => (
          <li className="nav-item" key={tab}>
            <button
              className={`nav-link ${activeTab === tab ? "active" : ""}`}
              onClick={() => setActiveTab(tab)}
            >
              {tab
                .replace("Caps", " Caps")
                .replace(/^./, (c) => c.toUpperCase())}
            </button>
          </li>
        ))}

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
              setActive("down");
            }}
          />
        </div>
      </ul>

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
              <th>TICKER</th>
              <th>FROM</th>
              <th>TO</th>
              <th>IRREGULAR VOL</th>
              <th>PERCENT CHANGE</th>
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
                <td colSpan="5" className="text-center">Loading data...</td>
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
                <td colSpan="5" className="text-center text-danger">
                  {error}
                </td>
              </tr>
            ) : tableData.length > 0 ? (
              tableData.map((item, idx) => (
                <tr key={idx}>
                  <td>{item.ticker || "-"}</td>
                  <td>
                    {item.from_price && item.from_time ? (
                      <>
                        ${item.from_price} <br />
                        <small>{item.from_time}</small>
                      </>
                    ) : (
                      "-"
                    )}
                  </td>
                  <td>
                    {item.to_price && item.to_time ? (
                      <>
                        ${item.to_price} <br />
                        <small>{item.to_time}</small>
                      </>
                    ) : (
                      "-"
                    )}
                  </td>
                  <td>
                    <span
                      className={`badge ${
                        trend === "up" ? "bg-success" : "bg-danger"
                      }`}
                    >
                      {item.irregular_vol || "x"}
                    </span>
                  </td>
                  <td>
                    <span
                      className={
                        parseFloat(item.percent_change) >= 0
                          ? "text-success"
                          : "text-danger"
                      }
                    >
                      {parseFloat(item.percent_change) >= 0 ? "+" : ""}
                      {isNaN(parseFloat(item.percent_change))
                        ? "NaN%"
                        : `${parseFloat(item.percent_change).toFixed(2)}%`}
                    </span>

                    <br />
                    <small>{item.duration ?? "-"}</small>
                  </td>
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

export default HistoricalDataFlow;
