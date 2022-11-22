import React, { useEffect, useState } from 'react';
import 'leaflet/dist/leaflet.css';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import { Icon } from 'leaflet';
import markerIconPng from "leaflet/dist/images/marker-icon.png"
import axios from 'axios';
import Fetch_Api from '../../api/Fetch_Api';

Fetch_Api()

const Map = () => {
  const [toilet, setToilet] = useState([])

  useEffect(() => {
    axios.get('https://bruxellesdata.opendatasoft.com/api/records/1.0/search/?dataset=public-toilets&q=open&rows=30')
      .then(res => setToilet(res.data.records))
  }, [])


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
        />
        {
          toilet.map(location => {
            const { wgs84_lat, wgs84_long, adrvoisfr } = location.fields
            return (
              <Marker position={[wgs84_lat, wgs84_long]}
                icon={new Icon({ iconUrl: markerIconPng, iconSize: [25, 41], iconAnchor: [12, 41] })}>
                <Popup>
                  {adrvoisfr}
                </Popup>
              </Marker>
            )
          })
        }
      </MapContainer>
    </section>
  )
}

export default Map;