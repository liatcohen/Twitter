import React, { useState, useEffect } from 'react'
import { Card } from '@material-ui/core'
import CardHeader from "@material-ui/core/CardHeader"
import Avatar from "@material-ui/core/Avatar"

function BigTweet(props) {


    return (
        <div className="big-tweet">
            <Card >
                <CardHeader title={props.tweet.user.name}
                    subheader="subheader"
                />
                <p><b>{props.tweet.text}</b></p>
            </Card>

        </div>

    )
}

export default BigTweet
