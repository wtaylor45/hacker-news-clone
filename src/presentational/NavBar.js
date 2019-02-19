import React from 'react';
import styled from 'styled-components';

const Nav = styled.nav`
    display: flex;
    flex-direction: row;
    width: 100%;
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

const LastLi = styled(Li)`
    margin-left: auto;
    margin-right: 5px;
`

export const NavBar = ({pages}) => 
    <Nav>
        <Li>
            <b><NavItem href="/">Faker News</NavItem></b>
        </Li>
        <Li>
            <NavItem href="/new">new</NavItem> |
        </Li>
        <Li>
            <NavItem href="/submit">submit</NavItem>
        </Li>
        <LastLi>
            <NavItem href="/login">login</NavItem>
        </LastLi>
    </Nav>
