import React from "react";
import { Line } from "react-chartjs-2";
import { UserData } from "./linedata";
import { useState } from "react";
import { Chart as ChartJS } from "chart.js";
import {
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
    Filler,
} from 'chart.js';

ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
    Filler
);


// const plugin = {
//   id: 'corsair',
//   defaults: {
//       width: 1,
//       color: '#FF4949',
//       dash: [3, 3],
//   },
//   afterInit: (chart, args, opts) => {
//     chart.corsair = {
//       x: 0,
//       y: 0,
//     }
//   },
//   afterEvent: (chart, args) => {
//     const {inChartArea} = args
//     const {type,x,y} = args.event

//     chart.corsair = {x, y, draw: inChartArea}
//     chart.draw()
//   },
//   afterDraw: (chart, args, opts) => {
//     const {ctx} = chart
//     const {top, bottom, left, right} = chart.chartArea
//     const {x, y, draw} = chart.corsair
//     if (!draw) return

//     ctx.save()
    
//     ctx.beginPath()
//     ctx.lineWidth = opts.width
//     ctx.strokeStyle = opts.color
//     ctx.setLineDash(opts.dash)
//     ctx.moveTo(x, bottom)
//     ctx.lineTo(x, top)
//     ctx.moveTo(left, y)
//     ctx.lineTo(right, y)
//     ctx.stroke()
    
//     ctx.restore()
//   }
// }


export const options = {
    type: 'line',
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
        type: 'linear',
        display: true,
        position: 'right',
        ticks: {
          stepSize: 20
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
      tooltipline: {
          backgroundColor: "black",
      },
      tooltip: {
        usePointStyle: true,
        responsive: "true",
        backgroundColor: "#FFFFFF",
        callbacks: {
          labelPointStyle: function(context) {
              return {
                  pointStyle: 'circle',
                  rotation: 0,
              };
          },
          title: function(context) {
            let title = "Users";
            return title;
          },
          labelTextColor: function(context) {
            let title = "#676668";
            return title;
          },
        },
        titleColor: "#676668",
      }
    }

};

  
function LineChart() {

    const [userData, setUserData] = useState({
        labels: UserData.map((data) => data.pos),
        datasets: [
          {
            label: "January 2045",
            data: UserData.map((data) => data.user2045),
            fill: true,
            borderColor: '#FD6534',
            backgroundColor: "#F2D7CD",
            borderWidth: 2,
            fill: {
              target: "origin",
              above: "#f2c58e8f"
            }
          },
          {
            label: "December 2044",
            data: UserData.map((data) => data.user2044),
            fill: true,
            borderColor: '#FD6534',
            fill: "origin",
            borderWidth: 2,
            pointBorderColor: "transparent",
            pointBorderWidth: 0.1,
          },
        
        ],
      });


  return <Line options={options} data={userData} />;
}

export default LineChart;