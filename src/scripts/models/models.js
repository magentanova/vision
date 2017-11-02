import Backbone from 'backbone'

export const Report = Backbone.Model.extend({
	urlRoot: '/api/report',
	idAttribute: '_id'
})

export const ReportCollection = Backbone.Collection.extend({
	url: '/api/report',
	idAttribute: '_id',
	model: Report
})