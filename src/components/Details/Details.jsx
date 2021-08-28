import React from 'react'
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components'
import MapView from '../MapView/MapView';
import getDetail from '../../actions/getNextWeather'
import getCityById from '../../actions/getCityById';
import getNextWeather from '../../actions/getNextWeather';
import NextCard from '../NextCard/NextCard';
import moment from 'moment';
import win from '../../media/details/wind.png'
import visib from '../../media/details/witness.png'
import gauge from '../../media/details/gauge.png'
import humidi from '../../media/details/humidity.png'


//Styled-components

const Body = styled.div`
    height: auto;
    width: auto;
    padding: 80px;
    display: flex;
    flex-direction: row;
`;

const ContainerInfo = styled.div`
    display: flex;
    flex-direction: row;
    width: 100%;
    height: auto;
`;

const ContainerOne = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    width: 50%;
`;

const ContainerTwo = styled.div`
    width: auto;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 10px;
    width: 50%;
`;

const DivLocation = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    padding: 10px 30px;
`;

const H1 = styled.h1`
    margin: 0;
    font-weight: 800;
    font-family: 'Comfortaa';
`;

const Time = styled.h6`
    font-weight: 400;
    text-align: center;
    font-size: 15px;
    font-family: 'Comfortaa';
    text-align: left;
    color: #C6C6C6;
    margin: 3px;
`;

const DivTemp = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
`;

const Temp = styled.h1`
    color: black;
    font-family: 'Ubuntu', sans-serif;
    font-size: 80px;
    margin: 0;
    padding: 0  0 0 15px;
`;

const DivTempInfo = styled.div`
    display: flex;
    flex-direction: row;
    height: auto;
`;

const DivInfo = styled.div`
    display: flex;
    flex-direction: column;
    padding-left: 50px;
`;

const Description = styled.h2`
    color: black;
    margin: 0;
    font-family: 'Comfortaa';
    font-weight: 800;
    &::first-letter{
        text-transform: uppercase;
    }
`;

const Feel = styled.h4`
    margin-top: 10px;
    font-family: 'Comfortaa';
    color: #C6C6C6;
`;

const P = styled.p`
    font-family: 'Comfortaa';
    color: #C6C6C6;
    margin: 0;
    font-weight: 800;
`;

const DivGeneral = styled.div`
    display: flex;
    flex-direction: column;
`;

const DivIcons = styled.div`
    display: flex;
    flex-direction: row;
`;

const IconContainer = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    margin: 10px 20px;
    width: auto;
`;

const DivP = styled.div`
    display: flex;
    flex-direction: column;
    margin: 0 10px;
`;

const DivAux = styled.div`
    display: flex;
    flex-direction: column;
`;

const DivNextDays = styled.div`
    display: flex;
    flex-direction: row;
    border: solid 2px black;
    margin: 20px 0;
`;

const Day = styled.div`
    display: flex;
    flex-direction: column;
`;



export default function Details(props){

    const dispatch = useDispatch();
    
    useEffect(() => {
        dispatch(getCityById(props.match.params.id))
    }, [])

    //DETALLE DE LA CIUDAD
    const detail = useSelector(store => store.cityDetails)

    // useEffect(() => {
    //     dispatch(getNextWeather(detail.coord?.lat, detail.coord?.lon))
    //     console.log('effecttttttttttttt',detail.coord?.lat)
    // }, [])

    

    //DIAS QUE SIGUEN
    const nextWeather = useSelector(store => store.nextWeather)
    console.log('NEXTTTTTTTT',nextWeather.daily)

    //HORA
    const timezoneInMinutes = (detail.timezone)/ 60;
    const currTime = moment().utcOffset(timezoneInMinutes).format("h:mm A");


    return (
        <Body>
            {
                (Array.isArray(detail)) 
                ?<span>cargando...</span>
                : <ContainerInfo>
                    <ContainerOne>
                        <DivAux>
                            <DivLocation>
                                <H1>{detail.name}</H1>
                                <Time>{currTime}</Time>
                            </DivLocation>
                            <DivGeneral>
                                <DivTempInfo>
                                    <DivTemp>
                                        <img src={`http://openweathermap.org/img/wn/${detail.weather[0].icon}@2x.png`} width='130px' height='130px'/>
                                        <Temp>{`${Math.round(detail.main.temp)}°c`}</Temp>
                                    </DivTemp>
                                    <DivInfo>
                                        <Description>{detail.weather[0].description}</Description>
                                        <Feel>Feels like: {Math.round(detail.main.feels_like)}°</Feel>
                                        <P>The high will be {Math.round(detail.main.temp_max)}°. </P>
                                    </DivInfo>
                                </DivTempInfo>
                                <DivIcons>
                                    <IconContainer>
                                        <img src={win} width='30px' height='30px' />
                                        <DivP><P>Wind</P><P>{Math.round(detail.wind.speed)} m/s</P></DivP>
                                    </IconContainer>
                                    <IconContainer>
                                        <img src={visib} width='30px' height='30px' />
                                        <DivP><P>Visibility</P><P>{detail.visibility / 1000} km</P></DivP>
                                    </IconContainer>
                                    <IconContainer>
                                        <img src={gauge} width='30px' height='30px' />
                                        <DivP><P>Pressure</P><P>{detail.main.pressure} hPa</P></DivP>
                                    </IconContainer>
                                    <IconContainer>
                                        <img src={humidi} width='30px' height='30px' />
                                        <DivP><P>Humidity</P><P>{detail.main.humidity} %</P></DivP>
                                    </IconContainer>
                                </DivIcons>
                            </DivGeneral>
                        </DivAux>
                        <DivNextDays>
                            <Day>
                                <NextCard icon={nextWeather.daily[0].weather[0].icon} min={nextWeather.daily[0].temp.min} max={nextWeather.daily[0].temp.max}/>
                                <NextCard icon={nextWeather.daily[1].weather[0].icon} min={nextWeather.daily[1].temp.min} max={nextWeather.daily[1].temp.max}/>
                                <NextCard icon={nextWeather.daily[2].weather[0].icon} min={nextWeather.daily[2].temp.min} max={nextWeather.daily[2].temp.max}/>
                                <div></div>
                                <div></div>
                            </Day>
                        </DivNextDays>
                    </ContainerOne>
                    <ContainerTwo>
                        <MapView />
                    </ContainerTwo>
                </ContainerInfo>
            }
        </Body>
    )
}
