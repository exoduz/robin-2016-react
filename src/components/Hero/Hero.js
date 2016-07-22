import React from 'react';

class Hero extends React.Component {
	render() {
		return (
			<section id="hero">
				<div className="main-section">
					<h1>Robin Roy Julius</h1>
					
					<div className="skills-and-interests">
						<h2>UI / UX</h2>
						<h2>Front End</h2>
						<h2>Full Stack</h2>
						<h2>Minimalist</h2>
					</div>
					<p className="more">
						<a href="#">What I have worked on</a>
						<a href="#">What I can do</a>
						<a href="#">Say hi</a>
					</p>

					<div id="social-icons">
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
					</div>{/* #social-icons */}
				</div>

				<div className="scroll-for-more">
					<a href="#"><i className="fa fa-long-arrow-down"></i> Would you like to know more?</a>
				</div>{/* .scroll-for-more */}
			</section>
		)
	}
}

export default Hero;