import { useNavigate } from "react-router-dom";
import img1 from "../assets/images/1.svg";
import img2 from "../assets/images/2.svg";
import img3 from "../assets/images/3.svg";
import AffiliateGrid from "../components/affiliateGrid";
import Navbar from "../components/Navbar";

const TradervueHeroSection = () => {
  const navigate = useNavigate();

  return (
    <>
      <style jsx>{`
        .hero-section-affiliate {
          background: linear-gradient(135deg, #040805 0%, #38a739 100%);
          position: relative;
          overflow: hidden;
        }

        .hero-section-affiliate::before {
          content: "";
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")
            repeat;
          animation: float 20s ease-in-out infinite;
        }

        @keyframes float {
          0%,
          100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-20px);
          }
        }

        .btn-custom {
          position: relative;
          overflow: hidden;
          border: none;
          background: linear-gradient(45deg, #28a745, #20c997);
          color: white;
          font-weight: 600;
          border-radius: 50px;
          padding: 15px 35px;
          font-size: 16px;
          box-shadow: 0 10px 25px rgba(40, 167, 69, 0.3);
          transition: all 0.3s ease;
          text-transform: uppercase;
          letter-spacing: 1px;
        }

        .btn-custom:hover {
          transform: translateY(-3px);
          box-shadow: 0 15px 35px rgba(40, 167, 69, 0.4);
          background: linear-gradient(45deg, #20c997, #28a745);
        }

        .btn-custom::before {
          content: "";
          position: absolute;
          top: 0;
          left: -100%;
          width: 100%;
          height: 100%;
          background: linear-gradient(
            90deg,
            transparent,
            rgba(255, 255, 255, 0.2),
            transparent
          );
          transition: left 0.5s;
        }

        .btn-custom:hover::before {
          left: 100%;
        }

        .btn-outline-custom {
          border: 2px solid #28a745;
          color: #28a745;
          background: transparent;
          font-weight: 600;
          border-radius: 50px;
          padding: 15px 35px;
          font-size: 16px;
          transition: all 0.3s ease;
          text-transform: uppercase;
          letter-spacing: 1px;
        }

        .btn-outline-custom:hover {
          background: #28a745;
          color: white;
          transform: translateY(-2px);
          box-shadow: 0 10px 25px rgba(40, 167, 69, 0.3);
        }

        .feature-cards {
          background: white;
          border-radius: 20px;
          padding: 40px 30px;
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
          border: 1px solid rgba(255, 255, 255, 0.2);
          transition: all 0.3s ease;
          position: relative;
          overflow: hidden;
        }

        .feature-cards::before {
          content: "";
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          height: 4px;
          background: linear-gradient(45deg, #28a745, #20c997);
          transform: scaleX(0);
          transition: transform 0.3s ease;
        }

        .feature-cards:hover::before {
          transform: scaleX(1);
        }

        .feature-cards:hover {
          transform: translateY(-10px);
          box-shadow: 0 20px 40px rgba(0, 0, 0, 0.15);
        }

        .icon-container {
          width: 80px;
          height: 80px;
          background: linear-gradient(45deg, #28a745, #20c997);
          border-radius: 20px;
          display: flex;
          align-items: center;
          justify-content: center;
          margin: 0 auto 20px;
          box-shadow: 0 10px 25px rgba(40, 167, 69, 0.3);
          transition: all 0.3s ease;
        }

        .feature-cards:hover .icon-container {
          transform: scale(1.1);
          box-shadow: 0 15px 35px rgba(40, 167, 69, 0.4);
        }

        .icon-container img {
          width: 40px;
          height: 40px;
          filter: brightness(0) invert(1);
        }

        .section-divider {
          height: 2px;
          background: linear-gradient(45deg, #28a745, #20c997);
          width: 100px;
          margin: 0 auto 30px;
          border-radius: 2px;
        }

        .cta-section {
          background: linear-gradient(135deg, #1e3a5f 0%, #2c5282 100%);
          position: relative;
          overflow: hidden;
        }

        .cta-section::before {
          content: "";
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M0 50 Q 25 30 50 50 T 100 50 V 100 H 0 Z' fill='rgba(255,255,255,0.1)'/%3E%3C/svg%3E")
            repeat-x;
          background-size: 400px 100px;
          opacity: 0.3;
          animation: wave 20s linear infinite;
        }

        @keyframes wave {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-400px);
          }
        }

        .step-counter {
          position: absolute;
          top: -7px;
          right: -6px;
          width: 40px;
          height: 40px;
          background: linear-gradient(45deg, #28a745, #20c997);
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          color: white;
          font-weight: bold;
          font-size: 18px;
          box-shadow: 0 5px 15px rgba(40, 167, 69, 0.3);
        }

        .floating-element {
          position: absolute;
          opacity: 0.1;
          animation: float 6s ease-in-out infinite;
        }

        .floating-element:nth-child(1) {
          top: 10%;
          left: 10%;
          animation-delay: 0s;
        }
        .floating-element:nth-child(2) {
          top: 20%;
          right: 10%;
          animation-delay: 2s;
        }
        .floating-element:nth-child(3) {
          bottom: 10%;
          left: 20%;
          animation-delay: 4s;
        }
      `}</style>

      <div
        className="container-fluid p-0 "
        style={{
          fontFamily:
            '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif',
          lineHeight: "1.6",
          overflow: "hidden",
        }}
      >
        {/* Hero Section */}
        <div className="hero-section-affiliate">
          <Navbar />
          <div
            className="row justify-content-center py-5"
            style={{
              minHeight: "70vh",
              display: "flex",
              alignItems: "center",
              paddingTop: "100px !important",
              paddingBottom: "100px !important",
              position: "relative",
              zIndex: 1,
            }}
          >
            <div className="col-12 text-center">
              <div className="section-divider"></div>
              <p
                className="text-white mb-3"
                style={{
                  fontSize: "14px",
                  letterSpacing: "3px",
                  fontWeight: "600",
                  textTransform: "uppercase",
                  opacity: "0.9",
                }}
              >
                AFFILIATE PROGRAM
              </p>

              <h1
                className="fw-bold mb-4 text-white"
                style={{
                  fontWeight: "800",
                  lineHeight: "1.1",
                  fontSize: "clamp(2.5rem, 8vw, 5rem)",
                  maxWidth: "1000px",
                  margin: "0 auto",
                  textShadow: "0 5px 15px rgba(0,0,0,0.3)",
                }}
              >
                Over <span className="text-gradient">$200,000</span> Paid Out
                <br />
                in Affiliate Commissions
              </h1>

              <p
                className="text-white mb-5"
                style={{
                  fontSize: "clamp(16px, 2.5vw, 20px)",
                  fontWeight: "400",
                  maxWidth: "600px",
                  margin: "0 auto 40px auto",
                  lineHeight: "1.6",
                  opacity: "0.9",
                }}
              >
                Earn 20% Lifetime Revenue with the ValourWealth Affiliate
                Program
              </p>

              <button
                onClick={() => navigate("/customer-support")}
                className="btn btn-custom"
              >
                Join the ValourWealth Affiliate Program
                <span className="ms-2" style={{ fontSize: "18px" }}>
                  →
                </span>
              </button>
            </div>
          </div>
        </div>

        {/* Section 1: Are you passionate about trading */}
        <div
          className="row justify-content-center py-5"
          style={{
            backgroundColor: "#ffffff",
            paddingTop: "120px !important",
            paddingBottom: "120px !important",
          }}
        >
          <div className="col-12 col-lg-10 col-xl-8">
            <div className="text-center mb-5">
              <div className="section-divider"></div>
              <h2
                className="fw-bold mb-4"
                style={{
                  color: "#1e3a5f",
                  fontWeight: "700",
                  fontSize: "clamp(2rem, 5vw, 3.5rem)",
                  lineHeight: "1.2",
                  maxWidth: "900px",
                  margin: "0 auto",
                }}
              >
                Are you passionate about{" "}
                <span className="text-gradient">trading</span> and financial
                markets?
              </h2>

              <p
                className="text-muted mb-5"
                style={{
                  fontSize: "clamp(16px, 2.5vw, 18px)",
                  fontWeight: "400",
                  maxWidth: "700px",
                  margin: "0 auto 60px auto",
                  color: "#6c757d",
                  lineHeight: "1.8",
                }}
              >
                Monetize your audience by promoting Tradervue's industry-leading
                trading journal and analytics tools.
              </p>
            </div>

            <div className="row g-4">
              <div className="col-12 col-md-4">
                <div className="feature-cards text-center h-100">
                  <div className="step-counter">1</div>
                  <div className="icon-container">
                    <img src={img1} alt="Step 1" />
                  </div>
                  <h3
                    className="fw-bold mb-3"
                    style={{
                      color: "#1e3a5f",
                      fontSize: "clamp(20px, 3vw, 28px)",
                      fontWeight: "700",
                    }}
                  >
                    Apply
                  </h3>
                  <p
                    className="text-muted"
                    style={{
                      fontSize: "clamp(14px, 2vw, 16px)",
                      color: "#6c757d",
                      lineHeight: "1.6",
                    }}
                  >
                    Contact us to get approved and receive your unique affiliate
                    link.
                  </p>
                </div>
              </div>

              <div className="col-12 col-md-4">
                <div className="feature-cards text-center h-100">
                  <div className="step-counter">2</div>
                  <div className="icon-container">
                    <img src={img2} alt="Step 2" />
                  </div>
                  <h3
                    className="fw-bold mb-3"
                    style={{
                      color: "#1e3a5f",
                      fontSize: "clamp(20px, 3vw, 28px)",
                      fontWeight: "700",
                    }}
                  >
                    Promote
                  </h3>
                  <p
                    className="text-muted"
                    style={{
                      fontSize: "clamp(14px, 2vw, 16px)",
                      color: "#6c757d",
                      lineHeight: "1.6",
                    }}
                  >
                    Share ValourWealth with your audience of active traders.
                  </p>
                </div>
              </div>

              <div className="col-12 col-md-4">
                <div className="feature-cards text-center h-100">
                  <div className="step-counter">3</div>
                  <div className="icon-container">
                    <img src={img3} alt="Step 3" />
                  </div>
                  <h3
                    className="fw-bold mb-3"
                    style={{
                      color: "#1e3a5f",
                      fontSize: "clamp(20px, 3vw, 28px)",
                      fontWeight: "700",
                    }}
                  >
                    Earn 20% commission
                  </h3>
                  <p
                    className="text-muted"
                    style={{
                      fontSize: "clamp(14px, 2vw, 16px)",
                      color: "#6c757d",
                      lineHeight: "1.6",
                    }}
                  >
                    Get 20% commission on all paid subscriptions, for as long as
                    the customer remains active.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* AffiliateGrid Component */}
        <AffiliateGrid />

        {/* Section 2: Getting Started */}
        <div
          className="row justify-content-center py-5"
          style={{
            backgroundColor: "#f8f9fa",
            paddingTop: "120px",
            paddingBottom: "120px",
          }}
        >
          <div className="col-12 col-lg-10 col-xl-8">
            <div className="text-center mb-5">
              <div className="section-divider"></div>
              <h2
                className="fw-bold mb-4"
                style={{
                  color: "#1e3a5f",
                  fontWeight: "700",
                  fontSize: "clamp(2rem, 5vw, 3.5rem)",
                  lineHeight: "1.2",
                  maxWidth: "900px",
                  margin: "0 auto",
                }}
              >
                Getting <span className="text-gradient">Started</span>
              </h2>

              <p
                className="text-muted mb-5"
                style={{
                  fontSize: "clamp(16px, 2.5vw, 18px)",
                  fontWeight: "400",
                  maxWidth: "700px",
                  margin: "0 auto 40px auto",
                  color: "#6c757d",
                  lineHeight: "1.8",
                }}
              >
                Once you apply, we will review your application and provide you
                with all the details of the affiliate program.
              </p>

              <button className="btn btn-outline-custom mb-5">Apply Now</button>
            </div>

            <div className="row g-4">
              <div className="col-12 col-md-4">
                <div className="feature-cards text-center h-100">
                  <div className="icon-container">
                    <img src={img1} alt="Contact" />
                  </div>
                  <h3
                    className="fw-bold mb-3"
                    style={{
                      color: "#1e3a5f",
                      fontSize: "clamp(20px, 3vw, 28px)",
                      fontWeight: "700",
                    }}
                  >
                    Contact us to apply
                  </h3>
                </div>
              </div>

              <div className="col-12 col-md-4">
                <div className="feature-cards text-center h-100">
                  <div className="icon-container">
                    <img src={img2} alt="Approval" />
                  </div>
                  <h3
                    className="fw-bold mb-3"
                    style={{
                      color: "#1e3a5f",
                      fontSize: "clamp(20px, 3vw, 28px)",
                      fontWeight: "700",
                    }}
                  >
                    Get approved and receive your affiliate link
                  </h3>
                </div>
              </div>

              <div className="col-12 col-md-4">
                <div className="feature-cards text-center h-100">
                  <div className="icon-container">
                    <img src={img3} alt="Promote" />
                  </div>
                  <h3
                    className="fw-bold mb-3"
                    style={{
                      color: "#1e3a5f",
                      fontSize: "clamp(20px, 3vw, 28px)",
                      fontWeight: "700",
                    }}
                  >
                    Start promoting and tracking your performance
                  </h3>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Section 3: CTA Section */}
        <div className="cta-section">
          <div
            className="row justify-content-center py-5"
            style={{
              paddingTop: "120px",
              paddingBottom: "120px",
              position: "relative",
              zIndex: 1,
            }}
          >
            <div className="col-12 col-lg-8 text-center">
              <div
                className="section-divider"
                style={{ background: "rgba(255,255,255,0.3)" }}
              ></div>
              <h2
                className="fw-bold mb-4 text-white"
                style={{
                  fontWeight: "700",
                  fontSize: "clamp(2rem, 5vw, 3.5rem)",
                  lineHeight: "1.2",
                  maxWidth: "900px",
                  margin: "0 auto",
                  textShadow: "0 5px 15px rgba(0,0,0,0.3)",
                }}
              >
                Simple. Fast. <span className="text-gradient">Powerful.</span>
              </h2>

              <p
                className="mb-5 text-white"
                style={{
                  fontSize: "clamp(16px, 2.5vw, 18px)",
                  fontWeight: "400",
                  maxWidth: "600px",
                  margin: "0 auto 40px auto",
                  lineHeight: "1.8",
                  opacity: "0.9",
                }}
              >
                The trading journal that will help improve your trading
                performance.
              </p>

              <button className="btn btn-custom">
                Sign Up Now
                <span className="ms-2" style={{ fontSize: "18px" }}>
                  →
                </span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default TradervueHeroSection;
