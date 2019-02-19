import React from 'react';
import styled from 'styled-components';

const Span = styled.span`
    color: gray;
`

export const SecondaryText = ({children}) => 
    <Span>{children}</Span>
