import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const Nav = styled.nav`
    display: flex;
    flex-direction: row;
    width: 100%;
`

const Li = styled.li`
    display: inline-block;  
    height: 100%;
`

const NavItem = styled(Link)`
    text-decoration: none;
    color: black;
    padding-left: 5px;
    font-size: 15px;
`

const LastLi = styled(Li)`
    margin-left: auto;
    margin-right: 5px;
`

export const NavBar = () => 
    <Nav>
        <Li>
            <b><NavItem to="/">Faker News</NavItem></b>
        </Li>
        <Li>
            <NavItem to="/new">new</NavItem> |
        </Li>
        <Li>
            <NavItem to="/submit">submit</NavItem>
        </Li>
        <LastLi>
            <NavItem to="/login">login</NavItem>
        </LastLi>
    </Nav>
