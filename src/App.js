import React from 'react';
import { MapContainer, TileLayer, Marker, ZoomControl } from 'react-leaflet';

import 'leaflet/dist/leaflet.css';
import 'leaflet-defaulticon-compatibility/dist/leaflet-defaulticon-compatibility.webpack.css';
import * as L from 'leaflet';
import 'leaflet-defaulticon-compatibility';

import './style.css';

const App = () => {
  const position = [-6.3287489245344855, 107.29173155128922];

  return (
    <MapContainer
      center={position}
      zoom={13}
      style={{ height: '100vh', width: '100vw' }}
      zoomControl={false}
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <ZoomControl position="bottomright" />
      <Marker position={position}></Marker>
    </MapContainer>
  );
};

export default App;
