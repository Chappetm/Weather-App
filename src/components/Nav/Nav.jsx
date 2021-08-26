import React from 'react'
import SearchBar from '../SearchBar/SearchBar'
import styled from 'styled-components';
import clima from '../../media/clima.png'
import { Link } from 'react-router-dom';

//Styled-components

const NavBar = styled.header`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    background-color: #046F94;
    height: 10%;
`;

const DivH2 = styled.div`
    width:30%;
    text-align:center;
    display: flex;
    flex-direction: row;
    align-items: center;
`;

const H2 = styled(Link)`
    color: white;
    font-family: 'Comfortaa';
    font-size: 1.7em;
    font-weight: 600;
    padding: 10px;
    text-decoration: none;
`;

const DivSearch = styled.div`
    width: 45%;
`;

export default function Nav(){

    return (
        <NavBar>
            <DivH2>
                <img src={clima} width='40px' height='40px' />
                <H2 to='/'>Weather-App</H2>
            </DivH2>
            <DivSearch>
                <SearchBar />
            </DivSearch>
        </NavBar>
    )
}