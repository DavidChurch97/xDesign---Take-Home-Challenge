import React from "react";

export default class FetchLaunch extends React.Component {
  state = {
    loading: true,
    launch: null
  };

  async componentDidMount() {
    const url = "https://api.spacexdata.com/v3/launches";
    const response = await fetch(url);
    const data = await response.json();
    this.setState({ launch: data[0], loading: false });
    console.log(data);
  }

  render() {
    if (this.state.loading) {
      return <div>loading...</div>;
    }

    if (!this.state.launch) {
        return <div>None Found</div>;
      }

    return (
      <div className="launchList">
        <div id="launchNumber">#{this.state.launch.flight_number}</div>
        <div id="launchName">{this.state.launch.mission_name}</div>
        <div id="rocketName">{this.state.launch.rocket.rocket_name}</div>
        <div id="launchYear">{this.state.launch.launch_year}</div>
      </div>
    );
  }
}