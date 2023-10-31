import React from "react";
import { MapContainer, TileLayer } from "react-leaflet";
import "leaflet/dist/leaflet.css";

import "./styles.css";
import LeafletControlGeocoder from "./LeafletControlGeocoder";

export default function App() {
  const position = [41.8781, -87.6298];

  return (
   <div className="map-container">
    <MapContainer center={position} zoom={5} style={{ height: "100vh" }}>
      <TileLayer
        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
      <LeafletControlGeocoder />
    </MapContainer>
   </div>
  );
}
