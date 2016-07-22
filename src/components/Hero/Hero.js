import React from 'react';

class Hero extends React.Component {
	render() {
		return (
			<section id="hero">
				<div>
					<h1>Robin Roy Julius</h1>
					<h2>
						<span>UI / UX</span>
						<span>Front End</span>
						<span>Full Stack</span>
						<span>Minimalist</span>
					</h2>
					<p className="more">
						<a href="#">What I have worked on</a>
						<a href="#">What I can do</a>
						<a href="#">Say hi</a>
					</p>
				</div>
				<div className="scroll-for-more">
					<a href="#"><i className="fa fa-long-arrow-down"></i> Would you like to know more?</a>
				</div>
			</section>
		)
	}
}

export default Hero;