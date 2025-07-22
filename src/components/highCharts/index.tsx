// HighchartsBar.js
import React from 'react';
import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';

const HighchartsBar = () => {
   const options = {
    chart: {
      type: 'bar',
      backgroundColor: '#f4f4f4',
      style: {
        fontFamily: 'Arial, sans-serif',
      },
    },
    title: {
      text: 'Fruit Consumption',
      style: {
        color: '#333',
        fontSize: '20px',
      },
    },
    xAxis: {
      categories: ['Apples', 'Bananas', 'Oranges'],
      title: {
        text: null,
      },
      labels: {
        style: {
          color: '#333',
          fontSize: '14px',
        },
      },
      gridLineColor: '#e6e6e6',
    },
    yAxis: {
      min: 0,
      title: {
        text: 'Units',
        align: 'high',
        style: {
          color: '#666',
        },
      },
      labels: {
        overflow: 'justify',
        style: {
          color: '#333',
        },
      },
      gridLineColor: '#e6e6e6',
    },
    tooltip: {
      valueSuffix: ' units',
      backgroundColor: '#fff',
      borderColor: '#ccc',
      style: {
        color: '#000',
      },
    },
    plotOptions: {
      bar: {
        dataLabels: {
          enabled: true,
          style: {
            color: '#000',
          },
        },
        borderRadius: 4,
        pointPadding: 0.2,
        groupPadding: 0.1,
      },
    },
    legend: {
      layout: 'vertical',
      align: 'right',
      verticalAlign: 'top',
      x: -40,
      y: 80,
      floating: true,
      borderWidth: 1,
      backgroundColor: '#ffffff',
      shadow: true,
    },
    credits: {
      enabled: false,
    },
    series: [
      {
        name: 'Jane',
        data: [1, 0, 4],
        color: '#7cb5ec',
      },
      {
        name: 'John',
        data: [5, 7, 3],
        color: '#434348',
      },
    ],
  };

  return <HighchartsReact highcharts={Highcharts} options={options} style={{height:"50px", width:"50px"}} />;
};

export default HighchartsBar;