import React from 'react';

class Projects extends React.Component {
	render() {
		return (
			<section id="projects">
				<div className="container">
					<div className="row">
						<div id="collectstor-website" className="project-item left clearfix">
							<div className="col-sm-5 image">
								<img src="assets/img/collectstor-website-macbook-silver.png" alt="Collectstor website" />
							</div>{/* .col-sm-5 */}

							<div className="col-sm-7 text">
								<img src="assets/img/collectstor-logo-inline.png" alt="Collectstor logo" id="collectstor-logo" className="img-responsive project-logo" />
								<p>Collectstor is a platform for collectors of all things to socialize, explore, and showcase their own collections.</p>
								<p>
									<a href="https://collectstor.com" target="_blank">Visit website and start showcasing <i className="fa fa-external-link"></i></a>
								</p>
							</div>{/* .col-sm-7 */}
						</div>{/* .project-item .left */}
					</div>

					<div className="row">
						<div id="collectstor-app" className="project-item right clearfix">
							<div className="col-sm-5 col-sm-push-7 image">
								<img src="assets/img/collectstor-app-iphone6s.png" alt="Collectstor iOS app" />
							</div>{/* .col-sm-5 */}

							<div className="col-sm-7 col-sm-pull-5 text">
								<img src="assets/img/collectstor-app-icon.png" alt="Collectstor app icon" id="collectstor-app-icon" className="img-responsive app-icon" />
								<p>
									The Collectstor iPhone app is also available.<br />
									Now you can showcase and share collections on the go.
								</p>
								<p>
									<a href="https://itunes.apple.com/us/app/collectstor-showcasing-collections/id1044554718" target="_blank">Download on the App Store <i className="fa fa-apple"></i></a>
								</p>
							</div>{/* .col-sm-7 */}
						</div>{/* .project-item .left */}
					</div>

					{/*}
					<div id="collectstor-website" className="project-item left clearfix">
						<div className="image">
							<img src="assets/img/collectstor-website-macbook-silver.png" alt="Collectstor website" className="img-responsive" />
						</div>
						<div className="text">
							<img src="assets/img/collectstor-logo-inline.png" alt="Collectstor logo" id="collectstor-logo" className="img-responsive project-logo" />
							<p>Collectstor is a platform for collectors of all things to socialize, explore, and showcase their own collections.</p>
							<p>
								<a href="https://collectstor.com" target="_blank">Visit website and start showcasing</a>
							</p>
						</div>
					</div>{/* .project-item */}
					{/*
					<div id="collectstor-app" className="project-item right clearfix">
						<div className="image">
							<img src="assets/img/collectstor-app-iphone6s.png" alt="Collectstor iOS app" className="img-responsive" />
						</div>
						<div className="text">
							<img src="assets/img/collectstor-app-icon.png" alt="Collectstor app icon" id="collectstor-app-icon" className="img-responsive app-icon" />
							<p>
								The Collectstor iPhone app is also available.<br />
								Now you can showcase and share collections on the go.
							</p>
							<p>
								<a href="https://itunes.apple.com/us/app/collectstor-showcasing-collections/id1044554718" target="_blank">Download on the App Store <i className="fa fa-apple"></i></a>
							</p>
						</div>
					</div>{/* .project-item */}

				</div>
			</section>
		)
	}
}

export default Projects;