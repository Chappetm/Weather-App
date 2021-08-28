import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'
import Cards from '../Cards/Cards'

export default function Home(){

    const [state, setState] = useState({
        lon: 0,
        lat: 0
    })

    useEffect(() => {
        navigator.geolocation.getCurrentPosition(
            function(position){
                setState({
                    lon: position.coords.longitude,
                    lat: position.coords.latitude
                })
            },
            function(error){
                console.log(error)
            },
            { enableHighAccuracy: true }
        )
    }, [])

    return (
        <Cards />
    )
}