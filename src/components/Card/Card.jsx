import React from 'react'
import { useDispatch } from 'react-redux';
import styled from 'styled-components'
import removeCity from '../../actions/removeCity';

//Styled-component

const Container = styled.div`
    border: dotted;
`;

export default function Card({name, min, max, id}){

    const dispatch = useDispatch();

    const handleClick = (e) => {
        e.preventDefault()
        dispatch(removeCity(id))
    }


    return (
        <Container>
            <button onClick={(e) => {handleClick(e)}}>X</button>
            <h1>{name}</h1>
            <p>MIN: {min}</p>
            <p>MAX: {max}</p>
        </Container>
    )
}