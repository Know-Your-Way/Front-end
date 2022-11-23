import React, { useEffect, useState } from "react";
import "leaflet/dist/leaflet.css";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import { Icon } from "leaflet";
import markerIconPng from "leaflet/dist/images/marker-icon.png";
import axios from "axios";
import Fetch_Api from "../../api/Fetch_Api";
import UseGeoLocation from "./geolocation";

Fetch_Api();

const Map = () => {
  const [toilet, setToilet] = useState([]);

  useEffect(() => {
    axios
      .get(
        "https://bruxellesdata.opendatasoft.com/api/records/1.0/search/?dataset=public-toilets&q=open&rows=30"
      )
      .then((res) => setToilet(res.data.records));
  }, []);

  const position = [50.846, 4.3518];
  const location2 = UseGeoLocation();
  return (
    <section className="min-h-screen min-w-full leaflet-container">
      <div className="aspect-w-16 aspect-h-9">
        {location2.loaded
          ? JSON.stringify(location2)
          : "location data not available yet"}
      </div>
      <MapContainer
        className="min-h-screen min-w-full"
        center={position}
        zoom={13}
        scrollWheelZoom={false}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://server.arcgisonline.com/ArcGIS/rest/services/World_Topo_Map/MapServer/tile/{z}/{y}/{x}"
        />
        {/* this code helps to show the current location of the user */}
        <Marker
          position={[location2.coordinates.lat, location2.coordinates.lng]}
          icon={
            new Icon({
              iconUrl: markerIconPng,
              iconSize: [25, 41],
              iconAnchor: [12, 41],
            })
          }
        >
          <Popup>i am here</Popup>
        </Marker>

        {/* the code ends here */}
        {toilet.map((location) => {
          const { wgs84_lat, wgs84_long, adrvoisfr } = location.fields;
          return (
            <Marker
              position={[wgs84_lat, wgs84_long]}
              icon={
                new Icon({
                  iconUrl: markerIconPng,
                  iconSize: [25, 41],
                  iconAnchor: [12, 41],
                })
              }
            >
              <Popup>{adrvoisfr}</Popup>
            </Marker>
          );
        })}
      </MapContainer>
    </section>
  );
};

export default Map;
