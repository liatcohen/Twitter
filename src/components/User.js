import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Tweet from './Tweet'
const url = `http://localhost:4000`

function User(props) {

    const [user, setUser] = useState(null)
    const [tweets, setTweets] = useState([])

    useEffect(() => {
        console.log(props.match.params.id)
        axios.get(`${url}/user/${props.match.params.id}`)
            .then(res => {
                console.log(res.data.user.following.length);
                setUser(res.data.user)
                setTweets(res.data.tweets)
            });
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
