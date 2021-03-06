import React from 'react';

class Hero extends React.Component {
	render() {
		return (
			<section id="top" className="sections">
				<div>
					<h1>Robin Roy Julius</h1>
					
					<div className="specialty">
						<h2>UI / UX</h2>
						<h2>Full Stack</h2>
						<h2>Minimalist</h2>
					</div>{/* #specialty */}

					<p className="links divider divider-before">
						<a href="#projects">What I have worked on</a>
						<a href="#skill-set">What I can do</a>
						<a href="#contact">Say hi</a>
					</p>{/* .links */}
				</div>

				<div className="scroll-for-more">
					<a href="#projects" className="scroll-down"><i className="fa fa-long-arrow-down"></i> Would you like to know more?</a>
				</div>{/* .scroll-for-more */}
			</section>
		)
	}
}

export default Hero;