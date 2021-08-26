import React from 'react'
import { useDispatch } from 'react-redux';
import styled from 'styled-components'
import removeCity from '../../actions/removeCity';
import moment from 'moment';
import humidit from '../../media/humidity.png'
import visibilit from '../../media/witness.png'
import win from '../../media/wind.png'
import gauge from '../../media/gauge.png'

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
    overflow: hidden;
`;

const Container = styled.div`
    height: 100%;
    padding:  0 50px;
    width: auto;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    overflow: hidden;
`;

const H1 = styled.h1`
    display: flex;
    color: #fff;
    font-family: 'Comfortaa', sans-serif;
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
    padding: 0  0 0 15px;
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
    font-family: 'Comfortaa';
    color: #fff;
    &:first-letter {
        text-transform: uppercase;
}
`;

const Time = styled(Description)`
    text-align: left;
    color: #C6C6C6;
    margin: 3px;
`;

const City = styled(H1)`
    font-weight: 900;
    padding-left: 5px;
`;

const Hum = styled(Description)`
    text-align: left;
    padding: 5px;
    margin: 3px;
`;

const DivInfo = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
`;

const DivHum = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
`;

export default function Card({name, temp, min, max, time, img, description, humidity, feel, visibility, wind, pressure, id}){

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

    //Visibility
    const visibi = visibility/1000;


    return (
        <CardContainer>
            <Container>
                {/* <button onClick={(e) => {handleClick(e)}}>X</button> */}
                <DivH1>
                    <H1>Weather in <City>{name}</City></H1>
                    <Time>{currTime}</Time>
                    <Temp>{`${Math.floor(temp)}°`}</Temp>
                    <DivHum><Hum>Feels like: {Math.floor(feel)}°</Hum></DivHum>
                </DivH1>
                <DivInfo>
                    <DivHum><img src={humidit} width='20px' height='20px'/><Hum>Humidity: {humidity}%</Hum></DivHum>
                    <DivHum><img src={visibilit} width='20px' height='20px'/><Hum>Visibility: {visibi} km</Hum></DivHum>
                    <DivHum><img src={win} width='20px' height='20px'/><Hum>Wind speed: {wind} m/s</Hum></DivHum>
                    <DivHum><img src={gauge} width='20px' height='20px'/><Hum>Pressure: {pressure} hPa</Hum></DivHum>
                </DivInfo>
                <TempDiv>
                    <Description>{description}</Description>
                    <img src={`http://openweathermap.org/img/wn/${img}@2x.png`} width='100px' height='100px'/>
                    <MinMax>{Math.floor(max)}°/{Math.floor(min)}°</MinMax>
                </TempDiv>
            </Container>
        </CardContainer>
    )
}