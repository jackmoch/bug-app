'use strict';

const React = require('react')
const ReactDOM = require('react-dom')

const BugFilter = React.createClass({
	render: function() {
		return(
			<button onClick={this.submit}>Test Filter</button>
		)
	},

	submit: function(e) {
		this.props.submitHandler({priority: 'P1'})
	}
})

module.exports = BugFilter