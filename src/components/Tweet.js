import React, { useState, useEffect } from 'react'

function Tweet(props) {

    return (
        <div className="tweet">Tweet: 
            {props.tweet.text}
        </div>
    );
}

export default Tweet;
