import heroImg from "../DashboardSidebarComp/images/benefit.png";

const Benefits = () => {
  return (
    <div className="benefits-container">
      {/* Hero Section */}
      <section className="hero-section">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6">
              <h1 className="hero-title">
                Unlock <span className="text-benefits">Premium Benefits</span>{" "}
                with Valour Wealth Platinum Dashboard
              </h1>
              <p className="hero-description">
                Step into the future of intelligent investing with Valour
                Wealth. The Platinum Dashboard offers high-performance tools,
                exclusive content, and advanced AI analytics—built for
                sophisticated investors ready to take control of their financial
                future.
              </p>
              <div className="hero-stats">
                <div className="stat-item">
                  <h3>$2.5B+</h3>
                  <p>Assets Under Management</p>
                </div>
                <div className="stat-item">
                  <h3>15,000+</h3>
                  <p>Satisfied Clients</p>
                </div>
                <div className="stat-item">
                  <h3>25+</h3>
                  <p>Industry Experience</p>
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="hero-image">
                <img className="obj_fit" src={heroImg} alt="" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Premium Features Section */}
      <section className="features-section">
        <div className="container">
          <div className="text-center mb-5">
            <h2 className="section-title">Exclusive Platinum Features</h2>
            <p className="section-subtitle">
              A full ecosystem of tools and services curated for elite
              investors.
            </p>
          </div>
          <div className="row g-4">
            <div className="col-lg-4 col-md-6">
              <div className="feature-card">
                <div className="feature-icon">
                  <i className="fas fa-chart-line"></i>
                </div>
                <h4>AI-Powered Portfolio Analysis</h4>
                <p>Deep portfolio intelligence through cutting-edge AI.</p>
                <ul className="feature-list">
                  <li>Correlation & diversification risk </li>
                  <li>Asset clustering and exposure insights </li>
                  <li>Sentiment and predictive analysis </li>
                  <li>Smart alerts and optimization strategies </li>
                </ul>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="feature-card">
                <div className="feature-icon">
                  <i className="fas fa-shield-alt"></i>
                </div>
                <h4>Latest News & Sentiment Scoring</h4>
                <p>
                  Stay ahead with real-time financial news and AI-generated
                  sentiment summaries.
                </p>
                <ul className="feature-list">
                  <li>News filtered by your portfolio </li>
                  <li>Bullish/bearish scoring</li>
                  <li>Event-driven insights</li>
                </ul>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="feature-card">
                <div className="feature-icon">
                  <i className="fas fa-user-tie"></i>
                </div>
                <h4>Portfolio Heatmaps & Visuals </h4>
                <p>Intuitive visualizations to help you see what matters.</p>
                <ul className="feature-list">
                  <li>Sector & asset allocation heatmaps</li>
                  <li>
                    Performance breakdown by region, asset class, and risk{" "}
                  </li>
                  <li>Historical trend overlays</li>
                </ul>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="feature-card">
                <div className="feature-icon">
                  <i className="fas fa-globe"></i>
                </div>
                <h4>Trading Challenges & Badges </h4>
                <p>Compete, learn, and earn.</p>
                <ul className="feature-list">
                  <li>Join interactive challenges </li>
                  <li>Unlock achievement badges </li>
                  <li>Benchmark your performance</li>
                </ul>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="feature-card">
                <div className="feature-icon">
                  <i className="fas fa-mobile-alt"></i>
                </div>
                <h4>Webinars & Weekly Briefings</h4>
                <p>Stay educated and empowered.</p>
                <ul className="feature-list">
                  <li>Weekly market briefings with expert analysis</li>
                  <li>Exclusive educational webinars and replays</li>
                  <li>Timely market outlooks from professionals </li>
                </ul>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="feature-card">
                <div className="feature-icon">
                  <i className="fas fa-cogs"></i>
                </div>
                <h4>Private Coaching & Strategy Reviews</h4>
                <p>Work 1-on-1 with elite financial experts.</p>
                <ul className="feature-list">
                  <li>Personalized guidance</li>
                  <li>Quarterly portfolio reviews</li>
                  <li>Strategy refinement & planning</li>
                </ul>
              </div>
            </div>

            <div className="col-lg-4 col-md-6">
              <div className="feature-card">
                <div className="feature-icon">
                  <i className="fas fa-cogs"></i>
                </div>
                <h4>Feature Voting & Platform Influence </h4>
                <p>Have a say in what gets built next.</p>
                <ul className="feature-list">
                  <li>Vote on upcoming features </li>
                  <li>Influence dashboard upgrades </li>
                  <li>Shape the roadmap</li>
                </ul>
              </div>
            </div>

            <div className="col-lg-4 col-md-6">
              <div className="feature-card">
                <div className="feature-icon">
                  <i className="fas fa-cogs"></i>
                </div>
                <h4>Advanced Trade Journal</h4>
                <p>Track, reflect, and grow from your trades.</p>
                <ul className="feature-list">
                  <li>Tag strategies, setups, outcomes </li>
                  <li>Auto-log trades from connected brokers</li>
                  <li>Learn from performance over time </li>
                </ul>
              </div>
            </div>

            <div className="col-lg-4 col-md-6">
              <div className="feature-card">
                <div className="feature-icon">
                  <i className="fas fa-cogs"></i>
                </div>
                <h4>Membership NFT Badges</h4>
                <p>Prove your tier and unlock perks</p>
                <ul className="feature-list">
                  <li>Unique, on-chain Platinum member NFTs </li>
                  <li>Tier-based recognition</li>
                  <li>Access gated features and events</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Investment Solutions Section */}
      <section className="solutions-section">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6">
              <h2 className="section-title">Built for Serious Investors</h2>
              <p className="section-description">
                Whether you're protecting wealth or scaling aggressively, the
                Platinum Dashboard adapts to your style.
              </p>
              <div className="solution-cards">
                <div className="solution-card">
                  <div className="solution-header">
                    <h5>Wealth Preservation </h5>
                  </div>
                  <p>
                    Stable income via bonds, dividend assets, and defensive
                    positioning.
                  </p>
                </div>
                <div className="solution-card">
                  <div className="solution-header">
                    <h5>Balanced Growth</h5>
                  </div>
                  <p>
                    Diversified portfolios for long-term performance with
                    managed risk.
                  </p>
                </div>
                <div className="solution-card">
                  <div className="solution-header">
                    <h5>Aggressive Growth</h5>
                  </div>
                  <p>
                    High-conviction strategies, including emerging markets,
                    tech, and alternatives.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="solutions-visual">
                <div className="chart-container">
                  <div className="chart-header">
                    <h6>Premium Member Services</h6>
                    <div className="chart-legend">
                      <span className="legend-item conservative">
                        Conservative
                      </span>
                      <span className="legend-item moderate">Moderate</span>
                      <span className="legend-item growth">Growth</span>
                    </div>
                  </div>
                  <div className="chart-body">
                    <div className="performance-bars">
                      <div className="bar-group">
                        <span className="bar-label">1Y</span>
                        <div className="bars">
                          <div
                            className="bar conservative"
                            style={{ height: "40%" }}
                          ></div>
                          <div
                            className="bar moderate"
                            style={{ height: "65%" }}
                          ></div>
                          <div
                            className="bar growth"
                            style={{ height: "85%" }}
                          ></div>
                        </div>
                      </div>
                      <div className="bar-group">
                        <span className="bar-label">3Y</span>
                        <div className="bars">
                          <div
                            className="bar conservative"
                            style={{ height: "50%" }}
                          ></div>
                          <div
                            className="bar moderate"
                            style={{ height: "70%" }}
                          ></div>
                          <div
                            className="bar growth"
                            style={{ height: "90%" }}
                          ></div>
                        </div>
                      </div>
                      <div className="bar-group">
                        <span className="bar-label">5Y</span>
                        <div className="bars">
                          <div
                            className="bar conservative"
                            style={{ height: "45%" }}
                          ></div>
                          <div
                            className="bar moderate"
                            style={{ height: "75%" }}
                          ></div>
                          <div
                            className="bar growth"
                            style={{ height: "95%" }}
                          ></div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Exclusive Services Section */}
      <section className="services-section">
        <div className="container">
          <div className="text-center mb-5">
            <h2 className="section-title">Premium Member Services</h2>
            <p className="section-subtitle">
              Available exclusively to Valour Wealth Platinum members:
            </p>
          </div>
          <div className="row g-4">
            <div className="col-lg-3 col-md-6">
              <div className="service-card">
                <div className="service-icon">
                  <i className="fas fa-handshake"></i>
                </div>
                <h5>Concierge Financial Support </h5>
                <p>
                  White-glove banking services with priority support and
                  exclusive rates.
                </p>
              </div>
            </div>
            <div className="col-lg-3 col-md-6">
              <div className="service-card">
                <div className="service-icon">
                  <i className="fas fa-plane"></i>
                </div>
                <h5>Priority Access to Events </h5>
                <p>
                  Exclusive travel perks, airport lounge access, and luxury
                  hotel partnerships.
                </p>
              </div>
            </div>
            <div className="col-lg-3 col-md-6">
              <div className="service-card">
                <div className="service-icon">
                  <i className="fas fa-graduation-cap"></i>
                </div>
                <h5>Tailored Investment Workshops </h5>
                <p>
                  Personalized workshops, market insights, and exclusive
                  research reports.
                </p>
              </div>
            </div>
            <div className="col-lg-3 col-md-6">
              <div className="service-card">
                <div className="service-icon">
                  <i className="fas fa-calendar-alt"></i>
                </div>
                <h5>Exclusive Market Reports & Insights </h5>
                <p>
                  Exclusive networking events, market outlook sessions, and
                  expert panels.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing & Plans Section */}
      {/* <section className="pricing-section">
        
      </section> */}

      {/* Call to Action Section */}
      <section className="cta-section">
        <div className="container">
          <div className="row justify-content-center text-center">
            <div className="col-lg-8">
              <h2 className="cta-title">
                Ready to Elevate Your Wealth Strategy?
              </h2>
              <p className="cta-description">
                Join thousands of successful investors already optimizing their
                portfolios with Valour Wealth. Unlock the Platinum
                Dashboard—your gateway to elite investing.
              </p>
              <div className="cta-buttons">
                <button className="btn btn-primary btn-lg me-3">
                  AI-Powered Analysis
                </button>
                <button className="btn btn-outline-light btn-lg">
                  Weekly Market Briefings
                </button>
              </div>
              <div className="cta-features mt-4">
                <span className="cta-feature">
                  <i className="fas fa-shield-alt"></i>
                  Private Coaching Access
                </span>
                <span className="cta-feature">
                  <i className="fas fa-clock"></i>
                  Institutional-Grade Insights
                </span>
                <span className="cta-feature">
                  <i className="fas fa-medal"></i>
                  Request Access or Book a Demo
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Benefits;
