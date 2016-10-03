'use strict';

const express = require('express')
const { json } = require('body-parser')

const app = express()
const port = process.env.PORT || 3000

app.set('port', port)

app.use(express.static('static'))
app.use(json())

const bugData = [
	{id: 1, status: 'Open', priority: 'P2', owner: 'Ravan', title: 'App crashes on open'},
	{id: 2, status: 'New',priority: 'P2', owner: 'Eddied', title: 'Misaligned border on panel'}
]

app.get('/api/bugs', (req, res) => {
	res.json(bugData)
})

app.post('/api/bugs/', (req, res) => {
	console.log(req.body)
	const newBug = req.body
	newBug.id = bugData.length + 1
	bugData.push(newBug)
	res.json(bugData)
})

app.listen(port, () => {
	console.log(`Listening on port ${port}`)
})