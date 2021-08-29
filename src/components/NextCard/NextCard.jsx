import React from 'react'
import styled from 'styled-components'

//Styled-components

const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`;

const H6 = styled.h6`
    margin: 0;
    font-family: 'Comfortaa';
`;

//-----------------------------------

export default function NextCard({ time, icon, min, max }){

    const tiempo = new Date(time * 1000)
    const week = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']
    const date = tiempo.getDate();
    const day = `${week[tiempo.getDay()]} ${date}`;

    return (
        <Container>
            <H6>{day}</H6>
            <img src={`http://openweathermap.org/img/wn/${icon}@2x.png`} width='80px' height='80px'/>
            <span>{Math.round(min)}/{Math.round(max)}</span>
        </Container>
    )
}