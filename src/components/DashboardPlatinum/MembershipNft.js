import axios from "axios";
import { useEffect, useState } from "react";
import Marketplace from "./MarketPlace";
import NFTCollection from "./NftCollection";

const PlatinumMembershipNFT = () => {
  const [activeTab, setActiveTab] = useState("membership-badge");
  const [userProfile, setUserProfile] = useState(null);

  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const token = localStorage.getItem("accessToken");
        const response = await axios.get(
          "https://backend-production-1e63.up.railway.app/api/profile/",
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );
        setUserProfile(response.data);
      } catch (error) {
        console.error("Error fetching profile:", error);
      }
    };

    fetchProfile();
  }, []);

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
                    <img
                      src={userProfile?.primary_badge?.image_public_url}
                      alt="Membership NFT"
                      style={{
                        width: "120px",
                        height: "120px",
                        borderRadius: "8px",
                      }}
                    />
                  </div>
                  <div className="member-info">
                    <div className="member-badge">
                      {userProfile?.primary_badge?.category ||
                        "Membership Badge"}
                    </div>
                    <h3>{userProfile?.username}</h3>
                    <p>
                      Member since{" "}
                      {userProfile?.created_at
                        ? new Date(userProfile.created_at).toLocaleDateString()
                        : "N/A"}
                    </p>
                    <div className="badge-actions">
                      <a
                        href={userProfile?.primary_badge?.image_public_url}
                        download
                        className="btn btn-secondary"
                      >
                        <i className="bi bi-download me-2"></i>
                        Download Badge
                      </a>
                      <button
                        className="btn btn-outline-light"
                        onClick={() =>
                          navigator.share &&
                          navigator.share({
                            url: userProfile?.primary_badge?.image_public_url,
                          })
                        }
                      >
                        <i className="bi bi-share me-2"></i>
                        Share Badge
                      </button>
                    </div>
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
                  {/* <div className="card-header">
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
                  </div> */}
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
