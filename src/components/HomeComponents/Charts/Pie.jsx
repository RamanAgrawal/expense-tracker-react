import {Chart,ArcElement,Tooltip,Legend} from 'chart.js'
import {  Line, Pie } from "react-chartjs-2";

import React from 'react'

Chart.register(
  ArcElement,Tooltip,Legend
)

const Piee = () => {
    const data = {
        labels: [
          "01/01/2019",
          "02/01/2019",
          "03/01/2019",
          "04/01/2019",
          "05/01/2019",
          "06/01/2019",
          "07/01/2019"
        ],
        //backgroundColor: ['rgba(255,0,0,1)'],
        //lineTension: 1,
        datasets: [
          {
            label: "HSN",
            fill: false,
            borderColor: "rgba(255, 0, 0, 0.3)",
            borderWidth: 1,
            pointRadius: 2,
            data: [65, 59, 80, 81, 56, 55, 40]
          },
          {
            label: "CPX",
            fill: false,
            borderColor: "rgba(0, 255, 0, 0.3)",
            borderWidth: 1,
            pointRadius: 2,
            data: [70, 32, 45, 65, 87, 92, 99]
          },
          {
            label: "Total",
            fill: false,
            borderColor: "blue",
            borderWidth: 2,
            pointRadius: 2,
            data: [135, 91, 125, 144, 143, 143, 139]
          }
        ]
      };
    
      var options = {
        legend: {
          position: "right",
          labels: {
            boxWidth: 10
          }
        },
        scales: {
          xAxes: [
            {
              ticks: { display: false }
            }
          ]
        }
      };
    
    const pieData = {
        labels: [
            'Red',
            'Blue',
            'Yellow'
        ],
        datasets: [{
            data: [300, 50, 100],
            backgroundColor: [
            'rgba(255,0,0, 1)',
            '#36A2EB',
            '#FFCE56'
            ]
        }]
    };
    
      return (
        <div className="App main">
          <Line data={data} options={options} />
          <Pie data={pieData} options={options} />
        </div>
      );
    }

export default Piee