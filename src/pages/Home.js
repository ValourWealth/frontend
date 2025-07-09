import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect, useRef, useState } from "react";
import Newsletter from "../components/newsletter";
import PostEditor from "../components/postEditor";
import Posts from "../components/posts";
import Technology from "../components/technology";
import "../styles/global.css";

import backgroundVideo from "../assets/images/bannergreen.mp4";
import Stocks from "../components/Stocks";
import EditorChoice from "../components/editorChoice";
import MarketDetails from "../components/marketDetails";

function Home() {
  const videoRef = useRef(null);
  const [showPopup, setShowPopup] = useState(false);

  useEffect(() => {
    AOS.init({ duration: 1000, once: true });

    const video = videoRef.current;
    if (video) {
      video.controls = false;
      video.removeAttribute("controls");
      video.muted = true;
      video.setAttribute("muted", "");

      const playPromise = video.play();
      if (playPromise !== undefined) {
        playPromise.catch((error) => {
          console.warn("Autoplay failed:", error);
        });
      }
    }
  }, []);

  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-lg-12 p-0">
          <div className="home-banner">
            <video
              className="banner-video w-100 obj_fit"
              autoPlay
              loop
              muted
              playsInline
              preload="auto"
              disablePictureInPicture
              controlsList="nodownload nofullscreen noremoteplayback"
              onContextMenu={(e) => e.preventDefault()}
              ref={videoRef}
            >
              <source src={backgroundVideo} type="video/mp4" />
              Your browser does not support the video tag.
            </video>

            <div className="container">
              <div className="banner-text" data-aos="fade-up">
                <h5>Introducing</h5>
                <h1>TradeGPT</h1>
                <p>
                  The revolutionary A.I. powered trading assistant is here to
                  help you elevate your trading to the next level
                </p>
                <button
                  onClick={() =>
                    window.open("https://tradegpt.valourwealth.com", "_blank")
                  }
                  className="theme_btn"
                >
                  Let’s Try It Free
                </button>

                {/* <button
                  className="theme_btn"
                  onClick={() => setShowPopup(true)}
                >
                  Try It For Free
                </button> */}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Popup */}
      {/* // inside Home.js (same logic as yours, just updated popup JSX) */}
      {showPopup && (
        <div className="popup-overlay" onClick={() => setShowPopup(false)}>
          <div className="popup-container" onClick={(e) => e.stopPropagation()}>
            <div className="popup-left">
              <h2>
                UNLEASH THE POWER OF <span className="highlight">TRADEGPT</span>
              </h2>
              <p className="popup-description">
                Revolutionary AI-powered trading assistant that analyzes market
                trends, provides intelligent stock picks, and helps you make
                informed investment decisions with confidence.
              </p>
              <ul className="popup-stats">
                <li>
                  <strong>500K+</strong> Active Traders
                </li>
                <li>
                  <strong>99.9%</strong> Uptime
                </li>
                <li>
                  <strong>2.5x</strong> Avg. Returns
                </li>
                <li>
                  <strong>24/7</strong> Market Coverage
                </li>
              </ul>
            </div>

            <div className="popup-right">
              <h2>REGISTER NOW!</h2>
              <p className="learn-link">
                LEARN HOW TO MAKE MONEY WITH TRADEGPT
              </p>
              <p className="popup-info">
                The FREE training is designed to help retail traders jump-start
                their trading with TradeGPT’s super-intelligent AI.
                <br />
                <br />
                You’ll learn AI tools, 7 proven strategies, and how to maximize
                trade profits — even with zero experience.
              </p>
              <input type="text" placeholder="First Name" />
              <input type="text" placeholder="Last Name" />
              <input type="email" placeholder="Email Address" />
              <input type="tel" placeholder="Phone Number" />
              <button className="register-btn">GET STARTED</button>
              <p className="consent-text">
                Yes, please send Valour Wealth to keep in touch with additional
                marketing communications.
              </p>
            </div>
          </div>
        </div>
      )}

      {/* Rest of the homepage */}
      <MarketDetails />
      <Posts />
      <EditorChoice />
      <Technology />
      <Stocks />
      <PostEditor />
      <Newsletter />
    </div>
  );
}

export default Home;
