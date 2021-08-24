import React from 'react'
import SearchBar from '../SearchBar/SearchBar'
import styled from 'styled-components';

//Styled-components

const NavBar = styled.nav`
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
    background-color: #aaa;
`;

export default function Nav(){

    return (
        <NavBar>
            <div>
                <h2>Weather-App</h2>
            </div>
            <SearchBar />
        </NavBar>
    )
}