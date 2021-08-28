import React from 'react'
import styled from 'styled-components'

//Styled-components

const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`;

export default function NextCard({icon, min, max}){

    return (
        <Container>
            <h6>mañana</h6>
            <img src={`http://openweathermap.org/img/wn/${icon}@2x.png`} width='80px' height='80px'/>
            <span>{Math.round(min)}/{Math.round(max)}</span>
        </Container>
    )
}