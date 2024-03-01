import React, { useState } from 'react';
import './Card.css'
import { motion } from 'framer-motion';
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import {UilTimes} from '@iconscout/react-unicons'
import Chart from 'react-apexcharts'

const Card = (props) => {
  const [expanded, setExpanded] = useState(false);

  return (
    <motion.div layout>
      {expanded ? (
        <motion.div layout key="expanded">
          <ExpandedCard param={props} setExpanded={()=>setExpanded(false)}/>
        </motion.div>
      ) : (
        <CompactCard param={props} setExpanded={() => setExpanded(true)} />
      )}
    </motion.div>
  );
};

       //  CompactCard //
function CompactCard({ param,setExpanded }) {
  return (
    <motion.div layout className="CompactCard"
    style={{
      background : param.color.backGround,
      boxShadow : param.color.boxShadow
    }}
    onClick={setExpanded}
    // layoutId='expandableCard'
    >
    {/* onClick={onClick} */}
      <motion.div layout className="radialBar">
        <CircularProgressbar
        value={param.barvalue}
        text={`${param.barvalue} %`} />
        <span>{param.title}</span>
      </motion.div>
      <motion.div layout className="detail">
        <span>${param.value}</span>
        <span>Last 24 hours</span>
      </motion.div>
    </motion.div>
  );
}


///Expanded Card///
function ExpandedCard({param,setExpanded}){
  const data = {
    options: {
      chart: {
        type: "area",
        height: "auto",
      },

      dropShadow: {
        enabled: false,
        enabledOnSeries: undefined,
        top: 0,
        left: 0,
        blur: 3,
        color: "#000",
        opacity: 0.35,
      },

      fill: {
        colors: ["#fff"],
        type: "gradient",
      },
      dataLabels: {
        enabled: false,
      },
      stroke: {
        curve: "smooth",
        colors: ["white"],
      },
      tooltip: {
        x: {
          format: "dd/MM/yy HH:mm",
        },
      },
      grid: {
        show: true,
      },
      xaxis: {
        type: "datetime",
        categories: [
          "2018-09-19T00:00:00.000Z",
          "2018-09-19T01:30:00.000Z",
          "2018-09-19T02:30:00.000Z",
          "2018-09-19T03:30:00.000Z",
          "2018-09-19T04:30:00.000Z",
          "2018-09-19T05:30:00.000Z",
          "2018-09-19T06:30:00.000Z",
        ],
      },
    },
  };

  return(
    <motion.div className='ExpandedCard'
    
      style={{
        background:param.color.backGround,
        boxShadow:param.color.boxShadow
      }}
      // layoutId='expandableCard'
    >
      <motion.div style={{alignSelf:'flex-end',cursor:'pointer',color:'white'}}>
        <UilTimes onClick={setExpanded} />
      </motion.div>
      <span>{param.title}</span>
      <div className='ChartContainer'>
        <Chart  series={param.series} type='area' options={data.options} />
      </div>
      <span>Last 24 hours</span>

    </motion.div>
  )
}

export default Card;
