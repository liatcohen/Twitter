import React, { useState, useEffect } from 'react'

function Tweet(props) {

    return (
        <div className="tweet"> 
            <p>{props.tweet.user.name}</p>
            <p><b>{props.tweet.text}</b></p>
        </div>
    );
}

export default Tweet;
