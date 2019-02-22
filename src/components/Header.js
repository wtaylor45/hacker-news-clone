import React from 'react';
import styled from 'styled-components';
import { NavBar } from './NavBar';

const Div = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    width: 100%;
    min-height: 24px;
    background-color: #f60;

    @media only screen and (max-width: 768px) {
        flex-wrap: wrap;
    }
`

export const Header = () =>
    <Div>
        <NavBar />
    </Div>
