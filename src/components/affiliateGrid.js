import React from 'react';
import affiliate1 from '../assets/images/affiliate1.png';
import affiliate2 from '../assets/images/affiliate2.png';
import affiliate3 from '../assets/images/pricing-affiliate.png';
import affiliate4 from '../assets/images/affiliate-tradegpt.png';

const ValourWealthGallery = () => {
  return (
    <>
      <style jsx>{`
        .gallery-section {
          background: linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%);
        }
        
        .gallery-item {
          position: relative;
          overflow: hidden;
          border-radius: 1rem;
          transition: all 0.3s ease;
          box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
        }
        
        .gallery-item:hover {
          transform: translateY(-8px);
          box-shadow: 0 20px 40px rgba(0, 0, 0, 0.15);
        }
        
        .gallery-item img {
          width: 100%;
          height: 300px;
          object-fit: cover;
          transition: transform 0.3s ease;
        }
        
        .gallery-item:hover img {
          transform: scale(1.05);
        }
        
        .gallery-overlay {
          position: absolute;
          bottom: 0;
          left: 0;
          right: 0;
          background: linear-gradient(to top, rgba(0,0,0,0.8) 0%, transparent 100%);
          color: white;
          padding: 1.5rem;
          transform: translateY(100%);
          transition: transform 0.3s ease;
        }
        
        .gallery-item:hover .gallery-overlay {
          transform: translateY(0);
        }
        
        .btn-custom {
          // background: linear-gradient(135deg, #007bff 0%, #0056b3 100%);
          border: none;
          border-radius: 50px;
          padding: 12px 30px;
          font-weight: 600;
          transition: all 0.3s ease;
          box-shadow: 0 4px 15px rgba(0, 123, 255, 0.3);
        }
        
        .btn-custom:hover {
          transform: translateY(-2px);
          box-shadow: 0 8px 25px rgba(0, 123, 255, 0.4);
        }
        
        @media (max-width: 768px) {
          .gallery-item img {
            height: 250px;
          }
        }
      `}</style>

      <section className="gallery-section py-5">
        <div className="container">
          {/* Header */}
          <div className="row">
            <div className="col-12 text-center mb-5">
              <h2 className="display-4 fw-bold text-dark mb-3">
                Why Choose ValourWealth
              </h2>
              <p className="lead text-muted mx-auto" style={{ maxWidth: '600px' }}>
                Experience our cutting-edge trading platform with advanced features and professional tools
              </p>
            </div>
          </div>

          {/* Gallery Grid */}
          <div className="row g-4 mb-5">
            {/* Image 1 - Market Overview */}
            <div className="col-lg-6 col-md-6 col-sm-12">
              <div className="gallery-item">
                <img 
                  src={affiliate1} 
                  alt="Market Overview Dashboard - Real-time trading data and analytics"
                  className="img-fluid"
                />
                <div className="gallery-overlay">
                  <h4 className="fw-bold mb-2">Market Overview</h4>
                  <p className="mb-0 text-light">Real-time market data and comprehensive analysis</p>
                </div>
              </div>
            </div>

            {/* Image 2 - Platinum Dashboard */}
            <div className="col-lg-6 col-md-6 col-sm-12">
              <div className="gallery-item">
                <img 
                  src={affiliate2} 
                  alt="Platinum Member Dashboard - Premium trading features and insights"
                  className="img-fluid"
                />
                <div className="gallery-overlay">
                  <h4 className="fw-bold mb-2">Platinum Dashboard</h4>
                  <p className="mb-0 text-light">Premium member exclusive features and insights</p>
                </div>
              </div>
            </div>

            {/* Image 3 - Pricing Plans */}
            <div className="col-lg-6 col-md-6 col-sm-12">
              <div className="gallery-item">
                <img 
                  src={affiliate3} 
                  alt="Flexible Pricing Plans - Starter, Intermediate, and Advanced trading packages"
                  className="img-fluid"
                />
                <div className="gallery-overlay">
                  <h4 className="fw-bold mb-2">Flexible Pricing</h4>
                  <p className="mb-0 text-light">Plans designed for every type of trader</p>
                </div>
              </div>
            </div>

            {/* Image 4 - TradeGPT AI */}
            <div className="col-lg-6 col-md-6 col-sm-12">
              <div className="gallery-item">
                <img 
                  src={affiliate4} 
                  alt="TradeGPT AI Assistant - AI-powered trading companion with real-time insights"
                  className="img-fluid"
                />
                <div className="gallery-overlay">
                  <h4 className="fw-bold mb-2">TradeGPT AI</h4>
                  <p className="mb-0 text-light">AI-powered trading assistant with smart insights</p>
                </div>
              </div>
            </div>
          </div>

          {/* Call to Action */}
          <div className="row">
            <div className="col-12 text-center">
              <button className="btn btn-primary btn-lg btn-custom">
                Start Trading Today
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ValourWealthGallery;