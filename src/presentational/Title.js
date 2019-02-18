import React from 'react';
import styled from 'styled-components';

const Text = styled.div`
    font-size: 15px;
    font-weight: 600;
`

export const Title = ({children}) => 
    <Text>
        {children}
    </Text>

