function ReleaseNotes() {
  return (
    <>
      {/* Bootstrap 5 CSS */}
      <link
        href="https://cdnjs.cloudflare.com/ajax/libs/bootstrap/5.3.0/css/bootstrap.min.css"
        rel="stylesheet"
      />
      {/* Bootstrap Icons */}
      <link
        href="https://cdnjs.cloudflare.com/ajax/libs/bootstrap-icons/1.10.0/font/bootstrap-icons.min.css"
        rel="stylesheet"
      />

      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&display=swap');
        
        * {
          font-family: 'Inter', sans-serif;
        }
        
        .hero-gradient {
          background: linear-gradient(135deg, #228B22 0%, #32CD32 50%, #228B22 100%);
          background-size: 400% 400%;
          animation: gradientShift 8s ease infinite;
          position: relative;
          overflow: hidden;
          min-height: 60vh;
          display: flex;
          align-items: center;
        }
        
        @keyframes gradientShift {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
        
        .hero-gradient::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: 
            radial-gradient(circle at 20% 30%, rgba(255, 255, 255, 0.1) 0%, transparent 50%),
            radial-gradient(circle at 80% 70%, rgba(255, 255, 255, 0.08) 0%, transparent 50%),
            url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E") repeat;
        }
        
        .hero-content {
          position: relative;
          z-index: 2;
        }
        
        .hero-icon {
          width: 100px;
          height: 100px;
          background: rgba(255, 255, 255, 0.2);
          backdrop-filter: blur(20px);
          border-radius: 25px;
          display: flex;
          align-items: center;
          justify-content: center;
          color: white;
          font-size: 3rem;
          margin: 0 auto 2rem;
          border: 2px solid rgba(255, 255, 255, 0.3);
          box-shadow: 0 20px 40px rgba(0, 0, 0, 0.2);
          animation: float 6s ease-in-out infinite;
        }
        
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-10px); }
        }
        
        .main-content-notes {
          // background: linear-gradient(180deg, #f8fffe 0%, #ffffff 100%);
          min-height: 100vh;
          position: relative;
        }
        .bg-dark .main-content-notes {
          background-color: #1c1e20 !important;
          
         }
        
        .main-conten-notest::before {
          content: '';
          position: absolute;
          top: -50px;
          left: 0;
          right: 0;
          height: 100px;
          background: linear-gradient(180deg, #228B22 0%, transparent 100%);
          opacity: 0.1;
        }
        
        .release-card {
          transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
          border: none;
          border-radius: 20px;
          box-shadow: 
            0 8px 32px rgba(34, 139, 34, 0.1),
            0 2px 8px rgba(0, 0, 0, 0.05);
          background: white;
          overflow: hidden;
          position: relative;
        }
        
        .release-card::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          height: 4px;
          background: linear-gradient(90deg, #228B22, #32CD32, #228B22);
          background-size: 200% 200%;
          animation: gradientMove 3s ease infinite;
        }
        
        @keyframes gradientMove {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
        
        .release-card:hover {
          transform: translateY(-8px) scale(1.02);
          box-shadow: 
            0 20px 60px rgba(34, 139, 34, 0.15),
            0 8px 32px rgba(0, 0, 0, 0.1);
        }
        
        .release-icon {
          width: 60px;
          height: 60px;
          background: linear-gradient(135deg, #228B22, #32CD32);
          border-radius: 18px;
          display: flex;
          align-items: center;
          justify-content: center;
          color: white;
          font-size: 1.8rem;
          margin-bottom: 1rem;
          box-shadow: 0 8px 24px rgba(34, 139, 34, 0.3);
          transition: all 0.3s ease;
        }
        
        .release-card:hover .release-icon {
          transform: rotate(5deg) scale(1.1);
          box-shadow: 0 12px 32px rgba(34, 139, 34, 0.4);
        }
        
        .version-badge {
          background: linear-gradient(135deg, #228B22, #32CD32);
          color: white;
          border: none;
          padding: 8px 16px;
          border-radius: 20px;
          font-weight: 600;
          font-size: 0.85rem;
          box-shadow: 0 4px 12px rgba(34, 139, 34, 0.3);
          letter-spacing: 0.5px;
        }
        
        .product-badge {
          background: linear-gradient(135deg, #FF6B6B, #FF8E8E);
          color: white;
          border: none;
          padding: 10px 20px;
          border-radius: 25px;
          font-weight: 600;
          font-size: 0.9rem;
          box-shadow: 0 6px 16px rgba(255, 107, 107, 0.3);
          transition: all 0.3s ease;
        }
        
        .product-badge:hover {
          transform: translateY(-2px);
          box-shadow: 0 8px 20px rgba(255, 107, 107, 0.4);
        }
        
        .date-text {
          color: #6B7280;
          font-size: 0.9rem;
          font-weight: 500;
        }
        
        .release-title {
          background: linear-gradient(135deg, #228B22, #32CD32);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          font-weight: 700;
          font-size: 1.5rem;
          line-height: 1.3;
        }
        
        .release-description {
          color: #fff;
          line-height: 1.7;
          font-size: 1rem;
        }
          .bg-dark  .release-description {
           color: #fff !important;
          }
           .bg-light .release-description  {
             color: #000 !important;
           }
           .bg-dark .hero-gradient {
           background: #1c1e20 !important;
           }
        
        .contact-highlight {
          background: linear-gradient(135deg, rgba(34, 139, 34, 0.1), rgba(50, 205, 50, 0.1));
          border: 1px solid rgba(34, 139, 34, 0.2);
          border-radius: 12px;
          padding: 16px;
          margin-top: 1rem;
        }
        
        .contact-text {
          color: #228B22;
          font-weight: 600;
          margin: 0;
        }
        
        .available-highlight {
          background: linear-gradient(135deg, rgba(34, 139, 34, 0.1), rgba(50, 205, 50, 0.1));
          border: 1px solid rgba(34, 139, 34, 0.2);
          border-radius: 12px;
          padding: 16px;
          margin-top: 1rem;
        }
        
        .available-text {
          color: #228B22;
          font-weight: 600;
          margin: 0;
        }
        
        .footer-gradient {
          background: linear-gradient(135deg, #1F2937 0%, #374151 100%);
          color: white;
          position: relative;
          overflow: hidden;
        }
        
        .footer-gradient::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          height: 4px;
          background: linear-gradient(90deg, #228B22, #32CD32, #228B22);
          background-size: 200% 200%;
          animation: gradientMove 3s ease infinite;
        }
        
        .section-divider {
          height: 2px;
          background: linear-gradient(90deg, transparent, #228B22, transparent);
          margin: 3rem 0;
          border-radius: 2px;
        }
        
        .timeline-line {
          position: absolute;
          left: 30px;
          top: 80px;
          bottom: -30px;
          width: 2px;
          background: linear-gradient(180deg, #228B22, #32CD32);
          opacity: 0.3;
        }
        
        .timeline-dot {
          position: absolute;
          left: 24px;
          top: 24px;
          width: 12px;
          height: 12px;
          background: #228B22;
          border-radius: 50%;
          border: 3px solid white;
          box-shadow: 0 0 0 3px rgba(34, 139, 34, 0.2);
        }
        
        @media (max-width: 768px) {
          .hero-gradient {
            min-height: 50vh;
            padding: 3rem 0;
          }
          
          .hero-icon {
            width: 80px;
            height: 80px;
            font-size: 2.5rem;
          }
          
          .release-card {
            margin-bottom: 2rem;
          }
          
          .release-icon {
            width: 50px;
            height: 50px;
            font-size: 1.5rem;
          }
          
          .timeline-line {
            display: none;
          }
          
          .timeline-dot {
            display: none;
          }
        }
        
        .fade-in {
          animation: fadeInUp 0.8s ease-out;
        }
        
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>

      <div className="position-relative">
        {/* Enhanced Hero Section */}
        <div className="hero-gradient">
          <div className="container hero-content">
            <div className="row">
              <div className="col-lg-12 text-center text-white">
                <div className="hero-icon">
                  <i className="bi bi-journal-bookmark-fill"></i>
                </div>
                <h1
                  className="display-3 fw-bold mb-4"
                  style={{ textShadow: "0 4px 8px rgba(0,0,0,0.3)" }}
                >
                  Release Notes
                </h1>
                <p
                  className="lead mb-0 fs-4"
                  style={{ textShadow: "0 2px 4px rgba(0,0,0,0.2)" }}
                >
                  See the latest features, improvements, and product updates
                  brought to you by the <strong>ValourWealth Team</strong>. We
                  are committed to delivering innovative tools and personalized
                  solutions to help you grow as a trader and investor.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Enhanced Release Notes Content */}
        <div className="main-content-notes py-5">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-lg-12">
                <div className="position-relative">
                  <div className="timeline-line d-none d-lg-block"></div>

                  {/* Release 1 - Wealth Series Now Available */}
                  {/* <div className="card release-card mb-5 fade-in position-relative">
                    <div className="timeline-dot d-none d-lg-block"></div>
                    <div className="card-body p-5">
                      <div className="row align-items-start">
                        <div className="col-lg-2 text-center text-lg-start mb-3 mb-lg-0">
                          <div className="release-icon">
                            <i className="bi bi-stars"></i>
                          </div>
                        </div>
                        <div className="col-lg-12">
                          <div className="d-flex flex-wrap align-items-center gap-3 mb-3">
                            <span className="version-badge">v2.15.0</span>
                            <span className="date-text">
                              <i className="bi bi-calendar-event me-2"></i>
                              May 29, 2025
                            </span>
                          </div>
                          <h2 className="release-title mb-4">Wealth Series Now Available</h2>
                          
                          <div className="mb-4">
                            <span className="product-badge">
                              <i className="bi bi-gem me-2"></i>
                              Wealth Series
                            </span>
                          </div>
                          
                          <div className="release-description mb-4">
                            Wealth Series Lite combines our proprietary AI stock selection engine
                            with an intuitive, gamified portfolio builder. Compete on a global
                            leaderboard while learning how to construct high-performing portfolios
                            using real market data. Updates are released biweekly to ensure your
                            strategy stays relevant.
                          </div>
                          
                          <div className="contact-highlight">
                            <p className="contact-text">
                              <i className="bi bi-telephone-fill me-2"></i>
                              Contact our sales team to find out more.
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                   */}
                  {/* New Release - Wealth Series Auto Version */}
                  <div className="card release-card mb-5 fade-in position-relative">
                    <div className="timeline-dot d-none d-lg-block"></div>
                    <div className="card-body p-5">
                      <div className="row align-items-start">
                        <div className="col-lg-2 text-center text-lg-start mb-3 mb-lg-0">
                          <div className="release-icon">
                            <i className="bi bi-lightning-charge-fill"></i>
                          </div>
                        </div>
                        <div className="col-lg-12">
                          <div className="d-flex flex-wrap align-items-center gap-3 mb-3">
                            <span className="version-badge">v2.17.0</span>
                            <span className="date-text">
                              <i className="bi bi-calendar-event me-2"></i>
                              July 10, 2025
                            </span>
                          </div>
                          <h2 className="release-title mb-4">
                            Wealth Series Auto Version
                          </h2>

                          <div className="mb-4">
                            <span className="product-badge">
                              <i className="bi bi-lightbulb-fill me-2"></i>
                              Wealth Series x Orion
                            </span>
                          </div>

                          <div className="release-description mb-4">
                            We are proud to partner with <strong>Orion</strong>{" "}
                            to introduce the Auto Version of Wealth Series — a
                            smarter, fully automated portfolio management
                            experience. Portfolios now rebalance automatically,
                            ensuring optimal performance without manual effort.
                            Get set for seamless, AI-powered investing.
                          </div>

                          <div className="contact-highlight">
                            <p className="contact-text">
                              <i className="bi bi-telephone-fill me-2"></i>
                              Contact our sales team to learn how to activate
                              auto-rebalancing.
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* New Release - Wealth Series Enhancements */}
                  <div className="card release-card mb-5 fade-in position-relative">
                    <div className="timeline-dot d-none d-lg-block"></div>
                    <div className="card-body p-5">
                      <div className="row align-items-start">
                        <div className="col-lg-2 text-center text-lg-start mb-3 mb-lg-0">
                          <div className="release-icon">
                            <i className="bi bi-bar-chart-steps"></i>
                          </div>
                        </div>
                        <div className="col-lg-12">
                          <div className="d-flex flex-wrap align-items-center gap-3 mb-3">
                            <span className="version-badge">v2.16.0</span>
                            <span className="date-text">
                              <i className="bi bi-calendar-event me-2"></i>
                              June 20, 2025
                            </span>
                          </div>
                          <h2 className="release-title mb-4">
                            Wealth Series Enhancements — Easier to Use, More to
                            Discover
                          </h2>

                          <div className="release-description">
                            <ul>
                              <li>
                                <strong>AI Trade Price:</strong> View the exact
                                price at which AI trades are executed during
                                rebalancing.
                              </li>
                              <li>
                                <strong>Portfolio Narratives:</strong>{" "}
                                Understand the strategy and expected rebalance
                                frequency behind each portfolio.
                              </li>
                              <li>
                                <strong>Rebalance Rationale:</strong> Explore
                                the logic behind every portfolio and
                                ticker-level adjustment.
                              </li>
                              <li>
                                <strong>Ticker Performance:</strong> Drill down
                                on ticker-level returns and contribution to
                                overall performance.
                              </li>
                              <li>
                                <strong>Benchmark Comparison:</strong> Compare
                                results against S&P500 for deeper perspective.
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* New Release - Advanced Ticker Dashboard */}
                  <div className="card release-card mb-5 fade-in position-relative">
                    <div className="timeline-dot d-none d-lg-block"></div>
                    <div className="card-body p-5">
                      <div className="row align-items-start">
                        <div className="col-lg-2 text-center text-lg-start mb-3 mb-lg-0">
                          <div className="release-icon">
                            <i className="bi bi-search"></i>
                          </div>
                        </div>
                        <div className="col-lg-12">
                          <div className="d-flex flex-wrap align-items-center gap-3 mb-3">
                            <span className="version-badge">v2.16.5</span>
                            <span className="date-text">
                              <i className="bi bi-calendar-event me-2"></i>
                              June 25, 2025
                            </span>
                          </div>
                          <h2 className="release-title mb-4">
                            New: Ticker Search + Full Trading Tools View
                          </h2>

                          <div className="release-description mb-4">
                            Search any stock ticker and view full financial
                            detail on its dedicated page. Now includes:
                            <ul>
                              <li>Embedded Trading Tools & Charts</li>
                              <li>Real-time Sentiment AI Analysis</li>
                              <li>Company Profile, Overview & Fundamentals</li>
                              <li>
                                Support for <strong>1 Hour</strong>,{" "}
                                <strong>4 Hours</strong>, and{" "}
                                <strong>1 Day</strong> timeframe data
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Release 2 - Introducing Wealth Series: Smarter Investments */}
                  <div className="card release-card mb-5 fade-in position-relative">
                    <div className="timeline-dot d-none d-lg-block"></div>
                    <div className="card-body p-5">
                      <div className="row align-items-start">
                        <div className="col-lg-2 text-center text-lg-start mb-3 mb-lg-0">
                          <div className="release-icon">
                            <i className="bi bi-graph-up-arrow"></i>
                          </div>
                        </div>
                        <div className="col-lg-12">
                          <div className="d-flex flex-wrap align-items-center gap-3 mb-3">
                            <span className="version-badge">v2.15.0</span>
                            <span className="date-text">
                              <i className="bi bi-calendar-event me-2"></i>
                              Jun 10, 2025
                            </span>
                          </div>
                          <h2 className="release-title mb-4">
                            Introducing Wealth Series: Smarter Investments
                          </h2>

                          <div className="mb-4">
                            <span className="product-badge">
                              <i className="bi bi-crown-fill me-2"></i>
                              Wealth Series Premium
                            </span>
                          </div>

                          <div className="release-description mb-4">
                            Wealth Series is a powerful new addition to the
                            ValourWealth platform that allows members to choose
                            from expertly designed AI-generated portfolio packs:
                            Atlas, Titan, and Everest. These packs include
                            strategies ranging from high-growth and
                            low-volatility to balanced and deep-value
                            investments — all curated using advanced data models
                            and continuously optimized.
                          </div>

                          <div className="contact-highlight">
                            <p className="contact-text">
                              <i className="bi bi-telephone-fill me-2"></i>
                              Contact our sales team to find out more.
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Release 3 - TradeGPT AI Assistant Launch */}
                  {/* Updated Release - TradeGPT AI Assistant */}
                  <div className="card release-card mb-5 fade-in position-relative">
                    <div className="timeline-dot d-none d-lg-block"></div>
                    <div className="card-body p-5">
                      <div className="row align-items-start">
                        <div className="col-lg-2 text-center text-lg-start mb-3 mb-lg-0">
                          <div className="release-icon">
                            <i className="bi bi-robot"></i>
                          </div>
                        </div>
                        <div className="col-lg-12">
                          <div className="d-flex flex-wrap align-items-center gap-3 mb-3">
                            <span className="version-badge">v2.13.5</span>
                            <span className="date-text">
                              <i className="bi bi-calendar-event me-2"></i>
                              Jun 10, 2025
                            </span>
                          </div>
                          <h2 className="release-title mb-4">
                            TradeGPT Gets Even Smarter
                          </h2>

                          <div className="mb-4">
                            <span className="product-badge">
                              <i className="bi bi-cpu-fill me-2"></i>
                              TradeGPT
                            </span>
                          </div>

                          <div className="release-description mb-4">
                            Our flagship AI assistant, TradeGPT, just got a
                            major upgrade:
                            <ul>
                              <li>
                                <strong>
                                  Smarter Prompts & Real-Time Chat Saving:
                                </strong>{" "}
                                Chat with TradeGPT and save conversations across
                                sessions for continuity.
                              </li>
                              <li>
                                <strong>Integrated Watchlist:</strong> Select
                                any ticker from your watchlist and ask for trade
                                ideas, price analysis, or chart-based
                                breakdowns.
                              </li>
                              <li>
                                <strong>Multi-mode Analysis:</strong> Instantly
                                view a ticker's fundamentals, price charts,
                                AI-generated trade ideas, and sentiment
                                analysis.
                              </li>
                              <li>
                                <strong>Free Training for All Users:</strong>{" "}
                                Boost your trading profits with our{" "}
                                <strong>
                                  FREE AI-powered training sessions
                                </strong>
                                , now integrated into the dashboard.
                              </li>
                            </ul>
                          </div>

                          <div className="available-highlight">
                            <p className="available-text">
                              <i className="bi bi-check-circle-fill me-2"></i>
                              Now available for all Valour Wealth users.
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Release 4 - Beginner Hub */}
                  <div className="card release-card mb-5 fade-in position-relative">
                    <div className="timeline-dot d-none d-lg-block"></div>
                    <div className="card-body p-5">
                      <div className="row align-items-start">
                        <div className="col-lg-2 text-center text-lg-start mb-3 mb-lg-0">
                          <div className="release-icon">
                            <i className="bi bi-mortarboard-fill"></i>
                          </div>
                        </div>
                        <div className="col-lg-12">
                          <div className="d-flex flex-wrap align-items-center gap-3 mb-3">
                            <span className="version-badge">v2.12.0</span>
                            <span className="date-text">
                              <i className="bi bi-calendar-event me-2"></i>
                              Feb 12, 2025
                            </span>
                          </div>
                          <h2 className="release-title mb-4">Beginner Hub</h2>

                          <div className="mb-4">
                            <span className="product-badge">
                              <i className="bi bi-book-fill me-2"></i>
                              Beginner Hub
                            </span>
                          </div>

                          <div className="release-description">
                            We've expanded the Beginner Hub with brand-new
                            content tailored for first-time traders. Covering
                            basic market terms, technical analysis, and risk
                            management principles, the Trading Academy now
                            offers a more interactive learning experience to
                            build confidence before placing your first trade.
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Release 5 - One-to-One Mentorship & Platinum Features */}
                  <div className="card release-card mb-5 fade-in position-relative">
                    <div className="timeline-dot d-none d-lg-block"></div>
                    <div className="card-body p-5">
                      <div className="row align-items-start">
                        <div className="col-lg-2 text-center text-lg-start mb-3 mb-lg-0">
                          <div className="release-icon">
                            <i className="bi bi-people-fill"></i>
                          </div>
                        </div>
                        <div className="col-lg-12">
                          <div className="d-flex flex-wrap align-items-center gap-3 mb-3">
                            <span className="version-badge">v2.11.0</span>
                            <span className="date-text">
                              <i className="bi bi-calendar-event me-2"></i>
                              Jan 15, 2025
                            </span>
                          </div>
                          <h2 className="release-title mb-4">
                            One-to-One Mentorship & Platinum Features
                          </h2>

                          <div className="mb-4">
                            <span className="product-badge">
                              <i className="bi bi-award-fill me-2"></i>
                              Mentorship & Platinum Program
                            </span>
                          </div>

                          <div className="release-description">
                            We've officially launched our One-to-One Mentorship
                            Program, connecting members with expert coaches for
                            live, personalized trading feedback. Alongside this,
                            our Platinum tier unlocks access to premium AI
                            insights, strategy calls, and priority access to new
                            features — all designed for serious traders ready to
                            scale.
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Release 6 - Live Training Sessions & Webinars */}
                  <div className="card release-card mb-5 fade-in position-relative">
                    <div className="timeline-dot d-none d-lg-block"></div>
                    <div className="card-body p-5">
                      <div className="row align-items-start">
                        <div className="col-lg-2 text-center text-lg-start mb-3 mb-lg-0">
                          <div className="release-icon">
                            <i className="bi bi-camera-video-fill"></i>
                          </div>
                        </div>
                        <div className="col-lg-12">
                          <div className="d-flex flex-wrap align-items-center gap-3 mb-3">
                            <span className="version-badge">v2.10.0</span>
                            <span className="date-text">
                              <i className="bi bi-calendar-event me-2"></i>
                              Dec 20, 2024
                            </span>
                          </div>
                          <h2 className="release-title mb-4">
                            Live Training Sessions & Webinars
                          </h2>

                          <div className="mb-4">
                            <span className="product-badge">
                              <i className="bi bi-broadcast me-2"></i>
                              Live Sessions
                            </span>
                          </div>

                          <div className="release-description">
                            Join our weekly live webinars hosted by seasoned
                            traders and analysts. Ask real-time questions, get
                            insights into ongoing market trends, and walk away
                            with practical trading ideas you can apply
                            immediately.
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Enhanced Footer */}
        <footer className="footer-gradient py-5">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-lg-8 text-center">
                <div className="mb-3">
                  <i
                    className="bi bi-c-circle fs-4 me-2"
                    style={{ color: "#228B22" }}
                  ></i>
                </div>
                <p className="mb-0 fs-5 fw-medium">
                  2025 ValourWealth. Built for traders, by the ValourWealth
                  Team.
                </p>
              </div>
            </div>
          </div>
        </footer>
      </div>

      {/* Bootstrap 5 JS */}
      <script src="https://cdnjs.cloudflare.com/ajax/libs/bootstrap/5.3.0/js/bootstrap.bundle.min.js"></script>
    </>
  );
}

export default ReleaseNotes;
