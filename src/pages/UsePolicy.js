import React from "react";

function UsePolicy() {
  return (
    <section className="acceptable-use-policy">
      <div className="container">
        <div className="privacy-container">
          <div className="privacy-header">
            <h1 className="terms-title text-dark text-center fw-bold">
              Acceptable Use Policy
            </h1>
            <div className="divider"></div>
          </div>
          <p>
            <strong>Last Updated: March 15, 2025</strong>
          </p>

          <div className="privacy-intro">
            <h2>1. Permitted Use</h2>
            <p>
              You may use Valour Wealth’s services, including trade alerts,
              crypto group insights, coaching materials, and dark pool data,
              solely for:
            </p>
            <ul>
              <li>
                Personal and educational purposes to enhance your trading
                knowledge.
              </li>
              <li>
                Engaging with our platform in a manner that aligns with
                financial education and market analysis.
              </li>
              <li>
                Receiving trade alerts and using the provided insights
                responsibly.
              </li>
            </ul>
          </div>

          <div className="privacy-intro">
            <h2>2. Prohibited Activities</h2>
            <p>
              To maintain the integrity of our services, the following
              activities are strictly prohibited:
            </p>

            <h2>A. Unauthorized Use & Data Misuse</h2>
            <ul>
              <li>
                Scraping, extracting, or automating access to trade alerts,
                market insights, or proprietary content.
              </li>
              <li>
                Reselling or redistributing any part of our data, insights, or
                trade alerts without written permission.
              </li>
              <li>
                Sharing exclusive content from the crypto group, coaching
                materials, or dark pool data with non-subscribers.
              </li>
            </ul>

            <h2>B. Security Violations</h2>
            <ul>
              <li>
                Attempting to gain unauthorized access to our systems, user
                accounts, or restricted data.
              </li>
              <li>
                Engaging in hacking, phishing, or any activity that compromises
                the security of our platform.
              </li>
              <li>
                Using AI tools or automation in a manner that violates our Terms
                of Service.
              </li>
            </ul>

            <h2>C. Fraud & Misrepresentation</h2>
            <ul>
              <li>
                Providing false or misleading information when creating an
                account.
              </li>
              <li>
                Impersonating Valour Wealth representatives or falsely claiming
                expertise in trading.
              </li>
              <li>
                Using trade alerts or financial insights in ways that could
                mislead others.
              </li>
            </ul>

            <h2>D. Market Manipulation & Misuse</h2>
            <ul>
              <li>
                Using Valour Wealth’s insights to engage in illegal market
                activities such as insider trading.
              </li>
              <li>
                Engaging in any trading behavior that violates financial
                regulations or ethical trading practices.
              </li>
            </ul>
          </div>

          <div className="privacy-intro">
            <h2>3. Consequences of Violating This Policy</h2>
            <p>
              If you violate this Acceptable Use Policy, we reserve the right
              to:
            </p>
            <ul>
              <li>
                Suspend or terminate your access to our services without prior
                notice.
              </li>
              <li>
                Report suspicious activities to relevant authorities, if
                necessary.
              </li>
              <li>
                Pursue legal action for unauthorized distribution or misuse of
                our proprietary data.
              </li>
            </ul>
          </div>

          <div className="privacy-intro">
            <h2>Contact Information</h2>
            <p>
              <a href="mailto:Contact@valourwealth.com">
                Email: Contact@valourwealth.com
              </a>
            </p>
            <p>
              <a href="tel:+1 414 485 8800">Phone: +1 414 485 8800</a>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default UsePolicy;
