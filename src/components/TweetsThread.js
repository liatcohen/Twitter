import React, { useState, useEffect } from 'react'
import { getTweet } from '../ApiClient'
import Tweet from './Tweet'
import BigTweet from './BigTweet'

function TweetsThread(props) {
    const [tweet, setTweet] = useState({})
    const [prev, setPrev] = useState([])
    const [next, setNext] = useState([])

    const [tweets, setTweets] = useState({ prev, next, tweet: null })




    useEffect(() => {
        async function loadTweets() {
            const tweets = await getTweet(props.match.params.id)
            setTweets(tweets)
            console.log(tweets.tweet)
        }
        loadTweets();
    }, []); // Or [] if effect doesn't need props or state


    console.log(props.match)
    return (
        <div>Tweets Thread


            {tweets.prev.map(t => <Tweet key={t._id} tweet={t} />)}
            {tweets.tweet ?
                <BigTweet tweet={tweets.tweet} />
                : null}
            {tweets.next.map(t => <Tweet key={t._id} tweet={t} />)}

        </div>
    )
}

export default TweetsThread
