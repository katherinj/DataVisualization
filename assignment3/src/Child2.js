import React, { Component } from "react";
import * as d3 from "d3";

class Child2 extends Component {
  constructor(props) {
    super(props);
  }

  componentDidUpdate() {
    console.log(this.props.data2);

    var data = this.props.data2;

    var margin = { top: 50, right: 10, bottom: 30, left: 60 },
      w = 500 - margin.left - margin.right,
      h = 300 - margin.top - margin.bottom;

    var container = d3
      .select(".child2_svg")
      .attr("width", w + margin.left + margin.right)
      .attr("height", h + margin.top + margin.bottom)
      .select(".g_2")
      .attr("transform", `translate(${margin.left}, ${margin.top})`);

    var x_data = data.map((item) => item.day);
    const x_scale = d3
      .scaleBand()
      .domain(x_data)
      .range([margin.left, w])
      .padding(0.2);
    container
      .selectAll(".x_axis_g")
      .data([0])
      .join("g")
      .attr("class", "x_axis_g")
      .attr("transform", `translate(0, ${h})`)
      .call(d3.axisBottom(x_scale));

    var y_data = data.map((item) => item.avgTip);
    const y_scale = d3
      .scaleLinear()
      .domain([0, d3.max(y_data)])
      .range([h, 0]);
    container
      .selectAll(".y_axis_g")
      .data([0])
      .join("g")
      .attr("class", "x_axis_g")
      .attr("transform", `translate(${margin.left}, 0)`)
      .call(d3.axisLeft(y_scale));

    container
      .selectAll()
      .data(data)
      .join("rect")
      .attr("x", function (d) {
        return x_scale(d.day);
      })
      .attr("y", function (d) {
        return y_scale(d.avgTip);
      })
      .attr("height", (d) => y_scale(0) - y_scale(d.avgTip))
      .attr("width", x_scale.bandwidth())
      .style("fill", "#69b3a2");

    d3.select(".child2_svg")
      .selectAll(".title")
      .data([0])
      .join("text")
      .attr("class", "title")
      .attr("x", w / 2 + margin.left)
      .attr("y", margin.top / 2)
      .attr("text-anchor", "middle")
      .style("font-size", "16px")
      .style("font-weight", "bold")
      .text("Average Tip by Day");

    d3.select(".child2_svg")
      .selectAll(".x_axis_label")
      .data([0])
      .join("text")
      .attr("class", "x_axis_label")
      .attr("x", w / 2 + margin.left)
      .attr("y", h + margin.top + 30)
      .attr("text-anchor", "middle")
      .style("font-size", "12px")
      .text("Day");

    d3.select(".child2_svg")
      .selectAll(".y_axis_label")
      .data([0])
      .join("text")
      .attr("class", "y_axis_label")
      .attr("x", -h / 2 - margin.top)
      .attr("y", margin.left + 20)
      .attr("transform", "rotate(-90)")
      .attr("text-anchor", "middle")
      .style("font-size", "12px")
      .text("Average Tip");
  }
  render() {
    return (
      <svg className="child2_svg">
        <g className="g_2"></g>
      </svg>
    );
  }
}

export default Child2;
