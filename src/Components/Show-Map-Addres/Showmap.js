import React from "react";
import "./Stylemap.css";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import L from "leaflet";
import icon from "./icon-location-svg.png";
const Showmap = (props) => {
  let lat = props.lat;
  let lng = props.lng;
  const position = [lat, lng];
  let DefaultIcon = L.icon({
    iconUrl: icon,
    iconSize: [30, 35],
  });
  L.Marker.prototype.options.icon = DefaultIcon;
  return (
    <div className="map-container">
      <MapContainer center={position} zoom={9} scrollWheelZoom={true}>
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          crossOrigin
        />
        <Marker position={position}>
          <Popup>{props.city}</Popup>
        </Marker>
      </MapContainer>
    </div>
  );
};

export default Showmap;
