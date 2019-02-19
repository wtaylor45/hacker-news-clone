import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
    height: 10vh;
    min-height: 36px;
    background: #988;
    border-top: solid black 1px;
    border-bottom: solid black 1px;
`

export const Post = ({link, description}) => 
    <div>
        <a href={link}>
            {description}
        </a>
    </div>