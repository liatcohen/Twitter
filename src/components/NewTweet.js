import React, { useState } from 'react'
import { TextField } from '@material-ui/core';
import styled from "styled-components"
import { postTweet } from '../ApiClient'
import Avatar from "@material-ui/core/Avatar"
import Button from '@material-ui/core/Button';

const NewTweetContainer = styled.div`
    
    display: flex;
`
const TweetButton = styled(Button)`
    background-color:#42a5f5;
    color: white;
    font-weight: 700;
    width: 100px;
    align-self: flex-end;
`
const UserImage = styled(Avatar)`
    margin-top: 15px;
    margin-left:5px;
  width: 50px;
  height: 50px;
`
const Input = styled.textarea`
    background-color: transparent;
    width: 550px ;
    height: 100px;
    font-size: 18px;
    border: none;
    margin:10px;
    margin-top:18px;
`
const Divider1 = styled.hr`
    
    border: 6px solid #dadfe3;
`
//   textarea:focus {
//     outline: none;
//   }
const TextContainer = styled.div`
    display: flex;
    flex-direction: column;
`
function NewTweet(props) {
    const [text, setText] = useState('')

    const postTweetClicked = async () => {
        await postTweet(text)
        setText('')
    }
    return (
        <div>
        <NewTweetContainer>
            <UserImage src=
            "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80"
            ></UserImage>
            <TextContainer>
                <Input
                    rows="4"
                    placeholder="What's happening?"
                    value={text}
                    onChange={(e) => setText(e.target.value)} />
                <TweetButton onClick={postTweetClicked} variant="contained" color="default">
                    Tweet
                </TweetButton>

            </TextContainer>

        </NewTweetContainer>
                    <Divider1 />
</div>
    )
}

export default NewTweet
