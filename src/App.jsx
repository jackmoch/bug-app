'use strict';

const React = require('react')
const ReactDOM = require('react-dom')

const BugList = require('./BugList')

ReactDOM
	.render(
    <BugList />,
    document.getElementById('main')
	)
