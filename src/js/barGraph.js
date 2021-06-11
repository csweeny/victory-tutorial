import React from 'react';
import { VictoryBar, VictoryChart, VictoryAxis, VictoryTheme, VictoryStack } from 'victory';
import { dataWeek1, dataWeek2, dataWeek3 } from './data'

const BarGraph = () => {
    return (
      <div className="bar-graph">
        <h1>Weeks 1 - 3 Daily Sleep Tracker</h1>
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
            tickFormat={(x) => (`${x} hrs`)}
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

export default BarGraph;