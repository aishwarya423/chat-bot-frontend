import React from "react";
import "./index.css";

const ApplicationStatusCard = () => {
  return (
    <div className="app-status-card">
      <div className="app-status-header">
        <h4>Application Status</h4>
        <p className="status-badge">Approved</p>
      </div>
      <div className="app-status-body">
        <p className="label">Submitted On:</p>
        <p className="value">2025-06-01</p>
      </div>
      {/* <div className="app-status-footer">
        <button className="details-btn">View Details</button>
      </div> */}
    </div>
  );
};

export default ApplicationStatusCard;
