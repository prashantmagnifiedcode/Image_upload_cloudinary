import React ,{useState} from "react";
import Card from "../Card/card";
import StatisCard from "../Card/Statistic";
import Barcharted from "../Graphs/bars";
import Barcharted1 from "../Graphs/bar1";
import StockChart from "../Graphs/bar2";
import Pies from "../Graphs/pie";
import ControlledAccordions from './Alertpage'
import MapChart from "../Graphs/map";
import PaymentList from "../Payment/PaymentList";
import { Reorder } from "framer-motion/dist/framer-motion"
import Header from "../Dashboard/Header/Header.jsx";
import Head_Wrap from '../Dashboard/Head_wrap'
const HomeDashboardComponent = () => {
  const [items, setItems] = useState([1,2,3,4,5])
  const data = {
    stockFullName: "SW Limited.",
    stockShortName: "ASX:SFW",
    price: {
      current: 2.32,
      open: 2.23,
      low: 2.215,
      high: 2.325,
      cap: 93765011,
      ratio: 20.1,
      dividend: 1.67,
    },
    chartData: {
      labels: [
        "10:00",
        "",
        "",
        "",
        "12:00",
        "",
        "",
        "",
        "2:00",
        "",
        "",
        "",
        "4:00",
      ],
      data: [
        2.23, 2.215, 2.22, 2.25, 2.245, 2.27, 2.28, 2.29, 2.3, 2.29, 2.325,
        2.325, 2.32,
      ],
    },
  };
  return (
    <>
     
       <Head_Wrap>   
    <div className="w-full h-screen  grid grid-row-3 gap-2">
      <div className="grid md:grid-cols-2 lg:grid-cols-3  sm:grid-cols-1 gap-2">
        {/* <div >
      <Card />
          </div>
  <div>

      <StatisCard />
  </div> */}

      {/* <MapChart /> */}
      {/* <div>

      <Barcharted1 />
      </div> */}
      {/*<Barcharted1 /> */}
      <div>

      <StockChart info={data} />
      </div>
      <div>

      <StockChart info={data} />
      </div>
      <div>

      <StockChart info={data} />
      </div>
      
<div>
      <Pies />

</div>
<div>
      
      <Barcharted1 />

</div>
<Reorder.Group axis="y" values={items} onReorder={setItems}>
      
{items.map((item) => (
        <Reorder.Item key={item} value={item}>
          {item}
        </Reorder.Item>
      ))}
      
    </Reorder.Group>
      
      
      </div>
      <div >

      <ControlledAccordions/>
        </div>
      {/* <div className="grid">
      
      <PaymentList />
     

      </div> */}
    </div>
    </Head_Wrap>
    </>
  );
};
export default HomeDashboardComponent;
