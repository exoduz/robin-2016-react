import React from 'react';

import Social from './Social';

class Contact extends React.Component {
	render() {
		return (
			<section id="contact">
				<div className="container">
					<h2 className="section-heading divider-after">Say hi</h2>
					<div className="contact-email">
						<a href="mailto:me@robinjulius.com">me@robinjulius.com</a>
					</div>{/* .contact-email */}
					<Social />
				</div>{/* .container */}
			</section>
		)
	}
}

export default Contact;