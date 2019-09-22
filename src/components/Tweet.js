import React, {useState, useEffect} from 'react'
import {Card} from '@material-ui/core'
import CardHeader from "@material-ui/core/CardHeader"
import Avatar from "@material-ui/core/Avatar"

function Tweet(props) {

    const tweetClicked=()=>{
        console.log(props.tweet._id)
        props.tweetClicked(props.tweet._id)
    }
	return (
		<Card className="tweet">
			<CardHeader title={props.tweet.user.name}
									subheader="sub header"
									avatar={<Avatar aria-label="recipe">
										R
									</Avatar>}/>

			<p onClick={tweetClicked}><b>{props.tweet.text}</b></p>
		</Card>
	)
}

export default Tweet
