import axios from "axios";
import { useEffect, useState } from "react";

const FeatureCardShimmer = ({ showVoteCount = true }) => {
  return (
    <div className="feature-card-shimmer">
      <div className="feature-card-content-shimmer">
        {showVoteCount && (
          <div className="vote-count-container-shimmer">
            <div className="vote-count-shimmer animate"></div>
            <div className="vote-label-shimmer animate"></div>
          </div>
        )}

        <div className="feature-details-shimmer">
          <div className="feature-status-container-shimmer">
            <div className="feature-status-shimmer animate"></div>
            {!showVoteCount && (
              <div className="feature-category-shimmer animate"></div>
            )}
          </div>
          <div className="feature-title-shimmer animate"></div>
          <div className="feature-description-shimmer">
            <div className="description-line animate"></div>
            <div className="description-line animate"></div>
            <div className="description-line short animate"></div>
          </div>

          {showVoteCount && (
            <div className="voting-progress-container-shimmer">
              <div className="voting-stats-shimmer animate"></div>
              <div className="progress-shimmer">
                <div className="progress-bar-shimmer animate"></div>
              </div>
              <div className="vote-btn-shimmer animate"></div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

// Loading Shimmer Component
const LoadingShimmer = ({ activeTab }) => {
  return (
    <div className="shimmer-container">
      <div className="shimmer-wrapper">
        <FeatureCardShimmer showVoteCount={activeTab === "active-voting"} />
        <FeatureCardShimmer showVoteCount={activeTab === "active-voting"} />
        <FeatureCardShimmer showVoteCount={activeTab === "active-voting"} />
      </div>
    </div>
  );
};

// Spinner Component for showing the loading animation
const Spinner = () => {
  return (
    <div className="spinner-overlay">
      <div className="spinner-box">
        <div className="circle-border">
          <div className="circle-core"></div>
        </div>
      </div>
    </div>
  );
};

function FeatureVotingTabs() {
  const [activeTab, setActiveTab] = useState("active-voting");
  const [activeVotingFeatures, setActiveVotingFeatures] = useState([]);
  const [pastFeatures, setPastFeatures] = useState([]);
  const [hasVotedMap, setHasVotedMap] = useState({});
  const [loading, setLoading] = useState(false); // Track loading state
  const accessToken = localStorage.getItem("accessToken");

  const API_BASE_URL = process.env.REACT_APP_API_URL?.endsWith("/")
    ? process.env.REACT_APP_API_URL
    : process.env.REACT_APP_API_URL + "/";
  const FEATURE_API_URL = `${API_BASE_URL}api/features/`;

  const fetchFeatures = async () => {
    setLoading(true); // Start loading
    try {
      const res = await axios.get(FEATURE_API_URL, {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      });

      const features = res.data;

      const active = features.filter(
        (feature) => feature.status === "Voting Open"
      );
      const past = features.filter((feature) => feature.status === "Closed");

      setActiveVotingFeatures(active);
      setPastFeatures(past);
    } catch (error) {
      console.error(
        "Error fetching features:",
        error.response?.data || error.message
      );
    } finally {
      setLoading(false); // End loading
    }
  };

  useEffect(() => {
    fetchFeatures();
  }, []);

  const calculateProgress = (current, total) => {
    return (current / total) * 100;
  };

  const handleTabChange = (tab) => {
    setActiveTab(tab);
  };

  const handleVote = async (featureId) => {
    if (hasVotedMap[featureId]) return;

    try {
      await axios.post(
        `${FEATURE_API_URL}${featureId}/vote/`,
        {},
        {
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
        }
      );

      setActiveVotingFeatures((prev) =>
        prev.map((feature) =>
          feature.id === featureId
            ? { ...feature, votes_count: feature.votes_count + 1 }
            : feature
        )
      );
      setHasVotedMap((prev) => ({ ...prev, [featureId]: true }));
    } catch (error) {
      if (error.response?.status === 400) {
        alert("You already voted for this feature.");
        setHasVotedMap((prev) => ({ ...prev, [featureId]: true }));
      } else {
        console.error("Vote failed:", error);
        alert("Failed to vote. Please try again.");
      }
    }
  };

  return (
    <div>
      {/* Tabs */}
      <div className="tabs-container">
        <div className="nav-tabs">
          <button
            className={`tab-button ${
              activeTab === "active-voting" ? "active" : ""
            }`}
            onClick={() => handleTabChange("active-voting")}
          >
            Active Voting
          </button>

          <button
            className={`tab-button ${
              activeTab === "past-features" ? "active" : ""
            }`}
            onClick={() => handleTabChange("past-features")}
          >
            Past Features
          </button>
        </div>
      </div>

      {/* Show Shimmer when loading */}
      {loading && <LoadingShimmer activeTab={activeTab} />}

      {/* Active Voting */}
      {!loading && activeTab === "active-voting" && (
        <div className="tab-content-voting">
          {activeVotingFeatures.length > 0 ? (
            activeVotingFeatures.map((feature) => (
              <div key={feature.id} className="feature-card">
                <div className="feature-card-content">
                  <div className="vote-count-container">
                    <div className="vote-count">{feature.votes_count || 0}</div>
                    <div className="vote-label">
                      {feature.votes_count === 1 ? "vote" : "votes"}
                    </div>
                  </div>

                  <div className="feature-details">
                    <div className="feature-status-container">
                      <span
                        className={`feature-status ${feature.status
                          .toLowerCase()
                          .replace(" ", "-")}`}
                      >
                        {feature.status}
                      </span>
                    </div>
                    <h2 className="feature-title">{feature.title}</h2>
                    <p className="feature-description">{feature.description}</p>

                    {feature.status === "Voting Open" && (
                      <div className="voting-progress-container">
                        <div className="voting-stats">
                          <span>
                            {feature.votes_count || 0} of {feature.votes_needed}{" "}
                            votes needed
                          </span>
                        </div>
                        <div className="progress">
                          <div
                            className="progress-bar"
                            role="progressbar"
                            style={{
                              width: `${calculateProgress(
                                feature.votes_count || 0,
                                feature.votes_needed
                              )}%`,
                            }}
                            aria-valuenow={feature.votes_count || 0}
                            aria-valuemin="0"
                            aria-valuemax={feature.votes_needed}
                          ></div>
                        </div>

                        <div className="vote-btn-container mt-5">
                          <button
                            className="btn btn-sm btn-outline-light"
                            onClick={() => handleVote(feature.id)}
                            disabled={hasVotedMap[feature.id]}
                          >
                            {hasVotedMap[feature.id] ? "Voted" : "Add Vote"}
                          </button>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            ))
          ) : (
            <p>No active voting features found.</p>
          )}
        </div>
      )}

      {/* Past Features */}
      {!loading && activeTab === "past-features" && (
        <div className="tab-content-voting">
          {pastFeatures.length > 0 ? (
            pastFeatures.map((feature) => (
              <div key={feature.id} className="feature-card">
                <div className="feature-card-content">
                  <div className="feature-details">
                    <div className="feature-status-container">
                      <span
                        className={`feature-status ${feature.status
                          .toLowerCase()
                          .replace(" ", "-")}`}
                      >
                        {feature.status}
                      </span>
                      <span className="feature-category">
                        {feature.category}
                      </span>
                    </div>
                    <h2 className="feature-title">{feature.title}</h2>
                    <p className="feature-description">{feature.description}</p>
                  </div>
                </div>
              </div>
            ))
          ) : (
            <p>No past features found.</p>
          )}
        </div>
      )}

      {/* Shimmer Styles */}
      <style>{`
        /* Shimmer Container */
        .shimmer-container {
          padding: 20px 0;
        }

        .shimmer-wrapper {
          width: 0px;
          animation: fullView 0.5s forwards linear;
        }

        /* Feature Card Shimmer */
        .feature-card-shimmer {
          background: #2a2a2a;
          border: 1px solid #3a3a3a;
          border-radius: 12px;
          padding: 20px;
          margin-bottom: 16px;
          position: relative;
          overflow: hidden;
        }

        .feature-card-content-shimmer {
          display: flex;
          gap: 16px;
        }

        /* Vote Count Shimmer */
        .vote-count-container-shimmer {
          display: flex;
          flex-direction: column;
          align-items: center;
          min-width: 60px;
        }

        .vote-count-shimmer {
          width: 40px;
          height: 32px;
          background: #3a3a3a;
          border-radius: 6px;
          margin-bottom: 4px;
        }

        .vote-label-shimmer {
          width: 35px;
          height: 12px;
          background: #3a3a3a;
          border-radius: 4px;
        }

        /* Feature Details Shimmer */
        .feature-details-shimmer {
          flex: 1;
        }

        .feature-status-container-shimmer {
          display: flex;
          gap: 8px;
          margin-bottom: 12px;
        }

        .feature-status-shimmer {
          width: 80px;
          height: 20px;
          background: #3a3a3a;
          border-radius: 12px;
        }

        .feature-category-shimmer {
          width: 60px;
          height: 20px;
          background: #3a3a3a;
          border-radius: 12px;
        }

        .feature-title-shimmer {
          width: 70%;
          height: 24px;
          background: #3a3a3a;
          border-radius: 6px;
          margin-bottom: 12px;
        }

        .feature-description-shimmer {
          margin-bottom: 16px;
        }

        .description-line {
          height: 14px;
          background: #3a3a3a;
          border-radius: 4px;
          margin-bottom: 6px;
          width: 100%;
        }

        .description-line.short {
          width: 60%;
        }

        /* Voting Progress Shimmer */
        .voting-progress-container-shimmer {
          margin-top: 16px;
        }

        .voting-stats-shimmer {
          width: 150px;
          height: 14px;
          background: #3a3a3a;
          border-radius: 4px;
          margin-bottom: 8px;
        }

        .progress-shimmer {
          width: 100%;
          height: 8px;
          background: #1a1a1a;
          border-radius: 4px;
          margin-bottom: 16px;
          overflow: hidden;
        }

        .progress-bar-shimmer {
          width: 35%;
          height: 100%;
          background: #3a3a3a;
          border-radius: 4px;
        }

        .vote-btn-shimmer {
          width: 80px;
          height: 32px;
          background: #3a3a3a;
          border-radius: 6px;
        }

        /* Animation */
        @keyframes fullView {
          100% {
            width: 100%;
          }
        }

        .animate {
          animation: shimmer 2s infinite;
          background: linear-gradient(
            90deg,
            #3a3a3a 0%,
            #4a4a4a 50%,
            #3a3a3a 100%
          );
          background-size: 200% 100%;
        }

        @keyframes shimmer {
          0% {
            background-position: -200% 0;
          }
          100% {
            background-position: 200% 0;
          }
        }
      `}</style>
    </div>
  );
}

export default FeatureVotingTabs;
