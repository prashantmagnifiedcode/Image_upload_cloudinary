import React from "react";
import { Doughnut } from "react-chartjs-2";
import { Chart, ArcElement } from "chart.js";

Chart.register(ArcElement);

const labels = [
  "section 1",
  "section 2",
  "section 3",
  "section 4",
  "section 5",
  "section 6",
];
const data = {
  labels: labels,
  datasets: [
    {
      label: "Doughnut chart",
      data: [65, 59, 83, 89, 76, 55, 40],
      backgroundColor: [
        'rgba(255, 255, 255, 0.9)'
    
      ],
     
      borderWidth: 1,
      hoverBorderWidth: 3,
      hoverBorderColor: [
        'rgba(255, 255, 255, 1)'
       
      
      ],
      hoverBackgroundColor: [
        "rgba(89, 243, 97, 0.767)",
       
      
      ],
      offset:13,
     
    },
  ],
};

const Pie = () => {
  return (
    <>
      <div
        className="rounded shadow-xl overflow-hidden w-full p-1 md:flex"
        style={{ maxWidth: "900px" }}
      >
        <div className="flex w-full md:w-1/2 px-5 pb-5 pt-8 bg-indigo-500 text-white items-center">
          <Doughnut
            data={data}
            options={{
                plugins: {
                    legend: {
                        labels: {
                           
                            color:"white"
                        }
                    }
                }
            }}
            
          />
        </div>
        <div className="flex w-full md:w-1/2 p-10 bg-gray-100 text-gray-600 items-center"></div>
      </div>
    </>
  );
};

export default Pie;
