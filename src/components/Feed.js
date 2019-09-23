import React, {useState, useEffect} from 'react'
import axios from 'axios'
import Tweet from './Tweet'
import styled from "styled-components"

const url = `http://localhost:4000`

const Body = styled.div`
	width: 60%;
	margin: auto;
`

function Feed() {
    const [tweets, setTweets] = useState([])

    useEffect(() => {
        axios.get(`${url}/tweets`)
            .then(res => {
                console.log(res.data.tweets)
                setTweets(res.data.tweets)
            })
    }, [])

    return (
        <Body>
        {tweets.map(t => <Tweet key={t._id} tweet={t}/>)}
        </Body>
    )
}

export default Feed
