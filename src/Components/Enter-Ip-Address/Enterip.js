import "./Style-Enterip.css";

import React from "react";

const Enterip = (props) => {
  return (
    <div className="container">
      <h1>IP Address Tracker</h1>
      <form onSubmit={props.handleRequest}>
        <input
          type="text"
          name="enterip"
          className="input-ip"
          placeholder="Search for IP address or domain"
        />
        <button>
          <i className="fa-solid fa-chevron-right"></i>
        </button>
      </form>
    </div>
  );
};

export default Enterip;
