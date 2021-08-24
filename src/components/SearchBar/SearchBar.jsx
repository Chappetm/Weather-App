import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import getCity from '../../actions/getCity'

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
        <div>
            <form onSubmit={(e) => {handleSubmit(e)}}>
                <input type="text" value={city} onChange={(e) => {handleChange(e)}}/>
                <input type="submit" />
            </form>
        </div>
    )
}