import "./Sidebar.css";
import { useState } from "react";
import hamburger from "./hamburger.png";
import close from "./close.png"

const Sidebar = () => {
  const [hidden, setHidden] = useState(true);
  return (
    <>
      <button id="hamburger" onClick={() => setHidden(!hidden)}>
        <img id="hamburger-img" src={hamburger} />
      </button>
      <div id="sidebar" className={hidden ? "hidden" : "open"}>
        <button id="close" onClick={() => setHidden(!hidden)}><img id="close-img" src={close} /></button>
      </div>
    </>
  );
};

export default Sidebar;
