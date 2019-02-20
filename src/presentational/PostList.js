import React from 'react';
import styled from 'styled-components';
import { Post } from './Post';

const Container = styled.div`
    width: 100%;
`

export const PostList = () => {
    const posts = [
        {link: 'https://wtaylor.tech', description: "Check out my website"},
        {link: 'https://wtaylor.tech', description: "Check out MY website"}
    ]

    return (
        <Container>
            {posts.map((post, i) => <Post key={i} link={post.link} description={post.description} ordinal={i+1} />)}
        </Container>
    )
};
