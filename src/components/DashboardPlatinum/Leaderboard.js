import axios from "axios";
import { useEffect, useState } from "react";

const TraderLeaderboard = () => {
  const [activeTab, setActiveTab] = useState("Performance");
  const [traders, setTraders] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchLeaderboard();
  }, []);

  const fetchLeaderboard = async () => {
    try {
      const token = localStorage.getItem("accessToken");
      const response = await axios.get(
        "https://backend-production-1e63.up.railway.app/api/overall-leaderboard/",
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      setTraders(response.data);
    } catch (error) {
      console.error("Error fetching leaderboard:", error);
    } finally {
      setLoading(false);
    }
  };

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  return (
    <div className="leaderboard-container">
      <div className="leaderboard-header">
        <div className="trophy-icon-container">
          <i className="bi bi-trophy"></i>
        </div>
        <div>
          <h2 className="leaderboard-title">Trader Leaderboard</h2>
          <p className="leaderboard-subtitle">
            See how you rank among other platinum members
          </p>
        </div>
      </div>

      <div className="leaderboard-card">
        <div className="leaderboard-card-header">
          <div>
            <h3 className="leaderboard-card-title">Trader Leaderboard</h3>
            <p className="leaderboard-card-subtitle">
              Top performing platinum members this month
            </p>
          </div>
          <div className="trophy-icon-circle">
            <i className="bi bi-trophy"></i>
          </div>
        </div>

        <div className="tab-container">
          <div>
            <button
              className={`tab-button ${
                activeTab === "Performance" ? "active" : ""
              }`}
              onClick={() => handleTabClick("Performance")}
            >
              Performance
            </button>
          </div>
        </div>

        <div className="leaderboard-list">
          {loading
            ? Array.from({ length: 5 }).map((_, idx) => (
                <div className="trader-row shimmer-card" key={idx}>
                  <div className="trader-info">
                    <div className=" rank-circle"></div>
                    <div className=" avatar-circle"></div>
                    <div className="trader-details">
                      <div className="  mb-2"></div>
                      <div className=""></div>
                    </div>
                  </div>
                  <div className="trader-stats">
                    <div className="  mb-2"></div>
                  </div>
                </div>
              ))
            : traders.map((trader, index) => (
                <div key={index} className="trader-row">
                  <div className="trader-info">
                    <div className="rank-circle">{index + 1}</div>
                    <div className="avatar-circle">
                      {trader.profile?.profile_photo_url ? (
                        <img
                          src={trader.profile.profile_photo_url}
                          alt="Profile"
                          style={{
                            width: "40px",
                            height: "40px",
                            borderRadius: "50%",
                            objectFit: "cover",
                          }}
                        />
                      ) : (
                        <div
                          style={{
                            width: "40px",
                            height: "40px",
                            borderRadius: "50%",
                            backgroundColor: "#6c757d",
                          }}
                        ></div>
                      )}
                    </div>
                    <div className="trader-details">
                      <div className="trader-name">{trader.username}</div>
                      <div className="trader-type">Platinum Trader</div>
                    </div>
                  </div>
                  <div className="trader-stats">
                    <span
                      className={`trader-status ${
                        trader.badge ? trader.badge.toLowerCase() : ""
                      }`}
                    >
                      {trader.badge || "No Badge"}
                    </span>

                    {/* <span
                      className={`trader-status ${trader.badge.toLowerCase()}`}
                    >
                      {trader.badge}
                    </span> */}
                    <span className="trader-performance">
                      <i className="bi bi-graph-up-arrow"></i> +
                      {/* {parseFloat(trader.total_gain_loss_percent).toFixed(2)}% */}
                      <i className="bi bi-graph-up-arrow"></i>{" "}
                      {trader.total_score} pts
                    </span>
                  </div>
                </div>
              ))}
        </div>
      </div>
    </div>
  );
};

export default TraderLeaderboard;
