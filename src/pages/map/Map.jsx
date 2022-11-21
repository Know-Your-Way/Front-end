import React, { useEffect, useState } from 'react';
import 'leaflet/dist/leaflet.css';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import { Icon } from 'leaflet';
import markerIconPng from "leaflet/dist/images/marker-icon.png"
import axios from 'axios';

const Map = () => {

  const [toilet, setToilet] = useState([])
  const [parking, setParking] = useState([])
  const [playgrounds, setPlaygrounds] = useState([])
  const [taxi, setTaxi] = useState([])
  const [pharmacy, setPharmacy] = useState([])
  const [hospital, setHospitals] = useState([])

  const fetchData = () => {
    const toiletApi = 'https://bruxellesdata.opendatasoft.com/api/records/1.0/search/?dataset=public-toilets&q=open&rows=30'
    const parkingApi = 'https://bruxellesdata.opendatasoft.com/api/records/1.0/search/?dataset=bruxelles_parkings_publics&q=&rows=30'
    const playgroundsApi = 'https://opendata.bruxelles.be/api/records/1.0/search/?dataset=playgrounds&q=&rows=30'
    const taxiApi = 'https://opendata.bruxelles.be/api/records/1.0/search/?dataset=aires-de-stationnements-taxi&q=&facet=voirie'
    const pharmacyApi = 'https://opendata.bruxelles.be/api/records/1.0/search/?dataset=pharmacies1&q=&rows=30'
    const hospitalApi = 'https://opendata.bruxelles.be/api/records/1.0/search/?dataset=pharmacies1&q=&rows=30'

    const getToilet = axios.get(toiletApi)
    const getParking = axios.get(parkingApi)
    const getPlaygrounds = axios.get(playgroundsApi)
    const getTaxi = axios.get(taxiApi)
    const getPharmacy = axios.get(pharmacyApi)
    const getHospital = axios.get(hospitalApi)

    axios.all([getToilet, getParking, getPlaygrounds, getTaxi, getPharmacy, getHospital])
      .then(axios.spread((...allData) => {
        const allDataToilet = allData[0].data.records
        const allDataParking = allData[1].data.records
        const allDataPlaygrounds = allData[2].data.records
        const allDataTaxi = allData[3].data.records
        const allDataPharmacy = allData[4].data.records
        const allDataHospital = allData[5].data.records

        setToilet(allDataToilet)
        console.log(allDataParking)
        setPlaygrounds(allDataPlaygrounds)
        setTaxi(allDataTaxi)
        setPharmacy(allDataPharmacy)
        setHospitals(allDataHospital)
      })
      )
  }

  useEffect(() => {
    fetchData()
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
export default Map