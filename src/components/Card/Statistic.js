import * as React from "react";

import Card from "@mui/material/Card";
import MonetizationOnIcon from '@mui/icons-material/MonetizationOn';
import TrendingDownIcon from '@mui/icons-material/TrendingDown';
import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';
import "./card.css"
const StatisCard = () => {
  return (
    <Card
    className="containers_css md:p-4 " 
    >
      <div 
      
      className="flex md:justify-between w-full   uppercase  sm:justify-center "
    >
        <p className="text-bold ">Statistics</p>
  
      </div>
      <div className="grid h-full md:grid-cols-2 lg:grid-cols-3 md:gap-4  sm:grid-cols-1    " >
        {/* //first part */}
     
        <div className=" flex d-inline-flex  items-center uppercase">
          <div><Stack direction="row" spacing={5}><Avatar  sx={{ width: 80, height: 80 ,background:"#e7e5e4"}}><MonetizationOnIcon style={{color:"#6666FF","font-size":"80px"}} /></Avatar></Stack>  </div>
           <div className="flex flex-col pl-3 font-serif">
               <h3>234</h3>
               <h6>Sale</h6>
           </div>
        </div>
        <div className=" flex d-inline-flex  items-center uppercase">
          <div><Stack direction="row" spacing={5}><Avatar  sx={{ width: 80, height: 80 ,background:"#e7e5e4"}}><MonetizationOnIcon style={{color:"#6666FF","font-size":"80px"}} /></Avatar></Stack>  </div>
           <div className="flex flex-col pl-3 font-serif">
               <h3>234</h3>
               <h6>Profit</h6>
           </div>
        </div>
        <div className=" flex d-inline-flex  items-center uppercase">
          <div><Stack direction="row" spacing={5}><Avatar  sx={{ width: 80, height: 80,background:"#e7e5e4" }}><TrendingDownIcon style={{color:"#6666FF","font-size":"50px"}} /></Avatar></Stack>  </div>
           <div className="flex flex-col pl-3 font-serif">
               <h3>234</h3>
               <h6>Low</h6>
           </div>
        </div>
     

     


      </div>
    </Card>
  );
};
export default StatisCard;
