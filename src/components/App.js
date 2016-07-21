import React from 'react';
import ReactDOM from 'react-dom';

/**
 3rd party scripts
*/
import $ from 'jquery';
window.jQuery = window.$ = $;
require('bootstrap');
require('../js/app.js');

/**
 CSS
*/
require('../../node_modules/bootstrap/dist/css/bootstrap.css');
require('../../node_modules/font-awesome/css/font-awesome.css');
require('../css/main.css');

/**
 React helpers
*/


/**
 React components
*/


class App extends React.Component {
	render() {
		return (
			<div>
				<button className="btn btn-success">Hello</button>
				<i className="fa fa-github"></i>
			</div>
		)
	}
}

export default App;
