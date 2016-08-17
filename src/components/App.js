import React from 'react';
import ReactDOM from 'react-dom';

/**
 3rd party scripts
*/
import $ from 'jquery';
window.jQuery = window.$ = $;
require('bootstrap');
require('../../node_modules/waypoints/lib/jquery.waypoints.js');
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
 React components
*/
import Nav from './Layout/Nav';
import Hero from './Hero/Hero';
import Projects from './Projects/Projects';
import SkillSet from './Resume/SkillSet';
import Contact from './Contact/Contact';
import Footer from './Layout/Footer';


class App extends React.Component {
	render() {
		return (
			<div>
				<Nav />
				<Hero />
				<Projects />
				<SkillSet />
				<Contact />
				<Footer />
			</div>
		)
	}
}

export default App;
