import React from 'react';
import styled from 'styled-components';
import gql from 'graphql-tag';
import { Query } from 'react-apollo';
import { Post } from './Post';

const FEED_QUERY = gql`
  {
    feed {
      links {
        id
        createdAt
        url
        description
      }
    }
  }
`

const Container = styled.div`
    width: 100%;
`

export const PostList = () => {
    return (
        <Container>
            <Query query={FEED_QUERY}>
                {({ loading, error, data }) => {
                    if (loading) return <div>Fetching</div>
                    if (error) return <div>Error</div>

                    const linksToRender = data.feed.links

                    return (
                        <div>
                            {linksToRender.map((link, i) => <Post key={link.id} ordinal={i+1} link={link.url} 
                              description={link.description} linkId={link.id} />)}
                        </div>
                    )
                }}
            </Query>
        </Container>
    )
};
