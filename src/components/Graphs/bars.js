import React,{useState,useEffect}from 'react';

import {Chart as ChartJS,CategoryScale,LinearScale,BarElement,Title,Tooltip,Legend} from 'chart.js'

import {Bar} from 'react-chartjs-2';
ChartJS.register(
  CategoryScale,LinearScale,BarElement,Title,Tooltip,Legend
)

const Chartbared=()=> {
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
        borderColor: 'rgba(0,0,0,1)',
        borderWidth: 1,
        parsing: {
          xAxisKey:'year',
          yAxisKey: 'financial'+'.'+`${ch}`
      },
        
      }
     ]
  }
    return (
      <>
      {/* <div>
       <select  value={ch} onChange={(e)=>setch(e.target.value)}>
         <option value="cost">cost</option>
         <option value="profit">profit</option>
       </select>https://unpkg.com/chartjs-chart-geo@3.5.2/build/index.umd.min.js
      </div> */}
      <div className="containers_css p-0  h-full" >
        
        <Bar
         
         className="flex h-full w-full md:w-1/2 px-5 pb-4 pt-8 bg-white text-white items-center"
          data={state}
          
          options={{
            responsive:true,
            plugins: {
              title: {
                display: true,
                text: "Cryptocurrency prices"
              },
              legend: {
                display: true,
                position: "bottom"
             },
             tooltip:{
               yAlign:'top',
               callbacks:{
                 labelTextColor:(contexts)=>{
                   const {chart:{ctx,scales:{x,y}}}=contexts;
                   const gradient=ctx.createLinearGradient(0,0,x.getPixelForValue(0),0)
                   gradient.addColorStop(0.5,'yellow')
                   gradient.addColorStop(0.6,'blue')
                   gradient.addColorStop(0.7,'red')
                   gradient.addColorStop(0.8,'white')
                   gradient.addColorStop(1,'red')
                  
                   return gradient
                 }
               }
             }

            }
          }}
        />
      </div>
      </>
    );
  
}
export default Chartbared