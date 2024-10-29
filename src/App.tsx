import React from 'react';
import MapComponent from "./components/MapComponent";
import Table from "./components/Table";
import mapdata from "./data.json";

import "./App.css";

const App: React.FC = () => (
  <div className='Container'>
    <h1>Map</h1>
    <MapComponent mapData={mapdata.mapData} />
  </div>
)

export default App;
