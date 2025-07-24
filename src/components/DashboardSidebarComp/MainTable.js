import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom"; // ⬅️ Add this
import "../DashboardSidebarComp/styles/mainTable.css";

const API_BASE_URL = "https://backend-production-1e63.up.railway.app/";

const apiPaths = {
  intraday: {
    up: {
      large: "api/intraday/large_caps/",
      medium: "api/intraday/medium_caps/",
      small: "api/intraday/small_caps/",
    },
    down: {
      large: "api/intraday/large_caps_down/",
      medium: "api/intraday/medium_caps_down/",
      small: "api/intraday/small_caps_down/",
    },
  },
  weekly: {
    up: {
      large: "api/weekly/large_caps/",
      medium: "api/weekly/medium_caps/",
      small: "api/weekly/small_caps/",
    },
    down: {
      large: "api/weekly/large_caps_down/",
      medium: "api/weekly/medium_caps_down/",
      small: "api/weekly/small_caps_down/",
    },
  },
};

const MainTable = () => {
  const [activeTab, setActiveTab] = useState("intraday");
  const [activeCapSize, setActiveCapSize] = useState("large");
  const [trend, setTrend] = useState("up");
  const [tableData, setTableData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      setError(null);

      try {
        const url = `${API_BASE_URL}${apiPaths[activeTab]?.[trend]?.[activeCapSize]}`;
        if (!url) throw new Error("Invalid tab or cap selection");

        const res = await fetch(url);
        if (!res.ok) throw new Error("API failed");

        const data = await res.json();
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
  }, [activeTab, activeCapSize, trend]);

  const getNewsSentimentClass = (value) => {
    if (value > 0) return "bg-success bg-opacity-25 text-success";
    if (value < 0) return "bg-danger bg-opacity-25 text-danger";
    return "bg-secondary bg-opacity-25 text-secondary";
  };

  const getAIScoreClass = (score) => {
    const numScore = parseInt(score);
    if (numScore >= 80) return "bg-primary";
    if (numScore >= 60) return "bg-info";
    if (numScore >= 40) return "bg-warning";
    return "bg-secondary";
  };

  return (
    <div className="container px-4 py-4">
      <div className="mb-4">
        <h1 className="h3 mb-3">Stocks Performance Summary</h1>

        {/* Tab Selection */}
        <div className="d-flex justify-content-between align-items-center mb-3">
          <ul className="nav nav-tabs gap-2 mt-4 historic-table">
            <li className="nav-item nav-intradey">
              <button
                className={`nav-link active ${
                  activeTab === "intraday" ? "active" : ""
                }`}
                onClick={() => setActiveTab("intraday")}
              >
                Intraday Activity
              </button>
            </li>
            <li className="nav-item nav-intradey">
              <button
                className={`nav-link ${activeTab === "weekly" ? "active" : ""}`}
                onClick={() => setActiveTab("weekly")}
              >
                Weekly Activity
              </button>
            </li>
          </ul>
        </div>

        {/* <div className="text-muted small mb-3">Live Updated</div> */}

        {/* Market Cap Tabs */}
        <div className="nav nav-tabs gap-2 mt-4 historic-table">
          <ul className="nav nav-pills cap-nav" style={{ border: "none" }}>
            <li className="nav-item">
              <button
                className={`cap-btn ${
                  activeCapSize === "large" ? "active" : ""
                }`}
                onClick={() => setActiveCapSize("large")}
              >
                Large Caps
              </button>
            </li>
            <li className="nav-item">
              <button
                className={`cap-btn ${
                  activeCapSize === "medium" ? "active" : ""
                }`}
                onClick={() => setActiveCapSize("medium")}
              >
                Medium Caps
              </button>
            </li>
            <li className="nav-item">
              <button
                className={`cap-btn ${
                  activeCapSize === "small" ? "active" : ""
                }`}
                onClick={() => setActiveCapSize("small")}
              >
                Small Caps
              </button>
            </li>
          </ul>
        </div>

        {/* Trend Buttons */}
        <div
          className="d-flex gap-1 align-items-center mb-3"
          style={{ justifyContent: "end" }}
        >
          <button
            className={`btn ${
              trend === "up" ? "btn-success" : "btn-outline-secondary"
            }`}
            onClick={() => setTrend("up")}
          >
            <i className="bi bi-arrow-up"></i>
          </button>
          <button
            className={`btn ${
              trend === "down" ? "btn-danger" : "btn-outline-secondary"
            }`}
            onClick={() => setTrend("down")}
          >
            <i className="bi bi-arrow-down"></i>
          </button>
        </div>
      </div>

      {/* Table */}
      <div
        className="table-responsive table_history"
        style={{ border: "none" }}
      >
        <table className="table table-hover stocks-table">
          <thead className="bg-primary text-white">
            <tr>
              <th>TICKER</th>
              <th>SHARE PRICE</th>
              <th>PERFORMANCE</th>
              <th>CHANGE</th>
              <th>NEWS SENTIMENT</th>
              <th>AI SCORE</th>
              <th>DARK POOL ACTIVITY</th>
              <th>CALL RATIO</th>
              <th>MARKET CAP</th>
              <th>SHARE VOLUME</th>
            </tr>
          </thead>
          <tbody>
            {loading ? (
              [...Array(5)].map((_, i) => (
                <tr key={i}>
                  {Array(10)
                    .fill(0)
                    .map((_, j) => (
                      <td key={j}>
                        <div className="shimmer shimmer-line"></div>
                      </td>
                    ))}
                </tr>
              ))
            ) : error ? (
              <tr>
                <td colSpan="10" className="text-center text-danger">
                  {error}
                </td>
              </tr>
            ) : tableData.length > 0 ? (
              tableData.map((stock, index) => (
                <tr key={index}>
                  <td className="fw-bold">{stock.ticker}</td>
                  <td>{stock.live_price}</td>
                  <td className="text-success fw-medium">
                    {stock.performance_percent}
                  </td>
                  <td className="text-success fw-medium">{stock.change}</td>
                  <td>
                    <span
                      className={`sentiment-pill ${getNewsSentimentClass(
                        stock.sentiment
                      )}`}
                    >
                      {parseInt(stock.sentiment) > 0
                        ? `+${stock.sentiment}`
                        : stock.sentiment}
                    </span>
                  </td>
                  <td>
                    <span
                      className={`ai-score-pill badge ${getAIScoreClass(
                        stock.ai_score
                      )}`}
                    >
                      {stock.ai_score}
                    </span>
                  </td>
                  <td className="text-success fw-medium">{stock.dark_pool}</td>
                  <td>{stock.call_ratio}</td>
                  <td>{stock.market_cap}</td>
                  <td>{stock.share_volume}</td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="10" className="text-center">
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

export default MainTable;
