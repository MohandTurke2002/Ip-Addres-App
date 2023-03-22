import "./Style-Showip.css";

import React from "react";

const Showip = (props) => {
  return (
    <div className="container-info">
      <div className="div ip">
        <p>ip address</p>
        <h3>{props.ip}</h3>
      </div>
      <div className="div loc">
        <p>location</p>
        <h3>
          {props.city} {props.country} {props.asn}
        </h3>
      </div>
      <div className="div zone">
        <p>timezone</p>
        <h3>{props.timezone}</h3>
      </div>
      <div className="div isp">
        <p>isp</p>
        <h3>{props.isp}</h3>
      </div>
    </div>
  );
};

export default Showip;
