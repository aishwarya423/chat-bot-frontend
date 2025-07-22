// Dashboard.js
import React from 'react';
import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';

const Dashboard:React.FC = () => {
  const chartOptions = {
    chart: { type: 'column' },
    title: { text: 'Monthly Spending Overview' },
    xAxis: { categories: ['Mar', 'Apr', 'May', 'Jun', 'Jul'] },
    yAxis: { title: { text: 'Amount (£)' } },
    series: [
      {
        name: 'Spending',
        data: [450, 380, 520, 610, 470],
        color: '#0071A7',
      },
    ],
  };

  return (
    <div style={{ padding: '2rem', fontFamily: 'Arial' }}>
      <h2>Welcome back, John!</h2>

      {/* Account Summary */}
      <section style={{ marginBottom: '2rem' }}>
        <h3>Account Summary</h3>
        <div style={{ display: 'flex', gap: '2rem' }}>
          <div>
            <strong>Current Account:</strong>
            <p>£3,250.00</p>
          </div>
          <div>
            <strong>Savings Account:</strong>
            <p>£12,800.00</p>
          </div>
        </div>
      </section>

      {/* Spending Chart */}
      <section style={{ marginBottom: '2rem' }}>
        <h3>Spending Overview</h3>
        <HighchartsReact highcharts={Highcharts} options={chartOptions} />
      </section>

      {/* Recent Transactions */}
      <section style={{ marginBottom: '2rem' }}>
        <h3>Recent Transactions</h3>
        <ul>
          <li>🛒 Tesco - £45.20</li>
          <li>💡 British Gas - £89.00</li>
          <li>🎬 Netflix - £15.99</li>
        </ul>
      </section>

      {/* Quick Actions */}
      <section>
        <h3>Quick Actions</h3>
        <button>Transfer Money</button>
        <button>Pay a Bill</button>
        <button>View Statements</button>
      </section>
    </div>
  );
};

export default Dashboard;