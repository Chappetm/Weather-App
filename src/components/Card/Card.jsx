import React from 'react'
import { useDispatch } from 'react-redux';
import styled from 'styled-components'
import removeCity from '../../actions/removeCity';

//Styled-component

const CardContainer = styled.div`
    display: flex;
    flex-direction: column;
    width: 80%;
    height: 235px;
    border: 1px lightgray solid;
    border-radius: 10px;
    box-shadow: 5px 5px 20px lightgray;
    margin: 10px 0 10px 0;
    background: linear-gradient(to bottom, #077196, #3190AB);
`;

const Container = styled.div`
    height: 100%;
    width: auto;
    padding: 10px 20px;
`;

const H1 = styled.h1`
    color: #fff;
    font-family: 'Ubuntu', sans-serif;
    font-size: 20px;
`;

const Temp = styled.h1`
    color: #fff;
    font-family: 'Ubuntu', sans-serif;
    font-size: 70px;
`;

export default function Card({name, temp, min, max, time, id}){

    const dispatch = useDispatch();

    const handleClick = (e) => {
        e.preventDefault()
        dispatch(removeCity(id))
    }

    const newTime = new Date(time * 1000)
    console.log(typeof newTime)

    return (
        <CardContainer>
            <Container>
                {/* <button onClick={(e) => {handleClick(e)}}>X</button> */}
                <H1>Tiempo en {name}</H1>
                <Temp>{`${Math.floor(temp)}°`}</Temp>
                {/* <span>{newTime}</span> */}
            </Container>
        </CardContainer>
    )
}