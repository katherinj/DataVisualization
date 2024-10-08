import React, { Component } from "react";
import "./App.css";
import Child1 from "./Child1";
import Child2 from "./Child2";
import * as d3 from "d3";
import tips from "./tips.csv";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { data1: [], data2: [] };
  }
  componentDidMount() {
    var self = this;
    d3.csv(tips, function (d) {
      return {
        tip: parseFloat(d.tip),
        total_bill: parseFloat(d.total_bill),
        day: d.day,
      };
    })
      .then(function (csv_data) {
        const avgTipsPerDay = self.calcAvgTipsPerDay(csv_data);
        self.setState({ data1: csv_data, data2: avgTipsPerDay });
      })
      .catch(function (err) {
        console.log(err);
      });
  }

  calcAvgTipsPerDay(data) {
    const days = d3.group(data, (d) => d.day);

    const avgTipsPerDay = Array.from(days, ([day, values]) => {
      const totalTips = d3.sum(values, (d) => d.tip);
      const avgTip = totalTips / values.length;
      return { day, avgTip };
    });

    return avgTipsPerDay;
  }

  render() {
    return (
      <main className="parent">
        <div className="child1">
          <Child1 data1={this.state.data1}></Child1>
        </div>
        <div className="child2">
          <Child2 data2={this.state.data2}></Child2>
        </div>
      </main>
    );
  }
}

export default App;
