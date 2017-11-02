import React from 'react'

const ChooseRequestPage = React.createClass({
	 render: function() {
	 	return (
	 		<div className='choose-request-page' >
	 			<ChooseForm />
	 		</div>
	 	)
 	}
})


const ChooseForm = React.createClass({
	handleSubmit: function(e) {
		e.preventDefault()
		location.hash = `request/${e.target.reportType.value}`
	},

	 render: function() {
	 	return (
	 		<form onSubmit={this.handleSubmit} className="choose-form col">
	 			<div className="row">
					<select name="reportType" style={{display:'block'}} type="text" className="validate">
						<option value="impact-report">impact report</option>
						<option value="audience-pull">audience list</option>
						<option value="audience-profile">audience profile</option>
					</select>
					<label className="active" htmlFor="first_name">Select report type</label>
	 			</div>
	 			<button className="waves-effect waves-light btn" type="submit">continue</button>
	 		</form>
	 	)
 	}
})

export default ChooseRequestPage