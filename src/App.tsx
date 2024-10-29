import React from 'react';
import MapComponent from "./components/MapComponent/MapComponent";
import Table from "./components/Table/Table";
import mapdata from "./data.json";

import "./App.css";

const App: React.FC = () => (
  <div className='Container'>
    <MapComponent mapData={mapdata.mapData} />
    <Table mapData={mapdata.mapData} />
  </div>
)

export default App;
