import "../DashboardSidebarComp/styles/releasenotes.css";

function ReleaseNotes() {
  return (
    <div className="releasenotes_container">
      <h1 className="releasenotes_heading">Release Notes</h1>
      <p className="releasenotes_intro">
        See the latest features, improvements, and product updates brought to
        you by the <strong>ValourWealth Team</strong>. We are committed to
        delivering innovative tools and personalized solutions to help you grow
        as a trader and investor.
      </p>

      <div className="releasenotes_section">
        <h2 className="releasenotes_title">Wealth Series Now Available</h2>
        <p className="releasenotes_meta">May 29, 2025 • v2.15.0</p>
        <h3 className="releasenotes_product">Wealth Series</h3>
        <p>
          Wealth Series Lite combines our proprietary AI stock selection engine
          with an intuitive, gamified portfolio builder. Compete on a global
          leaderboard while learning how to construct high-performing portfolios
          using real market data. Updates are released biweekly to ensure your
          strategy stays relevant.
        </p>
        <p>Contact our sales team to find out more.</p>
      </div>

      <div className="releasenotes_section">
        <h2 className="releasenotes_title">
          Introducing Wealth Series: Smarter Investments
        </h2>
        <p className="releasenotes_meta">Apr 15, 2025 • v2.14.0</p>
        <h3 className="releasenotes_product">Wealth Series Premium</h3>
        <p>
          Wealth Series is a powerful new addition to the ValourWealth platform
          that allows members to choose from expertly designed AI-generated
          portfolio packs: Atlas, Titan, and Everest. These packs include
          strategies ranging from high-growth and low-volatility to balanced and
          deep-value investments — all curated using advanced data models and
          continuously optimized.
        </p>
        <p>Contact our sales team to find out more.</p>
      </div>

      <div className="releasenotes_section">
        <h2 className="releasenotes_title">TradeGPT AI Assistant Launch</h2>
        <p className="releasenotes_meta">Mar 1, 2025 • v2.13.0</p>
        <h3 className="releasenotes_product">TradeGPT</h3>
        <p>
          TradeGPT, the flagship AI assistant from ValourWealth, is now
          available across the entire platform. It enables users to ask
          real-time trading questions, analyze market moves, and receive
          actionable feedback based on 50+ million data points. Whether you’re
          looking for a quick analysis or strategic insight, TradeGPT delivers
          instant support.
        </p>
        <p>Now available to all registered members.</p>
      </div>

      <div className="releasenotes_section">
        <h2 className="releasenotes_title">Beginner Hub</h2>
        <p className="releasenotes_meta">Feb 12, 2025 • v2.12.0</p>
        <h3 className="releasenotes_product">Beginner Hub</h3>
        <p>
          We've expanded the Beginner Hub with brand-new content tailored for
          first-time traders. Covering basic market terms, technical analysis,
          and risk management principles, the Trading Academy now offers a more
          interactive learning experience to build confidence before placing
          your first trade.
        </p>
      </div>

      <div className="releasenotes_section">
        <h2 className="releasenotes_title">
          One-to-One Mentorship & Platinum Features
        </h2>
        <p className="releasenotes_meta">Jan 15, 2025 • v2.11.0</p>
        <h3 className="releasenotes_product">Mentorship & Platinum Program</h3>
        <p>
          We’ve officially launched our One-to-One Mentorship Program,
          connecting members with expert coaches for live, personalized trading
          feedback. Alongside this, our Platinum tier unlocks access to premium
          AI insights, strategy calls, and priority access to new features — all
          designed for serious traders ready to scale.
        </p>
      </div>

      <div className="releasenotes_section">
        <h2 className="releasenotes_title">
          Live Training Sessions & Webinars
        </h2>
        <p className="releasenotes_meta">Dec 20, 2024 • v2.10.0</p>
        <h3 className="releasenotes_product">Live Sessions</h3>
        <p>
          Join our weekly live webinars hosted by seasoned traders and analysts.
          Ask real-time questions, get insights into ongoing market trends, and
          walk away with practical trading ideas you can apply immediately.
        </p>
      </div>

      <footer className="releasenotes_footer">
        © 2025 ValourWealth. Built for traders, by the ValourWealth Team.
      </footer>
    </div>
  );
}

export default ReleaseNotes;
