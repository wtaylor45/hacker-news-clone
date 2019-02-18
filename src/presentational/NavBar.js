import React from 'react';
import styled from 'styled-components';

const Nav = styled.nav`
    display: flex;
    flex-direction: row;
`

const NavItem = styled.a`
    text-decoration: none;
    color: black;
    padding-left: 5px;
    font-size: 15px;
`

export const NavBar = ({pages}) => 
    <Nav>
        {pages.map((page, i) => 
            <div>
                <NavItem key={i} href={page.href}>{page.name}</NavItem>
                { i === pages.length-1 ? '' : '|' }
            </div>
        )}
    </Nav>
