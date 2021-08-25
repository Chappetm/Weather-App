import React from 'react'
import { useDispatch } from 'react-redux';
import styled from 'styled-components'
import removeCity from '../../actions/removeCity';
import moment from 'moment';

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
    padding: 10px 40px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
`;

const H1 = styled.h1`
    display: flex;
    color: #fff;
    font-family: 'Ubuntu', sans-serif;
    font-size: 20px;
    font-weight: 400;
    margin: 0;
    width: auto;
`;

const Temp = styled.h1`
    color: #fff;
    font-family: 'Ubuntu', sans-serif;
    font-size: 80px;
    margin: 0;
`;

const MinMax = styled.h3`
    margin: 0;
    color: #fff;
    text-align: center;
    font-size: 30px;
    font-weight: 400;
`;

const TempDiv = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
`;

const DivH1 = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
`;

const Description = styled.h6`
    margin: 0;
    font-weight: 400;
    text-align: center;
    font-size: 15px;
    color: #fff;
    &:first-letter {
        text-transform: uppercase;
}
`;

const Time = styled(Description)`
    text-align: left;
    color: #DADADA;
`;

const City = styled(H1)`
    font-weight: 800;
    padding-left: 5px;
`;


export default function Card({name, temp, min, max, time, img, description, id}){

    const dispatch = useDispatch();

    const handleClick = (e) => {
        e.preventDefault()
        dispatch(removeCity(id))
    }
    
    //AMANECER
    // var sec = 1425909686;
    // var date = new Date(sec * 1000);
    // var timestr = date.toLocaleTimeString();
    // console.log(newTime.toString())

    //HORA
    const timezoneInMinutes = time / 60;
    const currTime = moment().utcOffset(timezoneInMinutes).format("h:mm A");


    return (
        <CardContainer>
            <Container>
                {/* <button onClick={(e) => {handleClick(e)}}>X</button> */}
                <DivH1>
                    <H1>Weather in <City>{name}</City></H1>
                    <Time>{currTime}</Time>
                    <Temp>{`${Math.floor(temp)}°`}</Temp>
                </DivH1>
                <TempDiv>
                    <Description>{description}</Description>
                    <img src={`http://openweathermap.org/img/wn/${img}@2x.png`}/>
                    <MinMax>{Math.floor(max)}°/{Math.floor(min)}°</MinMax>
                </TempDiv>
                {/* <span>{newTime}</span> */}
            </Container>
        </CardContainer>
    )
}