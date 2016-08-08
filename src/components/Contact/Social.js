import React from 'react';

class Social extends React.Component {
	render() {
		return (
			<div id="social">
				<p>Some other ways to reach me...</p>
				<a href="https://linkedin.com/in/robinjulius" target="_blank">
					<i className="fa fa-linkedin"></i>
				</a>
				<a href="https://github.com/exoduz" target="_blank">
					<i className="fa fa-github"></i>
				</a>
				<a href="https://twitter.com/exo_duz" target="_blank">
					<i className="fa fa-twitter"></i>
				</a>
				<a href="https://instagram.com/exo_duz" target="_blank">
					<i className="fa fa-instagram"></i>
				</a>
			</div>
		)
	}
}

export default Social;