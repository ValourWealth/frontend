import axios from "axios";
import {
  Book,
  Building,
  CandlestickChart,
  DollarSign,
  FileText,
  Gem,
  GraduationCap,
  Home,
  Menu,
  Moon,
  Package,
  Star,
  Sun,
  Tv,
  Users,
} from "lucide-react";
import { useEffect, useState } from "react";
import user_logo from "../assets/images/dashboard_logo.png";
import valourWealthInverted from "../assets/images/full-transparent.png";
import valourWealth from "../assets/images/Valour_Wealth.png";
import "../styles/dashboard.css";
import CryptoData from "./DashboardSidebarComp/CryptoData";
import DashboardData from "./DashboardSidebarComp/DashboardData";
import EditProfile from "./DashboardSidebarComp/EditProfile";
import Emerald from "./DashboardSidebarComp/Emerald";
import ForexData from "./DashboardSidebarComp/ForexData";
import HistoricalDataFlow from "./DashboardSidebarComp/HistoricalDataFlow";
import LiveSessions from "./DashboardSidebarComp/LiveSessions";
import Logout from "./DashboardSidebarComp/Logout";
import MainTable from "./DashboardSidebarComp/MainTable";
import Mentorship from "./DashboardSidebarComp/Mentorship";
import OptionsAcademy from "./DashboardSidebarComp/OptionsAcademy";
import Platinum from "./DashboardSidebarComp/Platinum";
import ReleaseNotes from "./DashboardSidebarComp/ReleaseNotes";
import Resources from "./DashboardSidebarComp/Resources";
import StocksData from "./DashboardSidebarComp/StocksData";
import TradeAlertsTable from "./DashboardSidebarComp/TradeAlertsTable";
import Tradegpt from "./DashboardSidebarComp/Tradegpt";
import TradeGPTChatbot from "./DashboardSidebarComp/TradeGptChatbot";
import TradeProducts from "./DashboardSidebarComp/TradeProducts";
import WealthSeries from "./DashboardSidebarComp/WealthSeries";
import StockTicker from "./StockTicker";

const Dashboard = () => {
  const [darkMode, setDarkMode] = useState(true);
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false);
  const [activeTab, setActiveTab] = useState("dashboard");
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [userData, setUserData] = useState(null);
  const [error, setError] = useState(null);
  const accessToken = localStorage.getItem("accessToken");
  const [photoURL, setPhotoURL] = useState(null);

  const API_BASE_URL = process.env.REACT_APP_API_URL?.endsWith("/")
    ? process.env.REACT_APP_API_URL
    : process.env.REACT_APP_API_URL + "/";

  const USER_API_URL = `${API_BASE_URL}api/user/profile/`;

  // Apply CSS variables for dark mode
  useEffect(() => {
    if (darkMode) {
      document.documentElement.style.setProperty("--text-color", "#ffffff"); // White text
      document.documentElement.style.setProperty(
        "--background-color",
        "#1c1e20"
      ); // Full black background
      document.documentElement.style.setProperty("--sidebar-color", "#1a1d1e"); // Full black sidebar
      document.documentElement.style.setProperty(
        "--card-background",
        "#000000"
      ); // Full black cards
      document.documentElement.style.setProperty(
        "--input-background",
        "#222222"
      ); // Darker input fields
      document.documentElement.style.setProperty("--border-color", "#444444"); // Softer borders in dark mode
    } else {
      document.documentElement.style.setProperty("--text-color", "#000000"); // Black text
      document.documentElement.style.setProperty(
        "--background-color",
        "#ffffff"
      ); // White background
      document.documentElement.style.setProperty("--sidebar-color", "#f8f9fa"); // Light sidebar
      document.documentElement.style.setProperty(
        "--card-background",
        "#ffffff"
      ); // White cards
      document.documentElement.style.setProperty(
        "--input-background",
        "#ffffff"
      ); // White input fields
      document.documentElement.style.setProperty("--border-color", "#dddddd"); // Light borders
    }

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
        setUserData(response.data);
        // grab profile picture (may be null)
        if (response.data?.profile_photo_url) {
          setPhotoURL(response.data.profile_photo_url);
        }
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
  }, [darkMode, accessToken]);

  // Responsive behavior: auto-collapse sidebar on smaller screens
  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
      if (window.innerWidth < 992) {
        setSidebarCollapsed(true);
      } else if (window.innerWidth >= 992) {
        if (windowWidth < 992) {
          setSidebarCollapsed(false);
        }
      }
    };

    // Set initial state based on window width
    handleResize();

    // Add event listener for window resize
    window.addEventListener("resize", handleResize);

    // Cleanup
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [windowWidth]);

  // Handle tab click - collapse sidebar after selection on mobile
  const handleTabClick = (tabId) => {
    setActiveTab(tabId);

    // Auto-collapse after tab selection on smaller screens
    if (windowWidth < 992 && !sidebarCollapsed) {
      setSidebarCollapsed(true);
    }
  };
  const menuItems = [
    { id: "dashboard", label: "Dashboard", icon: <Home size={20} /> },
    { id: "live-sessions", label: "Live Sessions", icon: <Tv size={20} /> },
    {
      id: "darkpool-data",
      label: "Darkpool Data",
      icon: <Building size={20} />,
    },
    // { id: "trading-tools", label: "Trading Tools", icon: <Wrench size={20} /> },
    {
      id: "resources",
      label: "Platform walkthrough",
      icon: <Book size={20} />,
    },
    {
      id: "Trade-products",
      label: "ValourWealth Products",
      icon: <Package size={20} />,
    },
    {
      id: "wealth-series",
      label: "Wealth Management Series",
      icon: <DollarSign size={20} />,
      isNew: true,
    },
    { id: "emerald", label: "Beginner Hub", icon: <Gem size={20} /> },
    { id: "platinum", label: "Platinum Program", icon: <Star size={20} /> },
    {
      id: "options-academy",
      label: "Trading Academy",
      icon: <GraduationCap size={20} />,
    },

    { id: "mentorship", label: "1 on 1 Mentorship", icon: <Users size={20} /> },

    {
      id: "trade-gpt",
      label: "TradeGpt",
      icon: <CandlestickChart size={20} />,
    },
    {
      id: "releasenotes",
      label: "Release Notes",
      icon: <FileText size={20} />,
      isNew: true,
    },
  ];

  const renderContent = () => {
    const allowedTabs = {
      free: [
        "dashboard",
        "live-sessions",
        "resources",
        "wealth-series",
        "options-academy",
        "mentorship",
        "Trade-products",
        "edit-profile",
        "logout",
        "trade-gpt",
        "releasenotes",
      ],
      premium: [
        "dashboard",
        "live-sessions",
        "darkpool-data",
        "resources",
        "wealth-series",
        "emerald",
        "platinum",
        "options-academy",
        "mentorship",
        "Trade-products",
        "edit-profile",
        "logout",
        "maintable",
        "atsTable",
        "trade-gpt",
        "releasenotes",
      ],
      platinum: [
        "dashboard",
        "live-sessions",
        "darkpool-data",
        "trading-tools",
        "resources",
        "wealth-series",
        "emerald",
        "platinum",
        "options-academy",
        "mentorship",
        "Trade-products",
        "edit-profile",
        "logout",
        "maintable",
        "atsTable",
        "main-table",
        "trade-gpt",
        "trade-alerts",
        "releasenotes",
      ],
    };

    const subscription = userData?.subscription_status || "free";
    const isAdmin = userData?.is_staff || userData?.is_superuser;
    const currentAllowedTabs = allowedTabs[subscription] || [];

    const isRestricted = !isAdmin && !currentAllowedTabs.includes(activeTab);

    return (
      <div className={darkMode ? "dark-mode-content" : "light-mode-content"}>
        {isRestricted ? (
          <div className="text-center py-5">
            <h4 className="text-danger">🔒 Unable to access</h4>
            <p className="text-muted">
              This section is available only to eligible members based on your
              current plan.
            </p>
          </div>
        ) : (
          (() => {
            switch (activeTab) {
              case "dashboard":
                return <DashboardData darkMode={darkMode} />;
              case "darkpool-data":
                return <HistoricalDataFlow darkMode={darkMode} />;
              case "live-sessions":
                return <LiveSessions darkMode={darkMode} />;

              case "Trade-products":
                return (
                  <TradeProducts
                    darkMode={darkMode}
                    setActiveTab={setActiveTab}
                  />
                );
              case "emerald":
                return <Emerald darkMode={darkMode} />;
              case "platinum":
                return <Platinum darkMode={darkMode} />;
              case "options-academy":
                return <OptionsAcademy darkMode={darkMode} />;
              case "wealth-series":
                return <WealthSeries darkMode={darkMode} />;
              case "mentorship":
                return <Mentorship darkMode={darkMode} />;
              case "resources":
                return <Resources darkMode={darkMode} />;
              case "forex":
                return <ForexData darkMode={darkMode} />;
              case "crypto":
                return <CryptoData darkMode={darkMode} />;
              case "stocks":
                return <StocksData darkMode={darkMode} />;
              case "edit-profile":
                return <EditProfile darkMode={darkMode} />;
              case "logout":
                return <Logout darkMode={darkMode} />;
              case "trade-alerts":
                return <TradeAlertsTable darkMode={darkMode} />;
              case "main-table":
                return <MainTable darkMode={darkMode} />;
              case "trade-gpt":
                return <Tradegpt darkMode={darkMode} />;
              case "releasenotes":
                return <ReleaseNotes darkMode={darkMode} />;
              default:
                return null;
            }
          })()
        )}
      </div>
    );
  };

  return (
    <div className={darkMode ? "bg-dark text-white vh-100" : "bg-light vh-100"}>
      <div className="row dashboard_row g-0">
        {/* Sidebar */}
        <div
          className={`${
            sidebarCollapsed ? "col-1" : "col-3"
          } position-fixed h-100 transition-width sidebar-mbl`}
          style={{
            backgroundColor: "var(--background-color)",
            color: "var(--text-color)",
          }}
        >
          {/* Sidebar Header */}
          <div className="d-flex justify-content-between align-items-center border-bottom p-lg-3 p-sm-2 left-toggle">
            {!sidebarCollapsed && (
              <h4
                className={`m-0 d-flex align-items-center ${
                  darkMode ? "text-white" : ""
                }`}
              >
                <div className={`sidebar_logo ${darkMode ? "dark-mode" : ""}`}>
                  <img
                    src={valourWealth}
                    alt="Logo"
                    className="sidebar-logo obj_fit me-2 default-logo"
                  />
                  <img
                    src={valourWealthInverted}
                    alt="Logo"
                    className="sidebar-logo obj_fit me-2 inverted-logo"
                  />
                </div>
              </h4>
            )}
            <button
              className={`btn mbl-toggle btn-link p-0 ${
                darkMode ? "text-white" : ""
              }`}
              onClick={() => setSidebarCollapsed(!sidebarCollapsed)}
            >
              <Menu />
            </button>
          </div>

          {/* Navigation Menu */}
          <div className="nav flex-column">
            {menuItems.map((item) => (
              <div key={item.id} className="position-relative">
                <button
                  onClick={() => handleTabClick(item.id)}
                  className={`nav-link border-0 d-flex align-items-center justify-content-${
                    sidebarCollapsed ? "center" : "start"
                  } ${activeTab === item.id ? "active" : ""} ${
                    darkMode ? "text-white" : ""
                  }`}
                  style={darkMode ? { color: "white" } : {}}
                >
                  <span
                    className="me-2"
                    style={darkMode ? { color: "white" } : {}}
                  >
                    {item.icon}
                  </span>
                  {!sidebarCollapsed && (
                    <div className="d-flex align-items-center justify-content-between flex-grow-1">
                      <span style={darkMode ? { color: "white" } : {}}>
                        {item.label}
                      </span>

                      {/*  Add Play Icon for Dropdown Indicator */}
                      {(item.id === "trading-tools" ||
                        item.id === "darkpool-data") && (
                        <i
                          className="fas fa-play ms-2 indicator"
                          style={{
                            fontSize: "10px",
                            transform: "rotate(360deg)",
                            color: "#000",
                          }}
                        ></i>
                      )}
                    </div>
                  )}
                </button>

                {/* Dropdown for   */}
                {item.id === "trading-tools" && (
                  <div className="dropdown-container shadow tools-container p-0">
                    <div className="dropdown-content-wrap">
                      <div
                        className="p-2 dropdown-inside"
                        onClick={() => setActiveTab("forex")}
                      >
                        Forex
                      </div>
                      <div
                        className="p-2 dropdown-inside"
                        onClick={() => setActiveTab("crypto")}
                      >
                        Crypto
                      </div>
                    </div>
                  </div>
                )}
                {/* Darkpool Data Dropdown */}
                {item.id === "darkpool-data" && (
                  <div className="dropdown-container shadow tools-container p-0">
                    <div className="dropdown-content-wrap">
                      <div
                        className="p-2 dropdown-inside"
                        onClick={() => setActiveTab("main-table")}
                      >
                        Main Table
                      </div>
                      <div
                        className="p-2 dropdown-inside"
                        onClick={() => setActiveTab("trade-alerts")}
                      >
                        ATS Alerts
                      </div>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Dark Mode Toggle */}
          <div className="position-absolute bottom-0 w-100 ">
            <button
              onClick={() => setDarkMode(!darkMode)}
              className={`btn btn-link dark-mode-btn d-flex align-items-center w-100 text-decoration-none night-btn ${
                darkMode ? "text-white" : ""
              }`}
              style={darkMode ? { color: "white" } : {}}
            >
              {darkMode ? (
                <Sun className="me-2" style={{ color: "white" }} />
              ) : (
                <Moon className="me-2" />
              )}
              {!sidebarCollapsed && (
                <span style={darkMode ? { color: "white" } : {}}>
                  {darkMode ? "Light Mode" : "Dark Mode"}{" "}
                </span>
              )}
            </button>
          </div>
        </div>

        {/* Main Content Area */}
        <div
          className={`${
            sidebarCollapsed ? "col-11 offset-1" : "col-9 offset-3"
          } transition-margin`}
        >
          <div
            className="container-fluid position-relative"
            style={{
              backgroundColor: "var(--background-color)",
              color: "var(--text-color)",
              minHeight: "100vh",
            }}
          >
            {/* Header with Search */}
            <div className="row dashboard-head">
              <div className="col search-main">
                <StockTicker />
              </div>

              <div className="col-auto user_info position-relative">
                <img
                  src={photoURL || user_logo}
                  alt="Profile"
                  className="rounded-circle"
                  width="40"
                  height="40"
                />
                <div className="username_data">
                  <h5 className={`mb-0 ${darkMode ? "text-white" : ""}`}>
                    {userData?.username || "Loading..."}
                  </h5>
                </div>

                {/* Dropdown Menu */}
                <div className="user-dropdown shadow py-0">
                  <div
                    className="dropdown-item"
                    onClick={() => setActiveTab("edit-profile")}
                  >
                    Edit Profile
                  </div>
                  <div
                    className="dropdown-item"
                    onClick={() => setActiveTab("logout")}
                  >
                    Logout
                  </div>
                </div>
              </div>
            </div>

            {/* Content Card */}
            <div
              className={
                darkMode ? "" : "card dashboard_card text-dark right-bar py-0"
              }
            >
              {renderContent()}
            </div>
          </div>

          {/* Chatbot Floating Button */}
          <div
            style={{
              position: "fixed",
              bottom: "20px",
              right: "20px",
              zIndex: 9999,
            }}
          >
            <TradeGPTChatbot />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
