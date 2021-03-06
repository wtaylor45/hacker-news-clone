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

const Row = styled.div`
    display: grid;
    grid-template-columns: minmax(30px, max-content) minmax(10px, max-content) auto;
    justify-items: start;
`

const Link = styled.a`
    text-decoration: none;
    color: black;
`

const Ordinal = styled.div`
    text-align: right;
    width: 100%;
`

const Vote = styled.button`
    background: none;
    border: none;
    cursor: pointer;
    padding: 3px;
`

const SubText = styled.div`
    font-size: 8px !important;
`

const Padding = styled.div`
    column-span: ${props => props.span};
`

export const Post = ({ ordinal, link, description, linkId, votes }) => {
    const authToken = localStorage.getItem('AUTH_TOKEN');

    return (
        <Container>
            <Row>
                <Ordinal><SecondaryText>{ordinal}. </SecondaryText></Ordinal>
                {authToken &&
                    <Mutation mutation={VOTE_MUTATION} variables={{ linkId }}>
                        {voteMutation =>
                            <Vote onClick={voteMutation}>
                                <SecondaryText>▲</SecondaryText>
                            </Vote>
                        }
                    </Mutation>
                }
                <Link href={link}>
                    {description}
                </Link>
            </Row>
            <Row>
                <Padding span={2}></Padding>
                <SubText><SecondaryText>{votes} points</SecondaryText></SubText>
            </Row>
        </Container>
    )
};