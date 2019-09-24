import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Tweet from './Tweet'
import styled from "styled-components"
import { getTweets } from '../ApiClient'
import NewTweet from './NewTweet'

const Body = styled.div`
	
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
            {tweets.map(t => <Tweet key={t._id} tweet={t} />)}
        </Body>
    )
}

export default Feed
