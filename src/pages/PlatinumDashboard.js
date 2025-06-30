import axios from "axios";
import { useEffect, useRef, useState } from "react";
import ChatFeature from "../components/DashboardPlatinum/ChatFeature";
import ChatWithAnalyst from "../components/DashboardPlatinum/ChatWithAnalyst";
import CreditRequestPopup from "../components/DashboardPlatinum/CreditRequestPopup";
import ExtraContent from "../components/DashboardPlatinum/ExtraContent";
import FeatureVoting from "../components/DashboardPlatinum/FeatureVoting";
import JournalPage from "../components/DashboardPlatinum/JournalPage";
import Leaderboard from "../components/DashboardPlatinum/Leaderboard";
import MarketInsights from "../components/DashboardPlatinum/MarketInsights";
import MarketNews from "../components/DashboardPlatinum/MarketNews";
import PlatinumMembershipNFT from "../components/DashboardPlatinum/MembershipNft";
import PortfolioHeatmap from "../components/DashboardPlatinum/PortfolioHeatmap";
import RealtimeQuotes from "../components/DashboardPlatinum/RealtimeQuotes";
import ScheduleCall from "../components/DashboardPlatinum/ScheduleCall";
import TradingChallenges from "../components/DashboardPlatinum/TradingChallenge";
import Wabinars from "../components/DashboardPlatinum/Wabinars";
import WeeklyBriefing from "../components/DashboardPlatinum/WeeklyBriefing";

import MarketOverview from "../components/DashboardPlatinum/MarketOverview";
import LatestNews from "../components/DashboardPlatinum/NewsLatest";
import StockDashboard from "../components/DashboardPlatinum/StockDashboard";
import EditProfile from "../components/DashboardSidebarComp/EditProfile";
import "../styles/platinumDashboard.css";

const PlatinumDashboard = () => {
  const [showCreditPopup, setShowCreditPopup] = useState(false);
  const [activeSection, setActiveSection] = useState("dashboard");
  const collapseRef = useRef(null);
  const [adminProfilePhotoUrl, setAdminProfilePhotoUrl] = useState("");
  const [userData, setUserData] = useState(null);
  const [isAnalyst, setIsAnalyst] = useState(false);
  const [analystChats, setAnalystChats] = useState([]); // For analyst: all user chats

  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");
  const [conversationId, setConversationId] = useState(null);
  const [activeDashboardTab, setActiveDashboardTab] = useState("market");
  const [showEditProfile, setShowEditProfile] = useState(false);

  const getUKGreeting = () => {
    const now = new Date().toLocaleString("en-GB", {
      timeZone: "Europe/London",
      hour: "numeric",
      hour12: false,
    });

    const hour = parseInt(now);
    if (hour < 12) return "Good Morning";
    if (hour < 17) return "Good Afternoon";
    return "Good Evening";
  };

  const [unreadMessages, setUnreadMessages] = useState(0);
  const [unreadNotifications, setUnreadNotifications] = useState(0);
  const [showMessagesPopup, setShowMessagesPopup] = useState(false);
  const [showNotificationsPopup, setShowNotificationsPopup] = useState(false);
  const [showProfileDropdown, setShowProfileDropdown] = useState(false);
  const [callCredits, setCallCredits] = useState(null);

  const accessToken = localStorage.getItem("accessToken");
  const API_BASE_URL = process.env.REACT_APP_API_URL?.endsWith("/")
    ? process.env.REACT_APP_API_URL
    : process.env.REACT_APP_API_URL + "/";
  const USER_API_URL = `${API_BASE_URL}api/user/profile/`;

  // Manual toggle control - completely bypass Bootstrap
  const [isNavOpen, setIsNavOpen] = useState(false);

  const handleToggleClick = () => {
    setIsNavOpen(!isNavOpen);
  };

  const handleNavClick = (key, event) => {
    if (event) {
      event.preventDefault();
      event.stopPropagation();
    }

    setActiveSection(key);
    setIsNavOpen(false); // Close navbar when nav item is clicked
  };

  const handleNotificationsClick = () => {
    setShowNotificationsPopup(!showNotificationsPopup);
    setShowMessagesPopup(false);
    setShowProfileDropdown(false);
  };

  const handleMessagesClick = () => {
    setShowMessagesPopup(!showMessagesPopup);
    setShowNotificationsPopup(false);
    setShowProfileDropdown(false);
  };

  useEffect(() => {
    const fetchCallCredits = async () => {
      if (!accessToken) return;
      try {
        const res = await axios.get(`${API_BASE_URL}api/callcredits/`, {
          headers: { Authorization: `Bearer ${accessToken}` },
        });
        if (res.data.length > 0) {
          setCallCredits(res.data[0].hours_remaining);
        }
      } catch (error) {
        console.error("Failed to fetch call credits", error);
      }
    };

    fetchCallCredits();
  }, [accessToken]);

  const handleAvatarClick = () => {
    setShowProfileDropdown(!showProfileDropdown);
    setShowNotificationsPopup(false);
    setShowMessagesPopup(false);
  };

  useEffect(() => {
    fetchMessages();
    const interval = setInterval(fetchMessages, 5000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const fetchUser = async () => {
      if (!accessToken) return;
      try {
        const res = await axios.get(USER_API_URL, {
          headers: { Authorization: `Bearer ${accessToken}` },
        });
        setUserData(res.data);
        setIsAnalyst(res.data.role === "analyst");

      } catch (err) {
        console.error("Failed to fetch user", err);
      }
    };

    fetchUser();
  }, [accessToken]);

  useEffect(() => {
    const ensureChatAndFetchMessages = async () => {
      try {
        const res = await axios.get(`${API_BASE_URL}api/analyst-chat/ensure/`, {
          headers: { Authorization: `Bearer ${accessToken}` },
        });

        if (isAnalyst) {
          if (Array.isArray(res.data) && res.data.length > 0) {
            setAnalystChats(res.data);
            setConversationId(res.data[0].id); // default: show first chat
            setMessages(res.data[0].messages || []);
          }
        } else {
          if (res.data && res.data.id) {
            setConversationId(res.data.id);
            setMessages(res.data.messages || []);
          }
        }
      } catch (err) {
        console.error("❌ Error ensuring chat:", err.response?.data || err);
      }
    };

    if (accessToken) ensureChatAndFetchMessages();
  }, [accessToken, isAnalyst]);

  useEffect(() => {
    const fetchAdminPhoto = async () => {
      try {
        const res = await axios.get(`${API_BASE_URL}api/user/profile/`, {
          headers: { Authorization: `Bearer ${accessToken}` },
        });
        setAdminProfilePhotoUrl(res.data.profile_photo_url);
      } catch (error) {
        console.warn("Admin profile photo not found");
      }
    };
    fetchAdminPhoto();
  }, []);

  const fetchMessages = async () => {
    try {
      const res = await axios.get(`${API_BASE_URL}api/analyst-chat/`, {
        headers: { Authorization: `Bearer ${accessToken}` },
      });

      if (res.data && res.data.id) {
        setConversationId(res.data.id);
        setMessages(res.data.messages);
      } else {
        console.warn("No active analyst chat found.");
      }
    } catch (err) {
      console.error("❌ Error fetching analyst chat", err);
    }
  };

  const sendMessage = async () => {
    if (!input.trim()) {
      console.warn("❌ Empty message");
      return;
    }

    if (!conversationId) {
      console.warn("❌ Chat not ready (conversationId is null)");
      return;
    }

    try {
      await axios.post(
        `${API_BASE_URL}api/analyst-chat/send/`,
        { chat: conversationId, content: input },
        { headers: { Authorization: `Bearer ${accessToken}` } }
      );

      setInput("");
      fetchMessages();
    } catch (err) {
      console.error("❌ Error sending message", err.response?.data || err);
    }
  };

  useEffect(() => {
    const fetchCounts = async () => {
      try {
        const res = await axios.get(`${API_BASE_URL}api/chat/unread-count/`, {
          headers: { Authorization: `Bearer ${accessToken}` },
        });
        setUnreadMessages(res.data.unread_messages);
        setUnreadNotifications(res.data.unread_notifications);
      } catch (err) {
        console.error("Count fetch error", err);
      }
    };

    fetchCounts();
    const interval = setInterval(fetchCounts, 10000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="platinum-dashboard">
      <nav className="navbar navbar-platinum navbar-expand-lg navbar-dark">
        <div className="container-fluid">
          <a className="navbar-brand fw-bold" href="#">
            PLATINUMTRADE
          </a>
          <button
            className="navbar-toggler"
            type="button"
            onClick={handleToggleClick}
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div
            className={`collapse navbar-collapse ${isNavOpen ? "show" : ""}`}
            id="navbarNav"
            ref={collapseRef}
          >
            <ul className="navbar-nav me-auto">
              {/* Always keep Dashboard */}
              <button
                className={`tab-button ${
                  activeDashboardTab === "market" ? "active" : ""
                }`}
                onClick={(e) => {
                  handleNavClick("dashboard", e);
                  setActiveDashboardTab("market");
                  setActiveSection("dashboard");
                }}
              >
                Dashboard
              </button>

              {/* New Items */}
              {[
                // { key: "briefing", label: "Weekly Briefing" },
                { key: "webinars", label: "Webinars" },
                { key: "challenges", label: "Trading Challenges" },
                { key: "portfolio-heatmap", label: "Portfolio" },
                // { key: "leaderboard", label: "Leaderboard" },
                // { key: "schedule-call", label: "Private Coaching" },
                { key: "news", label: "News" },
              ].map(({ key, label }) => (
                <li className="nav-item" key={key}>
                  <a
                    className={`nav-link ${
                      activeSection === key ? "active" : ""
                    }`}
                    href="#"
                    onClick={(e) => handleNavClick(key, e)}
                  >
                    {label}
                  </a>
                </li>
              ))}

              {/*  Premium Features Dropdown */}
              <ul className="navbar-nav">
                <li className="nav-item dropdown premium-dropdown">
                  <a
                    className="nav-link dropdown-toggle text-white fw-bold"
                    href="#"
                    id="premiumDropdown"
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    Premium Features
                  </a>
                  <ul
                    className="dropdown-menu dropdown-menu-dark dropdown-menu-end"
                    aria-labelledby="premiumDropdown"
                  >
                    <li className="dropdown-header">Platinum Exclusives</li>

                    <li>
                      <a
                        className="dropdown-item"
                        href="#"
                        onClick={(e) => handleNavClick("briefing", e)}
                      >
                        <i className="bi bi-file-earmark-text me-2"></i> Weekly
                        Briefing
                      </a>
                    </li>
                    <li>
                      <a
                        className="dropdown-item"
                        href="#"
                        onClick={(e) => handleNavClick("webinars", e)}
                      >
                        <i className="bi bi-easel me-2"></i> Webinars
                      </a>
                    </li>
                    <li>
                      <a
                        className="dropdown-item"
                        href="#"
                        onClick={(e) => handleNavClick("news", e)}
                      >
                        <i className="bi bi-newspaper me-2"></i> News
                      </a>
                    </li>
                    <li>
                      <a
                        className="dropdown-item"
                        href="#"
                        onClick={(e) => handleNavClick("leaderboard", e)}
                      >
                        <i className="bi bi-trophy me-2"></i> Leaderboard
                      </a>
                    </li>
                    <li>
                      <a
                        className="dropdown-item"
                        href="#"
                        onClick={(e) => handleNavClick("challenges", e)}
                      >
                        <i className="bi bi-bar-chart-line me-2"></i> Trading
                        Challenges
                      </a>
                    </li>
                    <li>
                      <a
                        className="dropdown-item"
                        href="#"
                        onClick={(e) => handleNavClick("schedule-call", e)}
                      >
                        <i className="bi bi-person-workspace me-2"></i> Private
                        Coaching
                      </a>
                    </li>
                    <li>
                      <a
                        className="dropdown-item"
                        href="#"
                        onClick={(e) => handleNavClick("feature-voting", e)}
                      >
                        <i className="bi bi-stars me-2"></i> Feature Voting
                      </a>
                    </li>
                    <li>
                      <a
                        className="dropdown-item"
                        href="#"
                        onClick={(e) => handleNavClick("membership-nft", e)}
                      >
                        <i className="bi bi-gem me-2"></i> Membership NFT
                      </a>
                    </li>
                    <li>
                      <a
                        className="dropdown-item"
                        href="#"
                        onClick={(e) => handleNavClick("journal-page", e)}
                      >
                        <i className="bi bi-bar-chart-line me-2"></i> Trade
                        Journal
                      </a>
                    </li>
                  </ul>
                </li>
              </ul>
            </ul>

            <div className="right-platinum-info">
              <div className="backtodashboardbtn">
                <a href="/dashboard">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    viewBox="0 0 16 16"
                    style={{ marginRight: "8px", verticalAlign: "middle" }}
                  >
                    <path d="M8 3.293l6 6V15a1 1 0 0 1-1 1h-3v-4H6v4H3a1 1 0 0 1-1-1V9.293l6-6zm5 6.707V15h-2v-4H5v4H3v-5.707L8 4.586l5 5.414z" />
                    <path d="M7.293 1.5a1 1 0 0 1 1.414 0l6 6-.707.707L8 2.207 1.293 8.207l-.707-.707 6-6z" />
                  </svg>
                </a>
              </div>

              <div className="d-flex align-items-center position-relative">
                <div
                  className="position-relative me-3"
                  onClick={handleNotificationsClick}
                >
                  <i className="bi bi-bell fs-5 text-light"></i>
                  {unreadNotifications > 0 && (
                    <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-light text-dark">
                      {unreadNotifications}
                    </span>
                  )}
                  {showNotificationsPopup && (
                    <div
                      className="notification-popup position-absolute rounded shadow p-3"
                      style={{
                        display: showNotificationsPopup ? "block" : "none",
                        top: "120%",
                        right: 0,
                        zIndex: 1000,
                        width: "280px",
                        backgroundColor: "#1b1a1a",
                        color: "#f8f8f8",
                        border: "1px solid #333",
                        boxShadow: "0 4px 12px rgba(0,0,0,0.3)",
                      }}
                    >
                      <div className="d-flex justify-content-between align-items-center mb-2">
                        <strong>Notifications</strong>
                        <small className="text-muted" style={{ color: "#aaa" }}>
                          {unreadNotifications} new
                        </small>
                      </div>
                      <hr className="my-2" style={{ borderColor: "#333" }} />
                      <div className="notification-item py-2 px-1">
                        You have a new message.
                      </div>
                      <div className="notification-item py-2 px-1">
                        Your report is ready.
                      </div>
                      <div className="notification-item py-2 px-1">
                        New login from device.
                      </div>
                    </div>
                  )}
                </div>

                {/* Profile Avatar */}
                <div className="position-relative profile-wrapper">
                  <div
                    className="profile-avatar"
                    id="profileAvatar"
                    onClick={handleAvatarClick}
                  >
                    {userData?.profile_photo_url ? (
                      <img
                        src={userData.profile_photo_url}
                        alt="Profile"
                        style={{
                          width: "100%",
                          height: "100%",
                          objectFit: "cover",
                          borderRadius: "50%",
                        }}
                      />
                    ) : (
                      <span>P</span>
                    )}
                  </div>

                  {showProfileDropdown && (
                    <div className="profile-dropdown">
                      <a
                        href="#"
                        className="dropdown-item"
                        onClick={(e) => {
                          e.preventDefault();
                          setShowEditProfile(true);
                        }}
                      >
                        Edit Profile
                      </a>
                      <a
                        href="/dashboard"
                        className="dropdown-item text-danger"
                      >
                        Logout
                      </a>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </nav>

      {showEditProfile && (
        <div className="edit-profile-modal">
          <EditProfile />
          <div className="text-center">
            <button
              className="btn btn-danger"
              onClick={() => setShowEditProfile(false)}
            >
              Close
            </button>
          </div>
        </div>
      )}

      {/* Main Content */}
      <div className="container-fluid p-4">
        {activeSection === "dashboard" && (
          <>
            <div className="row header-section mb-4">
              <div className="col-md-8">
                <h1>{getUKGreeting()}, Platinum Member</h1>

                <p className="text-white">
                  Welcome to your exclusive platinum dashboard. Access premium
                  features, connect with analysts, and elevate your trading
                  experience.
                </p>
                <div className="d-flex flex-wrap align-items-center mt-3">
                  <div
                    className="call-credits me-3 mb-2"
                    onClick={() => setShowCreditPopup(true)}
                    style={{ cursor: "pointer" }}
                  >
                    <i className="bi bi-clock me-1"></i>
                    <span>
                      Call Credits:{" "}
                      {callCredits !== null
                        ? `${callCredits} hours remaining`
                        : "Loading..."}
                    </span>
                  </div>

                  <a href="/benefits" className="benefits-link mb-2">
                    View Benefits <i className="bi bi-chevron-right"></i>
                  </a>
                </div>
              </div>
              <div className="col-md-4 d-flex justify-content-end align-items-start">
                <div className="large-profile-avatar">
                  {userData?.profile_photo_url ? (
                    <img
                      src={userData.profile_photo_url}
                      alt="Profile"
                      style={{
                        width: "100%",
                        height: "100%",
                        objectFit: "cover",
                        borderRadius: "50%",
                      }}
                    />
                  ) : (
                    <span>Loading..</span>
                  )}
                </div>
              </div>
            </div>

            {/* Dashboard Tabs */}
            <div className="tabs-container mb-4">
              <div className="nav-tabs">
                <button
                  className="tab-button"
                  onClick={() => setActiveDashboardTab("market")}
                >
                  Dashboard
                </button>
                <button
                  className="tab-button"
                  onClick={() => setActiveDashboardTab("schedule-Calls")}
                >
                  Schedule Calls
                </button>
                <button
                  className="tab-button"
                  onClick={() => setActiveDashboardTab("webinars")}
                >
                  Webinars
                </button>
                <button
                  className="tab-button"
                  onClick={() => setActiveDashboardTab("leaderboard")}
                >
                  Leaderboard
                </button>
              </div>
            </div>

            {activeDashboardTab === "market" && (
              <div className="row">
                <div className="col-lg-6 mb-4">
                  <MarketInsights />
                </div>

                {userData?.role === "analyst" ? (
                  <div className="col-6 mb-4">
                    <ChatWithAnalyst />
                  </div>
                ) : (
                  <div className="col-lg-5 mb-4">
                    <div className="card chat-card">
                      <div className="card-body">
                        <h5 className="card-title mb-4 text-white">
                          Chat with Analyst
                        </h5>
                        <div className="chat-container">
                          {(isAnalyst ? analystChats : messages).map(
                            (chatOrMsg) => {
                              const chat = isAnalyst ? chatOrMsg : { messages };
                              const chatId = isAnalyst
                                ? chatOrMsg.id
                                : "user-chat";
                              const userLabel = isAnalyst
                                ? `Chat with ${chat.user_username}`
                                : null;

                              return (
                                <div key={chatId}>
                                  {userLabel && (
                                    <div className="fw-bold text-white mb-2">
                                      {userLabel}
                                    </div>
                                  )}
                                  {chat.messages.map((msg) => {
                                    const isCurrentUser =
                                      msg.sender_name === userData?.username;
                                    const profilePhoto = isCurrentUser
                                      ? userData?.profile_photo_url
                                      : msg.sender_profile_photo_url;

                                    return (
                                      <div
                                        key={msg.id}
                                        className={`chat-message d-flex flex-column ${
                                          isCurrentUser
                                            ? "align-items-end"
                                            : "align-items-start"
                                        } mb-3`}
                                      >
                                        <div className="d-flex align-items-end">
                                          {!isCurrentUser && (
                                            <img
                                              src={
                                                profilePhoto ||
                                                "/default-user.png"
                                              }
                                              className="chat-avatar me-2"
                                              alt="Sender"
                                              style={{
                                                width: "40px",
                                                height: "40px",
                                                borderRadius: "50%",
                                                objectFit: "cover",
                                              }}
                                            />
                                          )}
                                          <div className="message-bubble text-white">
                                            <div className="sender-name text-white fw-bold mb-1">
                                              {isCurrentUser
                                                ? "You"
                                                : msg.sender_name}
                                            </div>
                                            <div className="message-text">
                                              {msg.content}
                                            </div>
                                            <div className="message-time text-end mt-1 small">
                                              {new Date(
                                                msg.timestamp
                                              ).toLocaleTimeString([], {
                                                hour: "2-digit",
                                                minute: "2-digit",
                                                hour12: true,
                                              })}
                                            </div>
                                          </div>
                                          {isCurrentUser && (
                                            <img
                                              src={
                                                profilePhoto ||
                                                "/default-user.png"
                                              }
                                              className="chat-avatar ms-2"
                                              alt="Me"
                                              style={{
                                                width: "40px",
                                                height: "40px",
                                                borderRadius: "50%",
                                                objectFit: "cover",
                                              }}
                                            />
                                          )}
                                        </div>
                                      </div>
                                    );
                                  })}
                                </div>
                              );
                            }
                          )}

                          <div className="chat-input-container mt-2">
                            <input
                              type="text"
                              className="form-control"
                              placeholder="Type your message..."
                              value={input}
                              onChange={(e) => setInput(e.target.value)}
                              onKeyDown={(e) => {
                                if (e.key === "Enter") {
                                  e.preventDefault();
                                  sendMessage();
                                }
                              }}
                            />
                            <button
                              className="send-button"
                              onClick={sendMessage}
                            >
                              <i className="bi bi-send-fill"></i>
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
                <StockDashboard />
                <MarketOverview />
                <LatestNews />
                <RealtimeQuotes />
                <ExtraContent />
              </div>
            )}

            {activeDashboardTab === "schedule-Calls" && <ScheduleCall />}
            {activeDashboardTab === "webinars" && <Wabinars />}
            {activeDashboardTab === "leaderboard" && <Leaderboard />}
          </>
        )}

        {/* Placeholder for Other Sections */}
        {activeSection === "briefing" && <WeeklyBriefing />}
        {activeSection === "challenges" && <TradingChallenges />}
        {activeSection === "leaderboard" && <Leaderboard />}
        {activeSection === "news" && <MarketNews />}
        {activeSection === "schedule-call" && <ScheduleCall />}
        {activeSection === "webinars" && <Wabinars />}
        {activeSection === "portfolio-heatmap" && <PortfolioHeatmap />}
        {activeSection === "feature-voting" && <FeatureVoting />}
        {activeSection === "membership-nft" && <PlatinumMembershipNFT />}
        {activeSection === "journal-page" && <JournalPage />}
      </div>
      <ChatFeature />
      <CreditRequestPopup
        show={showCreditPopup}
        onClose={() => setShowCreditPopup(false)}
      />
    </div>
  );
};

export default PlatinumDashboard;
