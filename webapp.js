'use strict';

const express = require('express')
const { json } = require('body-parser')
const { MongoClient, ObjectID } = require('mongodb')

const app = express()
let db
const port = process.env.PORT || 3000

app.set('port', port)

app.use(express.static('static'))
app.use(json())

app.get('/api/bugs', (req, res) => {
	console.log('Query:', req.query)
	const filter = {}
	if (req.query.priority) {
		filter.priority = req.query.priority
	}
	if (req.query.status) {
		filter.status = req.query.status
	}

	db.collection('bugs').find(filter).toArray(function(err, docs) {
		res.json(docs)
	})
})

app.post('/api/bugs/', (req, res) => {
	const newBug = req.body
	db.collection('bugs').insertOne(newBug, (err, result) => {
		const newId = result.insertedId
		db.collection('bugs').find({_id: newId}).next((err, doc) => {
			res.json(doc)
		})
	})
})

app.get('/api/bugs/:id', (req, res) => {
	db.collection('bugs').findOne({_id: ObjectID(req.params.id)}, function(err, bug) {
		res.json(bug)
	})
})

app.put('/api/bugs/:id', (req, res) => {
	const bug = req.body
	console.log('Modifying bug:', req.params.id, bug)
	const oid = ObjectID(req.params.id)
	db.collection('bugs').updateOne({_id: oid}, bug, function(err, result) {
		db.collection('bugs').find({_id: oid}).next(function(err, doc) {
			res.json(doc)
		})
	})
})

MongoClient.connect('mongodb://localhost/bugs', function(err, dbConnection) {
	db = dbConnection
	const server = app.listen(port, () => {
		console.log(`Listening on port ${port}`)
	})
})