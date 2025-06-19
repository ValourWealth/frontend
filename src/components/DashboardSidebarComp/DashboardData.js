import axios from "axios";
import { useEffect, useState } from "react";
import "../DashboardSidebarComp/styles/DashboardData.css";
import AtsFlow from "./AtsFordashboard";
import FinancialDashboard from "./FinancialDashboard";
import LiveTrainingSession from "./liveTrainingSession";
import ProgressBar from "./ProgressBar";

const API_BASE_URL = process.env.REACT_APP_API_URL?.endsWith("/")
  ? process.env.REACT_APP_API_URL
  : process.env.REACT_APP_API_URL + "/";

const USER_API_URL = `${API_BASE_URL}api/user/profile/`;

function DashboardData({ darkMode }) {
  const [userData, setUserData] = useState(null);
  const [error, setError] = useState(null);
  const accessToken = localStorage.getItem("accessToken");

  useEffect(() => {
    if (!accessToken) {
      setError("You need to be logged in to view this data.");
      return;
    }

    const fetchUserData = async () => {
      try {
        const response = await axios.get(USER_API_URL, {
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
        });
        console.log("User data response:", response.data);
        setUserData(response.data);
      } catch (error) {
        console.error("Error fetching user data:", error);
        if (error.response && error.response.status === 401) {
          setError("Session expired or invalid. Please log in again.");
          localStorage.removeItem("accessToken");
        } else {
          setError("Failed to fetch user data. Please try again later.");
        }
      }
    };

    fetchUserData();
  }, [accessToken]);

  return (
    <div className="container p-0">
      <div className="dashboard-header">
        {/* Background Video */}
        <video
          className="dashboard-bg-video"
          autoPlay
          loop
          muted
          playsInline
          preload="auto"
          disablePictureInPicture
          controlsList="nodownload nofullscreen noremoteplayback"
          onContextMenu={(e) => e.preventDefault()}
        >
          <source
            src="https://pub-e58a5f6126d0464c9b810e772987ba18.r2.dev/bannergreen.mp4"
            type="video/mp4"
          />
          Your browser does not support the video tag.
        </video>

        <div className="header-content">
          <div className="header-left">
            <h2>
              Hello! <span className="highlight">{userData?.username}</span>
            </h2>
            <p>
              Here are the top stocks handpicked by our AI from over 10,000
              tickers in the Stock Exchange
            </p>
            <p>
              Choose from the available styles of trading that will suit your
              needs
            </p>
          </div>
          <div className="header-right">
            <button className="date-btn">
              Date:{" "}
              {new Date().toLocaleDateString("en-US", {
                weekday: "long",
                year: "numeric",
                month: "long",
                day: "numeric",
              })}
            </button>
          </div>
        </div>
      </div>

      {error && <p className="error-message">{error}</p>}
      <FinancialDashboard />
      <LiveTrainingSession />
      {/* <ProgressBar />
       */}

      {/* <OverallProgressBar /> */}
      <ProgressBar />

      <AtsFlow darkMode={darkMode} />
    </div>
  );
}

export default DashboardData;
