import React from 'react';

class Projects extends React.Component {
	render() {
		return (
			<section id="projects">
				<div className="container">
					<div className="image">
						<img src="assets/img/collectstor-website-macbook-silver.png" alt="Collectstor website" className="img-responsive" />
					</div>
					<div className="text">
						<img src="assets/img/collectstor-logo-inline.png" alt="Collectstor logo" className="img-responsive" />
						<p>Collectstor is a platform for collectors of all things to socialize, explore, and showcase their own collections.</p>
						<p>
							<a href="https://collectstor.com" target="_blank">Visit website and start showcasing</a>
						</p>
					</div>
				</div>
			</section>
		)
	}
}

export default Projects;