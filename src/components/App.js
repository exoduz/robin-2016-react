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
require('../css/normalize.css');
require('../../node_modules/bootstrap/dist/css/bootstrap.css');
require('../../node_modules/font-awesome/css/font-awesome.css');
require('../css/main.css');
require('../css/print.css');

/**
 React helpers
*/


/**
 React components
*/
import Hero from './Hero/Hero';


class App extends React.Component {
	render() {
		return (
			<div>
				<Hero />
			</div>
		)
	}
}

export default App;
