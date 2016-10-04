'use strict';

const React = require('react')
const ReactDOM = require('react-dom')
const $ = require('jquery')

const BugFilter = require('./BugFilter')
const BugAdd = require('./BugAdd')

const BugRow = React.createClass({
	render: function() {
		return (
			<tr>
				<td>{this.props.bug._id}</td>
				<td>{this.props.bug.status}</td>
				<td>{this.props.bug.priority}</td>
				<td>{this.props.bug.owner}</td>
				<td>{this.props.bug.title}</td>
			</tr>
		)
	}
})

const BugTable = React.createClass({
	render: function() {

		const BugNodes = this.props.bugs.map(function(bug) {
			return(
				<BugRow key={bug._id} bug={bug}/>
			)
		})

		return (
			<table>
				<thead>
					<tr>
						<th>Id</th>
						<th>Status</th>
						<th>Priority</th>
						<th>Owner</th>
						<th>Title</th>
					</tr>
				</thead>
				<tbody>
					{BugNodes}
				</tbody>
			</table>
		)
	}
})


const BugList = React.createClass({

	getInitialState: function() {
	  return {bugs: []}
	},

	addBug: function(bugObj) {

		$.ajax({
			type: 'POST',
			url: '/api/bugs',
			contentType: 'application/json',
			data: JSON.stringify(bugObj),
			success: function (data) {
				const bug = data
				const bugsModified = this.state.bugs.concat(bug)
				this.setState({bugs: bugsModified})
			}.bind(this),
			error: function (xhr, status, err) {
				console.log('Error adding bug:', err)
			}
		})
	},

	componentDidMount: function() {
		this.loadData({})
	},

	loadData: function(filter) {
		$.ajax('/api/bugs', {data: filter}).done(function(data) {
			this.setState({bugs: data})
		}.bind(this))
	},
 
	render: function() {
		return(
			<div>
				<h1>Bug Tracker</h1>
				<BugFilter submitHandler={this.loadData} initFilter={this.props.location.query} />
				<hr />
				<BugTable bugs={this.state.bugs} />
				<hr />
				<BugAdd addBug={this.addBug} />
			</div>
		)
	},
})

module.exports = BugList