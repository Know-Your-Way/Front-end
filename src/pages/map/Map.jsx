import React from "react";
import "leaflet/dist/leaflet.css";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import { Icon } from "leaflet";
import markerIconPng from "leaflet/dist/images/marker-icon.png";
import hospitalIcon from "../../icons/hospital-icon.png"
import  toiletsIcon from "../../icons/toilet-icon.png"
import restaurantIcon from "../../icons/restaurant-icon.png"
import taxiIcon from "../../icons/taxi-icon.png"
import PharmacyIcon from "../../icons/pharmacy-icon.png"
import hotelIcon from "../../icons/hotel-icon.png"
import parkingIcon from "../../icons/parking-icon.png"
import { useContext } from "react";
import { MyLocation } from "../../App";
import Filters from "../../components/Filters";
import UseGeoLocation from "./geolocation";

const Map = () => {
  const {
    category,
    currentCategory,
    places,
    input,
    setCurrentCategory,
    setInput,
    filterData,
  } = useContext(MyLocation);
  console.log(category);
  const position = [50.846, 4.3518];
  const userLocation = UseGeoLocation();

  const getIcon = () => {
    console.log(currentCategory);
    switch (currentCategory) {
      case "toilet":
        return new Icon({
          iconUrl: toiletsIcon,
          iconSize: [25, 41],
          iconAnchor: [12, 41],
        });
      case "parking":
        return new Icon({
          iconUrl: parkingIcon,
          iconSize: [25, 41],
          iconAnchor: [12, 41],
        });
      case "pharmacy":
        return new Icon({
          iconUrl: PharmacyIcon,
          iconSize: [25, 41],
          iconAnchor: [12, 41],
        });
      case "hotel":
        return new Icon({
          iconUrl: hotelIcon,
          iconSize: [25, 41],
          iconAnchor: [12, 41],
        });
      case "restaurant":
        return new Icon({
          iconUrl: restaurantIcon,
          iconSize: [25, 41],
          iconAnchor: [12, 41],
        });
      case "hospital":
        return new Icon({
          iconUrl: hospitalIcon,
          iconSize: [25, 41],
          iconAnchor: [12, 41],
        });
      case "taxi":
        return new Icon({
          iconUrl: taxiIcon,
          iconSize: [25, 41],
          iconAnchor: [12, 41],
        });

      default:
        return new Icon({
          iconUrl: markerIconPng,
          iconSize: [25, 41],
          iconAnchor: [12, 41],
        });
    }
  };

  return (
    <>
      <section className="min-h-screen min-w-full leaflet-container">
        <div className="mb-10">
          <Filters
            category={category}
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
            position={[
              userLocation.coordinates.lat,
              userLocation.coordinates.lng,
            ]}
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
                const { lat_number, long_number, address } =
                  cat_name.attributes;
                console.log(lat_number);
                return (
                  <Marker position={[lat_number, long_number]} icon={getIcon()}>
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
