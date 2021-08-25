import React from 'react'
import { useDispatch } from 'react-redux';
import styled from 'styled-components'
import removeCity from '../../actions/removeCity';

//Styled-component

const Container = styled.div`
    display: flex;
    flex-direction: column;
    width: 350px;
    height: 235px;
    border: 1px lightgray solid;
    border-radius: 10px;
    box-shadow: 5px 5px 20px lightgray;
    margin: 10px;
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