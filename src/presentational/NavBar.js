import React from 'react';
import styled from 'styled-components';

const Nav = styled.nav`
    /* display: flex;
    flex-direction: row; */
`

const Li = styled.li`
    display: inline-block;  
    height: 100%;
`

const NavItem = styled.a`
    text-decoration: none;
    color: black;
    padding-left: 5px;
    font-size: 15px;
`

export const NavBar = ({pages}) => 
    <Nav>
        <Li>
            <b><NavItem href="/">Faker news</NavItem></b>
        </Li>
        <Li>
            <NavItem href="/new">new</NavItem> |
        </Li>
        <Li>
            <NavItem href="/submit">submit</NavItem>
        </Li>
    </Nav>
