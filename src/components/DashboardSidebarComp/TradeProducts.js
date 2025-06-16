import { useState } from "react";
import oneMentorship from "../DashboardSidebarComp/images/1 on 1  Mentrship.jpg";
import beginnerhub from "../DashboardSidebarComp/images/beginnerhub.jpg";
import valourThemeCard from "../DashboardSidebarComp/images/products-theme-card.jpg";
import valourThemeCard2 from "../DashboardSidebarComp/images/products-theme-card2.jpg";
import tradesignal from "../DashboardSidebarComp/images/signaltrade.jpg";
import TradeGpt from "../DashboardSidebarComp/images/TradeGPT.jpg";
import TradingAcademy from "../DashboardSidebarComp/images/Trading Academy.jpg";
import "../DashboardSidebarComp/styles/products.css";
function TradeProducts({ darkMode, setActiveTab }) {
  const [activeState, setAciveState] = useState("valour-products");

  return (
    <>
      <div className="container">
        <div className="row mt-4">
          <div className="col-lg-3">
            <div
              className="valour-products-theme-card"
              onClick={() => setActiveTab("wealth-series")}
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
              onClick={() => setActiveTab("platinum")}
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
              onClick={() => setActiveTab("trade-gpt")}
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
              onClick={() => setActiveTab("options-academy")}
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
              onClick={() => setActiveTab("mentorship")}
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
              onClick={() => setActiveTab("emerald")}
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
              onClick={() =>
                window.open(
                  "https://t.me/+nO3GSU_Jvts5MGE0",
                  "_blank",
                  "noopener,noreferrer"
                )
              }
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

export default TradeProducts;
