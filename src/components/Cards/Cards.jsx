import React from 'react'
import Card from '../Card/Card'
import styled from 'styled-components'
import { useSelector } from 'react-redux'

//Styled-components

const Container = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-around
`;

export default function Cards(){
    
    const cities = useSelector(store => store.citiesLoaded)

    return (
        <Container>
            {
                cities.length
                ? cities.map(city => <Card 
                    name={city.name}
                    max={city.main.temp_max}
                    min={city.main.temp_min}
                />)
                : <span>No hay ciudades</span>
            }
        </Container>
        
    )
}