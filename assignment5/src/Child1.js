import React, { Component } from "react";
import * as d3 from "d3";
import "./Child1.css";

class Child1 extends Component {
  state = {
    company: "Apple", // Default Company
    selectedMonth: "November", //Default Month
  };

  componentDidMount() {
    console.log(this.props.csv_data); // Use this data as default. When the user will upload data this props will provide you the updated data
    this.renderChart();
  }

  renderChart = () => {
    // legend
    var legendKeys = { Open: "#b2df8a", Close: "#e41a1c" };
    const data = [
      { date: "2023-02-02", temperature: 2 },
      { date: "2023-02-03", temperature: 12 },
      { date: "2023-02-04", temperature: 10 },
      { date: "2023-02-05", temperature: 6 },
      { date: "2023-02-06", temperature: 18 },
      { date: "2023-02-07", temperature: 15 },
      { date: "2023-02-08", temperature: 22 },
      { date: "2023-02-09", temperature: 16 },
      { date: "2023-02-10", temperature: 26 },
    ];

    // Parse the date string into JavaScript Date objects
    const parseDate = d3.timeParse("%Y-%m-%d");
    data.forEach((d) => (d.date = parseDate(d.date)));

    // Set the dimensions of the chart
    const margin = { top: 20, right: 30, bottom: 40, left: 40 },
      width = 500,
      height = 300,
      innerWidth = 500 - margin.left - margin.right,
      innerHeight = 300 - margin.top - margin.bottom;

    // Remove any existing SVG content
    d3.select("#line-chart").selectAll("*").remove();
    // Create the SVG container
    const svg = d3
      .select("#line-chart")
      .attr("width", width)
      .attr("height", height)
      .append("g")
      .attr("transform", `translate(${margin.left},${margin.top})`);

    // Set the scales for the axes
    const xScale = d3
      .scaleTime()
      .domain(d3.extent(data, (d) => d.date))
      .range([0, innerWidth]);

    const yScale = d3
      .scaleLinear()
      .domain([0, d3.max(data, (d) => d.temperature)])
      .range([innerHeight, 0]);

    const lineGenerator = d3
      .line()
      .x((d) => xScale(parseDate(d.date))) // Use the date as the x-coordinate
      .y((d) => yScale(d.temperature)); // Use temperature as the y-coordinate;

    var pathData = lineGenerator(data);

    svg
      .selectAll("path")
      .data(pathData)
      .join("path")
      .attr("d", (d) => d)
      .attr("fill", "none")
      .attr("stroke", "blue")
      .attr("stroke-width", 2);

    svg
      .selectAll(".x.axis")
      .data([null])
      .join("g")
      .attr("class", "x axis")
      .attr("transform", `translate(0,${innerHeight})`)
      .call(d3.axisBottom(xScale));
    svg
      .selectAll(".y.axis")
      .data([null])
      .join("g")
      .attr("class", "y axis")
      .call(d3.axisLeft(yScale));

    const legendG = svg
      .selectAll(".legend")
      .data(["#test1", "test2"])
      .enter()
      .append("g")
      .attr("transform", function (d, i) {
        return "translate(" + (width - 110) + "," + (i * 15 + 20) + ")"; // place each legend on the right and bump each one down 15 pixels
      })
      .attr("class", "legend");

    legendG
      .append("rect") // make a matching color rect
      .attr("width", 10)
      .attr("height", 10)
      .attr("fill", (d) => d[1]);

    legendG
      .append("text")
      .attr("x", 15)
      .attr("y", 10)
      .text((d) => "test"); // Use label from legendKeys
  };

  componentDidUpdate() {
    console.log(this.props.csv_data);
  }

  render() {
    const options = ["Apple", "Microsoft", "Amazon", "Google", "Meta"]; // Use this data to create radio button
    const months = [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
    ]; // Use this data to create dropdown

    return (
      <div className="child1">
        <section className="option-radio-buttons">
          <p>Companies: </p>
          {options.map((option) => (
            <div className="option-button">
              <input
                type="radio"
                name={option}
                id={option}
                value={option}
              ></input>
              <label htmlFor={option}>{option}</label>
            </div>
          ))}
        </section>
        <section className="months-dropdown">
          <p>Months: </p>
          <select name="months" id="months">
            {months.map((month) => (
              <option value={month}>{month}</option>
            ))}
          </select>
        </section>

        <section className="graph">
          <svg id="line-chart" width="700" height="400">
            <g></g>
          </svg>
        </section>
      </div>
    );
  }
}

export default Child1;
