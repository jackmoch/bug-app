'use strict';

const BugFilter = React.createClass({
	displayName: 'BugFilter',

	render: function () {
		return React.createElement(
			'div',
			null,
			'A way to filter bugs'
		);
	}
});

const BugTable = React.createClass({
	displayName: 'BugTable',

	render: function () {
		return React.createElement(
			'div',
			null,
			'Will be a table bugs'
		);
	}
});

const BugAdd = React.createClass({
	displayName: 'BugAdd',

	render: function () {
		return React.createElement(
			'div',
			null,
			'Will be a form to add bugs'
		);
	}
});

const BugList = React.createClass({
	displayName: 'BugList',

	render: function () {
		return React.createElement(
			'div',
			null,
			React.createElement(
				'h1',
				null,
				'Bug Tracker'
			),
			React.createElement(BugFilter, null),
			React.createElement('hr', null),
			React.createElement(BugTable, null),
			React.createElement('hr', null),
			React.createElement(BugAdd, null)
		);
	}
});

ReactDOM.render(React.createElement(BugList, null), document.getElementById('main'));