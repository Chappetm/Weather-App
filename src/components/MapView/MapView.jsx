import React from 'react'
import { MapContainer, TileLayer } from 'react-leaflet'
import 'leaflet/dist/leaflet.css'
import styled from 'styled-components'
import { useState } from 'react';
import { useEffect } from 'react';
import deleteDetail from '../../actions/deleteDetail.js'

//Styled-components

const Map = styled(MapContainer)`
    width: 100%;
    height: 100%;
    padding: 0;
`;

const Asd = styled.div`
    width: 100%;
    height: 100%;
`;

//--------------------------------------


export default function MapView({lat, lon}){

    const [view, setView ] = useState({
        lat: '',
        lon: ''
    })

    useEffect(() => {
        setView({
            lat,
            lon
        })
        return () => {
            deleteDetail(2)
            console.log('se desmonto')
        }
    }, [])

    return (
        <Asd>
            {   
                typeof view.lat === 'number'
                ?<Map center={[view.lat, view.lon]} zoom={9}>
                    <TileLayer attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors' url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"/>
                </Map>
                : <span>ads</span>
            }
        </Asd>
        
    )
}