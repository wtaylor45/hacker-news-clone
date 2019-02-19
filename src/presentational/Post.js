import React from 'react';
import styled from 'styled-components';
import { SecondaryText } from './SecondaryText';

const Container = styled.div`
    width: 100%;
    background: #eee;
    padding: 5px;
`

const Link = styled.a`
    text-decoration: none;
    color: black;
`

export const Post = ({ordinal, link, description}) => 
    <Container>
        <SecondaryText>{ordinal}. </SecondaryText>
        <Link href={link}>
            {description}
        </Link>
    </Container>