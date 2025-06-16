import { useState } from "react";
import Marketplace from "./MarketPlace";
import NFTCollection from "./NftCollection";

const PlatinumMembershipNFT = () => {
  const [activeTab, setActiveTab] = useState("membership-badge");

  const handleTabChange = (tab) => {
    setActiveTab(tab);
  };

  return (
    <div className="platinum-membership-container">
      <div className="header">
        <div className="icon-container">
          <i className="bi bi-shield-lock"></i>
        </div>
        <div className="title-container">
          <h1>Platinum Membership NFT</h1>
          <p>Your exclusive digital membership badge and collectible</p>
        </div>
      </div>

      {/* Navigation Tabs */}
      <div className="nav-tabs-container">
        <div className="tabs-container">
          <div className="nav-tabs">
            <button
              className={`tab-button ${
                activeTab === "membership-badge" ? "active" : ""
              }`}
              onClick={() => handleTabChange("membership-badge")}
            >
              Membership Badge
            </button>
            <button
              className={`tab-button ${
                activeTab === "nft-collection" ? "active" : ""
              }`}
              onClick={() => handleTabChange("nft-collection")}
            >
              NFT Collection
            </button>
            <button
              className={`tab-button ${
                activeTab === "marketplace" ? "active" : ""
              }`}
              onClick={() => handleTabChange("marketplace")}
            >
              Marketplace
            </button>
          </div>
        </div>
      </div>

      {/* Membership Badge Tab Content */}
      {activeTab === "membership-badge" && (
        <div className="membership-content">
          <div className="row">
            {/* Left Column - Membership NFT */}
            <div className="col-lg-8">
              <div className="content-card">
                <h2>Your Platinum Membership NFT</h2>
                <div className="nft-display">
                  <div className="nft-badge">
                    <svg
                      width="100%"
                      height="100%"
                      viewBox="0 0 200 200"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <circle
                        cx="100"
                        cy="100"
                        r="90"
                        stroke="white"
                        strokeWidth="4"
                      />
                      <path
                        d="M100 140C100 140 130 120 130 90C130 73.4315 116.569 60 100 60C83.4315 60 70 73.4315 70 90C70 120 100 140 100 140Z"
                        stroke="white"
                        strokeWidth="4"
                      />
                      <circle
                        cx="100"
                        cy="90"
                        r="15"
                        stroke="white"
                        strokeWidth="4"
                      />
                    </svg>
                  </div>
                  <div className="member-info">
                    <div className="member-badge">Platinum Member</div>
                    <h3>John Doe</h3>
                    <p>Member since April 12, 2025</p>
                    <div className="badge-actions">
                      <button className="btn btn-secondary">
                        <i className="bi bi-download me-2"></i>
                        Download Badge
                      </button>
                      <button className="btn btn-outline-light">
                        <i className="bi bi-share me-2"></i>
                        Share Badge
                      </button>
                    </div>
                  </div>
                </div>

                <div className="token-details">
                  <div className="token-row">
                    <div className="token-label">Token ID</div>
                    <div className="token-value">PT-25-04-12-8743</div>
                  </div>
                  <div className="token-row">
                    <div className="token-label">Network</div>
                    <div className="token-value">Ethereum</div>
                  </div>
                  <div className="token-row">
                    <div className="token-label">Token Address</div>
                    <div className="token-value">
                      0x7a58...eb89
                      <button className="copy-btn">
                        <i className="bi bi-clipboard"></i>
                      </button>
                    </div>
                  </div>
                  <div className="blockchain-link">
                    <button className="btn btn-block btn-dark">
                      <i className="bi bi-box-arrow-up-right me-2"></i>
                      View on Blockchain Explorer
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column - Membership Benefits */}
            <div className="col-lg-4">
              <div className="content-card">
                <h2>Membership Benefits</h2>
                <div className="benefits-card">
                  <div className="card-header">
                    <i className="bi bi-shield-lock-fill"></i>
                    <h3>Platinum Perks</h3>
                  </div>
                  <ul className="benefits-list">
                    <li>
                      <i className="bi bi-check-circle-fill"></i> Exclusive
                      access to premium trading tools
                    </li>
                    <li>
                      <i className="bi bi-check-circle-fill"></i> Priority
                      customer support
                    </li>
                    <li>
                      <i className="bi bi-check-circle-fill"></i> Early access
                      to new features
                    </li>
                    <li>
                      <i className="bi bi-check-circle-fill"></i> Voting rights
                      on platform development
                    </li>
                    <li>
                      <i className="bi bi-check-circle-fill"></i> Private
                      coaching sessions
                    </li>
                    <li>
                      <i className="bi bi-check-circle-fill"></i> Trading
                      challenges with rewards
                    </li>
                  </ul>
                </div>

                <div className="benefits-card mt-4">
                  <div className="card-header">
                    <h3>Membership Details</h3>
                  </div>
                  <div className="membership-details">
                    <div className="detail-row">
                      <div className="detail-label">Status</div>
                      <div className="detail-value">
                        <span className="status-active">Active</span>
                      </div>
                    </div>
                    <div className="detail-row">
                      <div className="detail-label">Valid Until</div>
                      <div className="detail-value">April 12, 2026</div>
                    </div>
                    <div className="detail-row">
                      <div className="detail-label">Renewal</div>
                      <div className="detail-value">Automatic</div>
                    </div>
                  </div>
                </div>

                <div className="benefits-card mt-4">
                  <div className="card-header">
                    <i className="bi bi-info-circle"></i>
                    <h3>About NFT Badges</h3>
                  </div>
                  <p className="about-nft">
                    Your membership badge is a unique digital asset stored on
                    the blockchain. It verifies your platinum status and
                    provides exclusive benefits across our platform and partner
                    services.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* NFT Collection Tab Content */}
      {activeTab === "nft-collection" && <NFTCollection />}

      {/* Marketplace Tab Content */}
      {activeTab === "marketplace" && <Marketplace />}
    </div>
  );
};

export default PlatinumMembershipNFT;
