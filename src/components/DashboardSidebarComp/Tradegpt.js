import { useState } from "react";

const TradeGPT = () => {
  const [buttonText, setButtonText] = useState("Try TradeGPT Now");
  const [isLoading, setIsLoading] = useState(false);

  const handleButtonClick = async () => {
    setIsLoading(true);
    setButtonText("Launching...");

    const accessToken = localStorage.getItem("accessToken");

    try {
      const response = await fetch(
        `https://backend-production-1e63.up.railway.app/api/generate-tradegpt-token/`,
        {
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
        }
      );

      if (!response.ok) {
        throw new Error("Failed to get token");
      }

      const { token } = await response.json();

      // Optional: wait 1-2 seconds before redirect (for smoother UX)
      setTimeout(() => {
        // window.location.href = `https://frontend-eight-rho-95.vercel.app?token=${token}`;
        window.location.href = `https://frontend-5p4eshae1-valourwealths-projects.vercel.app?token=${token}`;
      }, 1500);
    } catch (error) {
      console.error("TradeGPT redirect failed:", error);
      setIsLoading(false);
      setButtonText("Try TradeGPT Now");
      alert("Something went wrong. Please try again.");
    }
  };

  const styles = {
    body: {
      fontFamily: "'Inter', sans-serif",
      // background: "#1c1e20",
      minHeight: "100vh",
      margin: 0,
      overflowX: "hidden",
    },
    heroContainer: {
      position: "relative",
      background: "rgba(255, 255, 255, 0.05)",
      backdropFilter: "blur(20px)",
      border: "1px solid rgba(255, 255, 255, 0.1)",
      borderRadius: "24px",
      boxShadow: "0 25px 50px rgba(0, 0, 0, 0.2)",
      margin: "40px auto",
      maxWidth: "900px",
      overflow: "hidden",
    },
    heroContainerBefore: {
      content: "''",
      position: "absolute",
      top: 0,
      left: 0,
      right: 0,
      height: "1px",
      background:
        "linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.4), transparent)",
      zIndex: 1,
    },
    floatingElements: {
      position: "fixed",
      width: "100%",
      height: "100%",
      overflow: "hidden",
      pointerEvents: "none",
      zIndex: 0,
    },
    floatingElement: {
      position: "absolute",
      opacity: 0.1,
      animation: "float 20s infinite linear",
    },
    titleMain: {
      background: "linear-gradient(135deg, #00f5ff, #0099ff, #6366f1)",
      WebkitBackgroundClip: "text",
      WebkitTextFillColor: "transparent",
      backgroundClip: "text",
      fontWeight: 800,
      letterSpacing: "-0.02em",
      textShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
      animation: "titlePulse 3s ease-in-out infinite",
      marginBottom: 0,
    },
    gradientLine: {
      width: "80px",
      height: "4px",
      background: "linear-gradient(90deg, #00f5ff, #6366f1)",
      borderRadius: "2px",
      margin: "25px auto",
      position: "relative",
      overflow: "hidden",
    },
    subtitle: {
      color: "#f8fafc",
      fontWeight: 500,
      fontSize: "1.25rem",
      marginBottom: "2rem",
      textShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
    },
    description: {
      color: "#e2e8f0",
      lineHeight: 1.7,
      fontSize: "1.1rem",
      marginBottom: "2.5rem",
    },
    featureList: {
      background: "rgba(255, 255, 255, 0.03)",
      borderRadius: "16px",
      padding: "2rem",
      margin: "2rem 0",
      border: "1px solid rgba(255, 255, 255, 0.1)",
    },
    featureItem: {
      color: "#f1f5f9",
      marginBottom: "1.5rem",
      paddingLeft: "2.5rem",
      position: "relative",
      transition: "all 0.3s ease",
      cursor: "pointer",
    },
    featureItemBefore: {
      content: "''",
      position: "absolute",
      left: 0,
      top: "50%",
      transform: "translateY(-50%)",
      width: "20px",
      height: "20px",
      background: "linear-gradient(135deg, #00f5ff, #6366f1)",
      borderRadius: "50%",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
    },
    featureItemAfter: {
      content: "'✓'",
      position: "absolute",
      left: "6px",
      top: "50%",
      transform: "translateY(-50%)",
      color: "white",
      fontSize: "12px",
      fontWeight: "bold",
    },
    featureTitle: {
      fontWeight: 600,
      color: "#00f5ff",
    },
    bottomText: {
      color: "#f8fafc",
      fontWeight: 600,
      fontSize: "1.1rem",
      margin: "2.5rem 0",
      textShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
    },
    ctaButton: {
      background: "linear-gradient(135deg, #00f5ff, #6366f1, #8b5cf6)",
      backgroundSize: "200% 200%",
      border: "none",
      borderRadius: "50px",
      color: "white",
      fontWeight: 700,
      fontSize: "1.2rem",
      padding: "16px 40px",
      textTransform: "uppercase",
      letterSpacing: "1px",
      position: "relative",
      overflow: "hidden",
      transition: "all 0.3s ease",
      cursor: "pointer",
      boxShadow: "0 10px 30px rgba(0, 245, 255, 0.3)",
    },
    statsContainer: {
      display: "flex",
      justifyContent: "space-around",
      margin: "3rem 0",
      flexWrap: "wrap",
    },
    statItem: {
      textAlign: "center",
      color: "#f8fafc",
      margin: "1rem",
      animation: "countUp 2s ease-out",
    },
    statNumber: {
      fontSize: "2.5rem",
      fontWeight: 800,
      background: "linear-gradient(135deg, #00f5ff, #6366f1)",
      WebkitBackgroundClip: "text",
      WebkitTextFillColor: "transparent",
      backgroundClip: "text",
    },
    statLabel: {
      fontSize: "0.9rem",
      textTransform: "uppercase",
      letterSpacing: "1px",
      opacity: 0.8,
    },
    pulseRing: {
      position: "absolute",
      top: "50%",
      left: "50%",
      transform: "translate(-50%, -50%)",
      width: "300px",
      height: "300px",
      border: "2px solid rgba(0, 245, 255, 0.1)",
      borderRadius: "50%",
      animation: "pulse 4s infinite",
      pointerEvents: "none",
    },
  };

  const keyframes = `
    @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&display=swap');
    
    @keyframes float {
      0% {
        transform: translateY(100vh) rotate(0deg);
      }
      100% {
        transform: translateY(-100px) rotate(360deg);
      }
    }
    
    @keyframes titlePulse {
      0%, 100% {
        transform: scale(1);
      }
      50% {
        transform: scale(1.02);
      }
    }
    
    @keyframes shimmer {
      0% {
        left: -100%;
      }
      100% {
        left: 100%;
      }
    }
    
    @keyframes countUp {
      from {
        opacity: 0;
        transform: translateY(20px);
      }
      to {
        opacity: 1;
        transform: translateY(0);
      }
    }
    
    @keyframes pulse {
      0% {
        transform: translate(-50%, -50%) scale(0.8);
        opacity: 1;
      }
      100% {
        transform: translate(-50%, -50%) scale(1.5);
        opacity: 0;
      }
    }
    
    .gradient-line::after {
      content: '';
      position: absolute;
      top: 0;
      left: -100%;
      width: 100%;
      height: 100%;
      background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.6), transparent);
      animation: shimmer 2s infinite;
    }
    
    .feature-item:hover {
      transform: translateX(8px);
      color: #00f5ff;
    }
    
    .feature-item::before {
      content: '';
      position: absolute;
      left: 0;
      top: 50%;
      transform: translateY(-50%);
      width: 20px;
      height: 20px;
      background: linear-gradient(135deg, #00f5ff, #6366f1);
      border-radius: 50%;
      display: flex;
      align-items: center;
      justify-content: center;
    }
    
    .feature-item::after {
      content: '✓';
      position: absolute;
      left: 6px;
      top: 50%;
      transform: translateY(-50%);
      color: white;
      font-size: 12px;
      font-weight: bold;
    }
    
    .cta-button:hover {
      transform: translateY(-3px) scale(1.05);
      box-shadow: 0 15px 40px rgba(0, 245, 255, 0.4);
      background-position: 100% 100%;
    }
    
    .cta-button:active {
      transform: translateY(-1px) scale(1.02);
    }
    
    @media (max-width: 768px) {
      .hero-container {
        margin: 20px;
        border-radius: 16px;
      }
      
      .title-main {
        font-size: 2.5rem;
      }
      
      .subtitle {
        font-size: 1.1rem;
      }
      
      .description {
        font-size: 1rem;
      }
      
      .feature-item {
        padding-left: 2rem;
      }
      
      .cta-button {
        font-size: 1rem;
        padding: 14px 32px;
      }
    }
  `;

  return (
    <div style={styles.body}>
      <style>{keyframes}</style>

      <div style={styles.floatingElements}>
        <i
          className="fas fa-chart-line"
          style={{
            ...styles.floatingElement,
            left: "10%",
            animationDelay: "0s",
            fontSize: "2rem",
          }}
        ></i>
        <i
          className="fas fa-coins"
          style={{
            ...styles.floatingElement,
            left: "80%",
            animationDelay: "5s",
            fontSize: "1.5rem",
          }}
        ></i>
        <i
          className="fas fa-robot"
          style={{
            ...styles.floatingElement,
            left: "60%",
            animationDelay: "10s",
            fontSize: "2.5rem",
          }}
        ></i>
        <i
          className="fas fa-trending-up"
          style={{
            ...styles.floatingElement,
            left: "30%",
            animationDelay: "15s",
            fontSize: "1.8rem",
          }}
        ></i>
      </div>

      <div className="container py-5">
        <div className="row justify-content-center">
          <div className="col-lg-10">
            <div style={styles.heroContainer}>
              <div style={styles.heroContainerBefore}></div>
              <div style={styles.pulseRing}></div>

              <div className="text-center p-5 tradegpt-main-card">
                <h1 className="display-3 title-main" style={styles.titleMain}>
                  TradeGPT
                </h1>
                <div
                  className="gradient-line"
                  style={styles.gradientLine}
                ></div>

                <p style={styles.subtitle}>
                  Introducing TradeGPT by ValourWealth — Your AI-Powered Trading
                  Companion
                </p>

                <div style={styles.statsContainer}>
                  <div style={styles.statItem}>
                    <div style={styles.statNumber}>50M+</div>
                    <div style={styles.statLabel}>Data Points</div>
                  </div>
                  <div style={styles.statItem}>
                    <div style={styles.statNumber}>Real-Time</div>
                    <div style={styles.statLabel}>Analysis</div>
                  </div>
                  <div style={styles.statItem}>
                    <div style={styles.statNumber}>AI-Driven</div>
                    <div style={styles.statLabel}>Insights</div>
                  </div>
                </div>

                <p style={styles.description}>
                  ValourWealth is proud to introduce TradeGPT, an advanced
                  AI-driven assistant designed to empower you with intelligent
                  insights across stocks, forex, options, and cryptocurrencies.
                  Whether you're analyzing market trends or crafting new
                  strategies, TradeGPT delivers real-time, data-backed responses
                  grounded in over 50 million data points.
                </p>

                <div style={styles.featureList}>
                  <div className="feature-item" style={styles.featureItem}>
                    <span style={styles.featureTitle}>Instant Insights:</span>{" "}
                    Ask TradeGPT any question and receive AI-generated answers
                    on demand.
                  </div>
                  <div className="feature-item" style={styles.featureItem}>
                    <span style={styles.featureTitle}>
                      Comprehensive Analysis:
                    </span>{" "}
                    Leverage deep, data-driven market overviews to inform your
                    decisions.
                  </div>
                  <div className="feature-item" style={styles.featureItem}>
                    <span style={styles.featureTitle}>
                      Actionable Recommendations:
                    </span>{" "}
                    Get tailored trade ideas to help you maximize your profits.
                  </div>
                </div>

                <p style={styles.bottomText}>
                  Jump-start your trading journey with ValourWealth's
                  "super-intelligent" AI. From on-the-fly analytics to
                  personalized trade suggestions, every feature is engineered to
                  support your financial growth and elevate your performance.
                </p>

                <button
                  className="cta-button"
                  style={styles.ctaButton}
                  onClick={handleButtonClick}
                  disabled={isLoading}
                >
                  {isLoading ? (
                    <>
                      <i className="fas fa-rocket me-2"></i> {buttonText}
                    </>
                  ) : (
                    <>
                      <i className="fas fa-brain me-2"></i> {buttonText}
                    </>
                  )}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TradeGPT;
