import STORE from './store'
import User from './models/userModel'
import {Report, ReportCollection} from './models/models.js'

const ACTIONS = {
	createReport: function(data) {
		console.log(data)
		var reportMod = new Report(data)
		reportMod.set({
			user: User.getCurrentUser().id
		})
		reportMod.save().then(function(savedModel){
			location.hash = "my-reports"
		})
	},

	fetchReports: function(criteria) {
		var c = new ReportCollection()
		c.fetch({data: criteria}).then(function(d) {
			STORE.set({
				myReports: c
			})
		})
		
	},

	logOneIn: function(email,password) {
		User.login(email,password).then(
			(resp) => {
				console.log(resp)
				alert('good job loggin in!')
				location.hash = 'home'
			}),
			(err) => {
				console.log(err)
				alert('problem logging you in')
			}
	},

	signOneUp: function(dataObj) {
		User.register(dataObj).then(
			(resp) => {
				console.log(resp)
				ACTIONS.logOneIn(dataObj.email,dataObj.password)
			}),
			(err) => {
				console.log(err)
				alert('problem signing you up')
			}

	}
}

export default ACTIONS