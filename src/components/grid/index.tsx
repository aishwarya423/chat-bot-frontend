import React from "react";
import "./index.css";

const annuityData = [
  {
    clientName: "John Doe",
    annuityType: "Fixed",
    startDate: "2022-01-01",
    endDate: "2032-01-01",
    monthlyPayout: 500,
    totalContribution: 60000,
    interestRate: 3.5,
    status: "Active",
  },
];

const AnnuityTable = () => {
  return (
    <div className="annuity-table-wrapper">
      <table border={1} className="annuity-table">
        <thead>
          <tr>
            <th>Client Name</th>
            <th>Annuity Type</th>
            <th>Start Date</th>
          </tr>
        </thead>
        <tbody>
          {annuityData.map((item, index) => (
            <tr key={index}>
              <td>{item.clientName}</td>
              <td>{item.annuityType}</td>
              <td>{item.startDate}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default AnnuityTable;
