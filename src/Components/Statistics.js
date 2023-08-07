import React, { useState } from "react";
import Sidebar from "./Sidebar";
import "./Statistics.css";
import BarChart from "./BarChart";
import { useSelector } from "react-redux";
import LineChart from "./LineChart";
import PieChart from "./PieChart"

const Statistics = () => {
  const chartData = useSelector((state) => state.ChartData);
  const barChartData = {
    labels: chartData.map((item) => item.year),
    datasets: [
      {
        label: "Sales By Year (dollars)",
        data: chartData.map((item) => item.sales),
        backgroundColor: [
          "#155263",
          "#ff6f3c",
          "#ff9a3c",
          "#ffc93c",
          "#00bbf0",
        ],
        borderColor: "black",
        borderWidth: 2,
      },
    ],
  };

  const lineChartData = {
    labels: chartData.map((item) => item.year),
    datasets: [
      {
        label: "Customers Gained By Year",
        data: chartData.map((item) => item.customersGained),
        backgroundColor: [
          "#155263",
          "#ff6f3c",
          "#ff9a3c",
          "#ffc93c",
          "#00bbf0",
        ],
        borderColor: "black",
        borderWidth: 2,
      },
    ],
  };

  const pieChartData = {
    labels: chartData.map((item) => item.year),
    datasets: [
      {
        label: "Customers Lost By Year",
        data: chartData.map((item) => item.customersLost),
        backgroundColor: [
          "#155263",
          "#ff6f3c",
          "#ff9a3c",
          "#ffc93c",
          "#00bbf0",
        ],
        borderColor: "black",
        borderWidth: 2,
      },
    ],
  };



  return (
    <div id="statistics-main">
      <Sidebar />

      <div id="charts-container">
        <div id="barchart-container">
          <BarChart chartData={barChartData} />

          <div id="other-charts-container">

            <div id="line-chart-container">
            <LineChart chartData={lineChartData} />
            </div>


            <div id="pie-chart-container">
            <PieChart chartData={pieChartData} />
            </div>

          </div>
        </div>
      </div>
    </div>
  );
};

export default Statistics;
