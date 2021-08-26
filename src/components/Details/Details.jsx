import React from 'react'
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components'
import getDetail from '../../actions/getDetail'
import getCityById from '../../actions/getCityById';
import moment from 'moment';
import win from '../../media/wind.png'
import visib from '../../media/witness.png'

//Styled-components

const Body = styled.div`
    height: 100%;
    width: 100%;
    padding: 80px;
`;

const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: flex-start;
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
    background-color: blue;
`;

const IconContainer = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
`;

const DivP = styled.div`
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

    //HORA
    const timezoneInMinutes = (detail.timezone)/ 60;
    const currTime = moment().utcOffset(timezoneInMinutes).format("h:mm A");


    return (
        <Body>
            {
                (Array.isArray(detail)) 
                ?<span>cargando...</span>
                :<Container>
                    <DivLocation>
                        <H1>{detail.name}</H1>
                        <Time>{currTime}</Time>
                    </DivLocation>
                    <DivGeneral>
                        <DivTempInfo>
                            <DivTemp>
                                <img src={`http://openweathermap.org/img/wn/${detail.weather[0].icon}@2x.png`} width='100px' height='100px'/>
                                <Temp>{`${Math.round(detail.main.temp)}°`}</Temp>
                            </DivTemp>
                            <DivInfo>
                                <Description>{detail.weather[0].description}</Description>
                                <Feel>Feels like: {Math.round(detail.main.feels_like)}°</Feel>
                                <P>The high will be {Math.round(detail.main.temp_max)}°. </P>
                            </DivInfo>
                        </DivTempInfo>
                        <DivIcons>
                            <IconContainer>
                                <img src={win} width='20px' height='20px' />
                                <DivP><P>Wind</P><P>{Math.round(detail.wind.speed)} m/s</P></DivP>
                            </IconContainer>
                            <IconContainer>
                                <img src={visib} width='20px' height='20px' />
                                <DivP><P>Visibility</P><P>{Math.round(detail.wind.speed)} m/s</P></DivP>
                            </IconContainer>
                            <IconContainer>
                                <img src={win} width='20px' height='20px' />
                                <DivP><P>Wind</P><P>{Math.round(detail.wind.speed)} m/s</P></DivP>
                            </IconContainer>
                        </DivIcons>
                    </DivGeneral>
                    
                </Container>
            }
        </Body>
    )
}
