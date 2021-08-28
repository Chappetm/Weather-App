import React from 'react'
import { MapContainer, TileLayer } from 'react-leaflet'
import 'leaflet/dist/leaflet.css'
import styled from 'styled-components'

//Styled-components

const Map = styled(MapContainer)`
    width: 100%;
    height: 100%;
    padding: 0;
`;


export default function MapView(){

    return (
        <Map center={[-38.5473, -58.7368]} zoom={9}>
            <TileLayer attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors' url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"/>
        </Map>
    )
}