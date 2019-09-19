import React from 'react';
import { BrowserRouter as Router, Route, Link, Redirect } from 'react-router-dom'
import './App.css';
import Feed from './components/Feed'
import User from './components/User'
import BigTweet from './components/BigTweet'

function App() {
  return (
    <Router>
      <div className="App">
        <Route exact path="/" render={() => (<Redirect to="/feed" />)} />
        <Route path="/feed" component={Feed} />
        <Route path="/tweet/:id" render={({ match }) => <BigTweet match={match} />} />
        <Route path="/user/:id" render={({ match }) => <User match={match} />} />
      </div>
    </Router>
  );
}

export default App;
