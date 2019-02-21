import React, { useState } from 'react';
import gql from 'graphql-tag';
import { Mutation } from 'react-apollo';
import styled from 'styled-components';

const POST_MUTATION = gql`
    mutation PostMutation($description: String!, $url: String!) {
        post(description: $description, url: $url) {
            id
            createdAt
            url
            description
        }
    }
`

const Container = styled.div`
    background: #eee;
    width: 100%;
    padding: 5px;
`

const TextField = styled.input`
    width: 50%;
    font-size: 15px;
`

const Submit = styled.button`
    margin-top: 5px;
`

export const SubmitLink = () => {
    const [link, setLink] = useState({ url: '', description: '' });

    const formSubmitHandler = (e) => {
        e.preventDefault();
    }

    const changeHandler = (e) => {
        setLink({
            ...link,
            [e.target.name]: e.target.value
        });
    }

    return (
        <Container>
            <Mutation mutation={POST_MUTATION} variables={link}>
            {postMutation => 
                <form autoComplete="off" onSubmit={formSubmitHandler}
                    onChange={changeHandler}>
                    <label htmlFor="description">Description</label><br />
                    <TextField name="description" type="text" /><br />
                    <label htmlFor="url">Link</label><br />
                    <TextField name="url" type="text" /><br />
                    <Submit onClick={postMutation}>Submit</Submit>
                </form>
            }
            </Mutation>
        </Container>
    )
};
