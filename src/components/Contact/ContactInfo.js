import React from 'react';

import Social from './Social';

class ContactInfo extends React.Component {
	render() {
		return (
			<div id="contact-info">
				<div className="container">
					<h2 className="section-heading divider-after">Say hi</h2>
					<div className="contact-email">
						<a href="mailto:me@robinjulius.com">me@robinjulius.com</a>
					</div>{/* .contact-email */}
					<Social />
				</div>{/* .container */}
			</div>
		)
	}
}

export default ContactInfo;