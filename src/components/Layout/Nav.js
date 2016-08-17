import React from 'react';

class Nav extends React.Component {
	render() {
		return (
			<section id="nav">
				<nav id="vertical-nav">
					<ul>
						<li>
							<a href="#top" data-number="1">
								<span className="nav-dot"></span>
								<span className="nav-label">Top</span>
							</a>
						</li>
						<li>
							<a href="#projects" data-number="2">
								<span className="nav-dot"></span>
								<span className="nav-label">What I have worked on</span>
							</a>
						</li>
						<li>
							<a href="#skill-set" data-number="3">
								<span className="nav-dot"></span>
								<span className="nav-label">What I can do</span>
							</a>
						</li>
						<li>
							<a href="#contact" data-number="4">
								<span className="nav-dot"></span>
								<span className="nav-label">Say hi</span>
							</a>
						</li>
					</ul>
				</nav>
				<a className="nav-trigger img-replace">Open navigation<span></span></a>
			</section>
		)
	}
}

export default Nav;