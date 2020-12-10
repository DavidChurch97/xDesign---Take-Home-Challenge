import logo from './assets/spacex-logo.png';
import './App.css';
import React, { useState } from "react";
import FetchLaunch from "./components/FetchLaunch.js";
import refreshIcon from './assets/icon/refresh.png';
import yearSelectIcon from './assets/icon/select.png';
import sortIcon from './assets/icon/sort.png';
import bodyImage from './assets/img/launch-home.png';


function App() {
    return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p className="App-logo-subText">LAUNCHES</p> 

        <button className="refreshBtn" onClick={() => window.location.reload(false)}>Reload Data 
        <img src={refreshIcon} className="refreshBtn-Icon" alt="refreshIcon" />
        </button> 
      </header>

      <div className="container">
        <img src={bodyImage} className="bodyImage" alt="bodyImage" />

        <div className="data">
          <button className="yearFilter">Filter By Year
            <img src={yearSelectIcon} className="yearSelectIcon" alt="refreshIcon" />
          </button>

          <button className="sortList">Sort Descending
            <img src={sortIcon} className="sortIcon" alt="refreshIcon" />
          </button>

          <FetchLaunch />
        </div>
      </div>
    </div>
  );
}

export default App;
