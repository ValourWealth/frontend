import axios from "axios";
import { useEffect, useRef, useState } from "react";
import "../DashboardSidebarComp/styles/live-training-session.css";
import LiveSessionChat from "./LiveSessionChat";

function LiveTrainingSession() {
  const [isLocked, setIsLocked] = useState(true);
  const [pastWebinars, setPastWebinars] = useState([]);
  const [playingIndex, setPlayingIndex] = useState(null);
  const [loading, setLoading] = useState(true);
  const videoRefs = useRef([]);
  const accessToken = localStorage.getItem("accessToken");

  const API_URL = `${process.env.REACT_APP_API_URL}api/webinars/`;

  useEffect(() => {
    const fetchPastWebinars = async () => {
      try {
        const res = await axios.get(API_URL, {
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
        });
        const past = res.data
          .filter((w) => w.status === "Outdated")
          .sort((a, b) => new Date(b.created_at) - new Date(a.created_at));
        // .slice(0, 2);
        setPastWebinars(past);
      } catch (err) {
        console.error("Failed to fetch webinars:", err);
      } finally {
        setLoading(false);
      }
    };
    fetchPastWebinars();
  }, []);

  const handlePlay = (index) => {
    setPlayingIndex(index);
    setTimeout(() => {
      videoRefs.current[index]?.play();
    }, 100);
  };

  const handleCloseVideo = (index) => {
    if (videoRefs.current[index]) {
      videoRefs.current[index].pause();
      videoRefs.current[index].currentTime = 0;
    }
    setPlayingIndex(null);
  };

  return (
    <section className="live-trading-sessions pt-0">
      <div className="container">
        <div className="row">
          <div className="sec_heading">
            <h2 className="live-session-title">Past Live Streams</h2>
          </div>

          {loading ? (
            <div className="row">
              {[...Array(2)].map((_, index) => (
                <div className="col-lg-6 mb-4 p-2" key={index}>
                  <div className="session-card shimmer-card">
                    <div className="video-wrapper mb-3">
                      <div className="shimmer-block shimmer-media"></div>
                    </div>
                    <div className="session-content">
                      <div className="mb-2" style={{ width: "80%" }}></div>
                      <div className="mb-2" style={{ width: "60%" }}></div>
                      <div
                        className="shimmer-block shimmer-subtitle"
                        style={{ width: "50%" }}
                      ></div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            pastWebinars.map((webinar, index) => (
              <div className="col-lg-6 mb-4 p-2" key={webinar.id}>
                <div className={`session-card ${isLocked ? "locked" : ""}`}>
                  <div className="video-wrapper">
                    {playingIndex !== index ? (
                      <div className="thumbnail-container">
                        <img
                          src={webinar.thumbnail_public_url}
                          alt="Video thumbnail"
                          className="session-img"
                        />
                        <button
                          className="play-button-session"
                          onClick={() => handlePlay(index)}
                        >
                          ▶
                        </button>
                      </div>
                    ) : (
                      <div style={{ position: "relative" }}>
                        <video
                          ref={(el) => (videoRefs.current[index] = el)}
                          className="session-img"
                          controls
                          controlsList="nodownload noremoteplayback"
                          preload="metadata"
                          playsInline
                          style={{
                            width: "100%",
                            height: "100%",
                            backgroundColor: "#000",
                          }}
                          onLoadStart={() =>
                            console.log("Video loading started")
                          }
                          onCanPlay={() => console.log("Video ready to play")}
                          onError={(e) => {
                            console.error("Video error:", e.target.error);
                            console.log("Video URL:", webinar.recording_link);
                          }}
                          onContextMenu={(e) => e.preventDefault()}
                          poster={webinar.thumbnail_public_url}
                        >
                          <source
                            src={webinar.recording_link}
                            type="video/mp4"
                          />
                          <source
                            src={webinar.recording_link}
                            type="video/webm"
                          />
                          <source
                            src={webinar.recording_link}
                            type="video/ogg"
                          />
                          Your browser does not support the video tag.
                        </video>
                        <button
                          onClick={() => handleCloseVideo(index)}
                          style={{
                            position: "absolute",
                            top: "10px",
                            right: "10px",
                            color: "#000",
                            border: "none",
                            borderRadius: "4px",
                            width: "30px",
                            height: "30px",
                            cursor: "pointer",
                            fontSize: "16px",
                            fontWeight: "bold",
                            zIndex: 100,
                          }}
                        >
                          ✕
                        </button>
                      </div>
                    )}
                  </div>
                  <div className="session-content">
                    <h5 className="session-title">{webinar.title}</h5>
                    <p className="session-host">By {webinar.presenter}</p>
                    <p className="session-time">{webinar.date}</p>
                  </div>
                  {isLocked && <div className="lock-icon">🔒</div>}
                </div>
              </div>
            ))
          )}
        </div>
      </div>
      <LiveSessionChat />

      <style>{`
        video {
          background-color: #000 !important;
        }

        video::-webkit-media-controls {
          display: flex !important;
        }

        video::-webkit-media-controls-panel {
          display: flex !important;
          background-color: rgba(0, 0, 0, 0.8) !important;
          border-radius: 0 0 8px 8px !important;
        }

        video::-webkit-media-controls-play-button {
          display: block !important;
          color: white !important;
        }

        video::-webkit-media-controls-timeline {
          display: block !important;
        }

        video::-webkit-media-controls-timeline::-webkit-slider-thumb {
          background-color: #007bff !important;
        }

        video::-webkit-media-controls-current-time-display,
        video::-webkit-media-controls-time-remaining-display {
          display: block !important;
          color: white !important;
          font-family: Arial, sans-serif !important;
        }

        video::-webkit-media-controls-mute-button {
          display: block !important;
          color: white !important;
        }

        video::-webkit-media-controls-volume-slider {
          display: block !important;
        }

        video::-webkit-media-controls-fullscreen-button {
          display: block !important;
          color: white !important;
        }

        video::-webkit-media-controls-overlay-play-button {
          display: none !important;
        }

        video::-moz-media-controls {
          background-color: rgba(0, 0, 0, 0.8) !important;
        }

        .video-wrapper video {
          border-radius: 8px;
          box-shadow: 0 4px 16px rgba(0, 0, 0, 0.2);
        }

        .session-img {
          outline: none !important;
        }

        .play-button-session {
          transition: all 0.2s ease;
        }
      `}</style>
    </section>
  );
}

export default LiveTrainingSession;
