import React from 'react';
import styled from 'styled-components';
import { Post } from './Post';

export const PostList = ({}) => {
    const posts = [
        {link: 'https://wtaylor.tech', description: "Check out my website"},
        {link: 'https://wtaylor.tech', description: "Check out MY website"}
    ]

    return (
        <div>
            {posts.map((post, i) => <Post key={i} link={post.link} description={post.description} />)}
        </div>
    )
};
