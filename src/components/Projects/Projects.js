import React from 'react';

import PersonalProjects from './PersonalProjects'

class Projects extends React.Component {
	render() {
		return (
			<section id="projects">
				<h2 className="section-heading divider-after">What I have worked on</h2>

				<div className="container">
					<div className="row">
						<div id="collectstor-website" className="project-item left clearfix">
							<div className="col-sm-5 image">
								<img src="assets/img/collectstor-website-macbook-silver.png" alt="Collectstor website" />
							</div>{/* .col-sm-5 */}

							<div className="col-sm-7 text divider-after">
								<img src="assets/img/collectstor-logo-inline.png" alt="Collectstor logo" id="collectstor-logo" className="img-responsive project-logo" />
								<p>Collectstor is a platform for collectors of all things to socialize, explore, and showcase their own collections.</p>
								<p>
									<a href="https://collectstor.com" target="_blank">Visit website and start showcasing <i className="fa fa-external-link"></i></a>
								</p>
							</div>{/* .col-sm-7 */}
						</div>{/* .project-item .left */}
					</div>{/* .row */}

					<div className="row">
						<div id="collectstor-app" className="project-item right clearfix">
							<div className="col-sm-6 col-sm-push-6 image">
								<img src="assets/img/collectstor-app-iphone6s.png" alt="Collectstor iOS app" />
							</div>{/* .col-sm-6 .col-sm-push-6 */}

							<div className="col-sm-6 col-sm-pull-6 text divider-after">
								<img src="assets/img/collectstor-app-icon.png" alt="Collectstor app icon" id="collectstor-app-icon" className="img-responsive app-icon" />
								<p>
									The Collectstor iPhone app is also available.<br />
									Now you can showcase and share collections on the go.
								</p>
								<p>
									<a href="https://itunes.apple.com/us/app/collectstor-showcasing-collections/id1044554718" target="_blank">Download on the App Store <i className="fa fa-apple"></i></a>
								</p>
							</div>{/* .col-sm-6 .col-sm-pull-6 */}
						</div>{/* .project-item .left */}
					</div>{/* .row */}
				</div>{/* .container */}

				<div className="row-grey">
					<div className="container">
						<div className="row">
							<div id="last-cigarette-app" className="project-item left clearfix">
								<div className="col-sm-6 image">
									<img src="assets/img/last-cigarette-app-iphone6s-angled.png" alt="Last Cigarette iOS app" />
								</div>{/* .col-sm-6 */}

								<div className="col-sm-6 text divider-after">
									<img src="assets/img/last-cigarette-app-icon.png" alt="Last Cigarette app icon" id="last-cigarette-app-icon" className="img-responsive app-icon" />
									<p>A simple counter to track the time you last quit smoking. It shows information such as the duration, money saved and cigarettes not smoked.</p>
									<p>
										<a href="https://itunes.apple.com/us/app/last-cigarette/id1088134074" target="_blank">Download on the App Store <i className="fa fa-apple"></i></a><br />
										<a href="https://github.com/exoduz/last-cigarette" target="_blank">Download source on Github <i className="fa fa-github"></i></a>
									</p>
								</div>{/* .col-sm-6 */}
							</div>{/* .project-item .left */}
						</div>{/* .row */}
					</div>{/* .container */}

					<PersonalProjects />
				</div>{/* .row-grey */}
			</section>
		)
	}
}

export default Projects;