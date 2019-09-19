import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Tweet from './Tweet'
const url = `http://localhost:4000`

function Feed() {

    const [tweets, setTweets] = useState([])

    useEffect(() => {
        axios.get(`${url}/tweets`)
        .then(res => {
            console.log(res.data.tweets);
            setTweets(res.data.tweets)
        });
    }, [])

    return (
        <div className="feed">
            Feed
            {tweets.map(t=> <Tweet key={t._id} tweet={t}/>)}
        </div>
    );
}

export default Feed;
