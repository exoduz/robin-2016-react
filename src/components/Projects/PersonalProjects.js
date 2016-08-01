import React from 'react';

class PersonalProjects extends React.Component {
	render() {
		return(
			<div className="container divider-before">
				<div className="row">
					<div className="col-sm-4">
						<div className="card">
							<h3>Robin's Website (mid 2016)</h3>
							<p>After studying ReactJS for a few weeks, I decided to take this opportunity to change my personal site from WordPress to ReactJS.</p>
							<p>
								ReactJS
								jQuery
								Webpack
							</p>
							<p>
								<a href="https://github.com/exoduz/last-cigarette" target="_blank">Download source on Github <i className="fa fa-github"></i></a>
							</p>
						</div>{/* .card */}
					</div>{/* .col-sm-4 */}
					<div className="col-sm-4">
						<div className="card">
							<h3>Robin's Website (late 2015)</h3>
							<p>After studying ReactJS for a few weeks, I decided to take this opportunity to change my personal site from WordPress to ReactJS.</p>
							<p>
								ReactJS
								jQuery
								Webpack
							</p>
							<p>
								<a href="https://collectstor.com" target="_blank">Visit website and start showcasing <i className="fa fa-external-link"></i></a><br />
								<a href="https://github.com/exoduz/last-cigarette" target="_blank">Download source on Github <i className="fa fa-github"></i></a>
							</p>
						</div>{/* .card */}
					</div>{/* .col-sm-4 */}
					<div className="col-sm-4">
						<div className="card">
							<h3>Jerry's Portfolio Website</h3>
							<p>Originally this was written in vanilla PHP, but I was on a roll so I decided to also rewrite it in ReactJS.</p>
							<p>
								ReactJS
								jQuery
								Webpack
							</p>
							<p>
								<a href="https://collectstor.com" target="_blank">Visit website and start showcasing <i className="fa fa-external-link"></i></a><br />
								<a href="https://github.com/exoduz/last-cigarette" target="_blank">Download source on Github <i className="fa fa-github"></i></a>
							</p>
						</div>{/* .card */}
					</div>{/* .col-sm-4 */}
				</div>
			</div>
		)
	}
}

export default PersonalProjects;