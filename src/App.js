import React, { Component } from 'react';
import {BrowserRouter as Router, Route,Redirect} from 'react-router-dom';
import './App.css';
import Home from './components/pages/home/home.js';
import Claimtoken from './components/pages/Claimtoken/Claimtoken.js';
import Stake from './components/pages/Stake/Stake.js';


const PrivateRoute = ({ component: Component, ...rest }) => (
	<Route {...rest} render={(props) => (
	  localStorage.getItem('ACCESS_ID') != null ? <Redirect to='/' /> : <Component {...props} />
	)} />
  )
class App extends Component {

  render() {
    return (
	<Router>
		<div>				
			<Route exact path="/" name="Home Page" component = {Home} />
			<Route exact path="/Claimtoken" name="Claimtoken Page" component = {Claimtoken} />
			<Route exact path="/Stake" name="Stake Page" component = {Stake} />
			 
			 
		</div>
	</Router>
    );
  }
}

export default App;
