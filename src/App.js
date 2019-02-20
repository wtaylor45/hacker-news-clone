import React from 'react';
import styled from 'styled-components';
import { Header } from './presentational/Header';
import './App.css';
import { PostList } from './presentational/PostList';
import { BrowserRouter as Router, Route } from 'react-router-dom';

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
  <Router>
    <Root>
      <Container>
        <Header title="Faker News" />
        <Route exact path="/(new)?" component={PostList} />
      </Container>
    </Root>
  </Router>

export default App;
