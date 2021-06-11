import React from 'react';
import ReactDOM from 'react-dom';
import BarGraph from './barGraph';
import PieChartDays from './pieChartDays';
import PieChartWeeks from './pieChartWeeks';

class Main extends React.Component {
  render() {
    return (
      <div>
        <h1 className="page-title">Sleep Tracker</h1>
        <div className="main-content">
          <BarGraph />
          <PieChartDays />
          <PieChartWeeks />
        </div>
      </div>
    );
  }
}

const app = document.getElementById('app');
ReactDOM.render(<Main />, app);