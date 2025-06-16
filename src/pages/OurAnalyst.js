import React from "react";
import analyst1 from "../assets/images/trading-analyst1.png";
import analyst2 from "../assets/images/trading-analyst2.png";
import analyst3 from "../assets/images/trading-analyst3.png";

function Analyst() {
  return (
    <section className="our-analyst py-5">
      <div className="container">
        <h2 className="text-center fw-bold mb-4">Meet Our Team of Analysts</h2>
        <div className="row justify-content-center">
          <div className="col-lg-9 mb-3">
            <div className="card shadow-lg border-0 rounded-3 p-4 team-card">
              <div className="row align-items-center">
                {/* Analyst Image */}
                <div className="col-md-4 text-center mb-lg-0 mb-2 analyst-img">
                  <img
                    src={analyst1}
                    alt=""
                    className="obj_fit"
                  />
                </div>
                {/* Analyst Details */}
                <div className="col-md-8">
                  <h4 className="fw-bold profile-name">Ethan Rhodes</h4>
                  <p className="text-muted">
                    With over a decade in algorithmic trading, Ethan brings a
                    unique edge to manual traders by bridging the gap between
                    quant strategies and everyday setups. He focuses on
                    structure, edge, and repeatability, and believes that
                    consistency beats luck every time.
                  </p>
                  <p className="fw-bold">
                    Areas of Focus:{" "}
                    <span className="text-dark">
                      Areas of Focus: Quant-Inspired Trading / System Building /
                      Options Flow / Market Internals
                    </span>
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="col-lg-9 mb-3">
            <div className="card shadow-lg border-0 rounded-3 p-4 team-card">
              <div className="row align-items-center">
                {/* Analyst Image */}
                <div className="col-md-4 text-center mb-lg-0 mb-2 analyst-img">
                  <img
                    src={analyst2}
                    alt=""
                    className="obj_fit"
                  />
                </div>
                {/* Analyst Details */}
                <div className="col-md-8">
                  <h4 className="fw-bold profile-name">Ian M</h4>
                  <p className="text-muted">
                    Ian is a disciplined trader who transitioned from a
                    background in finance to full-time options trading. His
                    analytical approach and deep understanding of macroeconomic
                    trends give him an edge in volatile markets. Logan’s calm
                    demeanor and data-driven strategies make him a go-to mentor
                    for newer traders.
                  </p>
                  <p className="fw-bold">
                    Areas of Focus:{" "}
                    <span className="text-dark">
                      Areas of Focus: Swing Trading / Vertical Spreads / Risk
                      Management / Earnings Plays
                    </span>
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="col-lg-9 mb-3">
            <div className="card shadow-lg border-0 rounded-3 p-4 team-card">
              <div className="row align-items-center">
                {/* Analyst Image */}
                <div className="col-md-4 text-center mb-lg-0 mb-2 analyst-img">
                  <img
                    src={analyst3}
                    alt=""
                    className="obj_fit"
                  />
                </div>
                {/* Analyst Details */}
                <div className="col-md-8">
                  <h4 className="fw-bold profile-name">Jessica Moretti</h4>
                  <p className="text-muted">
                    Jessica is a methodical trader with a sharp eye for breakout
                    opportunities. She combines fundamentals with technical
                    patterns to identify high-conviction swing trades. Her
                    patient, disciplined approach has helped countless traders
                    learn to trade less but earn more.
                  </p>
                  <p className="fw-bold">
                    Areas of Focus:{" "}
                    <span className="text-dark">
                    Areas of Focus: Swing Trading / Breakout Setups / Options Chains / Trade Planning
                    </span>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Analyst;
