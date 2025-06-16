// import React, { useState } from 'react';

// const TraderLeaderboard = () => {
//   const [activeTab, setActiveTab] = useState('Performance');

//   // Sample data for the leaderboard
//   const traders = [
//     {
//       id: 1,
//       name: 'Alex Thompson',
//       type: 'Forex Trader',
//       performance: '+42.8%',
//       rank: 1,
//       status: 'Elite'
//     },
//     {
//       id: 2,
//       name: 'Maria Rodriguez',
//       type: 'Crypto Trader',
//       performance: '+38.5%',
//       rank: 2,
//       status: 'Platinum'
//     },
//     {
//       id: 3,
//       name: 'James Wilson',
//       type: 'Stocks Trader',
//       performance: '+35.2%',
//       rank: 3,
//       status: 'Platinum'
//     },
//     {
//       id: 4,
//       name: 'Sophia Chen',
//       type: 'Commodities Trader',
//       performance: '+31.7%',
//       rank: 4,
//       status: 'Platinum'
//     },
//     {
//       id: 5,
//       name: 'David Kim',
//       type: 'Forex Trader',
//       performance: '+28.9%',
//       rank: 5,
//       status: 'Platinum'
//     },
//     {
//       id: 6,
//       name: 'Emma Johnson',
//       type: 'Stocks Trader',
//       performance: '+26.4%',
//       rank: 6,
//       status: 'Platinum'
//     }
//   ];

//   const handleTabClick = (tab) => {
//     setActiveTab(tab);
//   };

//   return (
//     <div className="leaderboard-container">
//       <div className="leaderboard-header">
//         <div className="trophy-icon-container">
//           <i className="bi bi-trophy"></i>
//         </div>
//         <div>
//           <h2 className="leaderboard-title">Trader Leaderboard</h2>
//           <p className="leaderboard-subtitle">See how you rank among other platinum members</p>
//         </div>
//       </div>

//       <div className="leaderboard-card">
//         <div className="leaderboard-card-header">
//           <div>
//             <h3 className="leaderboard-card-title">Trader Leaderboard</h3>
//             <p className="leaderboard-card-subtitle">Top performing platinum members this month</p>
//           </div>
//           <div className="trophy-icon-circle">
//             <i className="bi bi-trophy"></i>
//           </div>
//         </div>

//         <div className="tab-container">
//           <div className="">
//             <button
//               className={`tab-button ${activeTab === 'Performance' ? 'active' : ''}`}
//               onClick={() => handleTabClick('Performance')}
//             >
//               Performance
//             </button>
//             {/* <button
//               className={`tab-button ${activeTab === 'Consistency' ? 'active' : ''}`}
//               onClick={() => handleTabClick('Consistency')}
//             >
//               Consistency
//             </button> */}
//             {/* <button
//               className={`tab-button ${activeTab === 'Historical' ? 'active' : ''}`}
//               onClick={() => handleTabClick('Historical')}
//             >
//               Historical
//             </button> */}
//           </div>
//         </div>

//         <div className="leaderboard-list">
//           {traders.map((trader) => (
//             <div key={trader.id} className="trader-row">
//               <div className="trader-info">
//                 <div className="rank-circle">{trader.rank}</div>
//                 <div className="avatar-circle"></div>
//                 <div className="trader-details">
//                   <div className="trader-name">{trader.name}</div>
//                   <div className="trader-type">{trader.type}</div>
//                 </div>
//               </div>
//               <div className="trader-stats">
//                 <span className={`trader-status ${trader.status.toLowerCase()}`}>
//                   {trader.status}
//                 </span>
//                 <span className="trader-performance">
//                   <i className="bi bi-graph-up-arrow"></i> {trader.performance}
//                 </span>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default TraderLeaderboard;

import React, { useState, useEffect } from "react";
import axios from "axios";

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
        "https://valourwealthdjango-production.up.railway.app/api/leaderboard/overall/",
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
          {loading ? (
            Array.from({ length: 5 }).map((_, idx) => (
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
          ) : (
            traders.map((trader, index) => (
              <div key={index} className="trader-row">
                <div className="trader-info">
                  <div className="rank-circle">{index + 1}</div>
                  <div className="avatar-circle">
                    {trader.profile_photo_url ? (
                      <img
                        src={trader.profile_photo_url}
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
                  <span className={`trader-status ${trader.badge.toLowerCase()}`}>
                    {trader.badge}
                  </span>
                  <span className="trader-performance">
                    <i className="bi bi-graph-up-arrow"></i> +
                    {parseFloat(trader.total_gain_loss_percent).toFixed(2)}%
                  </span>
                </div>
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
};

export default TraderLeaderboard;
