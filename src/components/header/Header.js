import React, { useState } from "react";
import "./header.css";
import { logDOM } from "@testing-library/react";

const Header = () => {
  const [dis, setDis] = useState("flex");
    const handleToggle=()=>{
    console.log("changinng",dis);
     
    setDis((prev) => (prev === "flex" ? "none" : "flex"));  }
  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
      <div className="container-fluid">
        <a className="navbar-brand" href="#">
          Brainwave.io
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarText"
          aria-controls="navbarText"
          aria-expanded="false"
          aria-label="Toggle navigation"
          onClick={handleToggle}
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className={`collapse navbar-collapse `}  style={{ display: dis }} id="navbarText">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0" >
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="#">
                Demos
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link active" href="#">
                Pages
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link active" href="#">
                Support
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link active" href="#">
                Contact
              </a>
            </li>
          </ul>
          <button className="nav-btn">Get started a project</button>
        </div>
      </div>
    </nav>
  );
};

export default Header;
