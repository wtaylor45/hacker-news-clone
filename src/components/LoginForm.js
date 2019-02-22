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

const SIGNUP_MUTATION = gql`
    mutation SignUp($email: String!, $password: String!, $name: String!) {
        signup(email: $email, password: $password, name: $name) {
            token
        }
    }
`

export const LoginForm = ({history}) => {
    const [credentials, setCredentials] = useState({ email: '', password: '', name: '' });
    const [isLogin , setIsLogin] = useState(true);

    const changeHandler = (e) => {
        setCredentials({
            ...credentials,
            [e.target.name]: e.target.value
        });
    }

    const submitHandler = (e) => e.preventDefault();

    const loginCompletedHandler = async data => {
        let { token } = isLogin ? data.login : data.signup;
        localStorage.setItem('AUTH_TOKEN', token);
        history.push('/');
    }

    return (
        <div>
            <button onClick={() => setIsLogin(!isLogin)}>
                {isLogin ? 'I Don\'t Have an Account' : 'I Already Have An Account'}
            </button>
            <form onChange={changeHandler} onSubmit={submitHandler}>
                {!isLogin && 
                    <>
                        <label htmlFor="name">Name</label><br/>
                        <input name="name" type="text" /><br/>
                    </>
                }
                <label htmlFor="email">Email</label><br/>
                <input name="email" type="text" /><br/>
                <label htmlFor="password">Password</label><br/>
                <input name="password" type="password" /><br/>
                <Mutation mutation={isLogin? LOGIN_MUTATION : SIGNUP_MUTATION} variables={credentials} onCompleted={loginCompletedHandler}>
                    {loginMutation => 
                        <button type="submit" onClick={loginMutation}>Submit</button>
                    }
                </Mutation>
            </form>
        </div>
    )
};
