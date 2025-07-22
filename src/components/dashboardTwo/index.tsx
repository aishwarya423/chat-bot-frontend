import React from "react";

import "./index.css";
import PensionGrid from "../pensionGrid";
import ApplicationStatusCard from "../applicationStatus";
import PolicyTerms from "../policyTerms";
import AdvisorContact from "../adviserContact";
import StatusPieChart from "../statusPieChart";
import IncomeTaxPieChart from "../incomeTaxPieChart";

const DashboardTwo = () => {
  return (
    <div className="dashboard-two-wrapper">
      <h2 className="dashboard-title">Annuity Dashboard</h2>
      <div className="dashboard-grid">
        <div className="grid-item full-width">
          <PensionGrid />
        </div>
        <div className="grid-item half-width">
          <ApplicationStatusCard />
        </div>
        <div className="grid-item half-width">
          <PolicyTerms />
        </div>
        <div className="grid-item half-width">
          <AdvisorContact />
        </div>
        <div className="grid-item half-width">
          <StatusPieChart />
        </div>
        <div className="grid-item half-width">
          <IncomeTaxPieChart />
        </div>
      </div>
    </div>
  );
};

export default DashboardTwo;
