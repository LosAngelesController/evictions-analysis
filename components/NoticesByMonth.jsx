"use client";

import {Chart, registerables} from "chart.js";
import { useEffect, useState } from "react";
import {Bar} from "react-chartjs-2";


Chart.register(...registerables);

export default function NoticesByMonth(props) {


    var data = {
        labels: props.monthNotices.map((x) => x.month),
        datasets: [
          {
            label: "Number of Eviction Notices",
            data: props.monthNotices.map((x) => x.total),
            backgroundColor: [
              "#41ffca",
            ],
            borderColor: [
              "#41ffca",
            ],
            borderWidth: 1,
          },
        ],
      };
    
      var options = {
        plugins: {
          legend: {
            labels: {
              color: "rgb(255, 255, 255)",
              font: {
                weight: "bold",
                size: 12,
              },
            },
          },
        },
        scales: {
          y: {
            grid: {
              display: true,
              color: "rgba(198, 198, 198, .5)",
            },
            ticks: {
              color: "rgb(255, 255, 255)",
            },
            title: {
                display: true,
                text: '# of Eviction Notices',
              color: "rgb(255, 255, 255)",
            }
          },
          x: {
            grid: {
              display: true,
              color: "rgba(198, 198, 198, .5)",
            },
            ticks: {
              color: "rgb(255, 255, 255)",
            },
          },
        },
      };
    
      return (
        <div className="mt-4">
          {/* <h5 className="mb-2">Number of Eviction Notices</h5> */}
          <Bar data={data} height={150} width={200} options={options} />
        </div>
      );
}