import { useEffect, useState } from "react";
import {
  Route,
  BrowserRouter as Router,
  Routes,
  useLocation,
} from "react-router-dom";

import Dashboard from "./components/Dashboard";
import Benefits from "./components/DashboardPlatinum/Benefits";
import ViewChallenge from "./components/DashboardPlatinum/ViewChallenge";
import ReleaseNotes from "./components/DashboardSidebarComp/ReleaseNotes";
import TradingTools from "./components/DashboardSidebarComp/TradingTools";
import Layout from "./components/layout";
import News from "./components/News";
import AboutUs from "./pages/AboutUs";
import BlogDetail from "./pages/BlogDetail";
import ContactPage from "./pages/ContactPage";
import CourseDetails from "./pages/CourseDetails";
import CryptoDetails from "./pages/CryptoDetails";
import CustomerSupport from "./pages/CustomerSupport";
import EventsDetails from "./pages/EventsDetails";
import Feature from "./pages/Feature";
import Home from "./pages/Home";
import LegalDisclaimer from "./pages/LegalDisclaimer";
import Login from "./pages/Login";
import MarketDetails from "./pages/MarketDetails";
import PlatinumDashboard from "./pages/PlatinumDashboard";
import PrivacyPolicy from "./pages/Privacypolicy";
import Products from "./pages/Products";
import RequestDemo from "./pages/RequestDemo";
import Review from "./pages/Review";
import TechnologyDetail from "./pages/TechnologyDetail";
import TermsService from "./pages/TermsService";
import UsePolicy from "./pages/UsePolicy";
import WealthDetails from "./pages/WealthDetails";

import "./App.css";
import logo from "./assets/images/Valour_Wealth.png";

function LoaderWrapper({ children }) {
  const location = useLocation();
  const [showLoader, setShowLoader] = useState(false);
  const [fadeOut, setFadeOut] = useState(false);

  const excludedRoutes = [
    "/market-details",
    "/technology-details",
    "/wealth-details",
    "/events-details",
    "/our-products",
    "/platinum-dashboard",
  ];

  useEffect(() => {
    const navEntry = performance.getEntriesByType("navigation")[0];
    const isInitialLoad =
      navEntry?.type === "navigate" || navEntry?.type === "reload";

    if (isInitialLoad && !excludedRoutes.includes(location.pathname)) {
      setShowLoader(true);
      const t1 = setTimeout(() => setFadeOut(true), 2500);
      const t2 = setTimeout(() => setShowLoader(false), 3000);
      return () => {
        clearTimeout(t1);
        clearTimeout(t2);
      };
    }
  }, [location.pathname]);

  return (
    <>
      {showLoader && (
        <div className={`preloader ${fadeOut ? "hidden" : ""}`}>
          <div className="rotating-logo-wrapper">
            <img src={logo} alt="Loading..." className="rotating-logo" />
          </div>
        </div>
      )}
      {children}
    </>
  );
}

function App() {
  return (
    <Router>
      <LoaderWrapper>
        <Routes>
          <Route
            path="/"
            element={
              <Layout>
                <Home />
              </Layout>
            }
          />
          <Route
            path="/about"
            element={
              <Layout>
                <AboutUs />
              </Layout>
            }
          />
          <Route
            path="/features"
            element={
              <Layout>
                <Feature />
              </Layout>
            }
          />
          <Route
            path="/market-details"
            element={
              <Layout>
                <MarketDetails />
              </Layout>
            }
          />
          <Route
            path="/technology-details"
            element={
              <Layout>
                <TechnologyDetail />
              </Layout>
            }
          />
          <Route
            path="/wealth-details"
            element={
              <Layout>
                <WealthDetails />
              </Layout>
            }
          />
          <Route
            path="/events-details"
            element={
              <Layout>
                <EventsDetails />
              </Layout>
            }
          />
          <Route
            path="/blog/:slug"
            element={
              <Layout>
                <BlogDetail />
              </Layout>
            }
          />

          <Route
            path="/crypto-details"
            element={
              <Layout>
                <CryptoDetails />
              </Layout>
            }
          />
          <Route
            path="/trading-tools"
            element={
              <Layout>
                <TradingTools />
              </Layout>
            }
          />

          <Route
            path="/customer-support"
            element={
              <Layout>
                <CustomerSupport />
              </Layout>
            }
          />
          <Route
            path="/leave-a-review"
            element={
              <Layout>
                <Review />
              </Layout>
            }
          />
          <Route
            path="/latest-news"
            element={
              <Layout>
                <News />
              </Layout>
            }
          />
          <Route
            path="/terms-of-service"
            element={
              <Layout>
                <TermsService />
              </Layout>
            }
          />
          <Route
            path="/acceptable-use-policy"
            element={
              <Layout>
                <UsePolicy />
              </Layout>
            }
          />
          <Route
            path="/legal-disclaimer"
            element={
              <Layout>
                <LegalDisclaimer />
              </Layout>
            }
          />
          <Route
            path="/our-products"
            element={
              <Layout>
                <Products />
              </Layout>
            }
          />

          <Route path="/academy/:courseId" element={<CourseDetails />} />
          <Route
            path="/request-a-demo"
            element={
              <Layout>
                <RequestDemo />
              </Layout>
            }
          />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/login" element={<Login />} />
          <Route path="/Privacy-Policy" element={<PrivacyPolicy />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/platinum-dashboard" element={<PlatinumDashboard />} />
          <Route path="/challenges/:id" element={<ViewChallenge />} />
          <Route path="/benefits" element={<Benefits />} />
          <Route path="/releasenotes" element={<ReleaseNotes />} />
        </Routes>
      </LoaderWrapper>
    </Router>
  );
}

export default App;
