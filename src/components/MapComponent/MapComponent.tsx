import React, { useState } from 'react'
import Map, { Marker, Popup } from 'react-map-gl'
import 'mapbox-gl/dist/mapbox-gl.css'
import './MapComponent.css'

interface MapComponentProps {
  mapData: FidoTest.MapDataItem[]
}

const MapComponent: React.FC<MapComponentProps> = ({ mapData }) => {
  const [selectedLocation, setSelectedLocation] = useState<FidoTest.MapDataItem | null>(null)

  const accessToken = 'pk.eyJ1IjoiZXdvbmctZmlkbyIsImEiOiJjbTJkMmkyc2sxMzUwMmpxeGI2dDdndHN6In0.O2rAz61j2wq0fYrWU-2ULA';

  const initialView = {
    longitude: -1.1567,
    latitude: 51.9209,
    zoom: 18
  }

  return (
    <div className='MapContainer'>
      <h2>Map</h2>
      <Map
        initialViewState={initialView}
        style={{ width: '100%', height: '700px' }}
        mapStyle='mapbox://styles/mapbox/streets-v11'
        mapboxAccessToken={accessToken}
      >
        {mapData.map((location) => (
          <Marker
            key={location.id}
            longitude={location.coords.lng}
            latitude={location.coords.lat}
            anchor='bottom'
            onClick={(e) => {
              e.originalEvent.stopPropagation()
              setSelectedLocation(location)
            }}
          >
          <div className={`Marker Engineer-${location.engineerId}`} />
        </Marker>
        ))}
        {selectedLocation && (
          <Popup
            longitude={selectedLocation.coords.lng}
            latitude={selectedLocation.coords.lat}
            onClose={() => setSelectedLocation(null)}
            anchor='top'
          >
            <div>
              <h5 className='Header'>Engineer ID: {selectedLocation.engineerId}</h5>
              <h5 className='Header'>Status: {selectedLocation.status}</h5>
              <p className='Paragraph'>{selectedLocation.information}</p>
              <p className='Paragraph'>
                <strong>Start:</strong> {selectedLocation.startDate}
              </p>
              <p className='Paragraph'>
                <strong>End:</strong> {selectedLocation.endDate}
              </p>
            </div>
          </Popup>
        )}
      </Map>
    </div>
  )
}

export default MapComponent