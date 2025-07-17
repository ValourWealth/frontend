import axios from "axios";
import moment from "moment";
import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const TradingChallenges = () => {
  const [activeTab, setActiveTab] = useState("Active Challenges");
  const [challenges, setChallenges] = useState([]);
  const [loading, setLoading] = useState(true);
  const [leaderboards, setLeaderboards] = useState({});
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [performanceData, setPerformanceData] = useState(null);
  const [joinedChallenges, setJoinedChallenges] = useState([]);
  const [recentBadges, setRecentBadges] = useState([]);

  const navigate = useNavigate();

  useEffect(() => {
    fetchChallenges();
    fetchMyRecentBadges();
  }, []);

  const fetchChallenges = async () => {
    try {
      const token = localStorage.getItem("accessToken");
      const response = await axios.get(
        `https://backend-production-1e63.up.railway.app/api/challenges/`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      setChallenges(response.data);
      const joined = response.data.filter((c) => c.is_joined).map((c) => c.id);
      setJoinedChallenges(joined);
      setLoading(false);
    } catch (error) {
      console.error("Error fetching challenges:", error);
      setLoading(false);
    }
  };
  const fetchMyRecentBadges = async () => {
    try {
      const token = localStorage.getItem("accessToken");
      const res = await axios.get(
        `https://backend-production-1e63.up.railway.app/api/my-recent-badges/`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      setRecentBadges(res.data);
    } catch (err) {
      console.error("Failed to fetch recent badges", err);
    }
  };

  const fetchLeaderboard = async (challengeId) => {
    try {
      const token = localStorage.getItem("accessToken");
      const response = await axios.get(
        `https://backend-production-1e63.up.railway.app/api/challenges/${challengeId}/leaderboard/`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      setLeaderboards((prev) => ({
        ...prev,
        [challengeId]: response.data.slice(0, 3),
      }));
    } catch (error) {
      console.error("Error fetching leaderboard:", error);
    }
  };

  const joinChallenge = async (challengeId) => {
    try {
      const token = localStorage.getItem("accessToken");
      await axios.post(
        `https://backend-production-1e63.up.railway.app/api/challenges/${challengeId}/join/`,
        // { user: "user_data" },
        {},
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      alert("Successfully joined the challenge!");
      setJoinedChallenges((prev) => [...prev, challengeId]);

      // Redirect to challenge detail page after joining
      navigate(`/challenges/${challengeId}`);
    } catch (error) {
      console.error("Error joining challenge:", error);
      alert("Failed to join challenge.");
    }
  };

  const viewYourPerformance = async (challengeId) => {
    try {
      const token = localStorage.getItem("accessToken");
      const response = await axios.get(
        `https://backend-production-1e63.up.railway.app/api/challenges/${challengeId}/my-performance/`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      setPerformanceData(response.data);
      setIsModalOpen(true);
    } catch (error) {
      console.error("Error fetching performance:", error);
    }
  };

  const getFilteredChallenges = () => {
    const today = moment();
    if (activeTab === "Active Challenges") {
      return challenges.filter(
        (challenge) =>
          moment(challenge.start_date).isSameOrBefore(today) &&
          moment(challenge.end_date).isSameOrAfter(today)
      );
    } else if (activeTab === "Past Challenges") {
      return challenges.filter((challenge) =>
        moment(challenge.end_date).isBefore(today)
      );
    }
    return [];
  };

  if (loading) {
    return (
      <div className="trading-challenges-container">
        <div className="shimmer-content">
          {/* Header Shimmer */}
          <div className="challenges-header">
            <div className="trophy-icon-container">
              <div
                className=""
                style={{ height: "30px", width: "30px", borderRadius: "50%" }}
              ></div>
            </div>
            <div>
              <div
                className=" mb-2"
                style={{ height: "32px", width: "300px", borderRadius: "4px" }}
              ></div>
              <div
                className=""
                style={{ height: "16px", width: "400px", borderRadius: "4px" }}
              ></div>
            </div>
          </div>

          {/* Tabs Shimmer */}
          <div className="tabs-container">
            <div className="nav-tabs">
              <div
                className=""
                style={{
                  height: "40px",
                  width: "150px",
                  borderRadius: "6px",
                  marginRight: "10px",
                }}
              ></div>
              <div
                className=""
                style={{ height: "40px", width: "130px", borderRadius: "6px" }}
              ></div>
            </div>
          </div>

          {/* Challenge Cards Shimmer */}
          <div className="challenges-list">
            {[...Array(3)].map((_, index) => (
              <div key={index} className="challenge-card">
                <div className="challenge-main">
                  {/* Challenge Header Shimmer */}
                  <div className="challenge-header">
                    <div className="challenge-icon">
                      <div
                        className=""
                        style={{
                          height: "30px",
                          width: "30px",
                          borderRadius: "50%",
                        }}
                      ></div>
                    </div>
                    <div className="challenge-title-section">
                      <div
                        className=" mb-2"
                        style={{
                          height: "24px",
                          width: "250px",
                          borderRadius: "4px",
                        }}
                      ></div>
                      <div
                        className=" mb-1"
                        style={{
                          height: "16px",
                          width: "350px",
                          borderRadius: "4px",
                        }}
                      ></div>
                      <div
                        className=""
                        style={{
                          height: "16px",
                          width: "280px",
                          borderRadius: "4px",
                        }}
                      ></div>
                    </div>
                  </div>

                  {/* Challenge Details Shimmer */}
                  <div className="challenge-details">
                    {[...Array(3)].map((_, i) => (
                      <div key={i} className="detail-item">
                        <div
                          className=""
                          style={{
                            height: "20px",
                            width: "20px",
                            borderRadius: "50%",
                          }}
                        ></div>
                        <div className="detail-content">
                          <div
                            className=" mb-1"
                            style={{
                              height: "14px",
                              width: "80px",
                              borderRadius: "4px",
                            }}
                          ></div>
                          <div
                            className=""
                            style={{
                              height: "16px",
                              width: "120px",
                              borderRadius: "4px",
                            }}
                          ></div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Challenge Actions Shimmer */}
                <div className="challenge-actions">
                  <div
                    className=" mb-2"
                    style={{
                      height: "40px",
                      width: "180px",
                      borderRadius: "6px",
                    }}
                  ></div>
                  <div
                    className=""
                    style={{
                      height: "40px",
                      width: "130px",
                      borderRadius: "6px",
                    }}
                  ></div>
                </div>

                {/* Leaderboard Shimmer */}
                <div className="challenge-leaderboard">
                  <div className="leaderboard-header">
                    <div
                      className=" mb-3"
                      style={{
                        height: "20px",
                        width: "150px",
                        borderRadius: "4px",
                      }}
                    ></div>
                  </div>

                  <div className="leaderboard-entries">
                    {[...Array(3)].map((_, i) => (
                      <div key={i} className="leaderboard-entry">
                        <div
                          className=""
                          style={{
                            height: "20px",
                            width: "20px",
                            borderRadius: "4px",
                          }}
                        ></div>
                        <div
                          className=""
                          style={{
                            height: "30px",
                            width: "30px",
                            borderRadius: "50%",
                          }}
                        ></div>
                        <div
                          className=""
                          style={{
                            height: "16px",
                            width: "100px",
                            borderRadius: "4px",
                          }}
                        ></div>
                        <div
                          className=""
                          style={{
                            height: "16px",
                            width: "60px",
                            borderRadius: "4px",
                          }}
                        ></div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="trading-challenges-container">
      <div className="challenges-header">
        <div className="trophy-icon-container">
          <i className="bi bi-trophy"></i>
        </div>
        <div>
          <h2 className="challenges-title">Private Trading Challenges</h2>
          <p className="challenges-subtitle">
            Compete with fellow platinum members in exclusive trading
            competitions
          </p>
        </div>
      </div>

      <div className="tabs-container">
        <div className="nav-tabs">
          <button
            className={`tab-button ${
              activeTab === "Active Challenges" ? "active" : ""
            }`}
            onClick={() => setActiveTab("Active Challenges")}
          >
            Active Challenges
          </button>
          <button
            className={`tab-button ${
              activeTab === "Past Challenges" ? "active" : ""
            }`}
            onClick={() => setActiveTab("Past Challenges")}
          >
            Past Challenges
          </button>
        </div>
      </div>

      <div className="challenges-list">
        {getFilteredChallenges().map((challenge) => (
          <div
            key={challenge.id}
            className="challenge-card"
            onMouseEnter={() => {
              if (!leaderboards[challenge.id]) {
                fetchLeaderboard(challenge.id);
              }
            }}
          >
            <div className="challenge-main">
              <div className="challenge-header">
                <div className="challenge-icon">
                  <i className="bi bi-trophy"></i>
                </div>
                <div className="challenge-title-section">
                  <h3 className="challenge-title">{challenge.title}</h3>
                  <p className="challenge-description">
                    {challenge.description}
                  </p>
                </div>
              </div>

              <div className="challenge-details">
                <div className="detail-item">
                  <i className="bi bi-calendar-event"></i>
                  <div className="detail-content">
                    <div className="detail-label">Start Date</div>
                    <div className="detail-value">
                      {moment(challenge.start_date).format("MMMM D, YYYY")}
                    </div>
                  </div>
                </div>

                <div className="detail-item">
                  <i className="bi bi-calendar-event"></i>
                  <div className="detail-content">
                    <div className="detail-label">End Date</div>
                    <div className="detail-value">
                      {moment(challenge.end_date).format("MMMM D, YYYY")}
                    </div>
                  </div>
                </div>

                <div className="detail-item">
                  <i className="bi bi-people"></i>
                  <div className="detail-content">
                    <div className="detail-label">Participants</div>
                    <div className="detail-value">
                      {challenge.participants_count} members
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="challenge-actions">
              <Link to={`/challenges/${challenge.id}`}>
                <button className="action-button joined">
                  View Challenge Details
                </button>
              </Link>

              {joinedChallenges.includes(challenge.id) ? (
                <button className="action-button joined" disabled>
                  Joined
                </button>
              ) : (
                <button
                  className="action-button"
                  onClick={() => joinChallenge(challenge.id)}
                >
                  Join Challenge
                </button>
              )}
            </div>

            {/* Current Leaderboard */}
            {leaderboards[challenge.id] &&
              leaderboards[challenge.id].length > 0 && (
                <div className="challenge-leaderboard">
                  <div className="leaderboard-header">
                    <h4 className="leaderboard-title">Current Leaderboard</h4>
                    <div className="info-icon">
                      <i className="bi bi-info-circle"></i>
                    </div>
                  </div>

                  <div className="leaderboard-entries">
  {leaderboards[challenge.id].map((entry, index) => (
    <div key={index} className="leaderboard-entry">
      {/* Rank */}
      <div className="entry-rank">{index + 1}</div>

      {/* Avatar */}
      <div className="entry-avatar">
        {entry.user_profile?.profile_photo_url ? (
          <img
            src={entry.user_profile.profile_photo_url}
            alt="Profile"
            style={{
              width: "30px",
              height: "30px",
              borderRadius: "50%",
              objectFit: "cover",
            }}
          />
        ) : (
          <div
            style={{
              width: "30px",
              height: "30px",
              borderRadius: "50%",
              backgroundColor: "#6c757d",
            }}
          ></div>
        )}
      </div>

      {/* Name */}
      <div className="entry-name">
        {entry.user_profile?.username || "Anonymous"}
      </div>

      
    </div>
  ))}
</div>

                </div>
              )}
            {/* {recentBadges.length > 0 && (
              <div className="bg-green-100 border border-green-400 text-green-800 px-4 py-2 mb-4 rounded">
                🎉 <strong>Congratulations!</strong> You've recently unlocked a
                badge:
                <ul className="list-disc list-inside mt-1">
                  {recentBadges.map((badge) => (
                    <li key={badge.id}>
                      {badge.name} —{" "}
                      <Link to="" className="text-blue-600 underline">
                        View in NFT Marketplace →
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            )} */}
            {/* 🔥 Show badge inside this challenge card only if linked_challenge matches */}
            {recentBadges
              .filter((badge) => badge.linked_challenge === challenge.id)
              .map((badge) => (
                <div
                  key={badge.id}
                  className="bg-green-100 border border-green-400 text-green-800 px-4 py-2 mt-3 rounded text-sm"
                >
                  🎉 <strong>Congratulations!</strong> You've unlocked:{" "}
                  <strong>{badge.name}</strong> —{" "}
                  <Link to="" className="text-blue-700 underline">
                    View in NFT Marketplace →
                  </Link>
                </div>
              ))}
          </div>
        ))}
      </div>

      {/* Modal for performance */}
      {isModalOpen && performanceData && (
        <div className="modal-overlay">
          <div className="modal-content">
            <h3>Your Performance Details</h3>
            <p>
              <strong>Username:</strong> {performanceData.username}
            </p>
            <p>
              <strong>Starting Value:</strong> ${performanceData.starting_value}
            </p>
            <p>
              <strong>Current Value:</strong> ${performanceData.current_value}
            </p>
            <p>
              <strong>Performance:</strong>{" "}
              {parseFloat(performanceData.performance).toFixed(2)}%
            </p>

            <button
              className="btn btn-secondary"
              onClick={() => setIsModalOpen(false)}
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default TradingChallenges;
