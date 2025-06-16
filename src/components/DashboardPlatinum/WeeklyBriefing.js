import {
  faChevronRight,
  faLongArrowAltDown,
  faLongArrowAltUp,
  faPlay,
  faStar,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";
import { useEffect, useRef, useState } from "react";

const styles = {
  body: {
    backgroundColor: "#111111",
    color: "#ffffff",
    fontFamily:
      '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif',
  },
  mainCard: {
    backgroundColor: "#333333",
    borderRadius: "8px",
    overflow: "hidden",
  },
  videoPlaceholder: {
    position: "relative",
    height: "400px",
    background: "radial-gradient(circle, #444444 10%, #333333 70%)",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  playButton: {
    width: "50px",
    height: "50px",
    backgroundColor: "white",
    borderRadius: "50%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    cursor: "pointer",
  },
  playIcon: {
    color: "#333",
    fontSize: "20px",
    marginLeft: "3px",
  },
  avatar: {
    width: "36px",
    height: "36px",
    backgroundColor: "white",
    borderRadius: "50%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    color: "#333",
    fontWeight: "bold",
    fontSize: "14px",
  },
  timestamp: {
    color: "#999999",
    fontSize: "12px",
  },
  btnCustom: {
    backgroundColor: "transparent",
    border: "1px solid #444444",
    color: "white",
    fontSize: "13px",
    padding: "4px 12px",
    borderRadius: "4px",
  },
  summarySection: {
    marginTop: "20px",
  },
  summaryTitle: {
    fontWeight: 600,
    fontSize: "16px",
    marginBottom: "8px",
  },
  summaryText: {
    color: "#bbbbbb",
    fontSize: "14px",
    lineHeight: 1.4,
  },
  keyPoint: {
    display: "flex",
    alignItems: "baseline",
    marginBottom: "8px",
    color: "#bbbbbb",
    fontSize: "14px",
  },
  keyPointIcon: {
    color: "#999999",
    fontSize: "10px",
    marginRight: "10px",
  },
  tradeCard: {
    backgroundColor: "#222222",
    border: "1px solid #333333",
    borderRadius: "6px",
    padding: "15px",
    marginBottom: "12px",
  },
  tradeHeader: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: "12px",
  },
  tradeSymbol: {
    fontWeight: 600,
    fontSize: "15px",
  },
  tradeType: {
    padding: "2px 8px",
    borderRadius: "4px",
    fontSize: "12px",
    fontWeight: 600,
  },
  tradeLong: {
    backgroundColor: "rgba(40, 167, 69, 0.2)",
    color: "#2ecc71",
  },
  tradeShort: {
    backgroundColor: "rgba(220, 53, 69, 0.2)",
    color: "#e74c3c",
  },
  tradeDetails: {
    fontSize: "13px",
  },
  tradeLabel: {
    color: "#999999",
    marginBottom: "2px",
  },
  targetValue: {
    color: "#2ecc71",
  },
  stopLossValue: {
    color: "#e74c3c",
  },
  timeframeValue: {
    color: "#dddddd",
  },
  viewAnalysisBtn: {
    backgroundColor: "transparent",
    border: "1px solid #444444",
    color: "white",
    width: "100%",
    padding: "8px",
    borderRadius: "4px",
    fontSize: "14px",
    marginTop: "10px",
  },
  previousSection: {
    marginTop: "30px",
  },
  previousTitle: {
    fontSize: "16px",
    fontWeight: 600,
    marginBottom: "15px",
  },
  previousCard: {
    backgroundColor: "#222222",
    border: "1px solid #333333",
    borderRadius: "6px",
    padding: "15px",
    marginBottom: "12px",
  },
  previousCardTitle: {
    fontSize: "14px",
    fontWeight: 600,
    marginBottom: "5px",
  },
  previousCardMeta: {
    color: "#999999",
    fontSize: "12px",
    marginBottom: "8px",
  },
  previousCardDesc: {
    color: "#999999",
    fontSize: "13px",
    marginBottom: "12px",
  },
  watchBtn: {
    backgroundColor: "transparent",
    border: "1px solid #444444",
    color: "white",
    width: "100%",
    padding: "6px",
    borderRadius: "4px",
    fontSize: "13px",
  },
  starIcon: {
    color: "#f1c40f",
    marginRight: "8px",
  },
  thumbnailContainer: {
    position: "relative",
    width: "100%",
    height: "400px",
    cursor: "pointer",
    overflow: "hidden",
    borderRadius: "8px",
  },
  thumbnailImage: {
    width: "100%",
    height: "100%",
    objectFit: "cover",
    borderRadius: "8px",
  },
  playButtonOverlay: {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: "60px",
    height: "60px",
    backgroundColor: "rgba(255, 255, 255, 0.9)",
    borderRadius: "50%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    cursor: "pointer",
    transition: "all 0.2s ease",
  },
  playButtonIcon: {
    color: "#333",
    fontSize: "24px",
    marginLeft: "4px",
  },
  closeButton: {
    position: "absolute",
    top: "10px",
    right: "10px",
    backgroundColor: "rgba(255, 255, 255, 0.9)",
    color: "#000",
    border: "none",
    borderRadius: "4px",
    width: "30px",
    height: "30px",
    cursor: "pointer",
    fontSize: "16px",
    fontWeight: "bold",
    zIndex: 100,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
};

const PlatinumBriefing = () => {
  const [briefings, setBriefings] = useState([]);
  const [current, setCurrent] = useState(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const videoRef = useRef(null);

  const API_BASE_URL = process.env.REACT_APP_API_URL;

  useEffect(() => {
    axios
      .get(`${API_BASE_URL}api/weekly-briefings/`, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
        },
      })
      .then((res) => {
        setBriefings(res.data);
        setCurrent(res.data[0]);
      })
      .catch((err) => console.error("Error fetching briefings", err));
  }, [API_BASE_URL]);

  const handlePlay = () => {
    setIsPlaying(true);
    setTimeout(() => {
      videoRef.current?.play();
    }, 100);
  };

  const handleCloseVideo = () => {
    if (videoRef.current) {
      videoRef.current.pause();
      videoRef.current.currentTime = 0;
    }
    setIsPlaying(false);
  };

  const handleBriefingChange = (briefing) => {
    if (videoRef.current) {
      videoRef.current.pause();
      videoRef.current.currentTime = 0;
    }
    setIsPlaying(false);
    setCurrent(briefing);
  };

  if (!current)
    return (
      <div style={styles.body}>
        <div className="container-fluid py-3">
          <h4 className="mb-4">This Week's Platinum Briefing</h4>
          <div className="row">
            <div className="col-md-8 pe-md-3">
              {/* Main Video Shimmer */}
              <div className="shimmer-video">
                <div className="wrapper">
                  <div className="video-placeholder animate">
                    <div className="play-button-shimmer animate"></div>
                  </div>
                  <div className="video-info">
                    <div className="stroke animate title-large"></div>
                    <div className="stroke animate subtitle"></div>
                    <div className="d-flex align-items-center mt-3">
                      <div className="avatar-shimmer animate me-2"></div>
                      <div className="flex-grow-1">
                        <div className="stroke animate name"></div>
                        <div className="stroke animate role"></div>
                      </div>
                    </div>
                    <div className="mt-4">
                      <div className="stroke animate summary-title"></div>
                      <div className="stroke animate summary-line"></div>
                      <div className="stroke animate summary-line"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-md-4">
              {/* Top Trade Ideas Shimmer */}
              <div className="shimmer-section mb-4">
                <div className="wrapper">
                  <div className="stroke animate section-title"></div>
                  <div className="trade-card-shimmer">
                    <div className="trade-header">
                      <div className="stroke animate trade-symbol"></div>
                      <div className="stroke animate trade-type"></div>
                    </div>
                    <div className="trade-details">
                      <div className="stroke animate trade-detail"></div>
                      <div className="stroke animate trade-detail"></div>
                    </div>
                  </div>
                  <div className="trade-card-shimmer">
                    <div className="trade-header">
                      <div className="stroke animate trade-symbol"></div>
                      <div className="stroke animate trade-type"></div>
                    </div>
                    <div className="trade-details">
                      <div className="stroke animate trade-detail"></div>
                      <div className="stroke animate trade-detail"></div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Previous Briefings Shimmer */}
              <div className="shimmer-section">
                <div className="wrapper">
                  <div className="stroke animate section-title"></div>
                  <div className="previous-card-shimmer">
                    <div className="stroke animate previous-title"></div>
                    <div className="stroke animate previous-meta"></div>
                    <div className="stroke animate previous-desc"></div>
                    <div className="stroke animate previous-btn"></div>
                  </div>
                  <div className="previous-card-shimmer">
                    <div className="stroke animate previous-title"></div>
                    <div className="stroke animate previous-meta"></div>
                    <div className="stroke animate previous-desc"></div>
                    <div className="stroke animate previous-btn"></div>
                  </div>
                  <div className="previous-card-shimmer">
                    <div className="stroke animate previous-title"></div>
                    <div className="stroke animate previous-meta"></div>
                    <div className="stroke animate previous-desc"></div>
                    <div className="stroke animate previous-btn"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <style>{`
          /* Main Video Shimmer */
          .shimmer-video {
            background: #333333;
            border-radius: 8px;
            overflow: hidden;
            margin-bottom: 20px;
          }

          .video-placeholder {
            height: 400px;
            background: #444444;
            position: relative;
            display: flex;
            justify-content: center;
            align-items: center;
          }

          .play-button-shimmer {
            width: 60px;
            height: 60px;
            background: #555555;
            border-radius: 50%;
          }

          .video-info {
            padding: 20px;
          }

          .avatar-shimmer {
            width: 36px;
            height: 36px;
            background: #444444;
            border-radius: 50%;
          }

          /* Trade Cards Shimmer */
          .shimmer-section {
            background: transparent;
          }

          .trade-card-shimmer {
            background: #222222;
            border: 1px solid #333333;
            border-radius: 6px;
            padding: 15px;
            margin-bottom: 12px;
          }

          .trade-header {
            display: flex;
            justify-content: space-between;
            margin-bottom: 12px;
          }

          .trade-details {
            display: flex;
            gap: 10px;
          }

          /* Previous Briefings Shimmer */
          .previous-card-shimmer {
            background: #222222;
            border: 1px solid #333333;
            border-radius: 6px;
            padding: 15px;
            margin-bottom: 12px;
          }

          /* Stroke Variations */
          .stroke {
            background: #444444;
            border-radius: 4px;
            margin-bottom: 8px;
          }

          .title-large { height: 20px; width: 70%; }
          .subtitle { height: 12px; width: 30%; }
          .name { height: 14px; width: 60%; }
          .role { height: 10px; width: 40%; }
          .summary-title { height: 16px; width: 25%; }
          .summary-line { height: 12px; width: 90%; }
          .section-title { height: 16px; width: 50%; }
          .trade-symbol { height: 15px; width: 40%; }
          .trade-type { height: 12px; width: 30%; }
          .trade-detail { height: 12px; width: 45%; }
          .previous-title { height: 14px; width: 80%; }
          .previous-meta { height: 10px; width: 50%; }
          .previous-desc { height: 11px; width: 95%; }
          .previous-btn { height: 30px; width: 100%; }

          .wrapper {
            width: 0px;
            animation: fullView 0.5s forwards linear;
          }

          @keyframes fullView {
            100% {
              width: 100%;
            }
          }

          .animate {
            animation: shimmer 3s;
            animation-iteration-count: infinite;
            background: linear-gradient(to right, #444444 5%, #555555 25%, #444444 35%);
            background-size: 1000px 100%;
          }

          @keyframes shimmer {
            from {
              background-position: -1000px 0;
            }
            to {
              background-position: 1000px 0;
            }
          }
        `}</style>
      </div>
    );

  // Fix: Define otherBriefings properly
  const otherBriefings = briefings.filter((briefing, index) => index !== 0);

  return (
    <div className="container-fluid py-3" style={styles.body}>
      <h4 className="mb-4">This Week's Platinum Briefing</h4>
      <div className="row">
        <div className="col-md-8 pe-md-3">
          <div style={styles.mainCard} className="mb-4">
            <div style={styles.videoPlaceholder}>
              {!isPlaying ? (
                <div style={styles.thumbnailContainer} onClick={handlePlay}>
                  <img
                    src={current.thumbnail || "/api/placeholder/800/400"}
                    alt="Video thumbnail"
                    style={styles.thumbnailImage}
                    onError={(e) => {
                      e.target.style.display = "none";
                      e.target.parentElement.style.background =
                        "radial-gradient(circle, #444444 10%, #333333 70%)";
                    }}
                  />
                  <div style={styles.playButtonOverlay}>
                    <FontAwesomeIcon
                      icon={faPlay}
                      style={styles.playButtonIcon}
                    />
                  </div>
                </div>
              ) : (
                <div
                  style={{
                    position: "relative",
                    width: "100%",
                    height: "100%",
                  }}
                >
                  <video
                    ref={videoRef}
                    controls
                    width="100%"
                    height="100%"
                    controlsList="nodownload noremoteplayback"
                    style={{ borderRadius: "8px", backgroundColor: "#000" }}
                    onContextMenu={(e) => e.preventDefault()}
                    onLoadStart={() => console.log("Video loading started")}
                    onCanPlay={() => console.log("Video ready to play")}
                    onError={(e) => {
                      console.error("Video error:", e.target.error);
                      console.log("Video URL:", current.public_url);
                    }}
                    preload="metadata"
                    playsInline
                    poster={current.thumbnail}
                  >
                    <source src={current.public_url} type="video/mp4" />
                    <source src={current.public_url} type="video/webm" />
                    <source src={current.public_url} type="video/ogg" />
                    Your browser does not support the video tag.
                  </video>

                  <button onClick={handleCloseVideo} style={styles.closeButton}>
                    ✕
                  </button>
                </div>
              )}
            </div>

            <div className="p-4">
              <h5 className="mb-2">{current.title}</h5>
              <div className="d-flex mb-4" style={styles.timestamp}>
                <div className="me-3">{current.published_date}</div>
                <div>{current.duration}</div>
              </div>
              <div className="d-flex align-items-center">
                <div style={styles.avatar} className="me-2">
                  {current.analyst_name
                    ?.split(" ")
                    .map((n) => n[0])
                    .join("") || "A"}
                </div>
                <div>
                  <div className="fw-bold">{current.analyst_name}</div>
                  <div style={styles.timestamp}>{current.analyst_title}</div>
                </div>
              </div>

              <div style={styles.summarySection}>
                <div style={styles.summaryTitle}>Summary</div>
                <p style={styles.summaryText}>{current.summary}</p>
              </div>

              <div style={styles.summarySection}>
                <div style={styles.summaryTitle}>Key Points</div>
                {current.key_points?.map((point, index) => (
                  <div key={index} style={styles.keyPoint}>
                    <FontAwesomeIcon
                      icon={faChevronRight}
                      style={styles.keyPointIcon}
                    />
                    {point}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="col-md-4">
          <div className="mb-4">
            <h6 className="d-flex align-items-center mb-3">
              <FontAwesomeIcon icon={faStar} style={styles.starIcon} />
              Top Trade Ideas
            </h6>

            {current.trade_ideas?.map((trade, index) => (
              <div key={index} style={styles.tradeCard}>
                <div style={styles.tradeHeader}>
                  <div style={styles.tradeSymbol}>{trade.ticker}</div>
                  <div
                    style={{
                      ...styles.tradeType,
                      ...(trade.direction === "LONG"
                        ? styles.tradeLong
                        : styles.tradeShort),
                    }}
                  >
                    <FontAwesomeIcon
                      icon={
                        trade.direction === "LONG"
                          ? faLongArrowAltUp
                          : faLongArrowAltDown
                      }
                      className="me-1"
                    />
                    {trade.direction}
                  </div>
                </div>
                <div style={styles.tradeDetails} className="row">
                  <div className="col-6">
                    <div style={styles.tradeLabel}>Target</div>
                    <div style={styles.targetValue}>${trade.target_price}</div>
                  </div>
                  <div className="col-6">
                    <div style={styles.tradeLabel}>Stop Loss</div>
                    <div style={styles.stopLossValue}>${trade.stop_loss}</div>
                  </div>
                </div>
                <div style={styles.tradeDetails} className="mt-2">
                  <div style={styles.tradeLabel}>Timeframe</div>
                  <div style={styles.timeframeValue}>{trade.timeframe}</div>
                </div>
              </div>
            ))}
          </div>

          <div style={styles.previousSection}>
            <div style={styles.previousTitle}>Previous Briefings</div>

            {otherBriefings.map((b, index) => (
              <div key={index} style={styles.previousCard}>
                <div style={styles.previousCardTitle}>{b.title}</div>
                <div style={styles.previousCardMeta}>
                  {b.published_date} · {b.duration}
                </div>
                <div style={styles.previousCardDesc}>
                  {b.summary?.slice(0, 90)}...
                </div>
                <button
                  style={styles.watchBtn}
                  onClick={() => handleBriefingChange(b)}
                >
                  <FontAwesomeIcon icon={faPlay} className="me-1" /> Watch
                  Briefing
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>

      <style>{`
        /* Video Controls Styling */
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

        /* Hover effects */
        .thumbnail-container:hover .play-button-overlay {
          transform: translate(-50%, -50%) scale(1.1);
          background-color: rgba(255, 255, 255, 1);
        }

        .close-button:hover {
          background-color: rgba(255, 255, 255, 1) !important;
        }
      `}</style>
    </div>
  );
};

export default PlatinumBriefing;
