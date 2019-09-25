import React, { useState, useEffect } from 'react'
import Tweet from './Tweet'
import styled from "styled-components"
import { getTweets } from '../ApiClient'
import NewTweet from './NewTweet'

const Body = styled.div`
    width: 700px;
    border-right: 1px solid rgba(0, 0, 0, 0.1);
`

function Feed() {
    const [tweets, setTweets] = useState([])

    useEffect(() => {
        async function loadTweets() {
            const tweets = await getTweets()
            setTweets(tweets)
        }
        loadTweets();
    }, []);

    return (
        <Body>
            <NewTweet/>
            {tweets.map(t => <Tweet key={t._id} tweet={t} /> )}
        </Body>
    )
}

export default Feed
