import React from "react";
import Layout from "../components/layout";

function PrivacyPolicy() {
  return (
    <Layout>
      <div className="privacy-container">
        <div className="privacy-header">
          <h1>Privacy Policy</h1>
          <div className="divider"></div>
        </div>

        <div className="privacy-content">
          <p className="effective-date">Effective Date: January 1, 2025</p>

          {/* Introduction */}
          <div className="privacy-intro">
            <h2>1. Introduction</h2>
            <p>
              Welcome to Valour Wealth. We are committed to protecting your privacy. This Privacy Policy outlines how we
              collect, use, and safeguard your information when you use our educational services.
            </p>
          </div>

          {/* Information We Collect */}
          <div className="privacy-intro">
            <h2>2. Information We Collect</h2>
            <ul>
              <li>
                <strong>Personal Information:</strong> We may collect your name, email address, and other relevant details when you register or interact with our services.
              </li>
              <li>
                <strong>Usage Data:</strong> We track how you engage with our platform, including page visits, time spent, and interactions.
              </li>
              <li>
                <strong>Cookies & Tracking Technologies:</strong> We use cookies to enhance user experience and analyze site traffic.
              </li>
            </ul>
          </div>

          {/* How We Use Your Information */}
          <div className="privacy-intro">
            <h2>3. How We Use Your Information</h2>
            <ul>
              <li>To provide and improve our educational content and services.</li>
              <li>To communicate important updates, promotions, or support messages.</li>
              <li>To analyze user trends and enhance platform functionality.</li>
              <li>To ensure compliance with legal obligations and security policies.</li>
            </ul>
          </div>

          {/* Data Protection & Security */}
          <div className="privacy-intro">
            <h2>4. Data Protection & Security</h2>
            <p>
              We implement industry-standard security measures to protect your information. However, no method of
              transmission over the internet is 100% secure. We advise users to exercise caution while sharing sensitive data online.
            </p>
          </div>

          {/* Sharing of Information */}
          <div className="privacy-intro">
            <h2>5. Sharing of Information</h2>
            <p>
              We do not sell or rent your personal information. We may share data with trusted third parties for service
              enhancements, legal requirements, or security purposes.
            </p>
          </div>

          {/* User Rights */}
          <div className="privacy-intro">
            <h2>6. Your Rights & Choices</h2>
            <p>
              You have the right to access, update, or request deletion of your personal information. You can also opt out of certain communications.
            </p>
          </div>

          {/* Changes to This Policy */}
          <div className="privacy-intro">
            <h2>7. Changes to This Policy</h2>
            <p>
              We may update this Privacy Policy periodically. Any changes will be reflected on this page with an updated effective date. Continued use of our services constitutes acceptance of any modifications.
            </p>
          </div>

          {/* Contact Us */}
          <div className="privacy-intro">
            <h2>8. Contact Us</h2>
            <p>
              If you have any questions regarding this policy, please contact us at{" "}
              <a href="mailto:Contact@valourwealth.com">Contact@valourwealth.com</a>.
            </p>
          </div>
        </div>

        <footer className="privacy-footer">
          <p>© 2025 Valour Wealth. All rights reserved.</p>
        </footer>
      </div>
    </Layout>
  );
}

export default PrivacyPolicy;
