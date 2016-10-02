'use strict';

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
				<td>{this.props.id}</td>
				<td>{this.props.status}</td>
				<td>{this.props.priority}</td>
				<td>{this.props.owner}</td>
				<td>{this.props.title}</td>
			</tr>
		)
	}
})

const BugTable = React.createClass({
	render: function() {
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
					<BugRow id={1} priority="P1" status="Open" owner="Ravan" title="App crashes on open"  />
					<BugRow id={2} priority="P2" status="New" owner="Eddie" title="Misaligned border on panel"  />
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
	render: function() {
		return(
			<div>
				<h1>Bug Tracker</h1>
				<BugFilter />
				<hr />
				<BugTable />
				<hr />
				<BugAdd />
			</div>
		)
	}
})

ReactDOM
	.render(
    <BugList />,
    document.getElementById('main')
	)
