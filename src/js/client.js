import React from 'react';
import ReactDOM from 'react-dom';
import { VictoryBar, VictoryChart, VictoryAxis, VictoryTheme, VictoryStack } from 'victory';

const dataWeek1 = [
  {day: 1, hours: 8},
  {day: 2, hours: 5},
  {day: 3, hours: 7},
  {day: 4, hours: 9},
  {day: 5, hours: 8},
  {day: 6, hours: 6},
  {day: 7, hours: 8}
];

const dataWeek2 = [
  {day: 1, hours: 2},
  {day: 2, hours: 4},
  {day: 3, hours: 6},
  {day: 4, hours: 8},
  {day: 5, hours: 6},
  {day: 6, hours: 6},
  {day: 7, hours: 8}
];

const dataWeek3 = [
  {day: 1, hours: 5},
  {day: 2, hours: 6},
  {day: 3, hours: 7},
  {day: 4, hours: 8},
  {day: 5, hours: 8},
  {day: 6, hours: 7},
  {day: 7, hours: 6}
];

class Main extends React.Component {
  render() {
    return (
      <div>
        <h1>Sleep Tracker</h1>
        <VictoryChart
          theme={VictoryTheme.material}
          domainPadding={20}
        >
          <VictoryAxis 
            tickValues={[1, 2, 3, 4, 5, 6, 7]}
            tickFormat={["Sun", "Mon", "Tues", "Wed", "Thurs", "Fri", "Sat"]}
          />
          <VictoryAxis 
            dependentAxis
            tickFormat={(x) => (`${x}`)}
          />
          <VictoryStack
            colorScale={"warm"}
          >
            <VictoryBar 
              data={dataWeek1}
              x="day"
              y="hours"
            />
            <VictoryBar 
              data={dataWeek2}
              x="day"
              y="hours"
            />
            <VictoryBar 
              data={dataWeek3}
              x="day"
              y="hours"
            />
          </VictoryStack>
        </VictoryChart>
      </div>
    );
  }
}

const app = document.getElementById('app');
ReactDOM.render(<Main />, app);