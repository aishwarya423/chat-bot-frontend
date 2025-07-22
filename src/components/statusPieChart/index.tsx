import React from 'react';
import { PieChart, Pie, Cell, Tooltip, Legend } from 'recharts';

const data = [
  { name: 'Submitted', value: 10 },
  { name: 'Approved', value: 5 },
  { name: 'Rejected', value: 2 },
];

const COLORS = ['#8884d8', '#82ca9d', '#ff6b6b'];

const StatusPieChart = () => (
  <PieChart width={300} height={250}>
    <Pie data={data} dataKey="value" nameKey="name" cx="50%" cy="50%" outerRadius={80} label>
      {data.map((entry, index) => <Cell key={index} fill={COLORS[index % COLORS.length]} />)}
    </Pie>
    <Tooltip />
    <Legend />
  </PieChart>
);

export default StatusPieChart;