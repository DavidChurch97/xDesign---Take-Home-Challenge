import logo from './assets/spacex-logo.png';
import './App.css';
import React, { useState } from "react";

import refreshIcon from './assets/icon/refresh.png';
import yearSelectIcon from './assets/icon/select.png';
import sortIcon from './assets/icon/sort.png';
import bodyImage from './assets/img/launch-home.png';


function App() {
  const [launch, setLaunch] = useState("");

  const getLaunch = () => {
    fetch("https://api.spacexdata.com/v3/launches")
      .then((response) => response.json())
      .then((data) => {
        setLaunch(data.flgiht_number + "..." + data.launch);
      });
  };


  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p className="App-logo-subText">LAUNCHES</p> 

        <button className="refreshBtn">Reload Data 
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

          <div className="launchList" onLoad={getLaunch}>
            {launch}
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
