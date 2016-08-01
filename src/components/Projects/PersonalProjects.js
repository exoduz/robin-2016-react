import React from 'react';

class PersonalProjects extends React.Component {
	_data() {
		const data = {

		}

		return data;
	}

	render() {
		return(
			<section id="personal-projects">
				<div className="container">
					<div className="row">
						<div className="col-sm-4">
							<div className="card">
								<img src="assets/img/robinjulius-2016-project-icon.png" alt="Robin Julius 2016 website icon" className="project-icon img-responsive" />
								<h3>Robin's Website (mid 2016)</h3>
								<p>Taking a minimalist and more open approach, I decided to rewrite my website to be a lot simpler.</p>
								<p>
									<span className="coding-language">ReactJS</span>
									<span className="coding-language">jQuery</span>
									<span className="coding-language">Webpack</span>
								</p>
								<p>
									<a href="https://github.com/exoduz/robin-2016-react" target="_blank">Download source on Github <i className="fa fa-github"></i></a>
								</p>
							</div>{/* .card */}
						</div>{/* .col-sm-4 */}
						<div className="col-sm-4">
							<div className="card">
								<img src="assets/img/robinjulius-2015-project-icon.png" alt="Robin Julius 2016 website icon" className="project-icon img-responsive" />
								<h3>Robin's Website (late 2015)</h3>
								<p>After studying ReactJS for a few weeks, I decided to take this opportunity to change my personal site from WordPress to ReactJS.</p>
								<p>
									<span className="coding-language">ReactJS</span>
									<span className="coding-language">jQuery</span>
									<span className="coding-language">Webpack</span>
								</p>
								<p>
									<a href="https://robinjulius.com/work/robin-2015" target="_blank">Visit website <i className="fa fa-external-link"></i></a><br />
									<a href="https://github.com/exoduz/robin-react" target="_blank">Download source on Github <i className="fa fa-github"></i></a>
								</p>
							</div>{/* .card */}
						</div>{/* .col-sm-4 */}
						<div className="col-sm-4">
							<div className="card">
								<img src="assets/img/jerryyeoh-2016-project-icon.png" alt="Jerry Yeoh 2016 website icon" className="project-icon img-responsive" />
								<h3>Jerry's Portfolio Website</h3>
								<p>Originally this was written in vanilla PHP, but I was on a roll so I decided to also rewrite it in ReactJS.</p>
								<p>
									<span className="coding-language">ReactJS</span>
									<span className="coding-language">jQuery</span>
									<span className="coding-language">Webpack</span>
								</p>
								<p>
									<a href="https://robinjulius.com/work/jerry-react" target="_blank">Visit website <i className="fa fa-external-link"></i></a><br />
									<a href="https://github.com/exoduz/jerry-react" target="_blank">Download source on Github <i className="fa fa-github"></i></a>
								</p>
							</div>{/* .card */}
						</div>{/* .col-sm-4 */}
					</div>{/* .row */}
				</div>{/* .container */}
			</section>
		)
	}
}

export default PersonalProjects;