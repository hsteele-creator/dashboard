import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Sidebar from "./Components/Sidebar";
import Products from "./Components/Products"
import Summary from "./Components/Summary"
import Statistics from "./Components/Statistics"
import Transactions from "./Components/Transactions"


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>

      <Routes>
        <Route path="/" element={<Summary />} />
        <Route path="/Products" element={<Products />} />
        <Route path="/Statistics" element={<Statistics />} />
        <Route path="/Transactions" element={<Transactions />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
