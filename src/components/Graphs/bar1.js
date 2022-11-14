import React,{useState,useEffect}from 'react';
import {Chart as ChartJS,CategoryScale,LinearScale,BarElement,Title,Tooltip,Legend} from 'chart.js'
import {Bar} from 'react-chartjs-2';
ChartJS.register(
  CategoryScale,LinearScale,BarElement,Title,Tooltip,Legend
)
const Chartbared1=()=> {
  const [ch,setch]=useState('')

  const value=[
    {"year":20,"financial":{cost:5,profit:4}},
    {"year":80,"financial":{cost:45,profit:0}},
    {"year":80,"financial":{cost:45,profit:1}}, 
  ]
  
  const state = {
     labels:['m','y','f','p'],
    datasets: [
      {
        label: 'prahant',
        data:value,
        borderColor: 'rgba(255, 255, 255, 1)',
        
        fill: true,
        borderWidth: 3,
        parsing: {
          xAxisKey:'year',
          yAxisKey: 'financial'+'.'+`${ch}`
      },
      
        
      }
     ]
  }
    return (
      <>
      <div className="containers_css  p-0  bg-gray-100 shadow-indigo-500  "  >
      
      <div >
        <div className=" p-1 ">
       <select   className="rounded-lg p-2 " value={ch} onChange={(e)=>setch(e.target.value)}>
         <option value="cost">cost</option>
         <option value="profit">profit</option>
       </select>

        </div>
      </div>
      <div  >
      <Bar
         
         className="flex w-full  px-5 pb-2 pt-4 bg-gray-100  items-center rounded-r-sm"
          data={state}
          
          options={{
            responsive:true,
            
            scales: {
              yAxes: {
                  ticks: {
                      color: 'rgba(0,0,0, 1)',
                      font:{
                        size:15
                      }
                  },
                  grid: {
                    circular: true,
                    borderColor: 'rgba(0,0,0, 1)',
                    color: 'rgba(0,0,0, 1)',
                    borderDash: [5, 5]
                },
                borderWidth:4,
              
              },
      
              xAxes: {
                  ticks: {
                      color: 'rgba(0,0,0, 1)',
                      font:{
                        size:15
                      }
                  },
                  grid: {
                      circular: true,
                      borderColor: 'rgba(0,0,0, 1)',
                      color: 'rgba(0,0,0, 1)',
                      borderDash: [5, 5]
                  },
              },
          },
         
            plugins: {
              title: {
                display: true,
                text: "Cryptocurrency prices",
                color:"black",
                font:"150px",
              },
              legend: {
                display: true,
                position: "bottom",
              
                 labels: {
                     
                  font: {
                      size: 17,
                      
                  },
                  
                  color:"black"
              }
             },
             
             tooltip:{
               yAlign:'top',
              //  callbacks:{
              //    labelTextColor:(contexts)=>{
              //      const {chart:{ctx,scales:{x,y}}}=contexts;
              //      const gradient=ctx.createLinearGradient(0,0,x.getPixelForValue(0),0)
              //      gradient.addColorStop(0.5,'yellow')
              //      gradient.addColorStop(0.6,'blue')
              //      gradient.addColorStop(0.7,'red')
              //      gradient.addColorStop(0.8,'white')
              //      gradient.addColorStop(1,'red')
                  
              //      return gradient
              //    }
              //  }
             }

            }
          }}
        />
      </div>
        
        
      </div>
      </>
    );
  
}
export default Chartbared1