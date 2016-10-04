'use strict';

const React = require('react')
const ReactDOM = require('react-dom')

const BugFilter = React.createClass({
	render: function() {
		return(
			<div>
				<h3>Filter</h3>
				Status:
				<select value={this.state.status} onChange={this.onChangeStatus}>
					<option value="">Any</option>
					<option value="New">New</option>
					<option value="Open">Open</option>
					<option value="Closed">Closed</option>
				</select>
				<br/>
				Priority:
				<select value={this.state.priority} onChange={this.onChangePriority}>
					<option value="">Any</option>
					<option value="P1">P1</option>
					<option value="P2">P2</option>
					<option value="P3">P3</option>
				</select>
				<br/>
				<button onClick={this.submit}>Apply</button>
			</div>
		)
	},

	getInitialState: function() {
		const initFilter = this.props.initFilter
		return { status: initFilter.status, priority: initFilter.priority}
	},

	onChangeStatus: function(e) {
		this.setState({status: e.target.value})
	},

	onChangePriority: function(e) {
		this.setState({priority: e.target.value})
	},

	submit: function(e) {
		const newFilter = {}
		if (this.state.priority) {
			newFilter.priority = this.state.priority
		}
		if (this.state.status) {
			newFilter.status = this.state.status
		}
		this.props.submitHandler(newFilter)
	}
})

module.exports = BugFilter