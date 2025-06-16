import { useState } from "react";
import { useNavigate } from "react-router-dom";
import oneMentorship from "../components/DashboardSidebarComp/images/1 on 1  Mentrship.jpg";
import beginnerhub from "../components/DashboardSidebarComp/images/beginnerhub.jpg";
import valourThemeCard from "../components/DashboardSidebarComp/images/products-theme-card.jpg";
import valourThemeCard2 from "../components/DashboardSidebarComp/images/products-theme-card2.jpg";
import tradesignal from "../components/DashboardSidebarComp/images/signaltrade.jpg";
import TradeGpt from "../components/DashboardSidebarComp/images/TradeGPT.jpg";
import TradingAcademy from "../components/DashboardSidebarComp/images/Trading Academy.jpg";
import "../components/DashboardSidebarComp/styles/products.css";

function Products({ darkMode, setActiveTab }) {
  const [activeState, setAciveState] = useState("valour-products");
  const navigate = useNavigate();

  return (
    <>
      <div className="container">
        <div className="row mt-4">
          <div className="col-lg-3">
            <div
              className="valour-products-theme-card"
              onClick={() => navigate("/contact?product=WealthSeries")}
            >
              <img
                className="obj_fit"
                src={valourThemeCard}
                alt="Wealth Series"
                style={{ borderRadius: "30px" }}
              />
            </div>
          </div>

          <div className="col-lg-3">
            <div
              className="valour-products-theme-card"
              onClick={() => navigate("/contact?product=Platinum")}
            >
              <img
                className="obj_fit"
                src={valourThemeCard2}
                alt="Platinum Program"
                style={{ borderRadius: "30px" }}
              />
            </div>
          </div>

          <div className="col-lg-3">
            <div
              className="valour-products-theme-card"
              onClick={() => navigate("/contact?product=TradeGPT")}
            >
              <img
                className="obj_fit"
                src={TradeGpt}
                alt="TradeGPT"
                style={{ borderRadius: "30px" }}
              />
            </div>
          </div>

          <div className="col-lg-3">
            <div
              className="valour-products-theme-card"
              onClick={() => navigate("/contact?product=OptionsAcademy")}
            >
              <img
                className="obj_fit"
                src={TradingAcademy}
                alt="Trading Academy"
                style={{ borderRadius: "30px" }}
              />
            </div>
          </div>

          <div className="col-lg-3">
            <div
              className="valour-products-theme-card"
              onClick={() => navigate("/contact?product=Mentorship")}
            >
              <img
                className="obj_fit"
                src={oneMentorship}
                alt="1-on-1 Mentorship"
                style={{ borderRadius: "30px" }}
              />
            </div>
          </div>

          <div className="col-lg-3">
            <div
              className="valour-products-theme-card"
              onClick={() => navigate("/contact?product=BeginnerHub")}
            >
              <img
                className="obj_fit"
                src={beginnerhub}
                alt="Beginner Hub"
                style={{ borderRadius: "30px" }}
              />
            </div>
          </div>

          <div className="col-lg-3">
            <div
              className="valour-products-theme-card"
              onClick={() => {
                navigate("/contact?product=TradeSignal");
              }}
            >
              <img
                className="obj_fit"
                src={tradesignal}
                alt="Trade signal"
                style={{ borderRadius: "30px" }}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Products;
