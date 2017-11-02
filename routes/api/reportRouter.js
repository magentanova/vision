let Router = require('express').Router;
const reportRouter = Router()

let Report = require('../../db/schemas/reportSchema.js').Report

reportRouter
	.get(`/report`, function(req, res){
		Report.find(req.query , "-password", function(err, results){
			if(err) return res.json(err) 
		res.json(results)
		})
	})

	.get(`/report/:_id`, function(req, res){
		Report.findById(req.params._id, "-password", function(err, record){
			if(err || !record ) return res.json(err) 
			res.json(record)
		})
	})

	.post(`/report`, function(req,res) {
		let newRecord = new Report(req.body)
		newRecord.save(function(err) {
			if (err) {
				console.log(err)
				res.status(500).send(err)
			}
			else {  
				res.json(newRecord)
				setTimeout(function() {
					Report.findByIdAndUpdate(newRecord._id, {
						status: Math.random() < .3 ? 'aborted' : 'complete'
					}, function(err,record) {
						console.log(err,record)
					})
				}, 5 * 100 + Math.random() * 100 * 60 * 2)

			}
		})
	})

	.put(`/report/:_id`, function(req, res){
		Report.findByIdAndUpdate(req.params._id, req.body, function(err, record){
			if (err) {
				res.status(500).send(err)
			}
			else if (!record) {
				res.status(400).send(`no record found with that id`)
			}
			else {
				res.json(req.body)
			}
		})
	})

	.delete(`/report/:_id`, function(req, res){
		Report.remove({ _id: req.params._id}, (err) => {
			if(err) return res.json(err)
			res.json({
				msg: `record ${req.params._id} successfully deleted`,
				_id: req.params._id
			})
		})
	})

module.exports = reportRouter
