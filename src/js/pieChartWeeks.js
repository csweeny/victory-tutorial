import React from 'react';
import { VictoryPie } from 'victory';
import { dataWeek1, dataWeek2, dataWeek3 } from './data'

const week1_Y_axis = dataWeek1.map(item => {
    return item.hours
}).reduce((accum, val) => accum + val)

const week2_Y_axis = dataWeek2.map(item => {
    return item.hours
}).reduce((accum, val) => accum + val)

const week3_Y_axis = dataWeek3.map(item => {
    return item.hours
}).reduce((accum, val) => accum + val)

let sum_Y_axis = week1_Y_axis + week2_Y_axis + week3_Y_axis 

const sampleData = [
    {x: "Week1", y: Math.round((week1_Y_axis / sum_Y_axis) * 100)},
    {x: "Week2", y: Math.round((week2_Y_axis / sum_Y_axis) * 100)},
    {x: "Week3", y: Math.round((week3_Y_axis / sum_Y_axis) * 100)}
  ];

const PieChartWeeks = () => {
    // console.log("1: ", sampleData[0])
    // console.log("2: ", sampleData[1])
    // console.log("3: ", sampleData[2])
    // console.log("sum: ", sum_Y_axis)
    return (
        <div className="pie-chart">
            <h1>Average Weekly Sleep Tracker</h1>
            <VictoryPie
                colorScale={"green"}
                data={sampleData}
            />
       </div>
      );
}

export default PieChartWeeks;