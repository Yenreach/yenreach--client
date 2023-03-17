import React from 'react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Bar } from 'react-chartjs-2';

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const options = {
  indexAxis: 'x',
  elements: {
    bar: {
      borderWidth: 2,
    },
  },
  responsive: true,
  plugins: {
    legend: {
      position: 'right',
      display: false,
    },
    title: {
      display: true,
      text: 'Page Visits',
    },
  },
};

const labels = ['January', 'February', 'March', 'April', 'May', 'June', 'July', "August", "September", "October", "November", "December"];



const Analytics = ({ analytics }) => {
    const data = {
      labels,
      datasets: [
        {
          label: 'visits',
          data: analytics,
          borderColor: '#00C885',
          backgroundColor: '#00C885',
        }
      ],
    };
    return <Bar options={options} data={data} />;
};


export default Analytics;