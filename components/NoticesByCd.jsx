"use client";

import {Chart, registerables} from "chart.js";
import { useEffect, useState } from "react";
import {Bar} from "react-chartjs-2";


Chart.register(...registerables);

export default function NoticesByCd(props) {
    const [cdNotices, setCdNotices] = useState([]);
    // const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        let url = 'https://api.sheety.co/2996d79e2117ff0d746768a9b29ec03c/evictionNoticesAnalysisMonthly/noticesByCd';
        fetch(url)
        .then((response) => {
          if (!response.ok) {
            throw new Error('Network response was not ok');
          }
          return response.json();
        })
        .then((json) => {
          console.log("cd", json.noticesByCd);
          let notices = json.noticesByCd;
          setCdNotices(notices);
        //   setIsLoading(false);
        })
        .catch((error) => {
          console.error("Error:", error);
        //   setIsLoading(false);
        });
      }, []);


    var data = {
        labels: cdNotices.map((x) => x.councilDistrict),
        datasets: [
          {
            label: "Number of Eviction Notices by Council District (Feb to Aug 2023)",
            data: cdNotices.map((x) => x.number),
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