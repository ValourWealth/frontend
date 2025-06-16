import "../DashboardSidebarComp/styles/ViewJournalDetails.css";

function ViewJournalDetails({ isOpen, onClose, entry }) {
  if (!isOpen || !entry) return null;

  const formatDate = (dateString) => {
    return new Date(dateString).toLocaleDateString();
  };

  const getProfitLossClass = () => {
    return entry.profitLoss >= 0 ? "profit" : "loss";
  };

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <div className="modal-header">
          <div className="modal-title">
            <h2>
              {entry.symbol} {entry.trade_type === "long" ? "LONG" : "SHORT"}
            </h2>
            <span className={`result-badge ${getProfitLossClass()}`}>
              {entry.profitLoss >= 0 ? "+" : ""}
              {entry.profitLoss.toFixed(2)} (
              {entry.profitLossPercentage.toFixed(2)}%)
            </span>
          </div>
          <button className="close-modal-button" onClick={onClose}>
            ×
          </button>
        </div>

        <div className="modal-body">
          <div className="details-section">
            <h3>Trade Details</h3>
            <div className="details-grid">
              <div className="detail-item">
                <span className="detail-label">Trade Type:</span>{" "}
                <span className="detail-value">
                  {entry.trade_type === "long" ? "Long" : "Short"}
                </span>
              </div>
              <div className="detail-item">
                <span className="detail-label">Entry Date:</span>{" "}
                <span className="detail-value">
                  {formatDate(entry.entry_date)}
                </span>
              </div>
              <div className="detail-item">
                <span className="detail-label">Entry Price:</span>{" "}
                <span className="detail-value">{entry.entry_price}</span>
              </div>
              <div className="detail-item">
                <span className="detail-label">Exit Date:</span>{" "}
                <span className="detail-value">
                  {formatDate(entry.exit_date)}
                </span>
              </div>
              <div className="detail-item">
                <span className="detail-label">Exit Price:</span>{" "}
                <span className="detail-value">{entry.exit_price}</span>
              </div>
              <div className="detail-item">
                <span className="detail-label">Position Size:</span>{" "}
                <span className="detail-value">{entry.position_size}</span>
              </div>
              <div className="detail-item">
                <span className="detail-label">Risk/Reward Ratio:</span>{" "}
                <span className="detail-value">
                  {entry.risk_reward_ratio || "N/A"}
                </span>
              </div>
              <div className="detail-item">
                <span className="detail-label">Stop Loss:</span>{" "}
                <span className="detail-value">{entry.stop_loss || "N/A"}</span>
              </div>
              <div className="detail-item">
                <span className="detail-label">Take Profit:</span>{" "}
                <span className="detail-value">
                  {entry.take_profit || "N/A"}
                </span>
              </div>
            </div>
          </div>

          <div className="details-section">
            <h3>Trade Analysis</h3>
            <div className="analysis-item">
              <h4>Entry Reason</h4>
              <p>{entry.entry_reason || "Not recorded"}</p>
            </div>
            <div className="analysis-item">
              <h4>Exit Reason</h4>
              <p>{entry.exit_reason || "Not recorded"}</p>
            </div>
            <div className="analysis-item">
              <h4>Emotional State</h4>
              <p>{entry.emotional_state || "Not recorded"}</p>
            </div>
            <div className="analysis-item">
              <h4>Market Conditions</h4>
              <p>{entry.market_conditions || "Not recorded"}</p>
            </div>
          </div>

          <div className="details-section">
            <h3>Lessons & Reflections</h3>
            <div className="analysis-item">
              <h4>What Went Well</h4>
              <p>{entry.what_went_well || "Not recorded"}</p>
            </div>
            <div className="analysis-item">
              <h4>What Went Wrong</h4>
              <p>{entry.what_went_wrong || "Not recorded"}</p>
            </div>
            <div className="analysis-item">
              <h4>Lessons Learned</h4>
              <p>{entry.lessons_learned}</p>
            </div>
            <div className="analysis-item">
              <h4>Additional Notes</h4>
              <p>{entry.additional_notes || "None"}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ViewJournalDetails;
