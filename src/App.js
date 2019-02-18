import React from 'react';
import styled from 'styled-components';
import { Header } from './presentational/Header';
import './App.css';

const Container = styled.div`
  height: 100%;
  margin: 8px;
  display: flex;
  justify-content: center;

  @media only screen and (max-width: 768px) {
      margin: 0px;
  }
`

const App = () =>
  <Container>
    <Header title="Faker News" />
  </Container>

export default App;
