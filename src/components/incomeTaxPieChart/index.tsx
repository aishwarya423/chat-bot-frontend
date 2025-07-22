import React from 'react';
import { PieChart, Pie, Cell, Tooltip, Legend } from 'recharts';

const data = [
  { name: 'Income', value: 70000 },
  { name: 'Tax-Free Cash', value: 30000 },
];

const COLORS = ['#00C49F', '#FFBB28'];

const IncomeTaxPieChart = () => (
  <PieChart width={300} height={250}>
    <Pie data={data} dataKey="value" nameKey="name" cx="50%" cy="50%" outerRadius={80} label>
      {data.map((entry, index) => <Cell key={index} fill={COLORS[index % COLORS.length]} />)}
    </Pie>
    <Tooltip />
    <Legend />
  </PieChart>
);

export default IncomeTaxPieChart;