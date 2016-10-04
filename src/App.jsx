'use strict';

const React = require('react');
const ReactDOM = require('react-dom');
const Router = require('react-router').Router;
const Route = require('react-router').Route;
const Redirect = require('react-router').Redirect;
const hashHistory = require('react-router').hashHistory

const BugList = require('./BugList');
const BugEdit = require('./BugEdit')

const NoMatch = React.createClass({
  render: function() {
    return (
      <h2>No match for the route</h2>
    );
  }
});

ReactDOM.render(
  (
    <Router history={hashHistory}>
      <Route path="/bugs" component={BugList} />
      <Route path="/bugs/:id" component={BugEdit} />
      <Redirect from="/" to="/bugs" />
      <Route path="*" component={NoMatch} />
    </Router>
  ),
  document.getElementById('main')
);