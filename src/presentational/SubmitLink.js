import React, { useState } from 'react';
import styled from 'styled-components';

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
    const [link, setLink] = useState({href: '', description: ''});

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
            <form autoComplete="off" onSubmit={formSubmitHandler} onChange={changeHandler}>
                <label htmlFor="description">Description</label><br/>
                <TextField name="description" type="text" /><br/>
                <label htmlFor="href">Link</label><br/>
                <TextField name="href" type="text" /><br/>
                <Submit type="submit">Submit</Submit><br/>
            </form>
        </Container>
    )
};
