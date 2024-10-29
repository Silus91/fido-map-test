import React from 'react';

interface TableProps {
  mapData: FidoTest.MapDataItem[]
}

const Table: React.FC<TableProps> = ({ mapData }) => {

  return (
    <table>
      <thead>
        <tr>
          <th>ID</th>
          <th>Notes</th>
          <th>Engineer ID</th>
          <th>Coords [0]</th>
          <th>Coords [1]</th>
        </tr>
      </thead>
      <tbody>

      {mapData && (mapData.map((location) => (
        <tr key={location.id}>
          <td>{location.id}</td>
          <td>{location.information}</td>
          <td>{location.engineerId}</td>
          <td>{location.coords.lat}</td>
          <td>{location.coords.lng}</td>
        </tr>
      )))}
      </tbody>
    </table>
  )
}

export default Table;
