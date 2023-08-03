import "./Sidebar.css";
import { useState } from "react";
import hamburger from "./hamburger.png";
import close from "./close.png";
import { NavLink } from "react-router-dom";
import summary from "./summary.png";
import transaction from "./transaction.png";
import statistics from "./statistics.png";
import product from "./product.png";

const Sidebar = () => {
  const [hidden, setHidden] = useState(true);
  return (
    <>
      <button id="hamburger" onClick={() => setHidden(!hidden)}>
        <img id="hamburger-img" src={hamburger} />
      </button>
      <div id="sidebar" className={hidden ? "hidden" : "open"}>
        <button id="close" onClick={() => setHidden(!hidden)}>
          <img id="close-img" src={close} />
        </button>

        <NavLink to="/">
          <div className="nav-link-container">
            <img src={summary} className="sidebar-icon" />
            <p>Summary</p>
          </div>
        </NavLink>
        <NavLink to="/statistics">
          <div className="nav-link-container">
            <img src={statistics} className="sidebar-icon" />
            <p>Statistics</p>
          </div>
        </NavLink>
        <NavLink to="/transactions">
          <div className="nav-link-container">
            <img src={transaction} className="sidebar-icon" />
            <p>Transactions</p>
          </div>
        </NavLink>
        <NavLink to="/products">
          <div className="nav-link-container">
            <img src={product} className="sidebar-icon" />
            <p>Products</p>
          </div>
        </NavLink>
      </div>
    </>
  );
};

export default Sidebar;
