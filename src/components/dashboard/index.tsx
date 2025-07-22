import React from "react";
import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";
import "./index.css";

const Dashboard: React.FC = () => {
  const chartOptions = {
    chart: {
      type: "column",
      backgroundColor: "transparent",
      width: 880, // Reduce chart width to fit chatbot
    },
    title: {
      text: "Monthly Spending Overview",
      style: { fontSize: "14px" }, // Smaller title font
    },
    xAxis: {
      categories: ["Mar", "Apr", "May", "Jun", "Jul"],
      labels: { style: { fontSize: "12px" } }, // Increase label font
    },
    yAxis: {
      title: { text: "Amount (£)", style: { fontSize: "12px" } },
      labels: { style: { fontSize: "11px" } },
    },
    legend: { itemStyle: { fontSize: "12px" } },
    series: [
      {
        name: "Spending",
        data: [450, 380, 520, 610, 470],
        color: "#0071A7",
      },
    ],
    credits: { enabled: false },
  };

  return (
    <div
      style={{ display: "flex", flexDirection: "column", alignItems: "center" }}
    >
      <div className="dashboard-wrapper">
        <h2 className="dashboard-title">Welcome back, John!</h2>

        {/* Account Summary */}
        <section className="dashboard-section">
          <h3>Account Summary</h3>
          <div className="account-summary">
            <div className="account-card">
              <strong>Current Account</strong>
              <p>£3,250.00</p>
            </div>
            <div className="account-card">
              <strong>Savings Account</strong>
              <p>£12,800.00</p>
            </div>
          </div>
        </section>

        {/* Spending Chart */}
        <section className="dashboard-section">
          <h3>Spending Overview</h3>
          <div className="chart-container">
            <HighchartsReact highcharts={Highcharts} options={chartOptions} />
          </div>
        </section>

        {/* Recent Transactions */}
        <section className="dashboard-section">
          <h3>Recent Transactions</h3>
          <ul className="transaction-list">
            <li>🛒 Tesco - £45.20</li>
            <li>💡 British Gas - £89.00</li>
            <li>🎬 Netflix - £15.99</li>
          </ul>
        </section>

        {/* Quick Actions */}
        <section className="dashboard-section">
          <h3>Quick Actions</h3>
          <div className="action-buttons">
            <button>Transfer Money</button>
            <button>Pay a Bill</button>
            <button>View Statements</button>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Dashboard;
