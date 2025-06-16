import axios from "axios";
import { useEffect, useState } from "react";

const ExclusiveWebinars = () => {
  const [activeTab, setActiveTab] = useState("Upcoming Webinars");
  const [webinars, setWebinars] = useState([]);
  const [recordings, setRecordings] = useState([]);
  const [loading, setLoading] = useState(true);
  const accessToken = localStorage.getItem("accessToken");
  const API_URL = `${process.env.REACT_APP_API_URL}api/webinars/`;

  useEffect(() => {
    const fetchWebinars = async () => {
      setLoading(true);
      try {
        const res = await axios.get(API_URL, {
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
        });
        const upcoming = res.data.filter((w) => w.status === "Upcoming");
        const recorded = res.data.filter((w) => w.status === "Outdated");
        setWebinars(upcoming);
        setRecordings(recorded);
      } catch (err) {
        console.error("Failed to fetch webinars:", err);
      } finally {
        setLoading(false);
      }
    };
    fetchWebinars();
  }, []);

  const handleRegister = async (id) => {
    try {
      const res = await axios.post(
        `${API_URL}${id}/register/`,
        {},
        {
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
        }
      );

      if (res.data.success) {
        const updated = webinars.map((w) =>
          w.id === id
            ? {
                ...w,
                registered_count: res.data.registered_count,
                already_registered: true,
              }
            : w
        );
        setWebinars(updated);
      } else {
        alert(res.data.message);
      }
    } catch (err) {
      console.error("Failed to register:", err);
    }
  };

  const handleTabChange = (tab) => setActiveTab(tab);

  // Shimmer Component
  const WebinarShimmer = () => (
    <div className="webinar-card">
      {/* Webinar Image Shimmer */}
      <div
        className="shimmer-block mb-3"
        style={{ height: "180px", width: "100%", borderRadius: "8px" }}
      ></div>

      {/* Webinar Header Shimmer */}
      <div className="webinar-header">
        <div
          className="shimmer-block mb-2"
          style={{ height: "24px", width: "80%", borderRadius: "4px" }}
        ></div>
        <div
          className="shimmer-block"
          style={{ height: "20px", width: "80px", borderRadius: "12px" }}
        ></div>
      </div>

      {/* Description Shimmer */}
      <div
        className="shimmer-block mb-2"
        style={{ height: "16px", width: "100%", borderRadius: "4px" }}
      ></div>
      <div
        className="shimmer-block mb-3"
        style={{ height: "16px", width: "75%", borderRadius: "4px" }}
      ></div>

      {/* Presenter Info Shimmer */}
      <div className="presenter-info">
        <div
          className="shimmer-block"
          style={{ height: "16px", width: "150px", borderRadius: "4px" }}
        ></div>
      </div>

      {/* Webinar Details Shimmer */}
      <div className="webinar-details">
        <div className="detail-row">
          <div className="detail-item">
            <div
              className="shimmer-block"
              style={{ height: "16px", width: "100px", borderRadius: "4px" }}
            ></div>
          </div>
          <div className="detail-item">
            <div
              className="shimmer-block"
              style={{ height: "16px", width: "80px", borderRadius: "4px" }}
            ></div>
          </div>
        </div>
        <div className="detail-row">
          <div className="detail-item">
            <div
              className="shimmer-block"
              style={{ height: "16px", width: "120px", borderRadius: "4px" }}
            ></div>
          </div>
        </div>
      </div>

      {/* Footer Shimmer */}
      <div className="webinar-footer">
        <div className="tags">
          <div
            className="shimmer-block"
            style={{
              height: "20px",
              width: "60px",
              borderRadius: "12px",
              marginRight: "8px",
            }}
          ></div>
          <div
            className="shimmer-block"
            style={{ height: "20px", width: "70px", borderRadius: "12px" }}
          ></div>
        </div>
        <div
          className="shimmer-block"
          style={{ height: "36px", width: "120px", borderRadius: "6px" }}
        ></div>
      </div>
    </div>
  );

  return (
    <div className="webinars-container">
      <div className="webinars-header">
        <div className="video-icon-container">
          <i className="bi bi-camera-video"></i>
        </div>
        <div>
          <h2 className="webinars-title">Exclusive Webinars</h2>
          <p className="webinars-subtitle">
            Premium live sessions and recordings only for platinum members
          </p>
        </div>
      </div>

      <div className="webinars-card">
        <div className="webinars-card-header">
          <h3 className="mb-0">Exclusive Webinars</h3>
        </div>

        <div className="tabs-container">
          <div className="tab-buttons">
            <button
              className={`tab-button ${
                activeTab === "Upcoming Webinars" ? "active" : ""
              }`}
              onClick={() => handleTabChange("Upcoming Webinars")}
            >
              Upcoming Webinars
            </button>
            <button
              className={`tab-button ${
                activeTab === "Past Recordings" ? "active" : ""
              }`}
              onClick={() => handleTabChange("Past Recordings")}
            >
              Past Recordings
            </button>
          </div>
        </div>

        <div className="webinars-grid">
          {loading ? (
            // Shimmer Effect
            <>
              {[...Array(1)].map((_, index) => (
                <WebinarShimmer key={index} />
              ))}
            </>
          ) : (
            <>
              {activeTab === "Upcoming Webinars" &&
                webinars.map((webinar) => (
                  <div key={webinar.id} className="webinar-card">
                    {webinar.thumbnail_public_url && (
                      <img
                        src={webinar.thumbnail_public_url}
                        alt={webinar.title}
                        className="webinar-image obj_fit mb-3"
                      />
                    )}
                    <div className="webinar-header">
                      <h4 className="webinar-title">{webinar.title}</h4>
                      <span className="status-badge">{webinar.status}</span>
                    </div>
                    <p className="webinar-description">{webinar.description}</p>

                    <div className="presenter-info">
                      <i className="bi bi-person-video3 presenter-icon"></i>
                      <span className="presenter-name">
                        Presented by {webinar.presenter}
                      </span>
                    </div>

                    <div className="webinar-details">
                      <div className="detail-row">
                        <div className="detail-item">
                          <i className="bi bi-calendar"></i>
                          <span>{webinar.date}</span>
                        </div>
                        <div className="detail-item">
                          <i className="bi bi-clock"></i>
                          <span>{webinar.time}</span>
                        </div>
                      </div>
                      <div className="detail-row">
                        <div className="detail-item">
                          <i className="bi bi-people"></i>
                          <span>{webinar.registered_count} registered</span>
                        </div>
                      </div>
                    </div>

                    <div className="webinar-footer">
                      <div className="tags">
                        <span className="duration-tag">{webinar.duration}</span>
                        <span className="level-tag">{webinar.level}</span>
                      </div>
                      <button
                        className="register-button"
                        disabled={webinar.already_registered}
                        onClick={() => handleRegister(webinar.id)}
                      >
                        {webinar.already_registered
                          ? "Registered"
                          : "Register Now"}
                      </button>
                    </div>
                  </div>
                ))}

              {activeTab === "Past Recordings" &&
                recordings.map((rec) => (
                  <div key={rec.id} className="webinar-card">
                    {rec.thumbnail_public_url && (
                      <img
                        src={rec.thumbnail_public_url}
                        alt={rec.title}
                        className="webinar-image obj_fit mb-3"
                      />
                    )}
                    <div className="webinar-header">
                      <h4 className="webinar-title">{rec.title}</h4>
                      <span className="status-badge">{rec.status}</span>
                    </div>
                    <p className="webinar-description">{rec.description}</p>

                    <div className="presenter-info">
                      <i className="bi bi-person-video3 presenter-icon"></i>
                      <span className="presenter-name">
                        Presented by {rec.presenter}
                      </span>
                    </div>

                    <div className="webinar-details">
                      <div className="detail-row">
                        <div className="detail-item">
                          <i className="bi bi-calendar"></i>
                          <span>{rec.date}</span>
                        </div>
                        <div className="detail-item">
                          <i className="bi bi-clock"></i>
                          <span>{rec.time}</span>
                        </div>
                      </div>
                      <div className="detail-row">
                        <div className="detail-item">
                          <i className="bi bi-people"></i>
                          <span>{rec.registered_count} attended</span>
                        </div>
                      </div>
                    </div>

                    <div className="webinar-footer">
                      <div className="tags">
                        <span className="duration-tag">{rec.duration}</span>
                        <span className="level-tag">{rec.level}</span>
                      </div>
                      <a
                        href={rec.recording_link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="register-button"
                      >
                        Watch Recording
                      </a>
                    </div>
                  </div>
                ))}
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default ExclusiveWebinars;
