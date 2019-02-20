import React from 'react';
import styled from 'styled-components';
import { Header } from './presentational/Header';
import './App.css';
import { PostList } from './presentational/PostList';

const Root = styled.div`
  display: grid;
  place-content: center;
`

const Container = styled.div`
  height: 100%;
  width: 85vw;
  margin: 8px;
  display: flex;
  flex-direction: column;
  align-items: center;

  @media only screen and (max-width: 768px) {
      margin: 0px;
      width: 100vw;
  }
`

const App = () =>
  <Root>
    <Container>
      <Header title="Faker News" />
      <PostList />
    </Container>
  </Root>

export default App;
