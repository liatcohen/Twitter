import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Tweet from './Tweet'
import { getUserTweets } from '../ApiClient'
const url = `http://localhost:4000`

function User(props) {

    const [user, setUser] = useState(null)
    const [tweets, setTweets] = useState([])

    useEffect(() => {
        async function loadProfile() {
            const res = await getUserTweets(props.match.params.id)
            setUser(res.user)
            setTweets(res.tweets)
        }
        loadProfile()
    }, [])

    return (
        <div className="user">
            {user ?
                <div className="user-info">
                    user name: {user.name}
                    <p>Following: {user.following.length}</p>
                </div>
                : null}
            {tweets.map(t => (
                <Tweet key={t._id} tweet={t} />
            ))}
        </div>
    );
}

export default User;
