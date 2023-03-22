import React, { Component } from "react";
import "./App.css";
import Enterip from "./Components/Enter-Ip-Address/Enterip";
import Showip from "./Components/Show-Ip-Address/Showip";
import Showmap from "./Components/Show-Map-Addres/Showmap";

class App extends Component {
  state = {
    ip: "",
    country: "",
    city: "",
    asn: "",
    timezone: "",
    isp: "",
    lat: "",
    lng: "",
    done: false,
  };
  handleRequest = async (e) => {
    let api_key = "at_XNIxxOEjLiLeD7CT6utgzYWADFCpu";
    let ip = e.target.childNodes[0].value;
    e.preventDefault();
    let getReq = await fetch(
      `https://geo.ipify.org/api/v2/country,city?apiKey=${api_key}&ipAddress=${ip}`
    );
    let data = await getReq.json();
    this.setState({
      ip: data.ip,
      country: data.location.country,
      city: `${data.location.region},`,
      asn: data.as.asn,
      timezone: data.location.timezone,
      isp: data.isp,
      lat: data.location.lat,
      lng: data.location.lng,
      done: true,
    });
    e.target.childNodes[0].value = "";
  };
  rendermain() {
    return (
      <div className="App">
        <Enterip handleRequest={this.handleRequest} />
        <Showip
          ip={this.state.ip}
          country={this.state.country}
          city={this.state.city}
          asn={this.state.asn}
          timezone={this.state.timezone}
          isp={this.state.isp}
        />
      </div>
    );
  }
  rendermap() {
    return (
      <div className="App">
        <Enterip handleRequest={this.handleRequest} />
        <Showip
          ip={this.state.ip}
          country={this.state.country}
          city={this.state.city}
          asn={this.state.asn}
          timezone={this.state.timezone}
          isp={this.state.isp}
        />
        <Showmap
          lat={this.state.lat}
          lng={this.state.lng}
          city={this.state.city}
        />
      </div>
    );
  }
  render() {
    let done = this.state.done;
    if (!done) {
      return this.rendermain();
    } else {
      return this.rendermap();
    }
  }
}

export default App;
