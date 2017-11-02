import React from 'react'
import ACTIONS from '../actions.js'
import User from '../models/userModel.js'

const MyReportsPage = React.createClass({
	componentWillMount: function() {
		ACTIONS.fetchReports({
			user: User.getCurrentUser().id
		})
	},

	 render: function() {
	 	var reports = this.props.myReports
	 	var processingReports = this.props.myReports.filter(
	 		mod => mod.get('status') === 'processing'
	 		)
	 	var finishedReports = this.props.myReports.filter(
	 		mod => mod.get('status') !== 'processing'
	 		)
	 	return (
	 		<div className='my-reports-page' >
	 			<ReportColumn reports={processingReports} />
	 			<ReportColumn reports={finishedReports} />
	 		</div>
	 	)
 	}
})

const ReportColumn = React.createClass({
	 render: function() {
	 	return (
	 		<div className='report-column' >
	 			{this.props.reports.map(rep => <Report report={rep} />)}
	 		</div>
	 	)
 	}
})

const Report = React.createClass({
	 render: function() {
	 	var status = this.props.report.get('status')
	 	var color = 'blue'
	 	if (status === 'complete') { 
	 		color = 'green'
	 	}
	 	if (status === 'aborted') {
	 		color = 'red'
	 	}

	 	return (
	 		<div className={color + ' report card darken-1'}>
	 		  <div className="card-content white-text">
	 			<span className="card-title">{this.props.report.get('nickname')}</span>
	 			<p>report type: {this.props.report.get('reportType')}</p>
	 			<p>status: {this.props.report.get('status')}</p>
	 		  </div>
	 		</div>
	 	)
 	}
})

export default MyReportsPage
