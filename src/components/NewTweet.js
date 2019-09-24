import React, { useState } from 'react'
import { TextField, Divider } from '@material-ui/core';
import styled from "styled-components"
import {postTweet} from '../ApiClient'
const NewTweetContainer = styled.div`
    color: red;
    background-color: lightgray;
    display: flex;
`
const UserImg= styled.div`
    
`
const TextContainer= styled.div`
    display: flex;
    flex-direction: column;
`
function NewTweet(props) {
    const [text, setText] = useState('')

    const postTweetClicked= async ()=>{
        await postTweet(text)
        setText('')
    }
    return (
        <NewTweetContainer>
            <UserImg>userImg</UserImg>
            <TextContainer>
            <TextField
                id="outlined-multiline-static"
                multiline
                rows="4"
                margin="normal"
                variant="outlined"
                placeholder="What's happening?"
                value={text}
                onChange={(e)=>setText(e.target.value)}
            />
            <button onClick={postTweetClicked}>Tweet</button>
            </TextContainer>
            <Divider/>
        </NewTweetContainer>
    )
}

export default NewTweet
