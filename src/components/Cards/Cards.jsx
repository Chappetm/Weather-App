import React from 'react'
import Card from '../Card/Card'
import styled from 'styled-components'
import { useSelector } from 'react-redux'

//Styled-components

const Container = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
`;

export default function Cards(){
    
    const cities = useSelector(store => store.citiesLoaded)

    return (
        <Container>
            {
                cities.length
                ? cities.map(city => <Card 
                    name={city.name}
                    temp={city.main.temp}
                    max={city.main.temp_max}
                    min={city.main.temp_min}
                    id={city.id}
                    time={city.timezone}
                />)
                : <span>No hay ciudades</span>
            }
        </Container>
        
    )
}