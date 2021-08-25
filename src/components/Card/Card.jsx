import React from 'react'
import styled from 'styled-components'

//Styled-component

const Container = styled.div`
    border: dotted;
`;

export default function Card({name, min, max}){

    return (
        <Container>
            <h1>{name}</h1>
            <p>{min}</p>
            <p>{max}</p>
        </Container>
    )
}