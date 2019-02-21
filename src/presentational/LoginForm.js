import React, { useState } from 'react';
// import styled from 'styled-components';
import gql from 'graphql-tag';
import { Mutation } from 'react-apollo';

const LOGIN_MUTATION = gql`
    mutation LoginMutation($email: String!, $password: String!) {
        login(email: $email, password: $password) {
            token
        }
    }
`

export const LoginForm = () => {
    const [credentials, setCredentials] = useState({email: '', password: ''});

    const changeHandler = (e) => {
        setCredentials({
            ...credentials,
            [e.target.name]: e.target.value
        });
    }

    const submitHandler = (e) => e.preventDefault();

    const loginCompletedHandler = async data => {
        localStorage.setItem('AUTH_TOKEN', data.login.token)
    }

    return (
        <form onChange={changeHandler} onSubmit={submitHandler}>
            <label htmlFor="email">Username</label><br/>
            <input name="email" type="text" /><br/>
            <label htmlFor="password">Password</label><br/>
            <input name="password" type="password" /><br/>
            <Mutation mutation={LOGIN_MUTATION} variables={credentials} onCompleted={loginCompletedHandler}>
                {loginMutation => 
                    <button type="submit" onClick={loginMutation}>Submit</button>
                }
            </Mutation>
        </form>
    )
};
