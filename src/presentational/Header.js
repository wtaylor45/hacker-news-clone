import React from 'react';
import styled from 'styled-components';
import { NavBar } from './NavBar';
import { Title } from './Title';

const Div = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    width: 100%;
    min-height: 28px;
    background-color: #f60;

    @media only screen and (max-width: 768px) {
        width: 100vw;
        flex-wrap: wrap;
    }
`

export const Header = ({title}) => {
    const pages = [
        {href: "/new", name: "new"},
        {href: "/submit", name: "submit"}
    ];

    return (
        <Div>
            <NavBar pages={pages} />
        </Div>
    )
};
