import React from "react";
import { Bar } from "react-chartjs-2";
import { UserData } from "./multidata";
import { useState } from "react";
import { Chart as ChartJS } from "chart.js/auto";
import menu from '../Assets/menu.png';

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
  scales: {
    x:{
      grid: {
        display: false,
      },
      stacked: true,
    },
    y: {
      grid: {
        display: true,
      },
      display: true,
      position: 'right',
      ticks: {
        stepSize: 20
      },
      beginAtZero: true,
      stacked: true,
    },
  },
  hover: {
    mode: 'index',
    intersect: true,
  },
  plugins: {
    legend:{
        display: true,
        position: 'bottom',
        labels: {
            usePointStyle: true,
            pointStyle: 'circle',
            pointStyleWidth: 10,
            useBorderRadius: true,
        }
    },
    tooltip: {
        usePointStyle: true,
        responsive: "true",
        backgroundColor: "#25334D",
        intersect: "true",
        callbacks: {
            labelPointStyle: function(context) {
                return {
                    pointStyle: 'circle',
                    rotation: 0,
                };
            },
            title: function(context) {
                let title = context[0].label;
                let final_title = "Traffic Channel - " + title + " January";
                return final_title;
            }
        }

    },
  }
  

};



function MultiBarChart() {

    const [userData, setUserData] = useState({
        labels: UserData.map((data) => data.pos),
        datasets: [
          {
            label: "Direct",
            data: UserData.map((data) => data.Direct),
            backgroundColor: [
              "#FD6534",
            ],
            barPercentage: 0.3,
          },
          {
            label: "Organic Search",
            data: UserData.map((data) => data.Organic),
            backgroundColor: [
              "#FFA382",
            ],
            barPercentage: 0.3,
          },
          {
            label: "Referral",
            data: UserData.map((data) => data.Referral),
            backgroundColor: [
              "#FFD1C1",
            ],
            barPercentage: 0.3,
          },
          {
            label: "Social",
            data: UserData.map((data) => data.Social),
            backgroundColor: [
              "#FDDFD7",
            ],
            barPercentage: 0.3,
          },
        ],
      });
      

    //   const targetDiv = document.getElementById("Options");
    //   const btn = document.getElementById("toggle");
    //   btn.onclick = function () {
    //     if (targetDiv.style.display !== "none") {
    //       targetDiv.style.display = "none";
    //     } else {
    //       targetDiv.style.display = "hidden";
    //     }
    //   };


      return (
      <>
      <div>
      <div className='grid grid-cols-2 font-bold text-gray-500 md:grid-cols-4 mt-8 mb-8 2xl:gap-20 xl:gap-12 lg:gap-4 md:gap-20 gap-8 justify-center whitespace-nowrap text-sm'>
            <div id="Options" className="flex flex-row gap-12">
            <a href="/">Traffic Channel</a>
            <a href="/">Source or Channel</a>
            <a href="/">Tranisitions</a>
            </div>
            <a className="float-right w-8 ml-80" href="/" id="toggle"><img src={menu} alt=" "/></a>
      </div>
      <Bar options={options} data={userData}></Bar>
      <hr></hr>
      </div>
      </>
      );

}

export default MultiBarChart;