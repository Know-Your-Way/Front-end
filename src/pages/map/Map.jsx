import React from 'react';
import 'leaflet/dist/leaflet.css';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import { Icon } from 'leaflet';
import markerIconPng from "leaflet/dist/images/marker-icon.png"



const Map = () => {

const position = [50.846, 4.3518]

return (
  <section className="min-h-screen min-w-full leaflet-container">
<MapContainer className="min-h-screen min-w-full"
        center={position}
        zoom={13}
        scrollWheelZoom={false}>
  <TileLayer
    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    url="https://server.arcgisonline.com/ArcGIS/rest/services/World_Topo_Map/MapServer/tile/{z}/{y}/{x}"
    //url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
  />
  <Marker position={position}
  icon={new Icon({iconUrl: markerIconPng, iconSize: [25, 41], iconAnchor: [12, 41]})}>
    <Popup>
      Grand Place <br /> The Grand-Place is the central square of the City of Brussels. All over the world it is known for its decorative and aesthetic wealth.
    </Popup>
  </Marker>
</MapContainer>
</section>
  )
}

export default Map;