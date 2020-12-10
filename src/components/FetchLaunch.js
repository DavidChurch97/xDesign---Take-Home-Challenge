import React, { Component } from "react";

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      items: [],
      isLoaded: false,
    }
  }

  componentDidMount() {

    fetch('https://api.spacexdata.com/v3/launches')
      .then(res => res.json())
      .then(json => {
        this.setState({
          isLoaded: true,
          items: json, 
        })
      });
  }

  render() {

    var { isLoaded, items } = this.state;

    if (!isLoaded) {
      return (<div>Loading..</div>);
    }

    else {
      return (
            <div className="App">
              <ul className="launchList">
                {items.map(item => (
                  <li key={item}>
                    <p>#{item.flight_number} {item.mission_name} {item.rocket.rocket_name} {item.launch_year}</p> 
                  </li>
                ))}
              </ul>
            </div>
          );
    }

    
  };
}

export default App;
