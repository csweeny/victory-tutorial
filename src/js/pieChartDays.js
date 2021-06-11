import React from 'react';
import { VictoryPie } from 'victory';
import { dataWeek1 } from './data'

const sumHours = dataWeek1.map(item => {
  return item.hours
}).reduce((accum, val) => accum + val)

let one = Math.round((dataWeek1[0].hours / sumHours) * 100)
let two = Math.round((dataWeek1[1].hours / sumHours) * 100)
let three = Math.round((dataWeek1[2].hours / sumHours) * 100)
let four = Math.round((dataWeek1[3].hours / sumHours) * 100)
let five = Math.round((dataWeek1[4].hours / sumHours) * 100)
let six = Math.round((dataWeek1[5].hours / sumHours) * 100)
let seven = Math.round((dataWeek1[6].hours / sumHours) * 100)

const sampleData = [
    {x: "Mon", y: one},
    {x: "Tues", y: two},
    {x: "Wed", y: three},
    {x: "Thurs", y: four},
    {x: "Fri", y: five},
    {x: "Sat", y: six},
    {x: "Sun", y: seven}
  ];

const PieChartDays = () => {
  console.log(one)
  console.log(two)
  console.log(three)
  console.log(four)
  console.log(five)
  console.log(six)
  console.log(seven)
    return (
        <div className="pie-chart">
          <h1>Daily Sleep Tracker</h1>
          <VictoryPie
            colorScale={"cool"}
            data={sampleData}
          />
       </div>
      );
}

export default PieChartDays;