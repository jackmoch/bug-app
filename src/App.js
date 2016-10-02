'use strict';

const BugFilter = React.createClass({
	render: function() {
		return (
			<div>A way to filter bugs</div>
		)
	}
})

const BugTable = React.createClass({
	render: function() {
		return(
			<div>Will be a table bugs</div>
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
