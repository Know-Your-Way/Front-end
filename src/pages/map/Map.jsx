import React from "react";
import "leaflet/dist/leaflet.css";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import { Icon } from "leaflet";
import markerIconPng from "leaflet/dist/images/marker-icon.png";
import { useContext } from "react";
import { MyLocation } from "../../App";
import Filters from "../../components/Filters";
import UseGeoLocation from "./geolocation";

const Map = () => {
  const { category, currentCategory, places, input, setCurrentCategory, setInput, filterData } = useContext(MyLocation);

  const position = [50.846, 4.3518];
  const userLocation = UseGeoLocation();


  return (
    <>
      <section className="min-h-screen min-w-full leaflet-container">
        <div className="mb-10">
          <Filters category={category}
            currentCategory={currentCategory}
            filterData={filterData}
            setInput={setInput}
            setCurrentCategory={setCurrentCategory}
            places={places}
            input={input}
          />
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
            position={[userLocation.coordinates.lat, userLocation.coordinates.lng]}
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

          {Array.isArray(places)
            ? places.map((cat_name) => {
              const { lat_number, long_number, address } = cat_name.attributes;
              return (
                <Marker
                  position={[lat_number, long_number]}
                  icon={
                    new Icon({
                      iconUrl: markerIconPng,
                      iconSize: [25, 41],
                      iconAnchor: [12, 41],
                    })
                  }
                >
                  <Popup>
                    <h1>{address}</h1>
                  </Popup>
                </Marker>
              );
            })
            : null}
        </MapContainer>
      </section>
    </>
  );
};
export default Map;
