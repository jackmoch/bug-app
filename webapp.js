'use strict';

const express = require('express')
const { json } = require('body-parser')
const { MongoClient } = require('mongodb')

const app = express()
let db
const port = process.env.PORT || 3000

app.set('port', port)

app.use(express.static('static'))
app.use(json())

app.get('/api/bugs', (req, res) => {
	db.collection('bugs').find().toArray(function(err, docs) {
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

MongoClient.connect('mongodb://localhost/bugs', function(err, dbConnection) {
	db = dbConnection
	const server = app.listen(port, () => {
		console.log(`Listening on port ${port}`)
	})
})