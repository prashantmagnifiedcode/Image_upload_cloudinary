import React from "react";

import { Radar } from "react-chartjs-2";
import { Chart} from "chart.js";





const data = {
    labels: [
      "Eating",
      "Drinking",
      "Sleeping",
      "Designing",
      "Coding",
      "Cycling",
      "Running"
    ],
    datasets: [
      {
        label: "My First dataset",
        backgroundColor: "rgba(220,220,220,0.2)",
        pointBackgroundColor: "rgba(220,220,220,1)",
        data: [65, 59, 90, 81, 56, 55, 40],
      }, {
        label: 'Hidden dataset',
        hidden: true,
        data: [
         
        ]
      }, {
        label: "My Second dataset",
        backgroundColor: "rgba(151,187,205,0.2)",
        pointBackgroundColor: "rgba(151,187,205,1)",
        hoverPointBackgroundColor: "#fff",
        pointHighlightStroke: "rgba(151,187,205,1)",
        data: [65, 59, 90, 81, 56, 55, 40],
      }
    ]
  }
  
//   const options = {
//     legend: {
//       position: 'top'
//     },
//     title: {
//       display: true,
//       text: 'Chart.js Radar Chart'
//     },
//     scale: {
//       reverse: false,
//       gridLines: {
//         color: [
//           'black',
//           'red',
//           'orange',
//           'yellow',
//           'green',
//           'blue',
//           'indigo',
//           'violet'
//         ]
//       },
//       ticks: {
//         beginAtZero: true
//       }
//     }
//   }

const Radared = () => {
  return (
    <>
      <div
        className="rounded shadow-xl overflow-hidden w-full p-1 md:flex"
        style={{ maxWidth: "900px" }}
      >
        <div className="flex w-full md:w-1/2 px-5 pb-5 pt-8 bg-indigo-500 text-white items-center">
        <Radar data={data} />
        </div>
        <div className="flex w-full md:w-1/2 p-10 bg-gray-100 text-gray-600 items-center"></div>
      </div>
    </>
  );
};

export default Radared;
