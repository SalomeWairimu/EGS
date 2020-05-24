import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/font-awesome/css/font-awesome.min.css';

import {
  BrowserRouter as Router,
	Route,
	Switch,
  Link
} from "react-router-dom";

import Newsletter from "./components/Newsletter";
import NavBar from './components/Nav';
import About from "./components/About"


function App() {
  return (
<Router>
	<NavBar />
	<Switch>
		<Route exact path="/" component={About} />
		<Route exact path="/newsletter" component={Newsletter} />
	</Switch>
    </Router>
  );
}

export default App;
