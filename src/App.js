import React from 'react';
import styled from 'styled-components';
import { Header } from './components/Header';
import './App.css';
import { PostList } from './components/PostList';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { SubmitLink } from './components/SubmitLink';
import { LoginForm } from './components/LoginForm';

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
        <Route exact path="/submit" component={SubmitLink} />
        <Route exact path="/login" component={LoginForm} />
      </Container>
    </Root>
  </Router>

export default App;
