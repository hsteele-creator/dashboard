import React from "react";
import Sidebar from "./Sidebar";
import "./Statistics.css";
import { useSelector } from "react-redux";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Tooltip,
  Legend,
  ArcElement,
} from "chart.js";
import { Bar, Pie, Line } from "react-chartjs-2";

ChartJS.register(CategoryScale, LinearScale, BarElement, Tooltip, Legend);
ChartJS.register(ArcElement, Tooltip, Legend);
ChartJS.register(ArcElement, Tooltip, Legend);

const Statistics = () => {
  const data = useSelector((state) => state.Products);
  const chartData = {
    labels: data.map((product) => product.name),
    datasets: [
      {
        label: "Sales (Dollars)",
        data: data.map((product) => product.sales),
        backgroundColor: "#005BEB",
        title: "Price",
        borderRadius: 3,
        categoryPercentage: 0.75,
        responsive: true,
      },
    ],
  };

  const pieChartData = {
    labels: data.map((product) => product.name),
    datasets: [
      {
        data: data.map((product) => product.sales),
        backgroundColor: ["03045e", "023e8a", "0077b6", "0096c7", "c00b4d8", "48cae4", "90e0ef", "2b2d42"],
      },
    ],
  };

  const options = {};
  return (
    <>
      <div id="statistics-main">
        <Sidebar />
        <div id="charts-container">
        <div id="bar-chart-container">
          <Bar data={chartData} />
        </div>
        <div id="pie-chart-container">
          <Pie data={pieChartData} options={options} />
          <p>Sales (Dollars) By Product</p>
          {/* <Line data={pieChartData} /> */}
        </div>
        </div>
      </div>
    </>
  );
};

export default Statistics;
