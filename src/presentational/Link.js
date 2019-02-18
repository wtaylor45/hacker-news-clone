import React from 'react';
import styled from 'styled-components';

export const Link = ({href, description}) => 
    <div>
        <a href={href}>{description}</a>
    </div>

