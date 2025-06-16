import axios from "axios";
import { useEffect, useRef, useState } from "react";
import thumbnail from "../DashboardSidebarComp/images/video_card-overlay.png";
import "../DashboardSidebarComp/styles/OptionAcademyComp.css";

const OptionsAcademy = () => {
  const [activeTab, setActiveTab] = useState("livestream");
  const [courses, setCourses] = useState([]);
  const [selectedCourseId, setSelectedCourseId] = useState(null);
  const [videos, setVideos] = useState([]);
  const [selectedVideo, setSelectedVideo] = useState(null);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [loading, setLoading] = useState(true);
  const dropdownRef = useRef(null);
  const videoRef = useRef(null);

  const accessToken = localStorage.getItem("accessToken");
  const API_BASE_URL = process.env.REACT_APP_API_URL?.endsWith("/")
    ? process.env.REACT_APP_API_URL
    : process.env.REACT_APP_API_URL + "/";

  const getCategory = () => {
    if (activeTab === "livestream") return "Forex";
    if (activeTab === "support") return "Crypto";
    if (activeTab === "options-academy") return "Stock";
    return "Forex";
  };

  const fetchCourses = async (category) => {
    setLoading(true);
    try {
      const res = await axios.get(
        `${API_BASE_URL}api/beginnerhub/courses/${category}/`,
        {
          headers: { Authorization: `Bearer ${accessToken}` },
        }
      );
      setCourses(res.data);
      if (res.data.length > 0) {
        setSelectedCourseId(res.data[0].id);
        await fetchVideos(res.data[0].id);
      } else {
        setVideos([]);
        setSelectedVideo(null);
      }
    } catch (err) {
      console.error("Error fetching courses:", err);
    } finally {
      setLoading(false);
    }
  };

  const fetchVideos = async (courseId) => {
    try {
      const res = await axios.get(
        `${API_BASE_URL}api/beginnerhub/courses/${courseId}/videos/`,
        {
          headers: { Authorization: `Bearer ${accessToken}` },
        }
      );
      setVideos(res.data);
      if (res.data.length > 0) setSelectedVideo(res.data[0]);
    } catch (err) {
      console.error("Error fetching videos:", err);
    }
  };

  useEffect(() => {
    fetchCourses(getCategory());
  }, [activeTab]);

  const handleTabChange = (tabId) => {
    setActiveTab(tabId);
  };

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const handleCourseSelect = (course) => {
    setSelectedCourseId(course.id);
    fetchVideos(course.id);
    setIsDropdownOpen(false);
  };

  const selectedCourse = courses.find((c) => c.id === selectedCourseId);

  return (
    <div className="options-academy-container">
      <div className="nav-container">
        <ul className="nav nav-tabs">
          <li className="nav-item">
            <button
              className={`nav-link ${
                activeTab === "livestream" ? "active" : ""
              }`}
              onClick={() => handleTabChange("livestream")}
            >
              Forex
            </button>
          </li>
          <li className="nav-item">
            <button
              className={`nav-link ${activeTab === "support" ? "active" : ""}`}
              onClick={() => handleTabChange("support")}
            >
              Crypto
            </button>
          </li>
          <li className="nav-item">
            <button
              className={`nav-link ${
                activeTab === "options-academy" ? "active" : ""
              }`}
              onClick={() => handleTabChange("options-academy")}
            >
              Stock
            </button>
          </li>
        </ul>
        <div className="tab-indicator"></div>
      </div>

      <div className="tab-content-academy">
        <div className="options-academy-content">
          {loading ? (
            // Complete Shimmer Layout
            <div className="row">
              <div className="col-md-7">
                <div className="video-container-options">
                  <div className="video-wrapper-options">
                    <div className="ratio ratio-16x9">
                      <div
                        className="shimmer-block w-100 h-100"
                        style={{ borderRadius: "8px" }}
                      ></div>
                    </div>
                    <div
                      className="shimmer-block fundamentals-tag"
                      style={{
                        height: "30px",
                        width: "200px",
                        borderRadius: "15px",
                        marginTop: "10px",
                      }}
                    ></div>
                  </div>
                </div>
                <div className="tutorial-details">
                  <div
                    className="shimmer-block mb-3"
                    style={{
                      height: "24px",
                      width: "200px",
                      borderRadius: "4px",
                    }}
                  ></div>
                  <div
                    className="shimmer-block mb-2"
                    style={{
                      height: "16px",
                      width: "100%",
                      borderRadius: "4px",
                    }}
                  ></div>
                  <div
                    className="shimmer-block mb-2"
                    style={{
                      height: "16px",
                      width: "85%",
                      borderRadius: "4px",
                    }}
                  ></div>
                  <div
                    className="shimmer-block"
                    style={{
                      height: "16px",
                      width: "70%",
                      borderRadius: "4px",
                    }}
                  ></div>
                </div>
              </div>

              <div className="col-md-5">
                <div className="playlist-section shimmer-block">
                  <div className="playlist-header">
                    <div
                      className=" mb-3"
                      style={{
                        height: "24px",
                        width: "150px",
                        borderRadius: "4px",
                      }}
                    ></div>
                    <div
                      className="shimmer-block"
                      style={{
                        height: "40px",
                        width: "100%",
                        borderRadius: "6px",
                      }}
                    ></div>
                  </div>

                  <div className="playlist-items">
                    {[...Array(1)].map((_, index) => (
                      <div key={index} className="playlist-item">
                        <div className="playlist-thumbnail">
                          <div
                            className="shimmer-block"
                            style={{
                              width: "100%",
                              height: "60px",
                              borderRadius: "6px",
                            }}
                          ></div>
                        </div>
                        <div className="playlist-info">
                          <div></div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ) : (
            // Actual Content
            <div className="row">
              <div className="col-md-7">
                <div className="video-container-options">
                  <div className="video-wrapper-options">
                    <div className="ratio ratio-16x9">
                      {selectedVideo ? (
                        <video
                          key={selectedVideo.video_url}
                          ref={videoRef}
                          className="w-100 h-100"
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
                            console.log("Video URL:", selectedVideo.video_url);
                          }}
                          onContextMenu={(e) => e.preventDefault()}
                          poster={selectedVideo.thumbnail_url}
                        >
                          <source
                            src={selectedVideo.video_url}
                            type="video/mp4"
                          />
                          <source
                            src={selectedVideo.video_url}
                            type="video/webm"
                          />
                          <source
                            src={selectedVideo.video_url}
                            type="video/ogg"
                          />
                          Your browser does not support the video tag.
                        </video>
                      ) : (
                        <p className="text-white">No video selected</p>
                      )}
                    </div>
                    {selectedVideo && (
                      <div className="fundamentals-tag">
                        {selectedVideo.title}
                      </div>
                    )}
                  </div>
                </div>
                {selectedVideo && (
                  <div className="tutorial-details">
                    <h4 className="tutorial-heading">Tutorial Description</h4>
                    <p className="tutorial-desc">{selectedVideo.description}</p>
                  </div>
                )}
              </div>

              <div className="col-md-5">
                <div className="playlist-section">
                  <div className="playlist-header">
                    <h4>Current Playlist</h4>
                    <div className="custom-dropdown" ref={dropdownRef}>
                      <button
                        className="btn btn-outline-primary dropdown-toggle"
                        type="button"
                        onClick={toggleDropdown}
                      >
                        {selectedCourse ? selectedCourse.title : getCategory()}
                      </button>
                      {isDropdownOpen && (
                        <ul className="custom-dropdown-menu">
                          {courses.map((course) => (
                            <li key={course.id}>
                              <button
                                className="custom-dropdown-item"
                                onClick={() => handleCourseSelect(course)}
                              >
                                {course.title}
                              </button>
                            </li>
                          ))}
                        </ul>
                      )}
                    </div>
                  </div>

                  {videos.length > 0 && (
                    <div className="playlist-items">
                      {videos.map((video) => (
                        <div
                          key={video.id}
                          className={`playlist-item ${
                            selectedVideo?.id === video.id ? "now-playing" : ""
                          }`}
                          onClick={() => setSelectedVideo(video)}
                        >
                          <div className="playlist-thumbnail">
                            <img
                              src={video.thumbnail_url || thumbnail}
                              alt="Thumbnail"
                            />
                            {selectedVideo?.id === video.id && (
                              <div className="playing-tag">Now Playing</div>
                            )}
                          </div>
                          <div className="playlist-info">
                            <div className="video-title-card">
                              {video.title}
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            </div>
          )}
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

        /* Firefox controls */
        video::-moz-media-controls {
          background-color: rgba(0, 0, 0, 0.8) !important;
        }

        /* General video container */
        .video-wrapper-options video {
          border-radius: 8px;
          box-shadow: 0 4px 16px rgba(0, 0, 0, 0.2);
        }

        /* Ensure controls are always visible */
        .w-100 {
          outline: none !important;
        }
      `}</style>
    </div>
  );
};

export default OptionsAcademy;
