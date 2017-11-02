import React from 'react'
import User from '../models/userModel'

const Header = React.createClass({
	 render: function() {
	 	return (
	 		<div className='header' >
	 			<h1>Samsung Vision</h1>
	 			<NavBar />
	 		</div>
	 	)
 	}
})

const logout = () => {
	console.log('clicked')
	User.logout()
	location.hash = 'login'
}

const NavBar = React.createClass({
	render: function() {
		return (
			<nav>
			  <div className="nav-wrapper">
			    <ul id="nav-mobile" className="right">
			      <li><a href="#home">home</a></li>
			      <li><a href="#choose-request">request report</a></li>
			      <li><a href="#my-reports">my reports</a></li>
			      <li><a onClick={User.logout} href="#">log out</a></li>
			    </ul>
			  </div>
			</nav>
			)
	}
})

export default Header
