import React, { useState, useEffect } from 'react'
import { getTweet } from '../ApiClient'
import Tweet from './Tweet'
import BigTweet from './BigTweet'

function TweetsThread(props) {
    const [tweet, setTweet] = useState({})
    const [prev, setPrev] = useState([])
    const [next, setNext] = useState([])

    const [tweets, setTweets] = useState({ prev, next, tweet: null })


    const tweetClicked = (tweetId) => {
        props.history.push(`tweet/${tweetId}`)
    }

    useEffect(() => {
        async function loadTweets() {
            const tweets = await getTweet(props.match.params.id)
            setTweets(tweets)
            console.log(tweets.tweet)
        }
        loadTweets();
    }, [props.match.params.id]);

    console.log(props.match)
    return (
        <div>Tweets Thread
            <div>
                {tweets.prev.map(t => <Tweet key={t._id} tweet={t} tweetClicked={tweetClicked} />)}
                {tweets.tweet ?
                    <BigTweet tweet={tweets.tweet} />
                    : null}
                {tweets.next.map(t => <Tweet key={t._id} tweet={t} tweetClicked={tweetClicked} />)}

            </div>

        </div>
    )
}

export default TweetsThread
