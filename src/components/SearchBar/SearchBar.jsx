import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import getCity from '../../actions/getCity'
import styled from 'styled-components'

//Styled-components

const DivSearch = styled.div`
    width: 45%;
    display: flex;
    align-items: center;
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
                <input type="text" value={city} onChange={(e) => {handleChange(e)}}/>
                <input type="submit" />
            </form>
        </DivSearch>
    )
}