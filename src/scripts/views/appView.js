import React from 'react'
import LoginPage from './loginPage.js'
import HomePage from './homePage.js'
import RequestPage from './requestReport.js'
import ChooseRequestPage from './chooseRequestPage.js'
import MyReportsPage from './myReportsPage.js'
import Header from './header.js'
import STORE from '../store.js'


const AppView = React.createClass({
	 getInitialState: function() {
	 	return STORE.getData()
	 },

	 componentWillMount: function() {
	 	this['LoginPage'] = LoginPage
	 	this['HomePage'] = HomePage
	 	this['RequestPage'] = RequestPage
	 	this['MyReportsPage'] = MyReportsPage
	 	this['ChooseRequestPage'] = ChooseRequestPage

	 	STORE.on('change', ()=>{
	 		this.setState(STORE.getData())
	 	})
	 },

	 render: function() {
	 	var data = Object.assign({},this.state, this.props)

	 	
	 	return (
	 		<div className='app-view' >
	 			<Header />
	 			{React.createElement(this[this.props.page], data)}
	 		</div>
	 	)
 	}
})

export default AppView