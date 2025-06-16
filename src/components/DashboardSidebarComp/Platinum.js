import axios from "axios";
import { useEffect, useState } from "react";
import accessingLogo from "../DashboardSidebarComp/images/accessingplatinumdahboard.png";
import "../DashboardSidebarComp/styles/mentorship.css";
import SalesContactForm from "./sales-form";

import platinumImg2 from "../DashboardSidebarComp/images/platinum-monthly.jpg";
import platinumImg1 from "../DashboardSidebarComp/images/platinum.jpg";

const Platinum = () => {
  const [userData, setUserData] = useState(null);
  const [showForm, setShowForm] = useState(false);
  const [showTransition, setShowTransition] = useState(false);
  const [currentTextIndex, setCurrentTextIndex] = useState(0);

  const accessToken = localStorage.getItem("accessToken");

  const API_BASE_URL = process.env.REACT_APP_API_URL?.endsWith("/")
    ? process.env.REACT_APP_API_URL
    : process.env.REACT_APP_API_URL + "/";
  const USER_API_URL = `${API_BASE_URL}api/user/profile/`;

  const onboardingTexts = ["Welcome", "to the", "Platinum Member", "World"];

  const [showOuterGlow, setShowOuterGlow] = useState(false);

  const handleGlowClick = () => {
    setShowOuterGlow(true);
    setTimeout(() => {
      window.location.href = "/platinum-dashboard";
    }, 1200); // matches glow animation
  };

  useEffect(() => {
    const fetchUser = async () => {
      if (!accessToken) return;
      try {
        const res = await axios.get(USER_API_URL, {
          headers: { Authorization: `Bearer ${accessToken}` },
        });
        setUserData(res.data);
      } catch (err) {
        console.error("Error fetching user:", err);
      }
    };
    fetchUser();
  }, [accessToken]);

  useEffect(() => {
    if (userData?.subscription_status === "platinum") {
      setShowTransition(true);

      const interval = setInterval(() => {
        setCurrentTextIndex((prev) => {
          if (prev < onboardingTexts.length - 1) return prev + 1;
          else {
            clearInterval(interval);
            setTimeout(() => {
              window.location.href = "/platinum-dashboard";
            }, 1500);
            return prev;
          }
        });
      }, 1200);
    }
  }, [userData]);

  if (showTransition) {
    return (
      <div className="transition-screen">
        <div className="rotating-logo-container" onClick={handleGlowClick}>
          {showOuterGlow && <div className="outer-glow-overlay"></div>}

          {/* <div
          className="rotating-logo-container"
          onClick={() => (window.location.href = "/platinum-dashboard")}> */}
          <div className="wave-effect">
            <div className="pulse-ring"></div>
            <div className="pulse-ring"></div>
            <div className="pulse-ring"></div>
          </div>

          <img
            src={accessingLogo}
            alt="Accessing Platinum"
            className="static-logo"
          />
        </div>
      </div>
    );
  }

  if (userData && userData.subscription_status !== "platinum") {
    return (
      <div className="container mt-5">
        <div className="row">
          <div className="col-lg-6 mb-3" onClick={() => setShowForm(true)}>
            <img
              src={platinumImg1}
              className="img-fluid rounded"
              style={{ cursor: "pointer" }}
              alt="Platinum 1"
            />
          </div>
          <div className="col-lg-6 mb-3" onClick={() => setShowForm(true)}>
            <img
              src={platinumImg2}
              className="img-fluid rounded"
              style={{ cursor: "pointer" }}
              alt="Platinum 2"
            />
          </div>
        </div>
        <div className="text-center my-4"></div>
        {showForm && <SalesContactForm onClose={() => setShowForm(false)} />}
      </div>
    );
  }

  if (!userData) {
    return <div className="text-center mt-5">Loading...</div>;
  }

  return null;
};

export default Platinum;
