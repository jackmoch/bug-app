'use strict';

const bugs = [
	{id: 1, status: 'Open', priority: 'P2', owner: 'Ravan', title: 'App crashes on open'},
	{id: 2, status: 'New',priority: 'P2', owner: 'Eddied', title: 'Misaligned border on panel'}
]

const BugFilter = React.createClass({
	render: function() {
		return(
			<div>Will be a filter bugs</div>
		)
	}
})

const BugRow = React.createClass({
	render: function() {
		return (
			<tr>
				<td>{this.props.bug.id}</td>
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
				<BugRow key={bug.id} bug={bug}/>
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

const BugAdd = React.createClass({

	render: function() {
		return(
			<div>Will be a form to add bugs</div>
		)
	}
})

const BugList = React.createClass({

	getInitialState: function() {
	  return {bugs: bugs}
	},

	testNewBug: function() {
		const nextId = this.state.bugs.length + 1
		this.addBug({id: nextId, priority: 'P2', status:'New', owner:'Pieta', title:'Warning on console'})
	},

	addBug: function(bugObj) {
		const bugsModified = this.state.bugs.slice()
		bugsModified.push(bugObj)
		this.setState({bugs: bugsModified})
	},
 
	render: function() {
		return(
			<div>
				<h1>Bug Tracker</h1>
				<BugFilter />
				<hr />
				<BugTable bugs={this.state.bugs} />
				<hr />
				<BugAdd />
				<button onClick={this.testNewBug}>Test</button>
			</div>
		)
	}
})

ReactDOM
	.render(
    <BugList />,
    document.getElementById('main')
	)
