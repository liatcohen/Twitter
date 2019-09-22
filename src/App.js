import React from 'react'
import { BrowserRouter as Router, Route, Link, Redirect } from 'react-router-dom'
import './App.css'
import Feed from './components/Feed'
import User from './components/User'
import TweetsThread from './components/TweetsThread'
import CssBaseline from "@material-ui/core/CssBaseline"
import Body from "./Body"
import Login from './components/Authentication/Login'
import NewTweet from './components/NewTweet';

function App() {

	
	return (
		<React.Fragment>
			<CssBaseline />
			<Router>
				<div className="App">
					<Route exact path="/" render={() => (<Redirect to="/feed"/>)}/>
					<Route path="/feed" component={Feed} />
					<Route path="/login" component={Login} />
					<Route path="/tweet/:id" render={({ match }) => <TweetsThread match={match} />} />
					<Route path="/user/:id" render={({ match }) => <User match={match} />} />
					<Route path="/newTweet" component={NewTweet} />

				</div>
			</Router>
		</React.Fragment>
	)
}

export default App
