import React, {useState, useEffect} from 'react'
import axios from 'axios'
import {AppBar, Toolbar, Container} from '@material-ui/core'
import Tweet from './Tweet'
import Drawer from "@material-ui/core/Drawer"
import List from "@material-ui/core/List"
import ListItem from "@material-ui/core/ListItem"

const url = `http://localhost:4000`

function Feed(props) {
	const [tweets, setTweets] = useState([])

	useEffect(() => {
		axios.get(`${url}/tweets`)
			.then(res => {
				console.log(res.data.tweets)
				setTweets(res.data.tweets)
			})
	}, [])

    const tweetClicked=(tweetId)=>{
        props.history.push(`tweet/${tweetId}`)
    }

    const userClicked=(userId)=>{
        props.history.push(`user/${userId}`)
	}
	return (
		<div className="feed">
			<AppBar position={"static"}>
				<Toolbar>
					Da REAL Twitter
				</Toolbar>
			</AppBar>
			<Drawer variant="permanent">
				<List>
					<ListItem >
						fooo
					</ListItem>
				</List>
			</Drawer>
			<Container>
				{tweets.map(t => <Tweet key={t._id} tweet={t}/>)}
			</Container>
		</div>
	)
}

export default Feed
