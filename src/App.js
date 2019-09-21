import React from 'react'
import {BrowserRouter as Router, Route, Link, Redirect} from 'react-router-dom'
import './App.css'
import Feed from './components/Feed'
import User from './components/User'
import BigTweet from './components/BigTweet'
import CssBaseline from "@material-ui/core/CssBaseline"
import Body from "./Body"

function App() {
	return (
		<React.Fragment>
			<CssBaseline />
			<Router>
				<div className="App">
					<Route exact path="/" render={() => (<Redirect to="/feed"/>)}/>
					<Route path="/feed" component={Body}/>
					<Route path="/tweet/:id" render={({match}) => <BigTweet match={match}/>}/>
					<Route path="/user/:id" render={({match}) => <User match={match}/>}/>
				</div>
			</Router>
		</React.Fragment>
	)
}

export default App
