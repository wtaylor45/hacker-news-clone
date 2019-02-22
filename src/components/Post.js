import React from 'react';
import styled from 'styled-components';
import { SecondaryText } from './SecondaryText';
import gql from 'graphql-tag';
import { Mutation } from 'react-apollo';

const VOTE_MUTATION = gql`
    mutation VoteMutation($linkId: ID!) {
        vote(linkId: $linkId) {
            link {
                id
            }
        }
    }
`

const Container = styled.div`
    width: 100%;
    background: #eee;
    padding: 5px;
`

const Link = styled.a`
    text-decoration: none;
    color: black;
`

const Vote = styled.button`
    background: none;
    border: none;
    cursor: pointer;
`

export const Post = ({ ordinal, link, description, linkId }) => {
    const authToken = localStorage.getItem('AUTH_TOKEN');

    return (
        <Container>
            <SecondaryText>{ordinal}. </SecondaryText>
            { authToken &&
                <SecondaryText>
                    <Mutation mutation={VOTE_MUTATION} variables={{linkId}}>
                        {voteMutation => <Vote onClick={voteMutation}>▲</Vote>}
                    </Mutation>
                </SecondaryText>
            }
            <Link href={link}>
                {description}
            </Link>
        </Container>
    )
};