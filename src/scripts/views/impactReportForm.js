import React from 'react'
import ACTIONS from '../actions.js'

const ImpactReportForm = React.createClass({
	handleSubmit: function(e) {
		e.preventDefault()
		var els = e.target.elements,
			data = {}
		for (var i = 0; i < els.length; i ++) {
			data[els[i].id] = els[i].value
		}
		data.reportType = "impact report"
		ACTIONS.createReport(data)
	},

	 render: function() {
	 	return (
	 		<div className="form container">
	 			<h4>Impact Report Builder</h4>
	 			<p>An Impact Report is a post-game analysis of an ad campaign that attempted to increase the audience of some form of media, be it a linear television program, an app, a web site, a game or something else. This report will assess the efficacy of that campaign primarily by comparing the viewership rate -- the likelihood that someone watched the program, opened the app, played the game, etc. -- among those exposed to the ad campaign with the viewership rate among those not exposed to the campaign.</p>
		 		<form onSubmit={this.handleSubmit} className="row">
			 		<div className="input-field">
			 		  <input id="nickname" type="text" className="validate"/>
			 		  <label className="active" htmlFor="nickname">Enter a descriptive nickname for your report.</label>
			 		</div>
			 		<div className="input-field">
			 		  <input id="programId" type="text" className="validate"/>
			 		  <label className="active" htmlFor="programId">Enter the program's id. It should look like this: "ba0000000039873"</label>
			 		</div>
			 		<div className="input-field">
			 		  <input id="windowStart" type="date" className="validate"/>
			 		  <label className="active" htmlFor="windowStart">Choose the start of the viewership window.</label>
			 		</div>
			 		<div className="input-field">
			 		  <input id="windowEnd" type="date" className="validate"/>
			 		  <label className="active" htmlFor="windowEnd">Choose the end of the viewership window.</label>
			 		</div>
			 		<div className="input-field">
			 		  <input id="campaignId" type="date" className="validate"/>
			 		  <label className="active" htmlFor="campaignId">Enter the campaign ID. Should be a four-digit number.</label>
			 		</div>
			 		<div className="input-field">
			 		  <input id="campaignStart" type="date" className="validate"/>
			 		  <label className="active" htmlFor="campaignStart">Choose the start date of the ad campaign.</label>
			 		</div>
			 		<div className="input-field">
			 		  <input id="campaignEnd" type="date" className="validate"/>
			 		  <label className="active" htmlFor="campaignEnd">Choose the end date of the ad campaign.</label>
			 		</div>
	 			<button className="waves-effect waves-light btn" type="submit">submit</button>
	 			</form>
	 		</div>
	 	)
 	}
})

export default ImpactReportForm