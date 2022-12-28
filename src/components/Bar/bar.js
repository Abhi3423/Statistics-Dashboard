import React from "react";
import { Bar } from "react-chartjs-2";
import { UserData } from "./bardata";
import { useState } from "react";
import { Chart as ChartJS } from "chart.js/auto";

import {
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

export const options = {

  type: 'bar',
  responsive: true,
  interaction: {
    mode: 'index',
    intersect: false,
  },
  tooltips: {
    mode: 'index',
    intersect: true,
  },
  stacked: false,
  scales: {
    x:{
      grid: {
        display: false,
      },
    },
    y: {
      grid: {
        display: true,
      },
      display: true,
      position: 'right',
      ticks: {
        stepSize: 10
      },
      beginAtZero: true,
    },
  },
  hover: {
    mode: 'index',
    intersect: false,
  },
  plugins: {
    legend:{
      
        display: false
    },
    tooltip: {
        responsive: "true",
        backgroundColor: "#FD6534",
        yAlign: "bottom",
        intersect: "true",
        callbacks: {
          labelPointStyle: function(context) {
              return {
                  pointStyle: 'circle',
                  rotation: 0,
              };
          },
          title: function(context) {
              let title = "Active Users";
              return title;
          },
      },

    },
  }
  

};



function BarChart() {

    const [userData, setUserData] = useState({
        labels: UserData.map((data) => data.time),
        datasets: [
          {
            label: "Active Users",
            data: UserData.map((data) => data.users),
            backgroundColor: [
              "#FD6534",
            ],
            barPercentage: 0.2,
            borderRadius: 6,
          },
        ],
      });

      return <Bar options={options} data={userData} />;

}

export default BarChart;