import React from 'react'
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components'
import getDetail from '../../actions/getDetail'

//Styled-components

const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
`;

export default function Details(props){

    const dispatch = useDispatch();
    const cities = useSelector(store => store.cityDetails)

    useEffect(() => {
        dispatch(getDetail(props.match.params.id))
    })

    return (
        <Container>

        </Container>
    )
}