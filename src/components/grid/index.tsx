import React from 'react';

const annuityData = [
  {
    clientName: 'John Doe',
    annuityType: 'Fixed',
    startDate: '2022-01-01',
    endDate: '2032-01-01',
    monthlyPayout: 500,
    totalContribution: 60000,
    interestRate: 3.5,
    status: 'Active',
  },
  // Add more entries as needed
];

const AnnuityTable = () => {
  return (
    <table border={1} cellPadding="10" style={{ width: '100%', borderCollapse: 'collapse' }}>
      <thead>
        <tr>
          <th>Client Name</th>
          <th>Annuity Type</th>
          <th>Start Date</th>
          {/* <th>End Date</th> */}
          {/* <th>Monthly Payout</th>
          <th>Total Contribution</th>
          <th>Interest Rate (%)</th>
          <th>Status</th> */}
        </tr>
      </thead>
      <tbody>
        {annuityData.map((item, index) => (
          <tr key={index}>
            <td>{item.clientName}</td>
            <td>{item.annuityType}</td>
            <td>{item.startDate}</td>
            {/* <td>{item.endDate}</td>
            <td>${item.monthlyPayout}</td>
            <td>${item.totalContribution}</td>
            <td>{item.interestRate}%</td>
            <td>{item.status}</td> */}
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default AnnuityTable;