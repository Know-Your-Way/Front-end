    import React, { useEffect, useState } from "react";
    import "leaflet/dist/leaflet.css";
    import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
    import { Icon } from "leaflet";
    import markerIconPng from "leaflet/dist/images/marker-icon.png";
    import axios from "axios";

    const Parking = () => {
    const [parking, setParking] = useState([]);
    console.log(parking);

    useEffect(() => {
        axios
        .get(
            "https://bruxellesdata.opendatasoft.com/api/records/1.0/search/?dataset=bruxelles_parkings_publics&q=&rows=30"
        )
        .then((res) => setParking(res.data.records));
    }, []);

    const position = [50.846, 4.3518];

    return (
        <section className="min-h-screen min-w-full leaflet-container">
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
            {parking.map((location) => {
            const {
                nom_naam,
                nombre_de_places_aantal_plaatsen,
                coordonnes_coordinaten,
            } = location.fields;
            return (
                <Marker
                position={[coordonnes_coordinaten[0], coordonnes_coordinaten[1]]}
                icon={
                    new Icon({
                    iconUrl: markerIconPng,
                    iconSize: [25, 41],
                    iconAnchor: [12, 41],
                    })
                }
                >
                <Popup>
                    {nom_naam},{nombre_de_places_aantal_plaatsen + " parking_spots"}
                </Popup>
                </Marker>
            );
            })}
        </MapContainer>
        </section>
    );
    };

    export default Parking;
