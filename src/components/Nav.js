import React from 'react';
import { NavLink } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';

export default class NavBar extends React.Component {
	render() {
		return (
			<Navbar expand="sm">
				<Navbar.Brand href="/">EGS</Navbar.Brand>
				<Navbar.Toggle aria-controls="basic-navbar-nav" className="bg-light w-25"/>
				<Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
					<a class="nav-link" href="/">Home <span class="sr-only">(current)</span></a>
					<a class="nav-link" href="/newsletter">Newsletter</a>
					<a class="nav-link" href="/resources">Resources</a>
				</Navbar.Collapse>
			</Navbar>
		);
	}
}