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
			<div>
				<form name="bugAdd">
					<input type="text" name="owner" placeholder="Owner" />
					<input type="text" name="title" placeholder="Title" />
					<button onClick={this.handleSubmit}>Add Bug</button>
				</form>
			</div>
		)
	},

	handleSubmit: function(e) {
		e.preventDefault()
		const form = document.forms.bugAdd
		this.props.addBug({owner: form.owner.value, title: form.title.value, status: "New", priority: "P1"})
		form.owner.value = ""
		form.title.value = ""
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
				const bugsModified = this.state.bugs.concat(bugObj)
				this.setState({bugs: bugsModified})
			}.bind(this),
			error: function (xhr, status, err) {
				console.log('Error adding bug:', err)
			}
		})

		const bugsModified = this.state.bugs.slice()
		bugObj.id = this.state.bugs.length + 1
		bugsModified.push(bugObj)
		this.setState({bugs: bugsModified})
	},

	componentDidMount: function() {
		$.ajax('/api/bugs').done(function(data) {
			this.setState({bugs: data})
		}.bind(this))
	},
 
	render: function() {
		return(
			<div>
				<h1>Bug Tracker</h1>
				<BugFilter />
				<hr />
				<BugTable bugs={this.state.bugs} />
				<hr />
				<BugAdd addBug={this.addBug} />
			</div>
		)
	},
})

ReactDOM
	.render(
    <BugList />,
    document.getElementById('main')
	)
