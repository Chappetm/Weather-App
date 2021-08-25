import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import getCity from '../../actions/getCity'
import styled from 'styled-components'
import lupa from '../../media/lupa.png'

//Styled-components

const DivSearch = styled.div`
    position: relative;
    width: 35%;
    display: flex;
`;

const Input = styled.input`
    background-color: rgba(255,255,255,0.2);
    width: 100%;
    outline: none;
    padding: 12px 40px 9px 40px;
    border: 0;
    border-radius: 20px;
    text-align: center;
    align-items: center;
    color: white;
    font-size: 1em;
    font-family: 'Rubik', sans-serif;
    &::placeholder{
        color: white;
        font-size: 1em;
        font-family: 'Rubik', sans-serif;
    }
`;

const DivInput = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
`;

const Ico = styled.img`
    position: absolute;
    right: 10px;
`;

export default function SearchBar(){
    const [ city, setCity ] = useState('')

    const dispatch = useDispatch()

    const handleChange = (e) => {
        setCity(e.target.value)
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        dispatch(getCity(city))
        setCity('')
    }

    return (
        <DivSearch>
            <form onSubmit={(e) => {handleSubmit(e)}}>
                <DivInput>
                    <Input id='search' placeholder="Search city" type="text" value={city} onChange={(e) => {handleChange(e)}}/>
                    <Ico src={lupa} width='20px' height='20px' />
                </DivInput>
            </form>
        </DivSearch>
    )
}