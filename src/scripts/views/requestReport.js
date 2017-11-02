import React from 'react'
import ImpactReportForm from './impactReportForm.js'

const RequestPage = React.createClass({
	 render: function() {
	 	console.log(this.props.reportType)
	 	var forms = {
	 		'impact-report': <ImpactReportForm />
	 		// 'audience-pull': AudiencePullForm,
	 		// 'audience-profile': AudienceProfileForm
	 	}
	 	return (
	 		<div className='' >
	 			{forms[this.props.reportType]}
	 		</div>
	 	)
 	}
})



export default RequestPage
