import React, {useState, useEffect} from 'react'
import {Card} from '@material-ui/core'
import CardHeader from "@material-ui/core/CardHeader"
import Avatar from "@material-ui/core/Avatar"

function Tweet(props) {
	return (
		<Card className="tweet">
			<CardHeader title={props.tweet.user.name}
									subheader="lasdasd"
									avatar={<Avatar aria-label="recipe">
										R
									</Avatar>}/>

			<p><b>{props.tweet.text}</b></p>
		</Card>
	)
}

export default Tweet
